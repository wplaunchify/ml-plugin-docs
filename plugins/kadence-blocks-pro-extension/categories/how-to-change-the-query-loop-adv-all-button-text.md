# How To Change The Query Loop Adv All Button Text

*Category from Kadence Blocks - PRO Extension documentation*

---

## How to Change the Query Loop (Adv) “All” Button Text

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-change-the-query-loop-adv-all-button-text/](https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-change-the-query-loop-adv-all-button-text/)

While working with the [Advanced Query Loop](https://docs.nexcess.com/software/kadence/blocks/advanced-query-loop-block/), you may need to change the “All” text found in the **Button Filters**.  This guide will show two possible methods for changing this text.

The *Query Loop (Adv) Block* is available in Kadence Blocks Pro. *Kadence Blocks Pro* can be purchased as a stand-alone product or in the *Plus Plan* or greater. [Click here](https://www.kadencewp.com/kadence-blocks/pro/) to view our pricing.

Plugin Method

There are several good plugins available for changing the theme and/or plugin text. One such plugin is [Say What?](https://wordpress.org/plugins/say-what/) This simple plugin allows you to make changes to your theme or plugin text without adding or modifying code. To install the plugin, go to **Plugins** → **Add New** and search for **Say What**. Install and activate the plugin.

Next, go to **Tools** → **Change text** and click **Add New**.  Here you’ll find a form to add your change.

**Original string:** This is the text that currently appears on your site.

**Text domain:** Allows you to limit this change to Kadence Blocks Pro text only.

**Text context:** Leave this blank.

**Replacement string:** This is the new text you would like to use.

![Say What? plugin - add new text change](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-07-01-at-12.51.54-PM-1024x427-1.png)

Click Add (or Update) and test your changes on the front-end of your site.

PHP Snippet Method

If you prefer not to use a plugin, you can add a custom PHP snippet to change the text.  If you’re not familiar with adding PHP snippets, please see [this document](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/).

The following snippet follows a similar format to the above plugin’s settings.

```
add_filter( 'gettext', function( $translation, $text, $domain ){
	if ( 'All' == $text && 'kadence-blocks-pro' == $domain ){
		$translation = 'All items';  // add your text here
	}
	return $translation;
}, 10, 3);
```

Be sure to change ‘All items’ to your desired text.  Save and activate the snippet and test your changes on the front-end of your site.

---

