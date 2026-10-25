# What Is Child Theme Do I Need One

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## How and When to Create a Child Theme

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/what-is-child-theme-do-i-need-one/](https://www.kadencewp.com/help-center/docs/kadence-theme/what-is-child-theme-do-i-need-one/)

If you’ve ever requested help with customizing something in a WordPress website, you’ve likely heard someone say “make sure you create a child theme first”. This is really good advice; you absolutely should do that. But why? And more importantly, how? And what is a child theme anyway?

## What is a child theme?

A child theme is a WordPress theme that inherits all the features, styling, and functionality of another theme (known as the “parent” theme). It acts as a safe workspace, allowing you to extend or modify the parent theme without altering its original files.

If you were to modify a parent theme directly, any customizations would be erased the next time the theme developer releases an update. A child theme prevents this by keeping your custom code and structural changes completely separate.

> … a child theme inherits the look and feel of the parent theme and all of its functions, but can be used to make modifications to any part of the theme.”
> 
> 
> 
> Source: WordPress.org Theme Handbook

## When Do You Need a Child Theme?

For many users, the built-in [WordPress Customizer](https://wordpress.org/documentation/article/customizer/) is enough to handle basic visual changes (like colors, fonts, and simple CSS). However, you should use a child theme when you need to make more structural modifications, such as:

- **Custom PHP page templates:** If you are building custom page layouts (
```
page-template-name.php
```

) that require specific PHP structures.
- **Overriding plugin templates:** Many plugins allow you to customize how their content displays by copying their templates into your child theme directory.
- **Adding custom functions:** If you need to add custom PHP code, hooks, or filters via the 
```
functions.php
```

 file instead of using a standalone code snippets plugin.
- **Advanced styling:** When your design requires extensive CSS modifications that are difficult to manage within the WordPress Customizer.

## How to Create a Child Theme

You can create a child theme using a free WordPress plugin (the fastest method) or by creating the files manually.

### Using a Plugin (Recommended for Beginners)

Using a free plugin like the **Child Theme Configurator** plugin handles the folder creation and file linking for you, while also migrating your existing customizer settings.

1. Install and activate the **Child Theme Configurator** plugin from the WordPress Plugin Directory.
2. **Analyze the Parent Theme:** Navigate to **Tools > Child Themes** in your WordPress dashboard. Click on **CREATE a new Child Theme**, select your current parent theme from the dropdown, and click **Analyze**. Wait a few seconds for the plugin to give you the green light.
3. **Copy Parent Settings:** This is Important for existing sites.

Leave all the default settings as they are, with the exception of step number 8. Check the box that says: *“This option replaces the Child Theme’s existing Menus, Widgets and other Customizer Settings with those from the Parent Theme.”* This ensures you don’t have to recreate your menus and widgets.
4. **Create the Theme:** Click the blue **Create New Child Theme** button. The plugin will automatically generate the required 
```
style.css
```

 and 
```
functions.php
```

 files for your new theme.
5. **Activate the Child Theme:** Go to **Appearance > Themes**, locate your newly created child theme, and click **Activate**.

### Creating a Child Theme Manually

If you prefer not to use a plugin, you can create the child theme by adding a new directory and two essential files directly to your WordPress installation.

**Create the Child Theme Directory**: Using FTP or your hosting file manager, navigate to the 
```
/wp-content/themes/
```

 folder of your WordPress site. Create a new folder for your child theme. It is best practice to name it by appending 
```
-child
```

 to the parent theme’s folder name (e.g., 
```
/wp-content/themes/parent-theme-child/
```

).

**Create the style.css File:** Creating this file defines the child theme. Inside your new child theme folder, create a file named 
```
style.css
```

. You must include a specific header comment so WordPress recognizes it. The most critical line is the 
```
Template:
```

 line, which must exactly match the directory folder name of the parent theme:

```
/*
Theme Name: My Child Theme
Template: parent-theme-folder-name
Description: A child theme of my parent theme
Version: 1.0.0
*/
```

**Create the functions.php file:**Create a file named 
```
functions.php
```

 in your child theme folder. Use this file to tell WordPress to load enqueue parent theme’s styles, followed by your child theme’s styles:

```
<?php
function child_enqueue_styles() {
    wp_enqueue_style( 'child-theme', get_stylesheet_directory_uri() . '/style.css', array(), 1.0 );
}
add_action( 'wp_enqueue_scripts', 'child_enqueue_styles' );
```

**Activate the Child Theme:** In the WordPress dashboard go to **Appearance > Themes**. You should now see your newly created child theme listed alongside the others. Click **Activate**.

Tip:

				

Whenever someone instructs you to put some code into your *functions.php* file, make sure you add it to the *functions.php* file of the **child theme**, not the one in the parent theme.

**Resources:**

- [WordPress has a document](https://developer.wordpress.org/themes/advanced-topics/child-themes/) that explains how child themes work.
- There are a number of [plugins that will create a child theme](https://wordpress.org/plugins/search/child+theme/) for you based on the current active theme. These plugins can be removed once the child theme is created.

### Installing a Child Theme ZIP File Using the WordPress Theme Installer

If you are using the WordPress admin dashboard, this is the quickest and most direct way to upload your child theme.

1. **Navigate to the Themes Menu:** Log in to your WordPress admin dashboard. In the left-hand navigation sidebar, go to Appearance and click Themes.
2. **Open the Theme Upload Tool:** At the top of the Themes page, click the Add New Theme button (or Add New depending on your WordPress version). Near the page title, click Upload Theme to reveal the file selection box.
3. **Select and Install the ZIP File**: Click Choose File, select your child theme’s .zip file from your computer, and click Install Now. Do not unzip or extract the file beforehand; WordPress requires the standard .zip format.
Leave all the default settings as they are, with the exception of step number 8. Check the box that says: *“This option replaces the Child Theme’s existing Menus, Widgets and other Customizer Settings with those from the Parent Theme.”* This ensures you don’t have to recreate your menus and widgets.
4. **Activate the Child Theme**: Once WordPress completes the upload and uncompression process, click **Activate**. Congratulations! Your child theme is now live, preserving your custom code and style changes through future parent theme updates.

---

