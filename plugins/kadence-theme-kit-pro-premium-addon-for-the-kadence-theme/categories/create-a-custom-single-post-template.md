# Create A Custom Single Post Template

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## How to Create a Custom Single Post Template with Kadence Hooked Elements

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/create-a-custom-single-post-template/](https://www.kadencewp.com/help-center/docs/kadence-theme/create-a-custom-single-post-template/)

The [Kadence Theme Kit Pro plugin](https://www.kadencewp.com/kadence-theme/theme-kit-pro/) offers powerful layout customization through **Hooked Elements**. This feature allows you to design fully custom Single Post templates without touching code. This guide will walk you through creating a custom Single Post layout using Kadence blocks, including:

- Dynamic post titles
- Featured images
- Post content
- Layout structuring with Row Layout blocks.
- WordPress **Comments** block
- Optional breadcrumbs with Kadence shortcode

What you’ll need:

- **Kadence Theme** is installed and active.
- **Kadence Blocks** plugins (*Free* and *Pro*) are installed and active.
- **Kadence Pro Addon** with **Hooked Elements** enabled.

![Required Theme](https://docs.nexcess.com/wp-content/uploads/2026/06/Required-Theme.jpg)

![Required Plugins](https://docs.nexcess.com/wp-content/uploads/2026/06/Required-Plugins.jpg)

![Enable Hooked Elements Premium](https://docs.nexcess.com/wp-content/uploads/2026/06/Enable-Hooked-Elements-Premium-scaled-1.jpg)

### 1. Create a New Hooked Element

1. In your WordPress dashboard, go to **Appearance > Kadence > Elements.**
2. Click **“Add New”** and choose **“Template”**.
3. Give your element a name like “Custom Single Post Template”.

![Creating a Template Element](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-a-Template-Element.gif)

### 2. Design the Layout Using Kadence Blocks

1. Add a **Row Layout** Block.
2. Choose **Row Layout** (select single or multi-column based on your layout needs)

Select a 2-column layout to create:

- A main content area
- Area for “sidebars”.

### 3. Insert Dynamic Single Post Title

1. Add the **Text(Adv)** block to the column (Section) of the Row Layout block.
2. Click the **“Dynamic Title”** icon at the top toolbar.
3. Choose **“Post Title”** for the *Content* option.
4. Retain the “**Current Post**” selection for the *Content Source* option. This means the block will dynamically show the content of the current post that the user is viewing.
5. Optional: Style the text using the block settings.

### 4. Add the Featured Image

1. Add an **“Image(Adv)”** block
2. Enable **“Use Dynamic Image”**.
3. Set the source to **“Post Featured Image”**.

### 5. Add the Post Content

1. Add a **Dynamic HTML** block.
2. Select **“Post Content”** for the *Source* option.

### 6. Add WordPress Comments Block

To allow user interaction on your posts, add the **“Comments”** block. Add it after the block that shows the post content.

### 7. Add Breadcrumbs (Optional)

Some users will want to show breadcrumbs. While we don’t have a block to show them, there is an available shortcode to call.

1. Add a **Shortcode** block before the post title.
2. Add this code:

[kadence_breadcrumbs]

## 8. Set the Hooked Element (Template) Settings

1. **Placement**: Choose 
```
Replace Single Post Content
```
2. **Display Settings → Show On**: Select 
```
Single Posts
```

- Note that you can select a Custom Post Type or Single Pages here, depending on your intended use.
3. **User Settings**: Choose which users can see this (e.g., All).

## 9. Publish and review

1. Publish the hooked element.
2. Go to Dashboard > Posts and view multiple posts to review how the template looks.

After following the steps here, experiment with different block layouts or use conditional display rules to target specific content types to customize further.

Reach out to *Kadence Support* if you encounter any issues.

---

