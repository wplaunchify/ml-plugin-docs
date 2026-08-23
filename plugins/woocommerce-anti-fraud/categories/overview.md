# Overview

*Category from WooCommerce Anti Fraud documentation*

---

## Anti-Fraud for WooCommerce

**Source:** [https://woocommerce.com/document/woocommerce-anti-fraud/](https://woocommerce.com/document/woocommerce-anti-fraud/)

# Anti-Fraud for WooCommerce

			Anti-Fraud for WooCommerce helps identify suspicious orders, reduce card testing and automated checkout abuse, and automate how potentially fraudulent orders are handled.

The extension evaluates orders using configurable fraud rules and assigns each checked order a risk score. Store owners can use that score to review suspicious transactions, place orders on hold, cancel high-risk orders, block known bad actors, or prevent high-risk checkouts before payment.

Anti-Fraud for WooCommerce can also add additional protection through Checkout CAPTCHA, payment and order attempt limits, MaxMind minFraud, PayPal-specific controls, identity verification, AI-assisted fraud signals, and other optional services.

No fraud prevention system can identify every fraudulent transaction. Use Anti-Fraud for WooCommerce alongside the fraud controls provided by your payment gateway, appropriate checkout security, and manual review for transactions that warrant additional attention.

## Installation

[↑ Back to top](#doc-title)

After installing and activating Anti-Fraud for WooCommerce, go to **WooCommerce > Settings > Anti-Fraud** to configure the extension.

Anti-Fraud also provides a dedicated dashboard. When the dashboard is enabled, select **Anti Fraud** from the WordPress admin menu to open the store protection overview.

![Anti-Fraud for WooCommerce dashboard showing setup shortcuts, protection status, fraud checks, Checkout CAPTCHA status, trusted customers, and MaxMind status.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Settings.png?w=980)

## Get started

[↑ Back to top](#doc-title)

Anti-Fraud includes sensible starting settings, but every store has a different customer profile and tolerance for risk. Before relying on automated blocking, review the main protection settings for the store.

For a new installation:

1. Go to **WooCommerce > Settings > Anti-Fraud**.
2. Review the suggested protection level if the initial setup prompt appears.
3. Open **Essential protection > Core protection** and review the risk thresholds.
4. Decide whether high-risk orders should be checked before payment.
5. Review the automatic order-status actions.
6. If the store is experiencing card testing or automated fake orders, configure **Card testing protection** and **Checkout CAPTCHA**.
7. Place test orders using the store’s normal checkout and payment methods.
8. Review the resulting risk score and failed rules from the WooCommerce order screen.

Start with the recommended protection settings and adjust individual rules as real order data becomes available. Making several aggressive changes at once can make false positives harder to diagnose.

![Anti-Fraud for WooCommerce Core protection settings showing risk thresholds, fraud protection preset, pre-payment fraud check, and blocked checkout message.](https://woocommerce.com/wp-content/uploads/2014/09/Af-Settings-Start-Here.png?strip=all&w=704)

## Navigate the Anti-Fraud settings

[↑ Back to top](#doc-title)

The settings are organized around common fraud-prevention tasks.

**Your store protection** provides the Anti-Fraud overview and highlights areas that may need attention.

**Essential protection** contains the main risk thresholds, automatic actions, and fraud rules used to score orders.

**Card testing protection** contains controls designed for rapid checkout attempts, card testing, and similar automated abuse.

**Order review & alerts** contains failed-order cleanup, marketplace order handling, and administrator email alerts.

**Trusted & blocked customers** contains the allow list and block list.

**Extra protection tools** contains Checkout CAPTCHA, PayPal settings, MaxMind services, and Trust Swiftly.

**Advanced controls** contains optional AI fraud signals and chargeback-related services.

**Help** provides support and troubleshooting links.

The exact settings displayed can vary according to the store’s payment methods, enabled integrations, and configuration.

## Understand order risk scores

[↑ Back to top](#doc-title)

Anti-Fraud calculates a risk score from **0 to 100**.

A lower score indicates fewer detected risk signals. A higher score indicates that more or stronger fraud indicators were detected.

The score is built from the fraud rules that are enabled for the store. Each rule has a configurable weight. When a rule matches an order, its weight contributes to the overall risk score.

In **Essential protection > Core protection**, set where the store considers an order to become:

- Medium risk.
- High risk.

These thresholds determine how the score is presented and can also be used by automated order actions.

![Anti-Fraud for WooCommerce dashboard showing setup shortcuts, protection status, fraud checks, Checkout CAPTCHA status, trusted customers, and MaxMind status.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Settings.png?w=980)

### Automatic order actions

[↑ Back to top](#doc-title)

Anti-Fraud can use the calculated score to change an order’s status automatically.

For example, the store can:

- Put an order on hold when it reaches a review threshold.
- Cancel an order when it reaches a higher fraud threshold.
- Leave the order status unchanged and use the score for manual review.

Configure these options under **Essential protection > Core protection > Automatic order status**.

Avoid setting automatic cancellation thresholds too low when first configuring the extension. Review real orders and risk scores before applying aggressive automatic actions.

## Check orders before payment

[↑ Back to top](#doc-title)

By default, fraud assessment can take place as part of normal order processing. Stores that need stronger checkout protection can also enable a **pre-payment fraud check**.

Go to **Essential protection > Core protection > Pre-payment fraud check** and enable **Run check before payment**.

When this option is enabled, Anti-Fraud evaluates the checkout before payment is completed. If the calculated risk reaches the configured high-risk level, the checkout can be stopped before the transaction proceeds.

A custom message can be displayed to customers whose checkout is blocked.

![Pre-payment fraud protection settings in Anti-Fraud for WooCommerce.](https://woocommerce.com/wp-content/uploads/2014/09/pre-payment-check.png?w=980)

Pre-payment checking is particularly useful when a payment provider has raised concerns about fraudulent traffic or when the goal is to stop high-risk attempts before they reach the payment gateway.

## Configure fraud rules

[↑ Back to top](#doc-title)

Go to **Essential protection > Fraud rules** to control which signals contribute to an order’s risk score.

Anti-Fraud can evaluate signals including:

- First-time customers or first processing orders.
- International orders.
- High-value orders.
- Orders that are unusually large compared with previous orders.
- Billing and shipping address differences.
- Billing phone number and country consistency.
- IP address and geolocation information.
- Proxy usage.
- Suspicious or disposable email characteristics.
- Countries identified by the store as higher risk.
- Multiple orders associated with the same IP address.
- Rapid or repeated order attempts.
- Optional MaxMind fraud signals.

Each enabled rule can be assigned a **weight**. A higher weight gives that rule more influence over the final risk score.

Set a rule’s weight to suit the store’s real fraud patterns rather than treating every warning as equally important.

![Anti-Fraud rules with configurable risk weights.](https://woocommerce.com/wp-content/uploads/2014/09/Fraud-rule-weight-settings.png?w=980)

### Location and email verification

[↑ Back to top](#doc-title)

Some fraud rules can use additional services to improve the available information.

Depending on the configuration, these can include IP and browser location information or external email-verification services.

External services may require a separate account, API key, or paid plan.

## Protect against card testing attacks

[↑ Back to top](#doc-title)

Card testing occurs when automated or repeated checkout attempts are used to test payment credentials. These attacks can create large numbers of failed payments or fake orders in a short period.

Open **Card testing protection** to review the current protection status and configure the controls designed for this traffic.

If the store is currently experiencing a card testing attack, prioritize Checkout CAPTCHA and the order and payment attempt limits before making broad changes to normal fraud-scoring thresholds.

![Card testing protection controls in Anti-Fraud for WooCommerce.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Card-testing-protection.png?w=980)

#### Enable Checkout CAPTCHA

Anti-Fraud supports two checkout CAPTCHA options:

- **Cloudflare Turnstile** — a privacy-focused, low-friction option that can often verify legitimate shoppers without requiring them to solve a visible challenge.
- **Google reCAPTCHA v2** — Google’s challenge-based CAPTCHA option.

Go to **Extra protection tools > Checkout CAPTCHA**, enable **Require Checkout CAPTCHA at checkout**, and select the provider that best fits the store.

For Cloudflare Turnstile, enter the Turnstile site and secret keys.

For Google reCAPTCHA, enter the **reCAPTCHA v2** site and secret keys.

Anti-Fraud does not currently support Google reCAPTCHA v3. reCAPTCHA v3 works differently from the CAPTCHA methods supported by Anti-Fraud: instead of validating a completed challenge, it returns a background risk score that requires separate threshold and action logic. If you prefer a less intrusive checkout experience than a traditional CAPTCHA challenge, **Cloudflare Turnstile is the recommended supported alternative**.

Classic checkout also allows the position of the CAPTCHA to be adjusted. WooCommerce Block Checkout uses the extension’s Blocks integration.

![Anti-Fraud Checkout CAPTCHA settings with Cloudflare Turnstile selected and site and secret key fields displayed.](https://woocommerce.com/wp-content/uploads/2014/09/anti-fraud-checkout-captcha-turnstile.png?w=980)

Test checkout after enabling CAPTCHA, particularly if another extension or the active theme also adds bot protection to checkout. Avoid presenting customers with duplicate CAPTCHA challenges.

### Limit repeated order attempts

[↑ Back to top](#doc-title)

The **Order attempt limit** identifies customers making too many checkout attempts within a configured period.

The standard counting mode uses WooCommerce orders and customer identifiers such as IP address, email, and phone number.

For more persistent card testing, **Advanced** counting can also incorporate payment-attempt information and broader attempt signals.

Start with the standard mode. Use Advanced counting when attackers are rotating details or when ordinary order counting does not adequately identify the attack.

### Limit failed payment attempts

[↑ Back to top](#doc-title)

Enable **Limit failed payment attempts per order** to stop repeated declines against the same WooCommerce order.

Set the maximum number of failed payment attempts appropriate for the store.

This helps prevent a single checkout session from being reused to test multiple payment credentials.

### Apply time-based order limits

[↑ Back to top](#doc-title)

Stores can optionally set a time window and limit the total number of allowed attempts within that period.

These controls are intended for unusually aggressive traffic and should be tested carefully to avoid interrupting legitimate order volume.

## Protect PayPal checkout paths

[↑ Back to top](#doc-title)

When a PayPal-related payment extension is detected, Anti-Fraud provides additional settings under **Extra protection tools > PayPal & Checkout CAPTCHA**.

These controls address two different use cases.

### PayPal payment attempt limits

[↑ Back to top](#doc-title)

PayPal payment-attempt protection can limit rapid attempts across a rolling time window and an hourly limit.

Use these controls when PayPal or a related gateway is being targeted by repeated checkout or card-testing attempts.

![PayPal payment attempt protection settings in Anti-Fraud for WooCommerce. payment attempt limits](https://woocommerce.com/wp-content/uploads/2014/09/AF-Card-pesting-checkout1.png?w=980)

![ PayPal payment attempt protection settings in Anti-Fraud for WooCommerce. PayPal protection](https://woocommerce.com/wp-content/uploads/2014/09/AF-Card-pesting-checkout2.png?w=980)

### PayPal account verification

[↑ Back to top](#doc-title)

For customers paying with a PayPal account, Anti-Fraud can also require verification of the PayPal email address.

Optional controls include:

- Requiring PayPal email verification.
- Holding downloadable products until verification succeeds.
- Sending reminder emails for orders awaiting verification.
- Automatically cancelling orders that remain unverified.
- Maintaining a list of trusted PayPal email addresses.

These settings are separate from card-testing controls and should be configured according to the store’s fulfillment workflow.

## Review failed orders and attack cleanup

[↑ Back to top](#doc-title)

During a card attack, large numbers of failed orders and payment notifications can make administration difficult.

Go to **Order review & alerts > Failed orders & cleanup** to review the available cleanup tools.

The extension can help identify and remove failed orders from a selected period and can reduce failed-payment email noise while an attack is being handled.

Review affected orders before bulk cleanup. Order information may already have been sent to payment providers, fulfillment systems, accounting platforms, or other integrations, and deleting the WooCommerce order does not remove data from those external systems.

![Anti-Fraud failed order cleanup controls for card testing incidents.](https://woocommerce.com/wp-content/uploads/2014/09/Af-failed-orders-and-cleanup1.png?w=980)

## Allow trusted customers

[↑ Back to top](#doc-title)

Use **Trusted & blocked customers > Allow list** to exclude known trusted customers or order sources from applicable fraud checks.

Allow-list controls can include trusted:

- Email addresses and domains.
- IP addresses.
- Phone numbers.
- User roles.
- Payment methods.
- Names.
- Addresses.
- Countries.
- Cities.
- States or regions.
- Postal codes.
- Selected REST API keys.

Allow listing can be useful for internal staff, known business customers, trusted integrations, and customers that would otherwise trigger a specific fraud rule repeatedly.

![Allow list page showing several categories without displaying real customer information.](https://woocommerce.com/wp-content/uploads/2014/09/AF-setting-allow-list.png?w=980)

Use allow lists narrowly. A broad allow-list rule can bypass useful fraud signals for more customers than intended.

## Block known fraudulent customers

[↑ Back to top](#doc-title)

Use **Trusted & blocked customers > Block list** to stop repeat abuse from known customer details.

The block list supports controls for identifiers including:

- Email addresses.
- IP addresses.
- Phone numbers.
- Countries.
- First and last names.
- Address keywords.
- Cities.
- States or regions.
- Postal codes.

Email addresses and IP addresses can also be added automatically when configured high-risk behavior is detected.

## Block known fraudulent customers

[↑ Back to top](#doc-title)

Use **Trusted & blocked customers > Block list** to stop repeat abuse from known customer details.

The block list supports controls for identifiers including:

- Email addresses.
- IP addresses.
- Phone numbers.
- Countries.
- First and last names.
- Address keywords.
- Cities.
- States or regions.
- Postal codes.

![Anti-Fraud block list for email, IP, phone, and location information.](https://woocommerce.com/wp-content/uploads/2014/09/AF-block-list.png?w=980)

## Handle marketplace and imported orders

[↑ Back to top](#doc-title)

Orders imported from marketplaces or external systems do not always contain the same checkout information as orders created directly through the WooCommerce storefront.

Go to **Order review & alerts > Marketplace orders** to enable marketplace-aware handling.

Anti-Fraud can recognize imported orders from supported marketplaces such as eBay, Amazon, and Etsy and apply profiles designed for those order sources.

For REST API orders that cannot be identified as a known marketplace, choose how the order should be handled. Depending on the store’s workflow, unknown imports can be held for review or assessed using the normal WooCommerce fraud rules.

![Marketplace order fraud settings for imported WooCommerce orders.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Marketplace-orders.png?w=980)

Stores using an ERP, headless storefront, custom connector, or another REST API integration should test imported orders before enabling restrictive handling for unknown order sources.

## Configure REST API order protection

[↑ Back to top](#doc-title)

Anti-Fraud can also assess orders created through the WooCommerce REST API.

Under **Essential protection > Core protection > REST API orders**, the store can:

- Enable fraud scoring for API-created orders.
- Limit the number of REST API orders accepted per hour.
- Trust selected WooCommerce REST API keys.

API throttling is useful when an integration key could be abused to create a large number of orders.

If the store does not use REST API order creation, a restrictive limit can provide an additional layer of protection. If legitimate integrations do create orders through the API, configure and test those integrations before applying aggressive limits.

## Configure administrator alerts

[↑ Back to top](#doc-title)

Go to **Order review & alerts > Email alerts** to notify administrators when an order reaches a selected risk score.

The alert recipient and trigger threshold can be configured for the store.

Rate limiting is also available to prevent large numbers of Anti-Fraud notifications from overwhelming the administrator’s inbox during a high-volume attack

![Anti-Fraud email alert and notification rate-limit settings.](https://woocommerce.com/wp-content/uploads/2014/09/AF-config-admin-alerts.png?w=980)

## Review fraud information on an order

[↑ Back to top](#doc-title)

Open an order from **WooCommerce > Orders** to view its Anti-Fraud assessment.

The order screen can display:

- The overall fraud risk score.
- Risk advice.
- Rules that contributed to the score.
- Rules that were skipped.
- Additional information from enabled integrations.
- Controls for adding suspicious details to the block list.

If an order does not yet have a score, use **Calculate fraud risk** or the available **Fraud Check** action to schedule or run an assessment.

![WooCommerce order showing Anti-Fraud risk score and matched fraud rules.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Fraud-order-review.png?w=980)

![WooCommerce orders showing Anti-Fraud risk indicators.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Risk-Score.png?w=980)

## Use the Anti-Fraud dashboard

[↑ Back to top](#doc-title)

When enabled, the Anti-Fraud dashboard provides a high-level view of recent order-risk activity.

Go to **Anti Fraud** in the WordPress admin menu.

The dashboard can be used to review recent risk activity, order outcomes, blocked identifiers, PayPal verification activity, and the overall state of fraud protection.

Choose an appropriate reporting period for the store. Shorter date ranges can improve dashboard performance on stores with a large order history.

![Anti-Fraud dashboard showing recent WooCommerce fraud risk activity.](https://woocommerce.com/wp-content/uploads/2014/09/AF-dashboard.png?w=980)

## Monitor fraud-check processing

[↑ Back to top](#doc-title)

Some fraud checks are processed through WordPress scheduled tasks.

Anti-Fraud monitors the health of this processing queue and can display a warning when fraud checks appear to be waiting without being processed normally.

If a queue warning appears:

1. Open the Anti-Fraud dashboard and review the queue status.
2. Check whether WordPress scheduled events are running correctly.
3. Review any available recovery or repair action.
4. Check WooCommerce and Anti-Fraud logs if the issue continues.
5. Contact support with the relevant system status and logs if orders remain unscored.

![ Anti-Fraud fraud-check queue health warning and processing status.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Dashboard-queue-status.png?w=980)

A queue warning does not necessarily mean fraud protection has stopped completely. Review the reported pending checks, recent processing information, and the site’s WordPress cron configuration before changing fraud rules.

## Backfill risk scores for existing orders

[↑ Back to top](#doc-title)

Anti-Fraud can run fraud checks against existing orders that still need assessment.

Go to **Essential protection > Core protection > Backfill scores for past orders**.

Enable backfill scoring and select how many days of order history should be included.

This setting is for historical orders. It does not enable or disable the normal fraud checking performed on new orders.

Use a smaller date range first on stores with large order histories.

## Add MaxMind minFraud

[↑ Back to top](#doc-title)

Anti-Fraud can connect to MaxMind minFraud for additional transaction intelligence.

Available configuration depends on the MaxMind service associated with the account and can include:

- **MaxMind · Score** for transaction risk scoring.
- **MaxMind · Insights** for additional fraud intelligence.
- **MaxMind · Factors** for more detailed risk factors.
- **MaxMind · Advanced Signals** for signals such as VPN, proxy, Tor, hosting provider, and IP-to-billing-location distance.

A compatible MaxMind account and credentials are required.

After entering the account details, configure the relevant MaxMind risk threshold and the weight that the MaxMind result should contribute to the Anti-Fraud score.

![MaxMind minFraud Score integration settings in Anti-Fraud for WooCommerce.](https://woocommerce.com/wp-content/uploads/2014/09/AF-MaxMind.png?w=980)

![MaxMind advanced fraud signal rules for VPN, proxy, Tor, hosting, and IP distance.](https://woocommerce.com/wp-content/uploads/2014/09/AF-MaxMind-Advanced-rules.png?w=980)

MaxMind is an external service and may require a separate paid plan. Only enable API levels and advanced signals supported by the store’s MaxMind account.

## Add Trust Swiftly identity verification

[↑ Back to top](#doc-title)

Trust Swiftly can provide an additional verification step for selected high-risk customers.

Go to **Extra protection tools > Trust Swiftly** and enter the Trust Swiftly account details.

After connecting the service, select the verification template and when verification should occur. Set the risk score at which the customer should be asked to complete verification.

This allows additional identity checks to be reserved for orders that reach the store’s chosen level of risk.

![Trust Swiftly identity verification settings for high-risk WooCommerce orders.](https://woocommerce.com/wp-content/uploads/2014/09/AF-Trust-Swiftly.png?w=980)

## Use AI fraud signals

[↑ Back to top](#doc-title)

Anti-Fraud can optionally send relevant order information to a supported AI service for additional fraud-analysis signals.

Go to **Advanced controls > AI fraud signals**, enable the feature, select the available model, and enter the required API credential.

AI analysis should be treated as an additional signal rather than the sole reason for accepting or rejecting an order.

![Optional AI fraud signal settings in Anti-Fraud for WooCommerce.](https://woocommerce.com/wp-content/uploads/2014/09/Af-AI.png?w=980)

AI services are third-party services. API usage, charges, data handling, availability, and provider terms are separate from the Anti-Fraud for WooCommerce subscription. Review the provider’s terms and privacy requirements before enabling the integration.

## Use SMS verification

[↑ Back to top](#doc-title)

Anti-Fraud can use FraudLabs Pro to send a one-time verification code to a customer’s phone.

Configure this option under **Essential protection > Core protection > SMS verification** and enter a FraudLabs Pro API key.

SMS verification currently applies to classic WooCommerce checkout. Do not rely on this feature as the verification layer for Block Checkout unless the plugin settings indicate that Block Checkout support is available.

## Troubleshooting

[↑ Back to top](#doc-title)

If Anti-Fraud does not behave as expected, first identify whether the problem affects fraud scoring, checkout protection, an external integration, or scheduled processing.

### An order has no risk score

[↑ Back to top](#doc-title)

Open the order and check whether a fraud check is queued.

If no score has been calculated, use the available **Calculate fraud risk** or **Fraud Check** action.

If multiple orders remain queued, review the queue-health information and confirm that WordPress scheduled events are running.

### A legitimate order receives a high score

[↑ Back to top](#doc-title)

Open the order and review the rules that contributed to the score.

Identify which rule or combination of rules is producing the unexpected result, then adjust its weight or configuration rather than immediately raising every threshold.

Where appropriate, add a genuinely trusted customer or identifier to the allow list.

### A fraudulent order receives a low score

[↑ Back to top](#doc-title)

Check whether relevant rules are enabled and whether their weights are high enough to affect the overall score.

Consider additional signals such as order-attempt detection, Checkout CAPTCHA, payment-attempt limits, MaxMind, or a store-specific block list.

Fraud scoring is based on the information available to the extension and cannot guarantee detection of every fraudulent transaction.

### Checkout CAPTCHA does not appear

[↑ Back to top](#doc-title)

Confirm that Checkout CAPTCHA is enabled and that the correct provider credentials are saved.

For classic checkout, review the configured CAPTCHA position.

For Block Checkout, verify that the store is using a supported WooCommerce checkout configuration.

Also test for conflicts with themes, optimization tools, and other plugins that alter checkout or add their own CAPTCHA.

### PayPal is still receiving repeated attempts

[↑ Back to top](#doc-title)

Confirm that PayPal is detected by Anti-Fraud and review **PayPal & Checkout CAPTCHA**.

Enable the appropriate PayPal payment-attempt protection and review the rolling-window and hourly limits.

Also confirm that Checkout CAPTCHA and the general card-testing controls are active where appropriate.

### Administrator alert emails do not arrive

[↑ Back to top](#doc-title)

Confirm the email-alert recipient and trigger score.

Check the site’s WordPress administrator email settings and spam filtering.

Anti-Fraud sends mail through the WordPress email system, so mail-delivery problems affecting the site can also affect fraud notifications.

### Enable logging for support

[↑ Back to top](#doc-title)

Anti-Fraud includes detailed logging options for troubleshooting.

Enable debug or developer logging only while investigating an issue, reproduce the problem, and then collect the relevant logs.

Disable verbose logging again after troubleshooting is complete.

When contacting support, include:

- A description of the problem.
- Example order IDs.
- The approximate time the problem occurred.
- Relevant Anti-Fraud or WooCommerce logs.
- The WooCommerce system status report.
- Any queue-health warning shown by Anti-Fraud.

Do not send passwords, complete payment-card details, CAPTCHA secret keys, or third-party API secrets.

## Best practices

[↑ Back to top](#doc-title)

For most stores, effective fraud prevention comes from combining several moderate controls rather than relying on one extremely strict rule.

Keep the core fraud rules enabled, review real fraud-score results, and tune weights based on the store’s order patterns.

Use Checkout CAPTCHA and attempt limits for automated card testing.

Use pre-payment protection when suspicious transactions need to be stopped before reaching the payment stage.

Use allow lists only for genuinely trusted customers or integrations.

Review high-risk and high-value orders before fulfillment.

Use external fraud intelligence such as MaxMind when the store needs additional transaction signals.

Keep WooCommerce, payment extensions, Anti-Fraud for WooCommerce, and WordPress up to date.

After configuration, place test orders through every important checkout path used by the store—including its primary payment methods, classic or Block Checkout, and any API or marketplace integrations—to confirm that legitimate orders can complete normally and that the expected fraud information is recorded.

## Getting help

[↑ Back to top](#doc-title)

If an issue cannot be resolved using the settings and troubleshooting steps above, contact support through the WooCommerce.com support channel for Anti-Fraud for WooCommerce.

Include the system status report, relevant logs, example order IDs, and a concise description of the expected and actual behavior.

For problems involving a third-party service such as MaxMind, Trust Swiftly, FraudLabs Pro, an AI provider, PayPal, or another payment gateway, support may also require information from that service.

## Experiencing a Card Attack or Fake Orders?

[↑ Back to top](#doc-title)

The OPMC Anti-Fraud plugin has advanced technology to prevent card attacks at the checkout. Including prevalent issues relating to the Paypal payment gateway.

It takes just 10 minutes to set up. **However, without the initial setup it will not be effective against card attacks.**

We’ve made it as easy as possible to get quick protection for card attacks.

### Short video explainers

[↑ Back to top](#doc-title)

There are **two videos** which outline the settings that need to be applied. These both cover the same material, but the first one is just a summary designed for experienced users, web developers, designers & IT professionals.

The first is a sub 1 minute video here:

You can get a more detailed run through here which is about 11 minutes. This is more useful if you are a store owner and explains the settings in more detail:

###

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2020/02/recaptcha.jpg)

### reCaptcha Integration

	
			by [I13 Web Solution](https://woocommerce.com/vendor/i13-web-solution)

Protect your eCommerce store from malicious and automated attacks by using reCaptcha/Cloudflare...

---

