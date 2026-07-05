# How To Enable Transparent Header On 404 Page

*Category from Starter Templates by Kadence WP documentation*

---

## How to Enable Transparent Header on 404 Page

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-enable-transparent-header-on-404-page/](https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-enable-transparent-header-on-404-page/)

By default, the transparent header is not applied to the 404 page. This is because the 404 page does not have a page title, and when the transparent header is enabled, it may overlap with the 404 message and search field, affecting visibility and usability.

However, for more advanced setups, you can create a custom template for the 404 page. This allows you to design the layout in a way that accommodates the transparent header more effectively.

If you prefer to apply the transparent header directly to the default 404 page, you can use this [code snippet](https://www.liquidweb.com/docs/kadence-theme/how-to-add-a-custom-filter-or-function-with-code-snippets/) to enable it:

```
add_filter( 'kadence_post_layout', function( $value ) {    if ( is_404() ) {        $value['transparent'] = 'enable';    }    return $value;});
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

