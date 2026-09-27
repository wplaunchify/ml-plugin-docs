# Hooked Element Shortcodes

*Category from Kadence Custom Fonts documentation*

---

## How To Use Hooked Element Shortcodes

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/hooked-element-shortcodes/](https://www.kadencewp.com/help-center/docs/kadence-theme/hooked-element-shortcodes/)

Kadence Elements allows custom content to be added throughout a site. Normally, Elements are placed using **Placement Settings** or custom hooks. Each Element also has a unique shortcode. This shortcode can be added inside pages, posts, widgets, or templates to display that Element exactly where needed.

Shortcodes follow the Element’s unique ID, for example: 
```
[kadence_element id="123"]
```

. The ID ensures the correct Element displays.

## What Is A Hooked Element Shortcode?

A shortcode is a small piece of text placed inside the WordPress editor to display dynamic content. Each Kadence Element automatically generates its own shortcode based on its Element ID.

This allows the same Element to be:

- Inserted into multiple pages
- Reused across different post types
- Positioned more precisely than standard placement options allow

The shortcode does not replace Display Settings. Instead, it works together with them.

## How To Find The Shortcode

1. In the WordPress dashboard, go to **Appearance > Kadence > Elements**.
2. Locate the desired Element in the list.
3. Copy the shortcode shown in the **Shortcode** column.

![Element Shortcode](https://docs.nexcess.com/wp-content/uploads/2026/06/element-shortcode-1.jpg)

## How Display Settings Affect Shortcodes

The **Element Display Settings** control where an Element is allowed to appear. These settings still apply when using a shortcode.

Elements can be limited to:

- Specific pages or posts
- Certain post types
- Entire site

**Important:** If the page does not match the Element’s Display Settings, the shortcode will not display anything. Most shortcode issues are caused by visibility rules, not the shortcode itself.

## How To Create A Shortcode For Universal Use

If the goal is to use the same Element in multiple locations:

1. Open the Element under **Appearance > Kadence > Elements**.
2. Scroll to **Display Settings**.
3. Set the rules to show **Entire Site**.
4. Save the Element.

This setup allows the shortcode to work anywhere it is inserted. Display conditions, such as user or device visibility, can still be applied when needed.

## How To Insert A Hooked Element Shortcode

Shortcodes can be inserted inside the WordPress Block Editor.

### Insert Into A Page Or Post

1. Open the page or post in the editor.
2. Add a **Shortcode** block. *(Paragraph blocks can also be used.)*
3. Paste the Element shortcode.
4. Click **Update** or **Publish**.
5. View the page on the front end to confirm it displays correctly.

![Using an Element Shortcode](https://docs.nexcess.com/wp-content/uploads/2026/06/using-element-shortcode.jpg)

---

