# Gradient Border Section Block

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## How to Set a Gradient Border for the Section block

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/gradient-border-section-block/](https://www.kadencewp.com/help-center/docs/kadence-blocks/gradient-border-section-block/)

To set a gradient border using CSS in WordPress, you can employ the **border-image** property or a more advanced technique using background-clip.

**Helpful resources:**

- [Learn how to add Custom CSS Classes and/or Anchor IDs to Kadence Blocks.](https://docs.nexcess.com/software/kadence/add-classes-and-ids-to-blocks/)
- [Learn about Applying Block-Level Custom CSS in Kadence Blocks](https://docs.nexcess.com/software/kadence/blocks/block-level-custom-css/).

Using the border-image property (*Simpler, but no border-radius*):

This approach is quick to set up and creates a clean gradient border. However, it does not support rounded corners (
```
border-radius
```

).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Gradient-rectangle-with-text-1024x165-1.png)

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

Using background-clip (**Compatible with border-radius**):

This method provides more flexibility. It allows you to use rounded corners (
```
border-radius
```

) while keeping the gradient border effect.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Background-Clip-Graphic-1024x156-1.png)

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

---

