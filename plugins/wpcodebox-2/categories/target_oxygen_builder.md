# Target_oxygen_builder

*Category from WPCodeBox 2 documentation*

---

## How to target the Oxygen Builder UI using the condition builder

**Source:** [https://docs.wpcodebox.com/target_oxygen_builder](https://docs.wpcodebox.com/target_oxygen_builder)

How to target the Oxygen Builder UI using the Condition Builder
# How to target the Oxygen Builder UI using the condition builder

## How not to run a Code Snippet in the Oxygen Builder

In case you don't want to run a Code Snippet in the Oxygen Builder UI, you need to use the Page URL Condition. The Oxygen editor pages have a ct_builder=true in the URL. So, to not run a snippet in the Oxygen UI or in the Oxygen iframe, we can set a condition like this:

Page URL Doesn't contain ct_builder=true

![](https://wpcodebox.b-cdn.net/wp-content/uploads/2021/07/Selection_071.png)

## How to run a Code Snippet only in the Oxygen UI

To run a Code Snippet in the Oxygen Builder UI, we would do the same as above, but use the Contains verb instead of Doesn't contain.

To run code snippet only in the Oxygen Builder iframe (that's the area of the page that's rendered inside the Oxygen Builder) we can use *oxygen_iframe=true* instead of *ct_builder=true*.

## Combining these conditions

These conditions can be combined using otherconditions or condition groups to achieve more complex conditional logic. For example you can run snippets in the Oxygen builder context only on certain pages or post types.

[Display an ACF Field in a Shortcode](/display_acf_field_in_a_shortcode)[How to add external JS code to your WordPress site](/add_external_js_code)

---

