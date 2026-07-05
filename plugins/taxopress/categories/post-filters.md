# Post Filters

*Category from TaxoPress documentation*

---

## How to Choose a Custom Order in the Post Filter

**Source:** [https://taxopress.com/docs/how-can-i-display-the-posts-in-custom-order/](https://taxopress.com/docs/how-can-i-display-the-posts-in-custom-order/)

If you are using the Post Filter option in the Tag Groups plugin, it is possible to customize the order of the posts.

Install the plugin [Simple Custom Post Order](https://wordpress.org/plugins/simple-custom-post-order/) and use it sort your posts.

You will need to use the shortcode of the body (posts) part of the Toggle Post Filter which is [tag_groups_tpf_body].

If you are using a Gutenberg block, simply [transform it to a shortcode](https://taxopress.com/docs/how-can-i-customize-a-gutenberg-block-beyond-the-given-options/).

Then make sure that the shortcode contains the parameters:

- orderby=menu_order
- order=asc

Here’s an example of this shortcode:

```
[tag_groups_tpf_body orderby=menu_order order=asc]
```

Note: If you are using the *Masonry* post layout, the post order might change again because posts are arranged in the browser depending on each element’s height.

---

## How to Change the Length of the Post Excerpts

**Source:** [https://taxopress.com/docs/how-can-i-change-the-length-of-the-post-excerpts/](https://taxopress.com/docs/how-can-i-change-the-length-of-the-post-excerpts/)

The excerpt in the post templates of the Toggle Post Filter, Dynamic Post Filter and Post List is taken from one of two places:

- The excerpt that you created with the post.
- If the post doesn’t have an excerpt, it is take from the beginning of the post content.

You can change the excerpt length manually with a line of code.

Add to the file functions.php of your child theme:

```
add_filter( 'excerpt_length', function() {return 20;});
```

Replace “20” by the required number of words.

---

## Change the Size of the First Posts in the Masonry Layout

**Source:** [https://taxopress.com/docs/how-to-change-the-size-of-the-first-posts-in-the-masonry-layout-of-the-toggle-post-filter/](https://taxopress.com/docs/how-to-change-the-size-of-the-first-posts-in-the-masonry-layout-of-the-toggle-post-filter/)

When using the Toggle Post Filter option in the Tag Groups plugin, you can customize items with CSS.

For example: If you want to change the width of the first two posts, you can use the following CSS:

```
@media screen and (min-width: 1200px) {
  #tg_filter_dpf_toggle_box_posts article:nth-child(1),
  #tg_filter_dpf_toggle_box_posts article:nth-child(2) {
    width: 49% !important;
  }
}
```

The width of 49% means that you show two items in a row. You can experiment with that number so that these posts are as wide as possible and still fit together into a row, including their margins.

The min-width: 1200px part makes sure that this styling only affects large screens. On mobile devices each row should have only *one* post. Here too you can try different numbers.

[Read more about @media.](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

---

## Limit the Size of the Menu in the Dynamic Post Filter

**Source:** [https://taxopress.com/docs/how-to-limit-the-size-of-the-menu-in-the-dynamic-post-filter/](https://taxopress.com/docs/how-to-limit-the-size-of-the-menu-in-the-dynamic-post-filter/)

It is possible to limit the size of the menu in the Dynamic Post Filter option in the Tag Groups plugin. This means that the menu will not grow too large, no matter how many terms you add.

Use the following CSS in your child theme’s style.css or in the CSS section of the theme customizer:

```
.ui-autocomplete {
   /* limit height to 100px and add vertical scrollbar */
   max-height: 100px;
   overflow-y: auto;
   /* prevent horizontal scrollbar */
   overflow-x: hidden;
}
```

---

## Using the Post Filter on Frontend URLs

**Source:** [https://taxopress.com/docs/using-the-post-filter-on-the-front-end/](https://taxopress.com/docs/using-the-post-filter-on-the-front-end/)

On default WordPress pages that show lists of posts you can filter that list by term group, thanks to the Tag Groups plugin.

To add filters to WordPress URLs, append the query parameter “term_group” with the group’s ID to the URL of that page. Here’s an example:

```
https://www.example.com/?term_group=3
```

---

## Filtering by tag group and tag

You can also filter by a tag (term) and show only posts that use this tag in a particular group. In that case use “term_group” and “term_id”. Example:

```
https://www.example.com/?term_id=195&term_group=3
```

If you want to filter by tag *and* group, you alway have to use both parameters “term_group” and “term_id”. It is not sufficient to use only “term_group” on a tag archive page (…/tag/my-tag/?term_group=3 won’t work).

---

## Filtering by tag group and category

Simply use a category page and add the parameter term_group with a group’s ID. Example for WooCommerce categories:

```
https://www.ecample.com/product-category/accessories/?term_group=3
```

---

## Other notes

- This filter won’t be effective on custom lists created by other themes or plugins or when they modify the post query. Tag Groups makes use of the “pre_get_posts” action hook of the default WordPress database query. If any other plugin or theme removes it, the filter won’t work. It is therefore recommended to test the filter in your particular environment.
- Please note that in URLs the first parameter is always appended with a “?”, while all following parameters use a “&”.
- If you need to filter just by a tag without a group, you simply use the standard Tag page that is part of every theme.
- If the filtered list of posts is unexpectedly empty, you can try the tools on the Settings page under the Support tab.

---

