# Change Any Text On Your Site

*Category from Kadence Theme documentation*

---

## Change Any Text on Your Site

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/change-any-text-on-your-site/](https://www.kadencewp.com/help-center/docs/kadence-theme/change-any-text-on-your-site/)

If you need to change a theme or plugin-defined text snippet on your site, a simple solution would be to use the [“Say What?”](https://wordpress.org/plugins/say-what/) plugin.  The plugin doesn’t require any code changes and is easy to set up.  Also, it’s good to point out that this plugin won’t add any large performance issues because it’s using the core WordPress method to translate text.

To get started, **first download and install the plugin from here** or from your WP Admin Dashboard, go to Plugins → Add New and search for *Say What*.

## Finding the String You Want to Translate

Find the text that needs to be changed. For this example we’ll simply change the “NEXT” text under the blog posts to “FORWARD”

![Sample screenshot](https://www.liquidweb.com/wp-content/uploads/2021/05/change_text_next_example.jpg)For the Say What plugin to work, you need to use the exact string that is in the theme or plugin with the same capitalization. However, this can be confusing because themes and plugins style text with transforms such as uppercase. So to make sure that you’re copying the string exactly as defined by the theme or plugin, use your browser’s inspect tool to view the underlying HTML.

![Sample screenshot with code view](https://www.liquidweb.com/wp-content/uploads/2021/05/change_text_next_example_04.jpg)The exact string you need in our example is “Next” **not** “NEXT”.

## Finding the Correct Text Domain

Next determine the text domain. A “domain” allows themes and plugins to identify and isolate their own text strings. If you’re unsure of the theme’s text domain, you can find it in Appearance → Theme File Editor.  Start by selecting your theme, and look for the text domain in the theme’s style.css file.

If the string is part of a plugin, navigate to Plugins → Editor, and select the plugin in question. For example, in the **Kadence Blocks** plugin, open the “kadence-blocks.php” file to see the text domain at the top of the file.

Below is a list of Kadence products with their text domain:

| Product | Text Domain |
| --- | --- |
| Kadence Theme | kadence |
| Kadence Pro Plugin – Addon for Kadence Theme | kadence-pro |
| Kadence Blocks | kadence-blocks |
| Kadence Blocks Pro | kadence-blocks-pro |
| Kadence Starter Templates | kadence-starter-templates |
| Kadence Cloud | kadence-cloud |
## Change Text with Say What

Now that you have the string and text-domain, you can navigate to Tools → Text Changes to add a new text change.

![Adding a text change](https://www.liquidweb.com/wp-content/uploads/2021/05/change_text_next_example_02-scaled-1.jpg)Once added check your site to verify the change.

![Example screenshot after text change](https://www.liquidweb.com/wp-content/uploads/2021/05/change_text_next_example_03.jpg)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

