# Payment Fields

*Category from Fluent Forms documentation*

---

## Add Coupon Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-coupon-field-in-payment-forms/](https://fluentforms.com/docs/add-coupon-field-in-payment-forms/)

In **Fluent Forms**, the **Coupon** feature allows you to add coupons and apply discounts to your payment form. This article will guide you through adding the **Coupon** field in your Fluent Forms for your WordPress Site.

> Remember, Coupon is a premium feature and you need Fluent Forms Pro Plugin to use this field.

## Enable the Coupon Module

Before starting the process of adding a coupon field, you need to enable the **Coupon Module**. To learn how to enable the **Coupon Module**, follow the steps with the screenshots below –

First, go to **Global** **Settings**from the **Fluent Forms Navbar**, open the **Payment** tab from the left sidebar, click the **Coupons**, and press the **Enable Coupon Module**button.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Enable-Coupon-Field-scaled.webp)

## Create a Coupon

If you don’t have an existing coupon on the****available Coupons page, create a new one. To create a **Coupon**, click the **+ Add New Coupon** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-new-coupon-button-scaled.webp)

**Now, fill in the following necessary information to create a new coupon code:**

**A. Coupon Title:** Add a name for your coupon into this field so that you can find it easily later.

**B. Coupon Code:** Put your coupon code in the Coupon Code box, such as FluentForm10. You can add only alphabets or numbers as coupon codes.

**C. Discount Type:** Here, you can select your discount type either based on Percent or a fixed amount.

**D. Discount Amount/Percent:** Here, enter the amount/percent you want to give a Discount to your coupon users.

**E. Min Purchase Amount:** This specifies the minimum amount that must be purchased to receive any discount. Leave blank if there is no minimum amount requirement.

**F. Stackable:** Check this **Yes** box if you want this coupon code to be used with other coupons.

**G. Start Date:** Enter the start date for this coupon in the format of yyyy-mm-dd from. Leave blank if there is no start date.

**H. End Date:** Enter the end date for this coupon in the format of yyyy-mm-dd as an expiry date i.e., after that, this coupon will not work. Leave blank if there is no end date.

**I. Applicable Forms:** Here, you can select a single or multiple forms where this coupon will be applicable. Leave this blank if you want to apply this coupon or all forms

**J. Coupon Limit:** Here, you can set the number of times a specific user can use this coupon. Leave this field empty or enter zero if no limits are needed.

**K. Success Message:** Here, you can set the success message for your coupon to send to the user after each successful coupon application. You can also use the smart codes****provided right below this field.

**L. Failed Message:** Use this option to set the failed messages based on different failure occurrences.

**M. Status:** Here you can set the Coupon status as Active or Inactive.

Once you are done, click the **Save Coupon** button and the coupon will be created.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Add-a-new-coupon-pop-up-page.webp)

Once you create a new coupon, you will always find it under the **Available Coupons** page.

Also, you can**edit/delete** any coupon anytime if needed by clicking the**Pencil/Trash** Icon. **Remember**, always press the **Save Coupon** button after any edit to save all the updates.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-EditDelete-added-coupon-code-scaled.webp)

## Integrate Coupon Field in a Form

To learn how to add the **Coupon Field**in a specific form, follow the steps with screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Open-desired-form-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Coupon** field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it. Also, don’t forget to add the Payment Method field to collect the payments. Plus to collect the recurring payments, you can add the Subscription field. Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Add-Coupon-field-scaled.webp)

## Customize the Coupon Field

You can see that a coupon field is added to a payment form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Coupon
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Input-Customization-tab-scaled.webp)

### 1. Coupon

All the **Settings** under the **Coupon** tab mentioned in the screenshot are briefly explained below –

**a. Element Label**: This is the field title the users will see when filling out the **Coupon** field in a form. You can enter any text here to help users understand the purpose of the field.

**b. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**c. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option.

**d. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Coupon** field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**e. Suffix Label**: Provide Input Suffix Label. It will show in the input field as a suffix label.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Coupon-customization-tab-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**a. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**b. Element Class**: Add custom CSS classes to the input field itself. This is used for adding Custom CSS/JS for a specific input field of a form.

**c. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**d. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**e. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Advanced-option-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the preview of the form, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-Save-Form-scaled.webp)

## Preview of Coupon Field

Here, is the preview of the added Coupon field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/11.-Form-Preview.webp)

This way you can easily add the **Coupon Code** field to your payment form!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Add Payment Summary Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-payment-summary-field-in-payment-forms/](https://fluentforms.com/docs/add-payment-summary-field-in-payment-forms/)

In **Fluent Forms**, the **Payment Summary**field allows users to view a summary of their total payments based on the selected items or products and you can use it in any form**.**

This article will guide you through adding the **Payment Summary** field in your Fluent Forms for your WordPress Site.

## Add Payment Summary Field

To learn how to add the Payment Summary field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-3-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Payment Summary**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Payment-Summary-field-scaled.webp)

You can see that a **Payment Summary** field is added to the form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Payment Summary
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization-tab-scaled.webp)

### 1. Payment Summary

Here, you will get the following setting option for customizing the field.

- **Empty Payment Selected Text**: Here, you can set a text you want to show when no payment item has been selected yet.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Payment-Summary-customization--scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

**B. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Advanced-Summary-options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](https://fluentforms.com/docs/add-subscription-field-in-payment-forms/) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Add-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Save-Form-button-scaled.webp)

## Preview of Payment Summary field

Here, is the preview of the added **Payment Summary** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Form-Preview-.webp)

This way you can easily add the **Payment Summary** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Add Payment Method Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/)

In **Fluent Forms**, the **Payment Method** field allows you to create forms to accept**Payments**through different payment platforms**.** This article will guide you through adding the **Payment Method** field to your WordPress Site’s Fluent Forms.

## Add Payment Method Field

To learn how to add the Payment Method field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Payment Method**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Payment-Method-scaled.webp)

You can see that a **Payment Method** field is added to the form. You can edit this field by****hovering over it and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Payment Method
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization-scaled.webp)

### 1. Payment Method

Here, you will get various settings options for customizing the field. All the **Settings** under the **Payment Method**tab mentioned in the screenshot are briefly explained below –

**A. Element Label**: This is the field title the users will see when filling out the **Item Quantity**field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Admin Field Label**: The admin field label is a field title displayed only to admin users. This means if you want to show a different field label for your admin users when they view the form submission.

**C. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

- **Payment Methods**: Here you will get all the available Payment Method Platforms. Now, select the desired **Payment Platform/s** by clicking the **Checkbox/es** that you want to use for collecting payments through the form submissions.

**But, remember**, the added payment method/s in your **Form** will not function unless you properly complete the payment configuration process. To learn the detailed guidelines on **How to configure Payment methods in Fluent Forms**, read all the documentation under the Payment Integration category thoroughly.

**D. Default Value:** If you would like to pre-populate the value of a field, enter it here. [View All the smart codes here](https://fluentforms.com/docs/form-editor-smart-codes/).

**E. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Payment-Method-customization-option-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**C. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**D. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Advanced-Options-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Save-Form-scaled.webp)

## Preview of Payment Method field

Here, is the preview of the added **Payment Method** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Form-Preview.webp)

This way, you can easily add the **Payment Methods** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Add Item Quantity Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-item-quantity-field-in-payment-forms/](https://fluentforms.com/docs/add-item-quantity-field-in-payment-forms/)

In **Fluent Forms**, the **Item Quantity**field enables users to select a single item or product in multiple quantities based on their needs**.** This article will guide you through adding the **Item Quantity** field in your Fluent Forms for your WordPress Site.

## Add Item Quantity Field

To learn how to add the Item Quantity field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-2-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Item Quantity**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Item-Quantity-field-scaled.webp)

You can see that an **Item Quantity** field is added to the form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Item Quantity
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization--scaled.webp)

### 1. Item Quantity

Here, you will get various settings options for customizing the field. All the **Settings** under the **Item Quantity**tab mentioned in the screenshot are briefly explained below –

**A. Element Label**: This is the field title the users will see when filling out the **Item Quantity**field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**C. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option.

**D. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Item Quantity**field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**E. Product Field Mapping**:  You need to map the **Payment Item** from the item/s added to your form for which you want to use this Item Quantity field. Remember, ensure that you use a separate “Item Quantity” field for each “Payment Item” field.”

**F. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

**G. Min Value**: With this option, you can specify the minimum quantity users must select. You can also, add the error message by enabling the Toggle button.

**H. Max Value**: With this option, you can specify the maximum quantity users can select. You can also, add the error message by enabling the Toggle button.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Item-Quantity-customizarion-tab-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Default Value:**You can set the default quantity for selecting your items.

**B. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**C. Element Class**: Use this option to add your custom CSS for a specific input field of a form.

**D. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**E. Step**: Please provide the step attribute for this field.

**F. Prefix Labe**l: Use this option to provide a Prefix Label in your input field. It will show in the input field as a Prefix label.

**G. Suffix Label**: Use this option to provide a Suffix Label in your input field. It will show in the input field as a Suffix label.

**H. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**I. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Advanced-Options-2-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](https://fluentforms.com/docs/add-subscription-field-in-payment-forms/) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Payment-Method-fields-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Save-Form-1-scaled.webp)

## Preview of Item Quantity field

Here, is the preview of the added **Item Quantity** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Form-Preview-1.webp)

This way you can easily add the**Item Quantity** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Add Custom Payment Amount Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-custom-payment-amount-field-in-payment-forms/](https://fluentforms.com/docs/add-custom-payment-amount-field-in-payment-forms/)

In **Fluent Forms**, the **Custom Amount**field allows users to pay any amount based on their needs. This article will guide you through adding the **Custom Payment Amount** field in your Fluent Forms for your WordPress Site.

## Add Custom Payment Amount Field

To learn how to add the Custom Payment Amount field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-1-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Custom Payment Amount**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Custom-Amount-Payment-scaled.webp)

You can see that a **Custom Payment Amount** field is added to the form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Custom Payment Amount
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization-1-scaled.webp)

### 1. Custom Payment Amount

Here, you will get various settings options for customizing the field. All the **Settings** under the **Custom Payment Amount**tab mentioned in the screenshot are briefly explained below –

**A. Element Label**: This is the field title the users will see when filling out the **Item Quantity**field in a form. You can enter any text here to help users understand the purpose of the field.

**B. Label Placement**: Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

**C. Admin Field Label**: The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option.

**D. Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Item Quantity**field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

**E. Required**: Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

**F. Min Value**: With this option, you can specify the minimum quantity users must select. You can also, add the error message by enabling the Toggle button.

**G. Max Value**: With this option, you can specify the maximum quantity users can select. You can also, add the error message by enabling the Toggle button.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Custom-Payment-Amount-option-scaled.webp)

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Default Value:**You can set the default quantity for selecting your items.

**B. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**C. Element Class**: Use this option to add your custom CSS for a specific input field of a form.

**D. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**F. Prefix Labe**l: Use this option to provide a Prefix Label in your input field. It will show in the input field as a Prefix label.

**G. Suffix Label**: Use this option to provide a Suffix Label in your input field. It will show in the input field as a Suffix label.

**G. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**H. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

**I. Calculation Field Settings**: Enable this and provide formula expression if you want this field as calculated based on other numeric field value

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Advanced-Options-1-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](https://fluentforms.com/docs/add-subscription-field-in-payment-forms/) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Add-Payment-Method-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Save-Form-scaled.webp)

## Preview of Custom Payment Amount field

Here, is the preview of the added **Custom Payment Amount** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Form-Preview.webp)

This way you can easily add the **Custom Payment Amount** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Add Subscription Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-subscription-field-in-payment-forms/](https://fluentforms.com/docs/add-subscription-field-in-payment-forms/)

In **Fluent Forms**, the **Subscription** field allows you to create forms with **Subscription** **Items** to accept **Recurring Payments.** This article will guide you through adding the **Subscription** field in your Fluent Forms for your WordPress Site.

> Remember, Subscription is a premium feature and you need Fluent Forms Pro Plugin to use this field.

## Add Subscription Field

To learn how to add the Subscription field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-5-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** module, and add the **Subscription**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Subcription-field-scaled.webp)

You can see that a **Subscription** field is added to the form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Subscriptions
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization-tab-2-scaled.webp)

### 1. Subscription

Here, you will get various settings options for customizing the field.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Subscription-customization-tab-scaled.webp)

**All the Settings under the Subscription mentioned above are briefly explained below –**

#### A. Element Label

This is the field title the users will see when filling out the **Subscription**field in a form. You can enter any text here to help users understand the purpose of the field.

#### B. Label Placement

Using this option, you can determine the position of the label title that the user will see. The available options are Top, Right, Bottom, Left, Hide Label, and Default all of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

#### C. Admin Field Label

The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option.

#### D. Subscription Type

Here, you will get two different **Subscription Types**to set your pricing plan for the subscription payment. These are:

1. Single Recurring Plan
2. Multiple Pricing Plans

1. Single Recurring Plan:

Select this plan if you want to offer one pricing plan to your users for collecting payments. Plus, configure the following options as per your needs.

- **Plan Name**: Give the name of your plan in this field.

- **Price Billing**: Here, set the price for your subscription.

- **Billing Interval**: Here, set the billing interval as **Daily**, **Weekly**, **Monthly**, or **Yearly** for the subscription.

- **Enable User Input Amount**: Enable this feature to customize the pricing plan by setting a fixed **Minimum** and **Default** amount, along with a **Label** for this amount.

- **Has Signup Fee?**: Enable this option if you want to set a custom amount as a Signup Fee. This amount will be deducted from customers’ accounts once they sign up on your website.

- **Has Trial Days?**: Enable this option to offer users a trial period without a subscription fee.

- **Total Billing Times**: Here, you can set how many times your website will pull funds from customers’ accounts. Keep the field blank or put 0 (Zero) for billing for an unlimited time.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Single-recurring-plan.webp)

2. Multiple Pricing Plans

Select this option if you want to offer multiple pricing plans to your users to choose one plan when making a subscription. Plus, configure the following options as per your needs.

1. **Plan Display Type**: With this option, you can select whether you want to set the item selection type using a **radio** button or **select the input field** (dropdown list).

1. **Pricing Plans**: The pricing plan for this option works exactly similarly to the pricing plan for the Single Recurring Plan.

To add multiple pricing plans, click the**Add New Plan** button, and to delete any item, click the **Trash** icon in the right corner of the section.

Also, if you want a pricing plan to be selected by default from all your pricing plans, enable the **Default** **Toggle** for that plan.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Multiple-Pricing-Plan.webp)

#### E. Required

Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user.

**C. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**D. Layout**: Select the Layout for checkable items

**E. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Advanced-options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](https://fluentforms.com/docs/add-subscription-field-in-payment-forms/) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Add-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all the changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Save-Form-scaled.webp)

## Preview of Subscription field

Here, is the preview of the added **Subscription** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-Form-preview.webp)

This way you can easily add the **Subscription** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Add Payment Item Field in Payment Forms

**Source:** [https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/)

In **Fluent Forms**,  the **Payment Item** field allows you to showcase single or multiple **Items (Products)** options in your form, allowing users to select and buy their desired Item/s that exist in the form**.**

This article will guide you through adding the **Payment Item** field in your Fluent Forms for your WordPress Site.

## Add Payment Item Field

To learn how to add the Payment Item field to the Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Payment Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you don’t have an existing payment form, read this Documentation to create a new one. For example, I choose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Open-desired-form-4-scaled.webp)

Once you open the **Editor** page, go to the **Input Fields**in the right sidebar, open the **Payment Fields** dropdown section, and add the **Payment Item**field.

> If you don’t have the Payment Fields Module enabled in your Fluent Forms, read this Documentation to learn how to enable it.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Add-Payment-Item-field-scaled.webp)

You can see that a **Payment Item** field is added to the form. You can edit this field by**hovering over it** and clicking the **Pencil Icon**.

It will take you to the **Input Customization** tab on the right side and offer you the following options for customizing the coupon field.

1. Payment Item
2. Advanced Options

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Input-Customization-tab-1-scaled.webp)

### 1. Payment Item

Here, you will get various settings options for customizing the field.

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Payment-Item-customization-option-scaled.webp)

**The Settings under the Payment Item mentioned above are briefly explained below –**

#### A. Element Label

This is the field title the users will see when filling out the **Payment Item**field in a form. You can enter any text here to help users understand the purpose of the field.

#### B. Label Placement

Using this option, you can determine the position of the label title where the user will see this. The available options are **Top**, **Right**, **Bottom**, **Left**, **Hide** **Label**, and **Default.** All of those are self-explanatory except the Default. If you select the **Default** option, it will represent your global label placement settings.

#### C. Admin Field Label

The admin field label is a field title displayed only to admin users. That means, if you want to show a different field label for your admin users when they view the form submissions, you can configure that using this option.

#### D. Product Display Type

Here, you will get **Four different options**to add item/s (Product/s) and collect payments through the added item/s. These are:

1. Single
2. Radio
3. Checkbox
4. Select

Single

Select this option if you want to offer one Item/Product to your user for collecting payments.

- **Payment Amount**: Here, you can set the **Amount (Price)** for your added **Item**.
- **Amount Label**: Here, you can set the **Label** for your **Payment Amount**.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Single-tab.webp)

Radio

Select this option if you want to offer multiple items to your users for choosing one or more item/s when making a payment. This option allows you to display the item selection as **Radio** buttons.

- **Payment Items**: You can add as many items as you want with fixed prices. Click the **Plus** icon to add items and the **Minus** icon in the right corner to delete them. Enable the **Photo** checkbox in the top-right corner to **add** **product images**. To **set**the**default product/s**, check the **radio** button next to it. To clear all default selections, click **Clear Selection** at the bottom-left corner. You can also rearrange product rows using the drag-and-drop feature.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Radio-tab.webp)

Checkbox

This option exactly works like the Radio Option except it allows you to display the item selection as **Checkboxes**. This option also offer multiple items to your users for choosing one or more item/s when making a payment.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Checkbox-tab.webp)

Select

Select this option if you want your users to choose only one item among multiple items when making a payment. This option allows you to display the item selection as a **Dropdown List** from where you can select any one Item.

- **Payment Items**: You can add as many items as you want with fixed prices. Click the **Plus** icon to add items and the **Minus** icon in the right corner to delete them. Enable the **Photo** checkbox in the top-right corner to **add** **product images**. To **set**the**default product/s**, check the **radio** button next to it. To clear all default selections, click **Clear Selection** at the bottom-left corner. You can also rearrange product rows using the drag-and-drop feature.

- **Placeholder**: Here, you can set a desired text to guide your users about the purpose of the **Payment Item**field. It is the equivalent of the HTML input placeholder attribute. The user will see this text when the input field is empty.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Select-any-one-item-tab.webp)

#### E. Required

Select the **Yes** radio button to make this field mandatory for users to fill in for successful form submission. Otherwise, check the **No** radio button to keep this field optional to fill in.

### 2. Advanced Options

All the **Settings** under the **Advanced Options**tab mentioned in the screenshot are briefly explained below –

**A. Container Class**: Use this option to add your custom CSS classes to the field’s wrapper.

**B. Help Message**: You can use this option to guide your user thoroughly. Add your text here, which will be shown as a help message to the user. To learn more, read this Documentation.

**C. Name Attribute**: The input field’s name attribute is the HTML equivalent of the same name. You don’t need to modify this.

**D. Layout**: Select the Layout for checkable items.

**E. Dynamic Default Value**: If you would like to pre-populate the value of a field, enter it here.

**F. Conditional Logic**: This option allows the coupon field to function conditionally based on your submission values according to your set of conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Advanced-Options-scaled.webp)

Once you complete all the customization, don’t forget to add the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to collect the payments. Plus to collect the recurring payments, you can add the [Subscription](https://fluentforms.com/wp-admin/post.php?post=48578&action=edit) field.

> Remember, the added payment method in your Form will not function unless you properly complete the payment configuration process.

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-Payment-Method-field-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all changes you made. Also, to see the form preview, click the **Preview & Design**button****in the middle.

To integrate and display the form on a specific Page/Post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/11.-Save-Form-scaled.webp)

## Preview of Payment Item field

Here, is the preview of the added **Payment Item** field under the Payment Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/12.-Form-Preview.webp)

This way you can easily add the **Payment Item** fields in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

