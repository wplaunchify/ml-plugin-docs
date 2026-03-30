# Payment Integration

*Category from Fluent Forms documentation*

---

## How to integrate Authorize.Net with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-authorize-net-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-authorize-net-with-fluent-forms/)

Authorize.net is a global payment gateway that gives you Visa, credit card, and electronic payment services. With Fluent Forms, you can easily credit and debit your online payment.

Remember, **Authorize.Net** Integration is a **Premium** Feature of the **Fluent Forms**Plugin. So, you need the [Fluent Forms Pro](https://fluentforms.com/docs/how-to-upgrade-to-fluent-forms-pro/) plugin to integrate this.

## Enable Authorize.net Payment Method

First, go to**Global Settings** from the **Fluent Forms** Navbar, open the **Payment** tab from the left sidebar, and click the **Payment Methods** option.

Now, go to Authorize.Net in the top navbar and click **Enable Authorize.Net Payment Method**. The Authorize.Net Payment Method will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/11/enable-authorized-scaled.webp)

## Configure Authorize.Net with Fluent Forms

Once you enable Authorize.Net, all the required settings will appear to configure Authorize.Net with Fluent Forms.

Before starting the configuration, select a **Payment Mode:** **Test** (for test payments) or **Live** (for real payments). Both options follow the same process; we choose**Test** **Mode**.

Then, you need to select Transaction Type, obtain the **API  Login ID**, **Transaction key**, and **Webhook signature key** from your **Authorize.Net** Account.

Also, you need to set up the **Authorize.Net Webhook Setup**. Copy your website webhook URL from this page for later use.

![](https://fluentforms.com/wp-content/uploads/2025/11/credentials-02-scaled.webp)

## Get the Credentials

#### API Login ID, Transaction Key, and Webhook SignatureKey from the Authorize Account

To learn how to get all the required API Credentials from your [Authorize.net](https://www.authorize.net/), follow the steps with screenshots below –

#### Get API Login ID

First, log in to your Authorize account from [here](https://login.authorize.net/). Once you log in to the Authorize.Net Dashboard, go to the **Accounts and API Settings** sidebar, and click on this. Here you will find the **API login ID**. Simply copy the **ID** for future use.

#### Get Transaction Key

Next, you will find the Transaction Key from the dropdown options. To get the transaction key, click the **GENERATE NEW TRANSACTION KEY** button.

![](https://fluentforms.com/wp-content/uploads/2025/11/API-Credentials-03-scaled.webp)

Here appears a new pop-up. Simply, click on the **SUBMIT** button.

![](https://fluentforms.com/wp-content/uploads/2025/11/submit-button-04.webp)

Here, a new pop-up arrives. Enter the passcode from your mail and click the **CONFIRM** button.

![](https://fluentforms.com/wp-content/uploads/2025/11/passcode-05.webp)

Now your **Transaction key**has been generated. **Copy** this for future use.

![](https://fluentforms.com/wp-content/uploads/2025/11/new-transaction-key-created-06.webp)

### WebHook Signature Key

To get the signature key, click on the **GENERATE NEW SIGNATURE KEY**button. Here appears a new pop-up. Then follow the steps similar to the transaction key, and you’ll get a webhook signature key. Simply copy for future use.

![](https://fluentforms.com/wp-content/uploads/2025/11/new-signature-key-created-07-scaled.webp)

### Required Authorize.Net Webhook Events Setup

For Authorize.Net to function completely for payments, you must configure your Authorize.Net webhooks.

To set up events, go to the **Accounts & API Settings**sections and scroll down, and click on the **Webhooks** section.

![](https://fluentforms.com/wp-content/uploads/2025/11/access-webhook-08-scaled.webp)

Here appears a new pop-up. Now, click the **Create a Webhook notification** button.

![](https://fluentforms.com/wp-content/uploads/2025/11/create-a-webhook-notification-09-scaled.webp)

Now, enter all the webhook information. Enter the **Webhook notification name**, the **Endpoint** **URL** that you **copied** from your website before, and select the **Status** option **Active**.

Then, select the **Payment Events** that are below and click the **Save** button.

- AuthCapture Created (net.authorize.payment.authcapture.created)
- Authorization Created (net.authorize.payment.authorization.created)
- Capture Created (net.authorize.payment.capture.created)
- PriorAuthCapture Created (net.authorize.payment.priorAuthCapture.created)
- Void Created (net.authorize.payment.void.created)
- Refund Created (net.authorize.payment.refund.created)
- Fraud Approved (net.authorize.payment.fraud.approved)
- Fraud Declined (net.authorize.payment.fraud.declined)

![](https://fluentforms.com/wp-content/uploads/2025/11/webhook-information-added-10-scaled.webp)

Now, your webhook is in an active status.

![](https://fluentforms.com/wp-content/uploads/2025/11/webhook-active-11-scaled.webp)

Now, return to the **Authorize.net Payment Method Settings** from the **Global Settings** section of Fluent Forms.

Then, paste the **API Login ID**, **Transaction key**, and **Webhook Signature key** in the corresponding fields.

Finally, press the **Save Settings** button, and your Authorize.net account will be configured with Fluent Forms for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/11/save-settings-12-scaled.webp)

## Integrate Authorize.Net in Forms

Once you finish setting up your Authorize.Net payment method, you can easily add this payment method to any of your existing Payment Forms (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

Note: If you do not have any existing Payment Forms, read this [Documentation](https://fluentforms.com/docs/how-to-create-a-payment-form-with-fluent-form/) to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/11/Edit-form-13-scaled.webp)

Once you are on the **Editor** page, go to the **Input Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil** Icon.

Now, go to the Payment Methods, check the **Authorize.Net** option, click the **Dropdown** **Arrow**, and you will get the option.

- **Method Label:** Here, you can change the label based on your preference for your added payment method.

To learn more details about the Payment Method field, read this [Documentation](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/).

![](https://fluentforms.com/wp-content/uploads/2025/11/payment-method-label-14-scaled.webp)

Once you complete the edit, press the Save Form button to save all the changes.

To embed and display your form on a specific **page or post**, simply **copy the shortcode** from the top-right corner of the screen. Then, **paste it** into the content area of your desired page or post where you want the form to appear.

If you’d like to see how the form looks before publishing, click on the **Preview & Design** button in the middle of the page. This allows you to review and adjust the design before making it live.

![](https://fluentforms.com/wp-content/uploads/2025/11/Copy-forms-shortcode-15-scaled.webp)

## Preview of Added Payment Method

Here is the preview of the **Payment Method** that we just added.

![](https://fluentforms.com/wp-content/uploads/2025/11/preview-of-authorized-payment-16.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Square with Fluent Forms (Inline Payment Integration)

**Source:** [https://fluentforms.com/docs/how-to-integrate-square-with-fluent-forms-inline-payment-integration/](https://fluentforms.com/docs/how-to-integrate-square-with-fluent-forms-inline-payment-integration/)

[Square](https://squareup.com/us/en) is a powerful payment processing platform that offers **Fluent Forms** inline payment options and a smooth and secure payment experience using credit and debit cards.

This article will guide you through integrating**Square**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, Square Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Square Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to the **Square** in the top navbar and click **Enable Square Payment Method.** The **Square Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Payment-Methods-scaled.webp)

## Configure Square with Fluent Forms

Once you enable the **Square**, all the required settings will appear to configure the Square with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the**Application ID, Access Key,**and**Location ID** from your **Square Account**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Payment-Mode-and-API-Credentials-scaled.webp)

### Get the API Credentials from Square

To learn how to get all the required API Credentials from your [Square](https://squareup.com/us/en), follow the steps with screenshots below –

First, log in to your Square account from here. If you do not have an account, sign up [here](https://app.squareup.com/signup/en-GB?return_to=https%3A%2F%2Fdeveloper.squareup.com%2F&v=developers).
Then, create an app in your Square account to get the API credentials for configuration.

To create an app, log in to the **Square Dashboard**, go to the **Account** section from the **Navbar**, and click the **Developer Console**tab.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Developer-Console-scaled.webp)

Click the **Plus** **Icon** under the **Applications** tab to create a new application.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Plus-Icon-scaled.webp)

Now, add a **name** to your application and click the **Next** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Application-Name.webp)

Check the **Accept Payments** box and click on the **Next** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Accept-Payments.webp)

Select your desired option from the pop-up with the Find your Audience option, and click the **Complete** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Myself-Complete-button.webp)

After creating the application, you will find the**Application ID** and **Access Key**in the **Sandbox Application ID Access Token**fields under the **Credentials**. Copy them.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Copy-Application-ID-and-Access-Token-scaled.webp)

Now, go to the **Locations** tab from the left sidebar, and copy the **Location ID.**

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Copy-Location-ID-scaled.webp)

**Now,**return to the **Square Payment Method Settings** from the **Global Settings**section of **Fluent Forms**.

Then, paste **the Application ID**, **Access Token**, and **Location ID** in the corresponding fields.

Finally, press the **Save Settings** button, and your Square account will be configured with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Paste-all-credentials-scaled.webp)

## Integrate Square in Forms

Once you finish setting up your **Square** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Open-desired-form-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Square** option, click the **Dropdown Arrow,** and you will get two options. These are:

- **Method Label**: Here, you can change the label based on your preference for your added payment method.

- **Embedded Checkout**: Check this****box to activate **Square** as an inline payment option.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-set-up-Payment-Method-field-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Save-form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added.

![](https://fluentforms.com/wp-content/uploads/2025/01/14.-Added-Square-form-preview-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Paystack with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-paystack-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-paystack-with-fluent-forms/)

[Paystack](http://paystack.com) is an amazing payment method for your webshop that allows **Fluent Forms** a smooth online payment transaction. This article will guide you through integrating**Paystack**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, Paystack Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Paystack Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Paystack** in the top navbar and click **Enable PayStack Payment Method.** The **Paystack Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-enable-Paystack-module-scaled.webp)

## Configure Paystack with Fluent Forms

Once you enable **Paystack**, all the required settings will appear to configure Paystack with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the**API  Key** and **API Secret**from your **Paystack Account**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-API-Credentials-scaled.webp)

### Get the API Credentials from Paystack

To learn how to get all the required API Credentials from your [Paystack](http://paystack.com), follow the steps with screenshots below –

First, log into your [Paystack Account](https://dashboard.paystack.com/#/login). If you do not have an account, sign up from [here](https://dashboard.paystack.com/#/signup).

Once you log into the**Paystack Dashboard**, go to the **Settings**section from the left sidebar, and click the **API Keys & Webhooks** tab. Now, copy the **Secret key**and **Public key.**

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Copy-secret-and-API-key-scaled.webp)

**Now,**return to the **Paystack Payment Method Settings** from the **Global Settings**section of **Fluent Forms**.

Then, paste the**Public Key**and**Secret Key**you copied from Paystack into the**API Key**and**API Secret**fields****respectively.

Finally, press the **Save Settings** button and your Paystack account will be configured with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Paste-API-key-and-API-Secret-scaled.webp)

## Integrate Paystack in Forms

Once you finish setting up your **Paystack** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-5-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **PayStack** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-add-paystack-to-the-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Save-Form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added. Once a user clicks the **Submit Form** button it will redirect to **Paystack** to complete the payment process.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Form-Preview.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Mollie with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-mollie-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-mollie-with-fluent-forms/)

[Mollie](http://mollie.com) is a fantastic payment gateway for your webshop that allows **Fluent Forms** a smooth online payment transaction. This article will guide you through integrating**Mollie**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, Mollie Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Mollie Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Mollie** in the top navbar and click **Enable Mollie Payment Method.** The **Mollie Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Mollie-payment-method-scaled.webp)

## Configure Mollie with Fluent Forms

Once you enable Mollie, all the required settings will appear to configure Mollie with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the**API  Key** from your **Mollie Account**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Test-API-Key-scaled.webp)

### Get the API Credentials from Mollie

To learn how to get all the required API Credentials from your [Mollie](http://mollie.com), follow the steps with screenshots below –

First, log in to your Mollie account from [here](https://my.mollie.com/dashboard/login). If you do not have an account, sign up from [here](https://my.mollie.com/dashboard/signup).

Once you log in to the**Mollie Dashboard**, go to the **Browse**section from the **Navbar**, and click the **Developers** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Developers-tab.webp)

Here, you will get your desired **API key** from the **Test API key** row, and copy it.

> Copy the Live API Key to activate Live mode if Live is chosen as the payment mode.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Copy-API-Key-1.webp)

**Now,**return to the **Mollie Payment Method Settings** from the **Global Settings**section of **Fluent Forms**.

Then, paste the**API Key**you copied from Mollie.

Finally, press the **Save Settings** button and your Mollie account will be configured with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Paste-API-Key-1-scaled.webp)

## Integrate Mollie in Forms

Once you finish setting up your **Mollie** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-4-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Mollie** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Add-Mollie-in-desired-form-1-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Save-Form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added. Once a user clicks the **Submit Form** button it will redirect to **Mollie** to complete the payment process.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Submit-form.webp)

Here is the preview of the **Mollie Checkout Modal**.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Preview-of-Mollie-.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Razorpay with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-razorpay-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-razorpay-with-fluent-forms/)

[Razorpay](http://razorpay.com) is a payment processing platform that allows **Fluent Forms** a smooth online payment transaction in India, supporting various payment methods including credit cards, debit cards, net banking, UPI, and popular wallets like JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money, and PayZapp.

This article will guide you through integrating**Razorpay**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, Razorpay Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Razorpay Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Razorpay** in the top navbar and click **Enable Razorpay Payment Method.** The **Razorpay Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Razorpay-method-scaled.webp)

## Configure Razorpay with Fluent Forms

Once you enable Razorpay, all the required settings will appear to configure Razorpay with Fluent Forms. These are:

A. Payment Method
B. API Credentials
C. Checkout Style

Always press the **Save Settings** button to save the changes you made.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Test-API-Credentials-scaled.webp)

**All the Razorpay Settings options mentioned above are briefly explained below:**

### A. Payment Method

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

### B. API Credentials

Here, you need to provide the **API Key** and **API Secret** from your **Razorpay Account** to configure Razorpay with Fluent Forms.

To learn how to get all the required API Credentials from your Razorpay, follow the steps with screenshots below –

#### Get the API Credentials from Razorpay

First, log into your [RazorPay Account](http://dashboard.razorpay.com/signin). If you do not have an account, sign up from [here](https://easy.razorpay.com/onboarding/l1/signup?field=MobileNumber&cta_btn=Navbar_Header).

Once you log in to the**RazorPay Dashboard**, go to the **Accounts & Settings**section from the **Left sidebar**, and click the **API keys** tab.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-API-Keys-scaled.webp)

> To get the Key ID and Key Secret, you need to generate a new key.

Click the **Regenerate Test Key** button and new keys will be generated for the configuration.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Regenerate-Test-Key-button-scaled.webp)

Here, you will get your desired **Key ID** and **Key Secret**, and copy them.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Copy-Key-ID-and-Key-Secret.webp)

**Now,**return to the **Razorpay Payment Method Settings** from the **Global Settings**section of **Fluent Forms**.

Then, paste the**Key ID**and**Key Secret**into****the**API Key**and**API Secret**fields respectively.

Finally, press the **Save Settings** button and your Razorpay account will be configured with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Paste-API-Key-and-Secret-scaled.webp)

### C. Checkout Style Type

Fluent Forms offers the following two different checkout styles. You can choose the **Checkout Style Type**based on your preferences.

- Modal Checkout Style
- Hosted to razorpay.com

#### Modal Checkout

This checkout style lets you collect payments on your site.

You can also choose a custom brand theme color for the Razorpay checkout popup or leave it blank to use the default Razorpay theme.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Modal-Checkout-Style.webp)

#### Hosted to razorpay.com

This checkout style redirects users to the RazorPay Website for checkout.

Also, using this setting option, you can configure the SMS and Email notifications from RazorPay to your WordPress Site to ensure you stay updated.

You can select both **SMS** and **Email**, or any one of them by simply checking the boxes to receive notifications.

**Remember**, always press the **Save Settings** button to save the changes you made.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Hosted-to-Razorpay.com_.webp)

## Integrate Razorpay in Forms

Once you finish setting up your **Razorpay** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-3-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Razorpay** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Check-Razorpay-payment-method-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Save-Form-button-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added. Once a user clicks the **Submit Form** button it will redirect to **Razorpay** to complete the payment process.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Form-Preview-.webp)

Here is the preview of the **Razorpay Checkout Modal**.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Razorpay-payment-popup-1024x575.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate PayPal with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-paypal-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-paypal-with-fluent-forms/)

[PayPal](http://paypal.com) is a payment processing platform that offers **Fluent Forms** to receive payments from your users securely. This article will guide you through integrating**PayPal**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, PayPal Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable PayPal Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **PayPal Standard** in the top navbar and click **Enable** **PayPal Payment Method.** The **PayPal Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Paypal-Payment-Method-scaled.webp)

## Configure PayPal with Fluent Forms

Once you enable the **PayPal**, all the required settings will appear to configure the PayPal with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Sandbox** (for test payments) and **Live (**for real payments) as both options follow the same configuration process, e.g., I choose the **Sandbox Mode**.

Then, enter the email you signed up with on the [PayPal Account](https://www.paypal.com/signin) into the**PayPal Email** field.

Additionally, turn on the **Disable PayPal IPN Verification** toggle if **Payment Data Transfer**is not accessible for you and payments are not being marked as complete. This option allows the site to use a slightly less secure method of verifying purchases.

Finally, press the **Save PayPal Settings** button and your PayPal account will be integrated with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Configure-Paypal-Account-Email-scaled.webp)

## Setup PayPal IPN Settings

After configuring PayPal, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in **PayPal**.

**IPN (Instant Payment Notification)**is a post-message notification sent by **PayPal** after a successful transaction for standard merchant accounts, containing all the payment transaction details. Setting up [PayPal](https://www.paypal.com/) IPN with Fluent Forms allows you to receive Instant Payment Notifications from PayPal.

To learn how to set up **PayPal IPN** with**Fluent Forms**, follow the steps with the screenshots below –

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **PayPal Standard**, and scroll down to the **PayPal IPN Settings (Recommended for Subscription Payment)**option.

Then, copy the**IPN URL**for****smooth transactions based on **PayPal** **Data** related to **Subscription/Recurring**payments.

> If you do not set up the IPN (Instant Payment Notification) then it will still work for single payments but recurring payments will not be marked as paid for PayPal subscription payments.

Do not forget to press the **Save PayPal Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-PayPal-IPN-Settings--scaled.webp)

Now, visit the Dashboard of your [PayPal Business Account](https://www.sandbox.paypal.com/mep/dashboard), hover over the **Profile** **Icon,** and click the **Account Settings** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Account-Settings.webp)

Then, scroll down and open the **Website Payments** tab. Go to **Instant Payment Notifications**and click the **Update** link.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Website-Payments.webp)

Click the **Edit Settings** button to set up your IPN notification.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Choose-IPN-Settings.webp)

Finally, **paste the URL** into the **Notification URL**field that you copied from the **Paypal IPN Settings** page.

After entering your**Notification URL,** select **Receive IPN messages (Enabled)**to activate the IPN messages for users.

Once you are done, click the **Save** button to confirm the setup.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Paste-IPN-URL.webp)

Here, you can see the **Notification URL**is updated and the IPN is enabled for your site.

Also, you can modify your notification URL anytime by clicking the **Edit Settings**button.
Plus, if you want to disable the PayPal IPN, simply click the **Turn Off IPN** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Edit-Settings-or-Turn-Off-button.webp)

## Integrate PayPal in Forms

Once you finish setting up your **PayPal** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-1-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by hovering over it and clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **PayPal** option, click the **Dropdown Arrow,** and you will get two options. These are:

- **Method Label**: Here, you can change the label based on your preference for your added payment method.

- **Require Shipping Address**: Check this box if you want to make providing the **Shipping Address** information mandatory for your users to submit the forms.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Check-PayPal-payment-method-in-a-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Save-Form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added. Once a user clicks the **Submit Form** button it will redirect to PayPal to complete the payment process.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-PayPal-Form-Preview.webp)

## Form Specific PayPal Settings

You can also customize the**PayPal Settings** for a specific form according to your needs.

To customize the **PayPal Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-Form-Settings-1-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, and scroll down to **PayPal Settings**.

Here, you can select which **PayPal Account**(**Global** or **Custom**) will be used for this form. 
Select the **Custom PayPal ID**option if you want to set up a different PayPal account for this specific form.

Do not forget to click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Form-Specific-PayPal-Payment-Settings-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Stripe with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-stripe-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-stripe-with-fluent-forms/)

[Stripe](http://stripe.com) is a globally recognized payment gateway that offers **Fluent Forms** inline payment options and a smooth and secure payment experience using credit and debit cards.

This article will guide you through integrating**Stripe**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, you can integrate Stripe Payment Methods with the Free Version of Fluent Forms plugin, but a minimum platform fee of 1.9% per transaction applies. But, premium users of the Fluent Forms Pro plugin do not need to pay any extra fees for using Stripe on your site

## Enabling Stripe Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Stripe** in the top navbar and click **Enable** **Stripe Payment Method.** The **Stripe Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Stripe-Payment-method-scaled.webp)

## Configuring Stripe with Fluent Forms

Once you enable Stripe, all the required settings will appear to configure Stripe with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, click the**Connect with Stripe**button to redirect you to the **Stripe Login Page** to connect your **Stripe Account**.

Do not forget to press the **Save Stripe Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Connect-with-Stripe-scaled.webp)

Here, provide the login credentials of your desired **Stripe Account** that you want to connect with **Fluent Forms**, click the **Submit** button, and your **Stripe** account will be configured.

> If you do not have an existing Stripe Account, click here to open a new account.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Submit-button.webp)

**Remember**, **Fluent Forms** offers the above-mentioned **Connect with** **Stripe**option****by default for secure and easy integration with **Stripe**. Also, Fluent Forms recommends using this option for all Stripe Verified Partners.

But, if you prefer the traditional **API Key method for the integration,** you can **Disable**this**Connect with Stripe**option by adding the following code snippet to your theme’s **functions.php** file or a code snippet plugin.

> We recommend you use the Fluent Snippet Plugin to add any snippet code to your WordPress Site.

```
add_filter('fluentform/disable_stripe_connect', '__return_true');
```

## Configuring Webhook to Set Up Stripe IPN

After configuring Stripe, you can set up **IPN** (**Instant Payment Notification**) **Settings** to enable notifications for **subscription** or **recurring** **payments** in Stripe.

**IPN (Instant Payment Notification)** is a post-message notification sent by [Stripe](http://stripe.com) after a successful subscription or recurring payment. For Stripe to function completely for subscription/recurring payments, you must configure your Stripe webhooks.

**To learn how to configure Stripe Webhooks, follow the steps with screenshots below –**

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Stripe**, and scroll down to the **Stripe Webhook (Recommended for Recurring Payments)**option.

Then, copy the**Webhook URL**and the recommended **Webhook Events**for****smooth transactions based on **Stripe** **Data** related to **Subscription/Recurring**payments.

Do not forget to press the **Save Stripe Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Add-stripe-webhook-URL-scaled.webp)

Now, visit your [Stripe Account Dashboard](https://dashboard.stripe.com/account/webhooks), click the **Developers** from the bottom-left corner, and press the **Webhooks**.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-Developers-Webhooks-scaled.webp)

Click the **+ Add destination**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Add-Destination-button-scaled.webp)

Now, choose the events recommended by the **Fluent Forms**for**Stripe** to send to your endpoint.

You can find****your **desired events** by entering their **Name** or **Description**into****the**Events**fields and can **select** **events** by clicking the **checkbox**.

**The Events recommended by Fluent Forms are briefly explained below:**

- **charge.succeeded**: This triggers when a charge is successfully processed. Basically, this event occurs when a payment is completed on Stripe.

- **charge.captured**: This triggers when a previously authorized charge is successfully captured. You must use this for **Hold payments**.

- **invoice.payment_succeeded**: This triggers when a payment for an invoice is successful. This is often used for **Subscription** **payments**.

- **charge.refunded**: This triggers when a charge is refunded. This event helps track refund activity that happened on Stripe.

- **customer.subscription.deleted**: This triggers when a customer’s subscription is canceled or ends. This could be due to customer action, automatic cancellation, or a failed payment after retries.

- **customer.subscription.updated**: This triggers when a customer’s subscription is changed or updated.

- **Checkout.session.completed**: This triggers when a checkout session is completed. This event confirms that the customer successfully paid for the session.

Once you select all the suggested**Webhook Events**, click the **Continue** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Select-Events-scaled.webp)

Then, select the**Webhook endpoint** and again click the **Continue** button.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Webhook-endpoint-scaled.webp)

Finally, paste the **Webhook URL** you copied from the **Stripe Settings** page into the **Endpoint URL** field and click the **Create destination** button.

And, the **Stripe Webhooks** will be configured with your WordPress Site!

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Create-Destination-button-scaled.webp)

## Integrating Stripe in Forms

Once you finish setting up your **Stripe** payment method, you can easily add this payment method to any of your existing**Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by hovering over it and clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Stripe** option, click the **Dropdown Arrow,** and you will get three options. These are:

- **Method Label**: Here, you can change the label based on your preference for your added payment method.

- **Embedded Checkout**: Check this box to activate **Stripe** as an inline payment option.

- **Verify Zip/Postal Code**: Check this box if you want to make providing the **Zip/Postal Code** information mandatory for your users to submit the forms.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Embed-checkout-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Save-form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Form-Preview-.webp)

## Form Specific Stripe Settings

You can also customize the**Stripe Settings** for a specific form according to your needs.

To customize the **Stripe Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-Form-Settings-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, scroll down to **Stripe Settings**, and customize it based on your needs.

Do not forget to click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Form-Specific-Stripe-Settings-scaled.webp)

**All the Stripe Settings options mentioned above are briefly explained below:**

### A. Stripe Meta Data

Check the **Push Form Data to Stripe** to send the form submission date to your Stripe.

![](https://fluentforms.com/wp-content/uploads/2025/01/14.-Stripe-meta-data-option.webp)

### B. Stripe Account

Here, you can select which stripe account credential (**Global** or **Custom**) will be used for this form. Select the **Custom Stripe Credentials** if you want to set up a different Stripe account for this specific form.

![](https://fluentforms.com/wp-content/uploads/2025/01/15.-Custom-Stripe-Credentials.webp)

### C. Stripe Payment Receipt

Check this option if you want to disable the option of receiving payment receipt email notifications of this form.

> But we recommend you do not disable this option if you want to keep track of your payment transactions.

![](https://fluentforms.com/wp-content/uploads/2025/01/16.-Stripe-Payment-Receipt.webp)

### D. Stripe Descriptor

Here, provide the text as per your wish (Contains between 5 and 22 characters) as a statement descriptor. If you keep it empty, your Form Name will be set as a statement descriptor.

![](https://fluentforms.com/wp-content/uploads/2025/01/17.-Statement-Descriptor.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

## How to Integrate Paddle with Fluent Forms

**Source:** [https://fluentforms.com/docs/how-to-integrate-paddle-with-fluent-forms/](https://fluentforms.com/docs/how-to-integrate-paddle-with-fluent-forms/)

[Paddle](http://paddle.com) is a payment processing platform that allows **Fluent Forms** payment options and a smooth and secure payment experience. This article will guide you through integrating**Paddle**into your **WordPress** **Site** with the **Fluent Forms**plugin.

> Remember, Paddle Integration is a Premium Feature of the Fluent Forms Plugin. So, you need the Fluent Forms Pro plugin to integrate this.

## Enable Paddle Payment Method

First, go to **Global Settings**from the **Fluent Forms Navbar**, open the **Payment**tab from the left sidebar, and click the **Payment Methods**option.

Now, go to **Paddle** in the top navbar and click **Enable Paddle Payment Method.** The **Paddle Payment Method** will be enabled globally for all forms.

![](https://fluentforms.com/wp-content/uploads/2025/01/1.-Enable-Paddle-Payment-Method-scaled.webp)

## Configure Paddle with Fluent Forms

Once you enable the **Paddle**, all the required settings will appear to configure the Paddle with Fluent Forms.

Before starting the configuration, select any **Payment Mode** between **Test** (for test payments) and **Live**(for real payments) as both options follow the same process, e.g., I choose the **Test Mode**.

Then, you need to obtain the**API  Key** and **Client Token**from your **Paddle Account**.

![](https://fluentforms.com/wp-content/uploads/2025/01/2.-Test-API-Key--scaled.webp)

### Get the API Key and Client Token from Paddle

To learn how to get all the required API Key and Client Token from your [Paddle](http://paddle.com), follow the steps with screenshots below –

First, log in to your [Paddle Account](https://sandbox-login.paddle.com/login). If you do not have an account, sign up from [here](https://www.paddle.com/get-started).

#### Generating API Key

Once you log in to the**Paddle Dashboard**, open the **Developers Tool** dropdown list from the left sidebar, and click **Authentication**.

Now, go to the **API keys**section and click the **+ Generate API key**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/3.-Generate-API-Key-button-scaled.webp)

Now provide the **Name** and **Description** for your API key, click the **Generate** button, and your desired API key will be generated.

![](https://fluentforms.com/wp-content/uploads/2025/01/4.-Generate-button-1.webp)

Here, you can see the newly generated API Key. Now, click the **Three-dot-icon** and press the **Copy key** button and your desired API Key will be copied.

![](https://fluentforms.com/wp-content/uploads/2025/01/5.-copy-API-key.webp)

#### Generating Client Token

Now, go to the **Client-side tokens**section and click the **+ Generate client-side token**button.

![](https://fluentforms.com/wp-content/uploads/2025/01/6.-Generate-Client-Side-Token.webp)

Now provide the **Name** and **Description** for your client token, click the **Generate** button, and your desired client token will be generated.

![](https://fluentforms.com/wp-content/uploads/2025/01/7.-Generate-token-button.webp)

Here, you can see the newly generated Client Token. Now, click the **Three-dot-icon** and press the **Copy Token**button and your desired Client Token will be copied.

![](https://fluentforms.com/wp-content/uploads/2025/01/8.-Copy-Token.webp)

### Setup Default Payment Link

Setting up a **default payment link** is essential for processing a successful payment transaction.

Now, open the **Checkout**dropdown list from the left sidebar, click the **Checkout Settings** option, go to the **General** tab, and provide your**Website URL** into the **Default Payment Link** field.

Once you’ve entered the link, click the **Save** button, and all payment links you send to your clients will use this domain to show the payment form.

![](https://fluentforms.com/wp-content/uploads/2025/01/9.-Deafult-payment-link-scaled.webp)

## Connect Paddle with Fluent Forms

**Now,**return to the **Paddle Payment Method Settings** from the **Global Settings**section of **Fluent Forms**.

Then, paste the**Key**and**Token**you copied from **Paddle** into the**API Key**and**Client Token**fields****respectively.

Finally, press the **Save Settings** button and your Paddle account will be configured with **Fluent Forms** for your WordPress Site.

![](https://fluentforms.com/wp-content/uploads/2025/01/10.-Paste-API-key-and-Client-Token-scaled.webp)

## Integrate Paddle in Forms

Once you finish setting up your **Paddle** payment method, you can easily add this payment method to any of your existing **Payment Forms** (i.e., a form where [Payment Item](https://fluentforms.com/docs/add-payment-item-field-in-payment-forms/) and [Payment Method](https://fluentforms.com/docs/add-payment-method-field-in-payment-forms/) fields are added).

> If you do not have any existing Payment Forms, read this Documentation to learn how to create one.

First, go to the **Editor** page of your desired form by clicking its **Edit** option.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-desired-form-2-scaled.webp)

Once you are on the **Editor** page, go to the **Input** **Customization** menu on the right side of the added **Payment Method** field by clicking the **Pencil Icon**.

Now, go to the **Payment Methods**, check the **Paddle** option, click the **Dropdown Arrow,** and you will get the option to change the **Method Label** based on your preference.

> To learn more details about the Payment Method field, read this Documentation.

![](https://fluentforms.com/wp-content/uploads/2025/01/11.-Add-paddle-in-desired-form-scaled.webp)

Once you complete the edit, press the **Save Form** button to save all the changes.

Now, to embed and display the form on a specific **Page/Post**, **copy** this **Shortcode** from the top right side and **paste** it into your desired**Page/Post**.

Also, to see the **Preview** of the form, click the **Preview & Design**button in the middle.

![](https://fluentforms.com/wp-content/uploads/2025/01/12.-Save-form-scaled.webp)

## Preview of Added Payment Method

Here is the **preview** of the **Payment Method**that we just added. Once a user clicks the **Submit Form** button it will redirect to **Paddle** to complete the payment process.

![](https://fluentforms.com/wp-content/uploads/2025/01/13.-Submit-form.webp)

Here is the preview of the **Paddle Checkout Modal**.

![](https://fluentforms.com/wp-content/uploads/2025/01/14.-Preview-of-Paddle.webp)

## Form Specific Paddle Settings

You can also customize the**Paddle Settings** for a specific form according to your needs.

To customize the **Paddle Settings**, go to the **Forms** from the **Fluent Forms Navbar**, and click the **Settings** option of a desired **Form**.

![](https://fluentforms.com/wp-content/uploads/2025/01/Open-Form-Settings-2-scaled.webp)

Once you are on the **Settings and Integrations** tab, click the **Payment Settings** option, and scroll down to **Paddle Settings**.

Here, you can select which type of payment process can be done through Paddle; **Non-catalog, Catalog Item,** or**Non-catalog prices for an existing product**

Do not forget to click the **Save Settings** button to save all your changes.

![](https://fluentforms.com/wp-content/uploads/2025/01/15.-Form-specific-Paddle-payment-settings-scaled.webp)

If you have any further questions, concerns, or suggestions, please do not hesitate to contact our [@support team](https://wpmanageninja.com/support-tickets/?utm_source=wpmn&utm_medium=home&utm_campaign=site#/). Thank you.

---

