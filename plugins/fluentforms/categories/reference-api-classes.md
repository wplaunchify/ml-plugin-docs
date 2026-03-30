# Reference Api Classes

*Category from Fluent Forms documentation*

---

## BaseProcessor Class

**Source:** [https://fluentforms.com/docs/baseprocessor-class/](https://fluentforms.com/docs/baseprocessor-class/)

## Introduction

The Fluent Forms BaseProcessor class offers developers to process payment methods created from the [BasePaymentMethod](https://fluentforms.com/docs/basepaymentmethod-class/) class.

The API Function is automatically called when the form has payment for the selected payment methods. The BaseFieldManager class is located at the pro version of fluetnform plugin in*src/Payments/PaymentMethods/BaseProcessor.php*.

**Notice: Please do not initiate this class directly. You should extend this class to add a new payment processor.**

## Methods

### init()

You need to override this method using the following hooks. You can call it with your custom payment method class extended from the  [BasePaymentMethod](https://fluentforms.com/docs/basepaymentmethod-class/) class, please check this [link](https://fluentforms.com/docs/basepaymentmethod-class/) for details.  At the bottom of this page, you will see an example implementation of this method with all available parameters of these hooks.

```
/*
* $this->method Should match your payment method key
*/
public function init()
{
    add_action('fluentform/process_payment_' . $this->method, array($this, 'handlePaymentAction'), 10, 4);
    add_action('fluentform/payment_frameless_' . $this->method, array($this, 'handleSessionRedirectBack'));

    add_action('fluentform/ipn_endpint_' . $this->method, function () {
            //if IPN verification is needed
    });
}
```

### handlePaymentAction()

This is an abstract class that you have to implement in your own class.  This is the most crucial part where the payment should be processed and then the transaction data is inserted into the database.

```
/* 
* Process and finalize the payment transaction
* @param $submissionId  - Form Submission ID
* @param $submissionData - Form Submission Data Array
* @param $form - Form Object
* @param $methodSettings - Payment Method Settins Data Array
*/

public abstract function handlePaymentAction($submissionId, $submissionData, $form, $methodSettings)
```

### setSubmissionId($submissionId)

This method will set the form submission ID property. It should be called from handlePaymentAction where the $submissionId parameter is available. The following methods does not need to be created in your class you can call this methods from the base class.

```
/*
* Set the currrent submission ID
* @param $submissionId  - Form Submission ID
*/
public function setSubmissionId($submissionId)
```

### insertTransaction($data)

This method will insert the transaction data into the database. It should be called from the **handlePaymentAction()** method or when you need to insert a transaction record after verifying data.

```
/*
* @param data - Transaction Data array
*/
public function insertTransaction($data)
```

### insertRefund($data)

This method is used to insert refund data.

```
/*
* @param data - Refund Data array
*/
public function insertRefund($data)
```

### getTransaction($transactionId, $column = ‘id’)

This method is called to get transaction data. You can use this inside **handlePaymentAction()** method to process the transaction.

```
/*
* @param transactionId - Transaction ID
* $column - Column Name to match with 
*/
public function getTransaction($transactionId, $column = 'id')
```

### getRefund($refundId, $column = ‘id’)

Use this method to get refund data.

```
/*
* @param @refundId - RefundId ID
* $column - Column Name to match with 
*/
public function getRefund($refundId, $column = 'id')
```

### changeSubmissionPaymentStatus($newStatus)

Update the current submission status for example paid or pending.  After processing a transaction update the payment status using this method.

```
/*
*@param $newStatus - New submission status (string)
*/
public function changeSubmissionPaymentStatus($newStatus)
```

### changeTransactionStatus($transactionId, $newStatus)

Use this method to update the status of the transaction.

```
/*
*@param $transactionId - Transaction ID 
*@param $newStatus - New Status 
*/
public function changeTransactionStatus($transactionId, $newStatus)
```

### recalculatePaidTotal()

Use this method to recalculate the current submission total amount. This method does not need to be created in your class you can call this method from the base class.

```
public function recalculatePaidTotal()
```

### updateTransaction($transactionId, $data)

This method updates transaction data.

```
/*
*@param $transactionId - Transaction ID 
*@param $data - Transaction data array 
*/

public function updateTransaction($transactionId, $data)
```

### handleSessionRedirectBack()

This method handles the payment session redirect back.

```
public function handleSessionRedirectBack($data)
```

### setMetaData()

Submission metadata is saved using this method.

```
/*
* @param $name - Meta Name
* @param @value - Meta Value
*/
public function setMetaData($name, $value)
```

### getReturnData()

This method will return submission data which will be used during the final payment processing.

```
public function getReturnData()
```

This method will save metadata for the submission data.

### All Together

Here is an example implementation of the BaseProcessor class.

```
<?php
 if (!defined('ABSPATH')) {
     exit;
 }

use \FluentFormPro\Payments\PaymentMethods\BaseProcessor;

class MyPaymentProcessor extends BaseProcessor
{
    public $method = 'methodKey';

    protected $form;  //Form Object

    public function init()
    {
        add_action('fluentform/process_payment_' . $this->method, array($this, 'handlePaymentAction'), 10, 4);

        add_action('fluentform/payment_frameless_' . $this->method, array($this, 'handleSessionRedirectBack'));
    }

    /*
    * This is the most important part where you need to proccess & verify the payment using the necesary task
    * using the provided data parameters
    *
    * @param $submissionId  - Form Submission ID
    * @param $submissionData - Form Submission Data
    * @param $form - Form Data
    * @param $methodSettings - Payment Method Settins Data
    */

    public function handlePaymentAction($submissionId, $submissionData, $form, $methodSettings)
    {
        $this->form = $form;
        $this->setSubmissionId($submissionId);

        /* Your code here : Redirect        
        *  payment method API ,then insert the transaction
        */ Transaction data format

        $this->insertTransaction([
            'transaction_type' => 'onetime',
            'payment_total' => $this->getAmountTotal(),
            'status' => 'pending', //paid or pending
            'currency' => $currency ,
            'payment_mode' => $this->getPaymentMode()
        ]);
        $this->handleRedirect($transaction, $submission, $form, $methodSettings);
    }
   
   public function handleRedirect($transaction, $submission, $form, $methodSettings)
    {
        $successUrl = add_query_arg(array(
            'fluentform_payment' => $submission->id,
            'payment_method'     => $this->method,
            'transaction_hash'   => $transaction->transaction_hash,
            'type'               => 'success'
        ), site_url('/'));

        $listener_url = add_query_arg(array(
            'fluentform_payment_api_notify' => 1,
            'payment_method'                => $this->method,
            'submission_id'                 => $submission->id,
            'transaction_hash'              => $transaction->transaction_hash,
        ), home_url('index.php'));

        $paymentArgs = array(
            'amount' => [
                'currency' => $transaction->currency,
                'value' => number_format((float) $transaction->payment_total / 100, 2, '.', '')
            ],
            'redirectUrl' => $successUrl,
            'webhookUrl' => $listener_url,
            'metadata' => json_encode([
                'form_id' => $form->id,
            ]),
        );
        $paymentIntent = (new IPN())->makeApiCall('payments', $paymentArgs, $form->id, 'POST');

        if(is_wp_error($paymentIntent)) {
  
            wp_send_json_success([
                'message' => $paymentIntent->get_error_message()
            ], 423);
        }

        wp_send_json_success([
            'nextAction'   => 'payment',
            'actionName'   => 'normalRedirect',
            'redirect_url' => $paymentIntent['redirectURL'],
            'message'      => 'Redirect Message',
            'result'       => [
                'insert_id' => $submission->id
            ]
        ], 200);
    }

    /*
    * This method is called when you are redirected back to your site.
    *
    * @param $data  - $_GET data of recirect back page
    */

    public function handleSessionRedirectBack($data)
    {
        // Here Verify and proccess your payment redirect back using the payment method API 
        
        $payment = (new MyPaymentAPIDemo())->makeApiCall($data); // Make API call from your payment method 
        $isSuccess = $payment['status'] == 'success';
        $submission = $this->getSubmission();
        $transactionHash = sanitize_text_field($data['transaction_hash']);
        $transaction = $this->getTransaction($transactionHash, 'transaction_hash');
        if($isSuccess) {
             // Handle payment success
             $this->handlePaid($submission, $transaction, $payment)
        } else {
             // Handle payment fail
        }
    }

    public function getPaymentMode()
    {
        return $this->method;
    }
    public function handlePaid($submission, $transaction, $vendorTransaction)
    {
        // Check if actions are fired
        if ($this->getMetaData('is_form_action_fired') == 'yes') {
            return $this->completePaymentSubmission(false);
        }
        $status = 'paid';
        // Let's make the payment as paid
        $updateData = [
            'payment_note' => maybe_serialize($vendorTransaction),
            'charge_id'    => sanitize_text_field($vendorTransaction['id']),
            'payer_email' => $vendorTransaction['email']
        ];

        $this->updateTransaction($transaction->id, $updateData);
        $this->changeSubmissionPaymentStatus($status);
        $this->changeTransactionStatus($transaction->id, $status);
        $this->recalculatePaidTotal();

        $returnData = $this->getReturnData();
        $this->setMetaData('is_form_action_fired', 'yes');

        return $returnData;
    }
}
```

## Final Note

Please check the existing payment processor files to get a more clear concept of this class and implement your custom payment system. There are other methods also to help with possessing a payment. If you have any questions please feel free to reach out to our [facebook community group](https://www.facebook.com/groups/fluentforms/)

---

## Base Payment Method Class

**Source:** [https://fluentforms.com/docs/basepaymentmethod-class/](https://fluentforms.com/docs/basepaymentmethod-class/)

## Introduction

The Fluent Forms BasePaymentMethod Class provides developers with a simple way to add new Payment methods easily. The [BaseProcessor](http://BasePe) Class is also required for the payment method background processing. The BasePaymentMethod class mainly works for displaying and storing the payment method settings, while the [BaseProcessor](https://fluentforms.com/docs/baseprocessor-class/) class process and finalize the payments.

The API Functions are automatically included when Fluent Forms Pro is Booted. The BaseFieldManager class is located in *src/Payments/PaymentMethods/BasePaymentMethod.php* .

**Notice: Please do not initiate this class directly. You should extend this class to add start adding a new payment method**

## Methods

### __construct()

```
<?php

use FluentFormPro\Payments\PaymentMethods\BasePaymentMethod;

class MyCustomPaymentMethod extends BasePaymentMethod
{    
     /*
     * Extend your payment method with a payment key identifier
     */
     public function __construct()
     {
         parent::__construct('myCustomPaymentKey');
     }
```

This is an example of how you can extend the BasePaymentMethod. This key will be used to identify the payment later on for the payment actions.

### init()

This is the main function that will run all the required actions for this payment settings and processing. These hooks will be called dynamically during the payment processing & settings after the payment method setup is completed.

```
public function init()
    {
        add_filter('fluentform/payment_method_settings_validation_'.$this->key, array($this, 'validateSettings'), 10, 2);

        if(!$this->isEnabled()) {
            return;
        }

        add_filter('fluentform/transaction_data_' . $this->key, array($this, 'modifyTransaction'), 10, 1);

        add_filter(
            'fluentform/available_payment_methods',
            [$this, 'pushPaymentMethodToForm']
        );
    }
```

### pushPaymentMethodToForm($methods)

This method will push the payment method with existing $methods to form the editor. So it can be added to your fluentform.  Here is the format you need to follow to add the method. The $methods parameter is available with the **fluentform/available_payment_methods** hook.

```
/*
* @param $methods - Payment Methods Array data
*/    
public function pushPaymentMethodToForm($methods)
{
    $methods[$this->key] = [
        'title' => __('CustomPayment Method', 'fluentformpro'),
        'enabled' => 'yes',
        'method_value' => $this->key,
        'settings' => [
            'option_label' => [
                 'type' => 'text',
                 'template' => 'inputText',
                 'value' => 'Pay with MyCustomPaymentMethod ',
                 'label' => 'Method Label'
             ]
         ]
    ];
    return $methods;
}
```

### modifyTransaction($transaction)

This method modifies a transaction record with the payment method dashboard entry URL.  Use this to link the transaction with your payment method’s dashboard transaction page using the **$transaction->charge_id** charge id. The $transaction parameter is available with the ‘fluentform_transaction_data_'{$key} hook.

```
/*
* @param $transaction - Transaction Data array
*/
public function modifyTransaction($transaction)
{
   if ($transaction->charge_id) {
        $transaction->action_url =  'https://dashboard.mypaymentsitedemo.com/app/payments/'.$transaction->charge_id;
    }
    return $transaction;
}
```

## getGlobalFields()

This method will return all the admin settings for the current payment method. You can add your own settings also here.  At the end of this page, you will see an example with the settings format.

```
abstract public function getGlobalFields();
```

## getGlobalSettings()

This method should return the saved data from the database. It will be based on the settings that were provided by **getGlobalFields()** method.  You can get your settings like this **get_option(‘fluentform_payment_settings_{key}’, [])**;

```
abstract public function getGlobalSettings();
```

## Further read

### Validate settings of payment method

If you want to validate the payment admin settings use this hook

```
add_filter('fluentform/payment_method_settings_validation_{key}', function ($errors, $settings) {
        if(!($settings['test_api_key']) && !($settings['live_api_key'])) {
             $errors['test_api_key'] = __('API Key is required', 'fluentformpro');
        }
        return $errors;
}, 10, 2);
```

## All Together

Your ideal implementation should look like this with validation.

```
class MyCustomPaymentMethod extends BasePaymentMethod
{
    public function __construct()
    {
        parent::__construct('myCustomPaymentKey');
    }

    public function init()
    {  
        add_filter('fluentform/payment_method_settings_validation_'.$this->key, array($this, 'validateSettings'), 10, 2);

        add_filter('fluentform/transaction_data_' . $this->key, array($this, 'modifyTransaction'), 10, 1);

        add_filter(
            'fluentform/available_payment_methods',
            [$this, 'pushPaymentMethodToForm']
        );
    }

    public function pushPaymentMethodToForm($methods)
    {
        $methods[$this->key] = [
            'title' => __('CustomPayment Method', 'fluentformpro'),
            'enabled' => 'yes',
            'method_value' => $this->key,
            'settings' => [
                'option_label' => [
                    'type' => 'text',
                    'template' => 'inputText',
                    'value' => 'Pay with MyCustomPaymentMethod ',
                    'label' => 'Method Label'
                ]
            ]
        ];

        return $methods;
    }

    public function validateSettings($errors, $settings)
    {
        if(!($settings['test_api_key']) && !($settings['live_api_key'])) {
            $errors['test_api_key'] = __('API Key is required', 'fluentformpro');
        }
        return $errors;
    }

    public function modifyTransaction($transaction)
    {
        return $transaction;
    }

    public function getGlobalFields()
    {
        return [
            'label' => 'MyCustom Payment Settings',
            'fields' => [
                [
                    'settings_key' => 'is_active',
                    'type' => 'yes-no-checkbox',
                    'label' => 'Status',
                    'checkbox_label' => 'Enable MyCustom Payment Payment Method'
                ],
                [
                    'settings_key' => 'payment_mode',
                    'type' => 'input-radio',
                    'label' => 'Payment Mode',
                    'options' => [
                        'test' => 'Test Mode',
                        'live' => 'Live Mode'
                    ],
                    'info_help' => 'Select the payment mode. for testing purposes you should select Test Mode otherwise select Live mode.',
                    'check_status' => 'yes'
                ],
                [
                    'settings_key' => 'test_api_key',
                    'type' => 'input-text',
                    'data_type' => 'password',
                    'placeholder' => 'Test API Key',
                    'label' => 'Test API Key',
                    'inline_help' => 'Provide your test api key for your test payments',
                    'check_status' => 'yes'
                ],
                [
                    'settings_key' => 'live_api_key',
                    'type' => 'input-text',
                    'data_type' => 'password',
                    'label' => 'Live API Key',
                    'placeholder' => 'Live API Key',
                    'inline_help' => 'Provide your live api key for your live payments',
                    'check_status' => 'yes'
                ]
            ]
        ];
    }

    public function getGlobalSettings()
    {
        return get_option('fluentform/payment_settings_'.$this->key, []);
    }
}
```

## Final Note

It’s highly recommended to explore our source files and try to understand the procedure. Once you understand it’s very easy to implement your own custom payment method.

If you have any questions please feel free to reach out to our [facebook community group](https://www.facebook.com/groups/fluentforms/)

---

## PDF Template Manager Class

**Source:** [https://fluentforms.com/docs/pdf-templatemanager-class/](https://fluentforms.com/docs/pdf-templatemanager-class/)

## Introduction

[Fluent Forms PDF](https://wordpress.org/plugins/fluentforms-pdf/) extension’s TemplateManager class allows developers to create custom PDF templates in an easy way.

You will need to extend the class **TemplateManager** and push the class using the filter hook *fluentform/pdf_templates* to create a new template. Please follow this documentation and create your own PDF template extension Plugin.

You can find this **TemplateManager** class file here :

*wp_lab/wp-content/plugins/fluentforms-pdf/Classes/Templates/TemplateManager.php*

## Methods

### __construct()

This is the construct method of this class. You have to pass an Application object. To pass the Application object you can include it using the following namespace. Here is an example of the code so far:

```
use FluentForm\Framework\Foundation\Application;

class FluentExtraTemplateDemo extends \FluentFormPdf\Classes\Templates\TemplateManager
{

    public function __construct(Application $app)
    {
        parent::__construct($app);
    }
}
```

### getDefaultSettings()

This method will store the default settings of the PDF template. You will need to return an array of the settings key & value.

```
public function getDefaultSettings()
    {
        return [
            'header' => '<h2>Hello From My Demo Template</h2>',
            'footer' => '<p>Footer</p>',
            'body'   => 'Hello There',
            'demo'   => ''
        ];
    }
```

### getSettingsFields()

This method will render input fields for the PDF template settings page, based on the returned data. The key value used in this field needs to match with the **getDefaultSettings()**

You can use the prebuilt input components to create your settings page, here is a documentation [link](https://fluentforms.com/docs/integration-feed-fields-api/) where you can find the details list of these input components.

Required properties for the fields array:

- key               : Settings Unique Key
- label             : Settings Input Label
- component : Pass the prebuild input component.

Here is example of this method:

```
public function getSettingsFields()
{
    return array(
        [
            'key'        => 'header',
            'label'      => 'Header Content',
            'tips'       => 'Write your header content which will be shown every page of the PDF',
            'component'  => 'text'
        ],
        [
            'key'       => 'body',
            'label'     => 'PDF Body Content',
            'tips'      => 'Write your Body content for actual PDF body',
            'component' => 'wp-editor'
        ],
        [
            'key'       => 'footer',
            'label'     => 'Footer Content',
            'tips'      => 'Write your Footer content which will be shown every page of the PDF',
            'component' => 'wp-editor'
        ],
        [
            'key'       => 'demo',
            'label'     => 'Demp Input',
            'tips'      => 'Input Help Text',
            'component' => 'text'
        ],

    );
}
```

The filed ‘tips’ will show the additional help text on hover, this method is almost identical to [getSettingsFields()](https://fluentforms.com/docs/integrationmanager-class/#8-toc-title) in the [Integration Manager Class](https://fluentforms.com/docs/integrationmanager-class/). Here is a screenshot of the above code :

![](https://fluentforms.com/wp-content/uploads/2020/08/image-30-1024x651.png)

### generatePdf()

This is the most important method where the PDF will be generated. You will get four parameters here :

- **$submissionId**  : Current submission ID
- **$feed**                   :  PDF feed settings
- **$outPut = ‘I**‘       : Do not change this
- **$fileName = ”**: File name

The $submissionId will contain the current submission ID. $feed contains array data of the PDF template feed settings. This will store the input data which was generated from **getSettingsFields()** method.  $fileName will be the generated PDF filename.

**Do not change the value of the $outPut = ‘I’*

Finally, you will need to call a pre-built function pdfBuilder() and return it to create the PDF file.  This method needs four parameters to be passed, these are :

- **$fileName**   : PDF File name
- **$feed**            : $feed Parameter
- **$htmlBody**  : The HTML body and style of your PDF template
- **$footer**        : PDF Footer
- **$outPut**       : $output Parameter

Do not add a pdf extension (.pdf) in the file name, it will be done automatically.

```
return $this->pdfBuilder($fileName, $feed, $htmlBody, $footer, $outPut);
```

The HTML can be created by fetching the user submitted form data and your custom data. Here is an example :

```
public function generatePdf($submissionId, $feed, $outPut = 'I', $fileName = '')
{
    $submission = wpFluent()->table('fluentform_submissions') //submission data object
        ->where('id', $submissionId)
        ->first();

    $htmlBody = '<h1>My PDF body</h1>';                       // Html Body
    $footer   = $submission->created_at;                      // footer
    $fileName = 'my-pdf-'.$submissionId;                      // filename

    return $this->pdfBuilder($fileName, $feed, $htmlBody, $footer, $outPut);
}
```

## All Together

A demo TemplateManager class will look like this :

```
use FluentForm\Framework\Foundation\Application;

class FluentExtraTemplateDemo extends \FluentFormPdf\Classes\Templates\TemplateManager
{

    public function __construct(Application $app)
    {
        parent::__construct($app);
    }

    public function getDefaultSettings()
    {
        return [
            'header' => '<h2>Hello From My Demo Template</h2>',
            'footer' => '<p>Footer</p>',
            'body'   => 'Hello There',
        ];
    }

public function getSettingsFields()
{
    return array(
        [
            'key'       => 'header',
            'label'     => 'Header Content',
            'tips'      => 'Write your header content which will be shown every page of the PDF',
            'component' => 'wp-editor'
        ],
        [
            'key'       => 'body',
            'label'     => 'PDF Body Content',
            'tips'      => 'Write your Body content for actual PDF body',
            'component' => 'wp-editor'
        ],
        [
            'key'       => 'footer',
            'label'     => 'Footer Content',
            'tips'      => 'Write your Footer content which will be shown every page of the PDF',
            'component' => 'wp-editor'
        ],
        [
            'key'       => 'demo',
            'label'     => 'Demp Input',
            'tips'      => 'Input Help Text',
            'component' => 'text'
        ],
    );
}

public function generatePdf($submissionId, $feed, $outPut = 'I', $fileName = '')
    {
        $submission = wpFluent()->table('fluentform_submissions') //submission data
            ->where('id', $submissionId)
            ->first();
        $htmlBody = '<h1>My PDF Body & other elements</h1>';     // Html Body
    
        $footer = $submission->created_at;                       // footer
        $fileName = 'my-pdf-'.$submissionId;                     // filename
    
        return $this->pdfBuilder($fileName, $feed, $htmlBody, $footer, $outPut);
    }
}
```

## Adding the Template extension as a Plugin

After completing the template class you need to push it into the PDF template list. You can use the *fluentform/pdf_templates* filter hook to push the class. This can be done by creating a new plugin or inside your function.php file.

You will get 2 parameters in the *fluentform/pdf_templates* filter.

- **$templates** (Array) Template class & configuration list
- key : template_key
- name       : Template name
- class         : Template class
- key           : template_key
- preview  : Template preview  image location
- **$form** (Object) [The $form Object](https://fluentforms.com/docs/form-object/)

Here is an example of how we can create a new plugin and add the template you created. Here FluentExtraTemplateDemo.php file is the file name that you will create.

```
add_action('fluentform/loaded', function () {
    if(!defined('FLUENTFORM_PDF_VERSION')) {
        return;                                 //checking if fluent form is activated otherwise do nothing
    }
    include 'FluentExtraTemplateDemo.php';      // including the template class you just created
    add_filter('fluentform/pdf_templates', function ($templates, $form) {
        $templates['demo_template'] = [
            'name' => 'My DEMO TEMPLATE',
            'class' => '\FluentExtraTemplateDemo',
            'key' => 'demo_template',
            'preview' => get_template_directory_uri(). 'assets/images/tabular.png'
        ];
        return $templates;
    }, 10, 2);

});
```

You can include more classes and add new templates using this method.  If you have any queries feel free to reach our support team or ask questions in our [facebook community group](https://www.facebook.com/groups/fluentforms/). Also do not forget to share your thoughts on this documentation, by adding your comment or a click on the icons below.

---

## Integration Manager Class

**Source:** [https://fluentforms.com/docs/integrationmanager-class/](https://fluentforms.com/docs/integrationmanager-class/)

## Introduction

The Fluent Forms Integration Manager Class provides developers with a very easy & simple solution to add new integration in a time-effective way. Follow this documentation to create your own Integration.

You just need to provide your Integration settings data structure and the fields will be automatically generated for you. Please check this [Integration Feed – Fields API](https://fluentforms.com/docs/integration-feed-fields-api/) for the available input component that you can use for your integration settings.

You can extend this class to create your own Integration. Include the class using the following namespace.

```
use \FluentForm\App\Services\Integrations\IntegrationManager;
```

This class file location: /plugins/fluentform/app/Services/Integrations/IntegrationManager.php.

Please checkout the [github](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/BaseIntegration.php) file to get more information.

## Methods

### __construct()

This is the construct method of this class. This method needs to override. You have to pass a Application object and a few other required parameters. To pass Application object you can include it using the following namespace

```
use \FluentForm\Framework\Foundation\Application;
```

Here is an example of how you can override. You can use the following filter *fluentform_notifying_async_*{{integrationKey}} when developing the integration it will make debugging easier.

```
public function __construct(Application $application)
{
    parent::__construct(
        $application,
        'MyAwesomeIntegration',                           // title
        'myIntegrationKey',                               // integration key
        'my_integration_details',                         // option key
        'my_integration_feed',                            // settings key
        11                                                // priority 
    );

    $this->description = '';                              // Integration details
 
    $this->logo = '/my-integration-image-file-path.png';  // Integration Logo
    $this->registerAdminHooks();                          // Internal Functions
    
//  add_filter('fluentform/notifying_async_{integrationKey}', '__return_false');
}
```

### getGlobalFields()

This method will need to return the settings data format for the integration API connection. You have to keep the structure as same as the example.  This setting will store the API key & additional required data to connect with your Integration API.

Here is an **example** of the data format.

```
[
    'logo'             => $this->logo,                                         // Logo Path which was set in constructor
    'menu_title'       => __('Integration Settings', 'fluentform'),            // Integration Settins Title
    'menu_description' => __('Description', 'fluentform'),                     // Integration Settins Details
    'valid_message'    => __('Your API Key is valid', 'fluentform'),           // Valid API Message 
    'invalid_message'  => __('Your API Key is not valid', 'fluentform'),       // Invalid API Message
    'save_button_text' => __('Save Settings', 'fluentform'),                   // Settings Save Button tTxt
    'fields'           => [
        'apiKey' => [
            'type'       => 'text',                                            // API key type
            'label_tips' => __("Enter your Integration API Key", 'fluentform'),// Additional help text
            'label'      => __('Integration API Key', 'fluentform'),           // Input Label
        ]
    ],
    'hide_on_valid'    => true,                                                // Settings Input will be hidden on valid 
    'discard_settings' => [
        'section_description' => 'Your AwesomeIntegration is Activated',       // Discard Settings Page Description
        'button_text'         => 'Disconnect AwesomeIntegration',              // Discard Button Text
        'data'                => [
            'apiKey' => ''                                                     // Set API key to empty on discard
        ],
        'show_verify'         => true                                          // Show verification Option
    ]
];
```

### getGlobalSettings()

In this method, you will need to get your settings data using your option key and your default settings for the Settings. You will get one parameter here**$settings**.

Here is an **example** of the method:

```
public function getGlobalSettings($settings)
    {
        $globalSettings = get_option($this->optionKey);
        if (!$globalSettings) {
            $globalSettings = [];
        }
        $defaults = [
            'apiKey' => '',
            'status' => ''
        ];

        return wp_parse_args($globalSettings, $defaults);
    }
```

### saveGlobalSettings()

Here you will get the settings data after user submission and you can use the data to connect with your API or do your required task. Then save the data or return the error using your own validation.

For **example** :

```
public function saveGlobalSettings($settings)
    {
        if (!$settings['apiKey']) {
            $mySettings = [
                'apiKey' => '',
                'status' => false
            ];
            
            update_option($this->optionKey, $mySettings, 'no');
            wp_send_json_success([
                'message' => __('Your settings has been updated and disconnected', 'fluentform'),
                'status'  => false
            ], 200);
        }

        // Verify API key
        try {
             
        // Connect with your api using the apiKey
        // Your code
            
        } catch (\Exception $exception) {
            wp_send_json_error([
                'message' => $exception->getMessage()
            ], 400);
        }

        // API key is verified now
        $settings = [
            'apiKey' => sanitize_text_field($settings['apiKey']),
            'status' => true
        ];

        // Update options with the key
        update_option($this->optionKey, $settings, 'no`');

        wp_send_json_success([
            'message' => __('Your MyAwesomeIntegration api key has been verfied and successfully set', 'fluentform'),
            'status'  => true
        ], 200);
    }
```

After you have successfully completed this step along with the previous methods, your integration will appear int the fluent form modules list.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-24-1024x373.png)

After you enable your new integration, you can go to the integration settings page where settings will be displayed according to your global field settings from getGlobalFields.

After the integration is up and running the integration needs to be pushed in the form feed, so a user can use this in his form. The following method will achieve this.

### pushIntegration()

Adding your integration into the form feeds. Here you will get  two parameters **$integrations, $formId**,

Here is the screenshot when the integration is pushed :

![](https://fluentforms.com/wp-content/uploads/2020/08/image-25-1024x238.png)

If the integration is configured it will push the integration into the form feed or else it will show a message to configure the API. The isConfigured() method, to check if the integration is configured is built in, you just need to call it.

```
public function pushIntegration($integrations, $formId)
{
    $integrations[$this->integrationKey] = [
        'title'                 => $this->title . ' Integration',
        'logo'                  => $this->logo,
        'is_active'             => $this->isConfigured(),
        'configure_title'       => 'Configuration required!',
        'global_configure_url'  => admin_url('admin.php?page=fluent_forms_settings#{your settings page url}'),
        'configure_message'     => 'MyAwesomeIntegration is not configured yet! Please configure your API first',
        'configure_button_text' => 'Set MyAwesomeIntegration API'
    ];
    return $integrations;
}
```

### getIntegrationDefaults()

This method will return your Integration feed setting’s default data format.  You will get two parameters here **$settings, $formId**. Here is an example of this method.

```
[
    'name'                   => '',
    'id'                     => '',
    'fieldEmailAddress'      => '',
    'custom_field_mappings'  => (object)[],
    'default_fields'         => (object)[],
    'conditionals'           => [
                   'conditions' => [],
                   'status'     => false,
                   'type'       => 'all'
    ],
    'enabled' => true
];
```

### getSettingsFields()

This method will render input fields for the integration feed settings page, based on the returned input data format. You will get two parameters here **$settings, $formId**.

You can use the prebuilt input component to create your settings page, here is a documentation [link](https://fluentforms.com/docs/integration-feed-fields-api/) where you can find the details list of these input components.

Required properties for the fields:

- key: Settings Unique Key
- label: Settings Input Label
- component: Pass the prebuild input component.

```
[
    'fields' => [
        [
            'key'           => 'name',
            'label'         => 'Name',
            'required'      => true,
            'placeholder'   => 'Your Feed Name',
            'component'     => 'text'
        ],

        [
            'key'            => 'additional_fields',
            'label'          => 'Integration Fields',
            'sub_title'      => 'Please specify the data ',
            'required'       => true,
            'component'      => 'map_fields',
            'primary_fileds' => [
                [
                    'key'           => 'fieldEmailAddress',
                    'label'         => 'Email Address',
                    'required'      => true,
                    'input_options' => 'emails'
                ]
            ],
            'default_fields' => [
                [
                    'name'     => 'first_name',
                    'label'    => esc_html__('First Name', 'fluentformpro'),
                    'required' => false
                ],
                [
                    'name'     => 'last_name',
                    'label'    => esc_html__('Last Name', 'fluentformpro'),
                    'required' => false
                ],

            ]
        ],
        [
            'key'        => 'conditionals',
            'label'      => 'Conditional Logics',
            'tips'       => 'Push data to your Integration conditionally based on your submission values',
            'component'  => 'conditional_block'
        ],
        [
            'key'            => 'enabled',
            'label'          => 'Status',
            'component'      => 'checkbox-single',
            'checkbox_label' => 'Enable This feed'
        ]
    ],
    'integration_title' => $this->title
];
```

All your input fields will be generated dynamically based on your provided data. You can later fetch this data using your input keys and use it as you need in your integration after form submission. Here is an output screenshot of the above data format.

![](https://fluentforms.com/wp-content/uploads/2020/08/image-26-1024x547.png)

In the default settings getIntegrationDefaults() we gave a value ‘enabled’ as true, that is why you can see that the field with this key ‘checkbox-single’ is checked which means it is true.

### getMergeFields()

In this method, you will get three parameters **$list, $listId, and $formId**.

This method is called after every select option change. When you have fields depending on one another, you need to modify subfields based on a primary field you can use this method and return modified data based on one primary field.

For reference check the Mailchimp integration

[https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php](https://github.com/fluentform/fluentform/blob/master/app/Services/Integrations/MailChimp/MailChimpIntegration.php)

### notify()

This method will be called upon form submission, you will get four parameters **$feed, $formData, $entry, $form**. This is the most important method, here you will your necessary task upon form submission

Here is a filter that you can use to validate your settings.

## Further read

### fluentform/save_integration_value_{integrationKey}

Filter hook for validating integration settings.

```
add_filter('fluentform/save_integration_value_{integrationKey} 'yourValidationMethodBeforeSave'), 10, 2);
```

Example of  a validation:

```
public function yourValidationMethodBeforeSave($settings, $integrationId)
    {   
        try {
            $error ="";                                   // check your conditions
            if( $error){
                throw new \Exception('Error message ');   // throw error
            }
           

        } catch (\Exception $e) {
            wp_send_json_error([
                'message' => $e->getMessage(),
                'status' => false
            ], 400);
        }

        return $settings;
    }
```

---

## BaseFieldManager Class

**Source:** [https://fluentforms.com/docs/basefieldmanager-class/](https://fluentforms.com/docs/basefieldmanager-class/)

## Introduction

The Fluent Forms BaseFieldManager Functions provide developers with a future-proof way to add new form fields easily.

The API Functions are automatically included when Fluent Forms Booted and they will be available anytime within the init hook. The BaseFieldManager class is located at in [/plugins/fluentform/app/Services/FormBuilder/BaseFieldManager.php](https://github.com/fluentform/fluentform/blob/master/app/Services/FormBuilder/BaseFieldManager.php).

Please check out the [github file](https://github.com/fluentform/fluentform/blob/master/app/Services/FormBuilder/BaseFieldManager.php) to get more information.

**Notice: Please do not initiate this class directly. You should extend this class to add a new form field.**

## Methods

### getComponent()

```
/*
     * Implement your method to describe the full element
     * return $component array
     */
    abstract function getComponent()
```

This is an abstract class that you have to implement in your own class. From this method, you have to return the full attributes of the element which will be available for settings in the form editor as well as in your render() function.

Here is an example of a custom element (Advanced Phone Field) structure which is available in our pro version of Fluent Forms

```
function getComponent()
    {
        return [
            'index'          => 15, // The priority of your element
            'element'        => $this->key, // this is the unique identifier.
            'attributes'     => [
                'name'        => $this->key, // initial name of the input field
                'class'       => '', // Custom element class holder
                'value'       => '', // Default Value holder
                'type'        => 'tel', // type of your element eg: text/number/email/tel
                'placeholder' => __('Mobile Number', 'fluentformpro') // Default Placeholder
            ],
            'settings'       => [
                'container_class'     => '',
                'placeholder'         => '',
                'label'               => $this->title,
                'label_placement'     => '',
                'help_message'        => '',
                'admin_field_label'   => '',
                'validation_rules'    => [
                    'required'           => [
                        'value'   => false,
                        'message' => __('This field is required', 'fluentformpro'),
                    ],
                    'valid_phone_number' => [
                        'value'   => false,
                        'message' => __('Phone number is not valid', 'fluentformpro')
                    ]
                ],
                'conditional_logics'  => []
            ],
            'editor_options' => [
                'title'      => $this->title . ' Field',
                'icon_class' => 'el-icon-phone-outline', // icon of the form in editor
                'template'   => 'inputText' // The template that will show in editor preview
            ],
        ];
    }
```

The code is already self-explanatory. But you have to keep the structure as same as the example. The array needs to have the following keys:

- index
- element
- attributes (will be used for rendering in editor and frontend)
- name
- class
- value
- type
- placeholder
- settings
- label
- container_class
- label_placement
- help_message
- admin_field_label
- validation_rules
- conditional_logics
- editor_options (For Editor)
- title
- icon_class
- template ([View Available Templates](https://github.com/fluentform/fluentform/tree/master/resources/assets/admin/components/templates))

Please check our other element implementations in **fluentformpro/src/Components** folder to get an idea about the available attributes.

To check all the existing get component data structures please [check this file](https://github.com/fluentform/fluentform/blob/5f400dbcdc/app/Services/FormBuilder/DefaultElements.php). That file contains all free and some pro version data attributes implementation.

### render($data, $form)

```
/*
     * Implement render html for your form element. You have to print your element html
     * @param: $element array - Contain the total element with attributes, settings etc
     * @param: $form object - Form Object of the current form rendering in that time.
     * @return void
     */
    abstract function render($element, $form);
```

You have to implement this method and print the final HTML for your custom element. Please check other implementations in the pro versions fluentformpro/src/Components folder. The DOM needs to be symmetric and you must have to use the parent class function to generate the doms to make the conditional logic/error messages work.

Please check all of the element renders ( compile() ) methods in these files.

[https://github.com/fluentform/fluentform/tree/master/app/Services/FormBuilder/Components](https://github.com/fluentform/fluentform/tree/master/app/Services/FormBuilder/Components)

### getGeneralEditorElements()

This is an important method that you have to implement when implementing your own element class. This method will return what settings will show in the general settings of your form element.

**For example:**

```
public function getGeneralEditorElements()
    {
        return [
            'label',
            'admin_field_label',
            'placeholder',
            'value',
            'label_placement',
            'validation_rules',
        ];
    }
```

Please note that These keys need to be matched with either your component’s settings or attributes keys.

### getAdvancedEditorElements()

This is an important method too that you have to implement when implementing your own element class. This method will return what settings will show in the advanced settings of your form element. By default, it returns the following

**For example:**

```
public function getAdvancedEditorElements()
    {
        return [
            'name',
            'help_message',
            'container_class',
            'class',
            'conditional_logics',
        ];
    }
```

You should implement this method if you want to add or remove any settings.

Please note that These keys need to be matched with either your component’s settings or attributes keys.

#### Element Settings UI components for EditorElements

There have 69 UI components for making any type of settings ui for your element. You can even implement your own by implementing generalEditorElement and advancedEditorElement methods. Please check the source code or phone field element in the pro version.

**Where to find the built-in UI components:** Please check in the [github source file here](https://github.com/fluentform/fluentform/blob/5f400dbcdc/app/Services/FormBuilder/ElementCustomization.php)

## Implementing this class

Create a PHP class and then extend this class. Here is an example where we can use the must use methods

```
class MyAwesomeFFElement extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'key',
            'Element title',
            ['tag1', 'tag2', 'tag3'],
            'general' // where to push general/advanced
        );
    }

    function getComponent()
    {
        return []; // return your element structure
    }

    public function getGeneralEditorElements()
    {
        return []; // return your general settings keys
    }

    public function getAdvancedEditorElements()
    {
        return []; // return your advanced settings keys
    }

    public function render($data, $form)
    {
        // print your valid html for this element
    }
}

/*
 * Finally initialize the class
 */
add_action('fluentform_loaded', function () {
    new MyAwesomeFFElement();
});
```

## Further read

### Validate data input from frontend

If you want to validate user input data for your form submission you have to implement a filter hook

```
add_filter('fluentform/validate_input_item_{YOUR_ELEMENT_KEY}', function ($errorMessage, $field, $formData, $fields, $form) {
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

Learn more about this validation here:

https://fluentforms.com/docs/fluentform_validate_input_item_input_text/

### Transforming Input Data in Entries/Emails

Maybe you collected the data as an array or key of any dynamic data and you need to transform that data to anywhere that is viewable at admin panel entries/email/3rd party integrations.

```
/**
* @param $response string|array|number|null - Original input from form submission
* @param $field array - the form field component array
* @param $form_id - form id
* @return string
*/
add_filter('fluentform/response_render_{element_key}', function($response, $field, $form_id) {
     // $response is the original input from your user 
     // you can now alter the $response and return
     return $response;
}, 10, 3);
```

## All Together

Your ideal implementation will look like this if you want to use both custom validation as well as custom response render.

```
class MyAwesomeFFElement extends \FluentForm\App\Services\FormBuilder\BaseFieldManager
{
    public function __construct()
    {
        parent::__construct(
            'myAwesome_ff_element_key',
            'Element title',
            ['tag1', 'tag2', 'tag3'],
            'general' // where to push general/advanced
        );

        add_filter('fluentform/response_render_' . $this->key, array($this, 'renderResponse'), 10, 3);
        add_filter('fluentform/validate_input_item_' . $this->key, array($this, 'validateInput'), 10, 5);
    }

    function getComponent()
    {
        return []; // return your element structure
    }

    public function getGeneralEditorElements()
    {
        return []; // return your general settings keys
    }

    public function getAdvancedEditorElements()
    {
        return []; // return your advanced settings keys
    }

    public function render($data, $form)
    {
        // print your valid html for this element
    }

    /**
     * @param $response string|array|number|null - Original input from form submission
     * @param $field array - the form field component array
     * @param $form_id - form id
     * @return string
     */
    public function renderResponse($response, $field, $form_id)
    {
        // $response is the original input from your user
        // you can now alter the $response and return
        return $response;
    }

    public function validateInput($errorMessage, $field, $formData, $fields, $form)
    {
        $fieldName = $field['name'];
        if (empty($formData[$fieldName])) {
            return $errorMessage;
        }
        $value = $formData[$fieldName]; // This is the user input value
        /*
         * You can validate this value and return $errorMessage
         */
        return [$errorMessage];
    }
}

/*
 * Finally initialize the class
 */
add_action('fluentform/loaded', function () {
    new MyAwesomeFFElement();
});
```

## Final Note

It’s highly recommended to explore our source files and try to understand the design. Once you get it it’s very easy to implement your own custom input elements.  Also please check our a step by step your custom new field creation guide here [How to Create Your Own Custom Field in Fluentforms](https://fluentforms.com/docs/how-to-create-your-own-custom-field-with-fluent-forms/).

If you have any questions please feel free to reach our [facebook community group](https://www.facebook.com/groups/fluentforms/)

---

