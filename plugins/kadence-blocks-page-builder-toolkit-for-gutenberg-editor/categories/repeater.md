# Repeater

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Repeater Block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/repeater/](https://www.kadencewp.com/help-center/docs/kadence-blocks/repeater/)

The Kadence Repeater block is a no-code way to display [ACF](https://www.advancedcustomfields.com/resources/repeater/) Repeater Field and/or [Meta Box](https://docs.metabox.io/extensions/meta-box-group/) Group Field data on your pages, posts, and templates using your favorite Kadence blocks.

**Works With:**

- [ACF Repeater Field Types](https://www.advancedcustomfields.com/resources/repeater/)
- [MetaBox Group Field Types](https://docs.metabox.io/extensions/meta-box-group/)

So if you have a repeater or group field to display on your site. Instead of writing custom templates or snippets in PHP, use the Kadence Repeater block!

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Sample-1.png)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Repeater-Sample-A-scaled-1.jpg)

Using this block requires that you have the following installed:

- Kadence Blocks
- Kadence Blocks Pro
- [Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/)
OR
- [Meta Box](https://wordpress.org/plugins/meta-box/)
AND
- [Meta Box Group](https://metabox.io/plugins/meta-box-group/)

## Overview

The Kadence Repeater block can be used in the Gutenberg editor to display the data in ACF repeater fields and Meta Box cloneable group fields.

Use it when you want to leverage the content management experience of these fields, but don’t want the hassle of writing PHP code to display them. Using the Repeater block has many benefits over using PHP templates:

- Build in Gutenberg
- You can display and manage your repeater field content all in one place. No coding required!
- Use Your Blocks
- Data can be displayed with the powerful and flexible Kadence Blocks you know, mix in any blocks you want for complete control.
- Stay Flexible
- Change the design and layout anytime right in the editor, no need to edit template files or search for old code.

Similar to the WordPress Query Loop block, the Repeater block loops over groups of content and lets you choose, with blocks, how you want the group data to be displayed.

![Sample Repeater Block Front End](https://docs.nexcess.com/wp-content/uploads/2026/06/Sample-Repeater-Block-Front-End.jpg)

To use it, [set up your ACF repeater field](https://www.advancedcustomfields.com/resources/repeater/) or [set up a cloneable Meta Box Group](https://docs.metabox.io/extensions/meta-box-group/) field (the Group field should be cloneable, not the sub fields) and enter in the data you want to display. Then place a Repeater block in the Gutenberg editor. The wizard will guide you through selecting a repeater source and setting up an initial layout. Then edit the repeater template as you see fit with your Gutenberg editing tools and blocks.

![Repeater Options](https://docs.nexcess.com/wp-content/uploads/2026/06/RepeaterOptions-1024x748-1.jpg)

Blocks that support displaying dynamic data with the [Kadence Dynamic Content](https://docs.nexcess.com/software/kadence/dynamic-content/) system will also support displaying repeater data in the same way with the “Use Repeater Context” option.

![Use Repeater Context](https://docs.nexcess.com/wp-content/uploads/2026/06/UseRepeaterContext.jpg)

Some great blocks to use include:

- Gallery (adv)
- Image (adv)
- Video popup
- Dynamic HTML

## Example Usage

Let’s say you have an ACF repeater field called “Sponsors”. The repeater field has sub fields for:

- Sponsor Title
- Sponsor Logo
- Sponsor Link
- Sponsor Description

You want to display a list of the sponsors, with a logo and a link, on your homepage.

![](https://docs.nexcess.com/wp-content/uploads/2026/07/iddB1Fa5fA_og2BtrNQCmitxumQ0ylUj0uTkqONTzTkOVCGf1GmV9U-BZqG5x3crB3IzsuXgxu1sfDdMCJ0HGuikX27EDO6xsPWv-p4_WCacZ6MRKqHDfPkVQ9CDKVZroAYM65hF2I9QGSXNZcN5ezY.png)

Normally, you would need to write PHP code in a snippet, shortcode, or template to display the data in your repeater.

Now with the Kadence Repeater block, we can show this data easily, in a manageable way, and easily match the site’s existing design.

Simply add the Kadence Repeater block from the Gutenberg editor and select the repeater field to pull data from.

![](https://docs.nexcess.com/wp-content/uploads/2026/07/0fo3z3QzdGcUgdBG0b69qe6xQGe7u8zcFCK92WONxOQ2xmeE0SBV_qMfQHBLQRmyzOO50W5CoFmfTWI_i2SjzTayVRAHZ9te7HPg-ifLwZHIJQFR6MqQtcqsT3TcVxNK61YVT_K6D3bI8WanNsvU-rM.png)

Then, select from one of the starter layouts to begin.

![](https://docs.nexcess.com/wp-content/uploads/2026/07/Xvh7EO5Bj9ZOTXkCkxVBqTzocLMusriCdN4VI7Hq2DzbL3yQYN36C5wyNbrndE_axkh01kVEM1qncGhPqxkO4mHOuIyvm9PoH5MUu6j3Kg1zEvNnyMRkY7eCWX9vkfC8LuY6g205b63DA0Vb_OB6aGA.png)

This will load in the repeater data and will place some initial blocks in a template. It may even prefill some data for you depending on the structure of your repeater field.

From here we can freely edit the blocks in the template. You can use any block to design your template just how you want.

For a sponsors section we can use the following blocks to display our content:

- Sponsor Title -> Text (Adv)
- Sponsor Logo + Link -> Image (Adv)

Sponsor Description -> Dynamic HTML

![](https://docs.nexcess.com/wp-content/uploads/2026/07/kSz1qkTRVId8EF_8P07VJLLO3Q5utrev55TD0kco2opf6gpoGJyju_9Hf3BIhyiRaN3WFzlYICAyn199dWTDnHajf_KkLY4BbK_tAnVUlopwf3Gzep-frxoF3gghthCJxuHlOjqpLIDHuv5TmXPhVBg.png)

Finally, we need to link our repeater sub field data to the blocks that will display them. This will work just like the Kadence Blocks Pro Dynamic Content system. When editing a block that supports dynamic content you’ll see this icon:

![](https://docs.nexcess.com/wp-content/uploads/2026/07/k_6rVdHeKqQiix82V8DhsdYFqD5SS1kpgbCiA1nv00ZPSS2rADMZZcaF2Z1tUSurhcMaqz2PE92TvDI9g9jF053thPvdvObSpm_gjAGS0Pe0ntF0A54s-Plj1zHZ0ttRD8W6CTCbRmf0x_jW3Um0f2s.png)

Use this to populate the field / block with some dynamic, in this case repeater content.

If we click into the image block we’ll find the icon next to the image source field.

![](https://docs.nexcess.com/wp-content/uploads/2026/07/9GWqgQgFgKoLWAYjGZO4kpHJNbcSldeGTNf-EfD0kPImUwwtK1BK-F3alrXSnvwJhHGBwqD3BjMZfFZncxkKCpE2hDmPz8MRf31d7LaAWAGeKbr7lZsebgdKlHhrEZYNYqgo8HWhfc22_RuBS7YXF94.png)

Enable the “Use Repeater Context” option to load data from our containing Repeater block. Pick “Sponsor Logo” from the dropdown of available sub fields presented.

Repeat this process with dynamic fields for the link, title, and description.

![](https://docs.nexcess.com/wp-content/uploads/2026/07/h-Y5cbkRtIvQA88AjctRaTAgNV5YmPuewypc5NhyhvQu03TYXhzP_h4q-8-bWPg6G19j-Zwt1lqK6IxIxXUao2yUQzrJXFx-Hsy1eTtr-epauijd26qAzF9vVPFpLZokJJVQc97cTQow0Qt7vAXEAoE.png)

Now that your data is hooked up you can continue to refine the design of the sponsors section using any block or design options you choose.

When using a **Repeater** **Block** inside of a **Kadence** **Element**, it is important to ensure the **Preview Post** is set to display a **Post** **Type** and **Post** that has the **Repeater** **Field** assigned to it. This will ensure the *Repeater Block* can detect and use the *Repeater Field* of the selected *Post Type*.

![Preview Post Type](https://docs.nexcess.com/wp-content/uploads/2026/06/Preview-Post-Type-scaled-1.jpg)

## Block Settings

You can access the Repeater Block Settings to customize your Repeater Block.

![Repeater Block Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Repeater-Block-Settings-scaled-1.jpg)

### General Tab

You can use the General Block Settings to adjust some of the general settings for your Repeater Block.

You can use the Source setting to pick the source from which your repeater uses to pull from.

You can use the Repeater Field setting to select the Custom Repeater Field that you would like to display on the Repeater Block.

The Columns setting allows you to set a number of Columns for Desktop, Tablet, and Mobile Devices.

The Column Gap setting allows you to set a Column Gap for Desktop, Tablet, and Mobile Devices.

The Row Gap setting allows you to set a Row Gap for Desktop, Tablet, and Mobile Devices.

![Repeater General Block Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/Repeater-General-Block-Setings.jpg)

### Advanced Tab

You can use the Advanced Block Settings to adjust some of the more Advanced settings for your Repeater Block.

You can use the Padding setting to set a Padding on Desktop, Tablet, and Mobile Devices.

You can use the Margin setting to set a Margin on Desktop, Tablet, and Mobile Devices.

You can also [Save the Block as the Default](https://docs.nexcess.com/software/kadence/set-block-defaults/).

You can use the Advanced Settings to add an HTML Anchor ID to the Repeater Block.

You can also assign Additional CSS Class(es).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Repeater-Advanced-Block-Settings-333x1024-1.jpg)

## Custom Option/Settings Pages

ACF allows you to create Option Pages, while Meta Box allows you to create Settings Pages. You can display Repeater Custom Fields from an Option/Settings Page using the Repeater Block. To do this, you must select your Options or Settings Page as the Source of your Repeater Block when creating it.

![Options Table Selection](https://docs.nexcess.com/wp-content/uploads/2026/06/Options-Page-1024x403-1.jpg)

Once you select your Options or Setting Page as the Source, your Repeater Custom Field should be selectable under the next dropdown selection, Repeater Field.

---

