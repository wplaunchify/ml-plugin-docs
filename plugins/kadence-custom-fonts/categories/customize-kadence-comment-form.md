# Customize Kadence Comment Form

*Category from Kadence Custom Fonts documentation*

---

## How to Customize the Kadence Comment Form

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/customize-kadence-comment-form/](https://www.kadencewp.com/help-center/docs/kadence-theme/customize-kadence-comment-form/)

This guide will help you customize the WordPress comment form while using the Kadence theme.

![Kadence comment form](https://www.liquidweb.com/wp-content/uploads/2025/04/Screenshot-2025-04-22-at-1.53.04 PM-1024x690.png)
## Changing the Comment Form “Leave a Reply” Title

To change the comment form “Leave a Reply” title, you can add a PHP code snippet. Use the following snippet and replace “**Your Comment Reply Title**” with your own text:

```
/**
 * Change the comment form reply title text.
 *
 * @param array $defaults the default comment form args.
 */
add_filter( 'comment_form_defaults', function($defaults){
	$defaults['title_reply'] = __( 'Your Comment Reply Title' );
	return $defaults;
});
```

Refer to our guide here on how to add the PHP Code Snippet: **How to add a custom filter or function with Code Snippets**

## Moving the Comment Form Above or Below the Comment List

![Kadence Customizer comment form settings](https://www.liquidweb.com/wp-content/uploads/2025/04/Screenshot-2025-04-22-at-2.21.49 PM-300x300.png)To move the comment form above or below the comment list, go to Appearance > Customize and click on General and then Comments. Here you’ll see an option labeled “**Move Comments input above comment list.**” When enabled, the comment form will appear above the comment list. When disabled it will appear below.

## Removing the “Website” Comment Form Field

Removing the website field prevents spammers from leaving irrelevant or malicious links. It can also help simplify the comment section and prevent cluttering up your content with unnecessary or broken links.

To remove the website field, go to Appearance > Customize and click on General and then Comments. Here you’ll see an option labeled “**Remove Comments Website field.**” Enable this and save your changes.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

