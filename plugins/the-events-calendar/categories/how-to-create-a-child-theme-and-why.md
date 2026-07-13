# How To Create A Child Theme And Why

*Category from The Events Calendar documentation*

---

## How To Create a Child Theme (and Why)

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-create-a-child-theme-and-why/](https://docs.nexcess.com/software/the-events-calendar/how-to-create-a-child-theme-and-why/)

If you’ve ever requested help with customizing something in a WordPress website, you’ve likely heard someone say “make sure you create a child theme first”. This is really good advice, you absolutely should do that. But why? And more importantly, how? And what is a child theme anyway? Let’s go one by one starting with the what, or you can skip straight to the [why](#why) or to the [how](#how).

## What is a child theme?

“A child theme allows you to change small aspects of your site’s appearance yet still preserve your theme’s look and functionality. […]

… a child theme inherits the look and feel of the parent theme and all of its functions, but can be used to make modifications to any part of the theme.”

*Source: WordPress.org Theme Handbook*

## Why should you create a child theme?

WordPress theme developers are constantly working on their themes. They’re always adding new features, tweaking existing features, and adding security patches as things come up. Whenever they make a change, you have to update your theme. You’ve likely done this many times. You login to your website and you see a nice little message telling you that your theme has an update available.

So what happens when you click “update”? Basically, all your theme files are deleted, and replaced with all brand new files. Even files that the developer didn’t change get replaced. If the developer only changed one file, the update still replaces ALL your files with the most up to date versions. This means that if you edited any of those files, those edits are deleted and you would need to go in and re-add them.

This is where a child theme comes in.

WordPress has this neat little feature built in where whenever it needs to load a theme file it checks to see if there’s a child theme, and if that child theme contains the file they need to load. If it doesn’t, then it just loads the default file in the original theme.

For example, every page on your website has a header, which comes from a *header.php* file in your theme. So when a user loads a page on your website, WordPress says “ok let’s go find the *header.php* file”. First it checks to see if there’s a child theme, and if that child theme has a *header.php* file. If it does, it uses that file. If it doesn’t, it uses the one that came with the original theme.

This means that you can create a child theme, and then create a *header.php* file in that child theme, and WordPress will automatically use that *header.php* file, instead of the original one.

So if you make some awesome edits to the *header.php* file in your child theme and your parent theme updates, you won’t lose the updates you made!

Ok so that’s pretty neat but how do you actually go about creating a child theme?

## How to create a child theme

You could do it [manually](https://developer.wordpress.org/themes/advanced-topics/child-themes/#how-to-create-a-child-theme), OR you could just use this free little plugin called [Child Theme Configurator](https://wordpress.org/plugins/child-theme-configurator/).

After you’ve installed and activated this plugin, navigate to **Tools → Child Themes** to open the plugin settings. Click on **CREATE a new Child Theme**, then select your parent theme and click **Analyze.**

After a few seconds it should hopefully give you the green light to create the child theme. You can leave all the settings the way they are, with the exception of number 8. I recommend checking the box that says:

> This option replaces the Child Theme’s existing Menus, Widgets and other Customizer Settings with those from the Parent Theme. You should only need to use this option the first time you configure a Child Theme.

That way you shouldn’t have to recreate your menus, widgets etc.

Go ahead and click the blue **Create New Child Theme** button.

That’s it! Now all you have to do is go to **Appearance → Themes** and activate the child theme just like you would any other theme.

This plugin will only create a *style.css* and a *functions.php*, because those are required for a theme to exist in WordPress, but you’re welcome to start creating your own files, such as a *header.php*, or a template file for your theme.

👋 Tip: Whenever someone instructs you to put some code into your *functions.php* file, make sure you add it to the *functions.php* file of the **child theme**, not the one in the parent theme.

---

