# Filter Hooks

*Category from Fluent Forms documentation*

---

## fluentform/default_upload_path

**Source:** [https://fluentforms.com/docs/fluentform_default_upload_path/](https://fluentforms.com/docs/fluentform_default_upload_path/)

Using this filter you can change the file upload directory of fluentforms default file upload location.

```
apply_filters('fluentform/default_upload_path', $path, $form);
```

## Usage

```
add_filter('fluentform/default_upload_path', function ($path, $form) {
    return wp_upload_dir()['basedir'].'/test';
}, 10, 2);
```

## Parameters

- **$path** (string) Upload Path
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Uploader -> copyToDefault($files)

---

## fluentform/file_type_options

**Source:** [https://fluentforms.com/docs/fluentform_file_type_options/](https://fluentforms.com/docs/fluentform_file_type_options/)

## Description

This filter returns the file type option for the upload field. Using **fluentform/file_type_options** you can add more file types that are not supported by default.

```
apply_filters('fluentform/file_type_options', $fileTypeOptions);
```

## Usage

```
add_filter('fluentform/file_type_options', function ($types) {
    $types[] = [
        'label' => __('Autocad Files (dwg)', 'fluentform'),
        'value' => 'dwg',
    ];
    return $types;
});
```

## Parameters

- **$types** (array) File Types

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *app/Services/FormBuilder/ValidationRuleSettings.php*

---

## fluentform/disable_inputmode

**Source:** [https://fluentforms.com/docs/fluentform_disable_inputmode/](https://fluentforms.com/docs/fluentform_disable_inputmode/)

## Description

This filter checks if the input mode numeric should be disabled for numeric filed.

```
apply_filters('fluentform/disable_inputmode', false)
```

## Usage

```
add_filter('fluentform/disable_inputmode', function () {
    return $true
});
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

---

## fluentform/file_upload_validation_error

**Source:** [https://fluentforms.com/docs/fluentform_file_upload_validation_error/](https://fluentforms.com/docs/fluentform_file_upload_validation_error/)

## Description

Using this filter you can modify the file upload validation errors.

```
apply_filters('fluentform/file_upload_validation_error', $errors,$this->form);
```

## Usage

```
add_filter('fluentform/file_upload_validation_error', function ($errors, $form) {
    // do your stuff
    return $errors;
}, 10, 2);
```

## Parameters

- **$errors** (array) Validation Errors
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

apply_filters(‘fluentform/file_upload_validation_error’, $errors, $this->form);

This filter is located in FluentFormPro\src\Uploader -> upload()

---

## fluentform/file_upload_validations

**Source:** [https://fluentforms.com/docs/fluentform_file_upload_validations/](https://fluentforms.com/docs/fluentform_file_upload_validations/)

## Description

Using this filter you can modify the file upload validation rules and messages.

```
apply_filters('fluentform/file_upload_validations',[$rules, $messages],$this->form);
```

## Usage

```
add_filter('fluentform/file_upload_validations', function ($validations, $form) {
    // do your stuff
    return $validations;
}, 10, 2);
```

## Parameters

- **$validations** (array) Validation Rules
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in the pro version *src/Uploader.php*

---

## fluentform/default_upload_path

**Source:** [https://fluentforms.com/docs/fluentform_uploaded_file_name/](https://fluentforms.com/docs/fluentform_uploaded_file_name/)

## Description

This filter returns the file upload path.

```
apply_filters('fluentform/default_upload_path', $file, $originalFileArray, $this->formData, $this->form);
```

## Usage

```
add_filter('fluentform/default_upload_path', function ($filePath, $form) {
   
    return $filePath;
}, 10, 4);
```

## Parameters

- **$filePath**(str)****File path
- **$form**(object)****Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

```
apply_filters('fluentform/default_upload_path', $filePath, $this->form);
```

This filter is located in FluentFormPro\src\Uploader -> copyToDefault($files)

---

## fluentform/file_upload_params

**Source:** [https://fluentforms.com/docs/fluentform_file_upload_params/](https://fluentforms.com/docs/fluentform_file_upload_params/)

## Description

Using this filter you can change the upload directory of the temporary file upload location. It is not recommended to change this unless you completely understand how it works.

```
apply_filters('fluentform/file_upload_params', $param, $this->formData, $this->form);
```

## Usage

```
add_filter('fluentform/file_upload_params', function ($param, $formData, $form) {
    // do your stuff
    return $param;
}, 10, 3);
```

## Parameters

- **$param** (array) Upload Parameters
- **$formData** (array) Form Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

apply_filters(‘fluentform/default_upload_path’, $filePath, $this->form);

This filter is located in FluentFormPro\src\Uploader -> copyToDefault($files)

---

## fluentform/file_uploaded

**Source:** [https://fluentforms.com/docs/fluent_file_uploaded/](https://fluentforms.com/docs/fluent_file_uploaded/)

## Description

This filter is used when uploading the files.

```
apply_filters('fluentform/file_uploaded', $uploadFile, $this->formData, $this->form);
```

## Usage

```
add_filter('fluentform/file_uploaded', function ($uploadFile, $formData, $form) {
    // do your stuff
    return $uploadFile;
}, 10, 3);
```

## Parameters

- **$uploadFile** (array) Files Uploded
- **$formData** (array) Form Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in the pro version *src/Uploader.php*

---

## fluentform/uploader_args

**Source:** [https://fluentforms.com/docs/fluentform_uploader_args/](https://fluentforms.com/docs/fluentform_uploader_args/)

## Description

This filter returns the file uploader arguments.

```
apply_filters('fluentform/uploader_args', ['test_form' => false], $filesArray, $this->form);
```

## Usage

```
add_filter('fluentform/uploader_args', function ($args, $filesArray, $form) {
    return $args;
}, 10, 3);
```

## Parameters

- **$filesArray** (array) Files Array
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in the pro version src/Uploader.php

---

## fluentform/stripe_checkout_args

**Source:** [https://fluentforms.com/docs/fluentform_stripe_checkout_args/](https://fluentforms.com/docs/fluentform_stripe_checkout_args/)

## Description

This filter returns checkout arguments for the stripe payment.

```
apply_filters('fluentform/stripe_checkout_args', $checkoutArgs, $submission, $transaction, $form);
```

## Usage

```
add_filter('fluentform/stripe_checkout_args', function ($checkoutArgs, $submission, $transaction, $form) {
    // do your stuff
    return $checkoutArgs
}, 10, 4);
```

## Parameters

- **$checkoutArgs** (array) Checkout Arguments
- **$submission** (array) Submission Data
- **$transaction** (array) Transaction Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in the pro version *src/Payments/PaymentMethods/Stripe/StripeProcessor.php*

---

## fluentform/payment_method_settings_validation_{$method}

**Source:** [https://fluentforms.com/docs/payment_method_settings_validation_method/](https://fluentforms.com/docs/payment_method_settings_validation_method/)

## Description

This filter is used during saving any payment method to validate the data.

```
apply_filters('fluentform/payment_method_settings_validation_' . $method, $errors, $settings);
```

## Usage

```
add_filter('fluentform/payment_method_settings_validation_' . $method, function ($errors, $settings) {
    // Do your stuff here
    
    return $payments;
}, 10, 2);
```

## Parameters

- **$errors** (array) Validation Errors
- **$settings** (array) Payment Settings

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Payments\AjaxEndpoints -> savePaymentMethodSettings()

---

## fluentform/payment_submission_data

**Source:** [https://fluentforms.com/docs/fluentform_with_payment_submission_data/](https://fluentforms.com/docs/fluentform_with_payment_submission_data/)

## Description

This filter is used during submission to et submission data when the form has a payment option.

```
apply_filters('fluentform/payment_submission_data', $submission, $this->form)
```

## Usage

```
add_filter('fluentform/payment_submission_data', function ($submission, $form) {
    // do your stuff
    return $submission;
}, 10, 2);
```

## Parameters

- **$submission**(array) Submission Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> draftFormEntry()

---

## fluentform/submission_order_items

**Source:** [https://fluentforms.com/docs/fluentform_submission_order_items/](https://fluentforms.com/docs/fluentform_submission_order_items/)

## Description

This filter is used when returning the order items during payment.

```
apply_filters('fluentform/submission_order_items', $items, $this->submissionData, $this->form);
```

## Usage

```
add_filter('fluentform/submission_order_items', function ($items, $submissionData, $form) {
    // do your stuff
    return $items;
}, 10, 3);
```

## Parameters

- **$items**(array) Order Items
- **$submissionData** (array) Input Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Payments\Classes\PaymentAction -> getOrderItems($forced = false)

---

## fluentform/payment_field_{$elementName}

**Source:** [https://fluentforms.com/docs/fluenform_payment_field_elementname/](https://fluentforms.com/docs/fluenform_payment_field_elementname/)

## Description

This filter is used when returning the pricing option for the payment field.

```
apply_filters('fluentform/payment_field_'.$elementName.'_pricing_options', $pricingOptions, $item, $this->form);
```

## Usage

```
add_filter('fluentform/payment_field_'.$elementName, function ($pricingOptions, $item, $form) {
    // do your stuff
    return $pricingOptions
}, 10, 3);
```

## Parameters

- **$pricingOptions** (array) Pricing options
- **$item** (array) Input Item
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in the pro version *src/Payments/Classes/PaymentAction.php*

---

## fluentform/payment_settings_{$method}

**Source:** [https://fluentforms.com/docs/fluentform_payment_settings_method/](https://fluentforms.com/docs/fluentform_payment_settings_method/)

## Description

This filter is used when returning the payment settings using the payment key.

```
apply_filters('fluentform/payment_settings_' . $method, []);
```

## Usage

```
add_filter('fluentform/payment_settings_'.$method, function ($data) {
    // do your stuff
    return $data;
}, 10, 1);
```

## Parameters

- **$data** (array) Payment Settings Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Payments\AjaxEndpoints -> getPaymentMethodSettings()

---

## fluentorm/user_registration_creatable_roles

**Source:** [https://fluentforms.com/docs/fluentorm_userregistration_creatable_roles/](https://fluentforms.com/docs/fluentorm_userregistration_creatable_roles/)

## Description

This filter returns user roles for the user registration settings feed.

```
apply_filters('fluentorm/user_registration_creatable_roles', $validRoles);
```

## Usage

```
add_filter('fluentorm/user_registration_creatable_roles', function ($validRoles) {
    // do your stuff
    return $validRoles;
}, 10, 1);
```

## Parameters

- **$validRoles** (array) User Roles

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Integrations\UserRegistration\UserRegistrationApi -> getUserRoles()

---

## fluentform/user_registration_feed_fields

**Source:** [https://fluentforms.com/docs/fluentform_user_registration_feed_fields/](https://fluentforms.com/docs/fluentform_user_registration_feed_fields/)

## Description

This filter returns the fields for user registration settings feeds. Use this to push your own fields.

```
apply_filters('fluentform/user_registration_feed_fields', $fields, $formId);
```

## Usage

```
add_filter('fluentform/user_registration_feed_fields', function ($fields, $formId) {
    // Do your stuff here
    
    return $fields;
}, 10, 2);
```

## Parameters

- **$fields** (array) Fields
- **$f**ormId (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getSettingsFields($settings, $formId = null)

---

## fluentform/user_registration_field_defaults

**Source:** [https://fluentforms.com/docs/fluentform_user_registration_field_defaults/](https://fluentforms.com/docs/fluentform_user_registration_field_defaults/)

## Description

This filter returns default values for the user registration fields.

```
apply_filters('fluentform/user_registration_field_defaults', $fields, $formId);
```

## Usage

```
add_filter('fluentform/user_registration_field_defaults', function ($fields, $formId) {
    $fields['bboss_profile_fields'] = [
        [
            'label'      => '',
            'item_value' => ''
        ]
   ];
   $fields['bboss_profile_type'] = '';
   return $fields;
}, 10, 3);
```

## Parameters

- **$fields** (array) Default Fields
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Integrations\UserRegistration\Bootstrap -> getIntegrationDefaults($settings, $formId = null)

---

## fluentform/icontact_request_args

**Source:** [https://fluentforms.com/docs/fluentform_icontact_request_args/](https://fluentforms.com/docs/fluentform_icontact_request_args/)

## Description

This filter is used in Icontact integration for the request arguments.

```
apply_filters('fluentform/icontact_request_args', $options, $action, $method, $return_key);
```

## Usage

```
add_filter('fluentform/icontact_request_args', function ($options, $action, $method, $return_key) {
    // do your stuff
    return $options;
}, 10, 4);
```

## Parameters

- **$options** (array) Request Option
- **$action** (string) Action
- **$method** (Request Method) Request Type
- **$return_key** (string) Return Key

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Integrations\IContact\IContactApi -> make_request( $action = null, $options = array(), $method = ‘GET’, $return_key = null )

---

## fluentform/post_selection_label_by

**Source:** [https://fluentforms.com/docs/fluentform_post_selection_label_by/](https://fluentforms.com/docs/fluentform_post_selection_label_by/)

## Description

This filter returns the label for the post-type selection field.

```
apply_filters('fluentform/post_selection_label_by', 'post_title', $form);
```

## Usage

```
add_filter('fluentform/post_selection_label_by', function ($label, $form) {
    // do your stuff
    return $label
}, 10, 2);
```

## Parameters

- **$label** (string) Post Label
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *FluentFormPro\Components\Post*\PopulatePostForm -> renderPostSelectionField($data, $form)

---

## fluentform/post_selection_posts_pre_data

**Source:** [https://fluentforms.com/docs/fluentform_post_selection_posts_pre_data/](https://fluentforms.com/docs/fluentform_post_selection_posts_pre_data/)

## Description

This filter returns the initial field data for the post-type selection field.

```
apply_filters('fluentform/post_selection_posts_pre_data', [], $data, $form);
```

## Usage

```
add_filter('fluentform/post_selection_posts_pre_data', function ($posts, $data, $form) {
    // do your stuff
    return $posts;
}, 10, 3);
```

## Parameters

- **$posts** (array) Posts
- **$data** (array) Input Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *FluentFormPro\Components\Post*\PopulatePostForm -> renderPostSelectionField($data, $form)

---

## fluentform/post_selection_types

**Source:** [https://fluentforms.com/docs/fluentform_post_selection_types/](https://fluentforms.com/docs/fluentform_post_selection_types/)

## Description

This filter returns formatted post types for the post-selection field.

```
apply_filters('fluentform/post_selection_types', $formattedTypes);
```

## Usage

```
add_filter('fluentform/post_selection_types', function ($formattedTypes) {
    // do your stuff
    return $formattedTypes
}, 10, 1);
```

## Parameters

- **$formattedTypes** (array) Formatted Posts

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Components\PostSelectionField -> generalEditorElement()

---

## fluentform/post_type_selection_types_args

**Source:** [https://fluentforms.com/docs/fluentform_post_type_selection_types_args/](https://fluentforms.com/docs/fluentform_post_type_selection_types_args/)

## Description

This filter returns the post-type selection arguments for the post-type selection field.

```
apply_filters('fluentform/post_type_selection_types_args', ['public' => true]);
```

## Usage

```
add_filter('fluentform/post_type_selection_types_args', function ($args) {
    // do your stuff
    return $args;
}, 10, 1);
```

## Parameters

- **$args** (array) Arguments

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Components\PostSelectionField -> generalEditorElement()

---

## fluentform/ip_provider

**Source:** [https://fluentforms.com/docs/fluentform_ip_provider/](https://fluentforms.com/docs/fluentform_ip_provider/)

## Description

This filter returns the IP provider used in the phone field.

```
apply_filters('fluentform/ip_provider', $url);
```

## Usage

```
add_filter('fluentform/ip_provider', function ($url) {
    // do your stuff
    return $url;
}, 10, 1);
```

## Parameters

- **$url** (string) Provider Url

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\Components\PhoneField -> pushScripts($data, $form)

---

## fluentform/itl_options

**Source:** [https://fluentforms.com/docs/fluentform_itl_options/](https://fluentforms.com/docs/fluentform_itl_options/)

## Description

This filter returns the Itl option for the phone field.

```
apply_filters('fluentform/itl_options', $itlOptions, $data, $form);
```

## Usage

```
add_filter('fluentform/itl_options', function ($itlOptions, $data, $form) {
    // do your stuff
    return $itlOptions;
}, 10, 3);
```

## Parameters

- **$itlOptions** (array) Itl Option
- **$data** (array) Input Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\Components\PhoneField -> pushScripts($data, $form)

---

## fluentform/survey_shortcode_defaults

**Source:** [https://fluentforms.com/docs/fluentform_survey_shortcode_defaults/](https://fluentforms.com/docs/fluentform_survey_shortcode_defaults/)

## Description

This filter returns the base colors that are used in the email.

```
apply_filters('fluentform/survey_shortcode_defaults', $defaults, $atts);
```

## Usage

```
add_filter('fluentform/survey_shortcode_defaults', function ($defaults, $atts) {
    // do your stuff
    return $defaults;
}, 10, 2);
```

## Parameters

- **$defaults** (array) Default Data
- **$atts** (array) Shortcode Attributes

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *fluentformpro.php*

---

## fluentform/popup_shortcode_defaults

**Source:** [https://fluentforms.com/docs/fluentform_popup_shortcode_defaults/](https://fluentforms.com/docs/fluentform_popup_shortcode_defaults/)

## Description

This filter returns the default values for the fluent form popup shortcode.

```
apply_filters('fluentform/popup_shortcode_defaults', $defaults, $atts);
```

## Usage

```
add_filter('fluentform/popup_shortcode_defaults', function ($defaults, $atts) {
    // do your stuff
    return $defaults;
}, 10, 2);
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *fluentformpro.php*

---

## fluentform/nonce_verify

**Source:** [https://fluentforms.com/docs/fluentform_nonce_verify-2/](https://fluentforms.com/docs/fluentform_nonce_verify-2/)

## Description

This filter checks if the form submission should verify the nonce security check. For front-end submission, this is turned off by default, which can be turned on by this filter.

```
apply_filters('fluentform/nonce_verify', false, $formId);
```

## Usage

```
add_filter('fluentform/nonce_verify', function ($status, $formId) {
    // do your stuff
    return $status;
}, 10, 2);
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\Form\FormValidationService -> validateNonce()

---

## fluentform/email_template_colors

**Source:** [https://fluentforms.com/docs/fluentform_email_template_colors/](https://fluentforms.com/docs/fluentform_email_template_colors/)

## Description

This filter returns the base colors that are used in the email.

```
apply_filters('fluentform/email_template_colors', $colors);
```

## Usage

```
add_filter('fluentform/email_template_colors', function ($colors) {
    // do your stuff
    return $colors;
}, 10, 1);
```

```
$colors = array(
    'background_color'      => '#f6f6f6',
    'body_background_color' => '#ffffff',
    'base_color'            => '#444444',
    'text_color'            => '#444444'
);
```

## Parameters

- **$colors** (array) Colors

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\template\styles.php

---

## fluentform/email_template_email_heading

**Source:** [https://fluentforms.com/docs/fluentform_email_template_email_heading/](https://fluentforms.com/docs/fluentform_email_template_email_heading/)

## Description

This filter returns the email header for the email template.

```
apply_filters('fluentform/email_template_email_heading', false, $form, $notification);
```

## Usage

```
add_filter('fluentform/email_template_email_heading', function ($email_heading, $form, $notification) {
    // do your stuff
    if($email_heading){
       return $email_heading;
    }
    return false;
}, 10, 3);
```

## Parameters

- **$email_heading** (string) Email Heading
- **$form** (array) Form Object
- **$notification** (object) Notification Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\template\header.php

---

## fluentform/email_template_header_image

**Source:** [https://fluentforms.com/docs/fluentform_email_template_header_image/](https://fluentforms.com/docs/fluentform_email_template_header_image/)

## Description

This filter returns the email templates header image.

```
apply_filters('fluentform/email_template_header_image', false, $form, $notification);
```

## Usage

```
add_filter('fluentform/email_template_header_image', function ($image, $form, notification) {
    // do your stuff
    if($image){
       return $image;
    }
    return false;
}, 10, 3);
```

## Parameters

- **$image** (string) Image Location or boolean
- **$notification** (array) Notification Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\template\header.php

---

## fluentform/email_content_type_header

**Source:** [https://fluentforms.com/docs/fluentform_email_content_type_header/](https://fluentforms.com/docs/fluentform_email_content_type_header/)

## Description

This filter returns the email headers.

```
apply_filters('fluentform/email_content_type_header', 'text/html; charset=UTF-8');
```

## Usage

```
add_filter('fluentform/email_content_type_header', function ($header) {
    // do your stuff
    return ''text/html; charset=UTF-8';
}, 10, 1);
```

## Parameters

- **$emailHeader** (string) Email Header Type

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\template\header.php

---

## fluentform/email_summary_footer_text

**Source:** [https://fluentforms.com/docs/fluentform_email_summary_footer_text/](https://fluentforms.com/docs/fluentform_email_summary_footer_text/)

## Description

This filter returns the email footer text for the email summary.

```
apply_filters('fluentform/email_summary_footer_text', $generateText);
```

## Usage

```
add_filter('fluentform/email_summary_footer_text', function ($generateText) {
    // do your stuff
    return $generateText;
}, 10, 1);
```

## Parameters

- **$generateText** (string) Email Header

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\report\body.php

---

## fluentform/email_summary_body_text

**Source:** [https://fluentforms.com/docs/fluentform_email_summary_body_text/](https://fluentforms.com/docs/fluentform_email_summary_body_text/)

## Description

This filter returns the email body for the email summary.

```
apply_filters('fluentform/email_summary_body_text', $generateText, $submissions);
```

## Usage

```
add_filter('fluentform/email_summary_body_text', function ($generateText, $submissions) {
    // do your stuff
    return $generateText;
}, 10, 3);
```

## Parameters

- **$generateText** (string) Email Body Text
- **$submissions** (array) Submission Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\email\report\body.php

---

## fluentform/email_attachments

**Source:** [https://fluentforms.com/docs/fluentform_email_attachments/](https://fluentforms.com/docs/fluentform_email_attachments/)

## Description

This filter returns the email attachment. This lets you add your attachments to the email.

```
apply_filters('fluentform/email_attachments', $emailAttachments, $emailData, $formData, $entry, $form);
```

## Usage

```
add_filter('fluentform/email_attachments', function ($emailAttachments, $emailData, $formData, $entry, $form) {
    // do your stuff
    return $emailAttachments;
}, 10, 5);
```

## Parameters

- **$emailAttachments** (string) Email Header
- **$formData** (array) Form Data
- **$emailData** (array) Email Data
- **$entry** (array) Entry Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\classes\ResendNotificationHandler -> resendEntryEmail($entryId, $feed, $sendToType, $customRecipient, $form)

---

## fluentform/email_template_footer_text

**Source:** [https://fluentforms.com/docs/fluentform_email_template_footer_text/](https://fluentforms.com/docs/fluentform_email_template_footer_text/)

## Description

This filter returns the email footer text.

```
apply_filters('fluentform/email_template_footer_text', $footerText, $form, $notification);
```

## Usage

```
add_filter('fluentform/email_template_footer_text', function ($footerText, $form, notification) {
    // do your stuff
    return $footerText;
}, 10, 3);
```

## Parameters

- **$footerText** (string) Footer text
- **$notification** (array) Notification Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> getFooterText($form, $notification)

---

## fluentform/email_styles

**Source:** [https://fluentforms.com/docs/fluentform_email_styles/](https://fluentforms.com/docs/fluentform_email_styles/)

## Description

This filter returns the email CSS style. Hook into this to modify the CSS style of email.

```
apply_filters('fluentform/email_styles', $css, $form, $notification);
```

## Usage

```
add_filter('fluentform/email_styles', function ($css, $form, $notification) {
    // do your stuff
    return $css;
}, 10, 3);
```

## Parameters

- **$css** (string) Email Style CSS
- **$notification** (array) Notification Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> getEmailWithTemplate($emailBody, $form, $notification)

---

## fluentform/email_footer

**Source:** [https://fluentforms.com/docs/fluentform_email_footer/](https://fluentforms.com/docs/fluentform_email_footer/)

## Description

This filter returns the email footer.

```
apply_filters('fluentform/email_footer', $emailFooter, $form, $notification);
```

## Usage

```
add_filter('fluentform/email_footer', function ($emailFooter, $form, $notification) {
    // do your stuff
    return $emailFooter;
}, 10, 3);
```

## Parameters

- **$emailFooter** (string) Email Footer
- **$notification** (array) Notification Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> getEmailWithTemplate($emailBody, $form, $notification)

---

## fluentform/email_header

**Source:** [https://fluentforms.com/docs/fluentform_email_header/](https://fluentforms.com/docs/fluentform_email_header/)

## Description

This filter returns the email headers.

```
apply_filters('fluentform/email_header', '', $form, $notification);
```

## Usage

```
add_filter('fluentform/email_header', function ($emailHeader, $form, notification) {
    // do your stuff
    return $emailHeader;
}, 10, 3);
```

## Parameters

- **$emailHeader** (string) Email Header
- **$notification** (array) Notification Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> getEmailWithTemplate($emailBody, $form, $notification)

---

## fluentform/email_to

**Source:** [https://fluentforms.com/docs/fluentform_email_to/](https://fluentforms.com/docs/fluentform_email_to/)

## Description

This filter returns the destination email for emails. Multiple emails can be added by (,) comma separator.

```
apply_filters('fluentform/email_to', $address, $notification, $submittedData, $form);
```

## Usage

```
add_filter('fluentform/email_to', function ($address, $notification, $submittedData, $form) {
    // do your stuff
    return $address;
}, 10, 4);
```

## Parameters

- **$address** (string) Email
- **$notification** (array) Notification Data
- **$submittedData** (array) Submitted Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/email_body

**Source:** [https://fluentforms.com/docs/fluentform_email_body-2/](https://fluentforms.com/docs/fluentform_email_body-2/)

## Description

This filter returns the email body.

```
apply_filters('fluentform/email_body', $emailBody, $notification, $submittedData, $form);
```

## Usage

```
add_filter('fluentform/email_body', function ($emailBody, $notification, $submittedData, $form) {
    // do your stuff
    return $emailBody;
}, 10, 4);
```

## Parameters

- **$emailBody** (string) Email Body
- **$notification** (array) Notification Data
- **$submittedData** (array) Submitted Data
- **$form** (object) Form object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/email_subject

**Source:** [https://fluentforms.com/docs/fluentform_email_subject/](https://fluentforms.com/docs/fluentform_email_subject/)

## Description

This filter returns the email subject.

```
apply_filters('fluentform/email_subject', $notification['subject'], $notification, $submittedData, $form);
```

## Usage

```
add_filter('fluentform/email_subject', function ($subject, $notification, $submittedData, $form) {
    return $subject;
}, 10, 4);
```

## Parameters

- **$subject** (string) Subject
- **$notification**(array) Notification Data
- **$submittedData** (array) Submitted data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/submission_message_parse

**Source:** [https://fluentforms.com/docs/fluentform_submission_message_parse/](https://fluentforms.com/docs/fluentform_submission_message_parse/)

## Description

This filter parses the shortcode of the email body message. You can turn it off using this filter.

```
apply_filters('fluentform/submission_message_parse', $emailBody, $entryId, $submittedData, $form);
```

## Usage

```
add_filter('fluentform/submission_message_parse', function ($emailBody, $entryId, $submittedData, $form) {
    return $emailBody;
}, 10, 4);
```

## Parameters

- **$emailBody** (array) Email Body
- **$entryId** (int) Entry ID
- **$submittedData** (array) Submitted Data
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerServices -> getReturnData($insertId, $form, $formData)

---

## fluentform/send_plain_html_email

**Source:** [https://fluentforms.com/docs/fluentform_send_plain_html_email/](https://fluentforms.com/docs/fluentform_send_plain_html_email/)

## Description

This filter checks if the email will be sent as plain HTML.

```
apply_filters('fluentform/send_plain_html_email', $isSendAsPlain, $form, $notification);
```

## Usage

```
add_filter('fluentform/send_plain_html_email', function ($isSendAsPlain, $form, $notification) {
    return false;
}, 10, 3);
```

## Parameters

- **$isSendAsPlain** (boolean) Status
- **$form** (array) Field Object
- **$notification** (array) Notification Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/item_rules_{$item}

**Source:** [https://fluentforms.com/docs/fluentform_item_rules_item/](https://fluentforms.com/docs/fluentform_item_rules_item/)

## Description

This filter returns extracted validation rules from inputs.

```
apply_filters('fluentform/item_rules_' . $item['element'], $rules, $item);
```

## Usage

```
add_filter('fluentform/item_rules_' . $item['element'], function ($rules, $item) {
     return $rules;
 }, 10, 2);
```

## Parameters

- **$rules** (array) Value
- **$item** (array) Field Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> extractValidationRule($item)

---

## fluentform/validation_message_{$ruleName}

**Source:** [https://fluentforms.com/docs/fluentform_validation_message_rulename/](https://fluentforms.com/docs/fluentform_validation_message_rulename/)

## Description

This filter returns validation messages. Using this you can change the message of a specific rule.

```
apply_filters('fluentform/validation_message_'.$ruleName, $rule['message'], $item);
```

## Usage

```
add_filter('fluentform/validation_message_'.$ruleName, function ($message, $item) {
   //do your stuff
   return $message;
}, 10, 2);
```

## Parameters

- **$message** (string) Validation Message
- **$item**(array) Current Item

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> extractValidationRule($item)

---

## fluentform/rendering_field_html_{$element}

**Source:** [https://fluentforms.com/docs/fluentform_rendering_field_html_/](https://fluentforms.com/docs/fluentform_rendering_field_html_/)

## Description

This filter returns HTML output for each input of the form. It is used in all the input components. You can hook into this and modify the HTML output of any field using this filter.

```
apply_filters('fluentform/rendering_field_html_'.$elementName, $html, $data, $form);
```

## Usage

```
add_filter('fluentform/rendering_field_html_textarea', function ($html, $data, $form) {
    return $html;
}, 10, 3);
```

## Parameters

- **$html** (string) Html Data
- **$data** (array) Field Data
- **$form** (int) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *app/Services/FormBuilder/Components/*

---

## fluentform/settings_module_{$module}

**Source:** [https://fluentforms.com/docs/fluentform_settings_module_module/](https://fluentforms.com/docs/fluentform_settings_module_module/)

## Description

This filter returns a response for the extra settings component.

```
apply_filters('fluentform/settings_module_'.$module, $component, $formId);
```

## Usage

```
add_filter('fluentform/settings_module_'.$module, function ($component, $formId) {
    return $component;
}, 10, 2);
```

## Parameters

- **$component** (array) Value
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Form\Settings\ExtraSettings -> getExtraSettingsComponent()

---

## fluentform/response_render_{element}

**Source:** [https://fluentforms.com/docs/fluentform_response_render_element/](https://fluentforms.com/docs/fluentform_response_render_element/)

## Description

This filter returns response data for the form inputs. Using this filter you can change the format.

```
apply_filters('fluentform/response_render_' . $field['element'], $response->{$field_key}, $field, $formId, $isHtml);
```

## Usage

```
add_filter('fluentform/response_render_textarea', function ($value, $field, $formId, $isHtml) {
    if (!$isHtml || !$value) {
         return $value;
     }
    return '<span style="white-space: pre-line">' . $value . '</span>';
}, 10, 4);
```

## Parameters

- **$value** (array) Value
- **$field** (array) Field Data
- **$formId** (int) Form ID
- **$isHtml** (boolean) Is Html

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm/*app/Hooks/filters.php*

---

## fluentform/disable_attachment_delete

**Source:** [https://fluentforms.com/docs/fluentform_disable_attachment_delete/](https://fluentforms.com/docs/fluentform_disable_attachment_delete/)

## Description

This filter checks if the attachments should be deleted. You can toggle this using the filter.

```
apply_filters('fluentform/disable_attachment_delete', false, $formId);
```

## Usage

```
add_filter('fluentform/disable_attachment_delete', function($status, $formId) {
    return $status;
}, 10, 2);
```

## Parameters

- **$status** (boolean) Status
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Submission\SubmissionServices -> deleteFiles($submissionIds, $formId)

---

## fluentform/store_submission_note

**Source:** [https://fluentforms.com/docs/fluentform_add_response_note/](https://fluentforms.com/docs/fluentform_add_response_note/)

## Description

This filter returns a response note when adding a response note.

```
apply_filters('fluentform/store_submission_note', $response_note);
```

## Usage

```
add_filter('fluentform/store_submission_note', function($response_note) {
    return $response_note;
}, 10, 1);
```

## Parameters

- **$response_note** (array) Note Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Submission\SubmissionServices -> getNotes($submissionId, $attributes)

---

## fluentform/submission_notes

**Source:** [https://fluentforms.com/docs/fluentform_entry_notes/](https://fluentforms.com/docs/fluentform_entry_notes/)

## Description

This filter returns submission input notes.

```
apply_filters('fluentform/submission_notes', $notes, $entry_id, $formId);
```

## Usage

```
add_filter('fluentform/submission_notes', function($notes, $entry_id, $formId) {
    return $notes;
}, 10, 3);
```

## Parameters

- **$notes** (array) Entry Notes
- **$entry_id** (int) Entry ID
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Submission\SubmissionServices -> getNotes($submissionId, $attributes)

---

## fluentform/disabled_analytics

**Source:** [https://fluentforms.com/docs/fluentform-disabled_analytics/](https://fluentforms.com/docs/fluentform-disabled_analytics/)

## Description

This filter disables the form analytics. Using this filter you toggle the analytics.

```
apply_filters('fluentform/disabled_analytics', false);
```

## Usage

```
add_filter('fluentform/disabled_analytics', function($status) {
    return $status;
}, 10, 1);
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

---

## fluentform/submissions_widgets

**Source:** [https://fluentforms.com/docs/fluentform_single_entry_widgets/](https://fluentforms.com/docs/fluentform_single_entry_widgets/)

## Description

This filter is used to return single-entry widgets. Using this you can push your own widgets.

```
apply_filters('fluentform/submissions_widgets', [], $entryData, $submission);
```

## Usage

```
add_filter('fluentform/submissions_widgets', function($widgets, $data, $submission) {
    $widgetData = [
        'title' => __('My Widget', 'fluentform-pdf'),
        'type' => 'html_content'
    ];
    $widgetData['content'] = "My Content";
    $widgets['pdf_feeds'] = $widgetData;
    return $widgets;
}, 10, 2);
```

## Parameters

- **$widgets** (array) Widgets
- **$data** (object) Data
- **$submission** (array) Submission Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Submission\SubmissionServices -> resources($attributes)

---

## fluentform/form_fields_update

**Source:** [https://fluentforms.com/docs/fluentform_form_fields_update/](https://fluentforms.com/docs/fluentform_form_fields_update/)

## Description

This filter returns the field update data when updating the form.

```
apply_filters('fluentform/form_fields_update', $formFields, $formId);
```

## Usage

```
add_filter('fluentform/form_fields_update', function($formFields , $formId) {
    return $formFields;
},10,2);
```

## Parameters

- **$formFields** (array) Form Fields
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\Updater -> update($attributes = [])

---

## fluentform/create_default_settings

**Source:** [https://fluentforms.com/docs/fluentform_create_default_settings/](https://fluentforms.com/docs/fluentform_create_default_settings/)

## Description

This filter returns default settings when creating a form. You can hook into this and modify the default settings according to your preference.

```
apply_filters('fluentform/create_default_settings', $defaultSettings);
```

## Usage

```
add_filter('fluentform/create_default_settings', function($defaultSettings) {
    return $defaultSettings;
}, 10, 1);
```

## Parameters

- **$defaultSettings** (array) Default Settings

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Models\Form -> getFormsDefaultSettings($formId = false)

---

## fluentform/auto_read

**Source:** [https://fluentforms.com/docs/fluentform_auto_read/](https://fluentforms.com/docs/fluentform_auto_read/)

## Description

This filter checks if the entry should be marked auto as read.

```
apply_filters('fluentform/auto_read', true, $form)
```

## Usage

```
add_filter('fluentform_auto_read', function($status, $form) {
    return $status;
});
```

## Parameters

- **$status** (boolean) Auto Read Status
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in Fluentform\app\Modules\Entries\Entries -> _getEntry()

---

## fluentforms/recaptcha_v3_ref_score

**Source:** [https://fluentforms.com/docs/fluentforms_recaptcha_v3_ref_score/](https://fluentforms.com/docs/fluentforms_recaptcha_v3_ref_score/)

## Description

This filter returns the score for Recaptcha version 3. Use this filter to change the default value to 0.5.

```
apply_filters('fluentforms/recaptcha_v3_ref_score', 0.5);
```

## Usage

```
add_filter('fluentforms/recaptcha_v3_ref_score', function($score) {
    return $score;
});
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\ReCaptcha\ReCaptcha -> validate($token, $secret = null, $version = ‘ v2_visible’)

---

## fluentform/all_entry_labels_with_payment

**Source:** [https://fluentforms.com/docs/fluentform_all_entry_labels_with_payment/](https://fluentforms.com/docs/fluentform_all_entry_labels_with_payment/)

## Description

This filter returns the input labels for the payment form on the entries page.

```
apply_filters('fluentform/all_entry_labels_with_payment', $entries['formLabels'], false, $form);
```

## Usage

```
add_filter('fluentform/all_entry_labels_with_payment', function($formLabels , $formId) {
    return $formLabels;
}, 10, 2);
```

## Parameters

- **$formLabels** (array) Form Labels
- **$formID** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = [‘admin_label’, ‘raw’])

---

## fluentform/all_entry_labels

**Source:** [https://fluentforms.com/docs/fluentform_all_entry_labels/](https://fluentforms.com/docs/fluentform_all_entry_labels/)

## Description

This filter returns the input labels for the entries on the entries page.

```
apply_filters('fluentform/all_entry_labels', $formLabels, $formId);
```

## Usage

```
add_filter('fluentform/all_entry_labels', function($formLabels , $formId) {
    return $formLabels;
},10,2);
```

## Parameters

- **$formLabels** (array) Form Labels
- **$form**ID (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = [‘admin_label’, ‘raw’])

---

## fluentform/global_form_vars

**Source:** [https://fluentforms.com/docs/fluentform_global_form_vars/](https://fluentforms.com/docs/fluentform_global_form_vars/)

## Description

This filter returns the variables for localizing with fluent form script.

```
apply_filters('fluentform/entry_lists_labels', $globalVars);
```

## Usage

```
add_filter('fluentform/entry_lists_labels', function($globalVars) {
    return $globalVars;
}, 10, 1);
```

## Parameters

- **$globalVars** (array) Form Labels

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

---

## fluentform/step_string

**Source:** [https://fluentforms.com/docs/fluentform_step_string/](https://fluentforms.com/docs/fluentform_step_string/)

## Description

This filter returns the input labels for the entries on the entries page.

```
apply_filters('fluentform/step_string', $stepText);
```

## Usage

```
add_filter('fluentform/step_string', function($stepText) {
    return "Step " . $stepText;
}, 10, 1);
```

## Parameters

- **$stepText** (string)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> getEditorShortcodes()

---

## fluentform/all_entries

**Source:** [https://fluentforms.com/docs/fluentform_all_entries/](https://fluentforms.com/docs/fluentform_all_entries/)

## Description

This filter returns the input labels for the entries on the entries page.

```
apply_filters('fluentform/all_entries', $submissions),
```

## Usage

```
add_filter('fluentform/all_entries', function($submissions) {
    return $submissions;
});
```

## Parameters

- **$submissions** (array) Submission Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getEntries()

---

## fluentform/entry_lists_labels

**Source:** [https://fluentforms.com/docs/fluentform_entry_lists_labels/](https://fluentforms.com/docs/fluentform_entry_lists_labels/)

## Description

This filter returns the input labels for the entries on the entries page.

```
apply_filters('fluentform/entry_lists_labels', $formLabels, $form);
```

## Usage

```
add_filter('fluentform/entry_lists_labels', function($formLabels, $form) {
    return $formLabels;
}, 10, 2);
```

## Parameters

- **$formLabels** (array) Form Labels
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormService -> getInputsAndLabels($formId, $with = [‘admin_label’, ‘raw’])

---

## fluentform/shortcode_feed_text

**Source:** [https://fluentforms.com/docs/fluentform_shortcode_feed_text/](https://fluentforms.com/docs/fluentform_shortcode_feed_text/)

## Description

This filter returns the message for the feed data.

```
apply_filters('fluentform/shortcode_feed_text', $feedText, $form);
```

## Usage

```
add_filter('fluentform/shortcode_feed_text', function($feedText, $form) {
    return $feedText;
}, 10, 2);
```

## Parameters

- **$feedText** (string) Feed Text
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

---

## fluentform/export_data

**Source:** [https://fluentforms.com/docs/fluentform_export_data/](https://fluentforms.com/docs/fluentform_export_data/)

## Description

This filter is used during form export. Using this filter you hook into export data and change it.

```
apply_filters('fluentform/export_data', $data, $form, $exportData, $inputLabels);
```

## Usage

```
add_filter('fluentform/export_data', function($data, $form, $exportData, $inputLabels) {
    return $data;
}, 10, 4);
```

## Parameters

- **$data** (array) Default Values
- **$form** (object) Form Object
- **$exportData** (array) Export Data
- **$inputLabels** (array) Input Labels

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Submission -> index($args)

---

## fluentform/get_raw_responses

**Source:** [https://fluentforms.com/docs/fluentform_get_raw_responses/](https://fluentforms.com/docs/fluentform_get_raw_responses/)

## Description

This filter returns the raw response of fluent form entry.

```
apply_filters('fluentform/get_raw_responses', $responses, $this->formId);
```

## Usage

```
add_filter('fluentform/get_raw_responses', function($responses , $formId) {
    return $responses;
},10,2);
```

## Parameters

- **$responses** (array) Response Data
- **$formId** (array) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Models\Submission -> paginateEntries($attributes = [])

---

## fluentform/info_shortcode_defaults

**Source:** [https://fluentforms.com/docs/fluentform_info_shortcode_defaults/](https://fluentforms.com/docs/fluentform_info_shortcode_defaults/)

## Description

This filter sets the default values for the fluent form info helper shortcode.

```
apply_filters('fluentform/info_shortcode_defaults', $data , $atts);
```

## Usage

```
add_filter('fluentform/info_shortcode_defaults', function($data , $atts) {
    return $data;
}, 10, 2);
```

## Parameters

- **$**data(array) ShortCode Info
- **$atts** (array) Shortcode Attributes

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Modules\Component -> addFluentFormShortCode()

---

## fluentform/shortcode_defaults

**Source:** [https://fluentforms.com/docs/fluentform_shortcode_defaults/](https://fluentforms.com/docs/fluentform_shortcode_defaults/)

## Description

This filter sets the default values for the fluent form shortcode.

```
apply_filters('fluentform/shortcode_defaults', $defaults , $atts);
```

## Usage

```
add_filter('fluentform/shortcode_defaults', function($defaults, $atts) {
    return $defaults;
}, 10, 2);
```

## Parameters

- **$deafults** (array) Default Values
- **$atts** (array) Shortcode Attributes

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> addFluentFormShortCode()

---

## fluentform/integration_data_{$integrationKey}

**Source:** [https://fluentforms.com/docs/fluentform_integration_data_integrationkey/](https://fluentforms.com/docs/fluentform_integration_data_integrationkey/)

## Description

This filter returns the integration feed data. It is used in all the integration.

```
apply_filters('fluentform/integration_data_'.$this->integrationKey, $subscriber_details, $feed, $entry);
```

## Usage

```
add_filter('fluentform/integration_data_constatantcontact', function($subscriber_details, $feed, $entry){
    //do your stuff
    return $subscriber_details;
});
```

## Parameters

- **$subscriber_details** (array) Subscriber Data
- **$feed** (array) Feed Data
- **$entry** (array) Entry Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\Integrations\ActiveCampaign\Bootstrap -> notify($feed, $formData, $entry, $form)

This filter is located in FluentFormPro\src\Integrations\GoogleSheet\Bootstrap -> notify($feed, $formData, $entry, $form)

---

## fluentform/global_notification_feed_{$meta_key}

**Source:** [https://fluentforms.com/docs/fluentform_global_notification_feed_feed-meta_key/](https://fluentforms.com/docs/fluentform_global_notification_feed_feed-meta_key/)

## Description

This filter returns the global notification feed data.

```
apply_filters('fluentform/global_notification_feed_' . $meta_key, $feedData, $formId);
```

## Usage

```
add_filter('fluentform/global_notification_feed_' . $feed->meta_key, function ($feedData, $formId) {
    // Do your stuff here
    
    return $feedData;
}, 10, 2);
```

## Parameters

- **$status** (boolean) Status
- **$formID** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getNotificationFeeds($formId)

---

## fluentform/mailchimp_keep_existing_tags

**Source:** [https://fluentforms.com/docs/fluentform_mailchimp_keep_existing_tags/](https://fluentforms.com/docs/fluentform_mailchimp_keep_existing_tags/)

## Description

This filter checks if the MailChimp integration should keep existing tags.

```
apply_filters('fluentform/mailchimp_keep_existing_tags', true, $form->id);
```

## Usage

```
add_filter('fluentform/mailchimp_keep_existing_tags', '__return_false');
```

## Parameters

- **$status** (boolean) Status
- **$formID** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Integration\MailChimp\MailChimpSubscriber -> subscribe($feed, $formData, $entry, $form)

---

## fluentform/mailchimp_keep_existing_interests

**Source:** [https://fluentforms.com/docs/fluentform_mailchimp_keep_existing_interests/](https://fluentforms.com/docs/fluentform_mailchimp_keep_existing_interests/)

## Description

This filter checks if the MailChimp integration should keep existing interest.

```
apply_filters('fluentform/mailchimp_keep_existing_interests', true, $form->id);
```

## Usage

```
add_filter('fluentform/mailchimp_keep_existing_interests', '__return_false');
```

## Parameters

- **$status** (boolean) Status
- **$formID** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Integration\MailChimp\MailChimpSubscriber -> subscribe($feed, $formData, $entry, $form)

---

## fluentform/notifying_async_{$integrationKey}

**Source:** [https://fluentforms.com/docs/fluentform_notifying_async_integrationkey/](https://fluentforms.com/docs/fluentform_notifying_async_integrationkey/)

## Description

This filter checks if the integration is asynchronous or not. If you working on an integration you can return false to run the integration instantly.

```
apply_filters('fluentform/notifying_async_' . $integrationKey, true, $form->id)
```

## Usage

```
add_filter('fluentform/notifying_async_mailchimp', '__return_false');
```

## Parameters

- **$status** (boolean) Async Notification Status
- **$formID** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Hooks\Handlers\GlobalNotificationHandler -> globalNotify()

---

## fluentform/global_notification_active_types

**Source:** [https://fluentforms.com/docs/fluentform_global_notification_active_types/](https://fluentforms.com/docs/fluentform_global_notification_active_types/)

## Description

This filter returns the active feeds for the current form ID.

```
apply_filters('fluentform/global_notification_active_types', [], $form->id);
```

## Usage

```
add_filter('fluentform/global_notification_active_types', function ($types) {
     $types['notifications'] = 'email_notifications';
     return $types;
 });
```

## Parameters

- **$types** (array) Active Feeds

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Hooks\Handlers\GlobalNotificationHandler -> globalNotify()

---

## fluentform/global_integration_fields_{$settingsKey}

**Source:** [https://fluentforms.com/docs/fluentform_global_integration_fields_settingskey/](https://fluentforms.com/docs/fluentform_global_integration_fields_settingskey/)

## Description

This filter returns the integration fields for the global integration module using the key.

```
apply_filters('fluentform/global_integration_fields_' . $settingsKey, []);
```

## Usage

```
add_filter('fluentform/global_integration_fields_'.$settingsKey, function($settings){
  return $settings;
}, 10, 1);
```

## Parameters

- **$settings** (array) Field Settings

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *FluentForm/app/Services/Integrations/IntegrationManager* -> get($attr)

---

## fluentform/global_integration_settings_{$settingsKey}

**Source:** [https://fluentforms.com/docs/fluentform_global_integration_settings_settingskey/](https://fluentforms.com/docs/fluentform_global_integration_settings_settingskey/)

## Description

This filter is used in the integration manager to save integration settings using the integration key.

```
apply_filters('fluentform/global_integration_settings_' . $settingsKey, []);
```

## Usage

```
add_filter('fluentform/global_integration_settings_' . $this->integrationKey, function($settings){
    return $settings;
},10,1);
```

## Parameters

- **$settings** (array) Integration Settings

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Integration\GlobalIntegrationManager -> getGlobalSettingsAjax()

---

## fluentform/global_addons

**Source:** [https://fluentforms.com/docs/fluentform_global_addons/](https://fluentforms.com/docs/fluentform_global_addons/)

## Description

This filter returns the list of global add-on modules.

```
apply_filters('fluentform/global_addons', []);
```

## Usage

```
add_filter('fluentform/global_addons', function ($addons) use ($isEnabled) {
  $addons['zapier'] = [
    'title' => 'Title',
    'category' => 'crm',
    'description' => 'Description',
    'logo' => '',
    'enabled' => ($isEnabled) ? 'yes' : 'no'
  ];
  return $addons;
});
```

## Parameters

- **$addons** (array) Addon Modules

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Modules\AddOnModules -> showFluentAddOns()

---

## fluentform/addons_extra_menu

**Source:** [https://fluentforms.com/docs/fluentform_addons_extra_menu/](https://fluentforms.com/docs/fluentform_addons_extra_menu/)

## Description

This filter is used to return the addon menu list.

```
apply_filters('fluentform/addons_extra_menu', $extraMenus);
```

## Usage

```
add_filter('fluentform/addons_extra_menu', function ($menus) {
     $menus['fluentform_pdf'] = __('Fluent Forms PDF', 'fluentform');
     return $menus;
 }, 10, 1);
```

## Parameters

- **$menus** (array) Menu List

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Widgets\AddOnModule -> render()

---

## fluentform/editor_element_customization_settings

**Source:** [https://fluentforms.com/docs/fluent_editor_element_customization_settings/](https://fluentforms.com/docs/fluent_editor_element_customization_settings/)

## Description

This filter returns the input element settings components. Check the source file for details.

```
apply_filters('fluentform/editor_element_customization_settings', $element_customization_settings);
```

## Usage

```
add_filter('fluentform/editor_element_customization_settings', function ($settings) {
   // Do your stuff

   return $settings;
}, 10, 1);
```

## Parameters

- **$settings** (array) Element Settings

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\ElementCustomization.php

---

## fluentform/editor_countries

**Source:** [https://fluentforms.com/docs/fluent_editor_countries/](https://fluentforms.com/docs/fluent_editor_countries/)

## Description

This filter returns the country names for the country input dropdown.

```
apply_filters('fluentform/editor_countries', $country_names);
```

## Usage

```
add_filter('fluentform/editor_countries', function($country_names){
  return $country_names;
});
```

## Parameters

- **$country_names** (array) Country Names

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\CountryNames.php

---

## fluentform/editor_components

**Source:** [https://fluentforms.com/docs/fluent_editor_components/](https://fluentforms.com/docs/fluent_editor_components/)

## Description

This filter pushes input editor components into the editor.

```
apply_filters('fluentform/editor_components', $editorComponents, $formId);
```

## Usage

```
add_filter('fluentform/editor_components', function ($components, $formId) {
    $component = $this->getComponent();

    if ($component) {
        $components['advanced][] = $component;
    }

    return $components;
}, 10, 2);
```

## Parameters

- **$components** (array) Components

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> index()

---

## fluentform/editor_element_settings_placement

**Source:** [https://fluentforms.com/docs/fluent_editor_element_settings_placement/](https://fluentforms.com/docs/fluent_editor_element_settings_placement/)

## Description

This filter returns the editor element settings for each input. Using this filter you can insert more editor settings for input in the editor.

```
apply_filters('fluentform/editor_element_settings_placement', $placements , $form);
```

## Usage

```
add_filter('fluentform/editor_element_settings_placement', function ($placements, $form) {
     $placements['terms_and_condition']['generalExtras'] = [
         'tc_agree_text'      => [
             'template' => 'inputText',
             'label'    => 'Agree Button Text',
         ],
         'tc_dis_agree_text' => [
             'template' => 'inputText',
             'label'    => 'Disagree Button Text',
         ]
     ];
     return $placements;
 }, 10, 2);
```

## Parameters

- **$placements** (array) Placements settings
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

---

## fluentform/editor_validation_rule_settings

**Source:** [https://fluentforms.com/docs/fluent_editor_validation_rule_settings/](https://fluentforms.com/docs/fluent_editor_validation_rule_settings/)

## Description

This filter returns the validation rules settings. Using this filter you can modify the validation rules.

```
apply_filters('fluentform/editor_validation_rule_settings', $validation_rule_settings);
```

## Usage

```
add_filter('fluentform/editor_validation_rule_settings', function($validation_rule_settings){
  return $validation_rule_settings;
}, 10, 1);
```

```
$validation_rule_settings = [
    'required' => [
        'template'  => 'inputRadio',
        'label'     => __('Required', 'fluentform'),
        'help_text' => __('Select whether this field is a required field for the form or not.', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'valid_phone_number' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate Phone Number', 'fluentform'),
        'help_text' => __('Select whether the phone number should be validated or not.', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'email' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate Email', 'fluentform'),
        'help_text' => __('Select whether to validate this field as email or not', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'url' => [
        'template'  => 'inputRadio',
        'label'     => __('Validate URL', 'fluentform'),
        'help_text' => __('Select whether to validate this field as URL or not', 'fluentform'),
        'options'   => [
            [
                'value' => true,
                'label' => __('Yes', 'fluentform'),
            ],
            [
                'value' => false,
                'label' => __('No', 'fluentform'),
            ],
        ],
    ],
    'min' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Min Value', 'fluentform'),
        'help_text' => __('Minimum value for the input field.', 'fluentform'),
    ],
    'digits' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Digits', 'fluentform'),
        'help_text' => __('Number of digits for the input field.', 'fluentform'),
    ],
    'max' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Max Value', 'fluentform'),
        'help_text' => __('Maximum value for the input field.', 'fluentform'),
    ],
    'max_file_size' => [
        'template'  => 'maxFileSize',
        'label'     => __('Max File Size', 'fluentform'),
        'help_text' => __('The file size limit uploaded by the user.', 'fluentform'),
    ],
    'max_file_count' => [
        'template'  => 'inputText',
        'type'      => 'number',
        'label'     => __('Max Files Count', 'fluentform'),
        'help_text' => __('Maximum user file upload number.', 'fluentform'),
    ],
    'allowed_file_types' => [
        'template'  => 'inputCheckbox',
        'label'     => __('Allowed Files', 'fluentform'),
        'help_text' => __('Allowed Files', 'fluentform'),
        'fileTypes' => [
            [
                'title' => __('Images', 'fluentform'),
                'types' => ['jpg', 'jpeg', 'gif', 'png', 'bmp'],
            ],
            [
                'title' => __('Audio', 'fluentform'),
                'types' => ['mp3', 'wav', 'ogg', 'oga', 'wma', 'mka', 'm4a', 'ra', 'mid', 'midi'],
            ],
            [
                'title' => __('Video', 'fluentform'),
                'types' => [
                    'avi',
                    'divx',
                    'flv',
                    'mov',
                    'ogv',
                    'mkv',
                    'mp4',
                    'm4v',
                    'divx',
                    'mpg',
                    'mpeg',
                    'mpe',
                ],
            ],
            [
                'title' => __('PDF', 'fluentform'),
                'types' => ['pdf'],
            ],
            [
                'title' => __('Docs', 'fluentform'),
                'types' => [
                    'doc',
                    'ppt',
                    'pps',
                    'xls',
                    'mdb',
                    'docx',
                    'xlsx',
                    'pptx',
                    'odt',
                    'odp',
                    'ods',
                    'odg',
                    'odc',
                    'odb',
                    'odf',
                    'rtf',
                    'txt',
                ],
            ],
            [
                'title' => __('Zip Archives', 'fluentform'),
                'types' => ['zip', 'gz', 'gzip', 'rar', '7z', ],
            ],
            [
                'title' => __('Executable Files', 'fluentform'),
                'types' => ['exe'],
            ],
            [
                'title' => __('CSV', 'fluentform'),
                'types' => ['csv'],
            ],
        ],
        'options' => $fileTypeOptions,
    ],
    'allowed_image_types' => [
        'template'  => 'inputCheckbox',
        'label'     => __('Allowed Images', 'fluentform'),
        'help_text' => __('Allowed Images', 'fluentform'),
        'fileTypes' => [
            [
                'title' => __('JPG', 'fluentform'),
                'types' => ['jpg|jpeg', ],
            ],
            [
                'title' => __('PNG', 'fluentform'),
                'types' => ['png'],
            ],
            [
                'title' => __('GIF', 'fluentform'),
                'types' => ['gif'],
            ],
        ],
        'options' => [
            [
                'label' => __('JPG', 'fluentform'),
                'value' => 'jpg|jpeg',
            ],
            [
                'label' => __('PNG', 'fluentform'),
                'value' => 'png',
            ],
            [
                'label' => __('GIF', 'fluentform'),
                'value' => 'gif',
            ],
        ],
    ],
];
```

## Parameters

- **$validation_rule_settings** (array) Validation Rules

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\ValidationRuleSettings

---

## fluentform/editor_init_element_{$element}

**Source:** [https://fluentforms.com/docs/fluentform_editor_init_element_element/](https://fluentforms.com/docs/fluentform_editor_init_element_element/)

## Description

This filter is called before initializing each input element in the form editor page. Using this filter you can modify the input item settings data.

```
apply_filters('fluentform/editor_init_element_' . $formField['element'], $formField, $form);
```

## Usage

```
add_filter('fluentform/editor_init_element_container', function ($item, $form) {
     if (!isset($item['settings']['container_class'])) {
         $item['settings']['container_class'] = '';
     }
     return $item;
 }, 10, 2);
```

```
add_filter('fluentform/editor_init_element_input_text', function ($element, $form) {
    if (!isset($element['attributes']['maxlength'])) {
        $element['attributes']['maxlength'] = '';
    }
    
    return $element;
}, 10, 2);
```

```
add_filter('fluentform/editor_init_element_input_number', function ($item, $form) {
    if (!isset($item['settings']['number_step'])) {
        $item['settings']['number_step'] = '';
    }
    if (!isset($item['settings']['numeric_formatter'])) {
        $item['settings']['numeric_formatter'] = '';
    }
    if (!isset($item['settings']['prefix_label'])) {
        $item['settings']['prefix_label'] = '';
    }
    if (!isset($item['settings']['suffix_label'])) {
        $item['settings']['suffix_label'] = '';
    }

    return $item;
}, 10, 2);
```

## Parameters

- **$**formField (array) Form Field
- **$form** (object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Registerer\Menu -> enqueueEditorAssets()

---

## fluentform/nonce_error

**Source:** [https://fluentforms.com/docs/fluentform_nonce_error-2/](https://fluentforms.com/docs/fluentform_nonce_error-2/)

## Description

This filter returns the nonce error message. Use this to change the error message.

```
apply_filters('fluentform/nonce_error', __('Nonce verification failed, please try again.', 'fluentform'));
```

## Usage

```
add_filter('fluentform/nonce_error', function($errorMessage){
  $errorMessage = 'Nonce verification failed, please try again.';
  return $errorMessage;
}, 10, 1);
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateNonce()

---

## fluentform/permission_callback

**Source:** [https://fluentforms.com/docs/fluentform_permission_callback/](https://fluentforms.com/docs/fluentform_permission_callback/)

## Description

This filter checks the permission callback status. You can check the current permission and change the permission status.

```
apply_filters('fluentform/permission_callback', false, $permission, $formId);
```

## Usage

```
add_filter('fluentform/permission_callback', function($status, $permission){
  return false;
}, 10, 2);
```

## Parameters

- **$status** (boolean) Status
- **$permission** (string) Permission Name

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Hooks\filters.php

---

## fluentform/verify_user_permission_{ $eachPermission}

**Source:** [https://fluentforms.com/docs/fluentform_verify_user_permission_-eachpermission/](https://fluentforms.com/docs/fluentform_verify_user_permission_-eachpermission/)

## Description

This filter verifies each permission. You can hook into specific permission and return false.

```
apply_filters('fluentform/verify_user_permission_' . $eachPermission, $allowed, $formId);
```

## Usage

```
add_filter('fluentform/verify_user_permission_'.$permission, function ($allowed, $formId) {
     return $allowed;
 }, 10, 2);
```

## Parameters

- **$allowed** (boolean) Status
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Acl -> hasPermission($permissions, $formId = false)

---

## fluentform/truncate_password_values

**Source:** [https://fluentforms.com/docs/fluentform_truncate_password_values/](https://fluentforms.com/docs/fluentform_truncate_password_values/)

## Description

This filter checks whether the password input should be truncated or not.

```
apply_filters('fluentform/truncate_password_values', true, $formId);
```

## Usage

```
add_filter('fluentform/truncate_password_values', function($status, $formId){
  if ($formId == 5) {
    $status = false;
  }
  return $status;
}, 10, 2);
```

## Parameters

- **$status** (boolean) Status
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Helpers\Helper -> shouldHidePassword($formId)

---

## fluentform/api_failed_log

**Source:** [https://fluentforms.com/docs/fluentform_api_failed_log/](https://fluentforms.com/docs/fluentform_api_failed_log/)

## Description

This filter checks the development environment status for logging failed API calls.

```
apply_filters('fluentform/api_failed_log', $isDev, $form, $feed)
```

## Usage

```
add_filter('fluentform/api_failed_log', function($isDev, $form, $feed){
  return $isDev;
}, 10, 3);
```

## Parameters

- **$isDev** (array) Date formats
- **$form** (object) Form Object
- **$feed** (array) Form Feed Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Hooks\actions.php

---

## fluentform/api_success_log

**Source:** [https://fluentforms.com/docs/fluentform_api_success_log/](https://fluentforms.com/docs/fluentform_api_success_log/)

## Description

This filter checks the development environment status for logging the API calls.

```
apply_filters('fluentform/api_success_log', $isDev, $form, $feed)
```

## Usage

```
add_filter('fluentform/api_success_log', function($isDev, $form, $feed){
  return $isDev;
}, 10, 3);
```

## Parameters

- **$isDev** (array) Date formats
- **$form** (object) Form Object
- **$feed** (array) Form Feed

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Hooks\actions.php

---

## fluentform/api_all_logs

**Source:** [https://fluentforms.com/docs/fluentform_api_all_logs/](https://fluentforms.com/docs/fluentform_api_all_logs/)

## Description

This filter is used during data logging. You can use this filter to access the logs.

```
apply_filters('fluentform/api_all_logs', $logs);
```

## Usage

```
add_filter('fluentform/api_all_logs', function($logs){
  return $logs;
}, 10, 1);
```

## Parameters

- **$logs** (array) Logs

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Logger\DataLogger -> getApiLogs()

---

## fluentform/permission_set

**Source:** [https://fluentforms.com/docs/fluentform_permission_set/](https://fluentforms.com/docs/fluentform_permission_set/)

## Description

This filter returns permission sets for fluent forms. You can add or modify permission sets using this filter.

```
apply_filters('fluentform/permission_set', $permissionSet);
```

## Usage

```
add_filter('fluentform/permission_set', function ($permissionSet) {
     return $permissionSet;
 });
```

## Parameters

- **$permissionSet** (array) Permission Sets

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Acl -> getPermissionSet()

---

## fluentform/available_date_formats

**Source:** [https://fluentforms.com/docs/fluentform-available_date_formats/](https://fluentforms.com/docs/fluentform-available_date_formats/)

## Description

This filter returns date formats for the date field.  You can add more formats using this filter.

```
apply_filters('fluentform/available_date_formats', $formats);
```

## Usage

```
add_filter('fluentform/available_date_formats', function($formats){
  return $formats;
}, 10, 2);
```

## Parameters

- **$formats** (array) Date formats

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *app/Services/FormBuilder/Components/DateTime.php*

---

## fluentform/single_response_data

**Source:** [https://fluentforms.com/docs/fluentform_single_response_data/](https://fluentforms.com/docs/fluentform_single_response_data/)

## Description

This filter returns single entry data. You can use this to modify how the data will be shown.

```
apply_filters('fluentform/single_response_data', $submission, $formId);
```

## Usage

```
add_filter('fluentform/single_response_data', function($submission , $formId){
   
  //do your stuff
  return $submission;
}, 10, 2);
```

## Parameters

- **$submission**  (array) Submission Data
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentFormPro\src\classes\StepFormEntries -> getstepFormEntry()

---

## fluentform/is_admin_page

**Source:** [https://fluentforms.com/docs/fluentform_is_admin_page/](https://fluentforms.com/docs/fluentform_is_admin_page/)

## Description

This filter checks if the current page is an admin page.

```
apply_filters('fluentform/is_admin_page', $status);
```

## Usage

```
add_filter('fluentform/is_admin_page', function($status){
  return $status;
}, 10, 1);
```

## Parameters

- **$status** (boolean) Status

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Helpers\Helper -> isFluentAdminPage()

---

## fluentform/dashboard_notices

**Source:** [https://fluentforms.com/docs/fluentform_dashboard_notices/](https://fluentforms.com/docs/fluentform_dashboard_notices/)

## Description

This filter returns dashboard notices.

```
apply_filters('fluentform/dashboard_notices', $arrray);
```

## Usage

```
add_filter('fluentform/dashboard_notices', function($array) {
  return $array;
}, 10, 1);
```

## Parameters

- **$array**  (array) Notices

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\views\admin\all_entries.php

---

## fluentform/honeypot_status

**Source:** [https://fluentforms.com/docs/fluentform_honeypot_status/](https://fluentforms.com/docs/fluentform_honeypot_status/)

## Description

This filter returns Honeypot’s active status.

```
apply_filters('fluentform/honeypot_status', $status, $formId);
```

## Usage

```
add_filter('fluentform/honeypot_status', function($status , $formId){
     return status;
 }, 10, 2);
```

## Parameters

- **$status**  (boolean) Honeypot’s Active status
- **$formId** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Form\Honeypot -> isEnabled($formId = false)

---

## fluentform/will_return_html

**Source:** [https://fluentforms.com/docs/ff_will_return_html/](https://fluentforms.com/docs/ff_will_return_html/)

## Description

```
apply_filters('fluentform/will_return_html', false, $provider, $key);
```

## Usage

```
add_filter('fluentform/will_return_html', function ($status, $provider, $key) {
     // Do your stuff

     return status;
 }, 10, 3);
```

## Parameters

- **$status**  (boolean)
- **$provider** (array)
- **$key** (string)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder -> buildFormBody($form)

---

## fluentform/akismet_fields

**Source:** [https://fluentforms.com/docs/fluentform_akismet_fields/](https://fluentforms.com/docs/fluentform_akismet_fields/)

## Description

This filter is used in the Akismet handler.

```
apply_filters('fluentform/akismet_fields', $info, $data, $form);
```

## Usage

```
add_filter('fluentform/akismet_fields', function ($info, $data, $form) {
     //do your stuff
     return $info;
 }, 10, 3);
```

## Parameters

- **$info** (array) Akismet Data
- **$data** (array) Form Data
- **$form**  (Object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\AkismetHandler -> getAkismetFields($data, $form)

---

## fluentform/numeric_styles

**Source:** [https://fluentforms.com/docs/fluentform_numeric_styles/](https://fluentforms.com/docs/fluentform_numeric_styles/)

## Description

This filter returns numeric fields and numeric style options. You can modify or add more numeric formatting options using this hook.

```
apply_filters('fluentform/numeric_styles', $styles);
```

## Usage

```
add_filter('fluentform/numeric_styles', function ($styles) {
     //do your stuff

     return $styles;
 }, 10, 2);
```

## Parameters

- **$styles** (array) Formatting options

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Helpers\Helper -> getNumericFormatters()

---

## fluentform/nonce_error

**Source:** [https://fluentforms.com/docs/fluentform_nonce_error/](https://fluentforms.com/docs/fluentform_nonce_error/)

## Description

This filter returns the nonce error message. You can modify the error message using this filter.

```
apply_filters('fluentform/nonce_error', $errorMessage);
```

## Usage

```
add_filter('fluentform/nonce_error', function ($errorMessage) {
     $errorMessage = [
         '_fluentformnonce' => ['Nonce verification failed, please try again.']
     ];
     return $errorMessage;
 }, 10, 1);
```

## Parameters

- **$errorMessage** (array) Error Message

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in *app/Modules/Form/FormHandler.php*

---

## fluentform/nonce_verify

**Source:** [https://fluentforms.com/docs/fluentform_nonce_verify/](https://fluentforms.com/docs/fluentform_nonce_verify/)

## Description

This filter checks nonce verification status. By default, it is turned off for front-end submission. You can just return true to turn it on.

```
apply_filters('fluentform/nonce_verify', false, $formId);
```

## Usage

```
add_filter('fluentform/nonce_verify', function($status , $form_id){
  // Do your stuff

  return status;
}, 10, 2);
```

## Parameters

- **$status**  (boolean) Status
- **$form_id** (int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\Form\FormValidationService -> validateNonce()

---

## fluentform/entry_statuses_core

**Source:** [https://fluentforms.com/docs/fluentform_entry_statuses_core/](https://fluentforms.com/docs/fluentform_entry_statuses_core/)

## Description

This filter returns entry statuses. You can modify or add more entry statuses using this filter.

```
apply_filters('fluentform/entry_statuses_core', $statuses , $form_id);
```

## Usage

```
add_filter('fluentform/entry_statuses_core', function($statuses, $form_id){
   
    $statuses = [
        'unread' => 'Unread',
        'read'   => 'Read'
    ];

  return $statuses;

}, 10, 2);
```

## Parameters

- **$statuses** (array) Entry Statuses
- **$form_id**(int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Helpers\Helper -> getEntryStatuses($form_id = false)

---

## fluentform/payment_smartcode

**Source:** [https://fluentforms.com/docs/fluentform_payment_smartcode/](https://fluentforms.com/docs/fluentform_payment_smartcode/)

## Description

This filter is available before rendering the payment shortcodes.

```
apply_filters('fluentform/payment_smartcode', $value, $property, self::getInstance());
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/payment_smartcode', function($value, $property, $instance){
   return $property;
}, 10, 1);
```

## Parameters

- **$value** (string) Form Data
- **$property** (array) Substring after {payment.
- **$instance** (Object) Shortcode Parser Instance

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\ShortcodeParser -> parseShortCodeFromString($parsable, $isUrl = false, $isHtml = false)

---

## fluentform/smartcode_group_{$group}

**Source:** [https://fluentforms.com/docs/fluentform_smartcode_group_group/](https://fluentforms.com/docs/fluentform_smartcode_group_group/)

## Description

This filter is available just before rendering the form. You can use this filter to modify the form object.

```
apply_filters('fluentform/smartcode_group_'.$group, $property, self::getInstance());
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/smartcode_group_'.$group, function($property, $instance){
   //do your stuff
   return $property;
}, 10, 2);
```

## Parameters

- **$property**  (string)  SmartCode Name
- **$**instance (object) Shortcode Parser Instance

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

---

## fluentform/all_editor_shortcodes

**Source:** [https://fluentforms.com/docs/fluentform_all_editor_shortcodes/](https://fluentforms.com/docs/fluentform_all_editor_shortcodes/)

## Description

This filter returns all editor shortcodes.

```
apply_filters('fluentform/all_editor_shortcodes', $shortcodes);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/all_editor_shortcodes', function ($editorShortCodes, $form) {
    // Do your stuff here
    
    return $editorShortCodes;
}, 10, 2);
```

## Parameters

- **$shortcodes**  (array) Shortcodes
- **$form**  (Object) Form Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\boot\globals.php -> fluentFormGetAllEditorShortCodes($form)

---

## fluentform/shortcode_parser_callback_{smart_code_name}

**Source:** [https://fluentforms.com/docs/fluentform_shortcode_parser_callback_smart_code_name/](https://fluentforms.com/docs/fluentform_shortcode_parser_callback_smart_code_name/)

## Description

You can use this filter to return data for your custom shortcode. In this case, a custom shortcode first needs to be added using the fluentform/all_editor_shortcodes filter.

```
apply_filters('fluentform/shortcode_parser_callback_'.$smart_code_name, $value, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/editor_shortcode_callback_my_own_smartcode', function ($value, $form) {
       $dynamicValue = $form->title; // We are send current form title. You can fetch any data and return
       return $dynamicValue;
}, 10, 2);
```

## Parameters

- **$value** (String) Smartcode Name
- **$form** (Object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder -> getOtherData($key)

---

## fluentform/editor_shortcodes

**Source:** [https://fluentforms.com/docs/fluentform_editor_shortcodes/](https://fluentforms.com/docs/fluentform_editor_shortcodes/)

## Description

This filter returns the editor shortcodes.

```
apply_filters('fluentform/editor_shortcodes',$shortCodes);
```

## Usage

```
add_filter('fluentform/editor_shortcodes', function($shortCodes){
   return $shortCodes;
}, 10, 1);
```

```
[
    'title'      => 'General SmartCodes',
    'shortcodes' => [
        '{wp.admin_email}'            => __('Admin Email', 'fluentform'),
        '{wp.site_url}'               => __('Site URL', 'fluentform'),
        '{wp.site_title}'             => __('Site Title', 'fluentform'),
        '{ip}'                        => __('IP Address', 'fluentform'),
        '{date.m/d/Y}'                => __('Date (mm/dd/yyyy)', 'fluentform'),
        '{date.d/m/Y}'                => __('Date (dd/mm/yyyy)', 'fluentform'),
        '{embed_post.ID}'             => __('Embedded Post/Page ID', 'fluentform'),
        '{embed_post.post_title}'     => __('Embedded Post/Page Title', 'fluentform'),
        '{embed_post.permalink}'      => __('Embedded URL', 'fluentform'),
        '{http_referer}'              => __('HTTP Referer URL', 'fluentform'),
        '{user.ID}'                   => __('User ID', 'fluentform'),
        '{user.display_name}'         => __('User Display Name', 'fluentform'),
        '{user.first_name}'           => __('User First Name', 'fluentform'),
        '{user.last_name}'            => __('User Last Name', 'fluentform'),
        '{user.user_email}'           => __('User Email', 'fluentform'),
        '{user.user_login}'           => __('User Username', 'fluentform'),
        '{browser.name}'              => __('User Browser Client', 'fluentform'),
        '{browser.platform}'          => __('User Operating System', 'fluentform'),
        '{random_string.your_prefix}' => __('Random String with Prefix', 'fluentform'),
    ],
];
```

## Parameters

- **$shortCodes**  (array) Shortcodes

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\boot\globals.php -> fluentFormEditorShortCodes()

---

## fluentform/html_attributes

**Source:** [https://fluentforms.com/docs/fluent_form_html_attributes/](https://fluentforms.com/docs/fluent_form_html_attributes/)

## Description

This filter is available just before rendering the form. You can use this filter to modify the form attributes.

```
apply_filters('fluentform/html_attributes',$attr, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/html_attributes', function($attr, $form){
   return $attr;
}, 10, 2);
```

## Parameters

- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$attr** (array) Form Attributes

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> build($form, $extraCssClass = ”, $instanceCssClass = ”, $atts = [])

---

## fluentform/form_class

**Source:** [https://fluentforms.com/docs/fluentform_form_class/](https://fluentforms.com/docs/fluentform_form_class/)

## Description

This filter is available before rendering the form. You can add custom classes using this filter.

```
apply_filters('fluentform/form_class', $formClass, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/form_class', function($formClass, $form){
   return $formClass;
}, 10, 2);
```

## Parameters

- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$formClass** (string) Form Class

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\FormBuilder -> build($form, $extraCssClass = ”, $instanceCssClass = ”, $atts = [])

---

## fluentform/is_hide_submit_btn_{ $formId}

**Source:** [https://fluentforms.com/docs/fluentform_is_hide_submit_btn_-formid/](https://fluentforms.com/docs/fluentform_is_hide_submit_btn_-formid/)

## Description

This filter is available just before rendering the submit button. You can use this filter to hide the submit button.

```
apply_filters('fluentform/is_hide_submit_btn_'.$form->id, false);
```

## Usage

```
add_filter('fluentform/is_hide_submit_btn_10','__return_true');
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\Components\SubmitButton -> compile($data, $form)

---

## fluentform/load_default_public

**Source:** [https://fluentforms.com/docs/fluentform_load_default_public/](https://fluentforms.com/docs/fluentform_load_default_public/)

## Description

This filter is available before loading fluent form public style. You can use this filter to stop loading the default public CSS.

```
apply_filters('fluentform/load_default_public', true, $form)
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/load_default_public', function($status, $form){
   return $status;
}, 10, 2);
```

## Parameters

- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$status** (boolean) Status

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> renderForm($atts)

---

## fluentform/load_styles

**Source:** [https://fluentforms.com/docs/fluentform_load_styles/](https://fluentforms.com/docs/fluentform_load_styles/)

## Description

This filter is available before loading fluent form styles.

```
apply_filters('fluentform/load_styles', false, $post);
```

## Usage

```
add_filter('fluentform/load_styles', function($status, $form){
   return true;
}, 10, 2);
```

## Parameters

- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$status** (boolean) Status

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Component\Component -> maybeLoadFluentFormStyles()

---

## fluentform/skip_no_conflict

**Source:** [https://fluentforms.com/docs/fluentform_skip_no_conflict/](https://fluentforms.com/docs/fluentform_skip_no_conflict/)

## Description

This filter checks if the no conflict mode is enabled.

```
apply_filters('fluentform/skip_no_conflict', $isSkip);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/skip_no_conflict', function($isSkip){
   return $isSkip;
}, 10, 1);
```

## Parameters

- **$isSkip** (boolean) No conflict mode Status

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Hooks\actions.php

---

## fluentform/rendering_field_html_{$elementName}

**Source:** [https://fluentforms.com/docs/fluentform_rendering_field_html_elementname/](https://fluentforms.com/docs/fluentform_rendering_field_html_elementname/)

## Description

This filter is available before rendering the form fields. You can use this filter to modify the form fields.

```
apply_filters('fluentform/rendering_field_html_'.$elementName, $html, $data, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/rendering_field_html_input_email', function($html, $data, $form){
   return $html;
}, 10, 3);
```

## Parameters

- **$html**  (string) HTML output of field
- **$data** (array) Form Field Element
- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

---

## fluentform/before_render_item

**Source:** [https://fluentforms.com/docs/fluentform_before_render_item/](https://fluentforms.com/docs/fluentform_before_render_item/)

## Description

This filter is available before rendering each form item. You can use this filter to modify the form inputs.

```
apply_filters('fluentform/before_render_item', $item, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/before_render_item', function($item, $form){
   return $item;
}, 10, 2);
```

## Parameters

- **$form**  (object) The [$form Object](https://fluentforms.com/docs/form-object/)
- $item (array) Input Item

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\FormBuilder -> buildFormBody($form)

---

## fluentform/honeypot_name

**Source:** [https://fluentforms.com/docs/fluentform_honeypot_name/](https://fluentforms.com/docs/fluentform_honeypot_name/)

## Description

This filter is available just before rendering the form. You can use this filter to modify the form object.

```
apply_filters('fluentform/honeypot_name', $name, $formId);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/honeypot_name', function($name, $formId){
    return $name;
});
```

## Parameters

**$name**(string) Honeypot Field Name
**$formId**(int) Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Modules\Form\HoneyPot -> getFieldName($formId)

---

## fluentform/validation_errors

**Source:** [https://fluentforms.com/docs/fluentform_validation_errors/](https://fluentforms.com/docs/fluentform_validation_errors/)

## Description

This filter is available before showing validation errors.

```
apply_filters('fluentform/validation_errors', $errors, $formData, $form, $fields);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/validation_errors', function($errors, $formData, $form, $fields){
   return $errors;
}, 10, 4);
```

## Parameters

- **$form**  (Object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$errors** (array) Errors
- **$formData** (array) Form Data Array
- **$fields** (array) Form Fields

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateSubmission(&$fields, &$formData)

---

## fluentform/is_handling_submission

**Source:** [https://fluentforms.com/docs/fluentform_is_handling_submission/](https://fluentforms.com/docs/fluentform_is_handling_submission/)

## Description

This filter checks if the form is currently handling submission.

```
apply_filters('fluentform/is_handling_submission', $status);
```

## Usage

```
add_filter('fluentform/is_handling_submission', function($status){
   return $status;
}, 10, 1);
```

## Parameters

- **$status**  (boolean) Status

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\boot\globals.php -> fluentFormIsHandlingSubmission()

---

## fluentform/is_form_renderable

**Source:** [https://fluentforms.com/docs/fluentform_is_form_renderable/](https://fluentforms.com/docs/fluentform_is_form_renderable/)

## Description

This filter checks if the form is ready to render, if some condition is not met, then this filter is used to stop rendering the form.

```
apply_filters('fluentform/is_form_renderable', $isRenderable, $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/is_form_renderable', function($isRenderable, $form){
   return $isRenderable;
}, 10, 2);
```

## Parameters

- **$isRenderable** (array) Render Settings
- **$form** (object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\FormValidationService -> validateRestrictions(&$fields)

---

## fluentform/rendering_form

**Source:** [https://fluentforms.com/docs/fluentform_rendering_form/](https://fluentforms.com/docs/fluentform_rendering_form/)

## Description

This filter is available just before rendering the form. You can use this filter to modify the form object.

```
apply_filters('fluentform/rendering_form', $form);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/rendering_form', function($form){
   return $form;
}, 10, 1);
```

## Parameters

- **$form**  (Object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Modules\Component\Component -> renderForm($atts)

---

## fluentform/filter_email_attachments

**Source:** [https://fluentforms.com/docs/fluentform_filter_email_attachments/](https://fluentforms.com/docs/fluentform_filter_email_attachments/)

### Description

This filter gives the option to add your own attachment with the email. It is called before sending an email notification.

### Usage

Here is an example:

```
add_filter('fluentform/filter_email_attachments', function($emailAttachments, $notification,$form, $submittedData){
    
    $target_form_id = 29; 
    if($form->id != $target_form_id){
	return;
    }

    $media_id = 144;
    $emailAttachments[] = get_attached_file($media_id);

    //or pass the exact file location like this 
    //$emailAttachments[] = '/doc/wp/wp-content/uploads/%c3%a4-%c3%bc%c3%9f-etc_531_171.pdf';
	
    return $emailAttachments;

}, 10, 4);
```

### Parameters

- **$emailAttachments** (Array) Attachments

- **$notification** (Array) Notification settings data

- **$submittedData** (Array) Submitted form data

- **$form** (Object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme. You can also use snippet plugins to add functions if you do not want to modify the function.php file.

## Source Code

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/rendering_field_data_select

**Source:** [https://fluentforms.com/docs/fluenform_rendering_field_data_select/](https://fluentforms.com/docs/fluenform_rendering_field_data_select/)

## Description

To populate the dropdown filter with your own custom values use this filter. For example post types, user name.

```
$data = apply_filters('fluentform/rendering_field_data_select', $data, $form);
```

## Usage

The following code will add two new options to your dropdown field. Here we have used the dropdown input name attribute as ‘dynamic_dropdown’, make sure it matches your attribute name.  This snippet will run for the form id with 91.

For example, we have passed an array of two values, here you can pass your own data, you can use [WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) or another way to fetch your data but it needs to match the data format as shown in the example.

```
add_filter('fluentform/rendering_field_data_select', function ($data, $form) {

    if ($form->id != 91) {
        return $data;
    }

    // check if the name attriibute is 'dynamic_dropdown'
    if (\FluentForm\Framework\Helpers\ArrayHelper::get($data, 'attributes.name') != 'dynamic_dropdown') {
        return $data;
    }
    
    // We are merging with existing options here
    $data['settings']['advanced_options'] = array_merge($data['settings']['advanced_options'], [
        [
            "label"      => "Dynamic Option 1",
            "value"      => "Dynamic Option 1",
            "calc_value" => ""
        ],
        [
            "label"      => "Dynamic Option 2",
            "value"      => "Dynamic Option 2",
            "calc_value" => ""
        ]
    ]);
    return $data;
}, 10, 2);
```

If you use this you will also need the following code, which bypass the select backend validation for inserting datas that are not present in fluent form database.

```
add_filter('fluentform/validate_input_item_select',function ($error,$field){
    return [];
},10,2);
```

## Parameters

- **$data** Array ( input field settings & attributes)
- **$form** Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme or you can use a PHP code snippet plugin.

## Source Code

This filter is located at fluentform/app/Services/FormBuilder/Components/Select.php

---

## fluentform/email_body

**Source:** [https://fluentforms.com/docs/fluentform_email_body/](https://fluentforms.com/docs/fluentform_email_body/)

### Description

This filter gives the option to modify the email body. It is called right before sending an email notification.

### Usage

Here is an example:

```
add_filter('fluentform/email_body',function($emailBody, $notification, $submittedData, $form){
	$targetFormId = 10;
	if($form->id != $targetFormId){
		return;
	}
	
	//your code here
	
	return $emailBody;
},10,4);
```

### Parameters

- **$emailBody** (HTML) Html output of the body

- **$notification** (Array) Notification settings data

- **$submittedData** (Array) Submitted form data

- **$form** (Object) The [$form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

This filter is located in FluentForm\app\Services\FormBuilder\Notifications\EmailNotifications -> notify($notification, $submittedData, $form, $entryId = false)

---

## fluentform/rendering_field_data_{INPUT_KEY}

**Source:** [https://fluentforms.com/docs/fluenform_rendering_field_data_input_key/](https://fluentforms.com/docs/fluenform_rendering_field_data_input_key/)

## Description

This filter is fired right before rendering an input field with the input data and settings. You can use this to alter to the output of the input of Fluent Forms input.

```
apply_filters('fluentform/rendering_field_data_{INPUT_KEY}',  $data, $form);
```

## Usage

In the example, we have used the key for input text which is ‘**input_text**‘.

```
add_filter('fluentform/rendering_field_data_input_text', 'your_custom_code_before_for_filtering', 10, 2);

function your_custom_code_before_for_filtering($data, $form)
{
   if($form->id != 5) {
      return;
   }

   // Do your stuffs here
   return $data;
}
```

## Parameters

- **$data**  Array ( input field settings & attributes)
- **$form** Object

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in every input component class. You can find the component from here: FluentForm\App\Services\FormBuilder\Components\Text -> compile($data, $form)

---

## fluentform/entry_statuses_core

**Source:** [https://fluentforms.com/docs/fluentform_entry_statuses/](https://fluentforms.com/docs/fluentform_entry_statuses/)

## Description

This filter returns the entry statutes. By default, Fluent Forms has the following statuses for form entries

- Unread
- Read
- Trashed

```
$statuses = apply_filters('fluentform/entry_statuses_core', [
    'unread' => 'Unread',
    'read'   => 'Read'
], $form_id);
```

If you need to add custom status then you can use this filter hook.

## Usage

The following code will add a new status for all your forms.

```
add_filter('fluentform/entry_statuses_core', function ($statuses) {
    $statuses['important'] = 'Important';
    return $statuses;
}, 10, 1);
```

If you want to add a specific status to a specific form (say form id 3) only then you can use the following code:

```
add_filter('fluentform/entry_statuses_core', function ($statuses, $formId) {
    if($formId == 3) {
        $statuses['important'] = 'Important';
    }
    return $statuses;
}, 10, 2);
```

## Parameters

- **$statuses** (array) key-value paired array of the statuses
- **$formId** (integer) Form id

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Helpers\Helper -> getEntryStatuses($form_id = false)

---

## fluentform/validate_input_item_{input_key}

**Source:** [https://fluentforms.com/docs/fluentform_validate_input_item_input_text/](https://fluentforms.com/docs/fluentform_validate_input_item_input_text/)

## Description

This filter validates input items. It is available just before submitting the form. You can do your custom validation and show the error message. If $error is empty then it’s valid. Otherwise, you can return the $errorMessage message as a string.

```
apply_filters('fluentform/validate_input_item_input_text', $errorMessage, $field, $formData, $fields, $form );
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/validate_input_item_input_text', function ($errorMessage, $field, $formData, $fields, $form) {
    $fieldName = $field['name'];
    if (empty($formData[$fieldName])) {
        return $errorMessage;
    }
    $value = $formData[$fieldName]; // This is the user input value

    /*
     * You can validate this value and return $errorMessage
     */

    return [$errorMessage];

}, 10, 5);
```

The following would apply to a specific form id 12:

```
add_filter('fluentform/validate_input_item_input_text', function ($errorMessage, $field, $formData, $fields, $form) {

    /*
     * Validate only for form id 12
     */
    $targetFormId = 12;
    if ($form->id != $targetFormId) {
        return $errorMessage;
    }

    $fieldName = $field['name'];
    if (empty($formData[$fieldName])) {
        return $errorMessage;
    }
    $value = $formData[$fieldName]; // This is the user input value

    /*
     * You can validate this value and return $errorMessage
     */

    return [$errorMessage];

}, 10, 5);
```

Email confirmation field using email validation filter, check [here](https://fluentforms.com/docs/email-confirmation-field/).

## Parameters

- **$errorMessage**string
- **$field**(array) **–**Contains the fill field settings
- **$formData**(array)**–**Contains all the user input values as key pair
- **$fields**(array)**–**All fields of the form
- **$form** (Object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$confirmation** (array)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Similar Filter for other input

```
/*
 * Common Filter hook names
 * Text/Mask: fluentform/validate_input_item_input_text
 * Email: fluentform/validate_input_item_input_email
 * Textarea: fluentform/validate_input_item_textarea
 * Numeric: fluentform/validate_input_item_input_number
 * Range Slider: fluentform/validate_input_item_rangeslider
 * Address: fluentform/validate_input_item_address
 * Country Select: fluentform/validate_input_item_select_country
 * Select: fluentform/validate_input_item_select
 * Radio: fluentform/validate_input_item_input_radio
 * Checkbox: fluentform/validate_input_item_input_checkbox
 * Website URL: fluentform/validate_input_item_input_url
 * Date: fluentform/validate_input_item_input_date
 * Image Upload: fluentform/validate_input_item_input_image
 * File Upload: fluentform/validate_input_item_input_file
 * Phone Field: fluentform/validate_input_item_phone
 * Color Picker: fluentform/validate_input_item_color_picker
 * Net Promoter Score: fluentform/validate_input_item_net_promoter_score
 * Password: fluentform/validate_input_item_input_password
 * Ratings: fluentform/validate_input_item_ratings
 * Repeater: fluentform/validate_input_item_repeater_field
 */
```

---

## fluentform/submission_confirmation

**Source:** [https://fluentforms.com/docs/fluentform_submission_confirmation/](https://fluentforms.com/docs/fluentform_submission_confirmation/)

## Description

This filter is available just before sending the success message to the user. You can use this filter hook to alter the form confirmation message and redirect settings dynamically.

```
apply_filters('fluentform/submission_confirmation', $returnData, $form, $confirmation, $insertId, $formData);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/submission_confirmation', 'custom_code_before_confirmation_msg_function', 10, 5);

function custom_code_before_confirmation_msg_function($returnData, $form, $confirmation, $insertId, $formData)
{
   // Do your stuffs here
   return $returnData;
}
```

The following would apply to a specific form ID 5:

```
add_filter('fluentform/submission_confirmation', 'custom_code_before_confirmation_msg_function', 10, 5);

function custom_code_before_confirmation_msg_function($returnData, $form, $confirmation, $insertId, $formData)
{
   if ($form->id!= 5) {
      return $returnData;
   }

   // Do your stuffs here 
   return $returnData;
}
```

## Parameters

- **$returnData**  (array)

This parameter will have different values based on your confirmation settings, please check the file *FluentForm\App\Http\Controllers\SubmissionHandlerController* for better understanding.

```
$returnData = [
  
    'message'     => 'Redirecting message'
    'action'      => 'hide_form'
    'redirectTo'  => customUrl
    'redirectUrl' => http://google.com

];
```

- **$form**  (Object) The [$form Object](https://fluentforms.com/docs/form-object/)
- **$confirmation** (array)

```
$confirmation = [
    'redirectTo'           => 'samePage'  // or customUrl or customPage
    'messageToShow'        => 'Thank you for your message. We will get in touch with you shortly'
    'customPage'           => '' 
    'samePageFormBehavior' => 'hide_form' // or reset_form 
    'customUrl'            => 'https://yourcustomurl.com'
];
```

- **$insertId**  (int) Submission ID
- **$formData** (array) Submission Data

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\app\Services\Form\SubmissionHandlerService -> getReturnData($insertId, $form, $formData)

---

## fluentform/filter_insert_data

**Source:** [https://fluentforms.com/docs/fluentform_filter_insert_data/](https://fluentforms.com/docs/fluentform_filter_insert_data/)

## Description

This filter is available just before the entry is inserted into the database and a submission. If you want to change response data then you should use [fluentform/insert_response_data](https://fluentforms.com/docs/fluentform_insert_response_data/) filter hook.

```
apply_filters('fluentform/filter_insert_data', $response);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/filter_insert_data', 'your_custom_code_before_insert_to_database_function', 10, 1);

function your_custom_code_before_insert_to_database_function($response)
{
   // DO your stuffs here
   return $response;
}
```

The following would apply to a specific form id 5:

```
add_filter('fluentform/filter_insert_data', 'your_custom_code_before_insert_to_database_function', 10, 1);

function your_custom_code_before_insert_to_database_function($response)
{
   if ($response['form_id'] != 5) {
      return;
   }

   // DO your stuffs here
   return $response;
}
```

## Parameters

- **$response** (array) [Submission Data Array](https://fluentforms.com/docs/submission_data-array/)

```
$response = [
    'form_id'       => 5, // Form ID
    'serial_number' => 1, // Numeric Serial Number
    'response'      => json_encode($response), // The submitted response as JSON
    'source_url'    => $source_url, // source url eg: https://domain.com/contact-form
    'user_id'       => 1, // current user id
    'browser'       => 'Chrome',
    'device'        => 'ipad',
    'ip'            => '127.0.0.1',
    'created_at'    => '2019-12-31 23:12:34',
    'updated_at'    => '2019-12-31 23:12:34'
];

$response = apply_filters('fluentform/filter_insert_data', $response);
```

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData($formData = false)

---

## fluentform/insert_response_data

**Source:** [https://fluentforms.com/docs/fluentform_insert_response_data/](https://fluentforms.com/docs/fluentform_insert_response_data/)

## Description

If you want to alter/format the submitted data you can use this filter. The returned data will be inserted into the submission as a response.

```
apply_filters('fluentform/insert_response_data', $formData, $formId, $inputConfigs);
```

## Usage

The following would apply to all forms:

```
add_filter('fluentform/insert_response_data', 'your_custom_response_data_filter_function', 10, 3);

function your_custom_response_data_filter_function($formData, $formId, $inputConfigs)
{
   // Your can alter the data here
    return $formData;
}
```

The following would apply to a specific form id 5:

```
add_filter('fluentform/insert_response_data', 'your_custom_response_data_filter_function', 10, 3);

function your_custom_response_data_filter_function($formData, $formId, $inputConfigs)
{
   if($formId != 5) {
      return $formData;
   }

   // Your can alter the data here
    return $formData;
}
```

## Parameters

- **$formData** (array) Entry Response as key-value pair where input name as array key and each response as value.
- **$formId** int Form ID
- **$inputConfigs** (array) This contains the full-form inputs fields as a 2-dimensional array

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in FluentForm\App\Services\Form\SubmissionHandlerService -> prepareInsertData()

---

