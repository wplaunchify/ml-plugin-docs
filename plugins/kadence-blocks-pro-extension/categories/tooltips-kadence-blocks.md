# Tooltips Kadence Blocks

*Category from Kadence Blocks - PRO Extension documentation*

---

## Using Tooltips with Kadence Blocks

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/tooltips-kadence-blocks/](https://www.kadencewp.com/help-center/docs/kadence-blocks/tooltips-kadence-blocks/)

Kadence Blocks offers a powerful feature that allows you to add tooltips to texts, icons, and buttons across your website. **Tooltips** are small pop-up boxes that appear when a user hovers over a target, providing additional information or tips related to that text/target. This functionality is particularly useful for defining terminology, offering extra details, or providing supplementary information without cluttering your content.

*Tooltips are a great way to provide context and help users understand a specific text on your website. This feature enhances user experience without impacting search engine results, either positively or negatively. Therefore, tooltips should be used primarily to improve the overall user experience rather than for SEO purposes.*

## Adding Tooltips to Kadence Blocks

You can add **Tooltips** to supported blocks using the **Block** **Toolbar**. 

Tooltips are available for the following **Kadence Blocks**:
–[Text (Adv) Block](https://www.liquidweb.com/docs/kadence-blocks/advanced-heading-block/)
–[Button (Adv) Block](https://www.liquidweb.com/docs/kadence-blocks/advanced-buttons/)
–[Icon Block](https://www.liquidweb.com/docs/kadence-blocks/advanced-icon-block-2/)
–[Icon List Block](https://www.liquidweb.com/docs/kadence-blocks/icon-list-block/)

### Text (Adv) Block Tooltips

Start by highlighting the text you want to provide the Tooltip for, then in the Block Toolbar click the downward arrow at the far right to open **more** settings. From the expanded settings, select the Tooltip effect to enable the Tooltip for your highlighted text. This simple process allows you to enhance your content with helpful tooltips.

![Adding Tooltips to an Advanced text Block](https://res.cloudinary.com/lwcom/images/w_926,h_668,c_scale/f_auto,q_auto/v1780354571/prod/Adding-Tooltips/Adding-Tooltips.gif?_i=AA)![Tooltips Demonstration](https://res.cloudinary.com/lwcom/images/w_770,h_509,c_scale/f_auto,q_auto/v1780354565/prod/Tooltips-Demonstration/Tooltips-Demonstration.gif?_i=AA)
### Icon Block Tooltips

Start by selecting the Icon in the Block Editor. From the Block Toolbar, click on the *Bubble* *Icon* to access the Icon Tooltips Settings.

![Icon Tooltip Gif 1](https://res.cloudinary.com/lwcom/images/w_513,h_411,c_scale/f_auto,q_auto/v1780354548/prod/Icon-Tooltip-Gif-1/Icon-Tooltip-Gif-1.gif?_i=AA)![Icon Tooltip Gif 2](https://res.cloudinary.com/lwcom/images/w_359,h_331,c_scale/f_auto,q_auto/v1780354543/prod/Icon-Tooltip-Gif-2/Icon-Tooltip-Gif-2.gif?_i=AA)
### Icon List Block Tooltips

Start by selecting the Icon List Item in the Block Editor. From the Block Toolbar, click on the *Bubble* *Icon* to access the Icon List Item Tooltips Settings.

![Icon List Tooltip 1](https://res.cloudinary.com/lwcom/images/w_630,h_443,c_scale/f_auto,q_auto/v1780354526/prod/Icon-List-Gif-1/Icon-List-Gif-1.gif?_i=AA)![Icon List Tooltip 2](https://res.cloudinary.com/lwcom/images/w_300,h_300,c_scale/f_auto,q_auto/v1780354521/prod/Icon-List-Gif-2/Icon-List-Gif-2.gif?_i=AA)
### Button (Adv) Tooltips

Start by selecting the Advanced Button in the Block Editor. From the Block Toolbar, click on the *Bubble* *Icon* to access the Button Tooltips Settings.

![Button Tooltip Gif 1](https://res.cloudinary.com/lwcom/images/w_678,h_430,c_scale/f_auto,q_auto/v1780354537/prod/Button-Tooltip-Gif-1/Button-Tooltip-Gif-1.gif?_i=AA)![Button Tooltip Gif 2](https://res.cloudinary.com/lwcom/images/w_300,h_300,c_scale/f_auto,q_auto/v1780354532/prod/Button-Tooltip-Gif-2/Button-Tooltip-Gif-2.gif?_i=AA)
## Controlling Tooltip Overlap with Z-Index

When adding tooltips to your designs, it’s important to understand how they layer on top of surrounding content. By default, Tooltips are contained within the same section as the parent container they’re inside of. For example, a Section Block. This ensures accessibility, since screen readers can only recognize and announce the Tooltip if it’s bound to its parent container. If tooltips were automatically moved outside of that container, assistive technologies would skip over the content entirely.

Because of this container-based approach, you may need to adjust **z-index values** so Tooltips display correctly when overlapping nearby sections.

**For example:**Imagine you have two sections side by side.
A tooltip in the **left section** opens toward the right, but it needs to overlap the **right section**. *(See the example below.)*

![Overlap example](https://res.cloudinary.com/lwcom/images/w_832,h_585,c_scale/f_auto,q_auto/v1780352202/prod/Overlap-example/Overlap-example.gif?_i=AA)Within the main parent Section Block, you can use **Block Settings → Advanced Tab → Structure Settings** to set the **left section** to a z-index of 
```
2
```

 and the **right section** to 
```
1
```

. This gives the left section a higher stacking order, allowing its tooltip to overlap the right section successfully.

**Left Section Example**

![left-section-index](https://www.liquidweb.com/wp-content/uploads/2024/06/left-section-index-scaled.jpg)**Right Section Example**

![right-section-index](https://www.liquidweb.com/wp-content/uploads/2024/06/right-section-index-scaled.jpg)**Result**

![working tooltip overlay](https://res.cloudinary.com/lwcom/images/w_1024,h_502,c_scale/f_auto,q_auto/v1780352183/prod/working-tooltip-overlay/working-tooltip-overlay.gif?_i=AA)If you add a third section that also needs overlapping tooltips, you can continue stacking z-index values as needed (for example, 
```
3
```

, 
```
2
```

, 
```
1
```

). 

This approach gives you full control over how tooltips layer across sections while ensuring they remain accessible to all visitors.

## Tooltip Settings

**Tooltip Placement:** This setting determines where the Tooltip will pop up. There are many options available here for flexibility.

**Link Settings***(Available for Advanced Texts Only)***:**If you wish to add a Hyperlink to the Highlighted Text that shows the Tooltip, you can use the Link Settings to add that link. *(This will link the Text itself and not the Tooltip or text within the Tooltip)*![Tooltip Placement](https://res.cloudinary.com/lwcom/images/w_667,h_731,c_scale/f_auto,q_auto/v1780354557/prod/Tooltip-Placement/Tooltip-Placement.gif?_i=AA)![Edit Link Settings](https://res.cloudinary.com/lwcom/images/w_700,h_234,c_scale/f_auto,q_auto/v1780354553/prod/Edit-Link-Settings/Edit-Link-Settings.jpg?_i=AA)**Only Apply Tooltip To***(Available for Icon List Items Only)***:** This setting allows the Tooltip to be set to either the Icon, the Text, or the Entire List Item.

![Only Apply Tooltip To Gif](https://res.cloudinary.com/lwcom/images/w_300,h_300,c_scale/f_auto,q_auto/v1780354517/prod/Only-Apply-Tooltip-To-Gif/Only-Apply-Tooltip-To-Gif.gif?_i=AA)**Show Indicator Underline** *(Available for Icons and Icon List Items Only)***:** This allows an underline to indicate that hovering the target will trigger a tooltip. *(This is on by default and can’t be turned off for Advanced Text Tooltips)*

![Show Indicator Underline](https://res.cloudinary.com/lwcom/images/w_444,h_72,c_scale/f_auto,q_auto/v1780354514/prod/Show-Indicator-Underline/Show-Indicator-Underline.jpg?_i=AA)![Indicator Tooltip](https://res.cloudinary.com/lwcom/images/w_376,h_86,c_scale/f_auto,q_auto/v1780354511/prod/Indicator-Tooltip/Indicator-Tooltip.jpg?_i=AA)Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

