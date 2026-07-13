# Use Element Hooks

*Category from Kadence Custom Fonts documentation*

---

## How to use Element Hooks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/use-element-hooks/](https://www.kadencewp.com/help-center/docs/kadence-theme/use-element-hooks/)

One of the features that [Kadence Theme Kit Pro](https://www.kadencewp.com/pricing/) adds to the Kadence theme is called **Hooked Elements** (or Element Hooks) which provides an interface to build an element using the WordPress Gutenberg editor (or custom code) and hook it to one of the several locations on your site’s pages so it appears exactly where and when you want.

In short, element hooks allow you to add content in different areas of a page, with unlimited customization options.

One possible use case would be for adding a notification bar above the site header for announcements that automatically expire after a set date for seasonal banners.

Here’s a detailed walkthrough on how an affiliate disclosure text can be automatically added above the entry content for all posts that have a specific tag:

## Step 1

Install and activate the Kadence Theme Kit Pro plugin. It is included in [Kadence Plans](https://www.kadencewp.com/pricing/) and can also be purchased individually.

Enter your license key and email at Appearance > Kadence if you have not already.

Enable 
```
Hooked Elements
```

.

![Kadence Pro - Hooked Elements](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-pro-addons-1024x537-1.png)

## Step 2

Click on the Customize link to be taken to the Elements page. This page can be reached via Appearance > Kadence > Elements.

Click **Add New** to add a new element.

![Adding a new element in Kadence](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-elements-add-new-1024x218-1.png)

Here you are presented with four options.

**CONTENT SECTION** lets you build the element using the Customizer blocks.

**FIXED SECTION** allows you to create content that is fixed to your site.

**TEMPLATE** lets you make templates that replace sections like a sidebar or page.

**HTML EDITOR** lets you build your element using HTML code.

In this example, we shall go with the CONTENT SECTION.

![Kadence Element Setup](https://docs.nexcess.com/wp-content/uploads/2026/06/Element-Setup-1024x504-1.jpeg)

Enter a title and the content for your element.

Click on the Element Settings icon next to the gear icon near the top right.

![Kadence Element Settings icon in the Gutenberg editor](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-elements-element-settings-1024x231-1.png)

Configure the element’s behavior by selecting where it should appear.

![Configuring an element's settings](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-hooked-elements-configuration.png)

In this example, we have set the element to be added before entry content on all single posts that are tagged 
```
Kadence
```

.

The screenshot below shows all the options in the **Display Settings**‘ Show On dropdown:

![Element Hooks Display Settings options](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-hooked-elements-show-on-options.png)The last “Single Simple URLs” is a Custom Post Type in our demo site

The screenshot below shows all the options in the **Placement** dropdown:

![Kadence element hook placement options](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-hooked-elements-placement-options-scaled.png)

What is a Custom Hook?

The dropdown list for **element hook placement** includes the most commonly used hooks. However, it is not possible to include every available hook from the theme and plugins.

That is why there is an option to **specify a custom hook**. You can use this if you are familiar with an existing hook in your theme or plugin that you would like to target. Please note that:

- The hook must already exist in the theme or plugin. This feature only lets you hook into existing hooks, it does not create new ones.
- Using custom hooks requires a **deeper understanding of the theme or plugin code**, since you will need to know the exact hook name and where it is applied.

An element with a higher priority hooked to the same location as another will appear below or after the one with lower priority in the HTML output.

```
Note: A specific tag or category will appear under the "Select Posts By:" only if there is at least one published post having that tag/category.
```

**Publish** your changes.

Here’s the result:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-hooked-elements-final-result-1024x576-1.png)

### User Settings

User Settings section enables you to specify whether the element should be shown to all users, only the logged-out, the logged-in, or users having a specific role.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-element-hook-user-settings.png)

### Expires Settings

Expires Settings section enables you to specify whether the element should automatically be removed (not shown) at a specified date and time.

![Expires Settings section when adding an element in Kadence](https://docs.nexcess.com/wp-content/uploads/2026/06/kadence-element-hook-expires-settings.png)

Viewing Elements on a Page

When using the **Admin Toolbar**, you can view the current number of elements on a specific page. This makes it easier to track where Elements are being used.

Hover over the element count to directly edit any of the listed elements on the page. Just click on the element you wish to edit, and it will open up within the element editor.

![Elements Tracking](https://docs.nexcess.com/wp-content/uploads/2026/06/Elements-Tracking.gif)

---

