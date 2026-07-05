# Block Padding And Margin

*Category from Kadence Blocks - PRO Extension documentation*

---

## Using Padding and Margin in Kadence Blocks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/block-padding-and-margin/](https://www.kadencewp.com/help-center/docs/kadence-blocks/block-padding-and-margin/)

When refining your website’s layout and design, **padding** and **margin** are two fundamental tools you’ll often work with. When using Kadence Blocks, you’ll often see options to adjust padding and margin values. Padding and margin are universal in web development and are always in use as you navigate various types of websites.

This guide will walk you through what these settings do, how they’re different, and where you can find and adjust them throughout the Kadence Blocks ecosystem.

## What is Margin & Padding?

**Margin** is the space *outside* of an element. Think of it as the distance between one block and the next. Adding a margin pushes the entire element away from other elements surrounding it.

For example, adding a bottom margin to a Row Layout block creates extra space beneath it, pushing the next block further down the page.

![Margin Example](https://res.cloudinary.com/lwcom/images/w_1024,h_575,c_scale/f_auto,q_auto/v1780352553/prod/Margin-Example/Margin-Example.gif?_i=AA)**Padding** is the space *inside* an element, between the content and the border of the block or container it’s in. For example, if you have a Section block with a background color applied, the inner content may need spacing away from the edge. This is where padding can come in handy.

![Padding](https://www.liquidweb.com/wp-content/uploads/2025/07/Padding.gif)Commonly, Kadence Block settings include options for **both** **padding** and **margin**. These two tools often work hand-in-hand and can sometimes feel interchangeable, but they each serve a unique purpose depending on what you’re trying to achieve.

For example, if you’re adding space inside a block (like around the content), you’d use padding. If you’re creating space outside a block (like between two elements), you’d use margin. In most cases, you can experiment with both to get your layout just right for the use case. But for specific tasks, like creating space around a background color or image, padding is the standard choice. 

Want to dive deeper? Check out the resources below for a full breakdown of how padding and margin work.

- [CSS Padding](https://www.w3schools.com/css/css_padding.asp)
- [CSS Margin](https://www.w3schools.com/css/css_margin.asp)

### Adding Margin & Padding to Kadence Blocks

When using **Kadence Blocks**, you’ll often find **padding** and **margin** settings in the **Advanced** section of the block settings panel. These controls let you apply spacing to the entire block you’ve selected.

![Advanced Block Settings](https://www.liquidweb.com/wp-content/uploads/2025/07/Advanced-Block-Settings-scaled.jpg)
### Global Paddings in Blocks

When you add a **background** to blocks, such as a **Section** **Block** or a **Row** **Layout** **Block**, Kadence automatically applies **Global Left and Right Padding**. This ensures that the content inside the Block remains visible and doesn’t sit directly on the edge.

For example, if you place text inside a Row Layout Block without a background, it will align directly with the block edge. Once a background is added, the Global Padding is applied to create spacing on the left and right.

**Note:** Global Padding is only applied if those padding values have not already been set before the background is added.

![Adding Global Padding](https://res.cloudinary.com/lwcom/images/w_1024,h_526,c_scale/f_auto,q_auto/v1780352282/prod/Adding-Global-Padding/Adding-Global-Padding.gif?_i=AA)**Where Does Global Padding Come From?** 
The Global Padding values are defined in your **Kadence Theme settings**, in the **Customizer -> General -> Layout** settings under the **Content Left/Right Edge Spacing** setting.

![Content Left:Right Spacing](https://res.cloudinary.com/lwcom/images/w_1024,h_447,c_scale/f_auto,q_auto/v1780352277/prod/Content-LeftRight-Spacing/Content-LeftRight-Spacing.jpg?_i=AA)**Managing Global Padding.**
If you use the **reset option** (back-facing arrow) and the Block has a background applied, the Global Left/Right Padding will automatically be reapplied. When editing padding in the Block, the **Left**and**Right**fields display**“Global.”** You can override this by manually setting the padding value.

![Managing Global Padding](https://res.cloudinary.com/lwcom/images/w_1024,h_631,c_scale/f_auto,q_auto/v1780352222/prod/Managing-Global-Padding/Managing-Global-Padding.gif?_i=AA)
#### Advanced Text Background Padding

Advanced Text Blocks do **not** use the same Global Left/Right Padding system as Row Layout Blocks. However, when you apply a **background** **color** to an Advanced Text Block, Kadence automatically adds **default padding**:

- **Top:** 1.25 em
- **Bottom:** 2.375 em

This ensures that the text does not sit directly on the edge of the background, keeping the content readable and visually balanced.

#### Using Block Defaults to Bypass Global Padding.

If you prefer to remove Global Padding from all new Blocks, you can:

1. Set the **Left and Right padding values** to **None**. 
*(For Advanced Text Blocks, also set the top and bottom values to none)*
2. Save the block as a **Block Default**.

This ensures that future Row Layout Blocks will **ignore the Global Padding functionality** by default.

![Setting Padding to None](https://res.cloudinary.com/lwcom/images/w_586,h_698,c_scale/f_auto,q_auto/v1780352218/prod/Setting-Padding-to-None/Setting-Padding-to-None.jpg?_i=AA)![Saving Block Defaults](https://res.cloudinary.com/lwcom/images/w_552,h_1018,c_scale/f_auto,q_auto/v1780352212/prod/Saving-Block-Defaults/Saving-Block-Defaults.jpg?_i=AA)
### Using Negative Margins in Blocks

**Negative** **margin** values let you pull blocks outside of their default spacing, allowing for creative, layered designs. However, be cautious when using negative values, as they can affect [layout consistency across different devices](#responsive-settings).

For example, let’s say you have two Row Layout blocks stacked one after the other. If you want one of them to slightly sit on top of the other (for a stylish, layered look), you can give that block a negative top margin. This pulls it up and makes it look like it’s breaking out of the normal layout. *(See the GIF below.)*

![Negative Margin](https://res.cloudinary.com/lwcom/images/w_1024,h_574,c_scale/f_auto,q_auto/v1780352571/prod/Negative-Margin/Negative-Margin.gif?_i=AA)
### Responsive Spacing

When adjusting spacing values, it’s important to set them responsively. A 100px padding might make sense on a desktop view. However, that may result in extra unwanted padding on mobile views. Instead, use the Kadence Responsive Controls to set different padding and margin values for each device type.

The Responsive Controls can be found near block setting labels. They are represented by a desktop, tablet, and mobile icon.![Responsive Settings](https://res.cloudinary.com/lwcom/images/w_728,h_500,c_scale/f_auto,q_auto/v1780352494/prod/Responsive-Settings/Responsive-Settings.jpg?_i=AA)**Example:**
In this example, notice the hero Row Layout block has a large top and bottom padding. The GIF demonstrates how you can use the responsive controls to lower the padding values for each device type. This also works the same for margin values and various other block settings.
*(This same theory would apply to left and right spacing values as well.)*

![Responsive Block Padding](https://res.cloudinary.com/lwcom/images/w_1024,h_559,c_scale/f_auto,q_auto/v1780352517/prod/Responsive-Block-Padding/Responsive-Block-Padding.gif?_i=AA)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

