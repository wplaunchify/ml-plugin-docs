# Tags Under Posts

*Category from TaxoPress documentation*

---

## Change the Icons on Tags Under Posts

**Source:** [https://taxopress.com/docs/how-do-i-change-the-styling-of-the-post-tags-under-the-posts/](https://taxopress.com/docs/how-do-i-change-the-styling-of-the-post-tags-under-the-posts/)

This guide will show you how to change the style of [the Tag Groups that appear underneath posts](https://taxopress.com/docs/post-tags/).

Use the following CSS in your Customizer -> CSS or your style.css to add a tag icon in front of each tag. The Dashicon used here is “f323”. You can find a new icon and the related number by [visiting the Dashicons guide on WordPress.org](https://developer.wordpress.org/resource/dashicons/).

For example, a “site” icon is “f319” and a “comments” icon is “f101”.

```
.tag-groups-premium-post-tags-table td a {
  text-decoration: none;
}

.tag-groups-premium-post-tags-table td a:before {
  content: "\f323";
  font-family: Dashicons;
  margin: 0 .2em 0 .4em;
  padding-right: .1em;
  padding-left: .5em;
}
```

The output using “f323” as a Dashicon will be like this screenshot below:

---

## How to Show Tag Groups on Posts

**Source:** [https://taxopress.com/docs/post-tags/](https://taxopress.com/docs/post-tags/)

By default, WordPress posts usually show all the tags that belong to that post.

This default setting does not connect to the Tag Groups plugin. So if you want to show all the tags that belong to a post, and also show their groups, you will need to change the default display.

If you want to display your tags sorted into groups, you can use the “Post Tags” feature. When activated, we insert a table with groups and tags at the end of the post content. The image below shows an example of the “Post Tags” feature display at the bottom of a post.

Because themes are hard-coded, we cannot insert the tags at any position. It is only possible to add them after the post content.

---

## How to customize the Post Tags feature

You can customize the display of the Post Tags by going to Tag Groups > Frontend > Post Tags.

---

## How to Add Tag Groups Elsewhere in Your Posts

If you need to show the tags groups of a post in another position, you can try doing this:

- Use one of the Tag Groups shortcodes and add it the the required place in your post.
- Add the parameter 
```
tags_post_id=0
```

.

---

