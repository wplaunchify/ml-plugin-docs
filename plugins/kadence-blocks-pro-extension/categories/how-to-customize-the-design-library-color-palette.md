# How To Customize The Design Library Color Palette

*Category from Kadence Blocks - PRO Extension documentation*

---

## How to customize the design library color palette

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-customize-the-design-library-color-palette/](https://www.kadencewp.com/help-center/docs/kadence-blocks/how-to-customize-the-design-library-color-palette/)

The Kadence Design Library offers a color palette. This palette consists of a light color, a dark color, and a highlight color. If you use the Kadence Theme, these colors are set in your customizer settings. If you do not use the Kadence Theme, you must add code to your website that defines these variables. 

For Kadence Theme users, you can go to your Customizer > Colors & Fonts > Colors. Here, you can adjust your color palette.

The **Light Color** is defined by the ninth color,**var(–global-palette9)**
The**Dark Color**is determined by the third color, **var(–global-palette3)**
The **Highlight Color**is determined by the first color, **var(–global-palette1)**

![colorsa-updated](https://www.liquidweb.com/wp-content/uploads/2023/04/colorsa-updated.jpeg)![Design Libary style palette updated](https://www.liquidweb.com/wp-content/uploads/2023/04/Design-Libary-style-palette-updated.jpeg)
### Other Theme Instructions

If you use a different theme, you will not have a built-in way to pre-define these colors. However, you can use custom code to insert these values manually onto your website. You can use the Code Snippets plugin to add code snippets to your website. You can add this code to the functions.php file using a child theme.

The following code adds the Kadence Color Palette variables to your website. You can customize these colors by changing the color code for each variable. You will notice there are multiple instances of each variable. Please change the color for each example so the code works.

```
function custom_global_colors_kadence( $global_colors ) {
    $global_colors = array(
        '--global-palette1' => '#2c6dff',
        '--global-palette2' => '#074ef3',
        '--global-palette3' => '#1b202c',
        '--global-palette4' => '#2f3749',
        '--global-palette5' => '#4a5566',
        '--global-palette6' => '#717f98',
        '--global-palette7' => '#eef2f5',
        '--global-palette8' => '#f8f9fd',
        '--global-palette9' => '#ffffff',
    );
    return $global_colors;
}
add_filter( 'kadence_blocks_pattern_global_colors', 'custom_global_colors_kadence' );
```

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

