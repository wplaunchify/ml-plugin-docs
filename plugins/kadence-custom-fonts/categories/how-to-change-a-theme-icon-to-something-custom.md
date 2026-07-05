# How To Change A Theme Icon To Something Custom

*Category from Kadence Custom Fonts documentation*

---

## How to change a theme icon to something custom

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-change-a-theme-icon-to-something-custom/](https://www.kadencewp.com/help-center/docs/kadence-theme/how-to-change-a-theme-icon-to-something-custom/)

The Kadence theme uses SVG icons which display inline. Inline SVGs are used instead of an icon font for better site performance. If you want to change out an icon on your site you can do so using a custom PHP filter.

For example, let’s say you want to change out the shopping cart icon in the header with a custom SVG. In this example, we can grab an SVG icon from [iconmonstr](https://iconmonstr.com/shopping-cart-3-svg/).

![](https://www.liquidweb.com/wp-content/uploads/2021/11/custom_icon-1024x597.png)That will get us this SVG code:

```
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
```

We can then use this filter in a code snippet plugin to change out this icon. Notice that we are matching the name of the icon to switch out. In this case, the icon name is ‘shopping-cart’. You can inspect icons on your site to find the name. The SVG will have a class ‘kadence-icon-name-svg’. In the case with the shopping cart icon the class was ‘kadence-shopping-cart-svg’.

```
add_filter( 'kadence_svg_icon', 'change_cart_icon', 10, 4 );
function change_cart_icon( $output, $icon, $icon_title, $base ) {
if ( 'shopping-cart' === $icon ) {
 return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>';
}
return $output;
}
```

![](https://www.liquidweb.com/wp-content/uploads/2021/11/replace_icon-1024x388.png)![](https://www.liquidweb.com/wp-content/uploads/2021/11/new_icon-1024x368.png)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

