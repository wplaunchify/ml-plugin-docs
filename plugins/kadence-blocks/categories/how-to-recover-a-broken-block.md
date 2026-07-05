# How To Recover A Broken Block

*Category from Kadence Blocks documentation*

---

## How to Recover a Broken Block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-recover-a-broken-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-recover-a-broken-block/)

WordPress blocks can sometimes “break” and trigger the “**This block contains unexpected or invalid content**” message. When this happens, WordPress offers an “**Attempt recovery**” option to try and restore the block’s intended structure.

![WordPress block error: Block contains unexpected or invalid content](https://res.cloudinary.com/lwcom/images/w_1024,h_115,c_scale/f_auto,q_auto/v1778705212/prod/Screenshot-2025-07-21-at-8.49.30 AM/Screenshot-2025-07-21-at-8.49.30 AM.png?_i=AA)
## Why Does This Happen?

There are several reasons why this may happen.  Here are a few causes:

1. **Block Format or Version Mismatch** – Gutenberg blocks have a specific structure. Occasionally, updates to WordPress core, themes, or plugins, may change this structure and existing content may not match the new format.
2. **Manual HTML Edits** – Editing a post or page in the Code Editor can sometimes introduce syntax errors or alter required block parameters.
3. **Copy and Pasting Content** – Pasting content from external sources like Google Docs, Microsoft Word, or your favorite AI assistant can introduce invalid HTML that conflicts with block structure.
4. **Plugins or Snippets Modifying Content** – Some plugins and/or PHP snippets may filter or edit page content while being saved.  This can sometimes break blocks and cause unexpected results.
5. **Plugin Conflicts** – Sometimes a plugin may cause a conflict with WordPress core, theme, or other plugins.

## How To Repair Broken Blocks

If this message appears repeatedly for a specific block, you should reach out to the block author to determine the cause and a long term solution.  For isolated instances, you have a few options.

### Attempt Recovery

When you click the “**Attempt recovery**” button, WordPress tries to:

- Compare the current HTML structure with the expected block format.
- Reconstruct the block using the saved data or fallback content.
- Revert to a “Classic Block” or HTML block if recovery fails.

### Alternate Methods

In addition to the “Attempt recovery” button, WordPress also offers a few other options.  Clicking the three dots on the right will reveal your choices.

![WordPress - Broken block additional options](https://res.cloudinary.com/lwcom/images/w_1024,h_291,c_scale/f_auto,q_auto/v1778705205/prod/Screenshot-2025-07-21-at-8.43.15 AM/Screenshot-2025-07-21-at-8.43.15 AM.png?_i=AA)
#### Resolve

This option will attempt to recover the block and provide two options (if possible) for you to choose from:  Convert to HTML or Convert to Blocks.  You might see something like the image below where you can choose the best solution for your situation.

![WordPress - Resolve block recovery options](https://res.cloudinary.com/lwcom/images/w_1024,h_288,c_scale/f_auto,q_auto/v1778705190/prod/Screenshot-2025-07-21-at-8.45.06 AM/Screenshot-2025-07-21-at-8.45.06 AM.png?_i=AA)
#### Convert to HTML

This options will attempt to convert the broken block content into a Custom HTML block.  This can be saved as is or you can use this as a guide to recreate your content using new blocks.

![WordPress - Block Recovery - Convert block to HTML](https://res.cloudinary.com/lwcom/images/w_1024,h_172,c_scale/f_auto,q_auto/v1778705182/prod/Screenshot-2025-07-21-at-9.33.09 AM/Screenshot-2025-07-21-at-9.33.09 AM.png?_i=AA)
#### Convert to Classic HTML Block

This option will insert a Classic Editor block containing the HTML content of the broken block.  You can save this as is or you can attempt to “Convert to blocks” to fully restore your content to its original form.

![WordPress - Block Recovery - Convert to Classic block](https://res.cloudinary.com/lwcom/images/w_1024,h_137,c_scale/f_auto,q_auto/v1778705175/prod/Screenshot-2025-07-21-at-9.30.24 AM/Screenshot-2025-07-21-at-9.30.24 AM.png?_i=AA)
### Troubleshooting Conflicts

If you suspect your issue may be related to a plugin or theme conflict, you can attempt to isolate the issue by temporarily deactivating plugins and/or switching to a WordPress default theme.  For assistance with this, please see our document: [Temporarily Deactivating Plugins](https://www.liquidweb.com/docs/kadence-theme/temporarily-deactivating-plugins/)

## Preventing Broken Blocks

First and foremost, it would be a good idea to track down the cause of a broken block to avoid repeat cases in the future.  Checking with the block author is a good first step.  Here are a few additional tips to avoid broken blocks:

- Do not edit blocks in the Code Editor unless absolutely necessary.
- Keep plugins and themes up to date, but be cautious with custom block plugins.
- Test updates on a staging site, especially if you’re using custom blocks or complex layouts.
- Avoid copying/pasting from formatted sources without cleaning the content first.
- Always do a full backup before updating WordPress core, themes, and plugins.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

