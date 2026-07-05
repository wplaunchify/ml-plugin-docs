# Split Character Filter Query Loop Adv Block

*Category from Kadence Blocks documentation*

---

## Query Loop (Adv) Block: Split Character Filter

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/split-character-filter-query-loop-adv-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/split-character-filter-query-loop-adv-block/)

The *kadence_blocks_pro_query_block_split_character* filter allows you to change the character used to **split values** in the **Query Loop (Adv) Block** (included in Kadence Blocks Pro).

This is especially useful when your custom field values contain commas (
```
,
```

). Such as names with suffixes or city-country pairs, which the default behavior would incorrectly split.

## The Problem

When using the**Query Loop (Adv) Block** to filter posts by **custom field values** that include commas, like:

- ```
John Smith, Jr.
```
- ```
Carlos Sainz, Sr.
```
- ```
Paris, France
```
- ```
Manila, Philippines
```

…the default split character (
```
,
```

) causes these values to break into separate filter terms. This results in **no results** being returned.

## Solution

Use the 
```
kadence_blocks_pro_query_block_split_character
```

 filter to change the default comma delimiter to a different character that won’t conflict with your field values, such as a pipe (|).

Add this PHP code snippet to your website *(this will get applied to all Query Loop(Adv) block instances on your website)*:

```
// Change the Kadence Blocks Pro Advanced Query Loop Block filter split character (default is ",")
add_filter( 'kadence_blocks_pro_query_block_split_character', function() {
    return '|'; // Use pipe instead of comma
});
```

Here’s our guide: **How to add a custom filter or function with Code Snippets**

**Note**: The new split character *must not appear in your custom field values*.

Now, Query Loop (Adv) filters will treat each custom field text as a full value and query the posts correctly.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

