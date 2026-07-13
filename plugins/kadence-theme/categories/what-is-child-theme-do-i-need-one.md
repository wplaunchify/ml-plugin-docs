# What Is Child Theme Do I Need One

*Category from Kadence Theme documentation*

---

## What is a Child Theme, Should I Install One, if so How?

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/what-is-child-theme-do-i-need-one/](https://www.kadencewp.com/help-center/docs/kadence-theme/what-is-child-theme-do-i-need-one/)

A WordPress theme controls the overall appearance and layout of your website. It determines how your content pages (i.e. posts, pages, archives) are displayed. Oftentimes, themes may add additional features such as layout options, colors, fonts, and added functionality to WordPress.

What is a Child Theme?

A child theme is a WordPress theme that inherits all of the qualities of a parent theme, and allows you to extend or customize the functionality of that parent theme.  The parent theme can be a commercial theme, one you’ve developed yourself, or any one of the many free themes in the [WordPress.org theme directory](https://wordpress.org/themes/).  And yes, you can create a child theme using the [FREE Kadence theme](https://wordpress.org/themes/kadence/) as the parent theme!

Do I Need a Child Theme?

For simplicity and ease of use, Kadence has been developed to be customizable via the WordPress Customizer.  Most users may not need to use a child theme when using Kadence.  If you need to add a function or custom filter, we often suggest using a [code snippets plugin](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/).

When Do I Need a Child Theme?

There are a few scenarios when a child theme might be necessary:

1. **Custom theme functionality or styles.**You may require advanced theme modifications that are not possible via the Customizer or by adding code snippets. These types of customizations would be used when you want to override certain parent theme functionality.  Copying theme template files to your child theme or including specialized custom functions in the functions.php are common examples.
2. **Custom PHP-based page templates.** If you want to create a custom PHP-based page template, you need to use a child theme. You can add the page-template-name.php to the child theme, and it will automatically register as a template option for your pages. You need to use a child theme for this so that your templates are not removed when the theme is updated.
3. **Custom plugin functionality.**Many plugins allow you to override their built-in templates and/or functions.  For templates, it’s common to copy the plugin templates to your child theme directory and customize the files there.  Custom plugin functions can sometimes be included in your child theme functions.php file.

Creating and Installing a Child Theme

You can either manually create a child theme or download a pre-made child theme and install it using the WordPress theme installer.

Manually Create a Child Theme

To manually create a child theme, you can create a separate directory under **/wp-content/themes/** at the same level of the parent theme (i.e. **/wp-content/themes/kadence-child/**). Typically you’ll start with two files, style.css and functions.php, but you can also add other customizations and/or files to a child theme if you like.

**Resources:**

- [WordPress has a document](https://developer.wordpress.org/themes/advanced-topics/child-themes/) that explains how child themes work.
- There are a number of [plugins that will create a child theme](https://wordpress.org/plugins/search/child+theme/) for you based on the current active theme. These plugins can be removed once the child theme is created.

Download a Pre-Made Child Theme

To quickly get started, download a pre-built child theme zip file using the button below and install it using the WordPress theme installer.

[Download Kadence Child Theme](https://www.kadencewp.com/wp-content/uploads/2020/07/kadence-child.zip)

Installing a Child Theme ZIP File Using the WordPress Theme Installer

In WordPress admin go to **Appearance** → **Themes** → **Add New** and click **Upload Theme**. Choose the **kadence-child.zip** file you just downloaded and click **Install Now**.

Click **Activate**. Congratulations! You have successfully installed and activated the Kadence child theme.

For a deeper look at when and why you might want to consider child themes versus the WordPress Customizer, we have a [blog post](https://www.kadencewp.com/blog/custom-css-should-you-use-a-wordpress-child-theme-or-the-customizer/) that explores this further.

Migrating Your Existing Site Settings to a Child Theme

Customizer settings are theme-specific.  If you’ve already developed a site using Kadence and later realize that you need to use a child theme, you will need to re-apply your Customizer settings after switching to your child theme.

Exporting and Importing your Theme Settings

If you’re using the Kadence theme, you can easily export and re-apply your settings to your child theme.  To do so, you’ll need to install the [FREE Kadence Starter Templates plugin](https://wordpress.org/plugins/kadence-starter-templates/).  Once installed and activated, follow these steps:

1. **With your Kadence theme active**, go to the Customizer, click Import/Export and export your settings.  This will download a file to your hard drive that will say something like “kadence-theme-export.dat”
2. Go to Appearance → Themes and install and activate your child theme.
3. Go back to the Customizer, click Import/Export. Go to Import and locate the kadence-theme-export.dat file on your hard drive and click “Import.”

Your Kadence Customizer settings should now be applied to your child theme.

Loading Your Child Theme style.css File

If you want to have the child theme enqueue your child theme style.css file, you can edit the child theme functions.php file and include a snippet such as the one below.  The pre-built child theme already contains this snippet.

```
/**
 * Enqueue child styles.
 */
function child_enqueue_styles() {
	wp_enqueue_style( 'child-theme', get_stylesheet_directory_uri() . '/style.css', array(), 1.0 );
}

// add_action( 'wp_enqueue_scripts', 'child_enqueue_styles' ); // Remove the // from the beginning of this line if you want the child theme style.css file to load on the front end of your site.
```

Remove the // before the add_action, and your child theme style.css will be enqueued.

**Note**: To ensure your child theme style.css file loads after all others, edit the functions.php file and change the action priority to a number such as 999:

```
/**
 * Enqueue child styles.
 */
function child_enqueue_styles() {
	wp_enqueue_style( 'child-theme', get_stylesheet_directory_uri() . '/style.css', array(), 1.0 );
}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 999 );
```

Enqueuing Child Styles in the Block Editor

To maintain a true WYSIWYG experience in WP Admin, you may want to enqueue your child theme styles in the Block Editor.  To do so, you can add the following snippet to your functions.php file:

```
// Enqueue child styles in the block editor
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_style(
        'child-theme-editor-styles', 
        get_stylesheet_directory_uri() . '/style.css', 
        array(), 
        1.0
    );
});
```

Keep in mind that you may need to add additional CSS selectors to your styles.  For example, setting the color of an H2 block may require adding an additional selector (i.e. *.editor-styles-wrapper*):

```
h2, .editor-styles-wrapper h2 {
	color: red;
}
```

If you prefer to use a separate stylesheet for the Block Editor only (not used for the front-end), you can create a new file (i.e. *editor-style.css*) and enqueue that instead.

---

