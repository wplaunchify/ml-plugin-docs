# Overview

*Category from WooCommerce Anti Fraud documentation*

---

## WooCommerce Anti-Fraud

**Source:** [https://woocommerce.com/document/woocommerce-anti-fraud/](https://woocommerce.com/document/woocommerce-anti-fraud/)

# WooCommerce Anti-Fraud

			WooCommerce Anti-Fraud automatically detects potential fraud every time an order is placed on your store. Each order is assigned an *Order Risk Score* along with tailored risk assessment advice. Additionally, the plugin integrates seamlessly with MaxMind’s AI-powered MinFraud services, providing an extra layer of robust security for your store.

## Experiencing a Card Attack or Fake Orders (Including PayPal)? – September 2025 Update

[↑ Back to top](#doc-title)

The OPMC Anti-Fraud plugin has advanced technology to prevent card attacks at the checkout. Including prevalent issues relating to the Paypal payment gateway.

It takes just 10 minutes to set up. **However, without the initial setup it will not be effective against card attacks.**

We’ve made it as easy as possible to get quick protection for card attacks.

### Short video explainers

[↑ Back to top](#doc-title)

There are **two videos** which outline the settings that need to be applied. These both cover the same material, but the first one is just a summary designed for experienced users, web developers, designers & IT professionals.

The first is a sub 1 minute video here:

You can get a more detailed run through here which is about 11 minutes. This is more useful if you are a store owner and explains the settings in more detail:

### Card Attack Protection – Quick Setup Guide

[↑ Back to top](#doc-title)

Follow these steps to protect your WooCommerce store from carding (card attack) attempts using the OPMC Anti-Fraud plugin.

**Key things you need to know:**

#### 1. Enable OPMC reCaptcha

- Follow these steps to enable ReCaptcha in the Antifraud Plugin: 
1. Go to **WP Admin → OPMC Anti-Fraud → reCaptcha tab**.
2. Tick **Enable reCaptcha**.
3. Get your**site key**and **secret key**(like a username & password).
4. Watch this 3-minute video for instructions: [How to get keys.](https://youtu.be/qeJ7kqsku4Q?si=QfH2hS7qWvijxEut)
5. Enter your keys into the fields.
6. Press **Save** at the bottom of the page.
7. A checkbox will appear to verify the settings. Tick it.

**⚠️ Important:** Only use **Google reCaptcha v2**. v3 is not effective for blocking card attacks.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2025-09-29-at-11.56.16@2x.png?w=980)

#### 2. Remove Conflicts with Other reCaptcha Plugins

- Follow these steps to avoid reCaptcha plugin conflicts:  
1. **Deactivate** any other reCaptcha plugins.
2. If you must keep them, configure them so they **do not run on the cart or checkout pages.**

**✅ Only one reCaptcha should be active on checkout.** Multiple reCaptchas = conflicts.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2025-10-01-at-21.25.35@2x.png?w=980)

#### 3. If Problems Continue → Use Cloudflare Turnstile

- Enabling Cloudflare Turnstile can be done from the Antifraud Settings Page:
1. Go to the **reCaptcha tab** in OPMC Anti-Fraud.
2. Select **Cloudflare Turnstile**instead.
3. Follow Cloudflare’s setup guide on their website.

This avoids issues if other software on your site is already using Google reCaptcha.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2025-10-01-at-21.37.15@2x.png?w=980)

#### 4. Enable PayPal Card Attack Protection

- If you use **PayPal**, you must do this:
1. Go to **WP Admin → OPMC Anti-Fraud → PayPal settings tab.**
2. Scroll to **PayPal Card Attack Settings.**
3. Tick **Enable PayPal Card Attack Protection.**
4. Press **Save changes** at the bottom.

**⚠️ Important:** If you skip this step, PayPal transactions will not be protected.Optional – Advanced Blocking (Use with Caution)

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2025-09-29-at-12.10.23@2x.png?w=980)

#### 5. Optional – Advanced Blocking (Use with Caution)

- **Only try these after enabling the settings above. Misuse can block real customers.**
1. **Unknown origin orders**– enable only if basic card attack settings don’t stop attacks.
2. **Scoring/weighting system** – use carefully. Blocking at “50/100” may block many real orders.
3. **Location-based blocking**– works best with a paid Bigdatacloud.com integration. Free version is much less accurate.

#### More Detail – How It Works & Key Considerations

#### Why OPMC reCaptcha?

- Our reCaptcha includes **behind-the-scenes technology** to block card attacks more effectively than standard reCaptcha plugins.
- It works even when PayPal is used.

#### Conflicts with Other reCaptchas

- Most failures happen when **multiple reCaptcha plugins** are active on checkout.
- Only one reCaptcha can load at checkout, so disable others or prevent them from running on cart/checkout pages.

#### Cloudflare Turnstile as a Backup

- If you cannot fully disable other reCaptcha plugins, switch to **Cloudflare Turnstile**.
- This avoids conflicts but still protects against card attacks.

#### PayPal Protection

- Separate setup is required for PayPal transactions.
- Without enabling the PayPal option, PayPal checkouts remain unprotected.

#### Advanced Settings – Use Carefully

- Blocking unknown origin orders can stop spam but may block legitimate orders if the plugin is already protecting against attacks.
- Weighting and scoring systems (e.g. blocking at 50/100) can block many real orders if misused.

#### Latest Anti-Fraud for WooCommerce Updates

- **v7.1 – Faster Checks, Smarter AI**

      Enhanced rule evaluation for faster fraud screening.

      New customizable rules (e.g., country blocking, risky emails).

      Improved logging for clearer fraud scoring.

      **ChatGPT integration** for advanced AI-powered fraud analysis.
- **v7.0 – Major Security Boost**

      Added SMS verification for suspicious orders.

      Advanced IP whitelisting for trusted customers.

      Refined scoring to reduce false positives.

      Full WooCommerce 8.x compatibility.

## Installation

[↑ Back to top](#doc-title)

To start using a product from WooCommerce.com, you can use the “Add to store” functionality on the order confirmation page or the [My subscriptions](https://woocommerce.com/my-account/my-subscriptions/) section in your account.

1. Navigate to [My subscriptions](https://woocommerce.com/my-account/my-subscriptions/).
2. Find the **Add to store** button next to the product you’re planning to install.
3. Follow the instructions on the screen, and the product will be automatically added to your store.

---

Alternative options and more information at: 
[Managing WooCommerce.com subscriptions](https://woocommerce.com/document/managing-woocommerce-com-subscriptions/).

![](https://woocommerce.com/wp-content/uploads/2020/02/image_c72ea3.png?w=980)Adding a WooCommerce.com subscription to your store

### Quickstart with the Plugin

[↑ Back to top](#doc-title)

1. The Antifraud settings page is under **WooCommerce > Settings > Antifraud**. In Antifraud settings, you can adjust rule weights and define actions based on various Risk Scores.
2. By default, the plugin will automatically protect your store using the baseline options. Some of these preset options include canceling fraud orders, holding suspected orders, and email notifications for flagged orders.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2023-09-11-at-14.48.43@2x.png?strip=all&w=704)

### Advanced Features

[↑ Back to top](#doc-title)

In Anti-Fraud Settings, you can enable rules, update rule weights, and set automated actions based on the Order Risk Scores including:

- **Automation Actions:**Trigger actionsbased on score including Cancelling Fraud,Placing Suspected Orders on hold, or notifying the administrator with an email notification.
- **Velocity Attack Prevention:** Tools to protect against rapid, fake orders, including reCAPTCHA, card testing protection, and order delay settings. Unlike other plugins, OPMC’s reCaptcha integration automatically revalidates each time the ‘*Place Order*‘ button is clicked.
- **Advanced Blacklisting:**Filtering based on Geolocation, IP, Email address, and Order Attempts.
- **Advanced Whitelisting:**By Payment Methods, User Roles, Email and IP Address.
- **Address-based Rules**: Based on Billing and Shipping, Phone Number, IP and VPN Check.
- **Integration with Paypal:**Verify PayPal before sending the order for fraud prevention.
- **MaxMind Integration:** Utilize MaxMind’s AI-powered fraud detection, with automatic recording of key MaxMind data points for comprehensive analysis.
- **MinFraud Integration:** Assess fraudulent activity by integrating**minFraud®**AI-based service by MaxMind.
- **Trust Swiftly Integration:** Enhanced identity verification.
- **Customer Pre-Purchase Assessment**: Score potential orders before payment is accepted.
- **ReCaptcha V2 Compatibility:** Works with Woo Checkout Blocks and Classic Woo Checkout.
- **Multilingual Support**: Support for over 32 Languages, including English, Mandarin, Spanish, and Arabic.
- **Manual Order Check Button** – Allows individual orders to be manually checked for fraud.
- **Anti-Fraud Dashboard:**High-Level overview of fraud-related information and order information.

Learn more about the [Setup and Configuration in the Antifraud Plugin](https://woocommerce.com/document/configuring-antifraud-settings-page/).

## Automating Actions

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2014/09/Handling-Fraud-Orders-1.png?w=980)

Trigger actionsbased on score including Cancelling Fraud,Placing Suspected Orders on hold, or notifying the administrator with an email notification.

#### Configure and work with the Order Risk Score.

Getting started using the Antifraud plugin: [Using Antifraud Order Risk Score](https://woocommerce.com/document/using-antifraud-order-risk-score/)

#### Set up actions based on the Order Risk Score.

Setting thresholds: [Antifraud Threshold and Notification Settings Page](https://woocommerce.com/document/configuring-antifraud-settings-page/)

## Velocity Attacks and Credit Card Testing

[↑ Back to top](#doc-title)

Velocity Attacks and other types of Credit Card fraud is on the rise. The Anti-Fraud plugin has features specifically designed to address the challenges of hundreds or thousands of false orders being put through your store.

Please see the section at the very top of this page which provides detailed instructions on how to handle fraudulent transactions.

Some of the Anti-Fraud Velocity Attacks and Credit Card Testing Features include:

1. Dedicated Settings Tab for Velocity Attack Management / Credit Card Testing.
2. Integration with Google ReCaptcha.
3. Card Testing Protection via API.
4. Compatibility with WooCommerce Classic Checkout / WooCommerce Checkout Blocks.
5. Order Processing Delay Setting.
6. Detection Across Orders and between Payment Attempts.

Find out more about preventing Velocity Attacks and other types of credit card fraud prevention and the features of the Antifraud Plugin: [Velocity Attacks](https://woocommerce.com/document/velocity-attacks/)

## Advanced Blacklisting

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2014/09/Blacklisting.png?w=980)

With the Antifraud Plugin you can filter and prevent fraudulent users based on Geolocation, IP, Email address, and Order Attempts.

Learn more about how the Antifraud Plugin uses advanced Blacklisting Features to prevent fraud orders before they are placed including:

- [How does the Blacklisting Feature work?](https://woocommerce.com/document/configuring-antifraud-settings-page/#section-8)
- [Can you Blacklist orders based on Email / IP?](https://woocommerce.com/document/configuring-antifraud-settings-page/#section-8)
- [How to Automatically Blacklist fraudulent user details?](https://woocommerce.com/document/configuring-antifraud-settings-page/#section-8)

For more details and configuration instructions read: [Blacklisting Settings.](https://woocommerce.com/document/configuring-antifraud-settings-page/#section-8)

## Address Based Rules

[↑ Back to top](#doc-title)

Identify threats based on IP, Geolocation, Phone number, VPN/Proxy, Billing and Shipping addresses, and more.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2024-11-09-at-12.00.45@2x.png?w=980)

The Antifraud Plugin adds additional layers of fraud detection to your WooCommerce Checkout process. Filter and prevent fraudulent orders based on a variety of order information, including:

- Physical and IP Address Comparison Rules
- Billing and Shipping Address Mismatch Rules
- Geolocation and Billing / Shipping Address Comparison Rules
- VPN / Proxy Detection

## Expand fraud prevention with Advanced Integrations

[↑ Back to top](#doc-title)

![](https://woocommerce.com/wp-content/uploads/2014/09/3rdPartyIntegration.png?w=980)

The Anti-Fraud for WooCommerce Plugin allows you to integrate with advanced Third Party fraud detection and prevention services. Learn how to strengthen your store’s security posture by integrating with the leading service providers including:

- **AI / ML Fraud Detection:** 
- **MaxMind** – Powerful machine learning technology developed to better identify fraudulent orders. Learn more about [Integrating with MaxMind](https://woocommerce.com/document/integrating-antifraud-with-maxmind/)
- ChatGPT API Integration – AI based in house security expert who can review every single order for fraud factors.
- **Advanced Order Detail Verification:**
- **Bigdatacloud.com** – Validate customer addresses based on precise location intelligence
- **Quickemailverification.com** – Advanced email verification service
- **Advanced Identity Verification:**
- **TrustSwiftly** – Flexible & accurate identify verification using 15+ methods
- **Leading Automated and Security Service Providers**
- **Google reCAPTCHA** – Require additional verification to deter velocity attacks
- **Paypal** – Additional tools for merchants accepting Paypal payments

### Integrate with ChatGPT

[↑ Back to top](#doc-title)

Our powerful ChatGPT integration is designed to provide you with an internal fraud security expert who can provide detailed feedback about each transaction and the likelihood of fraud.

While an experienced store owner can be more wary of fraud red flags, ChatGPT can automate this process for you and give each order a risk score out of 100.

All orders are automatically rated, and details provided for the risk score given.

You need to enter your ChatGPT API credentials, which is a separate service from the standard ChatGPT. The links to set this up are provided within the plugin itself.

Using the ChatGPT API to check orders is additional cost that you are directly responsible for.

### Integrate with MaxMind

[↑ Back to top](#doc-title)

Integrating with MaxMind and MinFraud: [Integrating Antifraud with Maxmind](https://woocommerce.com/document/integrating-antifraud-with-maxmind/)

### Integrate with Big Data Cloud

[↑ Back to top](#doc-title)

How to integrate the BigDataCloud with Anti-Fraud: [Anti-Fraud BigDataCloud Integration](https://woocommerce.com/document/antifraud-troubleshooting/#h_01HSH81VN0QYS06FF9HT263KG4)

### Integrate with Trust Swiftly

[↑ Back to top](#doc-title)

How to integrate the Trust Swiftly with Antifraud: [Antifraud TrustSwiftly Integration](https://woocommerce.com/document/antifraud-trustswiftly-integration/)

### Integrate with Google reCAPTCHA

[↑ Back to top](#doc-title)

How to integrate the Google reCAPTCHA with Antifraud: [Antifraud Google reCAPTCHA Integration](https://woocommerce.com/document/velocity-attacks/#section-3)

---

## Configuring Your Store Order Status Process

[↑ Back to top](#doc-title)

Assess customers for potential fraud before payment is processed. If the fraud score falls within a high-risk range, the order will be declined, and a customized message will be displayed on the checkout page, informing the buyer of the reason for the denial.

Learn how to configure the Anti-Fraud Plugin to effectively stop fraudsters at the right moment, minimizing their impact on your store, suppliers, and payment gateways.

![](https://woocommerce.com/wp-content/uploads/2014/09/CleanShot-2024-11-09-at-13.16.51@2x.png?w=980)

**Plugin scans and blocks fraudulent activities in real-time.**

- Order information is checked by an automated Risk Scoring system and can be configured to run pre or post-payment.
- Risk Scoring assigns a risk to each order, the order can be assigned a new status based on the level of risk.
- Notification options alert the store owner when pre-configured thresholds are exceeded for specific orders.

## Analytics Dashboard

[↑ Back to top](#doc-title)

The Antifraud Dashboard can be accessed from the following: **WP Admin > Anti Fraud**

The Antifraud Analytics Dashboard provides a clear high-level overview of orders and order risk scoring details based on the fraud rules within the Antifraud Plugin. These include but are not limited to:

- Discover recent fraudulent activities
- View Trends over a week
- What’s going on with the latest orders
- Emails blocked in 24 hours
- PayPal accounts under verification
- Complete, unified information on fraudulent activities in one place.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2020/02/recaptcha.jpg)

### reCaptcha Integration

	
			by [I13 Web Solution](https://woocommerce.com/vendor/i13-web-solution)

Protect your eCommerce store from malicious and automated attacks by using reCaptcha/Cloudflare Turnstile/hCaptcha for WooCommerce.

---

