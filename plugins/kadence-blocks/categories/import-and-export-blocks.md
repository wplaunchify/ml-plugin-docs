# Import And Export Blocks

*Category from Kadence Blocks documentation*

---

## How to Import and Export Blocks or Sections Between Websites

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/import-and-export-blocks/](https://www.kadencewp.com/help-center/docs/kadence-blocks/import-and-export-blocks/)

**WordPress** makes it possible to **copy**, **share**, and **reuse** blocks and layout sections **between** **websites** without installing extra plugins. This includes core WordPress blocks, **block-based themes,** and **advanced** **blocks** such as **Kadence** **Blocks**.

This guide explains the supported ways **to move blocks and layouts between sites**, export reusable content, and **share block code with Support Techs** for troubleshooting or testing.

Before You Begin

Before starting, confirm the following:

- Both websites use the **WordPress block** **editor**.
- The destination site supports the **same** **block** **types**. For example, Kadence Blocks should be installed if Kadence Blocks are being pasted.
- Access is available to **wp-admin** with permission to edit posts or pages.

**Important:** Styles from themes, global settings, or custom CSS may look different on another site, even when the block structure copies correctly.

Copy and Paste a Single Block or Section

This approach works well for one block or a full layout section, such as a Row Layout, Group, or Columns block.

1. Open the page or post on the source website.
2. Select the block or parent layout section.
3. Click the block toolbar **Options** menu (three dots).
4. Select **Copy**.
- Or use **Ctrl + C** on Windows.
- Or use **Cmd + C** on macOS.
5. Open the destination page or post on the other website.
6. Click into an empty paragraph or add a new block.
7. Paste the content.
- Use **Ctrl + V** on Windows.
- Use **Cmd + V** on macOS.

The block or section is recreated with its structure and settings preserved.

![Copy and Pasting Blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/copy-paste-1.gif)

Copy and Paste All Blocks on a Page

This method is helpful when moving an entire page layout.

1. Open the page in the WordPress block editor.
2. Click **Editor Settings** (three dots in the top-right corner).
3. Select **Copy all blocks**.
4. Open the destination page.
5. Click into an empty paragraph or add a new block.
6. Paste using **Ctrl + V** or **Cmd + V**.

All blocks from the source page are pasted in the same order and layout.

![Copy all blocks](https://docs.nexcess.com/wp-content/uploads/2026/06/Copy-all-blocks.gif)

Importing/Exporting Reusable Patterns

Synced/Reusable Patterns are helpful when the same layout is needed across multiple pages or websites.

1. Select the block in the editor.
2. Click the block toolbar **Options** menu.
3. Select **Create a pattern**.
4. Save the pattern.
5. Click the **+** button inside the editor.
6. In the panel that appears, select the **Synced Patterns** icon.
7. Click **Manage My Patterns**.
8. Find the saved pattern.
9. Click **Export as JSON**.

This downloads a 
```
.json
```

 file containing the block layout.

![Exporting Patterns](https://docs.nexcess.com/wp-content/uploads/2026/06/export-json.gif)

To import a Synced Pattern

1. Go to **Appearance > Design > Patterns**.
2. Click **Import from JSON**.
3. Upload the exported file.
4. From there, you can import the pattern into any page.

![Importing Patterns](https://docs.nexcess.com/wp-content/uploads/2026/06/import-pattern.gif)

Copy Block Code for Support or Troubleshooting

Block code can be shared with Support Techs to help reproduce layouts or troubleshoot issues. For best results, all related content should be wrapped in a single parent block. Preferably a [Section](https://docs.nexcess.com/software/kadence/section-block/) or [Row Layout Block](https://docs.nexcess.com/software/kadence/row-layout-block/).

1. Confirm the layout is inside a parent block such as a Section Block, Row Layout, or Group.
2. If no parent block exists:
- Add a new parent block.
- Move all related blocks inside it.
3. Select the top-level parent block.
4. With the parent block selected, click the block toolbar **Options** menu.
5. Select **Copy**.
6. Paste the copied content as plain text into one of the following:
- A support ticket.
- A text editor.
- A document or message field that does not auto-format content.

![Submit Code to Support](https://docs.nexcess.com/wp-content/uploads/2026/06/submit-code-to-support-1024x578-1.gif)

**Important:** Copying only inner blocks may result in incomplete or broken layouts when shared. When importing Kadence Blocks, the best method is to add an empty [Text (Adv) Block](https://www.kadencewp.com/kadence-blocks/custom-blocks/advanced-heading-block/) to the page and paste the content there.

Using Pattern Hubs and Design Libraries

[Kadence Pattern Hubs](https://docs.nexcess.com/software/kadence/create-a-pattern-hub/) allow layouts to be shared across connected websites.

When available, layouts can be saved to a Pattern Hub or Design Library and inserted directly into other sites without exporting files. This approach is helpful for teams managing multiple websites or repeating layouts across projects.

1. Save the layout as a Design Library item or Element Template on Site A.
2. Enable **Kadence Pattern Hub** (Pro feature) and connect Site B as a client site.
3. Insert the layout directly from the Kadence Design Library on Site B.

Related Resources

- [How to Create Your Own Kadence Cloud](https://docs.nexcess.com/software/kadence/create-a-pattern-hub/)
- [How to Create Patterns in WordPress with Kadence](https://docs.nexcess.com/software/kadence/blocks/create-patterns/)

---

