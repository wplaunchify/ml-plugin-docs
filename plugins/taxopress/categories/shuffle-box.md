# Shuffle Box

*Category from TaxoPress documentation*

---

## Create a Custom Color Scheme for Shuffle Box

**Source:** [https://taxopress.com/docs/custom-color-scheme-shuffle-box/](https://taxopress.com/docs/custom-color-scheme-shuffle-box/)

This guide will show you how to create your own color scheme for the Shuffle Box feature in the Tag Groups plugin. First, we’ll introduce the default options, and then we’ll see how to create your own custom themes.

---

## The Default Themes for Shuffle Boxes

This screenshot below shows the default design for the shuffle box.

You can also customize this one of [the default themes in Tag Groups](https://taxopress.com/docs/theming/). And there are additional default themes that are unique to Shuffle Boxes:

```
cm-shuffle-box-theme-default 
cm-shuffle-box-theme-blue
```

---

## Custom Themes for Shuffle Boxes

- In your WordPress admin area, go to “Tag Groups” then “Tag Colors”.
- Enter the CSS class name. The default is “my-own-class”.

- Choose the colors you want to use for Shuffle Box.
- Copy the CSS and add it to your theme. Add the CSS into the style.css of a child theme or you can use the Customizer.

- Take the CSS class name from the bottom of the screen. In this example, the class is “cm-shuffle-box-theme-default my-own-class”.

- Go to your post and find the Gutenberg block for your shuffle box.
- Under “Advanced Styling”, enter your class into the “div class” field.
- Save the post and your custom color scheme will appear.

If you’re using the shortcode for Shuffle Box, add this to your shortcode: 
```
div_class=“cm-shuffle-box-theme-default my-own-class”
```

---

## Hide the “not assigned” Button in Shuffle Box

**Source:** [https://taxopress.com/docs/how-do-i-hide-the-not-assigned-button-in-the-shuffle-box/](https://taxopress.com/docs/how-do-i-hide-the-not-assigned-button-in-the-shuffle-box/)

You may sometimes see a “not assigned” tab when creating a Shuffle Box layout. You can see that tab in the screenshot below. The “not assigned” group is the default group for all tags and it has the ID 0 (zero).

---

## Hide the button in the Gutenberg block

- Inside the Gutenberg block settings, find the “Groups” area.
- In the “Exclude groups” box, enter “not assigned”.

---

## Hide the button in the shortcode

- Add this parameter to the shortcode 
```
exclude=0
```

.
- If you need to exclude more groups, you join the IDs into a comma-seperated list: 
```
exclude=0,1,4
```

.

---

## Shuffle Box – Gutenberg Block

**Source:** [https://taxopress.com/docs/shuffle-box-gutenberg-block/](https://taxopress.com/docs/shuffle-box-gutenberg-block/)

The Shuffle Box is a tag cloud that allows you to filter the tags by their names or by their tag groups.

This guide will show you how to use the Gutenberg block that is available with the Shuffle Box feature.

---

## Tags and Taxonomies

#### Layout mode

Determines how the tags are arranged. In most cases you want to keep the default.

- **fitRows:** Tags appear in rows.
- **masonry:** Tags appear in a masonry layout.
- **vertical:** Tags appear vertically stacked.

#### Included taxonomies

Restrict the tags only to these taxonomies (“tag types”). Available are only taxonomies that have been activated in the Tag Groups Settings.

#### Smallest font size

Font-size in pt of the smallest tags.

#### Largest font size

Font-size in pt of the largest tags.

#### Amount of tags

Maximum amount of tags. This is the total number for the case when all filters are off (“show all”). Buttons and text search reduce this number.

Pull the slider to zero to show an unlimited number.

Note: A high number of tags will affect performance.

#### Order tags by

Which field to use for sorting the tags.

Note on using “Natural Sorting”: Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with [amount](#amount), the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

Note on random order: The order only changes when all object and page caches refresh.

#### Sort order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

#### Hide unused tags

Whether to hide or show tags that are not used by any post.

#### Prepend

Prepend to each tag name. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

#### Show the post count in the tooltip

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag. Please note that the value is the total number – not per selected group.

If you enter a custom title, this option will be unavailable.

#### Custom title for post count = 0

The custom title can be configured separately for tags that have a post count of zero. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count =1

Tooltip text when hovering the mouse over the tag. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Custom title for post count >1

The custom title can be configured separately for tags that have a post count > 1 so that you can use here plural in your text. You can use the placeholders {count} to insert the post count, {description} for the tag description and {name} for the tag name.

#### Link target

Set the “target” attribute for the links of the tags. Possible values are:

- **_blank:** open in a new tab/window
- **_self:** open in the same frame
- **_parent:** open in the parent frame
- **_top:** open in the full tab/window of this frame

In the shortcode you can also set the name of a frame.

#### Add filter to tags for multiple groups

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

#### Append to the link

Append something to each tag’s link, for example a query.

#### Use tags of the following post

Display only tags that are assigned to the post (or page) with a specified ID. If you need this option, you mostly want to “use this post”. The menu offers also some recent posts by title.

---

## Groups

#### Include groups

Tag groups that will be considered in the tag cloud.

#### Use groups of the following post

Display only groups of which at least one assigned tag is also assigned to the selectd post (or page). Matching groups will be added to the list specified by **Include groups**.

---

## Filters

#### Show input field to filter by text

Whether to show a text input field where visitors can filter tags by their names.

#### Show buttons to filter by group

Whether to show the names of the groups (included with “include”) as filter buttons.

#### Show Filter “All Groups”

Whether to a button where visitors can reset all filters by groups and show all tags.

#### Initially selected filter

Which group to use for filtering when the Shuffle Box is loaded. By default it shows all available tags of all groups. Use the ID of a group that you don’t display to start without showing any tags.

---

## Labels and Messages

#### Placeholder for text field

Placeholder for the input field of the text filter.

#### Label for “not assigned” button

Label of the button for the “not assigned” group.

#### Label for “show all” button

Label of the button to show all groups (turn off the filter by groups).

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div id

Define an ID for the enclosing <div>. Avoid identifiers that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

#### div class

Define a class for the enclosing <div>. Here you can apply some themes.

####

---

## Shuffle Box – Overview

**Source:** [https://taxopress.com/docs/shuffle-box/](https://taxopress.com/docs/shuffle-box/)

This is a feature of the Tag Groups Pro plan. The Shuffle Box is a tag cloud that allows you to filter the tags by their names or by their tag groups.

Tags are filtered live after you clicked a button or while you type, and they re-arrange with a stylish animation. Several parameters let you customize labels, included groups, sort order, amount of tags and much more. The Shuffle Box is responsive and even adjusts dynamically when you change the size of the window.

- [Click here for demos of the Shuffle Box](https://demo.taxopress.com/post-filter-dropdown-menu/).
- [Click here for the Gutenberg block options](https://taxopress.com/docs/shuffle-box-gutenberg-block/).
- [Click here for the list of shortcode parameters](https://taxopress.com/docs/shuffle-box-parameters/).

---

## How the Shuffle Box Works

Initially the Shuffle Box loads all applicable tags (according to your block options or shortcode parameters, for example the maximum amount) on the page. The filtering then works on that sample by hiding tags that don’t match the filter.

That means that the filter won’t load any news tags dynamically from the database. When you press a button or enter a text, all displayed tags are taken from the initially loaded sample that you see when the filter is off.

The maximum amount of tags that you can set in the options is therefore the total amount of tags that appear when the filter is off (that means set to “all groups”, with no search text entered). It is not the amount of tags per group.

---

## Shuffle Box Examples

The following screenshot shows a tag cloud that has been filtered by the group “Places”. We are using the parameter “append” to display the post count for each tag and we use the default theme.

The text filter can be used together with a group filter, or applied to all tags in all displayed groups:

The options allow you to use only the group filter, only the text filter, or both in combination.

---

## Shuffle Box Performance

Please note that recalculating the new tag positions after each change unavoidably affects the performance for huge numbers of tags.

Try to keep the total number of tags below 200-300. You can do so by displaying only selected groups or setting a maximum amount. If you need to display hundreds of tags, test the Shuffle Box in all common browsers.

If you have more tags and need a fast text filter, you can try the [Tag Cloud Search](https://taxopress.com/docs/tag-cloud-search-overview/), which doesn’t offer animation.

---

## Tags with Multiple Groups

If you use the same tag with various groups and want to make sure, that the tag links only to those posts that use this tag with a particular group, you need to activate an additional option.

Use the toggle switch in the Gutenberg block or in the shortcode the parameter:

```
add_premium_filter=1
```

If the resulting list is unexpectedly empty or misses posts, please try to run Maintenance.

If “all groups” is selected, the posts won’t be filtered by tag group.

Please note that the placeholder {count} (used with “prepend”, “append” and “custom_title”) always shows the *total* number of posts for each tag – not per group.

---

## Shuffle Box – Shortcode Parameters

**Source:** [https://taxopress.com/docs/shuffle-box-parameters/](https://taxopress.com/docs/shuffle-box-parameters/)

This guide shows you how to use and customize the shortcode for the Shuffle Box feature in the Tag Groups plugin.

---

## Shortcode

```
all groups
not assigned  
    Accordion Tag Cloud
Add Terms
Alphabetical List
Alphabetical Tag Cloud
Alphabetical Tag Index
Artificial Intelligence
Auto Links
Auto Terms
bbPress Topics
Categories
Create Terms
Current Post
Custom Taxonomies
Custom URL
Dandelion API
default category
Delete Terms
Delete Unused Terms
Display
Gutenberg
Hidden Terms
IBM Watson
Linked Terms
Manage Terms
Media Tags
Merge Terms
Open Calais
OpenAI
Parent Categories
Post Filter
Post List
Posts Screen
Private Taxonomies
Related Posts
Remove Terms
Rename Terms
Schedule Auto Terms
Simple Tags
Suggest Terms
Synonyms
Tag Cloud
Tag Groups
Tags
Taxonomy Archives
TaxoPress
TaxoPress Pro
Term Description
Term Meta
Term Order
Term Slugs
Terms Display
Terms for Current Post
Terms Screen
Uncategorized category
Understanding Content
WooCommerce
WooCommerce Product Categories
WooCommerce Product Tags
WordPress API
WordPress Categories
WordPress Search  

  (function(){
    const options = {
      divIdInner: 'tag-groups-shuffle-box-6a815c8315b9f_inner',
      addPremiumFilter: false,
      timeoutMilliSecs: 100,
      initialGroup: -1,
      layoutMode: 'fitRows'
    };

    if (typeof TagGroupsShuffleBox !== 'undefined' && jQuery !== 'undefined') {
            const obj = Object.create( TagGroupsShuffleBox );
      obj.init(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){
          const obj = Object.create( TagGroupsShuffleBox );
          obj.init(options);
        }, 500);
      });
    }
})()
```

---

## Example

```
all groups
not assigned  
      

  (function(){
    const options = {
      divIdInner: 'tag-groups-shuffle-box-6a815c831a9ed_inner',
      addPremiumFilter: false,
      timeoutMilliSecs: 100,
      initialGroup: -1,
      layoutMode: 'fitRows'
    };

    if (typeof TagGroupsShuffleBox !== 'undefined' && jQuery !== 'undefined') {
            const obj = Object.create( TagGroupsShuffleBox );
      obj.init(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){
          const obj = Object.create( TagGroupsShuffleBox );
          obj.init(options);
        }, 500);
      });
    }
})()
```

---

## Data Types

- **string:** A text. For identifiers that won’t be visible to visitors you often have to replace spaces with _ or -. If the string contains spaces, you need to wrap it in quotes.

- **integer:** A number without decimal places.

- **0 or 1**: 0 turns the feature off and 1 on.

---

## Parameters

### Tags or Terms

#### layout_mode

Determines how the tags are arranged.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | fitRows | layout_mode=vertical |

| option | description |
| --- | --- |
| fitRows | in horizontal rows |
| masonry | forming columns |
| vertical | a vertical list |

#### taxonomy

Restrict the tags only to these taxonomies. Available are only taxonomies that have been activated in the Settings.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of taxonomy names | Taxonomies selected in the settings under “Basics”. | taxonomy=post_tag,product_tag |

#### smallest

Font-size in pt of the smallest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 12 | smallest=12 |

#### largest

Font-size in pt of the largest tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 22 | largest=20 |

#### orderby

Which field to use for sorting.

Since WordPress doesn’t natively offer natural sort order, we have to first order them by name and then by natural sort order. If you limit the number of tags with [amount](#amount), the amount of tags is therefore determined by cutting off with “name” sorting and then sorting them with “natural”.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | name | orderby=natural |

#### order

Whether to sort the tags in ascending or descending order. Ascending order also means from oldest to newest.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | ASC | order=desc |

#### amount

Maximum amount of tags. This is the total number for the case when all filters are off (“show all”). Buttons and text search reduce this number.

Note: High numbers of tags will affect performance.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | 0 (unlimited) | amount=30 |

#### hide_empty

Whether to hide or show tags that are not assigned to any post.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (hide empty) | hide_empty=1 |

#### threshold

Set a minimum count of published posts that use a tag for this tag to appear. Posts are counted across all groups. Please also pay attention to the value of hide_empty.

| Default | Possible Values | Example |
| --- | --- | --- |
| 0 | integer | threshold=2 |

#### prepend

Prepend to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | prepend=“#” |

#### append

Append to each tag label. Can obtain the placeholder {count} that will be replaced with the post count for that tag. Please note that {count} is the total number – not per selected group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | append=“{count}” |

#### link_append

Append something to each tag’s link, for example a query.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty | link_append=“track=this” |

** Available only in the shortcode!

#### link_target

Set the “target” attribute for the links of the tags. Possible values are: _blank, _self, _parent or _top. In the shortcode you can also set the name of a frame.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string: “_blank”, “_self”, “_parent”, “_top”, or the name of a frame | empty (= opens in the same window, same as using _self) | link_target=“_blank” |

#### show_tag_count

Whether to show the number of posts as tooltip (behind the tag description) when hovering the mouse over the tag. Please note that the value is the total number – not per selected group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 (show) | show_tag_count=0 |

#### custom_title

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

If you also use custom_title_plural then the text of custom_title will be used for a post count of 1 and you can use here the singular form

| Default | Possible Values | Example |
| --- | --- | --- |
| depends on show_tag_count | string | custom_title="One post uses {name}" |

#### custom_title_zero

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of 0 (i.e. they are not used with any published post).

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_zero="No post uses {name}" |

#### custom_title_plural

tooltip when hovering the mouse over a tag; placeholders: {count} for post count, {description} for tag description, {name} for tag name

This text will be used for tags that have a post count of >1. You can use here plural forms.

| Default | Possible Values | Example |
| --- | --- | --- |
| not used | string | custom_title_plural="{count} posts use {name}" |

#### add_premium_filter

When you use the premium plugin, additional query parameters in the links make sure that we can distinguish between the same tag that is used in different groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 0 (no filter) | add_premium_filter=1 |

#### tags_post_id

Display only tags that are assigned to the post (or page) with a specified ID. If the value is set to 0, the plugin will try to retrieve the current post ID. Turn it off with -1.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all tags displayed) | tags_post_id=0 |

### Groups

#### include

Tag groups that will be considered in the tag cloud. In the shortcode you use the IDs, which you find in the left column in the list of groups. Empty or not used means that all tag groups will be used, but groups may be hidden according to other settings if they contain no tags.

With the “Premium” plan you can use here the IDs of parent groups, so that we will include all contained tag groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of group IDs | empty (use all) | include="1,5,9" |

#### exclude

Tag groups that should be excluded in the tag cloud. Empty or not used means that no tag groups will be excluded, but groups may be hidden according to other settings if they contain no tags.

With the “Premium” plan you can use here the IDs of parent groups, so that we will exclude all contained tag groups.

| accepted values | default | example shortcode |
| --- | --- | --- |
| comma-separated list of group IDs | none (use all) | exclude="2,3,5" |

#### groups_post_id

Display only groups of which at least one assigned tag is also assigned to the post (or page) with the ID x. If set to 0, it will try to retrieve the current post ID. Matching groups will be added to the list specified by the parameter include

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups displayed). | groups_post_id=14 |

### Filters

#### show_group_filter

Whether to show the names of the groups (included with “include”) as filter buttons.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_group_filter=0 |

#### show_text_filter

Whether to show a text input field where visitors can filter tags by their names.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_text_filter=0 |

#### show_filter_all_groups

Whether to a button where visitors can reset all filters by groups and show all tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| 0 or 1 | 1 | show_filter_all_groups=0 |

#### initial_group

Which group to use for filtering when the Shuffle Box is loaded. By default it shows all available tags of all groups. Use the ID of a group that you don’t display to start without showing any tags.

| accepted values | default | example shortcode |
| --- | --- | --- |
| integer | -1 (all groups) | initial_group=4 |

### Labels and Messages

#### placeholder

Placeholder for the input field of the text filter.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “search” | placeholder="type here" |

#### not_assigned_name

Label of the button for the “not assigned” group.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “not assigned” | not_assigned_name="all the rest" |

#### show_all_name

Label of the button to show all groups (turn off the filter by groups).

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | “show all” | show_all_name="no filter" |

---

## Advanced Styling

You can set here IDs and classes to be referred to in CSS. You need some knowledge of CSS to use these options.

#### div_id

Define an ID for the enclosing <div>.

Avoid words that are used by WordPress such as “content” or “main”. Each ID must be unique for the entire page.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | empty (random value) | div_id=“sidebar_01” |

#### div_class

Define a class for the enclosing <div>. You can use here themes.

| accepted values | default | example shortcode |
| --- | --- | --- |
| string | cm-shufflebox-theme-default | div_class=“make-it-dark” |

---

