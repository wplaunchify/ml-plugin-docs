# Customize Calendar

*Category from The Events Calendar documentation*

---

## Ways to Customize The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-calendar/](https://docs.nexcess.com/software/the-events-calendar/customize-calendar/)

This guide outlines several different methods you can use to customize your Events Calendar pages.

> Note: Some of these methods require coding knowledge.

Please also note, helping with customizations is beyond the scope of support our team can provide. However, we will do our best to get you pointed in the right direction if you are stuck.

#### The Customizer

The quickest and easiest way to change the styling of your Events Calendar pages is to use the [WordPress Customizer](https://docs.nexcess.com/software/the-events-calendar/wordpress-customizer-events/).

In your admin bar click on **Customize,**and once the customizer opens scroll down to the **Events Calendar** section.

Here you will find some options for **Global settings**, as well as **Events Bar**, **Month View**and the **Single Event** page.

You can use these settings to modify basic styling settings like font color, size, family, and some other things like background colors.

[Read more](https://docs.nexcess.com/software/the-events-calendar/wordpress-customizer-events/)

#### Display Settings

If you navigate to **Events**> **Settings**> **Display**you will see a few options. If you really like CSS and want to just customize the heck out of our pages, you’ll probably want to choose **Skeleton Styles**in the **Default stylesheet used for events templates** section. This applies the bare minimum CSS to our pages, and you can go ahead and style them however you like using some custom CSS.

You also have some template options in the **Events Template** dropdown.

[Read more](https://docs.nexcess.com/software/the-events-calendar/calendar-template-settings/)

#### CSS

If you’re familiar with how CSS works, modifying the styling of our pages is fairly simple.

If you right-click on an element on the page you want to modify, and click **inspect**you will be able to see the code. This will reveal the class or ID you need to target in order to modify that element.

You can add your custom CSS to the WordPress Customizer in the Custom CSS section, or you can use a third party CSS plugin. Some themes even have a custom CSS section for such things.

[Read more](https://docs.nexcess.com/software/the-events-calendar/customize-css/)

#### Template Overrides

Our template overriding system allows you to override our core plugin files without losing those changes the next time our plugin updates.

This requires knowledge of HTML and PHP and probably some CSS as well. You’ll also need access to your website’s file system, either via your hosting provider’s UI (like cPanel) or a file app like FileZilla.

The basic idea behind the template override system is that you copy one of our core plugin files, to a specific folder in your theme’s root folder and then modify that copy. That copy is then used instead of the core file.

[Read more](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)

> NOTE: You’ll want to use a child theme otherwise your template overrides will be lost the next time your theme updates.

#### Hooks

Action hooks and filter hooks are another way that you can modify all sorts of things on your website. Hooks are a built-in WordPress feature that allows you to basically inject code into your own website. Action hooks let you run functions at certain times, and filter hooks let you modify existing code.

You can add your custom functions to the functions.php file of your child theme, or (and I personally recommend this) you can use a snippets plugin. Using the plugin means you won’t have to re-do them if you decide to change themes later on, and it helps you organize your snippets and even allows you to turn individual snippets on/off with the click of a button (this is very helpful when troubleshooting conflicts).

Again, we don’t offer support for these kinds of customizations (as in, we’re likely not going to write hooks for you) and this definitely requires some moderate PHP knowledge to pull off correctly.

That being said, here are a few resources you should find useful when using our hooks:

- [https://docs.theeventscalendar.com/](https://docs.theeventscalendar.com/)
- [https://developer.wordpress.org/plugins/hooks/](https://developer.wordpress.org/plugins/hooks/)
- [https://kinsta.com/blog/wordpress-hooks/](https://kinsta.com/blog/wordpress-hooks/)

#### Existing customizations

You might not be the first one thinking about a specific customization. We have a nice collection of snippets in our [knowledgebase](https://theeventscalendar.com/knowledgebase/category/snippets/) and I definitely recommend you to take a look at our [library of free extensions](https://theeventscalendar.com/extensions/). You just might find the customization you are looking for, or they can inspire you to take it to the next level.

---

