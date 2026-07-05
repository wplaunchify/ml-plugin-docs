# Customize Shortcode With Filter

*Category from WP File Manager documentation*

---

## Customize shortcode with filter < File Manager Pro

**Source:** [https://filemanagerpro.io/article/customize-shortcode-with-filter/](https://filemanagerpro.io/article/customize-shortcode-with-filter/)

In **WP File Manager 8.1.1**, you can customize shortcode by using

```
add_filter( "fm_shortcode_attr_{shortcode_key}", "your_callback_function");
```

To customize the shortcode values, you need to navigate to the **WP File Manager > Shortcode Generator > All Shortcodes.**

Look for the shortcode which you want to customize. You will see a Customize Shortcode button. When you click on the button, it will show a popup containing customizable code.

![](https://filemanagerpro.io/wp-content/uploads/2021/03/customize_shortcode_button.png)

![](https://filemanagerpro.io/wp-content/uploads/2021/03/customize_shortcode_code.png)

Copy this code and paste it in your theme’s function.php file or in your plugin’s file. Change the values from the code according to your requirement. These changes will override the default settings of the shortcode.

**Please watch video given below**

---

