# Turn Off Comments

*Category from Kadence Theme documentation*

---

## How do I turn off comments?

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/turn-off-comments/](https://www.kadencewp.com/help-center/docs/kadence-theme/turn-off-comments/)

The steps below outline how comments can be turned off in WordPress.

Disabling Comments on Future Posts

In the WordPress admin go to Settings > Discussion. Uncheck “**Allow people to submit comments on new posts**“. This will ensure that comments are disabled for all *future* posts.

![WP Admin - Settings > Discussion](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-04-28-at-4.18.11-PM-1024x249-1.png)

Disabling Comments for Existing Posts

Changing the above setting will not affect existing posts.  To disable commenting for existing posts, go to Posts and select individual posts to update or select all posts by clicking the checkbox in the header.  After selecting your posts, choose **Edit** from the Bulk Actions dropdown, and click **Apply**. In the bulk editor, select **Do not allow** from the **Comments** dropdown and click on **Update**.

![Posts - Bulk Editing Comment status](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-04-28-at-4.28.36-PM-1024x297-1.png)

Show/Hide comments from the theme setting

The Kadence Theme also provides a way to show/hide the comments in 
*Appearance > Customize > Posts/Pages Layout > Single Post Layout*.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Customize-teejay-2025-10-13-at-2.38.45-PM.jpg)

Using a PHP Code Snippet

You can disable comments via a PHP code snippet.  This will not only close comments and pingbacks but also hide any existing comments on the front-end.

```
// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
// Close pings on the front-end
add_filter('pings_open', '__return_false', 20, 2);
// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);
```

Using a Plugin

Another option is to use a plugin that disables comments throughout the site.  [Disable Comments](https://wordpress.org/plugins/disable-comments/) is a good option.

---

