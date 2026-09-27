# Run Javascript When Query Loop Adv Updates

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## Run JavaScript when Query Loop (Adv) Updates

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/run-javascript-when-query-loop-adv-updates/](https://www.kadencewp.com/help-center/docs/kadence-blocks/run-javascript-when-query-loop-adv-updates/)

Kadence Blocks Pro has an event called **kb-query-loaded** that fires whenever a **Query Loop (Adv)** block loads new results.

Think of it like a signal: when the Query Loop finishes updating (because of pagination, filters, infinite scroll, or sorting), it lets you know so you can run your own custom JavaScript.

This makes it easy to reinitialize scripts, update custom UI elements, or track analytics whenever the block’s content changes.

When the Event Fires

The **kb-query-loaded** event is triggered in several situations, including:

- After new content is loaded through AJAX
- When a user changes pagination
- After filters are applied or reset
- When infinite scroll loads more results
- After sort options are updated

Quick Example

The simplest way to listen for Query Loop (Adv) updates is to attach a listener directly to the document.

```
document.addEventListener('kb-query-loaded', (event) => {
  console.log("Query Loop updated");
});
```

Whenever a Query Loop (Adv) block finishes loading new results (through pagination, filters, infinite scroll, or sorting), this code will log **“Query Loop updated”** in your browser console.

If you have multiple Query Loops on the same page, you can also check the **event.qlID** property to target a specific block:

```
document.addEventListener('kb-query-loaded', (event) => {
  if (event.qlID === 'your-query-block-id') {
    console.log("This specific Query Loop updated:", event.qlID);
  }
});
```

The **kb-query-loaded** event is a simple but powerful tool. You can listen for it globally, or filter by qlID to act on individual Query Loops. Use it to reinitialize scripts, refresh UI elements, or integrate with analytics. With this, you can take Query Loops beyond their default behavior and build a smoother, more engaging user experience.

---

