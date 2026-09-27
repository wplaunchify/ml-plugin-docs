# Specify Different Css Styles For Mobile Tablet And Pc Layouts

*Category from Starter Templates by Kadence WP documentation*

---

## How to specify different CSS styles for mobile, tablet, and PC layouts

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/specify-different-css-styles-for-mobile-tablet-and-pc-layouts/](https://www.kadencewp.com/help-center/docs/kadence-theme/specify-different-css-styles-for-mobile-tablet-and-pc-layouts/)

Different CSS styles for mobile, tablet, and Desktop layouts are primarily specified using CSS Media Queries. This technique allows you to apply styles based on the characteristics of the device rendering the content, such as screen width, height, and orientation.

**Please note that it is just a basic overview of CSS Media Queries. You can find more detailed and in-depth guides about this online.* *Be mindful of custom codes you add to* your website, as you are *ultimately going to be responsible for them.*

[Learn about the different ways you can add Custom CSS to Kadence](https://docs.nexcess.com/software/kadence/theme/add-custom-css-and-scripts-using-kadence/).

Basic Structure with *@media* Rule.

You define different style blocks using the *@media* rule, specifying conditions for when those styles should apply.

```
/* Default styles for all devices */
    body {
        font-size: 16px;
    }

    /* Styles for PCs/Desktops (e.g., screens wider than 1024px) */
    @media screen and (min-width: 1025px) {
        body {
            font-size: 20px;
        }
        /* More PC-specific styles */
    }

    /* Styles for Tablets (e.g., screens between 768px and 1024px wide) */
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        body {
            font-size: 18px;
        }
        /* More tablet-specific styles */
    }
```

Common Media Query Breakpoints

While there’s no universal standard, common breakpoints for responsive design often include:

- **Mobile**: Up to 767px (or 600px, 480px, etc., depending on your design)
- **Tablet**: From 768px to 1024px (or similar ranges)
- **PC/Desktop**: From 1025px upwards

Desktop-First Approach

**Kadence products are built using this approach**. The desktop-first approach to media queries starts with CSS for large desktop screens and uses *@media (max-width: …)* to progressively override styles for smaller devices. Default styles are written for the widest screens, and then, as the screen width decreases, media queries with max-width apply new rules to override the default styles for tablets, phones, and other smaller screens.

How it Works:

- **Base styles:** You write the styles for your largest screens first, outside of any media queries. This is your default layout and is not confined by a *max-width.*
- **Breakpoints:** You then create media queries for smaller screen sizes using max-width to define the upper limit of a given screen size.
- **Overrides:** Inside each media query, you add styles that override the base styles for that specific screen size.

```
/* Base styles for desktop (largest screens) */
.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
}

/* Styles for screens up to 1024px (tablet and smaller) */
@media (max-width: 1024px) {
  .container {
    width: 90%;
    flex-direction: column;
  }
}

/* Styles for screens up to 767px (mobile and smaller) */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}
```

Other Media Features

Besides *min-width* and *max-width*, you can also use other media features within your queries, such as:

- *orientation: landscape or orientation: portrait*
- *min-height, max-height*
- *resolution (for high-resolution displays)*
- *prefers-color-scheme (for dark mode)*

---

