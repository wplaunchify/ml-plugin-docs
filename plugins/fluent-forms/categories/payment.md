# Payment

*Category from Fluent Forms documentation*

---

## Configure Payment Settings with Fluent Forms

**Source:** [https://fluentforms.com/docs/configure-payment-settings-with-fluent-forms/](https://fluentforms.com/docs/configure-payment-settings-with-fluent-forms/)

**Fluent Forms** allows you to configure payment settings both globally and individually for all Payment Forms created with **Fluent Forms** (e.g., business name and logo, currency, payment history, receipt page, etc.).

This article will guide you through setting up the **Payment Settings** for all Payment Forms globally.

## Configuring Payment Settings Globally

To learn how to configure the Payment Settings globally for all your payment forms, follow the steps with the screenshots below –

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, click the **Settings**option, and three options appear. These are:

1. General
2. Currency
3. Pages & Subscription Management

**All three options are explained below:**

### 1. General

Under this tab, you will get the following options to configure your payment settings. Remember, this **General Setting** will function globally for all **Fluent Form**s.

**A. Enable Payment Module**: This option is enabled by default, giving you access to the Payment Module (i.e., all payment-related input fields) among all forms. If you uncheck the box, the**Payment Module** will be disabled for all forms. But if you want to accept payment through Fluent Forms, you need to keep it enabled.

**B. Business Name**: Here, you can provide your business name. It will be used for the Payment method’s business name when redirected to checkout.

**C. Business Address**: Here, you can provide your full business address, including street, city, zip, state, and country.

**D. Business Logo**: Here, you can add your business logo using the **Upload Media** button and delete it anytime if needed by clicking the **Trash** **Icon**.

**E. Debug Log**: Enable this option only for test purposes. Once you enable this, Fluent Forms will debug IPN and Payment errors in the log.

Once you are done, click **Save Settings** to save the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-General-tab-under-Payment-Settings-scaled.webp)

### 2. Currency

Under this tab, you will get the following options to define your currency settings globally. Remember, this **Currency** setting will function globally for all Fluent Forms.

**A. Default Currency**: Here, you can set the desired default currency type globally for your payment forms using the dropdown list. You can also set your currency for a specific form using the form’s payment settings.

**B. Currency Sign Position**: Here, you can set the currency sign position according to your requirements by clicking the checkbox, e.g., I choose the Right (100$) option.

**C. Currency Separators**: Here, you will get two types of currency separators from the dropdown list. Choose anyone according to your needs.

**D. Hide decimal points for rounded numbers**: Check this box if you don’t want decimal points if the currency figure is rounded.

Once you are done, click **Save Settings** to save the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Currency-settings-tab-scaled.webp)

### 3. Pages & Subscription Management

Under this tab, you will get the option to display your**Payment History** and **Payment** **Receipt** on your desired pages. Also, you can enable **Subscription** **Management** for **Stripe** only.

Remember, this setting also functions globally for all Fluent Forms.
Once you are done, click **Save Settings** to save the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Page-and-Subscription-Management-tab-1-scaled.webp)

**All the settings mentioned above are briefly explained below:**

#### A. Payment (History) Management Page

Through this option, you can select an existing desired page where only the logged-in users can see their **Payment History** (i.e., **single payments** and **subscriptions**).

You can also add the**Payment History** using this shortcode**** on the selected page.

Then, click the **Save** button to save all the changes, and press the **Preview** button in the middle to see the form preview.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Payment-History-shortcode-scaled.webp)

Here, you can see the **Preview** of the **Payment History Page** where you will get the following options.

- **Subscriptions**: Under this section, only the logged-in users can see the **Payment History**of each**Subscription** of their payment forms**.** Plus, here, you can see the payment-related details by clicking the**View Payments** button in the left corner. Also, users can cancel their subscriptions anytime if needed by clicking the **Cancel** button

- **Payments**: Under this section, only the logged-in users can see the Payment History of each single payment of their payment forms. From here, you can see the individual**Payment Receipt**by clicking the **View** link.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Preview-of-Payment-History.webp)

#### B. Payment Receipt Page

Through this option, you can select an existing desired page where users can view their payment receipts, and manage single & subscription payments.

You can also add the Payment Receipt using this shortcode ****on the selected page.

Then, click the **Save** button to save all the changes, and press the **Preview** button in the middle to see the form preview.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Payment-Receipt-shortcode-scaled.webp)

Here, you can see the **Preview** of a single **Payment Receipt** under the **Payment Receipt**page.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Form-of-a-specific-Pyment-Receipt.webp)

> Remember, you can see the individual Payment Receipt by clicking the View link of a single Payment on the Payment History page.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Payment-History-View-button.webp)

#### C. Subscription Management

Enable this option if you want to allow your users to manage their own subscriptions, like canceling an active subscription. This subscription management will function only for the Stripe payment method.

Once you are done, click **Save Settings** to save the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Subscription-Management-option.webp)

## Configuring Payment Settings in a Specific Form

To learn how to configure the **Payment Settings** for a specific payment form, follow the steps with the screenshots below –

First, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of the desired **Payment** **Form**.

> If you don’t have an existing Payment Form, read this documentation to crate a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-Form-Settings-3-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, and you will get the following options.

**A. Currency:** Using this option, you can set the desired default currency type specifically for this form using the dropdown list.

**B. Transaction Type:**Using this option, you can select the transaction type between **Products/Services** and **Donation** based on your preference.

**C. Customer Email:** Here, you need to map the **Email field** by clicking the **Arrow** **Icon**. It’s an optional field but recommended to be mapped.

**D. Customer Name**: Here, you need to select the name field from your form inputs. It’s an optional but recommended field. If the user is logged in then this data will be picked from logged in user. You can also get the shortcode list by clicking the arrow icon to use dynamic data.

**E. Customer Address**: Please select the customer address field from your form’s address inputs. It’s required for payments in India. You can also get the shortcode list by clicking the arrow icon to use dynamic data.

Do not forget to click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Form-specific-Payment-Settings-scaled.webp)

### Form-specific Payment Method Settings

On this page, you will also get **Three** major **Payment Method Settings** options that you can customize according to your needs, specifically for this form. These are:

1. **Stripe**: To learn more details about the**Stripe Settings**, [click here](https://fluentforms.com/docs/how-to-integrate-stripe-with-fluent-forms/#5-toc-title).
2. **PayPal**: To learn more details about the**PayPal Settings**, [click here](https://fluentforms.com/docs/how-to-integrate-paypal-with-fluent-forms/#5-toc-title).
3. **Paddle**: To learn more details about the**Paddle Settings**, [click here](https://fluentforms.com/docs/how-to-integrate-paddle-with-fluent-forms/#9-toc-title).

Do not forget to click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Form-specific-payment-method-settings-scaled.webp)

> Remember, to get these form-specific Payment Method Settings, you need to ensure these Payment Methods are globally enabled.

**To learn how to enable payment Methods Globally, follow the steps below –**

To enable the desired **Payment Methods**, go to the **Global Settings** from the **Fluent** **Forms Navbar,**open the **Payment** tab, click the **Payment Methods**option, and you will see all the available payment platforms.

Now, go to your desired payment platform/s and check the **Enable** **Payment** **Method**. This will activate all your desired payment methods within the **Payment** **Fields** module for every form.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Enable-desired-payment-methods-globally-for-all-forms-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Create a Payment Form with Fluent Form

**Source:** [https://fluentforms.com/docs/how-to-create-a-payment-form-with-fluent-form/](https://fluentforms.com/docs/how-to-create-a-payment-form-with-fluent-form/)

In [Fluent Forms](http://Fluentforms.com), you can easily create **Payment Forms** to accept payment through different platforms. This article will guide you through Creating Payment Forms to Collect Payments.

## Creating a Payment Form

To learn how to create Payment Forms with Fluent Forms, follow the steps with the screenshots below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> If you do not have any existing form, refer to the articles below, to learn how to Create a Form from Scratch or Create a Form using Templates.

For example, I chose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Open-desired-form-Editor-1-scaled.webp)

Once you open the **Editor** page, you need to add the necessary fields from the **Payment Fields** module.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Payment-Fields-scaled.webp)

## Enabling Payment Module

To get the **Payment Fields**module in your **Fluent Forms**, you have to make sure that your **Payment Fields**module is enabled.

If not, go to the **Global Settings** from the **Fluent** **Forms Navbar to enable the payment options for all forms**.

Now, open the **Payment** tab, click the **Settings** option, and check the **Enable** **Payment** **Module**. This will activate all the payment-related fields within the **Payment** **Module** for every form.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Enable-payment-module-scaled.webp)

Once you ensure the **Payment Module** is **Enabled**, select the necessary fields for your Payment Form.

> Remember, to create a Payment Form you must add at least a Payment Item and a Payment Method field. To collect recurring payment, add Subscription field. We Always Suggest you keep the Name and Email field at the beginning of any form. Also, remember, the added payment method in your Form will not function unless you properly complete the configuration process. To Learn how to configure the Payment on your site through Fluent Forms, click here and read the desired Payment Integration Documentation you selected as a payment method.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Payment-Item-and-Payment-Method-fields-scaled.webp)

## Customizing Payment Method Field

Here, you can see that all the fields necessary for a payment form have been added.

You can edit any field by hovering over it and clicking the **Pencil Icon**. It will take you to the selected field’s **Input Customization** tab on the right side.

To learn how to edit the **Payment Item** and **Choose Payment Method** field specifically, refer to the Documentation below:

- [Payment Item Field](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/)
- [Payment Method Field](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/)

Also, you can choose your preferred payment method/s by checking the desired payment platforms under the**Payment Methods**section on the right-side customization menu.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-EditPencil-icon-of-payment-itel-field-scaled.webp)

### Enabling Payment Methods

To get all the available **Payment Methods** in your **Payment Fields** module, you need to ensure all **payment methods** are enabled. If not, go to the **Global Settings** from the **Fluent** **Forms Navbar**to enable all the payment methods for all forms.

Once you open the **Payment** tab and click the **Payment Methods**option, you will see all the available payment platforms.

Now, go to your desired payment platform/s and check the **Enable** **Payment** **Method**. This will activate all the payment methods within the **Payment** **Fields** module for every form.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Enable-desired-payment-methods-globally-for-all-forms-scaled.webp)

## Customizing Payment Settings

You can also customize the payment settings **globally** for all forms or **individually** for each form based on your needs.

> To learn the detail process of how to customize the payment settings, read this Documentation.

## Integrating Form in WordPress Site

Once you complete the edit, press the **Save** **From** button to save all the changes you have made.
Also, to see the form preview, click the **Preview & Design**button****in the middle.

Finally, to integrate and display the form on a specific **Page**/**Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired **Page**/**Post**.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Save-Payment-Form-scaled.webp)

Then, open a desired page/post, **paste** the **shortcode**, and press the **Save** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Paste-shortcode-on-dsired-page-scaled.webp)

## Preview of Payment Form

Here is the **preview** of the **Payment Form**that we just created.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Preview-of-Payment-form.webp)

This way, you can easily create the Payment Forms in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

