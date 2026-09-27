# Fixing Phone Numbers Automatically Linking Or Disappearing On Ios Safari

*Category from Kadence Simple Share documentation*

---

## Fixing Phone Numbers Automatically Linking or Disappearing on iOS Safari

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-general/fixing-phone-numbers-automatically-linking-or-disappearing-on-ios-safari/](https://www.kadencewp.com/help-center/docs/kadence-general/fixing-phone-numbers-automatically-linking-or-disappearing-on-ios-safari/)

## Overview

If you’ve added a phone number to your site (for example, in the footer, header, or a widget) and it appears fine in the WordPress Customizer but looks **invisible or styled incorrectly on mobile**, this is likely caused by Safari’s **telephone number detection** feature.

On iOS devices, Safari automatically converts any text that looks like a phone number into a clickable telephone link. Depending on your site’s styling, this can result in:

- Phone numbers appearing in the **wrong color** (such as orange).
- Phone numbers becoming **invisible on mobile** until clicked.
- Phone numbers not matching the text style you set in the editor.

This guide shows you how to disable Safari’s automatic linking or adjust the link styling so the number displays as expected.

---

## How This Issue Might Look to You

Customers often describe this issue in different ways, such as:

- *“The phone number in my footer looks fine in the editor, but it disappears on mobile.”*
- *“The phone number only shows up when I tap the spot on my phone.”*
- *“My phone number text color is wrong.”*
- *“Safari is automatically turning my phone number into a link.”*

If your experience sounds similar, this guide will help you fix it.

## Option 1: Disable Safari’s Telephone Number Detection

If you want the phone number to always display exactly as you entered it (without Safari turning it into a link), you can disable this feature by adding a meta tag.

```
<head>
  <meta name="format-detection" content="telephone=no" />
</head>
```

- **If you are using Kadence Theme Pro:**
1. Go to your WordPress dashboard.
2. Navigate to **Appearance > Customize > Custom Scripts**.
3. Add the code snippet into the header section
4. Save and publish your changes.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Customize-teejay-2025-10-08-at-7.42.59-AM.jpg)

- **If you are not using Kadence Theme Pro:**
You can achieve the same result by adding the code with a plugin such as [Code Snippets](https://docs.nexcess.com/software/kadence/blocks/add-custom-filter-or-function-with-code-snippets/). These plugins allow you to safely insert header scripts without editing theme files.
- Try adding this code:

```
<?php
// Disable Safari from automatically linking phone numbers
add_action( 'wp_head', function() {
    echo '<meta name="format-detection" content="telephone=no" />' . "n";
});
```

## Option 2: Keep the Feature but Adjust the Styling

If you want to keep the phone number clickable on iOS but fix the styling (so it isn’t invisible or the wrong color), you can set a custom **link color**.

For example, if you are using the **Advanced Text block** (or any block that allows customizing link colors):

1. Select the block containing the phone number.
2. Open the block settings.
3. Define your preferred **link color**.
4. Save your changes.

Safari will continue to link the number, but it will follow the styling you set.

---

## Summary

- Use **Option 1** if you want to stop Safari from auto-linking phone numbers.
- Use **Option 2** if you want to keep the phone number clickable but control the color and visibility.

---

