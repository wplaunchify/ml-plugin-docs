# Anonymous_function

*Category from WPCodeBox 2 documentation*

---

## Anonymous Function – WPCodeBox Documentation

**Source:** [https://docs.wpcodebox.com/anonymous_function](https://docs.wpcodebox.com/anonymous_function)

Generate an Anonymous Function
### Generates Anonymous Function

When adding filters and functions, you can automatically generate an anonymous function with the correct parameters and return types

This is done by choosing the "Anonymous Function" option when typing either a filter or a function in WPCodeBox, see:

![](https://docs.wpcodebox.com/_next/image?url=%2Fimages%2Fenabling_anonymous_function.png&w=3840&q=75)
Once you click that option, WPCodeBox will automatically generate the anonymous function with all the required parameters:

```
add_filter('the_title', function( $title, $id ) {
    
    return $title;
}, 10, 2
```[WordPress Auto-Complete](/wordpress_autocomplete)[Documentation in Editor](/documentation_in_editor)

---

