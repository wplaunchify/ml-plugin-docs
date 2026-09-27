# Create A Template Element

*Category from Kadence Custom Fonts documentation*

---

## Kadence Template Hooked Elements

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/create-a-template-element/](https://www.kadencewp.com/help-center/docs/kadence-theme/create-a-template-element/)

Kadence [Hooked Elements](https://docs.nexcess.com/software/kadence/theme/use-element-hooks/) includes a powerful element type called **Template Elements**, which lets you take dynamic control over key areas of your website. With Template Elements, you can replace default sections such as the **Header**, **Above Content Hero**, **Single Post Content**, **Archive Content**, and more.

This gives you the freedom to customize more than just single posts; you can also design unique layouts for pages, custom post types, and archive pages. You can also replace other key parts of your site, like the header, footer, hero section, and sidebars, on specific pages.

Build your layouts using **Kadence Blocks**, and bring in dynamic content like post titles, featured images, and custom field values with ease. To make full use of Template Elements, you’ll need access to **Kadence Blocks Pro** for Dynamic Content functionality. Both **Kadence Theme Pro** and **Kadence Blocks Pro** are included in the **Kadence Plus Plan**.

**Note:** Template Hooked Elements are intended for **regular** **Posts** and **Custom** **Post** **Types** that are not WooCommerce products. Hooked Elements will not work for overriding WooCommerce Loop Items, Single Product pages, or Archive pages. If you want to take control over these WooCommerce pages, you’ll need [Kadence Shop Kit ⧉](https://www.kadencewp.com/kadence-shopkit/pricing/). You can learn more about Woo Templates and how to customize your WooCommerce pages [here ⧉](https://docs.nexcess.com/software/kadence/product-templates/).

Getting Started

You must have the **Kadence Theme Kit Pro** plugin installed, activated, and licensed on your website. *(Click here to learn more.)* Once *Theme Kit Pro* is active on the website, enable **Hooked** **Elements** from the**Dashboard -> Appearance -> Kadence** page.

![Enabled Hooked Elements](https://docs.nexcess.com/wp-content/uploads/2026/06/Enabled-Hooked-Elements-scaled-1.jpg)

Once **Hooked** **Elements** are enabled, navigate to the **Dashboard -> Appearance -> Kadence -> Elements** page and create a new element by clicking the **Add New Element** button.

![Add New Element](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-New-Element.jpg)

Then, select the**Template Element** type to begin creating a new *Template Element*.

![New Template Element](https://docs.nexcess.com/wp-content/uploads/2026/06/New-Template-Element-scaled-1.jpg)

Depending on your goal, you may need to use different blocks or content to add to the Template Element. Use the Element Settings to control the Placement and Display Settings of the element.

Placement Settings are important because they determine where the Template Element applies, whether it’s on Single Posts, replacing the header, changing archive content, and so on. [Click here](#placement-settings) to learn about each placement option and see some helpful blocks to get you started.

Element Settings

Use the **Element** **Settings** to control the placement, along with various display settings to determine where and who sees the element. 

The *Element Settings* can be found at the top right corner of the element editor. Look for an icon with a paper and pencil.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-13.png)

Preview Settings

The Preview settings allow you to set the context and display size for the Element preview. The preview settings are helpful when designing an Element and will only affect what is seen in the editor.

**EDITOR WIDTH (PX):**  Setting the editor width can be helpful if you are creating an Element that is targeting an area which is limited in width such as the Sidebar.

**SELECT PREVIEW POSTS TYPE:** Select Posts, Pages, or a Custom Post Type.

**Select Preview Post:**  Choose a post to use as an example while creating your Element.

![Kadence Element - Preview Settings modal](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-27-at-3.28.15-PM.png)

Placement Settings

The **Placement** **Settings** can be used to determine what type of content the **Template** **Element** will take effect on. For example, this can be set to replace the header, single post content, etc. Each placement option will allow you to use the Template Element differently. Learn about each placement option below, along with learning about key details to get started with that placement type.

Use the [Display Settings](#display-settings) to determine which posts/pages/archives the Template Element will appear on. (For example, single posts, single pages, or category archives, etc.)

Replace Header

The **Replace Header** placement lets you swap out your site’s default header with a custom one. This is especially useful if you want to show a unique header on certain pages, like landing pages or a special part of your site. You can build your custom header using the **Advanced Header block**, then use *Display Settings*to control exactly where it appears. This gives you full control to show different headers based on the needs of each page.

![Replace Header](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Header.gif)

**Result:**

![Replace Header Result](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Header-Result.gif)

---

Replace Above Content Hero

The **Replace** **Above** **Content** **Hero** placement setting allows you to replace the default Kadence page/post/archive titles sections. These title sections can be enabled from various [Kadence Layout Settings](https://docs.nexcess.com/software/kadence/theme/post-page-archive-layout-settings/).

For example, take a look at the image below. This shows the default **Kadence Theme Title/Hero** area. When you use the **Replace Above Content Hero** placement, it will override this section with your custom content.

![Example Above Content Hero](https://docs.nexcess.com/wp-content/uploads/2026/06/Example-Above-Content-Hero-scaled-1.jpg)

You can use blocks like the [Dynamic List Block](https://docs.nexcess.com/software/kadence/dynamic-list-block/) to display the current taxonomies of the current post. You can use the [Advanced Text Block](https://docs.nexcess.com/software/kadence/blocks/advanced-heading-block/) and [Dynamic Content](https://docs.nexcess.com/software/kadence/dynamic-content/) to display the post title, date, author information, and other dynamic content. Additionally, you can use the 
```
'[[kadence_breadcrumbs]]'
```

shortcode to display the current page/post breadcrumbs.

![Replace Above Content Hero](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Above-Content-Hero.gif)

**Result:**

![Replaced Above Content Hero](https://docs.nexcess.com/wp-content/uploads/2026/06/Replaced-Above-Content-Hero-scaled-1.jpg)

---

Replace Single Post Content

The **Replace Single Post Content** placement setting allows you to take full control over the layout of single posts across your website. This can apply to single posts, single pages, and single custom post types.

In order to use this placement option properly, you need access to Kadence Blocks Pro. View our pricing [here](https://www.kadencewp.com/pricing/).

Use blocks, such as the [Row Layout Block](https://docs.nexcess.com/software/kadence/row-layout-block/) and [Section Blocks](https://docs.nexcess.com/software/kadence/section-block/), to create an initial design. Then, use *premium Kadence Blocks* and *Dynamic Content* to display your post/page content accordingly. Here is a list of some commonly used blocks and their purpose.

- [Advanced Text Block](https://docs.nexcess.com/software/kadence/blocks/advanced-heading-block/) – Use this block to display common dynamic contents, such as the post title, author name, post date, post custom fields, and more.
- [Dynamic List Block](https://docs.nexcess.com/software/kadence/dynamic-list-block/) – Use this block to display dynamic taxonomies, such as the current post category list or a custom taxonomy list.
- [Dynamic HTML Block](https://docs.nexcess.com/software/kadence/dynamic-html-block/) – This block is powerful, as it allows you to dynamically display the entire post content of the current post. (This consists of the post content added to the post in the editor.)
- [Query Loop (Adv) Block](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/) – Use the Query Loop (Adv) Block to display things like the related posts or other specific queries.
- [To display the breadcrumbs](https://docs.nexcess.com/software/kadence/theme/add-breadcrumbs-to-hooked-elements/), you can use the 
```
'[[kadence_breadcrumbs]]'
```

 shortcode.

![Replace Single Post Content](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Single-Post-Content.gif)

**Result:**

![Single Post Content Result](https://docs.nexcess.com/wp-content/uploads/2026/06/Single-Post-Content-Result.jpg)

You can use **Query Loop (Adv) Blocks** to display related posts. Just add a new Query Loop (Adv) Block to the element. Then, select the main Query Loop (Adv) Block and ensure the **Show Related Posts** option is enabled.

![Query Loop Related Posts](https://docs.nexcess.com/wp-content/uploads/2026/06/Query-Loop-Related-Posts-scaled-1.jpg)

The **Show Related Posts** feature only works out of the box with the default WordPress **Posts** post type and its built-in taxonomies (categories and tags).

If you’re using a **custom post type** or a **custom taxonomy**, this feature won’t automatically apply. However, you can [click here for a sample code](https://docs.nexcess.com/software/kadence/blocks/custom-queries-advanced-query-loop/#show-related-posts-for-custom-taxonomies) for how to customize the query and display related posts based on **any taxonomy** you choose.

For additional features, such as comments, you can use the Core WordPress Comments Blocks.

![comments](https://docs.nexcess.com/wp-content/uploads/2026/06/comments-1.jpg)

---

Replace Archive Content

The **Replace** **Archive** **Content** allows you to dynamically replace entire archive pages, such as the blog page, category pages, and other archive page types. The *Replace Archive Content* placement will completely override the entire archive page. This includes the title section and the loop content. This means you must manually create a loop to display the items of the archive.

This can be done by using the [Query Loop (Adv) Block](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/). The Query Loop (Adv) Block allows you to take complete control over the archive loop. From customizing the [Query Card](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/#query-card-block) to designing loop items to using [Filter blocks](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/#-filter-blocks) to add filtering options to the query.

When using a *Query Loop (Adv) Block* to take over an archive page, you must ensure the **Inherit Query From Template** option is enabled from the **Query Loop (Adv) Block Settings -> General Tab**.

For example, below is a default archive page that was created using the [Kadence Theme Archive Layout settings](https://docs.nexcess.com/software/kadence/theme/archive-layout-customizer-settings/): *(Using a Template Element will override the majority of Kadence Theme Archive Settings)*

![Original Archive Page](https://docs.nexcess.com/wp-content/uploads/2026/06/Original-Archive-Page-scaled-1.jpg)

Now, here is a **Template** **Element**, using a **Query Loop (Adv) Block** with filtering options, to display a query that *inherits the template*.

![Replace Archive](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Archive.gif)

Here is the final result on the front-end archive page.

![Replaced Archive](https://docs.nexcess.com/wp-content/uploads/2026/06/Replaced-Archive.jpg)

---

Replace Archive Loop Content

The **Replace Archive Loop Content** placement option allows you to take control over archive loops across your site. The *Replace Archive Content* placement replaces the entire archive page. While the Replace Archive Loop Content only overwrites archive loop items. This means things like the title area will remain unchanged.

When replacing an *Archive Loop Item*, you can use *Dynamic Content* and *Kadence Blocks* to dynamically display loop items.

- You can use **Advanced Text Blocks + Dynamic Content** to display things like the post title, date, and author name.
- You can use an **Advanced Image Block + Dynamic Content** to display the current post’s featured image.
- When using blocks like the **Advanced** **Button** **Block**, the **Section** **Block**, and **Advanced** **Text** **Blocks**, you also have an option to use a dynamic link. When using a dynamic link, you can select the **Post** **URL** to dynamically link to the current loop item’s single post.

Here is an example of an *Archive Loop Element* being created:

![Replace Loop Item](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Loop-Item.gif)

Result:

![Replace Loop Item](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Loop-Item-scaled-1.jpg)

This can be a great feature if you want to take complete control over your*Single Loop Items* on *Archive Pages*. For example, you can completely design the loop item from scratch, allowing you to insert custom content, such as short codes and custom fields, and much more!

---

Replace Sidebar

The **Replace** **Sidebar** placement option allows you to replace existing sidebars with custom ones. For example, you may use a sidebar layout in the [Single Post Layout Settings](https://docs.nexcess.com/software/kadence/theme/single-post-layout-customizer-settings/). In this case, you may want to use a custom or a special sidebar on one or multiple specific single posts. This is where the *Replace Sidebar placement* comes into play. 

Use the Replace Sidebar placement in combination with custom [Display Settings](#display-settings) to take complete control over sidebars across your website.

For example, imagine your site uses a Kadence Theme sidebar that appears on all single blog posts by default.

![Single Post Layout](https://docs.nexcess.com/wp-content/uploads/2026/06/Single-Post-Layout.jpg)

![Sidebar Demo](https://docs.nexcess.com/wp-content/uploads/2026/06/Sidebar-Demo-1024x851-1.jpg)

Now, let’s say you’ve created a custom sidebar element and assigned it specifically to a post titled *Women Can Choose to be Wealthy*.

![Replace the Sidebar](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-the-Sidebar.gif)

When you visit that post, you’ll see that the custom sidebar replaces the default one, while all your other posts continue to display the standard sidebar as usual.

![Replace Sidebar Result](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Sidebar-Result.gif)

---

Replace Footer

The **Replace Footer** placement allows you to replace the website footer across your website. This setting works similarly to the [Replace Header](#replace-header) placement, but for the footer instead.

When replacing the footer, it is recommended to use blocks like the following:

- [Row Layout Block](https://docs.nexcess.com/software/kadence/row-layout-block/): When using a Row Layout block, you can use the [Advanced Block Settings](https://docs.nexcess.com/software/kadence/row-layout-block/#advanced-settings) -> Structure Settings to set the HTML tag as a <footer>.
![Row Layout Footer](https://docs.nexcess.com/wp-content/uploads/2026/06/Row-Layout-Footer.gif)
- [Site Identity Block](https://docs.nexcess.com/software/kadence/site-identity-block/): This block can be used to display the current Site Logo.
- [Navigation Link Blocks](https://docs.nexcess.com/software/kadence/kadence-navigation-link-block/): Use Kadence Advanced Navigations to build custom footer navigations.

![Replace Footer](https://docs.nexcess.com/wp-content/uploads/2026/06/Replace-Footer-scaled-1.jpg)

Replace 404 Page Content

The last placement option is called **Replace 404 Page Content**. This placement allows you to take complete control over 404 pages on your website. 

**What is a 404 page?**
Whenever a page doesn’t exist, you may notice a page that indicates the page is non-existent. The default 404 page often says, **Oops! That page can’t be found.**

![Default 404](https://docs.nexcess.com/wp-content/uploads/2026/06/Default-404-scaled-1.jpg)

When replacing the 404 page, you should ensure you set the Display Settings to show on **Not Found (404)** pages.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-50.png)

You can test the 404 page by going to a page that doesn’t exist. For example, 
```
https://yoursite.com/notfound
```

.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-1-15.png)

Learn more [here](https://docs.nexcess.com/software/kadence/theme/make-a-custom-404-page/).

Display Settings

Use the **Display** **Settings** to determine where the element will take effect. Use the Add Rule button to include additional options.

- Available options: Entire Site, Front Page, Blog Page, Search Results, Not Found (404), All Singular, All Archives, Author Archives, Date Archives, Paged, Single Post, Category Archives, Tag Archives, Single Pages, Single Products, Brand Archive, Product Category Archives, Product Tag Archives, Product Brand Archives (Shop Kit), Products Archives, and Products Search.

Use the Exclude settings to add an exclusion. For example, if you wanted to show an element on all pages of a website, except one, you can use the exclude feature to prevent the element from showing on that specific page.

![Display Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Display-Settings.gif)

![Exclude](https://docs.nexcess.com/wp-content/uploads/2026/06/Exclude.jpg)

User Settings

Determine which user role(s) will be able to see the element in effect.

- **Options include:** All Users (Default), Logged Out Users, Logged In Users, or based on the available current website roles. 
- Use the *Add Rule button* to add more visibility options.

![User Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/User-Settings.gif)

Expires Settings

Enable this option to add an expiration to the element. Once the expiration is met, the element will no longer take effect.

![Expires](https://docs.nexcess.com/wp-content/uploads/2026/06/Expires-544x1024-1.jpg)

---

