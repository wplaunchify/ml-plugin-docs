# Custom Search Page Hooked Elements Advanced Query Loop

*Category from Kadence Custom Fonts documentation*

---

## How to Create a Custom Search Page with Hooked Elements and the Advanced Query Loop

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/custom-search-page-hooked-elements-advanced-query-loop/](https://www.kadencewp.com/help-center/docs/kadence-theme/custom-search-page-hooked-elements-advanced-query-loop/)

By default, WordPress generates a simple search results page that lists posts matching the user’s search query. With Kadence Hooked Elements and the Advanced Query Loop block, you can fully customize the design and layout of your search results page without editing template files or writing custom PHP.

Getting started

You must have the [Kadence Theme Kit Pro](https://docs.nexcess.com/software/kadence/theme/theme-kit-pro-plugin/) and [Kadence Blocks Pro](https://docs.nexcess.com/software/kadence/kadence-blocks-pro-plugin/) plugins installed, activated, and licensed on your website.

Step 1: Create a New Hooked Element

First, [create a Template Element](https://docs.nexcess.com/software/kadence/theme/create-a-template-element/). Template Elements replace the default theme output and can be used to replace the archive loop item content.

![Element - Add a template](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-09-30-at-1.08.12-PM-scaled-1.png)

Step 2: Insert the Advanced Query Loop

- Inside the element editor, add the Advanced Query Loop block.
- The block will display the pop-up to create/select the query loop and query card. ([Click here](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/) to learn more.)
- Once all is set up, enable the **Inherit query from template** option from block settings.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/search-loop.gif)

Step 3: Hook the Element into the Search Page

- Select *Element Settings*from the right top icons.
- Placement: Replace Archive Content
- *Show On*: Search Results.
- Click Publish.

![search_result_setting](https://docs.nexcess.com/wp-content/uploads/2026/06/search_result_setting-318x1024-1.jpg)

Optional Enhancements

- **Add Pagination:** Insert a Pagination block inside the Query Loop to allow users to browse more results.
- **Add a “No Results Found” Message:** Add a text block below the query loop and set it to appear conditionally when no posts match the search query. This improves user experience and provides helpful context.

Related Resources

- [Kadence Elements](https://docs.nexcess.com/software/kadence/)
- [Query Loop (Adv) Block](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/)

---

