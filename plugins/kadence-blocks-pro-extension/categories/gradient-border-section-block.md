# Gradient Border Section Block

*Category from Kadence Blocks - PRO Extension documentation*

---

## How to Set a Gradient Border for the Section block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/gradient-border-section-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/gradient-border-section-block/)

To set a gradient border using CSS in WordPress, you can employ the **border-image** property or a more advanced technique using background-clip.

**Helpful resources:**

- [Learn how to add Custom CSS Classes and/or Anchor IDs to Kadence Blocks.](https://www.liquidweb.com/docs/kadence-blocks/how-to-add-custom-css-classes-and-html-ids-to-kadence-blocks/)
- [Learn about Applying Block-Level Custom CSS in Kadence Blocks](https://www.liquidweb.com/docs/kadence-blocks/applying-block-level-custom-css-in-kadence-blocks/).

## Using the border-image property (Simpler, but no border-radius):

This approach is quick to set up and creates a clean gradient border. However, it does not support rounded corners (
```
border-radius
```

).

![](https://res.cloudinary.com/lwcom/images/w_1023,h_165,c_scale/f_auto,q_auto/v1780351799/prod/Gradient-rectangle-with-text/Gradient-rectangle-with-text.png?_i=AA)
```
.your-element-class {
  border-width: 20px; /* Adjust border thickness */
  border-style: solid;
  border-image: linear-gradient(to right, #ffafc7, #73d7ee) 1; /* Customize colors and direction */
}
```

- Replace 
```
.your-element-class
```

 with the actual CSS class or ID of the element you want to style.
- Modify 
```
border-width
```

 to control the border’s thickness.
- Adjust the 
```
linear-gradient
```

 function with your desired colors and direction (e.g., ```
to right
```

, 
```
to bottom
```

, 
```
45deg
```).
- The 
```
1
```

 after the 
```
linear-gradient
```

 is the 
```
border-image-slice
```

 value, indicating a single border region.

## Using background-clip (Compatible with border-radius):

This method provides more flexibility. It allows you to use rounded corners (
```
border-radius
```

) while keeping the gradient border effect.

![](https://res.cloudinary.com/lwcom/images/w_1022,h_156,c_scale/f_auto,q_auto/v1780351792/prod/Background-Clip-Graphic/Background-Clip-Graphic.png?_i=AA)
```
.your-element-class {
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #ffafc7, #73d7ee) border-box; /* Customize colors and direction */
  border-radius: 20px; /* Adjust border-radius as needed */
  border: 20px solid transparent; /* Adjust border thickness */
}
```

- Replace 
```
.your-element-class
```

 with the actual CSS class or ID of the element.
- The first 
```
linear-gradient(white, white) padding-box
```

 creates a solid white background within the padding box.
- The second 
```
linear-gradient(to right, #ffafc7, #73d7ee) border-box
```

 creates your gradient and clips it to the border box, effectively acting as the border.
- Set 
```
border-radius
```

 for rounded corners.
- Set 
```
border
```

 to a transparent solid border with the desired thickness.

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

