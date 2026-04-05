# Payments Checkout

*Category from FluentCart documentation*

---

## Configuring Payments Overview ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/](https://docs.fluentcart.com/guide/payments-checkout/)

# Configuring Payments Overview ​

The **Payments** section in FluentCart is fundamental to your online store's operation. This is where you configure how your customers pay for their purchases and how the checkout experience is managed. FluentCart offers robust options for integrating popular payment gateways and customizing various aspects of the checkout process.

### Available Payment Gateways ​

This section, found under **Payment Settings** in FLuentCart **Settings**, displays all the payment gateways supported by your store along with their current status and management options. You can see a status along with the payment gateways that whether each gateways are Active or Disabled. Here click on the **Manage** button to configure its specific settings.

The available gateways include:

- **Stripe:** Accepts global payments via credit/debit cards and other methods.
- **PayPal:** Enables secure online transactions and money transfers.
- **Paddle:** Offers a complete payment solution for worldwide transactions.
- **Mollie:** A popular European payment gateway supporting major cards and local methods.
- **Paystack:** A modern payment gateway focused on helping businesses in Africa accept payments from anyone, anywhere in the world.
- **Razorpay:** A popular payment solution for businesses in India, supporting UPI, Cards, NetBanking, and Wallets.
- **Authorize.net:** A trusted payment gateway (Visa solution) that securely accepts credit cards, debit cards, and e-checks (ACH).
- **Cash on Delivery (COD):** Lets customers pay in cash when their order is delivered.

By setting up these features correctly, you can ensure a smooth, secure, and flexible payment process for your customers, leading to higher conversion rates and a better shopping experience.

---

## Authorize.net Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/authorizenet-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/authorizenet-settings)

# Authorize.net Settings ​

Authorize.net is one of the most trusted payment gateways, allowing you to securely accept credit cards, debit cards, and e-checks (ACH). Integrating it with FluentCart provides your customers with a professional and reliable checkout experience.

This guide provides a step-by-step walkthrough to connect your Authorize.net account, configure your checkout appearance, and set up webhooks for automated order processing.

## Step 1: Accessing Authorize.net Settings ​

First, you need to locate the integration settings within your WordPress site.

1. Navigate to **FluentCart Pro > Settings** from your WordPress sidebar.
2. Select the **Payment Settings** tab from the sidebar.
3. Scroll down to find **Authorize.net** and click the **Manage** button.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-1.DbXOJbro.webp)

## Step 2: Obtain API Credentials from Authorize.net ​

To connect your store, you need to retrieve four specific keys from your Authorize.net Merchant Interface.

1. Log in to your [Authorize.net Dashboard](https://login.authorize.net/).
2. Go to the **Account** tab in the main navigation.
3. Click on **Account and API Settings** (located under the Account section).
4. Select **API Credentials and Keys**.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-2.C-P8QiED.webp)

**Collect your Keys:**

- **API Login ID:** Copy the API Login ID displayed on this page.
- **Transaction Key:** Select "Generate New Transaction Key," click **Submit**, and copy the generated value.
- **Signature Key:** Select "Generate New Signature Key," click **Submit**, and copy it.
- **Public Client Key:** Click the "Generate New Public Client Key" button and copy the resulting string.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-3.CAa46RUQ.webp)

## Step 3: Configure Credentials in FluentCart ​

Now, return to your WordPress site to input the credentials you just gathered.

1. **Choose Your Mode:**- **Test credentials:** Use this tab first to perform test transactions without using real money.
- **Live credentials:** Switch to this tab once you are ready to go live.
2. **Enter the Keys:** Paste the **API Login ID**, **Transaction Key**, **Client Key**, and **Signature Key** into their respective fields.
3. **Enable e-Check (ACH):** If you want customers to pay directly via their bank accounts, check the **Enable e-Check (ACH)** box.
4. **Customize the Checkout UI:**- **Authorize.Net Checkout Form Button Text:** Change the text that appears on the Authorize.net popup (e.g., "Pay Now").
- **Authorize.Net Checkout Form Header Text:** Set a custom title for the payment popup (e.g., "Secure Checkout").
- **FluentCart Checkout Button Text:** This is the text for the main button on your checkout page (e.g., "Place Order").
- **Button Colors:** Use the color pickers to match the button background and hover colors to your website's branding.
5. **Enable Debug Logging:** Log Authorize.Net API interactions for troubleshooting.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-4.E3jacvB7.webp)

## Step 4: Configure Webhooks ​

Webhooks are critical for communication. They allow Authorize.net to notify FluentCart the moment a payment is successful, failed, or a subscription is renewed.

1. **Copy the Webhook URL:** On the FluentCart Authorize.net settings page, locate the **Webhook URL** (it looks like 
```
https://your-site.com/?fluentcart_api...
```

). Click the copy icon.
2. **Add Webhook in Authorize.net:**- In your Authorize.net dashboard, go to **Account > Webhook Notifications > Webhooks**.
- Click the **+ Create a webhook notification** button.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-5.D1Y6ZYvH.webp)

1. **Fill in Webhook Details:**- **Name:** Give a name to your Webhook like "FluentCart Webhook."
- **Endpoint URL:** Paste the URL you copied from FluentCart.
- **Status:** Ensure this is set to **Active**.
2. **Select Events:** Check the boxes for the following recommended events: - ```
net.authorize.payment.authcapture.created
```
- ```
net.authorize.payment.fraud.approved
```
- ```
net.authorize.payment.fraud.declined
```
- ```
net.authorize.payment.void.created
```
- ```
net.authorize.payment.refund.created
```
- ```
net.authorize.customer.subscription.cancelled
```
- ```
net.authorize.customer.subscription.expired
```
- ```
net.authorize.customer.subscription.expiring
```
3. Click **Save** to finalize.

![Authorize.net Settings](https://docs.fluentcart.com/assets/authorize-payment-method-6.yHrtn3Tj.webp)

## Step 5: Activation and Final Save ​

- **Payment Activation:** Look for the toggle at the top right of the FluentCart Authorize.net settings page. Switch it to **ON**.
- **Save Settings:** Click the **Save Settings** button at the bottom right.

---

## Cash on Delivery (COD) & Offline Payments ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/cash-on-delivery-settings)

# Cash on Delivery (COD) & Offline Payments ​

Cash on Delivery allows customers to pay with cash directly upon receiving their order. This section also covers settings for other manual, offline payment processes like bank transfers.

1. On the **Payment Settings** screen, locate **"Cash on Delivery"** and click the **"Manage"** button next to it.
2. This will open the **Offline Payment Settings** screen.

![Screenshot of Cash on Delivery Settings Page](https://docs.fluentcart.com/images/payments-checkout/cash-on-delivery-settings.webp)
3. **Enable Cash on Delivery:** Check the box next to "Customers can pay for their orders by cash upon delivery." to activate this method.
4. **Payment Activation:** In the top right corner of this page, ensure the **Payment Activation** option is "**Enabled**".
5. Click the **"Save Settings"** button to apply your changes.

---

## Configuring Stripe via wp-config.php ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/configure-stripe-via-wpconfig](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/configure-stripe-via-wpconfig)

# Configuring Stripe via wp-config.php ​

FluentCart integrates perfectly with **Stripe**. While you can connect your account directly from the settings panel, this guide will walk you through the more secure method of configuring Stripe by adding your API keys to your site's 
```
wp-config.php
```

 file.

> Info: Storing your API keys in the wp-config.php file is a security best practice. It keeps your credentials outside of the WordPress database, protecting them from potential database-related vulnerabilities.

### Step 1: Get Your API Keys from Stripe ​

First, you need to collect your **Publishable Key** and **Secret Key** from your Stripe dashboard.

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/).
2. In the right corner, click on **Developers**, then select **API keys** from the menu.
3. On this page, you will find your keys. You will need to copy both the **Publishable key** (starts with 
```
pk_...
```

) and the **Secret key** (starts with 
```
sk_...
```

).

> Note on Test vs. Live Keys: Your Stripe account has two sets of keys: one for testing (Test data) and one for real payments (Live data). It is recommended to start with your Test keys to ensure the connection is working correctly before switching to your Live keys.

### Step 2: Add the Keys to Your wp-config.php File ​

Next, you will add the copied keys to your WordPress site's configuration file.

1. Access the 
```
wp-config.php
```

 file using any WordPress file manager plugin or through your hosting file manager.
2. Locate the 
```
wp-config.php
```

 file in the root directory of your WordPress installation.
3. Open the file to edit it. Scroll down to the bottom, just above the line that says 
```
/* That's all, stop editing! Happy publishing. */
```

.
4. Add the following two lines of code, replacing the placeholders with the keys you copied from Stripe:

php
```
define('FCT_STRIPE_LIVE_PUBLIC_KEY','ENTER YOUR PUBLIC API KEY HERE');
define('FCT_STRIPE_LIVE_SECRET_KEY','ENTER YOUR SECRET KEY HERE');
```Example (using test keys for testing mode):

php
```
define('FCT_STRIPE_TEST_PUBLIC_KEY','ENTER YOUR PUBLIC API KEY HERE');
define('FCT_STRIPE_TEST_SECRET_KEY','ENTER YOUR SECRET KEY HERE');
```Save the 
```
wp-config.php
```

 file and close it.

### Step 3: Configure Webhooks ​

Webhooks are essential for the integration to function correctly. They allow Stripe to send real-time notifications to your store about payment events, such as successful charges, refunds, and subscription updates.

1. **Copy Your Webhook URL:** On the FluentCart Stripe settings page, you will see your unique **Webhook URL**. **Copy** this **URL** to your clipboard.
2. **Configure in Stripe:** Click the **Add Endpoint** link, and you’ll be redirected to your **Create an event destination** page.
3. **Select the Important Events:** Now, choose the events recommended by **FluentCart** for **Stripe** to send to your **endpoint**. Under **Events**, click the **All events** tab. Click the checkboxes to select these specific events:

The Events recommended by FluentCart are briefly explained below:

- **checkout.session.completed:** The customer finished checkout, and the order is ready to process.
- **charge.refunded:** A completed payment has been refunded to the customer.
- **charge.refund.updated:** Details of a refund were updated (like the amount or reason).
- **charge.succeeded:** The customer’s payment went through successfully.
- **invoice.paid:** A subscription invoice was paid by the customer.
- **invoice.payment.failed:** A subscription invoice payment failed (e.g., card declined).
- **customer.subscription.deleted:** The customer canceled their subscription.
- **customer.subscription.updated:** The customer’s subscription was changed (e.g., upgraded or downgraded).

Once you select all the suggested **Webhook Events**, click the **Continue** button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/select-events.webp)

Then, select the **Webhook endpoint** and again click the **Continue** button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/webhook-endpoint.webp)

Next, type a destination name, **paste** the **webhook URL** you copied earlier into the **Endpoint URL** field, and then click the “**Create Destination**” button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/create-destination.webp)

#### Step 4: Activate and Save ​

1. **Payment Activation:** Back on the **FluentCart Stripe settings** page, ensure the **Payment Activation** toggle at the top right is switched on.
2. **Save Settings:** Click the **Save Settings** button at the bottom to finalize the setup.

Your Stripe integration is now ready to securely process payments for your store!

---

## Flutterwave Integration ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/flutterwave-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/flutterwave-settings)

# Flutterwave Integration ​

Flutterwave is a powerful payment gateway that allows you to accept payments globally, with a strong focus on African markets. By connecting Flutterwave to your FluentCart store, your customers can pay securely using their Credit/Debit Cards, Bank Transfers, Mobile Money, USSD, M-Pesa, and more.

This step-by-step guide will walk you through everything you need to know to successfully integrate Flutterwave into your store.

## Step 1: Install and Activate Flutterwave ​

Before you can connect your account, you need to enable the Flutterwave module inside your FluentCart store.

1. Log in to your **WordPress Dashboard**.
2. Navigate to **FluentCart > Settings** in the left-hand menu.
3. Click on the **Payment Settings** tab.
4. Scroll down the list of available payment methods until you find **Flutterwave**.
5. Click the **Manage** button next to it.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-1.DBnncOXF.webp)

1. You will see a prompt saying the add-on is not installed. Click the blue **Install & Activate** button. This will instantly install the free integration.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-2.BdCT1fuJ.webp)

1. Once activated, the Flutterwave settings panel will open automatically.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-3.Dtef59m_.webp)

## Step 2: Locate Your API Keys in Flutterwave ​

To link your store securely, you need special codes called "API Keys." You can get these directly from your Flutterwave account.

> Note: Flutterwave offers both Live keys (for taking real money) and Test keys (for making fake purchases to ensure your store works).

1. Open a new tab in your browser and log in to your [Flutterwave Merchant Dashboard](https://app.flutterwave.com/login).
2. In the left-hand menu, scroll down to the **Settings** section.
3. Under the Developers menu, click on **API keys**.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-4.D_Eo_dK_.webp)

1. Look for the section labeled **V3 API keys** (Make sure you are viewing the "Test API Keys" if you are setting up a test environment, or "Live API Keys" for your actual store).
2. You will see a **Public key**, **Secret key**, and **Encryption Key**.
3. Use the Copy buttons next to each key. Leave this browser tab open, as you will need it again.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-5.D-ACQdO_.webp)

## Step 3: Connect the Keys to FluentCart ​

Now, switch back to your WordPress dashboard to paste the keys you just copied.

1. On the FluentCart Flutterwave Settings page, toggle the **Payment Activation** switch (at the top right) to turn it on.
2. Choose either the **Live credentials** or **Test credentials** tab, depending on which keys you copied from Flutterwave.
3. Paste your keys into the correct boxes: - **Test/Live Public Key**
- **Test/Live Secret Key**
- **Webhook Secret Hash:** This is a security feature. You need to create your own unique, secure password or phrase here (for example: 
```
my_store_secure_hash_2026
```

). Write this exact phrase down or copy it, because you must give this exact same phrase to Flutterwave in the next step.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-6.Bkr6PUQ4.webp)

## Step 4: Configure Webhooks (Crucial Step) ​

**What is a webhook?** A webhook is how Flutterwave "talks" to your store. When a customer finishes paying, Flutterwave uses the webhook to silently tell FluentCart, "The payment was successful, you can mark this order as Processing!" If you skip this step, orders will not update automatically.

1. Still on the FluentCart settings page, look right below the Secret Hash field. You will see a **Webhook URL** (it looks like a long web link starting with 
```
http://...
```

). Click the small copy icon next to it.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-webhook.00rGiOU_.webp)

1. Go back to your open Flutterwave Dashboard tab.
2. In the left-hand menu under Developers, click on **Webhooks**.
3. Paste your copied link into the **URL** field.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-7.D4vXb1gp.webp)

1. In the **Secret hash** field, type or paste the exact same password/phrase you created in Step 3.
2. Under **Webhook preferences**, it is highly recommended to check all of these boxes: - Receive webhook response in JSON format
- Enable webhook retries
- Enable v3 webhooks
- Enable resend webhook from the dashboard
- Add meta to webhook
3. *(Optional)* If you want FluentCart to know if a payment failed or was refunded, click **View** on "Webhook preferences with custom url" and paste the exact same Webhook URL into the **Enable webhook for failed transactions** and **Enable webhook for refunds** fields.
4. Click the orange **Save** button in Flutterwave.

![Flutterwave](https://docs.fluentcart.com/assets/flutterwave-8.BQVRfCGA.webp)

## Step 5: Save and Test Your Store ​

1. Return to your FluentCart Dashboard one last time.
2. Click the **Save Settings** button at the very bottom right corner.

You are all set! We highly recommend keeping your store in Test Mode first. Once confirmed, swap out your Test Keys for your Live Keys to start accepting real payments.

> ⚠️ Important: Server Configuration RequiredTo ensure webhooks are delivered successfully, you may need to whitelist Flutterwave on your server.Ensure your server firewall or security plugins allow incoming requests from Flutterwave.If using a WAF (Web Application Firewall) or security plugin, whitelist Flutterwave's webhook domain.Check your server error logs if webhooks are failing to reach your site.

---

## Mercado Pago Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/mercado-pago-settings)

# Mercado Pago Settings ​

Mercado Pago is a leading payment platform, making it the perfect choice for businesses operating in Latin America. By connecting **Mercado Pago to FluentCart**, you can securely accept a wide variety of local payment methods, including Credit Cards, Pix, Boleto, OXXO, and Bank Transfers.

This guide will walk you through the entire process of connecting your Mercado Pago account to FluentCart.

## Step 1: Activate Mercado Pago in FluentCart ​

First, you need to enable Mercado Pago as a payment method in your store.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click on the **Payment Settings** tab.
3. Find **Mercado Pago** in the list of available gateways and click the **Manage** button.
4. If the addon is not yet installed, click the **Install & Activate** button to begin the setup.

![Mercado Pago Install & Activate](https://docs.fluentcart.com/assets/install-activate-mercado-pago-1.CThBLXQs.webp)

## Step 2: Configure Mercado Pago Settings ​

Once activated, you need to provide your API credentials to sync your store with your Mercado Pago account.

1. Enable the gateway by toggling the **Payment Activation** switch at the top right.
2. Choose your credential mode: - **Test credentials:** Select this tab to test your checkout flow without processing real money.
- **Live credentials:** Select this tab when you are ready to accept real payments from your customers.
3. You will need to enter the following information for your chosen mode: - Public Key
- Access Token
- Webhook Secret

NOTE

**Testing Your Setup:** When using **Test credentials**, you may notice many "false errors" appearing, or the API might suddenly become unavailable. These issues can prevent you from completing the proper checkout flow for your tests. Because of this, we highly recommend testing your store using your **real Production credentials** before officially going live to ensure everything is working perfectly.> Currency Match: Ensure that your FluentCart store currency is set to the same currency used in your Mercado Pago account.

![Payment Activation](https://docs.fluentcart.com/assets/payment-activation-3.B_ArMq6Q.webp)

## Step 3: Create an Application in Mercado Pago ​

To get your keys, you must first create an application in the Mercado Pago Developers portal.

1. Log in to your **Mercado Pago Developers dashboard** and go to **Your integrations**. Click the **Create application** button.

![Create Application](https://docs.fluentcart.com/assets/create-application-4.1atVT70U.webp)

1. Enter your **Application name** and click **Continue**.

![Application Name](https://docs.fluentcart.com/assets/application-name-5.CqXh1vhs.webp)

1. Select **Online payments** and choose the option to create your store. Click on the **Continue** button.

![Online Payment](https://docs.fluentcart.com/assets/online-payment-6.BtIFM1Wv.webp)

1. Confirm your details and click **Confirm** to generate your application.
2. Navigate to **Production credentials** in the side menu to copy your **Public Key** and **Access Token** for later use.

![Copy Public Key & Access Token](https://docs.fluentcart.com/assets/copy-public-key-7.DRnlCFjE.webp)

## Step 4: Set up Webhooks ​

Webhooks are essential for FluentCart to receive real-time updates about transaction statuses.

1. **Copy the Webhook URL:** On your FluentCart Mercado Pago settings page, copy the unique **Webhook URL** provided.
2. **Configure in Mercado Pago:** In your Mercado Pago application, navigate to **Notifications > Webhooks** and click **Configure notifications**.

![Configure Notification](https://docs.fluentcart.com/assets/configure-notification-8.DYJFcESH.webp)

1. **Paste the URL:** Paste the link into the **URL for testing** (for Test mode) or **Production method** (for Live mode) field.
2. **Select Events:** Under "Recommended events," check the boxes for: - Payments
- Plans and subscriptions
3. **Get Your Secret:** Click **Save settings**. A **Secret signature (Webhook Secret)** will be generated.

![Configure Webhook Notification](https://docs.fluentcart.com/assets/configure-webhook-notification-9.DTh2QNAa.webp)

1. **Add to FluentCart:** Copy this secret and paste it into the **Test/Live Webhook Secret** field back in your FluentCart settings.

Once all fields are filled, click the **Save Settings** button at the bottom of the page to finalize your integration.

![Add To FluentCart](https://docs.fluentcart.com/assets/save-settings-10.Cwow7KcT.webp)

---

---

## Mollie Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/mollie-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/mollie-settings)

# Mollie Settings ​

Mollie is a popular and flexible payment gateway, primarily used in Europe, that allows you to securely accept credit cards, debit cards, and various other local payment methods like ApplePay, and Bancontact.

This guide will walk you through every step of connecting your Mollie account to FluentCart.

### Step 1: Get Your API Keys from Mollie ​

First, you need to get your **API Key** from your Mollie dashboard. This key is like a password that allows your FluentCart store to securely communicate with Mollie.

1. Log in to your [Mollie Dashboard](https://www.mollie.com/dashboard).
2. In the top menu, click **Browse**. A dropdown menu will appear.
3. Under the **Developers** heading, click on **API keys**.
4. On this page, you will see your **Live API key** and your **Test API key**.

> Info: Test Mode vs. Live Mode It is highly recommended to start with your Test API key. This allows you to make test purchases on your store without using real money. Once you are sure the connection is working correctly, you can switch to your Live API key to begin accepting real payments.

![Mollie API Configuration](https://docs.fluentcart.com/assets/mollie-2.DVATqgLL.webp)

For now, click the **Copy** button next to your **Test API key**.

![Mollie API Configuration](https://docs.fluentcart.com/assets/mollie-3.Bz54gmxa.webp)

### Step 2: Configure Mollie in FluentCart ​

Now that you have your test key, let's go back to your WordPress dashboard to paste it into FluentCart.

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
2. Click on the **Payment Settings** tab.
3. You will see a list of available payment gateways. Find **Mollie** and click the **Manage** button.
4. This will take you to the Mollie configuration page.

**Configure the Settings:**

- **Payment Activation:** First, ensure the **Payment Activation** toggle at the top right is switched **ON**. This makes Mollie available as an option at checkout.
- **Select Credentials Tab:** You will see two tabs: **Live credentials** and **Test credentials**. Click on the **Test credentials** tab.
- **Paste Your Key:** Paste the Test API key you copied from Mollie into the **Test API Key** field.
- **You can configure methods here:** From here you can directly visit to select Payment page of Mollie.
- **Save Settings:** Click the **Save Settings** button at the bottom of the page.

![Mollie API Configuration](https://docs.fluentcart.com/assets/mollie-7.Di0d3nUr.webp)

### Step 3: Go Live with Real Payments ​

When you are ready to start accepting real money, follow these simple steps to switch from Test to Live mode:

1. Go back to your Mollie Dashboard and copy your **Live API key**.
2. Return to your FluentCart Mollie settings (**FluentCart Pro > Settings > Payment Settings > Mollie**).
3. Click on the **Live credentials** tab.
4. Paste your **Live API key** into the **Live API key** field.
5. Click **Save Settings**.
6. Finally, make sure your store's main **Order Mode is set to Live** (
```
FluentCart Pro > Settings > Store Settings
```

).

Your Mollie integration is now live and ready to securely process payments for your store!

---

## Paddle Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paddle-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paddle-settings)

# Paddle Settings ​

Paddle is an all-in-one payment solution that simplifies selling globally by handling payments, sales tax, and compliance for you. By connecting Paddle with FluentCart, you can offer your customers a seamless checkout experience with a wide range of payment methods.

This guide will walk you through the entire process of connecting your Paddle account to FluentCart.

## Step 1: Activate Paddle in FluentCart ​

1. First, you need to enable **Paddle** as a payment method in your store.
2. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings**.
3. Click on the **Payment Settings** tab.
4. You will see a list of available payment gateways. Find Paddle and click the **Manage** button next to it.

This will take you to the main Paddle settings page, where you will configure the entire integration.

![Screenshot of Activate Paddle in FluentCart](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/activate-paddle.webp)

### Step 2: Configure Paddle Settings ​

On this page, you need to provide your Paddle API credentials and customize the checkout experience.

First, enable the payment gateway by toggling the **Payment Activation** switch at the top right. Here's a breakdown of the available settings:

- **Test/Live Credentials:** You can switch between Test credentials and Live credentials. It's recommended to start with the test mode to ensure everything is working correctly before accepting real payments.
- **Sandbox/Live API Key:** Enter your API Key from your Paddle dashboard.
- **Sandbox/Live Client Token / Public Key:** Enter your Client Token or Public Key from Paddle.
- **Sandbox/Live Webhook Secret:** Enter your Webhook Secret Key. You'll get this when you set up the webhook in your Paddle account (see next step).

To find your API Keys and Client Token, log in to your [Paddle account](https://login.paddle.com/login) and navigate to the **Developer Tools → Authentication** section.

![Screenshot of Payment Activation](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/payment-activation.webp)

#### Generating API Key ​

Once you log in to the Paddle Dashboard, open the **Developer Tools** dropdown list from the left sidebar, and click **Authentication**. Now, go to the **API keys** section and click the **+ New API key** button.

![Screenshot of API key](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/api-key.webp)

Now, provide the **Name** and **Description** for your API key, click the **Save** button, and your desired API key will be generated.

Here, you can see the newly generated API Key. Now, press the **Copy key** button, and your desired **API Key** will be copied.

![Screenshot of Copy API key](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/copy-api-key.webp)

#### Generating Client Token / Public Token ​

Now, go to the **Client-side tokens** section and click the **+ New client-side token** button.

Now, provide the **Name** and **Description** for your client token, click the **Save** button, and your desired client token will be generated.

![Screenshot of Client Token/ Public Token](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/client-token.webp)

Here, you can see the newly generated Client Token. Now, click the **Three-dot icon** and press the **Copy Token** button.

![Screenshot of Copy Client Token/ Public Token](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/copy-client-token.webp)

### Step 3: Set up Webhooks in Paddle ​

Webhooks are essential for FluentCart to receive real-time updates about transaction statuses, subscriptions, and other events from Paddle.

1. **Copy the Webhook URL:** First, copy the **Webhook URL** provided on your FluentCart Paddle settings page.
2. **Create a New Webhook in Paddle:** Log in to your Paddle dashboard. Navigate to **Developer Tools → Notifications**. Next, click on the **+ New destination** button.

![Screenshot of Notification](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/new-destination.webp)

A modal will appear. **Paste** the URL you copied from FluentCart into the **Webhook URL** field.

1. **Select Webhook Events:** In the webhook creation form, you need to select the events that Paddle will send to FluentCart. Check the boxes for the following events: - ```
transaction.completed
```
- ```
transaction.paid
```
- ```
transaction.payment_failed
```
- ```
adjustment.created
```
- ```
adjustment.updated
```
- ```
subscription.created
```
- ```
subscription.activated
```
- ```
subscription.updated
```
- ```
subscription.paused
```
- ```
subscription.resumed
```
- ```
subscription.canceled
```

After selecting the events, save the webhook by clicking the **Save destination** button. Paddle will provide you with a **Webhook Secret**. Simply copy this webhook secret for future use.

![Screenshot of Events](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/events.webp)

#### Add Webhook Secret to FluentCart: ​

Go back to your FluentCart **Paddle Settings** page in WordPress. Then, **paste** the API key, Secret key, and Webhook Secret into their respective fields.

## Customization Options ​

You can also customize the appearance and text of the Paddle checkout button:

- **Tax Mode:** This setting determines how taxes are calculated for your transactions.

- **Use paddle account settings:** This is the recommended option. It leverages Paddle's powerful tax platform to automatically calculate and remit sales tax and VAT for you worldwide. All tax settings will be managed directly from your Paddle dashboard.
- **Internal:** Select this if you want to use the tax rates you have configured within FluentCart's own tax settings (**FluentCart → Tax & Duties**).
- **External:** Choose this option if you are using a third-party service to handle tax calculations or if you do not need to charge tax. FluentCart will not add any tax to the transaction.
- **Paddle Checkout Theme:** Select a **Light** or **Dark** theme for the Paddle checkout modal.
- **Paddle Checkout Button Text:** Customize the text that appears on the payment button (e.g., "Pay with Card", "Proceed to Paddle").
- **Button Styling:** Adjust the **Button Color**, **Button Hover Color**, **Button Text Color**, and **Button Font Size** to match your store's design.
- **Disable Webhook Verification:** This security feature ensures that webhook notifications are genuinely coming from Paddle. It should only be disabled for specific debugging or testing scenarios. For a live store, always keep this setting enabled to protect your store from fraudulent requests.

![Screenshot of Customization](https://docs.fluentcart.com/images/payments-checkout/paddle-payment/customization-options.webp)

Once you have configured all the settings, click the **Save Settings** button. Your Paddle integration is now complete!

---

## PayPal Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paypal-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paypal-settings)

# PayPal Settings ​

PayPal provides a fast and secure way for customers to send and receive money or make online payments.

1. On the **Payment Settings** screen, locate **"PayPal"** and click the **"Manage"** button next to it.
2. This will open the **PayPal Settings** screen.

INFO

Please note that you must have a PayPal Business or Merchant account to accept payments through this integration. The following step will prompt you to log in to this account.![Screenshot of PayPal Settings Page](https://docs.fluentcart.com/images/payments-checkout/paypal-settings.webp)

1. **Test Mode Warning:** If your store is in Test mode, a banner will remind you: "Your Store is in Test mode, Change Store's 'Order Mode' to 'Live' and update related settings to enable Live payment !!" This is crucial to switch to live mode for real transactions.
2. **Connect Your PayPal Account:** Here, you don't need any API keys. Just click on the **Connect with PayPal** button. You'll then be directed to "PayPal" to log in to your account. Once logged in, you will see that your PayPal account is successfully connected with your FluentCart store.
3. **Payment Activation:** In the top right corner of this page, ensure the PayPal **Payment Activation** option is "Active".
4. Click the **"Save Settings"** button to apply your changes.

---

## Paystack Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paystack-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/paystack-settings)

# Paystack Settings ​

Paystack is a popular and secure payment gateway that allows you and your customers to pay using credit cards, debit cards, bank transfers, USSD, and more. When you integrate Paystack with FluentCart, you can easily accept fast and reliable payments from customers across Africa, as well as international payments from customers worldwide.

This guide will walk you through the entire process of connecting your Paystack account to FluentCart.

## Step 1: Install & Activate Paystack in FluentCart ​

First, you need to install and enable Paystack as a payment method in your store.

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click on the **Payment Settings** tab.
3. You will see a list of available payment gateways. Find **Paystack** and click the **Install & Activate** button next to it.
4. After a moment, the page will refresh, and the button will change to **Manage**. Click the **Manage** button to open the Paystack Settings page.

![Installing and activating Paystack in FluentCart Payment Settings](https://docs.fluentcart.com/assets/enable-paystack-payment.o1rxuQqq.webp)

## Step 2: Configure Paystack Settings in FluentCart ​

On this page, you will connect your Paystack account to FluentCart.

First, enable the payment gateway by toggling the **Payment Activation** switch at the top right.

You will see two tabs: **Live credentials** and **Test credentials**. It is highly recommended to start with the **Test credentials** to ensure everything is working correctly before accepting real payments.

On this page, you will see some fields to fill in and one URL to copy:

- Test Public Key
- Test Secret Key
- Webhook URL

To get this information, you will need to log in to your Paystack dashboard.

## Step 3: Set up Webhooks ​

Webhooks are essential for Paystack to send real-time updates to FluentCart, such as confirming successful payments or subscription renewals.

- **Copy the Webhook URL:** In your FluentCart Paystack settings, copy the entire **Webhook URL** provided.

![Set Up Webhooks](https://docs.fluentcart.com/assets/payment-activation-2.BuuVYrCE.webp)

## Step 4: Get the Credential from Paystack ​

Now, open a new tab and log in to your **Paystack dashboard**. Go to **Settings > Developers** (or **Settings > API Keys & Webhooks**). You can access the Paystack Developer Settings Page.

1. **Paste the Webhook URL:** Find the **Test Webhook URL** field. Paste the URL you just copied from FluentCart into this field.
2. **Copy Your API Keys:** On this same page, you will find your **Test Public Key** and **Test Secret Key**. Click the "**copy**" icon next to each key.

![Finding API Keys and Webhook fields in the Paystack dashboard](https://docs.fluentcart.com/assets/paystack-settings-3.CAUCEqZc.webp)

1. **Paste Keys into FluentCart:** Now, go back to your FluentCart settings page. **Paste** the **Test Public Key** and **Test Secret Key** into their matching fields.
2. **Save Changes:** Click **Save changes** in your Paystack dashboard, and then click the **Save Settings** button in your FluentCart dashboard.

![Finding API Keys and Webhook fields in the Paystack dashboard](https://docs.fluentcart.com/assets/save-settings-4.qdNlg1Rp.webp)

Your Paystack integration is now complete and in **Test Mode**. We recommend running a test transaction with a Paystack test card to ensure the connection is working.

To go live, simply repeat Step 3 using the **Live credentials** tab in FluentCart and the **Live API Keys** and **Live Webhook URL** fields in your Paystack dashboard.

If you have any questions or need further assistance, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/?utm_source=wpsnsite&utm_medium=popup&utm_campaign=spring#/).

---

## Razorpay Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/razorpay-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/razorpay-settings)

# Razorpay Settings ​

Razorpay is a popular and powerful payment solution, especially perfect for businesses in India. It allows you to accept a wide variety of payments, including UPI, Credit/Debit Cards, NetBanking, and Wallets. By connecting Razorpay to FluentCart, you provide your customers with a fast and secure payment option for their orders.

This guide will walk you through how you can get Razorpay up and running on your store.

## Step 1: Activate Razorpay in FluentCart ​

Before you can use Razorpay, you need to add the feature to your FluentCart store.

1. Log in to your WordPress dashboard and go to **FluentCart Pro > Settings**.
2. Click on the **Payment Settings** tab on the left.
3. You will see a list of available payment gateways. Find **Razorpay** and click the **Manage** button next to it.
4. If it isn't ready yet, you will see a screen with an **Install & Activate** button. Click on it.

![ Activate Razorpay](https://docs.fluentcart.com/assets/access-razorpay-1.DQqON1ve.webp)

## Step 2: Configure Razorpay Settings ​

On this page, you need to provide your Razorpay API credentials to connect your store to your bank account.

First, enable the payment gateway by toggling the **Payment Activation** switch at the top right. Here is a breakdown of the available settings:

- **Live/Test Credentials:** You can switch between the Live credentials and Test credentials tabs. It is highly recommended to start with test mode to ensure your checkout is working perfectly before you start accepting real money from customers.
- **Test/Live API Key:** Enter the **Key ID** you copied from your Razorpay dashboard into this field.
- **Test/Live Key Secret:** Enter the **Key Secret** generated in your Razorpay account here.
- **Test/Live Webhook Secret:** Enter your **Webhook Secret** key. You will get this secret when you set up the webhook in your Razorpay dashboard to receive payment updates.

TIP

Now, copy the **Webhook URL** from this page for future use in Step 4.![ Configure Razorpay Settings](https://docs.fluentcart.com/assets/payment-activation-2.nol9sfPU.webp)

## Step 3: Get Your Keys from Razorpay ​

To integrate your store with Razorpay, you require two special codes: a **Key ID** and a **Key Secret**.

1. Log in to your **Razorpay Dashboard**.
2. In the left sidebar, go to **Accounts & Settings**.
3. Click on the **API Keys** tab.

![ Get API Keys From Razorpay](https://docs.fluentcart.com/assets/razorpay-account-settings-3.2RKDQz1G.webp)

1. Click the **Regenerate Test Key** (or "Generate Key") button.

![ Get API Keys From Razorpay](https://docs.fluentcart.com/assets/Regenarate-Test-Key-4.xvIOL8Gy.webp)

1. Copy the **Key ID** and **Key Secret** that appear. Keep these safe!

![ Copy Key ID and Secret](https://docs.fluentcart.com/assets/Copy-the-public-key-secret-key-5.CEcLC1Je.webp)

## Step 4: Set Up Webhooks ​

Webhooks are like "digital status updates." They tell FluentCart exactly when a customer has finished paying so the order can be marked as "Paid" automatically.

1. In your Razorpay Dashboard, go to **Settings > Webhooks**.
2. Click on the **Add New Webhook** button.

![ Add New Webhook](https://docs.fluentcart.com/assets/add-new-webhook-6.DDE3fX61.webp)

1. In the popup that appears, paste the **Webhook URL** you copied before from FluentCart.
2. In the **Active Events** section, select these specific events to ensure your store stays updated:

**Required Payment Events:**

- ```
payment.authorized
```

 — Payment authorized successfully.
- ```
payment.captured
```

 — Payment captured and confirmed.
- ```
payment.failed
```

 — Payment failed or declined.
- ```
refund.processed
```

 — Refund completed successfully.

**Required Subscription Events (if applicable):**

- ```
subscription.authenticated
```

 — Customer completed authentication.
- ```
subscription.activated
```

 — Subscription is now active.
- ```
subscription.charged
```

 — Recurring payment successful.
- ```
subscription.cancelled
```

 — Subscription was cancelled.
- ```
subscription.halted
```

 — Payment failures caused a halt.
- ```
subscription.completed
```

 — All billing cycles completed.
3. Click the **Create Webhook** button to save your changes.
4. Razorpay will provide a **Webhook Secret**. **Copy** it for later use.

IMPORTANT

Make sure to save the Webhook Secret in the credentials section in your FluentCart settings for secure webhook verification.![ Create Webhook](https://docs.fluentcart.com/assets/create-webhook-7.4JQ8fSrb.webp)

## Step 5: Finalize Configuration in FluentCart ​

Now, take those keys and put them into your store settings.

1. Go back to your **FluentCart Payment Settings** for Razorpay.
2. Choose between the **Live credentials** or **Test credentials** tab.
3. Paste your **Key ID** and **Key Secret** into the corresponding fields.
4. Paste the **Test or Live Webhook Secret** you copied earlier from Razorpay.

> [Tip] We recommend starting with "Test" mode to make sure everything works before you take real money!

![ Finalize Configuration](https://docs.fluentcart.com/assets/razorpay-settings-8.BPCNcSuP.webp)

---

### Important: International Payments ​

If you want to sell to customers outside of India, there is an extra step:

- You must enable **International Payments** inside your actual **Razorpay Dashboard settings**.
- Without this, customers using cards from other countries might see their payments declined.

---

## Stripe Settings ​

**Source:** [https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/stripe-settings](https://docs.fluentcart.com/guide/payments-checkout/connecting-payment-gateways/stripe-settings)

# Stripe Settings ​

Stripe is a powerful and globally recognized payment platform that allows you to securely accept credit cards, debit cards, and various other payment methods through a single, seamless integration.

This guide will walk you through connecting your Stripe account to FluentCart to begin accepting payments.

## Step 1: Accessing Stripe Settings ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Settings**.
2. Click on the **Payment Settings** tab.
3. Locate **Stripe** in the list of payment gateways and click the **Manage** button next to it.

#### Step 2: Connect Your Stripe Account ​

The Stripe settings page allows you to connect your store in both Test and Live modes. You must select the appropriate mode before initiating the connection.

- **Test Mode Warning:** If your store is currently in Test mode, a banner will remind you to switch to Live mode for real transactions.
- **Select Credentials Mode:**

- **Test credentials:** Select this tab if you want to connect your Stripe account in Test Mode. This is perfect for testing your checkout flow without processing real payments.
- **Live credentials:** Select this tab when you are ready to start accepting real payments from customers.
- **Connect with Stripe:** After selecting the appropriate tab (Test or Live), click the **Connect with stripe** button. This will redirect you to Stripe's website, where you will be prompted to log in and authorize the connection with FluentCart. This is a secure process that automatically syncs your account for the selected mode.

INFO

FluentCart securely stores your Stripe connection information using a salt key encryption method. This ensures your informations remain fully encrypted in the database and protected from unauthorized access.
#### Step 3: Choose Your Checkout Mode ​

FluentCart gives you two different ways for customers to pay:

- **Embedded checkout (Recommended):** This keeps the customer on your website. It’s a customizable block that lets you control the design.
- **Stripe Hosted checkout:** This sends the customer to a secure page managed by **Stripe**. This is great for high-volume stores or if you want Stripe to handle all the complex security rules for you.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/stripe-settings.webp)

#### Step 4: Configure Webhooks ​

Webhooks are essential for the integration to function correctly. They allow Stripe to send real-time notifications to your store about payment events, such as successful charges, refunds, and subscription updates.

1. **Copy Your Webhook URL:** On the FluentCart Stripe settings page, you will see your unique **Webhook URL**. **Copy** this **URL** to your clipboard.
2. **Configure in Stripe:** Click the **Add Endpoint** link, and you’ll be redirected to your **Create an event destination** page.
3. **Select the Important Events:** Now, choose the events recommended by **FluentCart** for **Stripe** to send to your **endpoint**. Under **Events**, click the **All events** tab. Click the checkboxes to select these specific events:

The Events recommended by FluentCart are briefly explained below:

- **checkout.session.completed:** The customer finished checkout, and the order is ready to process.
- **charge.refunded:** A completed payment has been refunded to the customer.
- **charge.refund.updated:** Details of a refund were updated (like the amount or reason).
- **charge.succeeded:** The customer’s payment went through successfully.
- **invoice.paid:** A subscription invoice was paid by the customer.
- **invoice.payment.failed:** A subscription invoice payment failed (e.g., card declined).
- **customer.subscription.deleted:** The customer canceled their subscription.
- **customer.subscription.updated:** The customer’s subscription was changed (e.g., upgraded or downgraded).

Once you select all the suggested **Webhook Events**, click the **Continue** button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/select-events.webp)

Then, select the **Webhook endpoint** and again click the **Continue** button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/webhook-endpoint.webp)

Next, type a destination name, **paste** the **webhook URL** you copied earlier into the **Endpoint URL** field, and then click the “**Create Destination**” button.

![Screenshot of Stripe Settings Page](https://docs.fluentcart.com/images/payments-checkout/stripe-payment/create-destination.webp)

#### Step 5: Activate and Save ​

1. **Payment Activation:** Back on the **FluentCart Stripe settings** page, ensure the **Payment Activation** toggle at the top right is switched on.
2. **Save Settings:** Click the **Save Settings** button at the bottom to finalize the setup.

Your store is now configured to securely accept payments through Stripe.

> Note You can also connect your Stripe account by adding your API keys directly to your site's wp-config.php file for more secure setup. For detailed instructions on this advanced method, please see our guide on Configuring Stripe via wp-config.php.

---

