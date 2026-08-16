# Code Snippets

*Category from The Events Calendar documentation*

---

## Using Code Snippets to Customize The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/code-snippets/](https://docs.nexcess.com/software/the-events-calendar/code-snippets/)

When we refer to “snippets” in this context, we mean small pieces of PHP code. There are three basic ways to add these PHP snippets to your WordPress site:

1. **Using a Functionality Plugin:**
This is the best practice to prevent possible conflicts. A [functionality plugin](https://css-tricks.com/wordpress-functionality-plugins/) is a custom plugin you create to add your PHP code. This keeps your snippets separate from your theme, ensuring they won’t be lost if you change themes.
2. **Adding to a Child Theme’s functions.php File:**
If the snippet is specific to your theme, it’s best to use a child theme. First, make sure you have a child theme set up, then add your PHP snippet to the [child theme’s functions.php](https://developer.wordpress.org/themes/advanced-topics/child-themes/#using-functions-php)file. This way, your custom code stays intact even if the parent theme is updated.
3. **Using a Plugin like Code Snippets:**
For a simpler approach, you can use a plugin like “[Code Snippets](https://wordpress.org/plugins/code-snippets/).” This plugin allows you to add PHP snippets directly from the WordPress dashboard without needing to edit files.

Other than knowing where to implement a code snippet, there are additional things to take into consideration when adding custom code for your calendar to your site. Many WordPress tutorials — including our ours — provide snippets of code used for demonstration purposes. It’s totally fine to copy and paste those for your own use. But when you do, you’ll want to make sure you check a couple of things.

## Remove the opening PHP tag

PHP code snippets often start with an opening PHP tag. like this:

```
<?php
  /* Some code */
?>
```

Chances are that your theme already has that opening PHP tag. So the one included in the snippet is totally unnecessary for use, and can actually break your site.

## Watch out for garbled code

Many people use [GitHub Gists](https://gist.github.com/) or similar sites like [Pastebin](https://pastebin.com/), [Cacher.io](https://www.cacher.io/), or [GitLab Snippets](https://gitlab.com/explore/snippets). They’re a convenient way to share code. At the same time, it’s possible that simply copying and pasting the code from one of these services will result in unescaped, or “garbled” code.

Here’s what we mean:

```
// This...
$this->method_name()

// ...might paste like this:
$this-&gt;method_name()
```

See that 
```
&gt;
```

 in the code? That’s the unescaped HTML for the “greater than” (
```
>
```

) sign. It’s subtle, but can also break your site.

Another possible formatting issue: **quotation marks**. There are actually two types of quotation marks in HTML: curly and plain.

```
Curly quote: “The quick brown fox...”
Curly single quote: ‘The quick brown fox...’
Plain quote: "The quick brown fox..."
Plain single quote: 'The quick brown fox...'
```

See the difference? Again, it’s subtle, but curly quotes are unsupported in code. So, watch for those when copying and pasting and ensure that your snippets always use plain quotes.

## CSS snippets

Everything we’ve looked at so far concerns PHP snippets. But let’s say you’re working with a CSS or JavaScript snippet instead.

### The style.css file

A CSS snippet can go straight into your theme’s 
```
style.css
```

 file if you are using your own custom theme. However, if you are using a theme you downloaded or purchased, then you will want to make a child theme and paste the CSS snippet in the child theme’s 
```
style.css
```

 file instead. This ensures your custom code is preserved when installing theme updates.

### The WordPress Customizer

Another way to add custom CSS is to paste it in the WordPress Customizer. Since WordPress 4.7, the Customizer includes a “[Custom CSS](https://codex.wordpress.org/CSS#Custom_CSS_in_WordPress)” section that allows you to post code there instead of putting it in a theme’s 
```
style.css
```

 file.

![](https://docs.nexcess.com/wp-content/uploads/2019/10/customizer-custom-css-tab-1024x647.webp)The “Custom CSS” tab

![](https://docs.nexcess.com/wp-content/uploads/2019/10/customizer-custom-css-panel-1024x651.webp)The “Custom CSS” panel

Using the WordPress Customizer for CSS snippets is a super safe way to go, especially if you are uncomfortable or unable to access your theme’s files.

### Full Site Editor

If you have a Full Site Editor theme, here are the steps to add Additional CSS:

1. Go to your WordPress dashboard and select Appearance > Editor
2. Select “Styles”
3. Select the “Edit Styles” icon next the Styles header
4. Select the “More” three vertical dots in the Styles menu in the right sidebar, then select “Additional CSS”
5. Enter your Additional CSS

1.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/FSE-CSS-1.jpg)

2.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/FSE-CSS-2-1024x475-1.jpg)

3.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/FSE-CSS-3-1024x475-1.jpg)

4.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/FSE-CSS-4-1024x475-1.jpg)

5.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/FSE-CSS-5-1024x475-1.jpg)

## Adding JavaScript Snippets

Sometimes, you might need to add a JavaScript snippet to your site. This works differently from adding PHP code. JavaScript snippets are typically placed in the header or footer of a WordPress site to ensure they load across all pages. While you can manually add them to your 
```
header.php
```

 or 
```
footer.php
```

 files, any theme updates will overwrite these changes.

To avoid this, it’s best to use a plugin like [WP Code](https://wordpress.org/plugins/insert-headers-and-footers/). Once you’ve installed the plugin, you need to go to **Snippets > Add** **Snippet**:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-33.jpg)

Then choose **Add Your Custom Code (New Snippet)**:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1-1024x378-1.jpg)

And then choose the **JavaScript Snippet** option:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-1024x408-1.jpg)

Once you’ve added the snippet, make sure you save it and that it’s active:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4-1024x367-1.jpg)

## Backup, backup, backup!

Seriously, we can’t say this enough. **Make sure you have a restorable backup of your site’s files and database before making any changes.** This helps prevent a worst-case scenario and offers a lot of peace of mind.

## Test changes first

We strongly recommend testing any change to your site in a safe [staging environment](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/) before adding new code to your live site. This way, you can always be confident that the code you’re using works, and that it is compatible with your site without jeopardizing your live site.

---

