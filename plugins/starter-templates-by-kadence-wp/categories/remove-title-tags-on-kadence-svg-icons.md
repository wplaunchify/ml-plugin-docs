# Remove Title Tags On Kadence Svg Icons

*Category from Starter Templates by Kadence WP documentation*

---

## Remove title tags on Kadence SVG Icons

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/remove-title-tags-on-kadence-svg-icons/](https://www.kadencewp.com/help-center/docs/kadence-theme/remove-title-tags-on-kadence-svg-icons/)

By default, Kadence SVG icons include a <title> tag inside the SVG markup. This is intentional and generally beneficial because the <title> element provides an accessible, descriptive label for the icon, improving usability for screen readers and enhancing accessibility compliance.

![Account svg icon with title tag](https://docs.nexcess.com/wp-content/uploads/2026/06/Developer-Tools-2025-08-13-at-6.33.42-PM-1024x570-1.jpg)

While this is perfectly fine from a web standards and accessibility standpoint, some SEO tools may incorrectly flag the <title> tag inside an SVG as an “error” or “warning.” In most cases, these flags can be safely ignored since they do not negatively impact SEO or site performance.

If you want to remove the <title> tag from Kadence SVG icons, for example to clear SEO tool reports, you can use the **kadence_svg_icons_have_title** filter.

### Usage

**Remove <title> tag in svg icons**

```
add_filter( 'kadence_svg_icons_have_title', '__return_false' );
```

Add the PHP code snippets using a plugin. Refer to our guide here: **How to add a custom filter or function with Code Snippets**

---

