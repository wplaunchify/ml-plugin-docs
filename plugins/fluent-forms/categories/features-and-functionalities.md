# Features And Functionalities

*Category from Fluent Forms documentation*

---

## Advanced Form Validation in Fluent Forms

**Source:** [https://fluentforms.com/docs/advanced-form-validation-in-fluent-forms/](https://fluentforms.com/docs/advanced-form-validation-in-fluent-forms/)

The Advanced Form Validation feature enables you to establish specific rules for user input, preventing form submission based on those conditions. This is an excellent tool for controlling data quality and preventing spam or bot submissions.

## Enable Advanced Validation

Here is how you can set advanced form validation with Fluent Forms.

Go to **Fluent Forms** → **All Forms**. Select the form you want to impose the validation on and click the **Edit** button. Click on the **Settings & Integration** tab in the top bar.

Ensure you are in the**Settings** section. Scroll down to locate the **Enabled Advanced Form Validation** segment. **Toggle** on the **Enable Advanced Form Validation** feature.

![](https://fluentforms.com/wp-content/uploads/2025/11/Advanced-Form-Validation-Fluent-scaled.webp)

## Configure Validation Rules

Once enabled, you can define the precise conditions under which a submission will be accepted or rejected:

- **Status**: Use this option to **Enable Advanced Form Validation**. You can also choose the condition to determine whether the form submission will proceed or fail.
- **Validation Type**: Select how the validation logic will apply. Based on your selection, the submission will be rejected if all defined conditions are met.
- **Error Message**: Write the specific error message you want users to see if the form submission is rejected due to invalid input.

Lastly, click the **Save** button to save the Advanced Form Validation settings.

![](https://fluentforms.com/wp-content/uploads/2025/11/validation-type-scaled.webp)

If you have any questions, feel free to contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## Translate Forms with WPML

**Source:** [https://fluentforms.com/docs/translate-forms-with-wpml/](https://fluentforms.com/docs/translate-forms-with-wpml/)

Translating your Fluent Forms into multiple languages is easy with WPML, no technical expertise required. This guide will walk you through the straightforward steps to make your forms accessible to users in any language.

Before you begin: ensure that you have the necessary plugins installed and activated on your WordPress site.

**Add Languages in WPML:**

- [Fluent Forms](https://fluentforms.com/)
- [WPML Core Plugin](https://wpml.org/) (requires a paid license)
- [WPML String Translation Add-on](https://wpml.org/version/string-translation-3-2-3/)(requires a paid license)
- [Fluent Forms Connector for WPML](https://wordpress.org/plugins/multilingual-forms-fluent-forms-wpml/)

Once everything is ready, you’re just a few clicks away from creating a seamless multilingual form experience.

## Add Languages in WPML

First, go to **WPML > Languages** from the WordPress sidebar. Under the **Site Language Settings**, click on **Add/Remove Languages** and choose the language(s) you want to use for translating your form.

![](https://fluentforms.com/wp-content/uploads/2025/07/01-2.webp)

Here, you’ll see a list of available languages. Simply select the language(s) you want to use for your form. You can choose multiple languages if needed. Once done, click the **Save** button to apply the changes.

![](https://fluentforms.com/wp-content/uploads/2025/07/02.webp)

Next, you’ll see the **Language URL format** settings. From here, choose the **Different languages in directories** option and click **Save** to apply the changes.

![](https://fluentforms.com/wp-content/uploads/2025/07/03.webp)

### Enable Translation for Your Form

To enable translation for a specific form, first go to **Forms** from the Fluent Forms navbar. Then, open the **Settings** of the form you want to translate.

![](https://fluentforms.com/wp-content/uploads/2025/07/04.webp)

When you’re in the form’s settings, click on **WPML Translations** from the left sidebar. Then, toggle on the **Enable Translation for this Form** option and hit the **Save Settings** button.

You’ll also see a **Reset WPML Translation** button here. Clicking it will remove all existing translations for this form.

![](https://fluentforms.com/wp-content/uploads/2025/07/05.webp)

### Send Your Form for Translation

Start translating your form into another language, go to **WPML > Translation Management** from the WordPress sidebar. Here, you’ll see a list of translatable pages, posts, and other content.

To focus only on Fluent Forms, you can use the filter at the top menu and choose **Fluent Forms**. This will display only the forms that are available for translation.

Next, select the form you want to translate. Then, under the Translation Options, choose **Translate Myself** and click the **Add to Translation Queue** button.

![](https://fluentforms.com/wp-content/uploads/2025/07/06.webp)

### Translate the Form Fields

To access the Translation Queue, navigate to **WPML > Translations** from the WordPress sidebar. Here, you’ll find the form you previously added to the queue. Click the **Translate** button next to the form to begin translating it.

![](https://fluentforms.com/wp-content/uploads/2025/07/07.webp)

Now, on the left side, you’ll see all the fields of your form. On the right side, enter the translation for each field. Make sure to save each field individually after translating it by clicking on the **Save and Complete** button in the pop-up.

Once all fields are translated, the progress bar will reach 100%. Now, click the **Complete Translation** button to finish the translation.

![](https://fluentforms.com/wp-content/uploads/2025/07/08.webp)

### Translate the Page Where the Form is Embedded

After translating the form fields, you’ll need to translate the page where your Fluent Forms form is embedded. To do this, go to **Pages** in your WordPress Dashboard and find the page containing the embedded form.

Next, click the **Plus (+)** icon button to start translating that page.

![](https://fluentforms.com/wp-content/uploads/2025/07/09.webp)

Now, you’ll see an option to translate the page name. (You might also see other fields here, depending on your page content.)

Translate the page just like you did with the form. Enter your translation in the field on the right, then click **Save and Complete**.

If you’ve finished translating the page, click the **Complete Translation** button to finalize.

![](https://fluentforms.com/wp-content/uploads/2025/07/10.webp)

Great! Your translation is complete. Now you can preview it on the frontend to see how it looks.

### See the Translated Form in Action

Go to the page where your form is embedded. At the bottom of the page, you’ll see two buttons that WPML adds for language selection. Simply click on the language button you prefer to switch languages.

![](https://fluentforms.com/wp-content/uploads/2025/07/11.webp)

After that, you’ll see that your form has been translated into the language you provided in the form.

![](https://fluentforms.com/wp-content/uploads/2025/07/12.webp)

### Troubleshooting & Important Notes

#### 1. Translation Toggle Not Visible in Form Settings?

Make sure the **Fluent Forms Connector for WPML** plugin is installed and activated.

#### 2. Translated Form Not Showing on Frontend?

Double-check that both:

- The form fields are 100% translated.
- The **page containing the form** is also translated and marked as “Complete.”

#### 3. Some Fields Not Showing in Translation Editor?

Resave your form and ensure it’s enabled for WPML translation under **Form Settings > WPML Translations**.

#### 4. Resetting Translations?

Use the **Reset WPML Translation** option inside the Form Settings carefully. It will remove all existing translations for that form.

If you have any more questions about translating Fluent Forms with WPML, feel free to reach out to [us](https://wpmanageninja.com/support-tickets). Thank you!

---

## Edit History Feature in Fluent Forms

**Source:** [https://fluentforms.com/docs/edit-history-feature-in-fluent-forms/](https://fluentforms.com/docs/edit-history-feature-in-fluent-forms/)

Fluent Forms **Edit History** feature allows you to view the complete history of your form edits and track all the changes made. Additionally, this feature allows you to easily restore previous versions of your form.

In this article, we’ll show you how to use the **Edit History** feature effectively.

## Access the History Feature

To get the Edit History feature, navigate to the **Forms** section in the Fluent Forms dashboard, then click on the **Edit** option for the form you wish to modify.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/Form-edit-section-scaled.webp)

In the form editor, you’ll notice a **History** button see screenshot below. Simply click on it.

![](https://fluentforms.com/wp-content/uploads/2025/01/History-section-1-scaled.webp)

Here, you’ll find a list of all your previous form changes. To view or restore any specific change, just hover over the activity and click the **Restore** button.

If you’d like to clear your form’s edit history, simply click the **Delete**icon button in the top-right corner of the History section. Click on the **Save Form** button to save all your changes.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf04tK6nmObch0ZYyn2mqe6X5Evy6G-P2HI2bnf_tHJ7zGPk-DUqrljE96pzs2cUzwpe57zdaZ-mzVZT99Hf589JXq0a5rvTRxwA4tOi9eQ52ysQ6CgmR9LNo6A1gHFfUtBjzoJ?key=K1DV0biumj09ITO1pdxROhpw)

Enjoy the Forms History feature. If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Numeric Calculation in Fluent Forms

**Source:** [https://fluentforms.com/docs/numeric-calculation-in-fluent-forms/](https://fluentforms.com/docs/numeric-calculation-in-fluent-forms/)

Fluent Forms provides **built-in calculation features** for numeric fields, allowing you to perform real-time mathematical operations within your forms.

This guide will walk you through adding and customizing the **Numeric Calculations** in Fluent Forms for your WordPress site.

## Adding Numeric Fields

To learn how to add the **Numeric**field to Fluent Forms, follow the steps below:

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Form,**and click the **Edit** icon to open the **Editor** page of that form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

If you want to learn more about the **Numeric Input Field**, read this[article](https://fluentforms.com/docs/numeric-input-field-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/02/editor-form-scaled.webp)

Now add **two numeric fields** ( “Number One” and “Number Two”). Then, add a **third numeric field** to display the calculation result (“Result”).

![](https://fluentforms.com/wp-content/uploads/2025/02/three-numeric-field-02-scaled.webp)

## Enable Calculation Expression

Now hover over the **Result** field (where you want to show the result) and click the **Edit (pencil) Icon**. In the right sidebar, go to **Advanced Options**.

Now, click on the **Enable Calculation option** from the **Advanced Option** to activate the calculation box.

![](https://fluentforms.com/wp-content/uploads/2025/02/Enable-calculations-expression-03-scaled.webp)

## Define the Calculation

Now, click on the **Document Icon**, and it will show all the available input fields.

Select the numeric fields to be used in the calculation ( Number One, Number Two).

Now add a mathematical operator between them ( +, -, *, /).

- Example: Number One + Number Two

> Avoid spaces between fields and operators. For a better understanding, see the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/02/Document-icon-04-scaled.webp)

## Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**.

![](https://fluentforms.com/wp-content/uploads/2025/02/save-form-05-3-scaled.webp)

### Preview of Added Numeric Calculation

Here is a preview of the form with the Numeric calculation.

![](https://fluentforms.com/wp-content/uploads/2025/02/preview-of-numeric-calculation-06.webp)

### Conversational Forms Support

Fluent Forms also supports calculations in **Conversational Forms**, enabling dynamic responses based on user input.

**Example**

If you have an order form where a user selects the number of items, you can calculate the total price dynamically:
Quantity * Price Per Item = Total Price

**Supported Symbols**

| Symbol | Explanation |
| --- | --- |
| + | Addition Operator eg. 2+3 results 5 |
| – | Subtraction Operator eg. 2-3 results -1 |
| / | Division operator eg 3/2 results in 1.5 |
| * | Multiplication Operator eg. 2*3 results 6 |
| Mod | Modulus Operator eg. 3 Mod 2 results 1 |
| ( | Opening Parenthesis |
| ) | Closing Parenthesis |
| Sigma | Summation eg. Sigma(1,100,n) results 5050 |
| Pi | Product eg. Pi(1,10,n) results 3628800 |
| n | Variable for Summation or Product |
| pi | Math constant pi returns 3.14 |
| e | Math constant e returns 2.71 |
| C | Combination operator eg. 4C2 returns 6 |
| P | Permutation operator eg. 4P2 returns 12 |
| ! | factorial operator eg. 4! returns 24 |
| log | logarithmic function with base 10 eg. log 1000 returns 3 |
| ln | natural log function with base e eg. ln 2 returns .3010 |
| pow | power function with two operator pow(2,3) returns 8 |
| ^ | power operator eg. 2^3 returns 8 |
| root | underroot function root 4 returns 2 |
| sin | Sine function |
| cos | Cosine function |
| tan | Tangent function |
| asin | Inverse Sine function |
| acos | Inverse Cosine funtion |
| atan | Inverse Tangent funtion |
| sinh | Hyperbolic Sine function |
| cosh | Hyperbolic Cosine function |
| tanh | Hyperbolic Tangent function |
| asinh | Inverse Hyperbolic Sine function |
| acosh | Inverse Hyperbolic Cosine function |
| atanh | Inverse Hyperbolic Tangent function |
| round | Make a number a decimal/integer.Use case: round(3.235723663, 2) = 3.24and round(3.235723663, 0) = 3 |
| ceil | Use case: ceil(3.235723663) = 4 |
| floor | Use case: floor(3.235723663) = 3 |
| max | Use case: max(10, 15) = 15 |
| min | Use case: min(10, 15) = 10 |

So, this is the easy process of adding Numeric Calculation of your form.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Create a WordPress User Registration Form With Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/](https://fluentforms.com/docs/how-to-create-a-wordpress-user-registration-form-with-fluent-forms/)

Create a user-friendly registration form with Fluent Forms to make the WordPress user registration process as simple as possible. This will allow people to enter their information into a beautiful form and create user accounts in WordPress through this form.

This article will guide you through creating a **User Registration Form** with **Fluent Forms** on your WordPress site step by step.

> Remember, for testing the user registration fucntionality, you need to submit the form in logged-out or incognito mode.

## Enable the User Registration Module

To learn how to enable the WordPress user registration form, follow the easy steps with the screenshots below-

First, go to **Integrations** from the **Fluent Forms Navbar**, search for **User Registration**through the search bar, and get the**User Registration or Update**module. Now, Enable the **User Registration or Update** module.

![](https://fluentforms.com/wp-content/uploads/2025/01/User-Registration-01-scaled.webp)

## Create a Registration Form

Once you enable the user registration form, now create a registration form.  Go to the **Fluent Forms Dashboard** and **Create a new form**.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Now, we recommend to add the following fields to the form:

**Email**: Required for user registration.
**Name**: Optional but recommended.
**Password**: Required for account creation.

You can add additional fields as needed, but these three fields are essential.

![](https://fluentforms.com/wp-content/uploads/2025/01/registration-form-02-scaled.webp)

## Add the User Registration Feed

Once created, a registration form is configured for the user registration form. Click the forms **Settings & Integration** section. Then click the **Configure Integrations**section from the left side menu.

Now, hover over the **Add New Integration** button and select the **User Registration or Update** **Integration** option shown in the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/01/Configure-the-user-registration-03-scaled.webp)

### Configure the User Registration Feed

A new Window page will appear. Now, customize the User Registration feed according to your needs by setting up the **Name**, **Password**, **Email Address**fields, etc.

**A. Name:**Enter the name that specifies the name of the registration feed.

**B. Service**: Select the type of service that feeds **User Registration** or **User Update.**

**C. Map Fields:** ****Use all the fields under this option to properly link your **user registration field or user update**with the **Form Fields**. You can easily select the **value**for the **Form Fields** based on the**user registration or user update** using the **Shortcode Arrow**.

**D. Default User Role:**Select the user role assigned upon registration.

**E. User Meta**: Use the **User Meta** section to add custom user meta fields. In the first column, type the **meta key**. In the second column, select the corresponding **form field value**. You can add multiple meta keys by clicking the **Plus Icon.**

> Remember, User Meta Key is the form field’s name attribute!

**F. Auto Login:** If you want to allow the user to log in automatically after submitting the form, enable the option “**Allow the user to log in automatically after registration**.”

**G. Email Notification:**If you want to send the default WordPress welcome email after registration, then enable the **Send default WordPress welcome email to user after registration** options.

**H. Form Validation:** Enabling this option prevents duplicate registrations by checking if the user already exists in the database.

**I. Conditional Logics**: This option allows Mailjet integration to function conditionally based on your submission values according to your set conditional logic/s. To learn more, read this [Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

**J. Status:**Enable this feed option to activate the integration.

Once the setup is done, finally, click the **Save Feed** button.

Your **User Registration**form or **Update** will be integrated into this specific form!
The users can register and Update in a single form.

![](https://fluentforms.com/wp-content/uploads/2025/02/Add-New-User-Registration-Integration-Feed-Fluent-Forms-02-26-2025_05_17_PM-scaled.webp)

After successful Integration, you will see that your **User Registration** or **Update Feed**has been added here.

You can modify your feed anytime by clicking the **Settings Icon**and **Delete**it by clicking the **Trash Icon**. 
Also, you can **disable** or **enable** this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/01/user-registration-enabled-07-scaled.webp)

## Preview the User Registration Form

Here, you can see the preview of the added contacts for the **User Registration**form through the form entries I set up during the integration.

You can see form submissions from the **Entries** section of this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/01/demo-08-scaled.webp)

Following this guide, you can easily enable user registrations and updates while customizing the form to fit your specific requirements.

If you have any further questions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## How to add Calc Values on the Repeat Field

**Source:** [https://fluentforms.com/docs/how-to-add-calc-values-on-the-repeat-field/](https://fluentforms.com/docs/how-to-add-calc-values-on-the-repeat-field/)

Fluent Form offers a feature that allows you to add calculations to Repeat Fields, making it easy to perform math automatically inside forms.

This article will provide a step-by-step guide on how you can add calc values to the repeat field with fluent Form.

## Add Calculations in Repeat Fields

To add calculations in repeat fields, go to the **Fluent Forms dashboard**. Create a new form or open an existing one.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Now, drag and drop the **Repeat Field** into your form. Add the fields you want inside the**Repeat** **Field** (numeric fields, dropdowns, etc.).

![](https://fluentforms.com/wp-content/uploads/2025/01/calc-repeat-field-01-scaled.webp)

## Enable Calculations for Fields

Click the **Edit Icon** on a field inside the **Repeat Field**. Now scroll down and toggle to **Enable Calculation** options under the **Calculation Field Settings**. Then enter the **Calculation Expression** to define how it works.

- For the 2nd column (Select Field), use {repeat.repeater_field.2}.
- For the 3rd column (Numeric Field), use {repeat.repeater_field.3}.

You can add as many columns as needed and update their calculation expressions accordingly.

![](https://fluentforms.com/wp-content/uploads/2025/01/calculation-field-settings-02-scaled.webp)

Also you can add **Calculation Values** for each column based on your requirements. Enable the **Calc Values** options and enter the value you want to.

![](https://fluentforms.com/wp-content/uploads/2025/01/calc-value-03.webp)

After that, you can add the Calculate the Total Number of Repeat Fields. Add a new numeric field to calculate the total number of repeat rows. Use {repeat.repeater_field} as the **Calculation Expression** for this total.

If you want to know more about **Repeat Field**then read this [article](https://fluentforms.com/docs/repeat-input-field-in-fluent-forms/).

After that, click the **Save Form** button. Preview and test it by filling it out.

![](https://fluentforms.com/wp-content/uploads/2025/01/Preview-calc-value-form-04-scaled.webp)

Now you can use Calc Values with Repeat Fields in Fluent Forms!

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Using JetEngine Custom Fields with Fluent Forms

**Source:** [https://fluentforms.com/docs/using-jetengine-custom-fields-with-fluent-forms/](https://fluentforms.com/docs/using-jetengine-custom-fields-with-fluent-forms/)

Fluent Forms integrates with JetEngine, allowing you to create and map custom fields for your Post Forms. This article will guide you through setting up Custom Fields using JetEngine within Fluent Forms Post Forms.

To create a custom field in your WordPress Post Form, install the[JetEngine Premium](https://crocoblock.com/plugins/jetengine/) plugin on your website.

## Enable the Post/CPT Creation Module

To learn how to enable the Post/CPT Creation Module, follow the steps with the screenshots below.

First, navigate to **Fluent Forms Pro** from your WordPress dashboard. Click on the **Integration** button from top menu. Then, Search for or scroll to **Post/CPT Creation** from the right side and **Enable** the module.

![](https://fluentforms.com/wp-content/uploads/2025/03/PostCPT-creation-01-scaled.webp)

## Create a Custom Meta Box

From the WordPress sidebar, navigate to the **JetEngine** plugin and select **Meta** **Boxes**. It will bring up the **Meta Boxes List** page, where you can create a new Custom **Meta Box** for your Post Form.

Now, click the **Add New** button to add a custom meta box for the **Post**.

![](https://fluentforms.com/wp-content/uploads/2025/03/Add-Meyta-boxes-02-scaled.webp)

## Configure Meta Box Settings

The Meta Box field settings will appear now. Start by configuring the **General Settings**, where you can set the **Meta Box Title**and **Meta Box Type**.

Then, under **Visibility Conditions**, go to **Enable for Post Types** and select **Post** to apply the custom fields to your posts.

![](https://fluentforms.com/wp-content/uploads/2025/03/Meta-box-settings-03-1-scaled.webp)

## Create Custom Meta Fields

Next, you’ll see the **Meta Field** settings section. Here, you can create multiple custom meta fields for your post.

In the Custom **Meta Field**settings, enter the **Label** **Name**. The **Name ID** will be automatically generated based on the **Label** name. Then, choose the **Field Type** from the dropdown menu, which can be **Text**, **Number, Date,**or any other type depending on your needs.

Once done, click the **Update Meta Box** button to create your custom meta box field.

![](https://fluentforms.com/wp-content/uploads/2025/03/meta-field-04-1024x793.webp)

## Create a Post Form

To add this Meta Field to your Fluent Forms Post Form, follow these steps:

First, navigate to **Forms** from the Fluent Forms Navbar, then click the **Add New Form** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/add-new-form-05-scaled.webp)

A popup will arrive. Now select **Create a Post Form** from here.

![](https://fluentforms.com/wp-content/uploads/2025/03/create-a-post-form-06.webp)

A new popup will also appear here. Now select **Post Types** from the dropdown options. After that, click the **Continue**button to proceed to the next step.

![](https://fluentforms.com/wp-content/uploads/2025/03/post-type-07.webp)

In the **Form Editor**, edit your Post form as you desire and click the **Settings & Integration** tab.

![](https://fluentforms.com/wp-content/uploads/2025/03/setting-integration-form-08-scaled.webp)

Now, From the left sidebar of Settings & Integration select the **Post Feed** and then click on the **Add Post Feed**button.

![](https://fluentforms.com/wp-content/uploads/2025/03/add-post-feed-09-scaled.webp)

## Set Up the Meta Mapping

You’ll now see the **Create New Feed** page, where you can manage and map your custom meta field feed.

Start by giving your **Feed Name**. Below that, you’ll find additional settings for your Feed.

In the **JetEngine Meta Mapping** section, map your JetEngine fields to the corresponding Fluent Forms fields. A **three-dot** button is available here to insert shortcodes to map your Fluent Forms fields.

For example, if you want to populate the ‘**Job Title**’ custom field with data from the ‘**Post Title**’ form field, select the ‘**input.post.title**’ shortcode in the Form Field Value.

If you need to add more field then click the **Add Another General Field**button. Now click the **Save Feed**button to save your settings and submit a test post form.

![](https://fluentforms.com/wp-content/uploads/2025/03/create-new-feed-10-scaled.webp)

After submitting the post form you will see a custom meta field in your post like this.

![](https://fluentforms.com/wp-content/uploads/2025/03/jetengine-post-11-1024x511.webp)

Congrats! You have successfully created and mapped **JetEngine Custom Fields** with **Fluent Forms Post Forms.**

If you need further assistance, feel free to contact our [support](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/) team.

---

## Global Inventory Manager in Fluent Forms

**Source:** [https://fluentforms.com/docs/global-inventory-manager-in-fluent-forms/](https://fluentforms.com/docs/global-inventory-manager-in-fluent-forms/)

The Fluent Forms Global Inventory Manager feature allows you to track and manage multiple forms efficiently.

Suppose you’re selling a **limited number of Bus tickets**. You can manage the inventory across different forms for stock accuracy. Once tickets sell out, a message can be displayed to users.

> Before using the Global Inventory Manager, you must activate the Inventory Module in Fluent Forms.

### Enabling the Inventory Module

To learn how to enable the Inventory Module, follow the steps with the screenshots below.

First, go to **Integrations** from the Fluent Forms Navbar, search for **Inventory Module**through the search bar, and get the **inventory module**.

Now, turn on the **Toggle** to enable the **Inventory**module.

![](https://fluentforms.com/wp-content/uploads/2025/03/enable-inventory-module-01-scaled.webp)

## Accessing the Inventory Manager

To access the inventory manager, navigate to the **Fluent Forms Global Settings** section. Then, select **Inventory Manager** from left sidebar. Now, click the **Add Inventory** button to add items.

![](https://fluentforms.com/wp-content/uploads/2025/03/access-inventory-manager-02-scaled.webp)

## Adding an Inventory Item

After clicking the **Add Inventory** button, a pop-up will appear. Now, enter the **Inventory Name**and set the **Total Quantity** that shows the available quantity in your inventory. Next, click the **Save** button to store the item in the **Inventory Manager**.

![](https://fluentforms.com/wp-content/uploads/2025/03/10-scaled.webp)

## Adding a Global Inventory Item to a Form

Now, to add a global inventory item to a form, first, open the specific form where you want to use the **Global Inventory Item**.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Add a field that supports inventory tracking, such as:

- Payment Item
- Checkbox
- Radio Field
- Dropdown Field

In this example, we use the [Checkbox Field.](https://fluentforms.com/docs/checkbox-field-in-fluent-forms/)

Within the **Checkbox** field options, add Items to connect with your **Global Inventory Items**.

![](https://fluentforms.com/wp-content/uploads/2025/03/03-2-scaled.webp)

## Configuring Inventory Settings

Now, configure the inventory settings. Navigate to the **Advanced Options** of the selected field. Then, go to **Inventory Settings** and enable the **Global Checkbox** to integrate Global Inventory items.

Select the appropriate **inventory item** from the **Global Inventory drop-down**. Next, customize the **Stock-Out Message** and other settings based on your requirements.

If you want to learn a detailed guide of global inventory setting, then read this [article](https://fluentforms.com/docs/fluent-forms-inventory-module/).

![](https://fluentforms.com/wp-content/uploads/2025/03/glob-al-inventory-settings-04-scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

To integrate and display the form on a specific page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**.

![](https://fluentforms.com/wp-content/uploads/2025/03/save-form-05-1-scaled.webp)

## Viewing Inventory Details

To monitor your inventory, go to **Global Settings Inventory Manager** section. Click on the **left-side Arrow icon** to reveal detailed inventory reports.

The report will display **remaining stock levels** and the forms through which items were sold. If needed, you can **reset the inventory** from this section.

![](https://fluentforms.com/wp-content/uploads/2025/03/view-inventory-item-06-scaled.webp)

In this process, you can easily manage your inventory across multiple forms using the **Global Inventory Manager** in Fluent Forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Admin Approval Feature in Fluent Forms

**Source:** [https://fluentforms.com/docs/admin-approval-feature-in-fluent-forms/](https://fluentforms.com/docs/admin-approval-feature-in-fluent-forms/)

The **Fluent Forms Admin Approval feature** allows administrators to review, approve, or decline form submissions before processing them. When a user submits a form, an **email notification** is sent to the admin, who can approve or decline the entry.

This article will guide you through the admin approval feature in Fluent Forms.

## Enabling the Admin Approval Module

To learn how to enable the Admin Approval Module, follow the steps with the screenshots below.

First, go to **Integrations** from the Fluent Forms Navbar, search for **Admin Approval Module**through the search bar, and get the **Admin module**.

Now, **Enabled** it to activate the approval functionality.

![](https://fluentforms.com/wp-content/uploads/2025/04/admin-approval-01.webp)

## Configuring Global Settings

To configure Global Settings, click the **Global Settings** from the top menu. Then click the **Admin approval**section from the left sidebar. Here you can handle approval notifications. Now choose the following options are given screenshot below-

**A. Send Email Notification:**Choose between Site Admin or Custom Email for sending email notification options.

- **Site Admin:** If you select the site admin option, it sends submission confirmation emails to the site’s Admin Email for approval.
- **Custom Email:** If you choose the custom email option, you can specify an alternative email address for approval notifications.

**Enter Recipient Email Address:**When you choose the **Custom Email**, you will enter multiple email addresses separated by commas.

**B. Email Subject:**Enter the subject of your email here.

**C. Email Body:** Customize the email content, including the option to send emails in **Raw HTML format**.

**D. Send Email as RAW HTML Format:** If you check this Send Email as RAW HTML Format option, emails will be sent in HTML Raw format.

**E. Auto-Decline Option:** Check the **Automatically delete Unapproved & Declined entries if not confirmed on certain days** option to set a time limit (in days) after which unapproved submissions are automatically declined.

![](https://fluentforms.com/wp-content/uploads/2025/04/02.webp)

## Setting Up Admin Approval for Specific Forms

To enable Admin Approval for a particular form, follow these steps-

First, navigate to the **Settings & Integration** section for your form. Go to the **Settings**section****and click the**Admin Approval** section.

Now, **enable** **Admin Approval before checking the Form Data Processing**option for that form. Customize the **Approval Pending Message** (shortcodes can be used for dynamic content).

![](https://fluentforms.com/wp-content/uploads/2025/04/03.webp)

### Declined Submission Notification

If a submission is declined, an **email notification** can be sent to the user. To enable this, follow the instructions-

Ensure your form includes an **Email ID field**. You will choose the email option from the drop-down options. Now, configure the **Declined Submission Notification** settings.

Customize the **email subject**and**body** (it supports Raw HTML format). Check the checkbox options to **Send an Email** in RAW HTML Format.

## Disabling Admin Approval for Logged-In Users

To automatically approve submissions from logged-in users, check the **Disable Admin Approval for Logged-in Users**checkbox. It allows users with authenticated accounts to bypass the approval process.

After that, click the **Save Settings** button to save the settings.

![](https://fluentforms.com/wp-content/uploads/2025/04/04.webp)

### Preview the Admin Approval Email

Admins will receive an email with options to **approve**or**decline** form submissions. The email format will resemble the example shown in the preview.

![](https://fluentforms.com/wp-content/uploads/2025/04/05.webp)

> If your form includes a Payment Field, the Admin Approval process will be bypassed.

So, you can easily manage and control form submissions using the **Fluent Forms Admin Approval** feature.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Creating a Personality Quiz Form in Fluent Forms

**Source:** [https://fluentforms.com/docs/creating-a-personality-quiz-form-in-fluent-forms/](https://fluentforms.com/docs/creating-a-personality-quiz-form-in-fluent-forms/)

Creating a personality quiz with Fluent Forms is simple and intuitive. The Quiz Module allows you to provide text-based answers and categorize users based on their responses.

This article will guide you in creating a successful Personality Quiz Form with fluent forms.

## Enabling the Quiz Module

To learn how to enable the Quiz Module, follow the steps with the screenshots below.

First, go to **Integrations** from the Fluent Forms Navbar, search for **Quiz Module**through the search bar, and get the **Quiz Module**.

Now, turn on the **Toggle** to enable the **Quiz**module.

![](https://fluentforms.com/wp-content/uploads/2025/03/enable-quiz-module-01-scaled.webp)

## Create Your Quiz Questions

**Now,** use the **Radio Field** to craft your quiz questions. For each question, provide multiple answer options. Then, customize each question and its options by clicking on **Input Customization**.

![](https://fluentforms.com/wp-content/uploads/2025/03/question-02-scaled.webp)

### Add a Quiz Score Field

Add the **Quiz Score****Field** from the **Advanced Fields** section to enable result calculation.

![](https://fluentforms.com/wp-content/uploads/2025/03/quiz-score-field-03-scaled.webp)

## Configure Personality Quiz Settings

Once the quiz score field is added, open the **input customization** of the quiz score field. Now, set the **Score Type** to **Personality Quiz**.

![](https://fluentforms.com/wp-content/uploads/2025/03/unnamed-1.webp)

### Define Personality Types and Answer Values

Once the Personality Quiz mode is activated:

- On the **left side**, add your **Personality Types**, and you’ll define the results associated with each type.
- On the **right side**, assign each answer option a value that aligns with a personality type.

This mapping helps Fluent Forms calculate which personality type best fits the user based on their selections.

![](https://fluentforms.com/wp-content/uploads/2025/03/personality-quiz-type-04-scaled.webp)

### Configure Quiz Settings

Now, configure the **Quiz Settings.**Go to your form’s **Settings and Integration** tab. Then, click **Quiz Settings** to access quiz options. After that, enable the quiz by checking the **Enable Quiz** **Module** checkbox.

Using the **Radio Field**, ensure all your questions are included and correctly configured. Then, click **Save Settings** button to confirm your configuration.

![](https://fluentforms.com/wp-content/uploads/2025/03/quiz-setting-enable-05-scaled.webp)

### Preview of the Personality Quiz Form

Once your quiz is set up, **Publish** the form on a page or post. Then, your users will see a series of questions. After form submission, the personality results will be displayed based on their answers.

![](https://fluentforms.com/wp-content/uploads/2025/03/preview-06.webp)

Your personality quiz is now ready to go! If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Inventory Module

**Source:** [https://fluentforms.com/docs/fluent-forms-inventory-module/](https://fluentforms.com/docs/fluent-forms-inventory-module/)

The **Inventory Module** in Fluent Forms allows you to manage your order forms and predefined item numbers. This powerful feature is ideal for event booking, reservations, product sales, or ticketing, and also it helps to keep track of inventory.

This article will guide you in creating a successful Inventory Module with fluent forms.

> The Fluent Form Inventory Module is only available for the Fluent Form Pro version.

## Enabling the Inventory Module

To learn how to enable the Inventory Module, follow the steps with the screenshots below.

First, go to **Integrations** from the Fluent Forms Navbar, search for **Inventory Module**through the search bar, and get the **inventory module**.

Now, turn on the **Toggle** to enable the **Inventory**module.

![](https://fluentforms.com/wp-content/uploads/2025/03/enable-module-01-scaled.webp)

## Setting Up Inventory in a Form

Once the module is enabled, you can create a new form or edit an existing one to add inventory-related fields such as:

- Payment items
- Radio buttons
- Dropdowns
- Multi-select options
- Checkboxes

You can use a [Checkbox Field](https://fluentforms.com/docs/checkbox-field-in-fluent-forms/) to demonstrate Inventory Management.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/03/inventory-02-scaled.webp)

## Configuring Inventory Settings

**Inventory Settings** will appear in the **Advanced Options** field when the **Inventory Module** is active. By default, these settings are **Disabled**. You will also see **Simple** and **Global** options. You can choose any of them.

![](https://fluentforms.com/wp-content/uploads/2025/03/Inventory-Settings-03-scaled.webp)

### Simple Inventory Settings

The Inventory Settings will be visible in the **Advanced Options** field when selecting the **Simple** option. More options will appear in the dropdown.

**A. Stock Quantity:** You may easily customize the inventory quantity of your item via this option.

**B. Stock-Out Message:**Set up your Stock-Out Message according to your needs.

**C. Hide Choice When Stock is Out:** When you enable this option, you can hide the item when it is out of stock.

**D. Hide Input When Stock is Out:** The items in your input field will be removed if this option is checked on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:**This option is turned off by default. When it is enabled, items from the available Stock will be shown.

**G. Inventory Label:** Set up your inventory label using this**{remaining_quantity}**shortcode. This shortcode will show how many of the items are still available.

![](https://fluentforms.com/wp-content/uploads/2025/03/Simple-Inventory-Settings-04-scaled.webp)

### Global Inventory Settings

When you select the Global option, the Inventory Settings will be visible in the field’s Advanced Options. A drop-down with more options will appear.

**A. Global Inventory:** You can select your item Global Inventory from the dropdown options.

**B. Stock-Out Message:**Set up your Stock-Out Message according to your needs.

**C.** **Hide Choice When Stock is Out:** When you enable this option, you can hide the item when it is out of stock.

**D. Hide Input When Stock is Out:** The items in your input field will be removed if this option is turned on.

**E. Disable Input When Stock is Out:** Shows the item but **grays it out/disabled** when stock hits zero.

**F. Show Available Stock:**This option is turned off by default. When it is enabled, items from the available Stock will be shown.

**G. Inventory Label:** Set up your inventory label using this **{remaining_quantity}** shortcode. This shortcode will show how many of the items are still available.

![](https://fluentforms.com/wp-content/uploads/2025/03/unnamed.webp)

### View Inventory Item

To view the inventory items, click the **Entries** option at the top bar of the form. Here, you will see the inventory items in **Stock**and their **Total** **Numbers**.

![](https://fluentforms.com/wp-content/uploads/2025/03/view-inventory--scaled.webp)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

To integrate and display the form on a specific page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or Post**.

![](https://fluentforms.com/wp-content/uploads/2025/03/save-form-05-scaled.webp)

## Preview of the Inventory Module Form

Consider a form with Story Book, Kids Story Book, and Fantasy Story Book as Checkbox options, each having inventory quantities of 15, 13, and 21, respectively.

Consider a form with Story Book, Kids Story Book, and Fantasy Story Book as Checkbox options, each having inventory quantities of 15, 13, and 21, respectively.

- A user selects **Story Book**and**Kids Story Book**.
- After **a form is submitted**, the number of storybooks available is reduced to 14. The kid’s Storybook is stocked out.
- If **Hide Choice When Stock is Out** is enabled, Orange will no longer appear in the form.

![](https://fluentforms.com/wp-content/uploads/2025/03/preview.webp)

With these settings, you can easily track orders and manage inventory in real time! Start using Fluent Forms Inventory Management today to streamline your order process.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Create a WordPress User Update Form With Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-create-a-wordpress-user-update-form-with-fluent-forms/](https://fluentforms.com/docs/how-to-create-a-wordpress-user-update-form-with-fluent-forms/)

The user profile editing option for any form is a fantastic feature of **Fluent Forms**. You can make the WordPress **User Update** process super easy by creating a user update form using **Fluent Forms**.

This article will guide you through how users can update forms with Fluent Forms on your WordPress site step by step.

> Users must be logged in for the update process to function.

## Enable the User Update Module

To learn how to enable the WordPress user update form, follow the easy steps with the screenshots below.

First, go to **Integrations** from the Fluent Forms **Navbar**, search for **User Update**through the search bar, and get the**User Registration or Update**module.

Now, enable the **User Registration**or**Update** module.

![](https://fluentforms.com/wp-content/uploads/2025/03/unnamed-1-1.webp)

## Configure the User Update Feed

Before configuring the user update feed, you must move a particular form or create a new form for your user update.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Once the module is enabled, proceed with the form settings. Click the forms **Settings & Integration** tab. Then click the **Configure Integrations**section from the scroll down.

Now, click the **Add New Integration** button and select the **User Registration**or**Update** **Integration** option shown in the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.webp)

## Customize the User Update Feed

A new Window page will appear. Now, customize the **User Update** feed according to your name feed and select the **User Update** fields from the available options.

**A. Name:**Enter the name that specifies the name of the user update feed.

**B. Service:**Select the type of service that feeds **User Update.**

**C. Map Fields:** ****Use all the fields under this option to properly link your **user update field**with the **Form Fields**. You can easily select the **value**for the **Form Fields** based on the**user update** using the **Shortcode Arrow**.

**D. User Meta**: Add custom user meta fields in the **User Meta** section. In the first column, type the **meta key**. In the second column, select the corresponding **form field value**.

You can add multiple meta keys by clicking the **Plus Icon.**

> User Meta Key is the form field’s name attribute!

**E. Conditional Logic:** This option allows you to create specific rules to dynamically hide/show the input field to function conditionally based on your submission values according to your conditional logic set. To learn more, read this[Documentation](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

**F. Status:**Enable this feed option to activate the integration.

Once the setup is done, finally, click the **Save Feed** button.

Your User Registration form or Update will be integrated into this specific form!

> Users can register in a single form. Users can register using a single form. Read the article to learn more about User registration.

![](https://fluentforms.com/wp-content/uploads/2025/03/add-new-user-update-03-scaled.webp)

After successful Integration, you will see that your User Registration or Update Feed has been added here.

You can modify your feed anytime by clicking the **Settings Icon**and **Delete**it by clicking the **Trash Icon**. 
Also, you can disable or enable this feed anytime by turning off the **Toggle** if needed.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.webp)

## Preview the User Registration Form

Here, you can see the preview of the added contacts for the **User Registration**form through the form entries I set up during the integration.

You can see form submissions from the **Entries** section of this particular form.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.webp)

Following this guide, you can easily enable user registrations and updates while customizing the form to fit your specific requirements.

If you have any further questions, please contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Resizeable Container in Fluent Forms

**Source:** [https://fluentforms.com/docs/resizeable-container-in-fluent-forms/](https://fluentforms.com/docs/resizeable-container-in-fluent-forms/)

Fluent Forms gives users complete control over configuring **Column Width**. Previously, you had to use the Global Styler or CSS to adjust column widths. With the **drag-and-drop** feature, you can resize columns easily without extra coding.

This article will guide you in adding resizeable containers in fluent forms.

## Add a Container Field

First, open **Fluent Forms** and **drag and drop** to add a container field, or click the **Plus Icon**to add the **Container** field to your form. Add the necessary fields inside the container ( **Name**, **Email**, **Radio** **Button**, **Custom** **Submit Button** **etc**.).

![](https://fluentforms.com/wp-content/uploads/2025/03/resizable-container-01-scaled.webp)

Now, click and **drag** the column borders **left**or**right** to adjust the width. If needed, use the **Undo** option to revert any changes.

Once satisfied with your column layout, **save** your **settings**.

The container will adjust to maintain proper **spacing** based on the selected column width.

![](https://fluentforms.com/wp-content/uploads/2025/03/gif.gif)

## Embed the Form into Frontend

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.webp)

### Preview of the Resizable Container

Preview your form to see how the container adapts to the new column width.

![](https://fluentforms.com/wp-content/uploads/2025/03/unnamed-2.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to use Meta Box Custom Fields with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-use-meta-box-custom-fields-with-fluent-forms/](https://fluentforms.com/docs/how-to-use-meta-box-custom-fields-with-fluent-forms/)

Fluent Forms brings you an excellent feature**, Meta Box** plugin integration. Metabox is a free Gutenberg and GDPR-compatible WordPress custom fields plugin and framework that quickly customizes a website with meta boxes and custom fields in WordPress.

This article will guide you on integrating **Meta Box Custom Fields** with **Fluent Forms** on your WordPress Site.

## Install Required Plugins

**Meta Box Plugin**: Install and activate the **Meta Box** plugin and the**Meta Box Builde**r plugin to create custom fields.

![](https://fluentforms.com/wp-content/uploads/2025/01/Metabox-custom-field-01-scaled.webp)

**CMB2 Plugin**: Ensure this plugin is installed to build custom fields.

![](https://fluentforms.com/wp-content/uploads/2025/01/cmb2-02-scaled.webp)

## Add Field Groups in Meta Box

To add field groups in meta box, click the **Add New Field Group** button on the **Meta Box Plugin** to create a new Field Group.

![](https://fluentforms.com/wp-content/uploads/2025/01/custom-field-add-03-scaled.webp)

Now, Provide a suitable **Title**for the field group. Click the **+Add Fields** button to add custom fields.

![](https://fluentforms.com/wp-content/uploads/2025/01/Fiel-Custom-04-scaled.webp)

After clicking add fields, **scroll down to select a field type** that meets your requirements, or you can **search**the field from the search box.

![](https://fluentforms.com/wp-content/uploads/2025/01/select-field-05-scaled.webp)

There are two types of tabs available for one field: the **General Tab** and the **Advanced Tab**. You can customize each tab option easily.

### General Tab

**Label:**This is what users will see on the form.

**ID**: The unique identifier for this field. It will be used for backend reference or in custom integrations.

**Type**: The data type of the field.

**Label Description**: An optional description that provides additional details about the field label.

**Input Description**: Instructions or context for the user when filling out this field.

**Default Value**: Pre-populates the field with a default email address or text.

**Placeholder**: Displays a temporary text inside the field (“Enter your email”).

**Size of the Input Box**: Defines the width or size of the input field.

**Required**: Toggles whether the field is mandatory. If enabled, users cannot submit the form without completing this field.

**Disabled**: If you enable this option, you can prevent users from entering data into the field.

**Read-Only**: If enabled, the field will be non-editable while displaying the value.

**Prepend Text**: Adds a fixed string at the beginning of the input field ( mailto:).

**Append Text**: You can add a fixed string at the end of the input field.

**Cloneable**: Allows this field to be duplicated within the form if necessary.

![](https://fluentforms.com/wp-content/uploads/2025/01/Genral-Tab-06-scaled.webp)

### Advanced Tab

**Before:**A text or HTML block appearing **before the input field**. For example, add a description, label, or styling element above the field.

**After:**A text or HTML block appears **after the input field**; for example, you can add instructions, error messages, or formatting details below the field.

**Custom CSS Class:**This allows you to add one or more CSS class names to style this field uniquely. For example, custom-email-class can be used to add specific styles defined in your CSS file.

**Custom Sanitize Callback:**Specify a custom function to sanitize the input data. This option is very useful for additional email validation or processing before saving.

**Save the Field:**Toggle to **Enable/Disable** saving the field’s value to the database.

**Custom HTML5 attributes:** You can add any custom HTML5 attributes to the field by clicking the **+Add New**button.

**Validation:**  You can define rules to validate the field input before submission of the form. To do so, click the **+Add New**button. For example, you could Create a rule for allowed domains ( @example.com) or validate format compliance.

**Custom Settings:** If you want to add additional configuration options, click the**+Add New** button under the **Custom Settings** options.

After that, click the **Publish**button to save your custom fields.

![](https://fluentforms.com/wp-content/uploads/2025/04/advanced-tab-07-04-10-2025_04_00_PM-scaled.webp)

### Settings

**Location:**Configure the location where the custom fields in this group will appear. Fields will appear for posts and pages (as selected in the dropdown).

**Position:**You can choose the content position from the dropdown options **After Content** or **Side** the content.

**Priority:**You can set the field priority to High or Low.

**Style:**This uses the **Standard WordPress meta box** style. You can also choose **no meta style** from the dropdown options.

You can add**Additional Settings** from here as your required options.

After all this is done, click the**Update** or **Publish** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/Settings-09-scaled.webp)

## Enable Post/CPT Module

To learn how to enable Post/CPT Module, follow the steps with the screenshots below –

First, go to **Integrations** from the Fluent Forms Navbar, search for **Post/CPT**through the search bar, and get the **Post/CPT**module.

Now, turn on the Hubspot**Enabled**button**.**

Now, select an existing **Post Form** from the Fluent Forms dashboard or create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/01/create-post-form-10-scaled.webp)

## Map Meta Box Custom Fields

Now, navigate to **Settings & Integration** in the post form settings. Go to the **Post Feed** page and click the**+Add New Post** button. Scroll down to the **Meta Box Plugin Mapping** section.

![](https://fluentforms.com/wp-content/uploads/2025/01/Post-Feed-11-scaled.webp)

### Create a New Feed

**A. Feed Name:** Enter a unique name that identifies your feeds.

**B. Submission Type:** Click the Radio button to select the **New Post**option for creating a new post or the **Update**option for updating an old post.

**C. Allow Logged-out users to create posts:** Checking the **Allowed** button enables non-logged-in users to submit posts.

Or if you uncheck the **Allowed**button, it limits post submission to logged-in users only.

**Post Status:**In the post status section you can set the posts where it is saved. There are three options include-

- **Draft:** Save submissions for manual review before publishing.
- **Publish:** Automatically make posts live upon submission.
- **Pending Review:** Requires admin approval before publication.

**Comment Status:**Choose the comment Status dropdown options.

- **Open:** Allows visitors to comment on the submitted post.
- **Closed:** Disables comments for the post.

**Post Format:**Based on the type of content, choose the post format, such as **Standard**, **Gallery**, or **Video**.

**D. Post Fields Mapping:**Now, map the form fields to WordPress post fields (Post Title and Post Content).

- **Post Title:** Input from the form field mapped to the post title.
- **Post Content:** Main content submitted by the user.
- **Post Excerpt:** Optional; used as a summary or teaser for the post.

Taxonomies (like tags or categories) and featured images will also map automatically if present in the form.

![](https://fluentforms.com/wp-content/uploads/2025/01/Create-new-feed-12-scaled.webp)

**E. MetaBox (MB) Plugin Mapping:**Now scroll down to the **Meta Box Plugin Mapping** section.

In the **Advanced Fields** section, select the custom field from **Meta Box** in the dropdown on the left. Choose the corresponding **Form field**from the dropdown on the right.

**F. Enable Conditional Logic:** If you want to allow **MetaBox Post** conditionally based on your submission values, then**Enable Conditional Logic**options. To learn more about this conditional logic, read the [article](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/).

Once all done, click the**Save Feed** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/map-the-metabox-feed-13.webp)

Go to the **Preview Page** and add some data to the form. When you’re done, click the **Submit** **Form** button.

![](https://fluentforms.com/wp-content/uploads/2025/04/Preview-Post-13-1-scaled.webp)

Next, go to the **Posts** page to check out your submitted post. Click on the **Edit**option of your **Post**.

You’ll notice the **Metabox custom field** on the **Post** page and the value at the bottom. This is how you can apply custom fields using Fluent Forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/Final-Custom-post-13-scaled.webp)

Following this guide, you can easily integrate **Meta Box custom fields**with **Fluent Forms**, enhancing your post-creation process with custom data tailored to your needs.

If you have further questions, don’t hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Post Selection Module in Fluent Forms

**Source:** [https://fluentforms.com/docs/post-selection-module-in-fluent-forms/](https://fluentforms.com/docs/post-selection-module-in-fluent-forms/)

The Post/CPT (Custom Post Type) Selection module in Fluent Forms is a powerful tool that fetches and displays post-type data from your WordPress site in a dropdown field. This feature is great for scenarios like letting users select a post to edit or perform an action based on available posts.

This article will show you the details of the **Post Selection Module** feature with Fluent Forms.

### What is Post/CPT Selection?

This feature lets users view and select posts from your site directly in a form dropdown. For example:

- If you create a post-edit form, you can display all posts authored by the logged-in user for selection.
- Users can choose a specific post and submit additional data.

You can even customize the posts displayed in the dropdown using**Query Parameters**.

## Add the Post/CPT Selection Field

Go to your form in **Fluent Forms**. Add the **Post/CPT Selection** field from the **Advanced Fields** section.

![](https://fluentforms.com/wp-content/uploads/2025/01/post-selection-module-01-scaled.webp)

A dropdown showing all posts on your site will appear by default. However, you can select any other post-type data on your site.

![](https://fluentforms.com/wp-content/uploads/2025/01/select-post-type-02-scaled.webp)

Use the Extra Query Parameter field to display specific posts based on author, category, or tags.

## Using the Extra Query Parameter

The Extra Query Parameter field allows you to filter posts using **WP_Query**. You can see the WP_Query [documentation here](https://developer.wordpress.org/reference/classes/wp_query/).

But to run the same queries inside the Extra Query Parameter field, you need to write the queries in a specific format. Go to the WordPress [wp query documentation](https://developer.wordpress.org/reference/classes/wp_query/) and choose how to display your post, such as author name, category name, tag, etc.

Now, assume I have a post-author named Kevin. We want to show all his posts so we can use this in our query.

#### Single Parameter

In wp_query, it works as below-

We will also convert it in our own way. We will grab the key and value from above.

![](https://fluentforms.com/wp-content/uploads/2025/01/WP_Query-03-scaled.webp)

You can write this way.

![](https://fluentforms.com/wp-content/uploads/2025/01/04-4-scaled.webp)

#### Multiple Parameter

To display posts by a specific author in a category:

- WP_Query example:

```
array(

    'author_name' => 'kevin',

    'category_name' => 'news'

)

Format for Fluent Forms:

author_name=kevin&category_name=news
```

#### Array Parameters

For queries with array values, such as posts in multiple categories:

- WP_Query Example:

```
array(

    'category_name' => array('news', 'blog')

)

Format for Fluent Forms:

category_name[]=news&category_name[]=blog
```

#### Nested Array Parameters

For nested arrays, such as meta queries:

- WP_Query Example

```
array(

    'meta_query' => array(

        array(

            'key' => 'views',

            'value' => '100',

            'compare' => '>='

        )

    )

)
```

- Format for Fluent Forms

```
meta_query[0][key]=views&meta_query[0][value]=100&meta_query[0][compare]=>=
```

Now, you can use the Post Selection module to create dynamic and user-friendly forms in Fluent Forms!

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms PDF Module

**Source:** [https://fluentforms.com/docs/fluent-forms-pdf-module/](https://fluentforms.com/docs/fluent-forms-pdf-module/)

The PDF Module in Fluent Form is an amazing feature that allows you to export form entries as **PDF** files. It is easy to save, share, and manage submissions.

This guide will show you how to export an entry as a PDF with no hassle.

## Install and Activate the PDF Generator Plugin

You need to install the **Fluent Forms PDF Generator** extension to enable the PDF export feature.

First, navigate to your WordPress Dashboard, go to **Plugins**, and click **Add New Plugin**. Here, search for the **Fluent Forms PDF generator**.

Now, install and activate the plugin on your website. A new tab ( Fluent Forms PDF) will be added to the modules section.

It will automatically install the add-on from **wp.org**.

![](https://fluentforms.com/wp-content/uploads/2025/03/pdf-generator-plugin-01-scaled.webp)

## Install and Activate the PDF Feed

After activating the PDF generator plugin, click the **Integration** section from the top menu bar. Then, select the **Fluent Form PDF** section. Here, you will see the **Fluent Form PDF Modules**. Now, click **Install Fonts** to set up the required fonts and elements.

Wait for the installation to complete. A success message will confirm the setup.

> Do not close the window until the installation finishes.

![](https://fluentforms.com/wp-content/uploads/2025/03/PDF-module-integration-02-scaled.webp)

Your **Fluent PDF Module** is active, so you can now use the **PDF Feed** of Fluent Form.

![](https://fluentforms.com/wp-content/uploads/2025/03/Fluent-Form-PDF-04-1-scaled.webp)

## Configure Global PDF Settings

To configure Global PDF Settings, go to your WordPress dashboard, hover over Fluent Forms Pro, and select **Settings**. This will open Fluent Forms’ **Global Settings**window.

Now, click on **PDF Settings**. Here, you will need to configure **PDF** settings globally. Note that each form can override this setting.

![](https://fluentforms.com/wp-content/uploads/2025/03/PDF-Setting-05-scaled.webp)

## Setting Up a PDF Feed for a Form

To enable PDF export for a specific form, follow these steps-

Open the form where you want to allow **PDF Export**. Navigate to the **Settings & Integrations** tab.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Now click on **PDF Feeds**from the left sidebar. Then click the **Add PDF Feed** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/enable-PDF-Settings-06-1-scaled.webp)

### Customizing the PDF Feed

A popup will appear asking you to choose a **PDF Template**. Select the available template.

![](https://fluentforms.com/wp-content/uploads/2025/03/Select-a-PDf-Template-07-scaled.webp)

#### PDF Content

**A. Feed Title:** Set the feed title for the PDF Feed. Also, add a shortcode from the dropdown options on the right side.

**B. Header Content:**Enter the header custom text here. You can also **Add Shortcode** here.

**C. PDF Body Content:** This section allows you to design the main content of your PDF. For example, using **{all_data}**will include all submitted form data in the PDF. You can also click the **Add Shortcode** button to insert dynamic content using shortcodes. This enables you to format your content precisely, creating clean, well-organized, and dynamic PDFs that display your form data exactly as needed.

Fluent Forms also provides an HTML editor for full control over the PDF layout and design. Click the **Code** view to access it.

**D. Footer Content:** Enter the custom Footer text here.

**E. Allow Download:** Select the **Yes**/**No** options toggle to enable **PDF** downloads.

**F. Shortcode:** You can use this shortcode on the submission message to generate a **PDF** link.

![](https://fluentforms.com/wp-content/uploads/2025/06/3333-scaled.webp)

#### Appearance

You can override the PDF appearance you have set up globally from the Appearance tab.

**A. Paper Size:** Select the page format from the dropdown options.

**B.** **Orientation**: Choose the orientation, Portrait or Landscape, from the dropdown options.

**C. Font Family:**Select a font for the PDF text from the dropdown options.

**D. Font Size:**You can adjust your font size by clicking the **Plus** or **Minus** Icon.

**E. Font Color:** Select font color from the color plate.

**F. Heading color:**Select the heading color from the color plate.

**G. Accent Color:** Select the accent color from the color plate. The accent color is used for borders, breaks, etc.

**H. Language Direction:**Scripts like Arabic and Hebrew are written right to left. For Arabic/Hebrew, please select **RTL**. Others, by default, select **LTR** options.

I. **Watermark Image:**Upload an image as a **background watermark**.

**J. Watermark Text:**Enter text to be used as a **watermark**.

**K. Watermark Opacity:**Controls the transparency of the watermark (**1-100**). The watermark’s opacity is significant, and 50 is the recommended size.

**L. Watermark Position:** Option to set the watermark as a background.

**M. PDF Password:**You can set a password for protected PDF access. If you don’t want to enter the password, leave the options.

When the change is complete, click the **Save Feed** button, and the **PDF Feed** will be added to your form.

![](https://fluentforms.com/wp-content/uploads/2025/03/Appearance-09-scaled.webp)

## Downloading a Form Entry as a PDF

Once you have customized the form and added the PDF Feed, go to the **Entries**section of the chosen form.

Now, select any submission entry you wish to work on and click the **View Icon**of that entry.

![](https://fluentforms.com/wp-content/uploads/2025/03/entries-10-scaled.webp)

From here, you will see the Download option for your PDF Feed preview. Then click the **Download PDF** button to generate and save the file.

![](https://fluentforms.com/wp-content/uploads/2025/03/PDf-download-10-1-scaled.webp)

## Sending Form Entries as PDFs via Email

To learn how to add PDF Feed into Admin/User Email for a specific Form, follow the steps with the screenshots below –

To automatically send form entries as PDFs in emails, navigate to **Email Notifications Settings** for your form. Scroll down to **PDF Attachments** (above the Advanced tab). Then, select the **PDF feed** you want to attach to emails. It ensures users receive a **PDF version of their form submission** via email.

When a user submits the form, this PDF Feed will be sent to the **Admin Email**.

If you want to know about email notifications, then read this[article](https://fluentforms.com/docs/how-to-setup-admin-user-email-notifications/).

![](https://fluentforms.com/wp-content/uploads/2025/03/11-scaled.webp)

Now you can create, download, and email a PDF Template feed in your Fluent Form.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Dynamic Input Values In Form Steps | Fluent Forms

**Source:** [https://fluentforms.com/docs/dynamic-input-values-in-form-steps-fluent-forms/](https://fluentforms.com/docs/dynamic-input-values-in-form-steps-fluent-forms/)

Fluent Forms allows you to dynamically populate input values to make your multi-step forms more connected and personalized.

This article will guide you through adding dynamic input values to the form steps with Fluent Form on the WordPress site.

## Creating a Multi-Step Form

To utilize dynamic input values, first, create a multi-step form. Read this article if you don’t know how to make a multi-step form.

For this example, I will create a multi-step form where the user enters their **Name** in the first step. In the second step, we will dynamically display their name as a personalized greeting.

![](https://fluentforms.com/wp-content/uploads/2025/03/add-form-step-01-scaled.webp)

## Adding Custom HTML Input Field

Add a **Custom HTML** input field from the **General Field**section to populate the name input data.

You will find an innovative code sample at the bottom right of the **HTML** input areas. If you want to learn more about the **Custom HTML**field, read this[article](https://fluentforms.com/docs/custom-html-field-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/03/custom-html-field-add-02-scaled.webp)

### Using the SmartCode

Now, using the Smart codes, you can show the content of the previous input. For this, use the **{dynamic.YOUR_INPUT_NAME}**, where **YOUR_INPUT_NAME**is the Name Attribute of the input fttield you want to populate.

### Finding the Name Attribute

To find the **Name Attribute** of the input field, click on the **Input Field** (Name Field). Now, on the right-side panel, navigate to **Advanced Options**. Here, you’ll find the **Name Attribute** assigned to the input field. For a better understanding, see the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/03/name-attributes-03-scaled.webp)

## Adding Smart Code in the HTML Field

To display the entered **Name** dynamically in the second step, use the following Smart Code in the **HTML Content Field**:

Hello {dynamic.names}, welcome to Fluent Forms!

Where **names** is the **Name Attribute** of the Name Field.

![](https://fluentforms.com/wp-content/uploads/2025/03/smartcode-04-scaled.webp)

## Embed the Form into the Front

Once you complete the customization, click the **Save** **Form** button to save all your changes. Click the **Preview & Design**button****in the middle to see the form preview.

To integrate and display the form on a specific Page or post, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page or post**.

![](https://fluentforms.com/wp-content/uploads/2025/03/save-form-05-2-scaled.webp)

### Preview of Dynamic Input Values In Form Steps

After embedding, you can preview the form with the dynamic input values in form steps.

![](https://fluentforms.com/wp-content/uploads/2025/03/dynamic-input-values-names-06.webp)

Your multi-step form will display a personalized message using the name entered in the first step.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Mapping Meta Fields with Meta Keys in Fluent Forms

**Source:** [https://fluentforms.com/docs/mapping-meta-fields-with-meta-keys-in-fluent-forms/](https://fluentforms.com/docs/mapping-meta-fields-with-meta-keys-in-fluent-forms/)

Fluent Forms offers a powerful **Meta Fields Mapping** feature that allows you to map **post meta fields** into your form. Post meta fields are WordPress objects that store additional data about a post.

This guide will walk you through mapping meta fields for both **Post Forms** and **Product Forms** in Fluent Forms.

## Mapping Meta Fields with a Post Form

### Create or Use an Existing Post Form

Start by creating a **Custom Post Form** or using an existing one. Ensure the **Field Group** is set to **Post Type**. To know more about creating post forms read this [article](https://fluentforms.com/docs/how-to-create-a-post-form-with-fluent-forms/).

A post form might include fields like:

- Post Title
- Post Content
- Categories
- Simple Text
- Numeric Field

> ACF (Advanced Custom Fields) mapping requires the use of mapped meta fields.

![](https://fluentforms.com/wp-content/uploads/2025/04/Create-post-form-01-scaled.webp)

### Setup Custom Meta Fields with ACF

To map the meta field, follow the simple steps given below-

First, use a plugin like **Advanced Custom Fields (ACF)** to create a field group for your WordPress posts. Then, copy the **Name Attributes** of the fields from the **Custom Fields plugin**.

![](https://fluentforms.com/wp-content/uploads/2025/04/unnamed.webp)

### Map Meta Fields in Fluent Forms

In your form, go to **Settings & Integrations**tab****and navigate to the **Post Creation Feed**.

Now, Click +**Add Meta Field** button and paste the copied meta keys into the designated field. Ensure that standard post fields, such as **Post Title** and **Post Content**, are mapped in the form settings before adding custom meta fields.

After adding all the required meta keys, click the **Save Feed** button to save your configuration. Fill out and submit the form.

![](https://fluentforms.com/wp-content/uploads/2025/04/post-field-and-meta-field-02-scaled.webp)

### Verify Submission

To verify, go to **Posts** in WordPress. Locate the newly created post (**Demo Post**).

Open the post and check if the **Post Title**, **Post Author**, and other values are mapped correctly.

![](https://fluentforms.com/wp-content/uploads/2025/04/MEta-Key-Field-03-scaled.webp)

## Mapping Meta Fields with a Product Form

To map a meta field with a product form, First, you need to create or use an Existing Product Form. For this, follow the previous similar to the post form, and create a **Product Form** with relevant fields.

Now, add the Add Product-Specific Fields. Include fields such as:

- Post Title
- Post Content
- Price
- Product Status

![](https://fluentforms.com/wp-content/uploads/2025/04/product-form-04-scaled.webp)

### Add Custom Fields with ACF

To map the meta field, follow the simple steps given below-

First, use a plugin like **Advanced Custom Fields (ACF)** to create a field group for your WordPress posts. Then, copy the **Name Attributes** of the fields from the **Custom Fields plugin**. Navigate to the **Post Creation Feed** in your Fluent Form**Settings & Integration**tab.

Now, click the +**Add Meta Field** button and paste the copied meta keys into the designated field.

Before adding custom meta fields, ensure that default post fields, such as **Post Title** and **Post** **Content**, are mapped in the form settings.

![](https://fluentforms.com/wp-content/uploads/2025/04/add-product-field-05-scaled.webp)

![](https://fluentforms.com/wp-content/uploads/2025/04/add-meta-field-06-scaled.webp)

After adding all the required meta keys, click the **Save Feed** button to save your configuration. Fill out and submit the form.

![](https://fluentforms.com/wp-content/uploads/2025/04/unnamed-1.webp)

### Verify Submission

Go to **Posts** in the WordPress Dashboard. Then, check if the **Product Title** and **Product Status** appear correctly in the post entry.

![](https://fluentforms.com/wp-content/uploads/2025/04/preview-product-meta-key-07-scaled.webp)

Following these steps, you can easily map **Meta Fields** using **Meta Keys** in Fluent Forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Use ACF to Add a Custom Field in the Post Form

**Source:** [https://fluentforms.com/docs/use-acf-to-add-a-custom-field-in-the-post-form/](https://fluentforms.com/docs/use-acf-to-add-a-custom-field-in-the-post-form/)

**ACF** (**Advanced Custom Fields**) is a **WordPress** plugin that allows you to add extra custom fields to your pages and posts. Fluent Forms ACF integration feature works only when a Post Form is created using Fluent Forms. It helps deal with the users’ custom field data and makes it visible to your site’s visitors.

This article will guide you through adding **ACF (Advanced Custom Fields)** in a **Post Form** on your **WordPress** Form.

## Installing & Activating ACF Plugin

To start the process, you need to install and activate the **ACF (Advanced Custom Fields)** plugin on your **WordPress** site to build custom fields.

First, go to **Plugins** in the **WordPress Admin Panel** on the left side, click **Add New Plugin**, search for the **ACF** plugin using the **Search Plugins** option on the right, and the **Advanced Custom Fields (ACF)** plugin will appear.

Now, click the **Install** button, and your ACF plugin will be installed on your site.

![](https://fluentforms.com/wp-content/uploads/2025/02/1.-Install-Advanced-Custom-Field-plugin-scaled.webp)

Then, click the **Activate** button, and the ACF plugin will be activated and ready to function.

![](https://fluentforms.com/wp-content/uploads/2025/02/2.-Activate-button-scaled.webp)

## Adding Custom Fields in ACF

After installing the ACF plugin, you need to add the field you want to use as a custom field in your Post Form. **For example**, you want to add a custom field for reviewing your posts. In this case, you can add a Post reviewer field in ACF and use it in your Post Form.

**To learn how to add a field in ACF, follow the steps below –**

First, go to the **ACF** plugin from the **WordPress Left Sidebar**, click the **Field Groups**, and press the **+Add New**button in the top right or the **+Add Field Group** button.

![](https://fluentforms.com/wp-content/uploads/2025/02/3.-Add-New-button-to-create-group-field--scaled.webp)

Now, give your **Field Group** a suitable**Title** to find the field easily later during the use. Then, you will get the two following options which you can use by clicking the dropdown arrow.

1. **Fields**: This option allows you to add your desired field/s.
2. **Settings**: This option allows you to set location rules (i.e., determine when and where this field will be added).

![](https://fluentforms.com/wp-content/uploads/2025/02/4.-Group-field-title-Fields-and-Settings-options-scaled.webp)

### 1. Fields

Here, you can select which type of field you want to add through the**Field Type** option, set a preferred name for your added field through the **Field Label** option, and define the field slug through the **Field Name** option.

You can also set any pre-defined value for your field through the**Default Value** option. Plus, you can add multiple fields by clicking the **Close and Add Field** or**+ Add Field** button. **For example**, here you can see I added a **Text** type field for creating the **Custom** **Post Reviewer**field.

> To learn more details about all the options the Fields Section has, refer to this Documentation from the ACF plugin.

![](https://fluentforms.com/wp-content/uploads/2025/02/5.-Fields-option.webp)

### 2. Settings

Here, you can select which post type you want to use this field. **For example**, I selected the **Post** as **Post Type**.

> To learn more details about all the options the Settings Section has, refer to this Documentation from the ACF plugin.

Once you are done, click the **Save Changes** button to save all your changes and make the field functional.

![](https://fluentforms.com/wp-content/uploads/2025/02/6.-Settings-Save-Changes-scaled.webp)

## Integrating the ACF Field in a Post Form

After adding the desired custom field in the ACF, it is time to use this in a Post Form. To learn how to use the added ACF field in a post form, follow the steps below –

First, go to****the**Forms**section from the **Fluent Forms Navbar,**choose****a****desired**Post Form,**and click the **Pencil/Edit** icon to open the **Editor** page of that form.

> Remember, you can use the ACF Field only in a Post Form. To learn the whole process of creating a Post Form, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/02/7.-Open-desired-form-scaled.webp)

Once you are on the Editor page, you can see [Post Title](https://fluentforms.com/docs/add-post-title-field-in-post-forms/) and [Post Content](https://fluentforms.com/docs/add-post-content-field-in-post-forms/) fields have already been added.

Now to add the “**Post Reviewer”** **ACF** **Field** in this form,  go to the **Input Fields**on the right sidebar and open the **General Fields** dropdown list by clicking the **Arrow Icon**. Then, choose the **Text Area**field****by clicking on it or **Drag & Drop** it into your editor.

> Remember, you have to choose a similar Input Field type that you selected in the ACF Field Type. For example, you can see that I added the Text as field type in the ACF. That is why, I added the Text Area input field here.

![](https://fluentforms.com/wp-content/uploads/2025/02/8.-Add-Text-Area-field-in-a-Post-Form-scaled.webp)

## Configuring Post Feed Settings

Now, you need to c**onfigure** the **Post Feed** to make your Custom Field functional and properly integrate it into the **Post Form**. It helps you map your added post fields for data collection and allows users to create more customized posts.

**To learn how to configure Post Feed with the Post Form, follow the steps below –**

First, go to **Settings & Integrations** from the **Editor** page, open the **Post Feeds**tab from the left sidebar, and click the **Settings Icon**to open the existing added feed.

> If you don’t have an existing post feed, you can add a new one by clicking the + Add Post Feed button. To learn the details process of adding a new post feed, click here. For example, I used an existing Feed to show the process.

![](https://fluentforms.com/wp-content/uploads/2025/02/9.-Settings-Integrations-Post-Feed-options-scaled.webp)

Once you are on the**Post Feed** page, scroll down to the **Meta Field Mapping** section. Here, you can see the**ACF Plugin Mapping** option becomes available.

Under the **ACF Plugin Mapping,** you will get two types of field mapping options. These are the **General Fields**and **Advanced Fields**. As the **Post Reviewer** field is a text-type general field I map the **Textarea** field under the **General Fields** option.

Also, if you want to add multiple general fields, then click the**+Add Another General Field**button in the right corner, and to delete any field, then click the **Cross Icon**.

> Remember, here, you need to map your ACF Field with the corresponding Fluent Forms Field.

Once the setup is done, click the **Save Feed** button, and your Post Feed will be configured. Now, your ACF Field integration will function successfully!

![](https://fluentforms.com/wp-content/uploads/2025/02/10.-ACF-Plugin-Mapping-option.webp)

## Customizing the added ACF Field

Next, go back to the post form’s **Editor** where you added the Custom Field. You can see that the**Custom Field** is added to the form.

Now, you can **Edit** or **Customize** this field by**hovering over it** and clicking the **Pencil Icon**. It will take you to the **Input Customization** tab on the right side and offer you the options for customizing the field.

> To learn more about the customization of the Text Area field, click here.

![](https://fluentforms.com/wp-content/uploads/2025/02/11.-Input-Customization-option-of-Textarea-field-scaled.webp)

## Embedding the Form into Frontend

To embed and display the form on a specific Page/Post on your site, **copy** the **Shortcode** from the top right side and **paste** it into your desired **Page/Post**.

Once you complete the customization, click the **Save** **Form** button to save all your changes. Also, to see the form preview, click the **Preview & Design**button****in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/02/12.-Save-form-button-scaled.webp)

## Preview of ACF Field

Here is the preview of the added **ACF**Field in a Post Form.

![](https://fluentforms.com/wp-content/uploads/2025/02/13.-Post-Reviewer-field-preview.webp)

This way, you can easily add the **ACF** **Fields** in Fluent Forms!
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Set Default Form Value from URL Parameters

**Source:** [https://fluentforms.com/docs/set-default-form-value-from-url-parameters/](https://fluentforms.com/docs/set-default-form-value-from-url-parameters/)

[Fluent Forms](https://wordpress.org/plugins/fluentform/) allows you to set input values using the URL GET parameters feature. This feature lets you populate input fields automatically, which can be useful for advanced users and dynamically pre-filling form fields.

This article guides you on how to set default form values from URL parameters in Fluent Forms.

## Add or select the Field

First, go to **Forms** from the top navbar and **open** the **Editor** page of the form you want to set the default form value via URL parameters. Then, click the **Edit** button to access the **Editor** page of the form you wish to modify.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Add the input fields where the value must be set from the URL parameter or select the existing one. In this case, it’s the **Email field**. Then, go to **Advanced Options** from the dropdown.

![](https://fluentforms.com/wp-content/uploads/2025/04/unnamed-2.webp)

## Enable GET Parameter for Field

Click the **Three-dot** **Icon** of the **Default Value** field. Then, select the first option, **Populate by GET Param**. Don’t forget the **Name Attribut**e, which is email in this case.

![](https://fluentforms.com/wp-content/uploads/2025/04/URL-populate-01-1-scaled.webp)

Follow the same steps for other fields. In my example, another field name is **Age**, and I am also setting its default value to **Populate by GET parameter**. **Copy** the form **shortcode** for later use.

![](https://fluentforms.com/wp-content/uploads/2025/04/age--scaled.webp)

After that, **paste** it into the desired **page** or **post**.

![](https://fluentforms.com/wp-content/uploads/2025/04/table-of-parameter-.webp)

## Create a Pre-Filled URL

To automatically fill in form values when users visit a page, construct a **URL** with GET parameters.

**URL Format: yourwebsite.com/form-page/?fieldname=value**

**Example:** For a form with **Email** (email) and **Age** (age) fields, the URL would be:

https://yourdomain.com/your page/?**email**=mnb@mail.com&**age**=90

- **?** starts the query string.
- age=90 assigns the value **90** to the **Age** field.
- &email=mnb@mail.com assigns **mnb@mail.com** to the **Email** field.
- Use “**&**” to add multiple parameters.

**Result**: When users visit this URL, the **Email** and **Age** fields will automatically be populated with the provided values. You may use as many parameters as you need.

![](https://fluentforms.com/wp-content/uploads/2025/04/Url-parameter-f-scaled.webp)

### URL Parameter on your Landing Page

You can also set a default form value from a URL parameter on your **Landing Page** as same way. To know more about the landing page in fluent form, read this [article](https://fluentforms.com/docs/dedicated-landing-page-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/04/333-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Dynamic Default Value in Fluent Forms

**Source:** [https://fluentforms.com/docs/dynamic-default-value-in-fluent-forms/](https://fluentforms.com/docs/dynamic-default-value-in-fluent-forms/)

Fluent Forms allows you to pre-fill input fields dynamically using the Dynamic Default Value feature. You can set a default value using one of the available options from the dynamic value dropdown.

In this article you will learn about the Dynamic Default value in fluent form.

## Configure Dynamic Default Values

First, go to **Forms** from the top navbar, click the Edit button to **open** the **Editor** page of your **desired form.**

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/04/edit-form-01-1-scaled.webp)

## Choose a Dynamic Value (Shortcode)

Now **Select** the input field, and navigate to **Advanced Options**. Then, click the **three-dot** menu from the right sidebar under the**Default Value** options. Here, you will see all the default advanced options in fluent form.

**Populate by GET Param:**Sets the default value from the query string found in the URL. Make sure you keep the ‘get.’ part; otherwise, it won’t work as expected. The shortcode is – {get.input_text}

**Admin Email:**It will insert the site administrator’s email address from your WordPress settings. It automatically sets the admin’s email address. The shortcode is – {wp.admin_email}

**Site URL:**With this shortcode populated with the website’s URL. the shortcode is- {wp.site_url}

**Site Title:** It uses the site title. The shortcode is- {wp.site_title}

**IP Address:**Sets the value from the user’s IP address. The shortcode is – {ip}

**Date (mm/dd/yyyy):**Sets the value from the current date in the denoted format, 04/25/1991. Shortcode is – {date.m/d/Y}

**Date (dd/mm/yyyy):** Sets the value from the current date in the denoted format, 25/04/1991. . The shortcode is – {date.d/m/Y}

**Embedded Post/Page ID:**Sets the value from the current post or page ID. The shortcode is – {embed_post.ID}

**Embedded Post/Page Title:**Dynamically populates the field with the title of the post or page where the form is embedded. The shortcode is – {embed_post.post_title}

**Embedded URL:**Inserts the page URL where the form is embedded. The shortcode is – {embed_post.permalink}

**HTTP Referrer URL:** Captures and populates the field with the page URL that refers the user to the current form. The shortcode is- {http_referer}

**User ID:**Automatically fills the field with the unique ID of the logged-in user. The shortcode is – {user.ID}

**User Display Name:** Populates the field with the display name of the logged-in user. The shortcode is – {user.display_name}

**User First Name:**Retrieves and inserts the first name of the logged-in user. The shortcode is – {user.first_name}

**User Last Name:** Sets the value from the logged-in user’s last name. The shortcode is – {user.last_name}

**User Email:**Sets the value from the logged-in user’s email. The shortcode is – {user.user_email}

**User Username:**Sets the value from the logged-in user’s username. The shortcode is – {user.user_login}

**User Browser Client:**Captures the browser being used ( Chrome, Firefox). The shortcode is – {browser.name}

**User Operating System:**Fetches the user’s operating system ( Windows, macOS). The shortcode is – {browser.platform}

**FluentCRM Data**: Pulls specific data from FluentCRM (user tags or segments). It uses tailoring forms for CRM-integrated workflows. THe shortcode is- {fluentcrm.CONTACT_DATA_KEY}

**Random String with Prefix:** Generates random strings each time when the form loads. It will be useful for anyone who wants to generate a unique set of strings.

The shortcode is –{random_string.your_prefix}. You can change the prefix to any text you like.

**Cookie Value:**A Cookie Value is a small piece of data that a server sends to a user’s web browser. The browser may store the cookie and send it back to the same server with later requests. The shortcode of Cookie Value is – {cookie.cookie_name}.

Once set, **Save**the**Form**, and the field will populate dynamically during use.

![](https://fluentforms.com/wp-content/uploads/2025/02/default-value-scaled1.webp)

Here are the default dynamic shortcode values in Fluent Form. If you have any further questions then contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

## Keyboard Navigation & Shortcuts in Fluent Forms

**Source:** [https://fluentforms.com/docs/keyboard-navigation-shortcuts-in-fluent-forms/](https://fluentforms.com/docs/keyboard-navigation-shortcuts-in-fluent-forms/)

To make form editing faster and more efficient, Fluent Forms provides essential keyboard shortcuts. Here’s how to use them effectively while building or editing your forms:

## Keyboard Navigation & Shortcuts in Form Editor

Go to the Fluent Forms Dashboard and open the **Forms** section. Now choose an existing form or create a new one and then go to the **Editor** section of the form.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/04/edit-form-01-scaled.webp)

- ‘ **/**’**: Focus on Search:**Use this shortcut to quickly access the search bar in Fluent Forms. Press the **/ key**, and you can search for form fields.

![](https://fluentforms.com/wp-content/uploads/2025/01/search-01-scaled.webp)

- **Tab to Move Forward:** Press the **Tab** to move forward between fields, options, or elements in the form editor. This helps you navigate through your form quickly without using the mouse.

- **Shift + Tab-Move Backward:**Use **Shift + Tab**to move backward through fields or elements. It works like the **Tab** key but in reverse, allowing you to revisit fields you just passed.

- **Enter–Add a Form Field:**When you’ve selected the field you want to add using the keyboard, press **Enter** to instantly add the form field to your form.

![](https://fluentforms.com/wp-content/uploads/2025/01/02-10-scaled.webp)

Start using the shortcut to increase your productivity and save time while building forms in Fluent Forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our[support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Fluent Forms Quiz Module

**Source:** [https://fluentforms.com/docs/fluent-forms-quiz-module/](https://fluentforms.com/docs/fluent-forms-quiz-module/)

The **Quiz Module** in Fluent Forms allows you to create mutual quizzes, calculate scores, and display results as grades, points, fractions, or percentages. This feature is ideal for tests, assessments, and educational purposes.

This article will guide you in creating a successful **Quiz Module** with fluent forms.

## Activating the Quiz Module

First, go to **the Fluent Forms**dashboard **Integration**sections from the top bar and enable the **Quiz Module** (available in Fluent Forms Pro).

![](https://fluentforms.com/wp-content/uploads/2025/01/enable-quiz-module-01-scaled.webp)

Now, create a new form or edit an existing one. Add relevant fields such as **Radio**, **Checkbox**, **Multi-select**, or **Dropdown** fields.

> If you do not have any existing forms, read  Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/04/edit-form-01-2-scaled.webp)

## Quiz Score Field

**Quiz Score** is a hidden advanced field that calculates quiz scores.

This field is only visible to the admin and can be used in confirmation messages or email notifications. If you want to learn more about quiz scores then read this [article](https://fluentforms.com/docs/quiz-score-in-fluent-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/01/quiz-score-02-scaled.webp)

## Configuring Quiz Settings

To configure the quiz settings, navigate to the Form **Settings** options and click the**Quiz Settings** sections. Now, **Enable**the **Quiz Module** for the form.

![](https://fluentforms.com/wp-content/uploads/2025/01/enable-quiz-setting-03-scaled.webp)

**A. Append Result:**Ensure that turn on **Show result on confirmation message**option. This option helps display the quiz result on the confirmation page after submission.

**B. Randomize Questions:**If you enable this option, the order of the questions will be randomly generated every time the quiz is loaded.

**C. Randomize Options:**If you enable this option, the answer options for each question on every load will be randomized.

**D. Grade System:**Define grade labels and set minimum and maximum ranges for each grade. Use the **“+”** and **“-”**buttons to add or remove grade levels.

- **Grade Label**: Customizable grade labels such as A, B, C, D etc as you want.
- **Minimum Range / Maximum Range**: You can set score ranges for each grade level.

![](https://fluentforms.com/wp-content/uploads/2025/04/Grade-system-04-04-10-2025_05_58_PM-scaled.webp)

### Simple Scoring

Your Quiz Questions will be displayed here, and you can simply set your **Quiz Question** **Score**and the **Correct Answer** to your Questions.

To set a score, first enable the question for which you want to set the scoring options. Then, Set the **Correct Answer**.

Now click the**Save Settings** button. You can also reset the Quiz by clicking the**Reset Quiz Setting** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/Simple-scoring-05-scaled.webp)

After submitting the form, the result on the Confirmation Page will look like the screenshot below; otherwise, it will simply show a Thank You message.

![](https://fluentforms.com/wp-content/uploads/2025/01/simple-scoring-02.webp)

### Advanced Scoring

You may also use the **Advanced Scoring**system to assign scores to each option. You can control your question scoring with these options. There is no option to select the right or wrong answer in Advanced Scoring.

![](https://fluentforms.com/wp-content/uploads/2025/01/advanced-scoring-02.webp)

After submitting the form, the result on the Confirmation Page will look like the screenshot below; otherwise, it will simply show a Thank You message.

Point 13 means New York scored 10, and Dallas scored 03. (10+3=13)

![](https://fluentforms.com/wp-content/uploads/2025/01/advanced-scorin-06-1.webp)

So this is all about the Fluent Forms Quiz Module.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Inline Opt-in Form using Fluent Forms

**Source:** [https://fluentforms.com/docs/inline-opt-in-form-using-fluent-forms/](https://fluentforms.com/docs/inline-opt-in-form-using-fluent-forms/)

Want to add a clean, horizontal email opt-in form to your WordPress site? Fluent Forms makes it quick and easy.

This guide shows you how to build a horizontal Email Opt-in Form with Fluent Forms.

## Import the Pre-built Opt-in Form

First, download the**Opt-in Form JSON file** from the provided [link](https://share.getcloudapp.com/rRunQgWj). Then, navigate to **Fluent Forms**dashboards**Tools** section in your WordPress site.

Then, click the **Import** **Forms** button from the left side bar. Now, click the **Choose File** to upload the import form under the **Select File** options. After that, click the **Import** **Forms** button to import your downloaded form.

![](https://fluentforms.com/wp-content/uploads/2025/04/import-inline-01-scaled.webp)

## Connect to Your Email Service

Open the imported form in the **Form Editor**. Go to the **Settings & Integrations** tab. Choose your preferred email marketing platform, such as **Mailchimp**, **ConvertKit**, **FluentCRM**, or others. Complete the integration process with your account details.

After saving, **copy**the**form shortcode** from the top-right corner of the editor.

![](https://fluentforms.com/wp-content/uploads/2025/04/02-1-scaled.webp)

## Add the Form to Your Page or Template

After that, open the **Page Editor** (or Template Editor) where you’d like to display the form.

#### Add a Section

Insert a new section into your layout and use the following CSS styles to give it a clean background and center alignment-

.section {

background-color: #f0f0f0;

align-items: center;

}

#### Add a Heading

Now it’s time to add a **Heading**. ou can use an <h2> or <h3> tag styled like this:

.heading {

color: #566d8f;

font-size: 20px;

}

#### Insert the Form Shortcode

Now add a shortcode block or component to the section. **Paste** the shortcode you copied earlier. Style the container for better layout control-

.shortcode {

margin-top: 20px;

width: 100%;

max-width: 600px;

}

Once you’re done, **save your page** to apply the changes. Your horizontal opt-in form should now be live and styled to fit your page.

That’s it! You now have a stylish, horizontal email opt-in form. If you have any further questions, contact our [support team](https://wpmanageninja.com/support-tickets/).

---

## Unique Field Validation

**Source:** [https://fluentforms.com/docs/unique-field-validation/](https://fluentforms.com/docs/unique-field-validation/)

The **Unique Field Validation** feature in Fluent Forms ensures that specific fields accept unique data, preventing duplicate submissions. This feature is handy for limiting one submission per email address or other unique identifiers.

This documentation will walk you through how to set the unique field validation in fluent form.

### Access Validate as Unique

Go to **Forms** from the top navbar, and click the**Edit**button to open the **Editor** page of your **desired form**.

“If you do not have any existing forms, read  [Create a Form from Scratch](https://fluentforms.com/docs/how-to-create-a-form-with-fluent-forms/) or [Create a Form using Templates](https://fluentforms.com/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms/) documentation to create a new one.”

Now click **Advanced Options** from the **Input Customization** options. Scroll down and enable the **Validate as Unique**option. This field also works for the[Simple Text Input Field](https://fluentforms.com/docs/adding-a-simple-text-input-field/).

![](https://fluentforms.com/wp-content/uploads/2025/01/unique-validation-form-scaled.webp)

### Customizing the Validation Message

You can set a custom error message for duplicate entries. When a user enters duplicate data in the unique field, the error message will display, informing them to provide unique input.

Once the validation message is entered, click the **Save Form**button.

With this Unique Field Validation feature, you can easily maintain the honesty of your form submissions and prevent duplicate entries.

If you have any questions, feel free to contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## Surveys and Polls in Fluent Forms

**Source:** [https://fluentforms.com/docs/surveys-and-polls-in-fluent-forms/](https://fluentforms.com/docs/surveys-and-polls-in-fluent-forms/)

Fluent Forms offers a robust and user-friendly solution for creating surveys and polls in WordPress. With its drag-and-drop builder and pre-built templates, you can design responsive, mobile-friendly surveys with interactive features like NPS surveys, real-time polls, and many more.

This article will show how to create Surveys and Polls in Fluent Forms.

### Add the Input Field

To build your survey or poll, add input fields such as:

- [Radio Fields](https://fluentforms.com/docs/radio-field-in-fluent-forms/)
- [Checkboxes](https://fluentforms.com/docs/checkbox-field-in-fluent-forms/)
- [Multiple Choice](https://fluentforms.com/docs/multiple-choice-field-in-fluent-forms/)
- [Dropdown Field](https://fluentforms.com/docs/dropdown-field-in-fluent-forms/)
- [Range Slider Field](https://fluentforms.com/docs/range-slider-field-in-fluent-forms/)

These fields will define the structure and interactivity of your survey or poll.

![](https://fluentforms.com/wp-content/uploads/2025/01/01-scaled.webp)

### Configuring Survey Settings

Go to **Settings & Integration** from the top navbar. From the **Settings**section, scroll down to find the **Survey Result** options.

![](https://fluentforms.com/wp-content/uploads/2025/01/02-1-scaled.webp)

**Append:**Now enable the Append to append survey results to the confirmation message.

- **Append Results:** Appends the survey results to the confirmation message after submission.
- **Show Labels and Counts:** Displays form labels and response counts when showing survey results.

If you want to display form labels and counts when displaying the survey results, turn on the **Show Label**& **Show Counts** option. Then click the **Save Settings** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/03-1-scaled.webp)

Copy and paste the form’s shortcode into the desired page or post.

After submission, survey results will appear in **Chart** format, as shown in the screenshot below.

![](https://fluentforms.com/wp-content/uploads/2025/01/04-scaled.webp)

### Displaying Survey Results on a Page

You can customize how survey results appear on a dedicated page using shortcodes.

#### Single Field

Using a custom shortcode, you can create a new page showing the customized result. For example, if you want to show only the checkbox field, you can use the **checkbox field’s name attribute** inside the **field_name quotation**.

Also, specify if you want to show the **Label**and **Total Count**. Below the shortcode, the label is hidden, and the total count will be displayed.

```
[fluentform_survey form_id="1" label='no' counts='yes' field_name='input_radio']
```

- **form_id**: The ID of the form.
- **label**: Set to ‘yes’ to display labels or ‘no’ to hide them.
- **counts**: Set to ‘yes’ to display response counts.
- **field_name**: The name attribute of the field to display results for.

Now, create a new page and paste customized shortcodes on that page.

#### Multiple Field

If you want to show multiple fields, you can use the **Name Attribute**of each field using a comma.

See the below-customized shortcode, which includes multiple fields by separating their **Name Attributes** with commas.

```
[fluentform_survey form_id="89" label='yes' counts='yes' field_name='input_radio','checkbox']
```

![](https://fluentforms.com/wp-content/uploads/2025/01/05.webp)

This is the process for creating surveys and polls in fluent form. If you have any questions, feel free to contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## Form Scheduling Feature in Fluent Forms

**Source:** [https://fluentforms.com/docs/form-scheduling-feature-in-fluent-forms/](https://fluentforms.com/docs/form-scheduling-feature-in-fluent-forms/)

The[Fluent Form](https://wordpress.org/plugins/fluentform/) Scheduling feature allows you to easily schedule a form’s live period. This scheduling feature enables admins to set an opening date and a closing one for particular forms.

Users cannot fill out forms before or after when setting the schedule.

This article will guide you on scheduling your form in Fluent Forms.

### Access the Form settings

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button which form you want to schedule.

Now, click the **Settings & Integrations** tab at the top bar and stay in the **Settings** section. Scroll down to the **Scheduling and Restrictions** segment under the Settings section.

“If you do not have any existing forms, read [Create a Form from Scratch](https://fluentforms.com/docs/how-to-create-a-form-with-fluent-forms/) or [Create a Form using Templates](https://fluentforms.com/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms/) documentation to create a new one.”

![](https://fluentforms.com/wp-content/uploads/2025/01/01-2-scaled.webp)

### Form Schedule

First, enable the **Form Schedule** options.

**Select Weekdays:** After enabling the form schedule, you can select the weekdays by checking the checkbox as needed.

**Submission starts date:** Now, set the date for the user when the form submission starts.

**Submission Ends date:** You can set the date for the user when the form submission ends.

**Form Waiting Message**: Enter the message for the displayed user when the form hasn’t yet been submitted.

**Form Expired Message**:  Enter the message for the displayed user when the form expires for the user.

![](https://fluentforms.com/wp-content/uploads/2025/01/02-6-scaled.webp)

Once complete the form scheduling, then **Save** the form.

So, this is the form of all things: form scheduling in fluent form. If you have any further questions, contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## Form Restrictions Feature in Fluent Forms

**Source:** [https://fluentforms.com/docs/form-restrictions-feature-in-fluent-forms/](https://fluentforms.com/docs/form-restrictions-feature-in-fluent-forms/)

The Fluent Forms restriction feature allows you to control the number of entries in your forms, even at specific time intervals, such as daily, weekly, or annually.

This article will guide you on restricting form entries in Fluent Forms.

## Access the Form Settings

To access the settings, go to **Forms** from the top Navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button on which form you want to restrict to entries.

> If you do not have any existing forms, read Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

![](https://fluentforms.com/wp-content/uploads/2025/04/edit-form-01-3-scaled.webp)

## Enable Entry Restrictions

Inside the form editor, click on the **Settings & Integrations** tab at the top menu bar. Stay in the **Settings** section and scroll down to find **Scheduling and Restrictions** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/access-settings-01-scaled.webp)

## Configure Form Restrictions

**Maximum Number of Entries:** Now enable the Maximum Number of Entries options. Then define the maximum number of entries allowed for that particular form by clicking the **Plus (+) Icon** or **Minus (-)** **Icon**.

Now, define the time interval by clicking the **Total Entries** section adjacent to the dropdown menu. The restrictions will be effective according to the specified time interval.

Here you can choose how frequently the entry limit applies. Options are included **Per** **Day, Weekly, Monthly, Year,**and**Per User.**

**Message Shown on Reaching Max Entries:**When the maximum number of entries is extended, the form user sees the message. Enter the message that you want to show off to your user here.

![](https://fluentforms.com/wp-content/uploads/2025/01/02-7-scaled.webp)

Once completed, all settings are **Save** **Settings** to apply changes. Otherwise, this will not work correctly.

These are all features of fluent form restrictions. If you have further questions, contact our[support team](https://wpmanageninja.com/support-tickets/).

---

## Conditional Confirmation Message in Fluent Forms

**Source:** [https://fluentforms.com/docs/conditional-confirmation-message-in-fluent-forms/](https://fluentforms.com/docs/conditional-confirmation-message-in-fluent-forms/)

Sometimes, you can display confirmation messages based on user input. Fluent Forms allows you to set up **Conditional Confirmation Messages** so that users receive individualized feedback based on specific conditions.

In this documentation, we will walk you through setting up a conditional confirmation message with fluent Forms.

So, let’s get started.

## Access the Form Settings

To learn how to set conditional confirmation message, follow the steps below –

First, go to **Forms** from the top navbar, and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to set the conditional confirmation message.

> If you do not have any existing forms, read  Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

Once inside the form editor, click on **Settings & Integrations** tab for the selected form. Now from the left sidebar, select **Conditional Confirmation** under the **Settings** section.

![](https://fluentforms.com/wp-content/uploads/2024/12/Confirmation-Settings-01-scaled.webp)

## Add a New Confirmation Message

Here appears a new window. Now click the **Add Confirmation** button in the top right corner.

![](https://fluentforms.com/wp-content/uploads/2024/12/Add-confirmation-02-scaled.webp)

Here also appears a new window. Now enter the details below-

**Confirmation Name:**Give a confirmation name that describes its purpose.

**Confirmation Type:** Choose where you want the confirmation message to appear. There are three Confirmation types.

- **Same Page:** Displays the confirmation message on the same page as the form.
- **To a page:** Redirects the user to a specific page after form submission.
- **To custom URL:**Redirects the user to a custom URL after form submission.

**Message to Show:** Here enter the custom message you want to display when the condition met. You can also add shortcode or image to your message.

![](https://fluentforms.com/wp-content/uploads/2024/12/confirmation-message-03-scaled.webp)

**Redirect Query String:**The field where you can enter the custom URL with query parameters.

- **Pass Field Data Via Query String:** This allows you to pass form field data as query parameters in the redirect **URL**.

> For this option to be enabled you must check the Pass Field Data Via Query String box below.

![](https://fluentforms.com/wp-content/uploads/2024/12/pass-string-query-04.webp)

Suppose If you select **To a Custom URL** and enable **Pass Field Data Via Query String**, you can enter a URL like this: https://example.com/thank-you?email={email}&phone={phone}

Then it will redirect the user to the **https://example.com/thank-you** page and pass the values of the phone and email fields as base of query parameters.

You can use these query parameters on the thank-you page to display personalized information or perform other actions.

**After Form Submission:**Now choose what should happen after the form is submitted. Options are **Hide Form**and **Reset Form**.

> This option only shows the message when you select the Same Page option in Confirmation Type.

### Enable Conditional Logic

First****enable the [Conditional logic](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/) by clicking the check box. Now decide whether all conditions must be met select **All** or if any single condition is sufficient select **Any**.

Then Select the specific form fields on which the condition will depend. For example, you might choose a rating or numeric input field.

Now define the logic that needs to be satisfied for the confirmation message to appear. You can set conditions like**:**

- **Equal to / Not equal to:**Exact match or mismatch.
- **Greater than / Less than:**Numerical comparison.
- **Contains:**The text field contains a specific word or phrase.
- **Starts with / Ends with:**The text field starts or ends with certain characters.
- **Advanced Operator:**Equal,Less,Greater, and Regex match data length.

Next, provide the specific value or condition that triggers the message. For instance, if you want to display a message when the user’s score is less than 3, you would set the logic to “less than 3.”

If you want to add multiple conditional logic then click the plus icon on the left side.

Once your message and logic are set, click **Save Notification** button to apply the changes.

![](https://fluentforms.com/wp-content/uploads/2024/12/confirmation-logic-05-scaled.webp)

Users will see a message that matches their input by setting up these conditional confirmations, creating a more personalized and responsive experience.

And that’s it! You’ve successfully set up Conditional Confirmation Messages in Fluent Forms, ensuring users receive appropriate feedback based on their form submissions.

If you have any queries then feel free to contact our [support team](https://wpmanageninja.com/support-tickets/).

---

## Set up Forms with Conditional Logic in Fluent Forms

**Source:** [https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/](https://fluentforms.com/docs/set-up-forms-with-conditional-logic-in-fluent-forms/)

[Alternative Heading: Use Conditional Logic in Input Fields with Fluent Forms]

**Fluent Forms** offers the **Conditional Logic** feature inside **Input Fields** to **display**/hide them based on specific conditions in your forms. This article will guide you through using **Conditional Logic** in any **Input Fields** with**Fluent Forms**.

## Enabling Conditional Logic in a Field

To learn how to use conditional logic in a specific form, follow the steps with the screenshots below –

First, go to the **Forms**from the **Fluent Forms Navbar**or**WordPress Left Sidebar,**and **open** the **Editor** page of your **desired form**by clicking the **Edit** button where you want to use the **Conditional Logic** feature.

> If you do not have any existing forms, read  Create a Form from Scratch or Create a Form using Templates documentation to create a new one.

For example, I chose an existing form to show the whole process.

![](https://fluentforms.com/wp-content/uploads/2025/03/1.-Open-Desired-form-scaled.webp)

Once you open the **Editor** page, choose the desired **Input Field** that you want to **hide/display**based on the set condition/s. **For example**, I selected the [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) field to show you the process.

Now, hover over the chosen field, click the **Pencil/Edit** Icon, and you’ll be taken to the **Input** **Customization** tab on the left side.

Then, open the **Advanced Options** by clicking the **Arrow Icon**, scroll down to **Conditional Logic**, and select the **Yes** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/2.-Input-Customization-scaled.webp)

## Conditional Match

Once you enable the **Conditional Logic** option, a **Conditional Match** option will appear with Three major conditionals. These are:

**A. Any**: If you choose this option, the form user must meet at least one of the set conditions during form submission to trigger the specified actions.

**B. All**: If you choose this option, the form user must meet all the set conditions during form submission to trigger the specified actions.

**C. Group**: This advanced option allows you to **create multiple conditions within groups**. Unlike the “**Any**” or “**All**” options, which determine whether all or just one condition must be met, the “**Group**” option lets you set one group of conditions against another using the “**OR**” operator. This means that an action will be triggered if at least one group of conditions is met. “Also, you can **Name** your **Groups** according to your preference.

### Fields to set Conditions

Once you select the **Conditional Match**, you can specify the **Parameter**, its **Operator**, and the corresponding **Value** to set condition/s.

In the “**Parameter**” field (first field), select an **input field** that needs to correspond with the value provided in the “**Value**” field (last field) and set an option in the “**Operator**” field (middle field). The parameter will trigger the action if the condition is met.

To add as many conditions as you need, click the **Plus Icon,** and to delete any conditions, click the **Minus Icon** in the right corner.

Once you complete it, click the **Save Form**button to make the condition/s functional. To see the preview, click the **Preview & Design** button.

![](https://fluentforms.com/wp-content/uploads/2025/03/3.-Conditional-Match-scaled.webp)

## Example of Each Conditional Match

To provide you with an in-depth understanding, all three conditional matches are explained with detailed examples below –

### A. Any Conditional Match

**For example**, I selected **“Email”** and **“Payment Item”** as the parameters, used **“includes”** and **“equals”** as the operators, and entered **“@gmail.com”** and **“Fluent Forms”** as the corresponding values.

As I have selected the “**Any**” conditional match here, when users either provide an email address containing **“@gmail.com”**or select****the “**Fluent Forms”**product to submit the form, the **Payment Method** field will be visible to them. Otherwise, this field will remain hidden.

![](https://fluentforms.com/wp-content/uploads/2025/03/4.-Any-conditional.webp)

Here is a **preview** of a form where the user met one **(selecting Fluent Forms product)**condition. As a result, the **Payment Method** field is visible here.

![](https://fluentforms.com/wp-content/uploads/2025/03/5.-Preview-of-Any-condional-scaled.webp)

### B. All Conditional Match

**For example**, I selected **“Email”** and **“Payment Item”** as the parameters, used **“includes”** and **“equals”** as the operators, and entered **“@gmail.com”** and **“Fluent Forms”** as the corresponding values.

As I have selected the “**All**” conditional match here, when users both provide an email address containing **“@gmail.com”**and select the “**Fluent Forms”**product to submit the form, the **Payment Method** field will be visible to them. Otherwise, this field will remain hidden.

![](https://fluentforms.com/wp-content/uploads/2025/03/6.-All-condional.webp)

Here is a **preview** of a form where the user met all the **( providing email that includes @gmail.com and selecting Fluent Forms product)** conditions. As a result, the **Payment Method** field is visible here.

![](https://fluentforms.com/wp-content/uploads/2025/03/7.-Preview-of-All-Conditional.webp)

### C. Group Conditional Match

Here, I selected the “Group” conditional match and set two different Groups of Conditions using the OR operator. So that, when users meet any one of the Group Conditions, the field will be visible in the form.

**For example**, in Group 1, I selected **“Email”** and **“Payment Item”** as the parameters, used **“includes”** and **“equals”** as the operators, and entered **“@gmail.com”** and **“Fluent Forms”** as the corresponding values.

On the contrary, in Group 2, I selected “**Name [First Name]**”,  **“Email”** and **“Payment Item”** as the parameters, used “**starts with**”, **“includes”** and **“equals”** as the operators, and entered “**Z**”, **“@gmail.com”** and **“Fluent Forms”** as the corresponding values.

As I have selected the “**Group**” conditional match here, when users meet either the conditions in **Group 1**(i.e., provide an email address containing “**@gmail.com**” and select the “**Fluent Forms**” product) or the conditions in **Group 2** (i.e., enter a first name starting with “**Z**,” provide an email address containing “**@yahoo.com**,” and select the “**Fluent Forms**” product), the **Payment Method** field will be visible to them. Otherwise, the field will remain hidden.

![](https://fluentforms.com/wp-content/uploads/2025/03/8.-Group-Conditional.webp)

Here is a **preview** of a form where the user met**All Conditions**under**Group 1** **(**providing an email address including**“@gmail.com”**and****selecting****the**“Fluent Forms”**product**)**. As a result, the **Payment Method** field is visible here.

![](https://fluentforms.com/wp-content/uploads/2025/03/9.-Preview-of-Group-one-codinitional.webp)

Here is a **preview** of a form where the user met **All Conditions**under**Group 2** (entering first name starting****with**“Z”**, providing an email address including**“@gmail.com”**,  and selecting****the**“Fluent Forms”**product) condition. As a result, the **Payment Method** field is visible here.

![](https://fluentforms.com/wp-content/uploads/2025/03/10.-Preview-of-Group-two-Conditionals.webp)

This way, you can easily use Conditional Logic in any field of Fluent Forms! 
If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## Set up Double Opt-in emails in Fluent Forms

**Source:** [https://fluentforms.com/docs/set-up-double-opt-in-emails-in-fluent-forms/](https://fluentforms.com/docs/set-up-double-opt-in-emails-in-fluent-forms/)

Double opt-in email is a dynamic feature of fluent forms. When users submit their email to your list, a double opt-in email is required to confirm their email.

When they subscribe to your newsletter, they have to click on an email with a confirmation link to confirm the validity of their email address.

This tutorial will guide you on how to set up double opt-in emails in Fluent Forms.

### Enable Double Opt-in Options

Navigate to **Global Settings** in Fluent Forms, accessible from the left sidebar of your WordPress dashboard. Under the **Settings** tab, locate and select the **Double Opt-in Settings** section.

Now, check the box to **Enable Double Opt-In Module**.

![](https://fluentforms.com/wp-content/uploads/2025/01/double-optionemail-settings-02-scaled.webp)

### Configure Global Double Opt-In Settings

Now, you will configure the Email Subject for a double opt-in email with the**Global Email Subject option.**

**Email Subject**: Set the subject line for the double opt-in confirmation email.

**Global Opt In Email Body**: Enter the message content for the confirmation email. This can range from a simple message to a fully designed HTML email.

**Send Email as RAW HTML Format**: Enable this option to paste your custom HTML design, ensuring the email appears exactly as intended.

### Sender and Reply-To Settings

**From Name:** Enter the name you want the notification email sent.

**From Email:**Enter the email from which you would like the notification email sent.

**Reply To:** Enter the email that you would like to be used as the reply-to address for the notification email.

If the Reply to the field is empty, the email sent by your domain’s SMTP will work by default.

> The confirmation message will not work if your outgoing email and reply to an email address are already set to a different one than the one you set in fluent forms. So make sure they match.

![](https://fluentforms.com/wp-content/uploads/2025/01/03-3-scaled.webp)

### Enable Double Opt In Your Form

First, go to **Forms** from the top navbar. Create a new form or existing form.

“If you do not have any existing forms, read [Create a Form from Scratch](https://fluentforms.com/docs/how-to-create-a-form-with-fluent-forms/) or [Create a Form using Templates](https://fluentforms.com/docs/using-and-customizing-pre-built-quick-forms-in-fluent-forms/) documentation to create a new one.”

For example, a contact form has been used here.

![](https://fluentforms.com/wp-content/uploads/2025/01/contact-form-scaled.webp)

Now go to the Settings & Integrations tab. Scroll down and check the option to **Enable Double Opt-In Confirmation before Form Data Processing**.

**Primary Email Field:** After this, you will see a few options for setting up the **Primary Email** **Field**. The double opt-in email will be sent for verification in the selected email field.

**Initial Success Message:** In the Initial Success Message option, enter the text you want the user to see just after the initial form submission.

Also, you can enter the email body as you want.

**Email Type:**In the email type section, you can check the **As Per Global Settings** ( you set up before ) or choose the **Customized Double Opt In Email option**.

If you want to**Disable Double Opt-In for the logged-in-user** check the box.

And if you want to**Disable Double Opt-in if the contact email is subscribed in FluentCRM**, check the box.

After all settings are set, click the **Save Settings** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/04-3-scaled.webp)

After the user confirms their subscription from email the form confirmation will be displayed; see the example below where you can edit the **Confirmation Message**.

![](https://fluentforms.com/wp-content/uploads/2025/01/initial-message-02.webp)

When the user confirms their subscription, an email notification will be triggered, completing the process.

![](https://fluentforms.com/wp-content/uploads/2025/01/email-confirmation-01.webp)

So, this is the process to set up and customize Double Opt-In Emails in Fluent Forms.

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/).

---

