# Acf_options_pages

*Category from WPCodeBox 2 documentation*

---

## Register an ACF Options Page using WPCodeBox

**Source:** [https://docs.wpcodebox.com/acf_options_pages](https://docs.wpcodebox.com/acf_options_pages)

Add an ACF Options Page
# Register an ACF Options Page using WPCodeBox

To register an ACF Options Page, you need to create a new snippet, and leave all its settings to the default values.

Then, you need to add the following code to the snippet:

```
<?php
 
if( function_exists('acf_add_options_page') ) {
 
    acf_add_options_page();
 
}
```
Then, you need to save the snippet and enable it, and you will see the ACF Options Page in the WordPress admin menu.

[Add Google Tag Manager to WordPress](/google_tag_manager)[Display an ACF Field in a Shortcode](/display_acf_field_in_a_shortcode)

---

