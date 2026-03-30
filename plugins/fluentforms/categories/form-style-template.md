# Form Style Template

*Category from Fluent Forms documentation*

---

## Default Form Style Template

**Source:** [https://fluentforms.com/docs/default-form-style-template/](https://fluentforms.com/docs/default-form-style-template/)

The **Default Form Style Template** allows you to set a global design for every form you create. Instead of styling each form individually, you can define your brand’s look once in the Global Settings. This style is automatically applied to all new forms, though you still have the freedom to customize the design of any specific form whenever you like.

This guide will walk you through setting up and applying the **Default Style Template** on your WordPress site.

## Setting Up a Default Style Template

To configure your global form design settings, follow these steps:

Navigate to **Fluent Forms Pro** from your WordPress dashboard and select **Global Settings**. Scroll down to the **General** category and locate the **Default Style Template** section.

Toggle the **Enable Default Style Template** switch to **ON**.

![](https://fluentforms.com/wp-content/uploads/2026/01/enable-dfault-style-template-1-scaled.webp)

In the **Copy Styles from Existing Form** dropdown, choose a form that already has the design you want to use as your baseline.

For detailed instructions on styling your form, refer to this [documentation](https://fluentforms.com/docs/official-form-styler-of-fluent-forms/).

Now, click the **Copy Styles** button to import those design settings.

### Customizing the Global Template

Once the template is enabled, you have advanced control over the global styling:

- **Include Form Styler Settings:** Toggle this to choose whether to include specific styler configurations in the template.
- **Form Styler Styles (JSON):** You can manually update or refine your design by editing the **JSON** code directly in the provided text area.
- **Custom CSS:** Add your own CSS rules in the **Custom CSS** box to apply site-wide styling tweaks to all forms.
- **Clear Default Style Template:** Use this button if you wish to reset or remove the global styling.

Click the **Save Settings** button at the bottom of the page to apply the global template.

![](https://fluentforms.com/wp-content/uploads/2026/01/form-style-2-scaled.webp)

## Applying the Template to New Forms

After saving your **Default Style Template**, any **New Form** you create will automatically inherit these styles.

Click on **New Form** and select **Blank Form** or a template. Add your fields and click **Save Form**.

When you click **Preview & Design**, you will see that the form already features your global colors, typography, and button styles.

> Note: This template can also be applied to Imported Forms, ensuring they match your brand instantly without manual adjustments.

![](https://fluentforms.com/wp-content/uploads/2026/01/preview-design-3-scaled.webp)

**Congratulations!** You have successfully set up a **Default Style Template**. Your forms will now maintain a professional, consistent look across your entire website.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our **support team**. Thank you!

---

## Modal/Popup/Lightbox in Fluent Forms

**Source:** [https://fluentforms.com/docs/modal-popup-lightbox-in-fluent-forms/](https://fluentforms.com/docs/modal-popup-lightbox-in-fluent-forms/)

Fluent Forms offers you to built-in popup feature makes displaying forms in a modal, popup, or lightbox easily. It also offers a button-based popup trigger for forms.

In this documentation you will learn how to create and customize a popup form using Fluent Forms.

> This is a Pro feature of Fluent Forms. To use it, you’ll need to have Fluent Forms Pro installed and activated.

## Displaying the Popup Form

To display a form in a popup, first, you must use a unique shortcode that is different from the usual one. The basic shortcode format is:

```
[ fluentform_modal form_id= "228" ]
```

> Remember to replace the form ID by your form ID.

Now, Replace “228” with the actual form ID of your form. You can find the form ID by navigating Fluent Forms and clicking **All Forms**. 
Then click the **fluent form ID**you want to replace and copy it.

![](https://fluentforms.com/wp-content/uploads/2024/12/Editor-Fluentform.webp)

Now paste it into the page or post where you want the popup to appear.

Then customize the text displayed on the popup trigger button and add btn_text=”**Click Me**” to your shortcode:

```
[ fluentform_modal form_id="228" btn_text="Click Me" ]
```

Now, you will change the **Background Color.** To change the background color of the popup, add bg_color=”**red**” (or your preferred color):

```
[ fluentform_modal form_id="27" btn_text="Subscribe" bg_color="green" ]
```

Next**, add custom CSS classes** to your popup. If you want to style the button with custom CSS, use the css_class parameter:

```
[ fluentform_modal form_id="228" btn_text="Subscribe" css_class="myClass myClassAgain" bg_color="red" ]
```

These will add the CSS class to the button, as shown in the screenshot below, so you can customize your button to your style.

![](https://fluentforms.com/wp-content/uploads/2025/04/Contact-zoro-04-22-2025_06_07_PM.webp)

> You can use any popup builder, such as Popup Maker or Elementor Popup. You need to add the Fluent Forms shortcode inside the Popup builder.

Congratulations on creating your Popup with Fluent Forms. If you have any further questions, don’t hesitate to [contact](https://wpmanageninja.com/support-tickets/) us.

---

## Fluent Forms Styling/Custom CSS

**Source:** [https://fluentforms.com/docs/fluent-forms-styling-custom-css/](https://fluentforms.com/docs/fluent-forms-styling-custom-css/)

Fluent Forms lets you easily style your forms using custom CSS and JavaScript. Whether it’s adjusting buttons, fonts, or input fields, you have full control over how your forms look and behave.

In this guide, you’ll learn how to apply custom CSS and JavaScript to your Fluent Forms.

## Accessing Custom CSS/JS Settings

Go to **Forms** from the top menu and open the **Editor** page of your desired form by clicking the **Edit** button.

![](https://fluentforms.com/wp-content/uploads/2024/12/Form-Edit-1-scaled.webp)

In the **Settings & Integrations** tab (top right of the editor), select **Custom CSS/JS**. You’ll see a field for adding custom CSS, along with your form’s **unique class** (e.g. 
```
.fluent_form_40
```

)

![](https://fluentforms.com/wp-content/uploads/2024/12/02-5-scaled.webp)

### Using the Unique Form Class

Each form is assigned a unique CSS class ( fluent_form_40), which is displayed in the Custom CSS section. Use this to apply styles to a specific form without affecting others.

```
Example:
.fluent_form_40 .ff_submit_btn {
    background-color: #0073e6;
    color: white;
    border-radius: 5px;
}
```

## Customization Examples

Please note that you need to replace the ‘.fluent_form_149’ from the code with your own form’s unique class.

Here are some styling ideas you can apply to your form using CSS:

**Submit Button Styling:** Change the button’s background color, border, or hover effects.

```
/* Change button style*/
form.fluent_form_149 .ff-btn-submit {
    background-color: #000000; /* change button background color */
    color: #ffffff; /*change button font color*/
    border-radius: 10px; /*change button round corners*/
    
}

/*Change button hover style*/
form.fluent_form_149 .ff-btn-submit:hover {
    background-color: #ff0606; /*change button background color on hover*/
    color: #000000; /*change button font color on hover*/
}
```

**Input Fields Styling:** Customize text boxes, dropdowns, or radio buttons.

```
/*input style*/
form.fluent_form_149 .ff-el-form-control{
    padding: 6px 12px;  /*change padding*/
    background-color: #fff; /*change background color*/
    border: 1px solid #ced4da; /*change border width and color*/
    border-radius: 10px; /*change corner round/ border radius*/
}
```

**Font styles:**Modify fonts to match your website’s branding.

```
form.fluent_form_149 .ff-el-form-control {
    font-size: 16px; /*change font size*/
    line-height: 1.5; /*change line height*/
    color: #495057; /*change font color*/
}
```

**Label styles:** Modify labels to match your website’s branding.

```
/*Change label styles*/
form.fluent_form_149 .ff-el-input--label{
    font-size:22px; /*change label font size*/
    color:red; /*change label color*/
}
```

**Input Focus Color:**Highlight input fields when focused.

```
/*Change input border color when input is selected/focused */
.ff-el-form-control:focus {
    border-color:red; 
    outline: none;
    -webkit-box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
    box-shadow: 0 0 0 3px rgba(255, 0, 129, 0.25);
}
```

**Step Button and Rating:**Redesign multi-step navigation buttons and rating stars.

```
/* Change Rating Star Color */
form.fluent_form_149 .ff-el-ratings label.active svg {
    fill: red;
}
```

If you repeatedly get bored with the Step Button style, you can change that too.

```
/*Change Step button styles*/
form.fluent_form_149 .step-nav button{
    background-color: #000000; /* change step button background color */
    color: #ffffff; /*change step button font color*/
    border-radius: 10px; /*change step button round corners*/
}

/*Change Step button styles on hover*/
form.fluent_form_149 .step-nav button:hover{
    background-color: #ff0606; /*change step button background color on hover*/
    color: #000000; /*change step button font color on hover*/
}
```

After adding your custom styles, click****the**Save Settings** button, and then preview your form on the front end to see the changes live.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Official Form Styler of Fluent Forms

**Source:** [https://fluentforms.com/docs/official-form-styler-of-fluent-forms/](https://fluentforms.com/docs/official-form-styler-of-fluent-forms/)

Fluent Forms****is designed to look great & fit with any WordPress theme. With the built-in **Form Styler**, you can easily create a custom design that perfectly matches your site’s branding without coding knowledge.

> Form Styler is a Pro feature. To use it, make sure you have Fluent Forms Pro.

This guide walks you through how to **design, style,**and**customize** your forms visually in Fluent Forms.

## Getting Started with Form Styler

First, open or create a form in Fluent Forms. **Save the form**, then click **Preview & Design** in the top-right corner to open the styling panel.

![](https://fluentforms.com/wp-content/uploads/2024/12/official-form-style-01-scaled.webp)

## Styling Options

There are three tabs for the design part of the Fluent form.

### General Tab

The General Tab is used to style each element of the form. Here you can choose some pre-defined styles from **Form Style Templates**.

There are different style sets to choose from. **Default**, **Modern Bold**, **Modern Light**, **Classic**, **Bootstrap Style,**and**Inherit Theme Style** are all **Form Style Template**.

![](https://fluentforms.com/wp-content/uploads/2024/12/02-6-scaled.webp)

You can also **Customize** the preset by choosing the **Custom (Advanced Customization)** option. From this option, you can change the**Label Styles**, **Input and textarea styles, Placeholder styles, Radio and checkbox Styles,** and **Submit Button styles**.

**Label Style:**You can change the color of the field labels. As shown in the screenshot below, you may also define typography, such as font size, font weights, text decoration, line height, and letter spacing.

![](https://fluentforms.com/wp-content/uploads/2024/12/general-label-01-scaled.webp)

**Input & Textarea Styles:** Set the input fields and text areas with background and text colors. Change the font size, weight, text decoration, line height, letter spacing, etc. The box shadow of the input and text-area boxes can be defined below the **Typography** settings.

![](https://fluentforms.com/wp-content/uploads/2025/04/Text-area-1-scaled.webp)

When clicking on **Focus**, you can add style to the input fields and text regions. This is the same as the standard styling options.

![](https://fluentforms.com/wp-content/uploads/2025/04/Input-Textarea--scaled.webp)

**Placeholder Styling:** Choose the color of the input field placeholders. Set the typography as indicated in the screenshot, which includes **Font Size, Font Weights, Text Decoration, Line Height, and Letter Spacing**, among other things.

![](https://fluentforms.com/wp-content/uploads/2025/04/Placeholder.webp)

**Radio & Checkbox Style:**When you enable **Smart UI**, you’ll see three styling options for the radio and checkbox fields. When the radio or checkbox is checked, define the border, item, and background colours.

You can also style your form with **Custom Border** by checking the **Use Custom Border Style**.

![](https://fluentforms.com/wp-content/uploads/2025/04/Genral-tab-customize-style-1-scaled.webp)

**Image or File Button Style:**Fluent Forms offers the Image or File button Style options. You can customize the button to match your website’s design.

You can personalize the button’s background color, text color, typography, border options, and even add box shadows.

These customizations can be applied to both the **Normal** state and the **Hover** state.

![](https://fluentforms.com/wp-content/uploads/2024/12/image-or-file-button-style-06-scaled.webp)

**Submit Button Style:**Fluent Forms sets the default Submit button color to a vibrant dodger blue. However, you’re not restricted to this; you can easily customize the Submit button to suit your preferences and match your website’s design.

The styling options for the**Submit button**are the same as those for the **Next** and **Previous** buttons in multi-page forms.

You can personalize the button’s background color, text color, typography, border options, and even add box shadows.

These customizations can be applied to both the **Normal** state and the **Hover** state.

![](https://fluentforms.com/wp-content/uploads/2025/04/Button-Style.webp)

## Misc Tab

The Misc Tab styles the Form Container background, padding, and margin.

**Container Style:**In the container style options, you can choose various design options, including background, borders, padding, margin, box shadow, etc.

**Form Border Settings:**Enable form border settings and specify the border type, color, width, and radius of the border.

![](https://fluentforms.com/wp-content/uploads/2024/12/04-5-scaled.webp)

**Asterisk Styles:**You can choose the color of the asterisk styles of your form here.

![](https://fluentforms.com/wp-content/uploads/2024/12/05-1-scaled.webp)

**Inline Error Message Styles:**The color of the Inline Error Message is customizable. As shown in the screenshot below, define the typography, including font size, font weights, text decoration, line height, and letter spacing, among other things.

![](https://fluentforms.com/wp-content/uploads/2024/12/06-scaled.webp)

**After Submit Success Message Styles:**You can also easily customize the After Submit Success Message. Fill out your form and submit it for visual viewing while designing the submit success message for testing purposes.

You can customize the **background and fonts**. You can change the **Font Size** and weight, **Text Decoration**, **Line Height**, and**Letter Spacin**g, among other things.

The box shadow of the success message box can be defined under the typography settings.

![](https://fluentforms.com/wp-content/uploads/2024/12/07-scaled.webp)

**After Submit Error Message Styles:**The Error Message can also be customized after submission. Its styles are the same as the After Submit Success Message Styles.

You can set the background and font colours, as well as the font size, weight, text decoration, line height, and letter spacing.

You may also configure the box shadow of the success message box and also add a **Custom Border** in your form.

![](https://fluentforms.com/wp-content/uploads/2024/12/08-scaled.webp)

## Import

The **Import** tab selects a Fluent Form existing style add and can also import your style.

You can import your style from another **Existing Form** or **Upload** your Fluent form style.

![](https://fluentforms.com/wp-content/uploads/2024/12/09.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Form Layout Settings in Fluent Forms

**Source:** [https://fluentforms.com/docs/form-layout-settings-in-fluent-forms/](https://fluentforms.com/docs/form-layout-settings-in-fluent-forms/)

**Fluent Forms** offers a **Form Layout** feature for the basic customization of your form’s outlook (e.g., the position of the input field label, default help message placement, default error message placement, and asterisk marker position for required fields).

This article will guide you through setting up the**Form Layout** in **Fluent Forms.**

## Form Layout Settings

To learn how to set up form layout individually, follow the steps below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set the conditions.

![](https://fluentforms.com/wp-content/uploads/2024/12/1.-desired-Form-Editor-1-scaled.webp)

Once you are on the**Editor Page**, go to **Settings & Integrations** from the top navbar and open the **Form Layout**tab under the **Settings** option.

Here, you will get **Four** options to customize the basic layout of your form. These are:

1. Label Alignment
2. Help Message Position
3. Error Message Position
4. Asterisk Position

Once you complete the setup, click the **Save Settings**button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/2.-Form-Layout-settings-scaled.webp)

**All the settings mentioned above are briefly explained below:**

### 1. Label Alignment

With this option, you can define the alignment position for the **Label** of your **Input Fields**.

Clicking the**Arrow Icon**will provide three options for setting the **Placement**of the **Field Label**. These are:

- **Top**: Select this option to align the label’s position to the top/above the input field.
- **Left**: Choose this option to set the label’s placement to the left of an input field.
- **Right**: Choose this to set the label’s placement to the right of an input field.

![](https://fluentforms.com/wp-content/uploads/2024/12/3.-Label-Alignment-option.webp)

For example, I selected the **“Top”**alignment for the input fields. You can see that all the **Field Labels**are placed on the top of the fields.

![](https://fluentforms.com/wp-content/uploads/2024/12/4.-preview-of-Label-alignment.webp)

## 2. Help Message Position

With this option, you can define the **Placement** for the **Help Message**of your I**nput Fields**.

Clicking th**e Arrow Icon**will provide four options for setting the **Placement**of the **Help Message**. These are:

- **Beside Label (Tooltip)**: Select this option to align the Help Message’s position right next to the **Field Label**as a **Tooltip**.

- **Below Input Fields**: Choose this option to set the Help Message’s placement below the input field.

- **Focus on Element**: Choose this to set the label’s placement to the right of an input field.

- **Before input**: Choose this to set the Help Message’s placement before the input field.

![](https://fluentforms.com/wp-content/uploads/2024/12/5.-Help-message-option.webp)

For example, I selected the **“Beside Label (Tooltip)”**position for the **Help Message**.
You can see that the **Help Message** of the **Email** **Field**is placed beside the **Field Labe**l as a **Tooltip**.

![](https://fluentforms.com/wp-content/uploads/2024/12/6.-preview-of-help-message.webp)

### 3. Error Message Position

With this option, you can define the **Placement** for the **Error Message**of your I**nput Fields**.

Clicking th**e Arrow Icon**will provide two options for setting the **Placement**of the **Error Message**. These are:

- **Below Input Fields**: Choose this option to place the **Error Message** below the input fields.

- **Stacked after Form**: Choose this option to place the **Error Message** stacked after the form submit button.

![](https://fluentforms.com/wp-content/uploads/2024/12/7.-Error-message-option.webp)

For example, I selected the **“Below input Fields”**position for the **Error Message**.
You can see that the **Error Message** is displayed below the **Email** **Field** due to an invalid email address.

![](https://fluentforms.com/wp-content/uploads/2024/12/8.-preview-of-error-message.webp)

### 4. Asterisk Position

With this option, you can define the **Asterisk Marker Position**for the **Required** **Input Fields**.

Clicking th**e Arrow Icon**will provide three options for setting the **Placement**of the **Asterisk Marker**. These are:

- **None**: Select this option if you don’t want to display **Asterisk Marker**for the required input fields.

- **Left to Label**: Choose this option to place the **Asterisk Marker** to the left of the **Required** **Field Labels**.

- **Right to Label**: Choose this option to place the **Asterisk Marker** to the right of the **Required** **Field Labels**.

![](https://fluentforms.com/wp-content/uploads/2024/12/9.-Asterisk-position-option.webp)

For example, I selected the **“Right to Label”**position for the **Asterisk**.

You can see that the **Asterisk ( * )**is displayed right next to the **Required** **Fields**(e.g., **Email** and **Country** as both are the required fields ).

![](https://fluentforms.com/wp-content/uploads/2024/12/10.-preview-of-asterisk-marker-position.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

