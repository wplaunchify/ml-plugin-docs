# Customize Fonts

*Category from The Events Calendar documentation*

---

## Customizing Fonts for The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-fonts/](https://docs.nexcess.com/software/the-events-calendar/customize-fonts/)

We strive to have all our views, widgets, and shortcodes have a unified style so that they all just *go together*. Sometimes though, that style doesn’t mesh with the site’s theme. That’s why we provided a number of configurable options in the [WordPress Customizer](https://docs.nexcess.com/software/the-events-calendar/wordpress-customizer-events/).

One common request we see is the ability to change the calendar’s font so that it matches the rest of the site. There are a couple of ways to do this.

## Method 1: Use the WordPress Customizer settings

- Navigate to **Appearance → Customize** from the WordPress dashboard.
- Click on **The Events Calendar**, then **Global Elements**

Once you are on the Global Elements panel, the following options are available to customize fonts for calendar events:

![The customizer settings for The Events Calendar's global elements, including font family, and font size.](https://docs.nexcess.com/wp-content/uploads/2026/06/font-control-1.jpg)

- **Font Family:** This is the actual font you want to be used for the calendar.- **Default:** The Events Calendar plugin fonts are used.
- **Inherit theme font(s):** The theme’s styles are used in place of the plugin’s fonts.
- **Font Size**- **By Pixel:** The base (or “normal”) size of the font in pixels.
- **By scale:** The base size of the font defined by scale in small, medium, or large variations. Each adjustment is approximately 
```
2px
```

 from 
```
16px
```

, which is the base font size.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/admin-customizer-global-font-1.jpg)![](https://docs.nexcess.com/wp-content/uploads/2026/06/admin-customizer-global-font-2.jpg)

## Method 2: Custom CSS

Let’s say that Method 1 isn’t working for some reason, or maybe you want to use some completely different font for the calendar than what is provided by the plugin or theme. You can use the WordPress Customizer’s **Additional CSS** panel for greater control of the calendar’s fonts.

The Events Calendar uses [CSS custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/) to define the font and font sizes used in the calendar styles. We won’t go deep into CSS custom properties here, but the main idea is that they allow us to define a variable, say 
```
--tec-font-family-base
```

, and assign that variable a value that gets used wherever the variable is used.

### CSS custom properties for fonts

The following CSS custom properties are available:

| Custom property | Default value |
| --- | --- |
| --tec-font-family-sans-serif | "Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif |
| --tec-font-size-0 | 11px |
| --tec-font-size-1 | 12px |
| --tec-font-size-2 | 14px |
| --tec-font-size-3 | 16px (this is the “base” font size) |
| --tec-font-size-4 | 18px |
| --tec-font-size-5 | 20px |
| --tec-font-size-6 | 22px |
| --tec-font-size-7 | 24px |
| --tec-font-size-8 | 28px |
| --tec-font-size-9 | 32px |
| --tec-font-size-10 | 42px |

### Change the font family

To change the font used by The Events Calendar, open up the **Additional CSS** panel in the WordPress Customizer and add the following and change the value to the font you want to use:

```
:root {
  --tec-font-family-sans-serif: "Georgia", serif;
}
```

### Change the font size

You can change any specific font size used in the calendar by changing the value of any of the following CSS custom properties:

```
:root {
    --tec-font-size-0: 11px;
    --tec-font-size-1: 12px;
    --tec-font-size-2: 14px;
    --tec-font-size-3: 16px; /* This is our base */
    --tec-font-size-4: 18px;
    --tec-font-size-5: 20px;
    --tec-font-size-6: 22px;
    --tec-font-size-7: 24px;
    --tec-font-size-8: 28px;
    --tec-font-size-9: 32px;
    --tec-font-size-10: 42px;
}
```

The values listed above are the default values. Changing the value of any custom property will update the font size wherever they are used in the calendar.

### Changing specific elements

Or, if you prefer, you can still change the font size (and font family for that matter) without CSS custom properties. This allows you to change the font for a specific element, like the event post title, without affecting the font used by other calendar elements.

```
.tribe-events-single-event-title {
  font-size: 32px;

  /* or */
  --tec-font-size-7: 32px;
}
```

Please see the [“Customizing CSS”](https://docs.nexcess.com/software/the-events-calendar/customize-css/) article for more information on how to modify calendar styles using the calendar’s CSS classes.

## Setting minimum and maximum font sizes

The Events Calendar includes what we call “safety brakes” that prevent the calendar’s font sizes from being too small or large.

These minimum and maximum font sizes can be filtered:

- ```
tribe_customizer_minimum_font_size()
```

: Sets the minimum, or smallest, font size.
- ```
tribe_customizer_maximum_font_size
```

: Sets the maximum, or largest, font size.

To change the smallest font size to 
```
10px
```

 and the largest font size to 
```
32px
```

, you could add something like this to your 
```
functions.php
```

 file or wherever you manage your theme snippets:

```
add_filter(
  'tribe_customizer_minimum_font_size',
  function() {
    return 10; // sets the minimum font size to 10px
  }
);

add_filter(
  'tribe_customizer_maximum_font_size',
  function() {
    return 32; // sets the maximum font size to 32px
  }
);
```

👋 Note that the values in the example are plain integers. Those correspond to pixel units, and the unit is not required.

## Example

Let’s say your body text font that the calendar uses is most cases, but your theme uses a different font family for headings, like post titles, and you want that to be consistent on event posts. You explore your CSS a bit and find the font stack your theme uses for those headings:

```
.heading-class-name {
  font-family: "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
}
```

There’s a long list of fonts! It’s actually pretty common to provide a list of fonts like this. In fact, it’s called a “font stack” where each font after the first represents a “fallback” in the event that the font before it fails to load for some reason.

We can apply the same font “stack” the theme uses to the CSS classes the calendar uses for its headings:

```
.tribe-common .tribe-common-h1,
.tribe-common .tribe-common-h2,
.tribe-common .tribe-common-h3,
.tribe-common .tribe-common-h4,
.tribe-common .tribe-common-h5,
.tribe-common .tribe-common-h6 {
  --tec-font-family-sans-serif:"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
  --tec-font-family-base:"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
}
```

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-08-02-at-14.37.11.jpg)

---

