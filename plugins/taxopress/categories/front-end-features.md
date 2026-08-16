# Front End Features

*Category from TaxoPress documentation*

---

## How to Design Tag Colors in Tag Groups

**Source:** [https://taxopress.com/docs/design-colors-tag-groups/](https://taxopress.com/docs/design-colors-tag-groups/)

Tag Groups Pro has a feature that allows you to create custom color schemes for your Tags. Follow these steps to create your own designs without needing to know any CSS.

- Go to “Tag Groups”, then “Front End”, then “Tag Colors”.
- The first step is to choose a CSS class name. In this screenshot below, I’ve chosen “my-lime-green-class”.
- Use the color boxes to design your terms. You can see a preview on the right side of the screen under “Sample output”.

- At the bottom of the screen, Tag Groups will automatically generate the CSS you need to use. Copy this CSS to your site. You can place this into the style.css file of a child theme or you can add it using the Customizer.

- Now you can add your CSS class into the “div class” box of your Gutenberg block. In this screenshot below, there are two classes. I’ve added a comma to space out the classes.

- Your design is now complete. This screenshot below shows the output from the “my-lime-green-class” that was created at the start of this guide.

---

## How to Modify a Theme in Tag Groups

**Source:** [https://taxopress.com/docs/how-can-i-change-the-colors-and-other-styling/](https://taxopress.com/docs/how-can-i-change-the-colors-and-other-styling/)

This guide will show you how to make CSS changes to the displays in the Tag Groups plugin.

The Pro version of Tag Groups has several themes available. You can find more information and examples [in this article](https://taxopress.com/docs/theming/).

For your own customization, you can copy and re-use one of these existing themes inside Tag Groups Pro. In this guide, we’ll show you how to find the CSS and safely copy it to your WordPress site to make changes.

- Download the main frontend CSS file from the Tag Groups Pro plugin. You will find that file here: /premium/assets/css/frontend.css
- Search for the CSS section that you need. For example, there are sections labeled, “Shufflebox Themes” or “Tag cloud themes”.
- Copy all the code for one definition. For example, copy everything that starts with “.tag-groups-theme-blue”. Here’s the code for that blue theme:

```
/* blue */
.tag-groups-theme-blue .tag-groups-tag {
  background-color: #ddd;
  margin: 2px 10px 2px 10px;
  padding: 0;
  display: inline-block;
  border-radius: 5px;
  border: none;
  white-space: nowrap;
}

.tag-groups-theme-blue .tag-groups-tag a {
  text-decoration: none;
  box-shadow: none;
  margin: 0;
  color: #333;
}

.tag-groups-theme-blue .tag-groups-tag a:visited,
.tag-groups-theme-blue .tag-groups-tag a:active,
.tag-groups-theme-blue .tag-groups-tag a:link {
  text-decoration: none;
  box-shadow: none;
  margin: 0;
  color: #333;
}

.tag-groups-theme-blue .tag-groups-label {
  margin: 0 0.3em;
}

.tag-groups-theme-blue .tag-groups-append {
  background-color: blue;
  color: white;
  margin-left: 0.2em;
  padding: 0.2em 0.4em;
  display: inline-block;
  border-radius: 0 5px 5px 0;
}

.tag-groups-theme-blue .tag-groups-prepend {
  background-color: blue;
  color: white;
  margin-right: 0.2em;
  padding: 0.2em 0.4em;
  display: inline-block;
  border-radius: 5px 0 0 5px;
}
```

- You can paste the CSS into the CSS editor of the WordPress Customizer, or you create a child theme and paste it into its style.css file.
- Rename all occurrences of the identifier (class name) to something unique, for example “.tag-groups-theme-blue-new”. You will also have to use the same new name in the shortcode or the Gutenberg block.
- Now you can edit the colors or other styling. If you are using the Customizer on the page where the shortcode is rendered, you can see the new styling live while you edit. If you use a child theme, you will need to reload the page after you save the file style.css.

---

## Tag Groups Themes: Design and Colors

**Source:** [https://taxopress.com/docs/theming/](https://taxopress.com/docs/theming/)

This guide will show you how to select the colors of displays in the Tag Groups plugin. We’ll cover the default themes and also show how to make your own customizations.

---

## Default Themes

If you want to change the style of the tabs or the accordion panels, you simply select one of the bundled themes that you find in the Tag Groups settings, Front End, Themes and Appearance.

Tag Groups Pro comes with a few standard themes that you can use to give some shape and color to your tags. You apply a theme by using its class name for the enclosing element –  “div class” or “table class”.

Example of a shortcode:

```
(function tagGroupsInitTabs(retries) {
    if (typeof jQuery !== 'undefined' && typeof jQuery.ui !== 'undefined' && typeof jQuery.ui.tabs !== 'undefined' && typeof jQuery.widget !== 'undefined' && typeof TagGroupsBase !== 'undefined') {
      TagGroupsBase.tabs('tag-groups-cloud-tabs-6a815c83279da', {"active":false}, true);
      return;
    }

    if (retries > 0) {
      setTimeout(function() {
        tagGroupsInitTabs(retries - 1);
      }, 100);
      return;
    }

    var element = document.getElementById('tag-groups-cloud-tabs-6a815c83279da');
    if (element) {
      element.className = element.className.replace(/\btag-groups-cloud-hidden\b/g, '');
    }
    console.log('[Tag Groups] Error: jQuery UI Tabs is missing!');
  })(50);
```

The corresponding parameter is also available in the Gutenberg blocks.

The color is applied to the “prepend” and “append” elements.

```
tag-groups-theme-green
tag-groups-theme-blue
tag-groups-theme-red
tag-groups-theme-orange
tag-groups-theme-black
tag-groups-theme-darkred
tag-groups-theme-midnightblue
tag-groups-theme-slategray
```

This screenshot below is an example using the “green” theme:

tag-groups-theme-green with the parameter append=”{count}” to show the post counts.

We also adapted styling created by [Dimox](http://dimox.net/beautiful-tags-for-a-website-using-only-css/) after a design by [Orman Clark](http://www.premiumpixels.com/freebies/tagtastic-tag-cloud-psd/). You can use it with the class name

```
tag-groups-theme-tag-with-hole
```

Since the tag size is fixed, the maximum font size should not exceed 18px. The cloud looks best if all tag labels have the same height.

---

## Shuffle Box Themes

For the Shuffle Box feature, you can use the following class names. The color will also be applied to the buttons.

```
cm-shuffle-box-theme-default (Slategray)
cm-shuffle-box-theme-blue
```

Here’s an example of this theme with shortcode:

```
all groups
not assigned  
    Accordion Tag Cloud
Add Terms
Alphabetical List
Alphabetical Tag Cloud
Alphabetical Tag Index
Artificial Intelligence
Auto Links
Auto Terms
bbPress Topics
Categories
Create Terms
Current Post
Custom Taxonomies
Custom URL
Dandelion API
default category
Delete Terms
Delete Unused Terms
Display
Gutenberg
Hidden Terms
IBM Watson
Linked Terms
Manage Terms
Media Tags
Merge Terms
Open Calais
OpenAI
Parent Categories
Post Filter
Post List
Posts Screen
Private Taxonomies
Related Posts
Remove Terms
Rename Terms
Schedule Auto Terms
Simple Tags
Suggest Terms
Synonyms
Tag Cloud
Tag Groups
Tags
Taxonomy Archives
TaxoPress
TaxoPress Pro
Term Description
Term Meta
Term Order
Term Slugs
Terms Display
Terms for Current Post
Terms Screen
Uncategorized category
Understanding Content
WooCommerce
WooCommerce Product Categories
WooCommerce Product Tags
WordPress API
WordPress Categories
WordPress Search  

  (function(){
    const options = {
      divIdInner: 'tag-groups-shuffle-box-6a815c832870d_inner',
      addPremiumFilter: false,
      timeoutMilliSecs: 100,
      initialGroup: -1,
      layoutMode: 'fitRows'
    };

    if (typeof TagGroupsShuffleBox !== 'undefined' && jQuery !== 'undefined') {
            const obj = Object.create( TagGroupsShuffleBox );
      obj.init(options);
    } else {
      jQuery(document).ready(function(){
        setTimeout(function(){
          const obj = Object.create( TagGroupsShuffleBox );
          obj.init(options);
        }, 500);
      });
    }
})()
```

[Click here for more details on Shuffle Box themes](https://taxopress.com/docs/custom-color-scheme-shuffle-box/).

---

## Further CSS Customization

Advanced users with some knowledge of CSS can simply copy the corresponding lines from the file /css/frontend.css, change the class names and modify them to create their own variations. Save your customized styling to your child theme’s style.css file or in the WordPress customizer so that changes won’t be overwritten with the next plugin update.

You can find further help [in this article on modifying existing themes](https://taxopress.com/docs/how-can-i-change-the-colors-and-other-styling/).

---

## Create Your Own Accordion and Tab Themes

**Source:** [https://taxopress.com/docs/creating-your-own-theme/](https://taxopress.com/docs/creating-your-own-theme/)

The Tag Groups plugin comes bundled with several themes provided by jQuery UI. These apply to Alphabetical Tag Cloud, Tabbed Tag Cloud and the Accordion Tag Cloud features.

Alternatively, you can also use your own theme. The easiest way to achieve this is to create one using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). In this guide we’ll show the six steps to create a new theme.

- Go to [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/).
- You can click “Roll Your Own”, or pick a ready-made theme from the “Gallery.”
- Under the “Roll Your Own” tab, you can modify the Font Settings, Corner Radius, Header/Toolbar, Content, and more. In the center part of the page you can see a preview of your theme.

- When you’re finished, click the yellow “Download theme button”.
- On the next “Download Builder” page, select the version 1.12.x.

- Go to the settings at the bottom and enter as “CSS Scope” the class .tag-groups-cloud (including the leading dot).
- Download the file.

- Unpack the downloaded zip file. You will need the “images” folder and the “jquery-ui.theme.min.css” file.

- Create a new folder inside your*/wp-content/uploads* folder. For example, the folder can be “my-theme”.
- Add your two items into the folder.

- Go to “Tag Groups” in your WordPress admin area, then “Front End”, then “Themes and Appearance”.
- Enter the name of this new folder in the “own theme” field.
- Save the changes and check your new design with a Alphabetical Tag Cloud, Tabbed Tag Cloud, or Accordion Tag Cloud display.

You can also leave the field for your custom theme empty. You may want to do this for example if the theme of your blog already provides tabs and you like to blend the tag cloud into this design.

If the styling doesn’t appear, check if your uploaded files have the correct permissions. Try to load the CSS and images directly in your browser (like http://www.example.com/wp-content/uploads/my-theme/jquery-ui.theme.min.css).

---

## How To Use Gutenberg Blocks With Tag Groups

**Source:** [https://taxopress.com/docs/how-to-use-gutenberg-blocks/](https://taxopress.com/docs/how-to-use-gutenberg-blocks/)

Most features of the Tag Groups plugin are available both as shortcodes and as Gutenberg blocks.

Both ways render exactly the same on the page, but they are very different in how you configure their options.

In a block you can select available options from menus with self-explanatory names, while for the shortcode you would have to look up IDs and slugs and compile them to lists. Shortcodes can be confusing for unexperienced users because they require you to type identifiers and parameters correctly, to use unformatted quotes and to remove HTML from the code.

If you are using the Gutenberg editor, it is therefore recommended to try first the block version of a feature.

---

## How to insert a block

On the post or page edit screen, click on the “plus in a circle” icon and search for the name, for example “tag cloud” or “toggle post filter”. You can also type a “/” (forward slash) in a new line and start typing the name.

Hint: Type “Tag Groups” or search for the “Tag Groups” category to find all of our blocks.

When you hover your mouse over a block in the library, you will see an image with a sample.

Then you insert the block by clicking on it.

---

## How to configure a block

After you inserted the block, select it by clicking once into it. You will notice that the right side bar (the “Inspector”) shows now the options of this block.

If you don’t see the sidebar, open it by clicking on the cogwheel icon in the top-right corner.

You can switch the sidebar between “Document” options and “Block” options. You will need the Block options.

Some options depend on others and therefore appear only after you activated the more general option. Before you can enter the placeholder of a search field, for example, you first have to enable the search field where that placeholder appears.

### Contextual Help

The ? icon at each option takes you to a page of the documentation with more help.

### Previewing the Block

Most blocks offer a live preview where you can see how changing the options affects the output. This preview is only approximate and not fully functional. For example, you cannot click on links or search for posts inside a block. The final appearance might also look different, depending on your theme and other factors.

The live preview can be turned off in the Back End settings, under the Gutenberg tab.

### Other things you can do

Blocks can be moved around (click on the arrows or grab the handle), duplicated (use the three-dot menu above the block), placed inside column blocks or used for reusable blocks (alone or after selecting multiple blocks), which is useful to create elements that can be easily inserted and that should look always the same on all pages.

Another useful feature is the Undo function (return-to-left-side arrow on top) that lets you undo actions step by step.

---

## Transforming Blocks into Shortcodes

If you want to switch back from Gutenberg to the classic editor, you first need to transform your Tag Groups blocks to shortcodes. You find this feature in the menu directly at the top left corner of the block. The resulting shortcode will contain all settings that are different than the default.

Some shortcodes offer more advanced options than the corresponding blocks. In that case too you may want to transform the block.

Please note that a shortcode cannot be converted back to a block.

---

## How to Use Shortcodes With Tag Groups

**Source:** [https://taxopress.com/docs/how-to-use-shortcodes/](https://taxopress.com/docs/how-to-use-shortcodes/)

The Tag Groups plugin provides a large number of shortcodes to help display your terms and posts.

Shortcodes are something like placeholders. You insert them into the body of a post, page or text widget and they will be replaced in the output with something different, depending on the code you use.

Shortcodes are mostly provided by plugins and themes. If you deactivate a plugin or theme, all of its shortcodes that you used will now appear unprocessed on the frontend, the way you see them in the editor.

---

## What Tag Groups Shortcodes Look Like

Shortcodes are enclosed by square bracket and they start with a shortcode’s specific name (or identifier), followed by a space and then optional parameter-value pairs. Parameters are predefined for each shortcode.

Together with their values, parameters look like this: 
```
size=12 button=large title="Hello there!"
```

. All parameter-value pairs are separated from each other by spaces.

Here is a full example of a shortcode with parameters and values:

```
[tag_groups_alphabet_tabs exclude_letters="Z" smallest=16]
```

- “tag_groups_alphabet_tabs” is the identifier of the shortcode
- “exclude_letters” is a parameter and “Z” is its value
- “smallest” is second parameter and “16” is its value

It’s possible to add more details to the display created by the shortcode. You can use “prepend” to add details before the term. You can use “append” to add details after the term.

```
[tag_groups_alphabet_tabs prepend="Tag: " append="{count}"]
```

- “tag_groups_alphabet_tabs” is the identifier of the shortcode.
- “Tag: ” will be added before each term name.
- “{count}” will show the number of posts attached to each term. It will be shown after the term name.

---

## Troubleshooting Tag Groups Shortcodes

If a shortcode doesn’t work or one or more parameters don’t have any effect, double-check the following points:

1. Check for**typos** in the code or the parameters.
2. When you copy and paste shortcodes from a web site, make sure you **don’t copy over any formatting**.
3. Try to **re-type all double quotes** since curly or tilted quotes are not recognized by WordPress.
4. If the value of a parameter contains **spaces**, then you need to enclose it in double quotes.
5. If you need to use **quotes** inside the value, you can use single quotes or double quotes, what ever you haven’t used for the outer enclosure. Example: 
```
parameter="here is 'some text'"
```

. Some shortcodes, however, cannot handle both types of quotes, if the text becomes part of the HTML. Just try which one works.
6. Avoid nesting or overlapping of shortcodes since WordPress is sometimes confused on how to handle them.
7. Avoid HTML code in parameter values because WordPress tries to “fix” it and thinks that the HTML outside the shortcode continues inside that value.

---

## Gutenberg is Also Available

If you don’t want to mess around with shortcodes and parameters, you can also get the same results with Gutenberg, which is the default WordPress editor since version 5.0. All tag cloud shortcodes exist as Gutenberg blocks and you simply configure them through a user interface.

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjwvc3ZnPg==)

---

