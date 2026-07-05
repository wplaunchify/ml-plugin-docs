# Adjusting The Kadence Themes Scroll Offset Using A Filter

*Category from Kadence Theme Kit Pro - Premium addon for the Kadence Theme documentation*

---

## Adjusting the Kadence Theme’s scroll offset using a filter

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/adjusting-the-kadence-themes-scroll-offset-using-a-filter/](https://www.kadencewp.com/help-center/docs/kadence-theme/adjusting-the-kadence-themes-scroll-offset-using-a-filter/)

The Kadence Theme has the 
```
kadence_scroll_to_id_additional_offset
```

 filter that allows users to modify the additional vertical offset (in pixels) applied when scrolling to anchor links using Kadence’s built-in smooth scroll behavior. *It does not modify animation timing or speed.*

This can be useful if you have custom sticky headers, admin bars, or dynamic content that affects how far the page should scroll when targeting an element by ID.

### Parameters

- **$offset** *(int)* – The default additional offset. Defaults to 
```
0
```

.

### Usage

**Add 120 pixels offset and take into account if a user is logged in (admin bar is showing)**

```
add_filter('kadence_scroll_to_id_additional_offset', function($offset){
    $offset = 120;
    $admin_bar = is_admin_bar_showing() ? 32 : 0;
    
    return $offset + $admin_bar;
});
```

Add the PHP code snippets using a plugin. Refer to our guide here: **How to add a custom filter or function with Code Snippets**

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

