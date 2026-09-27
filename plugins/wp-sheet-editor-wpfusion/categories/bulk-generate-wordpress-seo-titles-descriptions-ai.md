# Bulk Generate Wordpress Seo Titles Descriptions Ai

*Category from WP Sheet Editor - WPFusion documentation*

---

## How to Bulk Generate SEO Titles and Meta Descriptions with AI in WordPress (Yoast SEO, Rank Math, AIOSEO, SEOPress)

**Source:** [https://wpsheeteditor.com/bulk-generate-wordpress-seo-titles-descriptions-ai/](https://wpsheeteditor.com/bulk-generate-wordpress-seo-titles-descriptions-ai/)

You can use generative AI to write SEO titles and meta descriptions for WordPress posts in bulk instead of creating each one manually. **WP Sheet Editor – AI** lets you generate SEO metadata directly from a WordPress spreadsheet interface. You can enter a saved AI prompt shortcut in an SEO field, or use the **Bulk Edit** tool to find posts with missing metadata and generate titles or descriptions for all matching posts at once.

**This workflow works with the major WordPress SEO plugins.** Whether your site uses [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/), [Rank Math SEO](https://wordpress.org/plugins/seo-by-rank-math/), [All In One SEO (AIOSEO)](https://wordpress.org/plugins/all-in-one-seo-pack/), or [SEOPress](https://wordpress.org/plugins/wp-seopress/), the overall process is the same. WP Sheet Editor detects the SEO fields created by your plugin and displays them as editable spreadsheet columns. The main difference is the field name used by each SEO plugin.

Once you identify the correct SEO title, meta description, and focus keyword fields, you can use the same AI prompts, spreadsheet workflow, search filters, and bulk editing process regardless of which plugin you use.

The screenshots and examples in this tutorial use Yoast SEO field names for illustration. Your spreadsheet will display the corresponding fields from the SEO plugin installed on your site.

You can also use this workflow beyond standard WordPress posts. The same spreadsheet-based process works with pages, [WooCommerce products](https://wpsheeteditor.com/woocommerce-bulk-edit-seo-titles-descriptions-ai/), [events](https://wpsheeteditor.com/extensions/events-spreadsheet/), [courses](https://wpsheeteditor.com/extensions/courses-spreadsheet/), and other custom post types registered on your WordPress site.

## Why generate WordPress SEO metadata with AI?

Writing an SEO title and meta description for a single post or page is usually manageable. Updating hundreds or thousands of WordPress pages is much more time-consuming. Each piece of metadata needs to accurately describe the page, reflect its search intent, use the target keyword naturally when appropriate, and give searchers a clear reason to consider the result.

Generative AI can speed up the writing stage by creating an initial SEO title or meta description from the existing content, title, and keyword data in your WordPress database. You can then review the generated metadata and adjust anything that does not match your site’s topic, audience, or editorial style.

This is particularly useful when a site has a large backlog of posts with missing SEO titles or meta descriptions. Instead of opening each post individually, you can filter the spreadsheet for missing fields and process the matching rows in bulk.

**Important:** Before applying a bulk AI edit, use the preview option to inspect the generated results. If the output needs improvement, change the prompt and preview it again. Bulk Edit changes are written directly to the database, so review the results carefully and make a backup before applying large-scale changes.

The same approach works whether your focus keyword is stored in Yoast SEO, Rank Math, AIOSEO, or SEOPress. You simply reference the appropriate keyword field in your AI prompt.

## What you need to generate SEO titles and descriptions with AI

You need an active WordPress SEO plugin and the WP Sheet Editor tools that expose your SEO metadata as spreadsheet columns and connect those fields to an AI model.

### 1. WP Sheet Editor – Post Types

**WP Sheet Editor – Post Types** displays WordPress posts, pages, and custom post types in a spreadsheet. You can search, filter, bulk edit, export, and import your content from the spreadsheet interface. When an SEO plugin adds metadata fields to your content, WP Sheet Editor makes those fields available as editable columns.

You can download the plugin here:

[Download Posts, Pages, and Custom Post Types Spreadsheet Plugin](https://wpsheeteditor.com/buy-extension/?extension_id=886&utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/posts-pages-post-types-spreadsheet/?utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai)

### 2. WP Sheet Editor – AI

**WP Sheet Editor – AI** adds generative AI features to the spreadsheet. After connecting an AI provider, you can use prompts and saved prompt shortcuts to generate or rewrite values in WordPress fields. The generated text is returned to the corresponding spreadsheet cells, where you can review it before saving the changes.

You can sign up here:

[Sign up to the WP Sheet Editor - AI Service](https://wpsheeteditor.com/buy-extension/?extension_id=41738&utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/ai/?utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai)

### 3. An external AI API provider

WP Sheet Editor – AI connects to an external AI service through an API. You need an account with your chosen provider and the required API key or connection credentials.

WP Sheet Editor – AI supports providers including:

- [OpenAI](https://openai.com/) for text, image, and multimodal AI
- [OpenRouter](https://openrouter.ai/) for text and multimodal AI
- [Google Gemini Nano Banana](https://ai.google.dev/gemini-api/docs/image-generation) for image generation
- [LM Studio](https://lmstudio.ai/) for text, image, and multimodal AI
- Custom providers that are compatible with the OpenAI API format

See [this setup guide](https://wpsheeteditor.com/ai-setup/) for instructions on connecting an AI provider and configuring an LLM in WP Sheet Editor – AI.

## How to identify SEO fields for each WordPress SEO plugin

The workflow is similar across the main WordPress SEO plugins because the purpose of these fields is the same: an SEO title provides a search-facing title, a meta description provides a search-result summary, and the focus keyword or keyphrase identifies the primary search term you want to consider when generating the metadata.

The column names, however, depend on the SEO plugin installed on your site. Before creating an AI prompt, check the exact names displayed in your spreadsheet.

### Yoast SEO

- SEO Title
- SEO Description
- SEO Keyword

### Rank Math SEO

- Rank Math Title
- Rank Math Description
- Rank Math Focus Keyword

### All In One SEO

- AIO: Title
- AIO: Meta Description
- AIOSEO Focus Keyphrase

### SEOPress

- Seopress Titles Title
- Seopress Titles Desc
- SEOpress Analysis Target Kw

If your installation displays different column names, use the names shown in your own spreadsheet. AI prompt placeholders must match the actual field names so WP Sheet Editor knows which WordPress values to provide to the model.

## AI prompts for generating WordPress SEO titles and meta descriptions

The prompt determines what information the AI uses to create the metadata. The examples below use the existing WordPress title, post content, and target keyword as context. Test the prompts on a small number of posts first, then adjust the instructions to match your site’s audience, writing style, search intent, and SEO requirements.

### Prompt for generating SEO titles

Use this prompt to create an SEO title from the existing post information. Replace 
```
$Keyword field$
```

 with the exact name of your SEO plugin’s keyword column.

```
Generate a concise, engaging SEO title (50-60 characters) based on the $Title$ and $Content$, ensuring it includes the $Keyword field$. The title should be natural and compelling. Return plain text, free of quotation marks or unnecessary punctuation.
```

### Prompt for generating meta descriptions

Use this prompt to generate a meta description from the SEO title, post content, and target keyword. Replace the placeholders with the exact column names used by your SEO plugin.

```
Generate a compelling SEO description based on the $SEO Title field$ and $Content$, including the $Keyword field$. The description should be engaging, summarize the key points of the post, and encourage reader interest. Keep it under 155 characters for optimal search engine visibility. Return plain text only.
```

**Note about field placeholders:** The placeholder must match the spreadsheet column name exactly, including spaces and punctuation. Wrap the field name in dollar signs. For example, your spreadsheet may use 
```
$AIOSEO Focus Keyphrase$
```

 or 
```
$AIO: Focus Keyphrase$
```

.

If a prompt returns an empty result, check the corresponding spreadsheet column and copy its exact header into the prompt between the dollar signs. This is especially important when different SEO plugins use similar but not identical field names.

### Save your SEO prompts as global prompts

If you plan to generate SEO metadata regularly, save the prompts as global prompts instead of entering the entire instruction every time.

Go to **WP Sheet Editor > AI > Settings > Prompts**, then click **Add new**.

![Adding a new global AI prompt in the WP Sheet Editor AI settings screen](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31102952/yoast-seo-ai-wp-16.png)

Configure the prompt with these values:

- **Name:** Use a recognizable name such as “SEO Title” or “SEO Description.” After you save it, WP Sheet Editor creates a prompt slug that can be used as a shortcut, such as 
```
ai:seo-title
```

 or 
```
ai:seo-description
```

.
- **Prompt:** Enter the AI instructions and reference the appropriate SEO fields using their exact spreadsheet column names.
- **Save:** Save the prompt so it becomes available from your WordPress spreadsheets.

![Saving the SEO description prompt as a global prompt with its ai:seo-description slug](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31102905/yoast-seo-ai-wp-18.png)

Create two global prompts to start: one for SEO titles and another for meta descriptions. You can then reuse their shortcuts whenever you need to generate metadata.

If you manage several WordPress sites using different SEO plugins, remember that the field placeholders need to match the column names on each individual site. A prompt configured for one site’s SEO fields may need different placeholders on another site.

## Open your WordPress posts spreadsheet

Once your AI prompts are ready, open the spreadsheet containing the WordPress content you want to optimize.

Go to **WP Sheet Editor > Edit posts**. Your posts will appear in rows, while the WordPress fields and SEO metadata fields appear as columns.

![The WP Sheet Editor spreadsheet showing WordPress posts and their SEO metadata columns](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103610/yoast-seo-ai-wp-1.png)

## Generate SEO titles and meta descriptions directly in the spreadsheet

If you are working with a smaller group of posts, you can generate SEO metadata directly in spreadsheet cells using an **ai:prompt-slug** shortcut. This approach is useful when you want to control which individual rows receive an AI-generated value.

### Generate SEO titles

Enter your saved title prompt shortcut in the cells of your plugin’s SEO title column. Depending on the SEO plugin, this may be **SEO Title**, **Rank Math Title**, **AIO: Title**, or **Seopress Titles Title**.

For example, if your saved prompt has the slug **seo-title**, enter:

```
ai:seo-title
```

![The ai:seo-title shortcut entered in a WordPress SEO Title spreadsheet cell](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31104842/yoast-seo-ai-wp.png)

You can also enter a complete AI prompt directly into a cell:

```
ai:Generate a concise, engaging SEO title (50-60 characters) based on the $Title$ and $Content$, ensuring it includes the $SEO Keyword$. The title should be natural and compelling. Return plain text, free of quotation marks or unnecessary punctuation.
```

A saved shortcut is generally more convenient when you are processing multiple posts because you do not have to paste the full prompt into every cell.

After you enter the shortcut, WP Sheet Editor sends the prompt to the configured AI provider. A loading indicator appears while the AI request is processed.

![Loading indicator in a spreadsheet cell while AI generates an SEO title](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31105057/yoast-seo-ai-wp-2-1.png)

When processing finishes, the generated SEO title appears in the cell.

![AI-generated SEO title displayed in the WordPress spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103541/yoast-seo-ai-wp-2.png)

To generate SEO titles for several posts, paste the same shortcut into the corresponding cells in the SEO title column. Each row can use its own title, content, and keyword data as context for the AI request.

![AI SEO title shortcut entered in multiple spreadsheet cells to generate titles for several WordPress posts](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103516/yoast-seo-ai-wp-3.png)

After reviewing the generated titles, save the spreadsheet changes so the values are stored in your WordPress database.

![Saving AI-generated SEO titles in the WP Sheet Editor spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103448/yoast-seo-ai-wp-4.png)

### Generate meta descriptions

Generating meta descriptions follows the same process. Use your saved description prompt shortcut in your SEO description column. In this example, the shortcut is **ai:seo-description**.

Depending on your SEO plugin, the target column may be **SEO Description**, **Rank Math Description**, **AIO: Meta Description**, or **Seopress Titles Desc**.

![The ai:seo-description shortcut entered in multiple spreadsheet cells to generate SEO meta descriptions](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103423/yoast-seo-ai-wp-5.png)

When the AI finishes generating the descriptions, review the results and save the spreadsheet changes to store them in your WordPress database.

![Saving AI-generated SEO meta descriptions in the WordPress spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103358/yoast-seo-ai-wp-6.png)

## Bulk generate WordPress SEO metadata with AI

For a large content library, the **Bulk Edit** workflow is more efficient than entering an AI shortcut row by row. You can first filter your WordPress posts by an SEO field, such as an empty SEO title or meta description, and then apply an AI prompt to every row returned by the search.

This makes it possible to identify missing SEO metadata and generate it in batches rather than opening individual WordPress posts.

WP Sheet Editor also provides a [Bulk AI API](https://wpsheeteditor.com/privacy-policy-bulk-ai-api/) for processing large numbers of AI requests.

### Bulk generate SEO titles with AI

First, find the WordPress posts that do not have an SEO title. Open the **Search** tool.

![Opening the WP Sheet Editor Search tool to find WordPress posts missing SEO titles](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103331/yoast-seo-ai-wp-7.png)

Configure the advanced filter to return posts where the SEO title field is empty:

- Enable **Enable advanced filters**.
- **Field:** Select the SEO title column used by your plugin.
- **Operator:** =
- **Value:** Leave empty.
- Click **Run search**.

![Advanced filter configured to find WordPress posts with an empty SEO Title field](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103309/yoast-seo-ai-wp-8.png)

The spreadsheet will now display the posts that match the search, allowing you to work only with the rows that are missing an SEO title.

![Filtered WordPress posts missing SEO titles in the WP Sheet Editor spreadsheet](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103246/yoast-seo-ai-wp-9.png)

Next, open the **Bulk Edit** tool.

![Opening WP Sheet Editor Bulk Edit to generate missing SEO titles with AI](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103222/yoast-seo-ai-wp-10.png)

Configure Bulk Edit to generate an SEO title for every row in the current search:

- **Select the rows that you want to update:** Edit all the rows from my current search.
- **What field do you want to edit:** Select the SEO title column used by your plugin:
- SEO Title
- Rank Math Title
- AIO: Title
- Seopress Titles Title
- **Select type of edit:** Choose one of these options:
- **Global prompt:** Select the saved SEO title prompt, such as **AI command: SEO Title**.
- **AI Prompt:** Enter or paste the complete prompt manually.
- **AI Provider:** Select the configured provider you want to use if you have more than one provider available.
- Click **Show preview** to inspect the generated results.
- Review the preview and adjust the prompt if necessary.
- Click **Execute Now** to generate the SEO titles.
- **Important:** Bulk Edit writes the changes directly to the database. Make a backup before applying large-scale updates.

![WP Sheet Editor Bulk Edit configured to generate SEO titles with an AI prompt](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103200/yoast-seo-ai-wp-11.png)

### Bulk generate meta descriptions with AI

You can use the same process to find posts that are missing meta descriptions and generate the missing SEO descriptions in bulk.

Open the **Search** tool again.

![Opening the Search tool to find WordPress posts missing meta descriptions](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103331/yoast-seo-ai-wp-7.png)

Configure the filter to find posts with an empty SEO description field:

- Enable **Enable advanced filters**.
- **Field:** Select your plugin’s description field: SEO Description, Rank Math Description, AIO: Meta Description, or Seopress Titles Desc.
- **Operator:** =
- **Value:** Leave empty.
- Click **Run search**.

![Advanced filter configured to find WordPress posts with an empty SEO Description field](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103136/yoast-seo-ai-wp-12.png)

After the filtered posts appear, open the **Bulk Edit** tool.

![Opening Bulk Edit to generate missing SEO meta descriptions with AI](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103113/yoast-seo-ai-wp-13.png)

Configure Bulk Edit to generate a meta description for the filtered posts:

- **Select the rows that you want to update:** Edit all the rows from my current search.
- **What field do you want to edit:** Select the SEO description column used by your plugin:
- SEO Description
- Rank Math Description
- AIO: Meta Description
- Seopress Titles Desc
- **Select type of edit:** Choose either:
- **Global prompt:** Select the saved SEO description prompt, such as **AI command: SEO Description**.
- **AI Prompt:** Enter or paste the complete prompt.
- **AI Provider:** Select the provider configured for your AI requests.
- Click **Show preview** to review the generated descriptions.
- Adjust the prompt if the results need improvement.
- Click **Execute Now** to generate the meta descriptions.

![WP Sheet Editor Bulk Edit configured to generate SEO meta descriptions with an AI prompt](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103048/yoast-seo-ai-wp-14.png)

After the bulk operation finishes, the generated SEO titles and meta descriptions will be available in the spreadsheet. Review the output and save the changes when you are satisfied with the results.

![AI-generated SEO titles and meta descriptions for multiple WordPress posts](https://media.wpsheeteditor.com/wp-content/uploads/2025/01/31103019/yoast-seo-ai-wp-15.png)

## Optional: use AI to improve existing SEO metadata

You can also use the same AI workflow to rewrite or improve SEO titles and meta descriptions that already exist. This is useful when your site has older metadata that is too long, unclear, poorly aligned with the page content, or missing an important keyword.

For this workflow, the target cell must already contain a value because the AI needs existing metadata to review. If the SEO title or description is empty, use the generation prompts from the previous sections instead.

### Prompt for improving SEO titles

```
Refine the existing SEO title based on the $Title$ and $Content$, including the $Keyword field$. Keep it concise (50-60 characters) and engaging.
```

### Prompt for improving meta descriptions

```
Enhance the existing SEO description based on the $SEO Title field$ and $Content$, including the $Keyword field$. Keep it under 155 characters, focusing on clarity and appeal.
```

Replace the placeholders with your actual spreadsheet column names and save the prompts as global prompts. You can then run them from individual cells or use Bulk Edit after filtering the posts you want to update.

## Frequently Asked Questions

### Do I need to rewrite my AI prompts for each SEO plugin?

No. The instructions can remain the same. You mainly need to change the field placeholders so they match the exact column names used by the SEO plugin on your site. For example, you might reference 
```
$SEO Keyword$
```

 for Yoast, 
```
$Rank Math Focus Keyword$
```

 for Rank Math, 
```
$AIO: Focus Keyphrase$
```

 for AIOSEO, or 
```
$Seopress Analysis Target Kw$
```

 for SEOPress. If your spreadsheet uses different column names, use those exact names instead.

### Does WP Sheet Editor – AI work with the free versions of these SEO plugins?

Yes. This workflow uses the SEO title and meta description fields available in the supported SEO plugins. WP Sheet Editor reads and updates the values stored in those fields, so a paid SEO plan is not required for this workflow.

### Can I generate SEO titles and descriptions for WooCommerce products, pages, and custom post types?

Yes. The spreadsheet and Bulk Edit workflow can be used with WordPress posts, pages, WooCommerce products, and custom post types. Open the appropriate editor, locate the SEO fields provided by your SEO plugin, and use the same AI generation process.

### Do I need an API key from an AI provider?

Yes. WP Sheet Editor – AI connects to an external AI provider such as OpenAI or OpenRouter. You need an account with your chosen provider and the required API credentials. After configuring the provider, you can select it when running an AI prompt.

### Can I use custom AI prompts instead of the examples in this tutorial?

Yes. The prompts here are starting points. You can change the instructions, add information from other WordPress fields, include categories or taxonomies, define your preferred writing style, or create entirely different prompts. Save frequently used prompts as global prompts so you can reuse them across your spreadsheets.

### Will AI overwrite SEO metadata I already wrote manually?

It can if you apply an AI edit to rows that already contain SEO metadata. To preserve existing titles and descriptions, filter the relevant SEO field for empty values before running a generation prompt. This limits the bulk operation to posts that are actually missing metadata.

You can sign up here:

[Sign up to the WP Sheet Editor - AI Service](https://wpsheeteditor.com/buy-extension/?extension_id=41738&utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai#buy) - or - [Check the features](https://wpsheeteditor.com/extensions/ai/?utm_source=website&utm_medium=blog&utm_campaign=bulk-generate-wordpress-seo-titles-descriptions-ai)

### Do you need help?

		You can receive instant help in the live chat during business hours, or [you can contact us](https://wpsheeteditor.com/company/contact/) and we will help you via email.

---

