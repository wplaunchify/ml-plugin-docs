# Advanced Header Navigations

*Category from Kadence Blocks documentation*

---

## Getting started with Advanced Header/Navigations

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/advanced-header-navigations/](https://www.kadencewp.com/help-center/docs/kadence-blocks/advanced-header-navigations/)

Kadence Blocks features the Advanced Header Block and Advanced Navigation Block. These are powerful Blocks that grant you the ability to create impressive Headers directly from the WordPress Editor. Blocks can be added directly in the Advanced Header, allowing extensive control over the design of your Header. This guide will go over how you can get started with and start using Advanced Header and Navigations across your website.

Kadence Advanced Header Related Blocks: The Advanced Header includes the Advanced Navigation and Navigation Link Blocks. Below are resources for technical documents for each Block.
[-Header (Adv) Block Documentation](https://docs.nexcess.com/software/kadence/blocks/kadence-header-adv-block/)[-Navigation (Adv) Block Documentation](https://docs.nexcess.com/software/kadence/kadence-navigation-advanced-block/)[-Navigation Link Block Documentation](https://docs.nexcess.com/software/kadence/kadence-navigation-link-block/)**-Search (Adv) Block Documentation-Site Identity Block Documentation**

The Advanced Header Row and Section Blocks are locked by default and should not be unlocked or modified directly. Doing so may cause the Advanced Header Block to break. This applies to the Top Row, Middle Row, and Bottom Row Blocks, as well as the nested Left Section, Center Section, and Right Section Blocks within the main Header (Adv) Block.

Creating an Advanced Header

To get started with Advanced Headers, go to the **Kadence -> Advanced Headers** section in your WordPress Dashboard. From there, select the **Add New Advanced Header** button at the top to create a new custom header.

![Headers Page](https://docs.nexcess.com/wp-content/uploads/2026/06/Headers-Page.jpg)

When setting up a new Advanced Header, you have the option to start from a blank template or choose from a variety of pre-built options. Kadence offers prebuilt templates, including Basic and Multi-Row headers, as well as mobile-specific designs. These designs are pre-populated and designed using Blocks and can be edited to meet your design goals.

![Header Setup](https://docs.nexcess.com/wp-content/uploads/2026/06/Header-Setup.gif)

Below are examples of some of the available prebuilt headers and mega menu layouts.

*Advanced Header Basic Desktop Layout Examples:*

![Desktop Templates](https://docs.nexcess.com/wp-content/uploads/2026/06/Desktop-Templates.jpg)

*Advanced Header Multi-Row Desktop Layout Examples:*

![Multi Columns](https://docs.nexcess.com/wp-content/uploads/2026/06/Multi-Columns.jpg)

*Advanced Header Tablet/Mobile Layout Examples*

![Mobile Templates](https://docs.nexcess.com/wp-content/uploads/2026/06/Mobile-Templates.jpg)

Adding Blocks to the Header

Use the [Visual Builder](https://docs.nexcess.com/software/kadence/blocks/visual-builder-off-canvas-settings/) to add Blocks to your Header. Toggle the **Visual Builder** on or off by selecting the Header (Adv) Block and clicking the Visual Builder button in the Block Toolbar. To move the Visual Builder to the top of the page, simply click the **Move to top** button within the Visual Builder.

![Visual Builder Toggle and Movement](https://docs.nexcess.com/wp-content/uploads/2026/06/Visual-Builder-Toggle-and-Movement.gif)

Hover over any section of the Visual Header and click on the Plus Icon to add Blocks to your Header.

![Adding Blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Adding-Blocks.gif)

Blocks inside the Visual Builder can be clicked on and dragged around to move them to different sections of the Header.

![Moving Blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Moving-Blocks.gif)

You have three Header Rows available: Top, Middle, and Bottom. Each Header Row contains a Left Section, Center Section, and Right Section.

![Row Sections](https://docs.nexcess.com/wp-content/uploads/2026/06/Row-Sections.jpg)

![Header Rows and Sections](https://docs.nexcess.com/wp-content/uploads/2026/06/Header-Rows-and-Sections.jpg)

Within each of these sections, there are additional placement areas, providing precise control over block positioning. These placement areas are nested inside the Left and Right sections of a Header Row. Specifically, the Left Section includes placements for Left and Center Left, while the Right Section offers placements for Right and Center Right. This structure allows for accurate block positioning, giving you fine control over your Header Row layout.

![Nested Sections](https://docs.nexcess.com/wp-content/uploads/2026/06/Nested-Sections.jpg)

Use various Blocks across your Header to fully customize the Header to meet your needs. Here is a list of some Blocks to get you started.

- Use a [Site Identity Block](https://docs.nexcess.com/software/kadence/site-identity-block/) to display the Site Logo on your Advanced Header.
- Use [Advanced Navigation Blocks](https://docs.nexcess.com/software/kadence/kadence-navigation-advanced-block/) to design Navigations. Multiple Advanced Navigation Blocks can be added to a single header. *View the section below for more information on getting started with Advanced Navigation Blocks.*
- Use [Advanced Button Blocks](https://docs.nexcess.com/software/kadence/advanced-buttons/) to add *call-to-actions* to the Header.
- Use an [Advanced Text Block](https://docs.nexcess.com/software/kadence/blocks/advanced-heading-block/) to display the Site Title and non-linked texts.
- Use the [Search (Adv) Block](https://docs.nexcess.com/software/kadence/search-advanced-block/) to add a Search Element to your Header.

Tablet/Mobile Headers

The Tablet and Mobile Headers are shared and can be customized using the Tablet / Mobile Tab of the Visual Builder.

![Tablet:Mobile View](https://docs.nexcess.com/wp-content/uploads/2026/06/TabletMobile-View.jpg)

For the Tablet/Mobile Header, it’s common to use an Off Canvas Trigger Block to open the Off Canvas Area, where the navigation menu is displayed. This approach keeps the header clean and provides a more compact navigation experience on smaller screens, rather than displaying the entire navigation directly in the header.

![Off Canvas Trigger](https://docs.nexcess.com/wp-content/uploads/2026/06/Off-Canvas-Trigger.gif)

Use the Trigger Block Settings to customize the Trigger Block styles.

![Off Canvas Trigger Block Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Off-Canvas-Trigger-Block-Settings.jpg)

*To learn more about the Trigger Block and settings, click here.*

When adding an Advanced Navigation Block to the Off Canvas Area or on a Mobile Header in general, use the Responsive Block Controls to modify the Tablet and Mobile Block Settings.

Learn more about the Off Canvas Area below.

![Responsive Controls](https://docs.nexcess.com/wp-content/uploads/2026/06/Responsive-Controls.jpg)

Screen Size to switch to Mobile.

In the **Header (Adv) Block Settings -> Advanced Tab -> Structure Settings**, notice the **Screen Size to Switch to Mobile** setting. This setting controls the breakpoint at which the *Header (Adv)*will switch from Desktop mode to Tablet/Mobile mode. 

For example, see the block settings and outcome below. When changing the *Screen Size to switch to Mobile Header* to *900*, the header will begin breaking at 900px instead of 1024px..

![Screen Size to Switch](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Size-to-Switch.jpg)

![Switching Screen Size](https://docs.nexcess.com/wp-content/uploads/2026/06/Switching-Screen-Size.gif)

*Click here to learn how to simulate a mobile environment on a desktop.*

**Note:**This setting only affects the **Advanced** **Header** and **doesn’t** **apply** to the inner Kadence Blocks. For example, if you’re using the **Advanced Navigation Block**, it will still follow the default Kadence Blocks breakpoints, even if you’ve customized the tablet/mobile header screen size settings. 
*(Click here to learn about the default Kadence breakpoints.)*
If you’re reusing the same **Kadence Navigation** within an**Advanced Navigation Block** across both **Desktop** and **Tablet/Mobile** headers and plan to set a custom *Screen Size to Switch to Mobile Header*, it is recommended to create a separate *Kadence Navigation* for the *Tablet/Mobile Header*. This applies to any blocks that are reused responsively within the headers and helps avoid any conflicts between the block’s responsive behavior and the header’s custom responsive settings.

Here is an example where **responsive** **settings** may **conflict**: In the screenshot above, the Screen **Size to Switch to Mobile Header** is set at **900px**. If you were reusing the same Kadence Navigation in Advanced Navigation Blocks for both Desktop and Mobile, you may use the responsive settings to make the Tablet/Mobile Navigation appear vertical. 

When doing these things in conjunction, there will be a point at which the Desktop header will present as vertical due to the custom 900px switch being applied.

![Improper Output](https://docs.nexcess.com/wp-content/uploads/2026/06/Improper-Output.jpg)

To resolve this, consider creating and using a new Kadence Navigation specifically for the **Off-Canvas Area**. 

*(You can create and duplicate Kadence Navigations from the Dashboard -> Kadence -> Navigations page. See the GIF on the right.)*

![Duplicate](https://docs.nexcess.com/wp-content/uploads/2026/06/Duplicate.gif)

Once you’ve created a separate **Kadence** **Navigation** specifically for Tablet/Mobile headers, edit the Advanced Header, go to the **Off Canvas Area**, and replace the original navigation with your new tablet/mobile-specific version.  From there, you can adjust the block settings to suit your tablet and mobile layout requirements. (See the GIF below for reference.*)*

![Fixing the difference](https://docs.nexcess.com/wp-content/uploads/2026/06/Fixing-the-difference.gif)

See Example

Hide Example

The Off Canvas Area

The **Off** **Canvas** **Area** is a feature of the **Advanced Header Block**. Using an *Advanced Navigation Block*alone **will not** grant you access to the Off Canvas Area.

Whenever a Header includes a Trigger Block, the Off Canvas Area will become accessible within the Visual Editor. Trigger Blocks can be added to either the Desktop Header, the Tablet/Mobile Header, or both. However, there is only one Off Canvas Area, meaning that if a Trigger is added to both the Desktop and Tablet/Mobile Headers, both will open the same Off Canvas Area.

**Desktop Trigger Example:**

![Desktop Off Canvas](https://docs.nexcess.com/wp-content/uploads/2026/06/Desktop-Off-Canvas.gif)

**Mobile Trigger Example:**

![Mobile Trigger](https://docs.nexcess.com/wp-content/uploads/2026/06/Mobile-Trigger.gif)

Once a Trigger is added to the Header, the Off Canvas Tab will become available for use. Blocks can be added to the Off Canvas Area in the same way Blocks are added to the Header in general.

![Off Canvas Area](https://docs.nexcess.com/wp-content/uploads/2026/06/Off-Canvas-Area.gif)

Additionally, when opening the Off Canvas Tab, use the Block Settings to modify the Off Canvas Area.

*To learn more about the Off Canvas Area and settings, click here.*

Customizing the Header

Use the Header Block Settings to Customize the entire Header.

![Block Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Block-Settings.jpg)

Each Header Row has a Settings Icon. Click on the Settings Icon to modify the styles of the selected Row.

![Header Row Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Header-Row-Settings.jpg)

Sticky and Transparent Headers

Use the [Header (Adv) Block Settings](https://docs.nexcess.com/software/kadence/blocks/kadence-header-adv-block/#header-adv-block-settings) to enable and use a Sticky and/or Transparent Header.

![Sticky and Transparent Headers](https://docs.nexcess.com/wp-content/uploads/2026/06/Sticky-and-Transparent-Headers.jpg)

To learn more about using Sticky and Transparent Headers, [click here](https://docs.nexcess.com/software/kadence/sticky-transparent-adv-headers/).

Creating an Advanced Navigation

Get started with an Advanced Navigation by adding a **Navigation (Adv) Block** to a page. This can be done either within or outside of an Advanced Header Block. Once the Navigation (Adv) Block is added, you will be prompted to either select an existing navigation or create a new one.

The **Navigation (Adv) Block** can be added anywhere blocks are available.

![Adding Navigation outside of Header](https://docs.nexcess.com/wp-content/uploads/2026/06/Adding-Navigation-outside-of-Header.gif)

When using Advanced Header templates, click on the navigation placeholder text to select an existing navigation or create a new one.

![Adding Navigations inside headers](https://docs.nexcess.com/wp-content/uploads/2026/06/Adding-Navigations-inside-headers.gif)

When creating a new navigation, the **Navigation Builder** will open. Here, you can set the navigation orientation, add posts, pages, and other navigation links, and modify existing navigation links.

![Navigation Builder](https://docs.nexcess.com/wp-content/uploads/2026/06/Navigation-Builder.jpg)

![Add Links from Toolbar](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-Links-from-Toolbar.jpg)

Navigation links can also be added outside of the Navigation Builder. To do this, select the **Navigation (Adv) Block** and click on the **Plus Icon** in the Navigation Block or from the Block Toolbar. You can title your new navigation link/item and use the **Navigation Link Block** settings to customize it

![Adding Nav Link Blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Adding-Nav-Link-Blocks.gif)

Creating a Sub Menu

Sub Menu Dropdowns can be created in multiple ways. Primarily, they can be created using the [Navigation Builder](https://docs.nexcess.com/software/kadence/blocks/kadence-navigation-builder/). In the Navigation Builder, expand a Navigation Link and use the Add Sub Menu Link button to add a new Sub Navigation Link to the expanded one.

![Creating a Sub Menu](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-a-Sub-Menu.gif)

You can also create Sub Menu Items using the Block Toolbar. When selecting a [Navigation Link Block](https://docs.nexcess.com/software/kadence/kadence-navigation-link-block/), click on the Sub Menu Icon in the Block Toolbar to add a new Navigation Link as a Sub Menu Item. You can search for an existing page or use the Navigation Link Block Settings to add a URL and Label to the new Navigation Link.

![Creating a Sub Menu](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-a-Sub-Menu-1.gif)

Drag Navigation Menu Items and nest them using the Gutenberg List View to also create Sub Menus.

![Creating Submenus](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-Submenus.gif)

Learn more about using Sub Menus by [clicking here.](https://docs.nexcess.com/software/kadence/blocks/advanced-navigation-sub-menus-mega-menus/#creating-sub-menus)

Creating a Mega Menu [(Pro)](https://www.kadencewp.com/kadence-blocks/pro/)

To create a Mega Menu, select a Navigation Link and enable the Mega Menu setting in the Block Settings. You can then choose a pre-made layout or start from scratch, adding and styling content as needed.

![Create Mega Menu](https://docs.nexcess.com/wp-content/uploads/2026/06/Create-Mega-Menu.gif)

Mega Menus can also be created through the Block Toolbar. To do this, select a Parent Navigation Link Block and click on the icon of an arrow pointing to a rectangle.

![Creating a Mega Menu Via Block Toolbar](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-a-Mega-Menu-Via-Block-Toolbar.gif)

Add any Block inside of the Mega Menu to customize it as preferred.

![Mega Menu Blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Mega-Menu-Blocks.gif)

Use the Navigation Link Block Settings to set a Width for the Mega Menu. This can be set to Default, Content Width, Full Width, Menu Container Width, or Custom Width.

![Mega Menu Width](https://docs.nexcess.com/wp-content/uploads/2026/06/Mega-Menu-Width.jpg)

Learn more about using Mega Menus by [clicking here.](https://docs.nexcess.com/software/kadence/blocks/advanced-navigation-sub-menus-mega-menus/#creating-mega-menus-pro)

Navigation Links Advanced Configurations

Navigation Link Blocks are versatile and can be customized and used for many purposes. Some features worth mentioning include the option to add Description Texts, Images/Icon, and Highlight Labels features. To learn how to get the most out of the Navigation Link Block, [click here](https://docs.nexcess.com/software/kadence/blocks/navigation-link-block-tips/).

Navigation Links can be customized primarily through the [Advanced Navigation Style Block Settings](https://docs.nexcess.com/software/kadence/kadence-navigation-advanced-block/#style-settings). These styles apply to all Children Navigation Links for the select Advanced Navigation Block. To customize Navigation Links on an individual basis, use the [Navigation Link Block Settings](https://docs.nexcess.com/software/kadence/kadence-navigation-link-block/#navigation-link-block-settings) instead.

Adding Advanced Headers sitewide

Advanced Headers are compatible with both Classic WordPress Websites and Full Site Editing (FSE) websites. To integrate Advanced Headers into the Kadence Theme, use the Kadence Theme Customizer Settings to select an Advanced Header. With **Kadence Theme Kit Pro**, you can utilize Hooked Elements to apply Headers Conditionally across your website. Additionally, add Advanced Headers to Full Site Editing Templates to use it across a FSE Website.

Advanced Header Blocks work similarly to Patterns and are Synced across the website. So whenever you edit a specific Advanced Header in one part of your website, it will also update across all instances of that Advanced Header. This also applies to Advanced Navigation.

Via Kadence ThemeTo add Advanced Headers to the Kadence Theme, you must first create an Advanced Header. This can be done using the Dashboard -> Kadence -> Headers page.

![Add New Kadence Header](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-New-Kadence-Header.jpg)

Once a Header is created, navigate to the Customizer, go to the Header Settings, and enable the Use Block Header setting. Then, select the Advanced Header you wish to use as your Kadence Theme Header and publish the page.

![Using Advanced Headers in the Kadence Theme](https://docs.nexcess.com/wp-content/uploads/2026/06/Using-Advanced-Headers-in-the-Kadence-Theme.gif)

This will apply the Advanced Header across the entire Kadence Website.Via Hooked Elements (Pro)[Kadence Theme Kit Pro](https://www.kadencewp.com/kadence-theme/premium/) features [Hooked Elements](https://docs.nexcess.com/software/kadence/theme/use-element-hooks/). Use a Hooked Element to automatically insert Advanced Headers across your website to display Headers Conditionally.

Then, Enable Hooked Elements from the**Dashboard -> Appearance -> Kadence**page.

![Enable Hooked Elements](https://docs.nexcess.com/wp-content/uploads/2026/06/Enable-Hooked-Elements.jpg)

Once Hooked Elements are enabled, navigate to the **Appearance -> Kadence -> Elements** page and create a new **Content Section Element**.

![Content Section Element](https://docs.nexcess.com/wp-content/uploads/2026/06/Content-Section-Element.gif)

Add a Header (Adv) Block to the page, and customize it as preferred.

![Header Element](https://docs.nexcess.com/wp-content/uploads/2026/06/Header-Element.gif)

Once done, use the Element Settings to specify where the Element will appear. Under **Placement**, select the **Replace Header** option. Then, expand the **Display Settings** and choose the **Show On** setting to apply it to your desired display options.

![Element Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Element-Settings-1.jpg)

Once saved, the new Hooked Element will replace the Standard Header, allowing you to use Advanced Headers Conditionally across your Kadence website.Via FSE ThemeFor Full Site Editing websites, it is recommended to use the Header Block as the primary block in your Header Pattern or Template. [Click here to learn more about using and adding Advanced Headers to Full Site Editing websites.](https://docs.nexcess.com/software/kadence/blocks/headers-footers-full-site-editing/)

---

