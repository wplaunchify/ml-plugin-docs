# Action Hooks

*Category from Fluent Forms documentation*

---

## fluentform/ipn_paypal_action_web_accept

**Source:** [https://fluentforms.com/docs/fluentform_ipn_paypal_action_web_accept/](https://fluentforms.com/docs/fluentform_ipn_paypal_action_web_accept/)

## Description

This action runs during the web accept PayPal ipn.

```
/*
* Source Action
*/
do_action('fluentform/ipn_paypal_action_web_accept', $encoded_data_array, $submissionId, $ipnVerified);
```

## Usage

```
add_action('fluentform/ipn_paypal_action_web_accept', function ($encoded_data, $submissionId, $ipnVerified) {
     // Do your stuffs here
 }, 10, 3);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$encoded_data**(array) Encoded Data
- **$submissionId** (int) Submission Id****
- **$siubmission** (object) Submission Object

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/PayPal/API/IPN.php*

---

## fluentform/ipn_paypal_action_{$txn_type}

**Source:** [https://fluentforms.com/docs/fluentform_paypal_ipn_verification_failed/](https://fluentforms.com/docs/fluentform_paypal_ipn_verification_failed/)

## Description

This action runs if the PayPal ipn verification is failed. You can hook into this and get the error data.

```
/*
* Source Action
*/
do_action('fluentform/ipn_paypal_action_' . $txn_type, $encoded_data_array, $submissionId, $submission, $ipnVerified);
```

## Usage

```
add_action('fluentform/ipn_paypal_action_web_accept', function($encoded_data_array, $submissionId, $submission, $ipnVerified) {
   // Do your stuff here
}, 10, 4);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$encoded_data_array**(array) Encoded Data
- **$submissionId**(int) Submission ID
- **$submission**(object) Submission Object
- **$ipnVerified** (boolean) Ipn Verification

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/PayPal/API/IPN.php*

---

## fluentform/ipn_endpoint_{$paymentMethod}

**Source:** [https://fluentforms.com/docs/fluentform_ipn_endpint_/](https://fluentforms.com/docs/fluentform_ipn_endpint_/)

## Description

This action runs during the ipn endpoint verification.

```
/*
* Source Action
*/
do_action('fluentform/ipn_endpint_' . $paymentMethod);
```

## Usage

```
add_action('fluentform/ipn_endpint_stripe', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentHandler.php*

---

## fluentform/after_payment_status_change

**Source:** [https://fluentforms.com/docs/fluentform_after_payment_status_change/](https://fluentforms.com/docs/fluentform_after_payment_status_change/)

## Description

This action runs before the payment status is changed for every payment. You can hook into this and get the new status.

```
/*
* Source Action
*/
do_action('fluentform/after_payment_status_change', $newStatus, $this->getSubmission());
```

## Usage

```
add_action('fluentform/after_payment_status_change', function ( $newStatus, $submission)
{
   // Do your stuffs here
  if ($newStatus == 'paid' || $newStatus == 'pending' || $newStatus == 'processing') {
                
  } else {

  }
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$newStatus** (string) New Status
- **$submission** (array) Submission Data

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/payment_refund_updated

**Source:** [https://fluentforms.com/docs/fluentform_payment_refund_updated/](https://fluentforms.com/docs/fluentform_payment_refund_updated/)

## Description

This action runs when updating an existing refund method for every payment method. You can hook into this and get the refund data.

```
/*
* Source Action
*/
do_action('fluentform/payment_refund_updated', $existingRefund, $existingRefund->form_id);
```

## Usage

```
add_action('fluentform/payment_refund_updated', function ($existingRefund, $form_id)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$existingRefund** (array) Refund Data
- **$form_id** (int) Form ID

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/payment_refund_updated_{$method}

**Source:** [https://fluentforms.com/docs/fluentform_payment_refund_updated_method/](https://fluentforms.com/docs/fluentform_payment_refund_updated_method/)

## Description

This action runs when updating an existing refund method. You can hook into this and get the refund data.

```
/*
* Source Action
*/
do_action('fluentform/payment_refund_updated_'.$method, $existingRefund, $refund->form_id);
```

## Usage

```
add_action('fluentform/payment_refund_updated_stripe', function ($existingRefund, $form_id)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$existingRefund** (array) Refund Data
- **$form_id** (int) Form ID

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/payment_refunded

**Source:** [https://fluentforms.com/docs/fluentform_payment_refunded/](https://fluentforms.com/docs/fluentform_payment_refunded/)

## Description

This action runs after a successful refund on every payment method. You can hook into this and get the refund data.

```
/*
* Source Action
*/
do_action('fluentform/payment_refunded', $refund, $refund->form_id);
```

## Usage

```
add_action('fluentform/payment_refunded', function ($refund, $form_id)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$refund** (array) Refund Data
- **$form_id** (int) Form ID

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/payment_refunded_{$method}

**Source:** [https://fluentforms.com/docs/fluentform_payment_refunded_method/](https://fluentforms.com/docs/fluentform_payment_refunded_method/)

## Description

This action runs after a successful refund. You can hook into this and get the refund data.

```
/*
* Source Action
*/
do_action('fluentform/payment_refunded_'.$method, $refund, $transaction, $submission);
```

## Usage

```
add_action('fluentform/payment_refunded_stripe', function ($refund, $transaction, $submission)
{
   // Do your stuffs here
}, 10, 3);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$refund** (array) Refund Data
- **$transaction** (array) Transaction Data
- **$submission** (object) Submission Object

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/before_payment_status_change

**Source:** [https://fluentforms.com/docs/fluentform_before_payment_status_change/](https://fluentforms.com/docs/fluentform_before_payment_status_change/)

## Description

This action runs before the payment status is changed for every payment. You can hook into this and get the new status.

```
/*
* Source Action
*/
do_action('fluentform/before_payment_status_change', $newStatus, $this->getSubmission());
```

## Usage

```
add_action('fluentform/before_payment_status_change', function ($newStatus, $submission)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$newStatus** (string) New Status
- **$submission** (array) Submission Data

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentMethods/BaseProcessor.php*

---

## fluentform/payment_method_render_{$methodName}

**Source:** [https://fluentforms.com/docs/fluentform_payment_method_render_methodname/](https://fluentforms.com/docs/fluentform_payment_method_render_methodname/)

## Description

This action runs if the form has a single payment method, then the payment method is rendered using this method.

```
/*
* Source Action
*/
do_action('fluentform/payment_method_render_'.$methodName, $methodElement, $form);
```

## Usage

```
add_action('fluentform/payment_method_render_stripe', function ($methodElement, $form)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$methodElement** (array) Payment Method Data
- **$form** (object) Form Object

## Source Code

This hook is located in */fluentformpro/src/Payments/Components/PaymentMethods.php*

---

## fluentform/rending_payment_method_{$methodName}

**Source:** [https://fluentforms.com/docs/fluentform_rending_payment_method_/](https://fluentforms.com/docs/fluentform_rending_payment_method_/)

## Description

This action runs before rendering the payment method. All the payment method is rendered using this method.

```
/*
* Source Action
*/
do_action('fluentform/rending_payment_method_'.$methodName, $activatedMethod, $data, $form);
```

## Usage

```
add_action('fluentform/rending_payment_method_stripe', function ($activatedMethod, $data, $form)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$activatedMethod** (string) Current Payment Method
- **$data** (array) Current Payment Element
- **$form** (object) Form Object

## Source Code

This hook is located in */fluentformpro/src/Payments/Components/PaymentMethods.php*

---

## fluentform/payment_frameless_{$paymentMethod}

**Source:** [https://fluentforms.com/docs/fluent_payment_frameless_paymentmethod/](https://fluentforms.com/docs/fluent_payment_frameless_paymentmethod/)

## Description

This action runs before rendering the payment redirect handler page.

```
/*
* Source Action
*/
do_action('fluent_payment_frameless_' . $paymentMethod, $data);
```

## Usage

```
add_action('fluent_payment_frameless_'.$paymentMethod, function ($data)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$data** (array) Payment Data

## Source Code

This hook is located in */fluentformpro/src/Payments/PaymentHandler.php*

---

## fluentform/payment_receipt_after_content

**Source:** [https://fluentforms.com/docs/fluentform_payment_receipt_after_content/](https://fluentforms.com/docs/fluentform_payment_receipt_after_content/)

## Description

This action runs after rendering the payment receipt. You can use this to insert additional content.

```
/*
* Source Action
*/
do_action('fluentform/payment_receipt_after_content', $entry);
```

## Usage

```
add_action('fluentform/payment_receipt_after_content', function ($entry)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entry** (object) Submission Object

## Source Code

This hook is located in */fluentformpro/*src/Payments/Classes/PaymentReceipt.php

---

## fluentform/payment_receipt_before_content

**Source:** [https://fluentforms.com/docs/fluentform_payment_receipt_before_content/](https://fluentforms.com/docs/fluentform_payment_receipt_before_content/)

## Description

This action runs before rendering the payment receipt.

```
/*
* Source Action
*/
do_action('fluentform/payment_receipt_before_content', $entry);
```

## Usage

```
add_action('fluentform/payment_receipt_before_content', function ($entry)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entry** (object) Submission Object

## Source Code

This hook is located in */fluentformpro/*src/Payments/Classes/PaymentReceipt.php

---

## fluentform/after_deleting_entries

**Source:** [https://fluentforms.com/docs/fluentform_after_entry_deleted/](https://fluentforms.com/docs/fluentform_after_entry_deleted/)

## Description

This action runs after deleting an entry.

```
/*
* Source Action
*/
do_action('fluentform/after_deleting_entries', $entryId, $formId);
```

## Usage

```
add_action('fluentform/after_deleting_entries', function ( $entryId, $formId)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entryId**  (int) Submission ID
- **$formId** (int) Form ID

## Source Code

This hook is located in *fluentform/app/Services/Submission/SubmissionServices -> deleteEntries($submissionIds, $formId)*

---

## fluentform/before_deleting_entries

**Source:** [https://fluentforms.com/docs/fluentform_before_entry_deleted/](https://fluentforms.com/docs/fluentform_before_entry_deleted/)

## Description

This action runs before deleting an entry.

```
/*
* Source Action
*/
do_action('fluentform/before_deleting_entries', $entryId, $formId);
```

## Usage

```
add_action('fluentform/before_deleting_entries', function ($entryId, $formId)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entryId**  (int) Submission ID
- **$formId** (int) Form ID

## Source Code

This hook is located in *fluentform/app/Services/Submission/SubmissionServices -> deleteEntries($submissionIds, $formId)*

---

## fluentform/after_all_entries_render

**Source:** [https://fluentforms.com/docs/fluentform_after_all_entries_render/](https://fluentforms.com/docs/fluentform_after_all_entries_render/)

## Description

This action runs after rendering the all entries page.

```
/*
* Source Action
*/
do_action('fluentform/after_all_entries_render');
```

## Usage

```
add_action('fluentform/after_all_entries_render', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in*fluentform/app/views/admin/all_entries.php*

---

## fluentform/before_all_entries_render

**Source:** [https://fluentforms.com/docs/fluentform_before_all_entries_render/](https://fluentforms.com/docs/fluentform_before_all_entries_render/)

## Description

This action runs before rendering the all entries page.

```
/*
* Source Action
*/
do_action('fluentform/before_all_entries_render');
```

## Usage

```
add_action('fluentform/before_all_entries_render', function ()
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in *fluentform/app/views/admin/all_entries.php*

---

## flunetform/render_payment_entries

**Source:** [https://fluentforms.com/docs/flunetform_render_payment_entries-2/](https://fluentforms.com/docs/flunetform_render_payment_entries-2/)

## Description

This action runs before rendering the payment entries.

```
/*
* Source Action
*/
do_action('flunetform/render_payment_entries');
```

## Usage

```
add_action('flunetform/render_payment_entries', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in *fluentform/app/Modules/Registerer/Menu.php*

---

## fluentform/after_partial_entry_deleted

**Source:** [https://fluentforms.com/docs/fluentform_after_partial_entry_deleted/](https://fluentforms.com/docs/fluentform_after_partial_entry_deleted/)

## Description

This action runs after deleting the partial entries.

```
/*
* Source Action
*/
do_action('fluentform/after_partial_entry_deleted', $entryId, $formId);
```

## Usage

```
add_action('fluentform/after_partial_entry_deleted', function ($entryId, $formId)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entryId** (int) Submission ID
- **$formId** (int) Form ID

## Source Code

This action is located in fluentformpro/src/classes/StepFormEntries.php -> deleteEntryById().

---

## fluentform/before_partial_entry_deleted

**Source:** [https://fluentforms.com/docs/fluentform_before_partial_entry_deleted/](https://fluentforms.com/docs/fluentform_before_partial_entry_deleted/)

## Description

This action runs before deleting the partial entries.

```
/*
* Source Action
*/
do_action('fluentform/before_partial_entry_deleted', $entryId, $formId);
```

## Usage

```
add_action('fluentform/before_partial_entry_deleted', function ($entryId, $formId)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$entryId** (int) Submission ID
- **$formId** (int) Form ID

## Source Code

This action is located in fluentformpro/src/classes/StepFormEntries.php -> deleteEntryById()

---

## fluentform/entry_confirmation

**Source:** [https://fluentforms.com/docs/fluentformpro_entry_confirmation/](https://fluentforms.com/docs/fluentformpro_entry_confirmation/)

## Description

This action runs during the confirmation process of double opt-in.  Using this action fluent form confirms the subscription of double optin. You can also use this to run your script during the confirmation process.

```
/*
* Source Action
*/
do_action('fluentform/entry_confirmation', $_REQUEST);
```

## Usage

```
add_action('fluentform/entry_confirmation', function ($request)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$**request (array) Global PHP Request ($_REQUEST)

## Source Code

This action is located in fluentformpor/src/classes/SharePage/SharePage.php

---

## fluentform/post_integration_success

**Source:** [https://fluentforms.com/docs/fluentform_post_integration_success/](https://fluentforms.com/docs/fluentform_post_integration_success/)

## Description

This action runs after successfully inserting a post during the post-form integration process.  You can use this action to do the additional task for the new post.

```
/*
* Source Action
*/
do_action('fluentform/post_integration_success', $postId, $postData, $entryId, $form, $feed);
```

## Usage

```
add_action('fluentform/post_integration_success', function ($postId, $postData, $entryId, $form, $feed)
{
   // Do your stuffs here
}, 10, 5);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$postId** (int) Post ID
- **$postData** (array) Post Data
- **$entryId** (int) Entry ID
- **$form** (object) Form Object
- **$feed** (array) Feed Data

## Source Code

This hook is located in */fluentformpro/src/Components/Post/PostFormHandler.php*

---

## fluentform/user_registration_completed

**Source:** [https://fluentforms.com/docs/fluentform_user_registration_completed/](https://fluentforms.com/docs/fluentform_user_registration_completed/)

## Description

This action runs after the user registration process is completed. If you use any third-party profile plugin, you can use this hook to get the user data and do the necessary tasks.

```
/*
* Source Action
*/
do_action('fluentform/user_registration_completed', $userId, $feed, $entry, $form);
```

## Usage

```
add_action('fluentform/user_registration_completed', function ($userId, $feed, $entry, $form)
{
   // Do your stuffs here
}, 10, 4);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$userId**(int)****User ID
- **$feed** (array) User Feed
- **$entry**(object) Submission Object
- **$form**(object) Form Object

## Source Code

This action is located in fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> createUser()

---

## fluentform/created_user

**Source:** [https://fluentforms.com/docs/fluentform_created_user/](https://fluentforms.com/docs/fluentform_created_user/)

## Description

This action runs after the user is created during the user registration process.  You can use this action to do the additional task for the created user.

```
/*
* Source Action
*/
do_action('fluentform/created_user', $userId, $feed, $entry, $form);
```

## Usage

```
add_action('fluentform/created_user', function ($userId, $feed, $entry, $form)
{
   // Do your stuffs here
}, 10, 4);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$**userId (int) User ID
- **$**feed (array) User Feed
- **$entry** (object) Submission Object
- **$form** (object) Form Object

## Source Code

This action is located in fluentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> createUser()

---

## fluentform/user_registration_before_start

**Source:** [https://fluentforms.com/docs/fluentform_user_registration_before_start/](https://fluentforms.com/docs/fluentform_user_registration_before_start/)

## Description

This action runs before starting the user registration process on the user registration module.  You can use this action to do additional tasks during the user registration process.

```
/*
* Source Action
*/
do_action('fluentform/user_registration_before_start', $feed, $entry, $form);
```

## Usage

```
add_action('fluentform/user_registration_before_start', function ($feed, $entry, $form)
{
   // Do your stuffs here
}, 10, 3);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$feed** (array) Feed Data
- **$entry** (Object) Submission Object
- **$form** (object) Form Object

## Source Code

This hook is located influentformpro/src/Integrations/UserRegistration/UserRegistrationApi.php -> registerUser()

---

## fluentform/conversational_frame_footer

**Source:** [https://fluentforms.com/docs/fluentform_conversational_frame_footer/](https://fluentforms.com/docs/fluentform_conversational_frame_footer/)

## Description

This action runs after rendering the conversational frame footer.

```
/*
* Source Action
*/
do_action('fluentform/conversational_frame_head');
```

## Usage

```
add_action('fluentform/conversational_frame_footer', function ()
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/public/conversational-form.php

---

## fluentform/conversational_frame_head

**Source:** [https://fluentforms.com/docs/fluentform_conversational_frame_head/](https://fluentforms.com/docs/fluentform_conversational_frame_head/)

## Description

This action runs after rendering the conversational frame header.

```
/*
* Source Action
*/
do_action('fluentform/conversational_frame_head');
```

## Usage

```
add_action('fluentform/conversational_frame_head', function ()
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/public/conversational-form.php

---

## fluentform/after_style_generated

**Source:** [https://fluentforms.com/docs/fluentform_after_style_generated/](https://fluentforms.com/docs/fluentform_after_style_generated/)

## Description

This action runs after generating the style meta for the form.

```
/*
* Source Action
*/
do_action('fluentform/after_style_generated',$formId);
```

## Usage

```
add_action('fluentform/after_style_generated', function ( $formId )
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentformpro/src/classes/FormStyler.php

---

## fluentform/form_styler

**Source:** [https://fluentforms.com/docs/fluentform_form_styler/](https://fluentforms.com/docs/fluentform_form_styler/)

## Description

This action runs before rendering the form styler.

```
/*
* Source Action
*/
do_action('fluentform/form_styler', $form_id);
```

## Usage

```
add_action('fluentform/form_styler', function ($form_id)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/frameless/show_preview.php

---

## fluentform/after_tools_container

**Source:** [https://fluentforms.com/docs/fluentform_after_before_export_import_container/](https://fluentforms.com/docs/fluentform_after_before_export_import_container/)

## Description

This action runs after the rendering of the tools page container.

```
/*
* Source Action
*/
do_action('fluentform/after_tools_container');
```

## Usage

```
add_action('fluentform/after_tools_container', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/tools/index.php

---

## fluentform/before_tools_container

**Source:** [https://fluentforms.com/docs/fluentform_before_export_import_container/](https://fluentforms.com/docs/fluentform_before_export_import_container/)

## Description

This action runs before rendering the tools page container.

```
/*
* Source Action
*/
do_action('fluentform/before_tools_container');
```

## Usage

```
add_action('fluentform/before_tools_container', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/tools/index.php

---

## fluentform/after_tools_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_after_export_import_wrapper/](https://fluentforms.com/docs/fluentform_after_export_import_wrapper/)

## Description

This action runs after rendering the tools wrapper.

```
/*
* Source Action
*/
do_action('fluentform/after_tools_wrapper');
```

## Usage

```
add_action('fluentform/after_tools_wrapper', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/tools/index.php

---

## fluentform/before_tools_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_before_export_import_wrapper/](https://fluentforms.com/docs/fluentform_before_export_import_wrapper/)

## Description

This action runs before rendering the tools wrapper.

```
/*
* Source Action
*/
do_action('fluentform/before_tools_wrapper');
```

## Usage

```
add_action('fluentform/before_tools_wrapper', function ()
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/tools/index.php

---

## fluentform/before_global_settings_option_render

**Source:** [https://fluentforms.com/docs/fluentform_before_global_settings_option_render/](https://fluentforms.com/docs/fluentform_before_global_settings_option_render/)

## Description

This action fires on each global settings component before rendering the page.

```
/*
* Source Action
*/
do_action('fluentform/before_global_settings_option_render');
```

## Usage

```
add_action('fluentform/before_global_settings_option_render', function ()
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in */fluentform/resources/views/admin/settings/settings.php*

---

## fluentform/after_global_settings_option_render

**Source:** [https://fluentforms.com/docs/fluentform_after_global_settings_option_render/](https://fluentforms.com/docs/fluentform_after_global_settings_option_render/)

## Description

This hook is available before rendering the global settings options page. For example Custom CSS/JS page.

```
/*
* Source Action
*/
do_action('fluentform/after_global_settings_option_render');
```

## Usage

```
add_action('fluentform/after_global_settings_option_render', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in */fluentform/resources/views/admin/settings/settings.php*

---

## fluentform/global_settings_component_{$currentComponent}

**Source:** [https://fluentforms.com/docs/fluentform_global_settings_component_currentcomponent/](https://fluentforms.com/docs/fluentform_global_settings_component_currentcomponent/)

## Description

This action fires on each global settings component. For example reCaptcha

```
/*
* Source Action
*/
do_action('fluentform/global_settings_component_' . $currentComponent);
```

## Usage

```
add_action('fluentform/global_settings_component_reCaptcha', function ()
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/settings/index.php

---

## fluentform/after_global_settings_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_after_global_settings_wrapper/](https://fluentforms.com/docs/fluentform_after_global_settings_wrapper/)

## Description

After rendering the form settings page this hook is available.

```
/*
* Source Action
*/
do_action('fluentform/after_global_settings_wrapper');
```

## Usage

```
add_action('fluentform/after_global_settings_wrapper', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in */fluentform/resources/views/admin/form/settings.php*

---

## fluentform/before_global_settings_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_before_global_settings_wrapper/](https://fluentforms.com/docs/fluentform_before_global_settings_wrapper/)

## Description

Before rendering the form global settings page this hook is available.

```
/*
* Source Action
*/
do_action('fluentform/before_global_settings_wrapper');
```

## Usage

```
add_action('fluentform/before_global_settings_wrapper', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/settings/index.php

---

## fluentform/form_settings_container_{$current_sub_route}

**Source:** [https://fluentforms.com/docs/fluentform_form_settings_container_current_sub_route/](https://fluentforms.com/docs/fluentform_form_settings_container_current_sub_route/)

## Description

This hook runs before rendering the settings page container.

```
/*
* Source Action
*/
do_action('fluentform/form_settings_container_'.$current_sub_route, $form_id);
```

## Usage

```
add_action('fluentform/form_settings_container_form_settings', function ($form_id)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$form_id** (int) Form ID

## Source Code

This action is located in fluentform/app/Views/admin/form/settings_wrapper.php

---

## fluentform/after_form_settings_app

**Source:** [https://fluentforms.com/docs/fluentform_after_form_settings_app/](https://fluentforms.com/docs/fluentform_after_form_settings_app/)

After rendering the form settings page this hook is available.

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/after_form_settings_app', $form_id);
```

## Usage

```
add_action('fluentform/after_form_settings_app', function ($form_id)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$form_id** (int) Form ID

## Source Code

This action is located in fluentform/app/Views/admin/form/settings.php

---

## fluentform/before_form_settings_app

**Source:** [https://fluentforms.com/docs/fluentform_before_form_settings_app/](https://fluentforms.com/docs/fluentform_before_form_settings_app/)

Before rendering the form settings page this hook is available.

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/before_form_settings_app', $form_id);
```

## Usage

```
add_action('fluentform/before_form_settings_app', function ($form_id)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$form_id** (int) Form ID

## Source Code

This action is located in fluentform/app/Views/admin/form/settings.php

---

## fluentform/addons_page_render_{$current_menu_item}

**Source:** [https://fluentforms.com/docs/fluentform_addons_page_render_current_menu_item/](https://fluentforms.com/docs/fluentform_addons_page_render_current_menu_item/)

This action runs before rendering any addon page, for example, a PDF addon.

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/addons_page_render_' . $current_menu_item);
```

## Usage

```
add_action('fluentform/addons_page_render_fluentform_pdf', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in */fluentform/resources/views/admin/addons/index.php*

---

## fluentform/email_template_after_footer

**Source:** [https://fluentforms.com/docs/fluentform_email_template_after_footer/](https://fluentforms.com/docs/fluentform_email_template_after_footer/)

This hook runs after rendering the email footer. You can use this to insert anything in the footer.

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/email_template_after_footer', $form, $notification);
```

## Usage

```
add_action('fluentform/email_template_after_footer', function ( $form, $notification)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$form** (object) Form Object
- **$notification** (array) Notification Data

## Source Code

This action is located in fluentform/app/Views/email/template/footer.php

---

## fluentform/email_summary_details

**Source:** [https://fluentforms.com/docs/fluentform_email_summary_details/](https://fluentforms.com/docs/fluentform_email_summary_details/)

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform_email_summary_details', [
'recipients' => $recipients,
'email_subject' => $emailSubject,
'email_body' => $emailBody
], $data, $emailResult);
```

## Usage

```
add_action('fluentform/email_summary_details', function ($emailData, $data, $emailResult)
{
   // Do your stuffs here
}, 10, 3);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Services/Scheduler/Scheduler.php -> processEmailReport()

---

## fluentform/integration_action_result

**Source:** [https://fluentforms.com/docs/ff_integration_action_result/](https://fluentforms.com/docs/ff_integration_action_result/)

## Description

This action runs after completing an integration process.

```
/*
* Source Action
*/
do_action('fluentform/integration_action_result',$feed, $status, $note);
```

## Usage

```
add_action('fluentform/integration_action_result', function ($feed, $status, $note = '')
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$feed** (array) Current Feed
- **$status** (string) Status
- **$note** (string) Note

## Source Code

This hook is located in integrations bootstrap files such as fluentformpro/src/Integrations/**/Bootstrap.php

---

## fluentform/save_global_integration_settings_{ $settingsKey}

**Source:** [https://fluentforms.com/docs/fluentform_save_global_integration_settings_-settingskey/](https://fluentforms.com/docs/fluentform_save_global_integration_settings_-settingskey/)

## Description

This action runs when saving global integration settings with the settings key appended.

```
/*
* Source Action
*/
do_action('fluentform/save_global_integration_settings_' . $settingsKey, $integration);
```

## Parameters

- **$integration** (array) Integration Settings

## Usage

```
add_action('fluentform/save_global_integration_settings_automizy', function ($integration)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Http/Controllers/GlobalIntegrationController.php

---

## fluentform/global_notify_completed

**Source:** [https://fluentforms.com/docs/fluentform_global_notify_completed/](https://fluentforms.com/docs/fluentform_global_notify_completed/)

## Description

This action fires after completing form integration data pushing process.

```
/*
* Source Action
*/
do_action('fluentform/global_notify_completed', $insertId, $form);
```

## Usage

```
add_action('fluentform/global_notify_completed', function ($insertId, $form)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$insertId** (int) Insert Id
- **$form** (object) Form Object

## Source Code

This action is located in fluentform/app/Services/Integrations/GlobalNotificationManager.php, fluentform/app/Services/WPAsync/FluentFormAsyncRequest.php

---

## fluentform/starting_file_upload

**Source:** [https://fluentforms.com/docs/fluentform_starting_file_upload/](https://fluentforms.com/docs/fluentform_starting_file_upload/)

## Description

This action run before uploading a file.

```
/*
* Source Action
*/
do_action('fluentform/starting_file_upload', $files, $form);
```

## Usage

```
add_action('fluentform/starting_file_upload', function ($files, $form)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameters

- **$files** (array) Files
- **$form** (object) Form Object

## Source Code

This hook is located in */fluentformpro/src/Uploader.php*

---

## fluentform/submission_note_stored

**Source:** [https://fluentforms.com/docs/fluentform_new_response_note_added/](https://fluentforms.com/docs/fluentform_new_response_note_added/)

## Description

This action fires before saving the response note in the form entries.

```
/*
* Source Action
*/
do_action('fluentform/submission_note_stored', $insertId, $added_note);
```

## Usage

```
add_action('fluentform/submission_note_stored', function ($insertId, $added_note)
{
   // Do your stuffs here
}, 10, 2);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Parameter

- **$insertId** (int) Insert ID
- **$added_note** (string) Note

## Source Code

This hook is located in FluentForm\App\Services\Submission\SubmissionService\SubmissionService -> storeNote($submissionId, $attributes = [])

---

## fluentform/pre_load_scripts

**Source:** [https://fluentforms.com/docs/fluentform_pre_load_scripts/](https://fluentforms.com/docs/fluentform_pre_load_scripts/)

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/pre_load_scripts', $post);
```

## Usage

```
add_action('fluentform/pre_load_scripts', function ($post)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/render_payment_entries

**Source:** [https://fluentforms.com/docs/flunetform_render_payment_entries/](https://fluentforms.com/docs/flunetform_render_payment_entries/)

## Description

This action fires before rendering the payment entries.

```
/*
* Source Action
*/
do_action('fluentform/render_payment_entries');
```

## Usage

```
add_action('fluentform/render_payment_entries', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Modules/Registerer/Menu.php

---

## fluentform/scripts_registered

**Source:** [https://fluentforms.com/docs/fluentform_scripts_registered/](https://fluentforms.com/docs/fluentform_scripts_registered/)

## Description

This action fires after fluentform scripts are registered.

```
/*
* Source Action
*/
do_action('fluentform/scripts_registered');
```

## Usage

```
add_action('fluentform/scripts_registered', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/load_form_assets

**Source:** [https://fluentforms.com/docs/fluentform_load_form_assets/](https://fluentforms.com/docs/fluentform_load_form_assets/)

## Description

This action fires when loading the form asset.

```
/*
* Source Action
*/
do_action('fluentform/load_form_assets', $formId);
```

## Usage

```
add_action('fluentform/load_form_assets', function ($formId)
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Modules/Widgets/OxygenWidget.php, fluentformpro/src/classes/SharePage/SharePage.php, fluentform/app/Hooks/actions.php

---

## fluentform/init_custom_stylesheet

**Source:** [https://fluentforms.com/docs/fluentform_init_custom_stylesheet/](https://fluentforms.com/docs/fluentform_init_custom_stylesheet/)

## Description

This action runs when a custom style is applied to the form. You can also push your own style using this.

```
/*
* Source Action
*/
do_action('fluentform/init_custom_stylesheet', $selectedStyle, $formId);
```

## Usage

```
add_action('fluentform/init_custom_stylesheet', function ($selectedStyle, $formId)
{
   // Do your stuffs here
   // enque style
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentformpro/src/classes/FormStyler.php, fluentform/app/Hooks/actions.php

---

## fluentform/form_application_view_{$route}

**Source:** [https://fluentforms.com/docs/ff_fluentform_form_application_view_route/](https://fluentforms.com/docs/ff_fluentform_form_application_view_route/)

## Description

This action runs the admin page view. You can hook into it and run your script depending on the current route and form ID.

```
/*
* Source Action
*/
do_action('fluentform/form_application_view_' . $route, $form_id);
```

## Usage

Here we have used the route for form entries.

```
add_action('fluentform/form_application_view_entries', function ( $form_id )
{
   // Do your stuffs here
}, 10, 1);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Views/admin/form/form_wrapper.php

---

## fluentform/after_form_navigation

**Source:** [https://fluentforms.com/docs/fluentform_after_form_navigation/](https://fluentforms.com/docs/fluentform_after_form_navigation/)

## Description

This action runs after the admin page header to add navigation buttons.

```
/*
* Source Action
*/
do_action('fluentform/after_form_navigation', $form_id, $route);
```

## Usage

```
add_action('fluentform/after_form_navigation', 'custom_function', 10, 2);

function custom_function( $form_id, $route)
{
   // Do your stuff here
  $myCustomBttnLink ='<a href="#" class="custom"> Custom </a>';
  echo $myCustomBttnLink;
  return;
}
```

## Parameters

- **$form_id** (int) Form ID
- **$route** (string) Current Route

## Source Code

This action is located in fluentform/app/Views/admin/form/form_wrapper.php

---

## fluentform/global_menu

**Source:** [https://fluentforms.com/docs/fluentform_global_menu/](https://fluentforms.com/docs/fluentform_global_menu/)

## Description

This action runs before rendering the admin menu.

```
/*
* Source Action
*/
do_action('fluentform/global_menu');
```

## Usage

```
add_action('fluentform/global_menu', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This hook is located in all admin view index files such app/Views/admin/**/*.php

---

## fluentform/after_permission_set_assignment

**Source:** [https://fluentforms.com/docs/after_fluentform_permission_set_assignment/](https://fluentforms.com/docs/after_fluentform_permission_set_assignment/)

## Description

This action runs after fluentform assigning user capabilities.

```
/*
* Source Action
*/
do_action('fluentform/after_permission_set_assignment');
```

## Usage

```
add_action('fluentform/after_permission_set_assignment', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/before_permission_set_assignment

**Source:** [https://fluentforms.com/docs/before_fluentform_permission_set_assignment/](https://fluentforms.com/docs/before_fluentform_permission_set_assignment/)

## Description

This action runs before assigning user capabilities.

```
/*
* Source Action
*/
do_action('fluentform/before_permission_set_assignment');
```

## Usage

```
add_action('fluentform/before_permission_set_assignment', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This hook is located in fluentform/app/Modules/Acl/Acl.php

---

## fluentform/do_email_report_scheduled_tasks

**Source:** [https://fluentforms.com/docs/fluentform_do_email_report_scheduled_tasks/](https://fluentforms.com/docs/fluentform_do_email_report_scheduled_tasks/)

## Description

This is a scheduled event action that runs daily in the background. You can hook into it and run any scheduled action automatically.

```
/*
* Source Action
*/
do_action('fluentform/do_email_report_scheduled_tasks');
```

## Usage

```
add_action('fluentform/do_email_report_scheduled_tasks', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This action is located in fluentform/app/Hooks/Handlers/ActivationHandler.php -> setCronSchedule(), fluentform/app/Hooks/actions.php

---

## fluentform/maybe_scheduled_jobs

**Source:** [https://fluentforms.com/docs/fluentform_maybe_scheduled_jobs/](https://fluentforms.com/docs/fluentform_maybe_scheduled_jobs/)

## Description

This is a smart background action to process jobs like integration data pushing.

```
/*
* Source Action
*/
do_action('fluentform/maybe_scheduled_jobs');
```

## Usage

```
add_action('fluentform/maybe_scheduled_jobs', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This action is located in fluentform/boot/globals.php

---

## fluentform/rendering_calculation_form

**Source:** [https://fluentforms.com/docs/ff_rendering_calculation_form/](https://fluentforms.com/docs/ff_rendering_calculation_form/)

## Description

This action runs if the form input has a calculation in it and during rendering the input. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/rendering_calculation_form', $form, $data);
```

## Usage

```
add_action('fluentform/rendering_calculation_form', 'custom_function', 10, 2);

function custom_function($form, $data)
{
   // Do your stuff here
}
```

## Parameters

- **$data**(array) Input Element
- **$form**(object) Form Object

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/render_item_step_end

**Source:** [https://fluentforms.com/docs/fluentform_render_item_step_end/](https://fluentforms.com/docs/fluentform_render_item_step_end/)

## Description

This action runs if the form is step form and after rendering the step. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/render_item_step_end', $endElement, $form);
```

## Usage

```
add_action('fluentform/render_item_step_end', 'custom_function', 10, 2);

function custom_function($endElement, $form)
{
   // Do your stuff here
}
```

## Parameters

- **$endElement**(array) End Element
- **$form**(object) Form Object

## Source Code

This filter is located in *fluentform/app/Services/FormBuilder/FormBuilder.php*

---

## fluentform/render_item_step_start

**Source:** [https://fluentforms.com/docs/fluentform_render_item_step_start/](https://fluentforms.com/docs/fluentform_render_item_step_start/)

## Description

This action runs if the form is step form and before rendering the step. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/render_item_step_start', $startElement, $form);
```

## Usage

```
add_action('fluentform/render_item_step_start', 'custom_function', 10, 2);

function custom_function($startElement, $form)
{
   // Do your stuff here
}
```

## Parameters

- **$startElement**(array) Start Element
- **$form**(object) Form Object

## Source Code

This filter is located in *fluentform/app/Services/FormBuilder/FormBuilder.php*

---

## fluentform/after_form_render

**Source:** [https://fluentforms.com/docs/fluentform_after_form_render/](https://fluentforms.com/docs/fluentform_after_form_render/)

## Description

This action runs after the form rendering is completed. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/after_form_render', $form);
```

## Usage

```
add_action('fluentform/after_form_render', 'custom_function', 10, 1);

function custom_function($form)
{
   // Do your stuff here
}
```

## Parameters

- **$form**(object) Form Object

## Source Code

This hook is located in fluentform/app/Services/Form/FormService.php

---

## fluentform/form_element_start

**Source:** [https://fluentforms.com/docs/fluentform_form_element_start/](https://fluentforms.com/docs/fluentform_form_element_start/)

## Description

This action runs before rendering the input elements of the form. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/form_element_start', $form);
```

## Usage

```
add_action('fluentform/form_element_start', 'custom_function', 10, 1);

function custom_function()
{
   // Do your stuff here
}
```

## Parameters

- **$for**m (object) Form Object

## Source Code

This action is located in fluentform/app/Services/FormBuilder/FormBuilder.php -> build()

---

## fluentform/render_item_{$item}

**Source:** [https://fluentforms.com/docs/fluentform_render_item_item/](https://fluentforms.com/docs/fluentform_render_item_item/)

## Description

This action runs every time an input item is rendered. If you need to do anything in the background you can use this action. $item is the key of the component that is being rendered.

```
/*
* Source Action
*/
do_action('fluentform/render_item_'.$item['element'], $item, $form);
```

## Usage

```
add_action('fluentform/render_item_submit_button', 'custom_function', 10, 2);

function custom_function($item, $form)
{
   // Do your stuff here
}
```

## Parameters

- **$item** (array) Input Item
- **$form** (object) Form Object

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/before_form_screen_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_before_form_screen_wrapper/](https://fluentforms.com/docs/fluentform_before_form_screen_wrapper/)

## Description

This action runs after the fluent form editor wrapper in the admin panel. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/before_form_screen_wrapper', $form_id, $route);
```

## Usage

```
add_action('fluentform/before_form_screen_wrapper', 'custom_function', 10, 2);

function custom_function()
{
   // Do your stuff here
}
```

## Parameters

- **$form_id** (int) Form ID
- **$route** (string) Route

## Source Code

This hook is located in fluentform/app/Views/admin/form/form_wrapper.php

---

## fluentform/after_form_screen_wrapper

**Source:** [https://fluentforms.com/docs/fluentform_after_form_screen_wrapper/](https://fluentforms.com/docs/fluentform_after_form_screen_wrapper/)

## Description

This action runs after the fluent form editor wrapper in the admin panel. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/after_form_screen_wrapper', $form_id, $route);
```

## Usage

```
add_action('fluentform/after_form_screen_wrapper', 'custom_function', 10, 2);

function custom_function()
{
   // Do your stuff here
}
```

## Parameters

- **$form_id** (int) Form ID
- **$route** (string) Route

## Source Code

This hook is located in fluentform/app/Views/admin/form/form_wrapper.php

---

## fluentform/after_editor_start

**Source:** [https://fluentforms.com/docs/fluentform_after_editor_start/](https://fluentforms.com/docs/fluentform_after_editor_start/)

## Description

This action runs after the fluent form editor wrapper. If you need to do anything in the background you can use this action.

```
do_action('fluentform/after_editor_start');
```

## Usage

```
add_action('fluentform/after_editor_start', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This hook is located in fluentform/app/Views/admin/form/editor.php

---

## fluentform/before_editor_start

**Source:** [https://fluentforms.com/docs/fluentform_before_editor_start/](https://fluentforms.com/docs/fluentform_before_editor_start/)

## Description

This action runs before the fluent form editor in the admin panel. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform_before_editor_start');
```

## Usage

```
add_action('fluentform/before_editor_start', 'custom_function', 10, 0);

function custom_function()
{
   // Do your stuff here
}
```

## Source Code

This hook is located in fluentform/app/Views/admin/form/editor.php

---

## fluentform/loading_editor_assets

**Source:** [https://fluentforms.com/docs/fluentform_loading_editor_assets/](https://fluentforms.com/docs/fluentform_loading_editor_assets/)

## Description

This action runs during asset loading for the editor. You can hook into this action and load your custom scripts or do other tasks.

```
/*
* Source Action
*/
do_action('fluentform/loading_editor_assets', $form);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/loading_editor_assets', 'your_custom_function', 10, 1);

function your_custom_function($form)
{
   // Do your stuff here
}
```

## Parameters

- **$form**(object) Form Object

## Source Code

This hook is located in fluentform/app/Modules/Registerer/Menu.php

---

## fluentform/editor_init

**Source:** [https://fluentforms.com/docs/fluent_editor_init/](https://fluentforms.com/docs/fluent_editor_init/)

## Description

This action runs right after initializing the fluent form editor in the admin panel. If you need to do anything in the background you can use this action.

```
/*
* Source Action
*/
do_action('fluentform/editor_init', $components);
```

## Usage

```
add_action('fluentform/editor_init', 'custom_function', 10, 1);

function your_custom_after_submission_function($components)
{
   // Do your stuff here
}
```

## Parameters

- **$components**(array) Editor Components

## Source Code

This hook is located in fluentform/app/Modules/Component/Component.php

---

## fluentform/after_save_form_settings

**Source:** [https://fluentforms.com/docs/fluentform_after_save_form_settings/](https://fluentforms.com/docs/fluentform_after_save_form_settings/)

## Description

This action runs after saving the form from the admin panel. You can hook into this action and extract any data you data need from the $allSettings array.

```
/*
* Source Action
*/
do_action('fluentform/after_save_form_settings', $formId, $allSettings);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/after_save_form_settings', 'your_custom_function', 10, 2);

function your_custom_function($formId, $allSettings)
{
   // Do your stuff here
}
```

## Parameters

- **$formId**(int) Form ID
- **$allSettings** (array) Settings Data

## Source Code

This action is located in fluentform/app/Services/Settings/SettingsService.php and fluentform/app/Modules/Form/Settings/FormSettings.php

---

## fluentform/form_imported

**Source:** [https://fluentforms.com/docs/fluentform_form_imported/](https://fluentforms.com/docs/fluentform_form_imported/)

## Description

This action is fired after a form is imported. So you can use this hook and run your script after a form is imported

```
/*
* Source Action
*/
do_action('fluentform/form_imported', $formId);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/form_imported', 'your_custom_function', 10, 1);

function your_custom_function($formId)
{
   // Do your stuff here
}
```

Here is another example.

```
class GenerateStyle{
    
     public function __construct()
     {
        add_action('flentform/form_duplicated', array($this, 'regenrateStyle'), 10, 1);
     }
     
     public function regenrateStyle($formId)
     {
         $styles = Helper::getFormMeta($formId, 'ff_form_styles');         
         if ($styles) {             
             $stylerGenerator = new FormStylerGenerator();             
             $css = $stylerGenerator->generateFormCss('.fluentform_wrapper' . $formId, $styles);
             Helper::setFormMeta($formId, '_ff_form_styler_css', $css);
             do_action('fluentform/after_style_generated', $formId);
         }
     }
}
```

## Parameters

- **$formId**(int) Form ID

## Source Code

This hook is located in fluentform/app/Services/Form/FormService.php

---

## flentform/form_duplicated

**Source:** [https://fluentforms.com/docs/flentform_form_duplicated/](https://fluentforms.com/docs/flentform_form_duplicated/)

## Description

After a form is duplicated this action is fired.

```
/*
* Source Action
*/
do_action('flentform/form_duplicated', $newFormId);
```

## Usage

The following would apply to all forms:

```
add_action('flentform/form_duplicated', 'custom_function', 10, 1);

function custom_function($newFormId)
{
   // Do your stuff here
}
```

## Parameters

- **$newFormId**(int) Form ID

## Source Code

This action is located in fluentform/app/Services/Form/FormService.php

---

## fluentform/before_insert_payment_form

**Source:** [https://fluentforms.com/docs/fluentform_before_insert_payment_form/](https://fluentforms.com/docs/fluentform_before_insert_payment_form/)

## Description

If the form has payment then this action will be fired before submission. You can use this to do your payment related custom tasks.

```
/*
* Source Action
*/
do_action('fluentform/before_insert_payment_form', $insertData, $data, $form);
```

## Usage

```
add_action('fluentform/before_insert_payment_form', 'custom_funtion', 10, 3);

function custom_function($insertData, $data, $form)
{
   // Do your stuff here
}
```

## Parameters

- **$insertData**(array) Form response data
- **$data** (array) Input data
- **$form** (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Source Code

This action is located in fluentform/app/Services/Form/SubmissionHandlerService.php

---

## fluentform/before_form_actions_processing

**Source:** [https://fluentforms.com/docs/fluentform_before_form_actions_processing/](https://fluentforms.com/docs/fluentform_before_form_actions_processing/)

## Description

This action fires after form submission and before processing the form’s additional actions. If you want to do any task before form submission

```
/*
* Source Action
*/
do_action('fluentform/before_form_actions_processing', $insertId, $formData, $form);
```

## Usage

The following would apply to a specific form id: 5:

```
add_action('fluentform/before_form_actions_processing', 'your_custom_function', 10, 3);

function your_custom_function($insertId, $formData, $form)
 {
     if ($form->id != 5) {
         return;
     }
     // Do your stuff here
 }
```

## Parameters

- **$insertId** (integer) Entry ID of this response
- **$formData** (array) Entry Response as key-value pairs array as input name as array key
- **$form** (object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Source Code

This action is located in fluentform/app/Services/Form/SubmissionHandlerService.php

---

## fluentform/loaded

**Source:** [https://fluentforms.com/docs/fluentform_loaded/](https://fluentforms.com/docs/fluentform_loaded/)

## Description

This action fires after fluentform plugin is loaded.

```
/*
* Source Action
*/
do_action('fluentform/loaded');
```

## Usage

```
add_action('fluentform/loaded', function ()
{
   // Do your stuffs here
}, 10, 0);
```

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This hook is located in fluentform/boot/app.php

---

## fluentform/before_form_render

**Source:** [https://fluentforms.com/docs/fluentform_before_form_render/](https://fluentforms.com/docs/fluentform_before_form_render/)

## Description

This action fires right before the form is rendered. If you want to do a certain task after a form rendering then you can catch this action hook and do your staff. For example, checking for some conditions on whether to show the form or not.

```
/*
* Source Action
*/
do_action('fluentform/before_form_render', $form);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/before_form_render', 'your_custom_function', 10, 1);

function your_custom_function( $form )
{
   // Do your stuffs here
}
```

## Parameters

- **$form** (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme. Also, you can use php snippet plugins.

## Source Code

This hook is located in fluentform/app/Services/FormBuilder/FormBuilder.php.

---

## fluentform/inserted_new_form

**Source:** [https://fluentforms.com/docs/fluentform_inserted_new_form/](https://fluentforms.com/docs/fluentform_inserted_new_form/)

## Description

This action fires after the new form is created. If you want to do a certain task after a form creation then you can catch this action hook and do your staff.

```
/*
* Source Action
*/
do_action('fluentform/inserted_new_form', $formId, $insertData);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform_inserted_new_form', 'your_custom_function', 10, 2);

function your_custom_function($formId, $insertData)
{
   // DO your stuffs here
}
```

## Parameters

- **$insertData** (array) Form Initial Array

- **$formId** int Form ID

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Services/Form/FormService.php

---

## fluentform/before_submission_confirmation

**Source:** [https://fluentforms.com/docs/fluentform_before_submission_confirmation/](https://fluentforms.com/docs/fluentform_before_submission_confirmation/)

## Description

This action fires after all the actions are completed regarding the form submission. After this hook the final form submission Ajax response completes. It’s recommended to use this action to do your own integrations or response to your own confirmation as an Ajax response.

```
/*
* Source Action
*/
do_action('fluentform/before_submission_confirmation', $insertId, $this->formData, $this->form);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/before_submission_confirmation', 'your_custom_confirmation_function', 20, 3);

function your_custom_confirmation_function($entryId, $formData, $form)
{
   // DO your stuffs here
}
```

The following would apply to a specific form id: 5:

```
add_action('fluentform/before_submission_confirmation', 'your_custom_confirmation_function', 20, 3);

function your_custom_confirmation_function($entryId, $formData, $form)
{
     if ($form->id != 5) {
         return;
     }
     // DO your stuff here
}
```

## Parameters

- **$entryId**(integer) Entry ID of this response
- **$formData** (array) Entry Response as key-value pairs array as input name as array key
- **$form** (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Services/Form/SubmissionHandlerService.php

---

## fluentform/submission_inserted

**Source:** [https://fluentforms.com/docs/fluentform_submission_inserted/](https://fluentforms.com/docs/fluentform_submission_inserted/)

## Description

This action fires after the [$insertData](https://fluentforms.com/docs/submission_data-array/) is inserted into the database. In this action Fluent Form’s own defined integrations fires and broadcast emails. All the other integrations actually broadcasted using smart background processing. If you want to connect your submission data to 3rd party servers, it’s highly recommended to build an addon to use the background processing feature of Fluent Forms.

```
/*
* Source Action
*/
do_action('fluentform/submission_inserted', $insertId, $this->formData, $this->form);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/submission_inserted', 'your_custom_after_submission_function', 20, 3);

function your_custom_after_submission_function($entryId, $formData, $form)
{
   // DO your stuffs here
}
```

The following would apply to a specific form id: 5:

```
add_action('fluentform/submission_inserted', 'your_custom_after_submission_function', 20, 3);

function your_custom_after_submission_function($entryId, $formData, $form)
{
  if($form->id != 5) {
      return;
   }
   // DO your stuffs here
}
```

## Parameters

- **$entryId**(integer) Entry ID of this response
- **$formData** (array) Entry Response as key-value pairs array as input name as array key
- **$form** (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Services/Form/SubmissionHandlerService.php

---

## fluentform/before_insert_submission

**Source:** [https://fluentforms.com/docs/fluentform_before_insert_submission/](https://fluentforms.com/docs/fluentform_before_insert_submission/)

## Description

This action fires after the submission validation is completed and just before insert submission data to the database. If you want to do extra validation of the submitted data then you can catch this action hook and do your staff.

```
/*
* Source Action
*/
do_action('fluentform/before_insert_submission', $insertData, $data, $form);
```

## Usage

The following would apply to all forms:

```
add_action('fluentform/before_insert_submission', 'your_custom_before_submission_function', 10, 3);

function your_custom_before_submission_function($insertData, $data, $form)
{
   // DO your stuffs here
}
```

The following would apply to a specific form id: 5:

```
add_action('fluentform/before_insert_submission', 'your_custom_before_submission_function', 10, 3);

function your_custom_before_submission_function($insertData, $data, $form)
{
   if($form->id != 5) {
      return;
   }

   // DO your stuffs here
}
```

## Parameters

- **$insertData** (array) [submission_data Array](https://fluentforms.com/docs/submission_data-array/)

- **$data** (array) $_POST[‘data’] Form Submission

- **$form**  (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action is located in fluentform/app/Services/Form/SubmissionHandlerService.php

---

