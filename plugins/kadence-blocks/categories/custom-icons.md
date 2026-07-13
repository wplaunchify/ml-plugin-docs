# Custom Icons

*Category from Kadence Blocks documentation*

---

## Using Custom SVG Icons with Kadence Blocks Pro

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/custom-icons/](https://www.kadencewp.com/help-center/docs/kadence-blocks/custom-icons/)

**Kadence** **Blocks** **Pro** offers the ability to upload and use your own **Custom SVG Icons** across your Kadence website. You can also search for and directly import Icons to *Kadence Blocks.*

There are a total of three ways to do this:

- **Using the built-in icon manager**: This is the modern and recommended method. It lets you directly add Custom SVG Icons to your Blocks with just a few clicks. This method allows you to upload SVG files or directly paste in SVG Code.
- *This method only works for Kadence Blocks + Blocks Pro within the block editor. To use Custom Icons within the Kadence Theme, refer to the “Using IcoMoon” method below.*
- **Using the Kadence Icon Search feature**: When adding a custom icon in Kadence Blocks Pro, you have the option to search for and directly import your preferred icons.
- **Using IcoMoon**: This traditional method involves converting your SVG Icons into a font with IcoMoon and then uploading the font file. 
- *This method works with both Kadence Blocks and the Kadence Theme. That includes things like customizer settings that use icons, as well as theme features like mega menus.*

SVG and Security/Support

When using SVG formats, there are factors related to Security that should be taken into consideration. You should understand SVGs enough to be comfortable using them. Consider reading [This SolidWP Article](https://solidwp.com/blog/what-is-an-svg-file/) that provides a general overview of what SVGs are and how they are used.

WordPress Core does not support the use of SVG formats natively. The support of SVGs in WordPress has been in discussion for a long time and is something outside of our control. You can join the conversation on WordPress SVG Support by [Clicking Here](https://core.trac.wordpress.org/ticket/24251). You can learn about why WordPress doesn’t provide this out-the-box by [Clicking Here](https://www.bjornjohansen.com/svg-in-wordpress).

When using SVGs, always keep the following in mind:
**-Security Risk**: SVGs are XML-based and can be used to run malicious scripts.
**-Source**: Create your own SVGs if possible. If not, ensure they come from a well-trusted source. Learn more [here](https://solidwp.com/blog/what-is-an-svg-file/#h-what-are-the-risks-involved-with-using-svg-files-on-a-wordpress-site).
**-Size**: Use 24x24px SVGs with Kadence, as this is our standard icon dimension. Larger sizes could introduce malicious code.
–**Sanitization**: Always sanitize SVGs before uploading them.

*(You should also use a Fill Icon if you wish to control the SVG Icon Color using Kadence Blocks. Stoke Icons will not work in this way. You can click here to learn more.)*

Adding Custom Icons using the built-in Icon Manager

Adding a Custom Icon to Kadence Blocks can be done through the built-in Icon Manager. The first step is to open the Icon Selection dropdown from the Icon Settings Block Setting. *(This can be done anywhere a Kadence Icon is selectable)*

![Uploading an SVG step 1](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-1-scaled-1.jpg)

Under the My Icons tab, click on the Plus Icon to upload a Custom SVG.

![Uploading an SVG step 2](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-2-scaled-1.jpg)

This will prompt a Security Notice. The notice will ask to ensure the SVG file is Sanitized and Properly Sized. (24px by 24px).

![Uploading an SVG step 3](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-3-1024x670-1.jpg)

After proceeding, an SVG Icon can be uploaded to WordPress. An SVG Code can also be used.

![Uploading an SVG step 4](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-4.jpg)

To Past SVG Code, click on the paste your SVG code text at the bottom of the file upload. This will allow an SVG Code to be pasted instead.

![Uploading an SVG step 4-2](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-4-2.jpg)

Once the SVG is successfully uploaded, it can be accessed under the My Icons tab of the Icon Settings Block Setting.

![Uploading an SVG step 5](https://docs.nexcess.com/wp-content/uploads/2026/06/Uploading-an-SVG-step-5-944x1024-1.jpg)

Now the Icon can be selected and used across Kadence. To remove an **Icon**, simply hover over it and click on the **Red X**.

Converting SVG Strokes to Fills

When using SVG Images and trying to set a Color, our Blocks determine the color by setting a **Fill** **Color**. If your SVG uses *Strokes* instead of *Fills*, the Icon Color Block Setting won’t take effect.

To counter this, consider converting your SVG Stroke Image into an SVG Fill Image instead. This can be done using a tool, such as [This One](https://iconly.io/tools/svg-convert-stroke-to-fill). This tool is created by *Iconly* and converts **SVGs** that use a **Stroke** into **SVGs** that use a **Fill** instead, allowing you to control the **Fill** **Color** with **Kadence** **SVG** **Block** **Settings**. *(This conversion doesn’t change the visual appearance of the icon or image; it only changes the attribute and method used to define the path of the icon.)*

**Example of a Stroke Icon.** *Stroke icons* are typically defined by their outlines. They can only be directly modified using **Kadence SVG Icon Color Settings** if they are **converted to fill icons**. This conversion transforms the outline into a filled shape internally but does not alter the appearance of the icon or fill it into a solid icon. Therefore, the icon will still appear as an outlined icon.

![Outline Books Icon](https://docs.nexcess.com/wp-content/uploads/2026/06/books-6780765_1280.png)

**Example of a Fill Icon.** Fill icons are solid shapes. These icons can use Kadence SVG Icon Color Settings to modify their color without needing any conversion. To be a solid icon, it must already be a fill icon. So conversion isn’t needed for solid icons to use our SVG Color Settings.

![Solid House Icon](https://docs.nexcess.com/wp-content/uploads/2026/06/house-1110867_1280.png)

Using the Kadence Icon Search feature.

**Kadence** offers the ability to search for and import **Custom** **Icons**.

Open the **Icon** **Selection** dropdown from the *Icon Settings Block Setting*****and click on the **Plus** **Icon**.

Then, find the **Search** **tab** at the top of the *Add a Custom Icon* modal.

Here you can type in the desired **Search** **Term** to receive a list of relevant importable icons.

![Search For Icon](https://docs.nexcess.com/wp-content/uploads/2026/06/Search-For-Icon.gif)

![Load More Icons](https://docs.nexcess.com/wp-content/uploads/2026/06/Load-More-Icons.gif)

To add an icon to your **Custom Icons List**, select the desired Icon and press the **Add** **Button** at the bottom right of the *Add a Custom Icon* modal.

If you do not see a desired icon at first or would like to explore additional available Icons, click on the **Load** **More** **Button** at the bottom left of the*Add a Custom Icon* modal.

Adding Custom Icons Using IcoMoon Fonts

Icomoon allows users to convert SVG Icons to Font Files. This is another way to display Custom Icons in Kadence. This method will also add the Custom Icons to the relative theme settings that allow an icon to be selected.

Use [Icomoon (free)](https://icomoon.io/app/) to upload or choose which icons want to add. SVG Icons can be added using the Import Icons button at the top left of the page. Once all of the Icons are added and selected, click Generate Font.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/icons-1-1024x630-1.jpg)

Next, download the icons.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/download-1024x603-1.jpg)

Once downloaded, open the downloaded zip folder and locate the .json file.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/json-min-1024x582-1.jpg)

Next, from the WP Admin Panel, navigate to Kadence Blocks > Custom Icons.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/icons.jpg)

Add a new custom icon and upload the .json file. Once uploaded, all of the selected icons are imported into the custom icon post.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-01-01-at-1.12.43-PM-1024x455-1.png)

There is also an option to show only these icons. When this is enabled, other icons will not show in Kadence Blocks.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-01-01-at-10.38.40-AM.png)

After adding the Custom Icons to the website, they can be selected like all other Kadence Icon options and will be usable across the website.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-01-01-at-3.15.53-PM-1024x377-1.png)

---

