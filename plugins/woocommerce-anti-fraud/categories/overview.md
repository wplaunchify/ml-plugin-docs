# Overview

*Category from WooCommerce Anti Fraud documentation*

---

## Anti-Fraud for WooCommerce

**Source:** [https://woocommerce.com/document/woocommerce-anti-fraud/](https://woocommerce.com/document/woocommerce-anti-fraud/)

# Anti-Fraud for WooCommerce

			Anti-Fraud for WooCommerce evaluates orders against configurable fraud rules and assigns each checked order a risk score. Use the score and related controls to review suspicious orders, reduce card testing, manage repeat abuse, and decide when an order should be held, canceled, or stopped before payment.

This guide is organized for setup and support. Start with the baseline protection settings, then configure the checkout paths, payment methods, and integrations your store actually uses. The final sections cover common support issues and the information to collect before contacting support.

Anti-Fraud works best as a layered system. Use several moderate protections together, test real checkout paths, and tune individual rules from actual order data. Avoid making several aggressive changes at once, because that can make false positives harder to diagnose.

## Get Started

[↑ Back to top](#doc-title)

After installing and activating Anti-Fraud for WooCommerce, go to **WooCommerce > Settings > Anti-Fraud**.

The current settings are grouped by task:

- **Your store protection** — overview, setup shortcuts, protection status, and items needing attention.
- **Essential protection** — risk thresholds, automatic order actions, pre-payment checking, and fraud rules.
- **Card testing protection** — Checkout CAPTCHA, order-attempt limits, failed-payment limits, Add payment method protection, and additional velocity controls.
- **Order review & alerts** — failed-order cleanup, marketplace/import handling, and administrator alerts.
- **Trusted & blocked customers** — allow lists and block lists.
- **Extra protection tools** — Checkout CAPTCHA, PayPal controls, MaxMind services, and Trust Swiftly.
- **Advanced controls** — optional AI fraud signals and chargeback-related services.
- **Help** — support and troubleshooting links.

The exact options shown can vary according to the store’s payment methods, integrations, and saved settings.

![Anti-Fraud for WooCommerce settings overview showing navigation, setup shortcuts, protection status, status key, and attention items.](https://woocommerce.com/wp-content/uploads/2014/09/woocommerce_anti_fraud_settings_dashboard_WOO_OPTIMIZED.png?w=980)

### Recommended first setup

[↑ Back to top](#doc-title)

1. Choose a starting protection preset if the setup prompt appears.
2. Open **Essential protection > Core protection** and review the Medium and High risk thresholds.
3. Review the automatic hold and cancel scores before enabling aggressive order-status changes.
4. Decide whether to enable the **Run check before payment** option.
5. Open **Card testing protection** and confirm the order-attempt and failed-payment limits.
6. Configure **Checkout CAPTCHA** if the store needs bot or card-testing protection.
7. Configure PayPal-specific protection if PayPal or a related gateway is active.
8. Review trusted customers, block lists, API/imported orders, and any optional integrations that apply to the store.
9. Place test orders through every important checkout and payment path.
10. Open the resulting WooCommerce orders and confirm the expected risk score, matched rules, and order status.

## Protection Presets Are a Starting Point

[↑ Back to top](#doc-title)

Anti-Fraud includes Low, Medium, and High protection presets. A preset applies a starting group of risk thresholds, rule weights, order-attempt limits, and failed-payment limits. It does not configure every protection available in the extension.

| Preset | Medium / High threshold | Hold / Cancel score | Order-attempt limit | Failed-payment limit | Counting mode |
| --- | --- | --- | --- | --- | --- |
| Low | 40 / 85 | 85 / 95 | 8 orders / 24 hours | 5 | Orders only |
| Medium | 25 / 75 | 70 / 90 | 5 orders / 24 hours | 3 | Orders only |
| High | 20 / 60 | 55 / 85 | 3 orders / 24 hours | 2 | Advanced |

The preset also changes a number of individual fraud-rule weights. Two stores using the same Medium and High thresholds can therefore score the same order differently if their enabled rules, customer history, or integrations differ.

A preset is not a plug-and-play configuration. It does not configure CAPTCHA credentials, enable the pre-payment fraud check, identify trusted customers, tune imported/API order handling, or test the store’s payment methods. After applying a preset, continue through Core protection, Fraud rules, Card testing protection, Checkout CAPTCHA, and any payment or integration settings that apply to the store.

## Configure Core Protection

[↑ Back to top](#doc-title)

Go to **Essential protection > Core protection**.

### Risk thresholds

[↑ Back to top](#doc-title)

Anti-Fraud scores checked orders from 0 to 100. Lower scores indicate fewer detected risk signals; higher scores indicate more or stronger risk signals.

Configure:

- **Medium risk starts at** — scores at or above this value are treated as Medium risk unless they reach the High threshold.
- **High risk starts at** — scores at or above this value are treated as High risk.

Do not lower these thresholds simply because the store is under card-testing attack. Card testing is usually better handled first with Checkout CAPTCHA, order-attempt limits, failed-payment limits, and the dedicated card-testing controls.

### Pre-payment fraud check

[↑ Back to top](#doc-title)

Enable **Run check before payment** when the store needs to stop a High-risk checkout before payment is completed.

When enabled, Anti-Fraud calculates the checkout risk before payment. A checkout that reaches the configured High Risk threshold can be blocked using the message configured under **Message for blocked checkouts**.

In v8.0.7, pre-payment checking is intended to reject orders only when they reach the configured High Risk threshold. If a checkout below that threshold is being rejected, collect the order details and logs before changing thresholds.

### Automatic order status

[↑ Back to top](#doc-title)

Anti-Fraud can automatically place an order on hold or cancel it based on the calculated score.

Before enabling aggressive automatic actions:

- Review real order scores first.
- Confirm the Hold score is lower than the Cancel score.
- Test each important payment method.
- Confirm legitimate high-value, international, or business orders are not being caught unexpectedly.

![Anti-Fraud for WooCommerce core protection settings showing risk thresholds, pre-payment fraud checking, and automatic order status controls.  ](https://woocommerce.com/wp-content/uploads/2014/09/woocommerce_anti_fraud_core_protection_WOO_OPTIMIZED.png?w=980)

### Block unknown origin

[↑ Back to top](#doc-title)

The **Block unknown origin** setting is intended to reject checkout or API requests that cannot prove a trusted storefront or recognized order source.

WooCommerce Order Attribution showing Origin: Unknown is not the same thing as Anti-Fraud’s Block unknown origin protection. Missing marketing attribution or UTM data alone does not mean a normal storefront order should be blocked.

Stores using headless checkout, ERP integrations, custom REST API clients, marketplaces, or external order-management tools should test those order flows before enabling restrictive origin handling.

## Configure Fraud Rules

[↑ Back to top](#doc-title)

Go to **Essential protection > Fraud rules**.

Each enabled rule contributes a configurable weight when it matches an order. Anti-Fraud can evaluate signals such as:

- First-time customers or first processing orders.
- International orders.
- High-value orders.
- Orders that are unusually large compared with prior orders.
- Billing and shipping address differences.
- Billing phone and country consistency.
- IP and geolocation information.
- Proxy usage.
- Suspicious email characteristics.
- Countries the store has identified as higher risk.
- Multiple or rapid orders associated with the same buyer signals.
- Optional MaxMind signals when the related service is configured.

Use the order’s matched rules to determine which weight should be changed. If one legitimate customer is repeatedly triggering a rule, a narrow allow-list exception may be safer than weakening the rule for every customer.

Do not assign high weights to every rule. A score becomes useful only when the weights reflect the store’s actual fraud patterns. Several moderate signals are usually easier to troubleshoot than one overly aggressive rule.

![nti-Fraud for WooCommerce fraud rules showing configurable risk checks and fraud-score weights.](https://woocommerce.com/wp-content/uploads/2014/09/ChatGPT-Image-Oct-23-2026-04_15_51-PM.png?w=980)

## Protect Against Card Testing and Repeated Payment Attempts

[↑ Back to top](#doc-title)

Card testing commonly appears as repeated checkout attempts, rapid failed payments, large numbers of failed orders, or attackers changing email addresses, IP addresses, cards, and other checkout details between attempts.

If the store is under an active card attack, start with Checkout CAPTCHA, Order attempt limits, and Cap failed payments per order. Do not begin by lowering every fraud-score threshold. After the attack is controlled, review the orders and rules that actually matched before changing normal scoring.

Go to **Card testing protection**.

### Order attempt limits

[↑ Back to top](#doc-title)

Enable **Limit orders per buyer** to cap how many orders a buyer can place inside the configured rolling window.

Choose the counting mode that fits the problem:

- **WooCommerce orders only** — counts placed orders using buyer signals such as IP address, email, and phone number. Start here for most stores.
- **Advanced** — combines order and failed-payment signals and can use cart fingerprint and session information when attackers rotate details. Broader attack signals are used only while attack conditions are detected.

The store-wide failed-payment burst setting is an attack signal. It does not act as a blanket store-wide checkout block by itself.

### Failed payment handling

[↑ Back to top](#doc-title)

Enable **Cap failed payments per order** to stop repeated declines against the same order and recent failed orders associated with the same buyer signals.

Enable **Progressive checkout delay** to add increasing wait time after failed payments. This slows automated retries without treating a single failed payment as an attack.

In v8.0.7, failed card attempts are counted after gateway processing so a request is not treated as a failed payment before the gateway has actually processed it.

### Add payment method protection

[↑ Back to top](#doc-title)

v8.0.7 adds protection for abuse of **My Account > Add payment method**, including Braintree-related verification flows.

This protection is separate from checkout. It can:

- Limit Add payment method requests for a logged-in customer.
- Set a maximum number of attempts and a counting window.
- Temporarily lock additional attempts after the limit is reached.
- Apply a longer lock when the same customer repeatedly reaches the limit.
- Require a minimum account age.
- Require a previous processing or completed order before adding a payment method.
- Pause Add payment method for all customers while checkout remains available.
- Automatically pause Add payment method after enough blocked attempts occur across the store.

Use at least two allowed attempts so a single typo does not immediately block a legitimate customer.

Checkout, Place order, saved cards, and subscription renewals are not changed by the Add payment method limiter itself.

![Anti-Fraud for WooCommerce card testing protection showing order limits, failed-payment controls, and Add payment method protection.](https://woocommerce.com/wp-content/uploads/2014/09/ChatGPT-Image-Oct-23-2026-04_28_11-PM.png?w=980)

## Configure Checkout CAPTCHA

[↑ Back to top](#doc-title)

Go to **Extra protection tools > Checkout CAPTCHA**.

Anti-Fraud supports:

- **Cloudflare Turnstile**.
- **Google reCAPTCHA v2**.

Google reCAPTCHA v3 is not a supported Checkout CAPTCHA option in Anti-Fraud. It uses a background score rather than the challenge-response flow required by this integration.

Enter the site key and secret key for the selected provider, then test checkout.

For Classic Checkout, the CAPTCHA position can be adjusted. Checkout Block uses the extension’s Blocks integration.

If another plugin, theme, CDN, or security service also adds Turnstile or reCAPTCHA to WooCommerce checkout, do not assume both should remain active. Multiple CAPTCHA integrations can cause duplicate widgets, missing tokens, or failed verification. v8.0.7 detects common Turnstile conflicts, but checkout should still be tested after configuration.

![ Anti-Fraud for WooCommerce Checkout CAPTCHA settings with Cloudflare Turnstile or Google reCAPTCHA v2 selected.](https://woocommerce.com/wp-content/uploads/2014/09/ChatGPT-Image-Oct-23-2026-04_41_35-PM.png?w=980)

## Protect PayPal Checkout Paths

[↑ Back to top](#doc-title)

When a supported PayPal-related payment extension is detected, additional settings are available under **Extra protection tools > PayPal**.

### PayPal checkout hardening

[↑ Back to top](#doc-title)

When Checkout CAPTCHA is enabled, PayPal checkout hardening helps apply the same protection to PayPal card flows. In v8.0.7, this hardening supports both Google reCAPTCHA v2 and Cloudflare Turnstile.

PayPal attempt counting is designed to count genuine payment attempts rather than CAPTCHA validation, PayPal SDK setup requests, or normal 3-D Secure/payment resubmission behavior.

### PayPal payment attempt limits

[↑ Back to top](#doc-title)

PayPal-specific controls can limit excessive payment attempts using a rolling window and an additional hourly cap.

When enabled, use explicit numeric values for the time window and attempt limits. If a customer receives a PayPal attempt error on what appears to be a first checkout, collect the exact error message, time, order information, and payment method before increasing limits.

### PayPal account verification

[↑ Back to top](#doc-title)

For customers paying with a PayPal account, Anti-Fraud can optionally require verification of the PayPal email address.

Depending on configuration, the store can:

- Require PayPal email verification.
- Hold downloadable products until verification succeeds.
- Send reminder emails for orders awaiting verification.
- Automatically cancel orders that remain unverified.
- Maintain trusted PayPal email addresses that skip additional verification.

PayPal account verification and PayPal card-testing protection solve different problems. Configure each only when the store needs it.

## Clean Up Failed Orders and Control Notification Noise

[↑ Back to top](#doc-title)

During a card attack, large numbers of failed orders and payment notifications can make administration difficult.

Go to **Order review & alerts > Failed orders & cleanup**.

Use these tools to review failed orders from the affected period and reduce failed-payment email noise while the incident is being handled.

Review affected orders before bulk deletion. Deleting a WooCommerce order does not remove data that may already have been sent to a payment provider, accounting platform, ERP, fulfillment system, or another external integration.

## Manage Trusted and Blocked Customers

[↑ Back to top](#doc-title)

### Allow list

[↑ Back to top](#doc-title)

Go to **Trusted & blocked customers > Allow list**.

Use allow-list settings for genuinely trusted customers, internal users, business customers, known order sources, or integrations that repeatedly trigger a known false positive.

Available controls can include trusted payment methods, email addresses, IP addresses, phone numbers, user roles, names, addresses, countries, cities, states or regions, postal codes, and selected REST API keys.

Keep allow-list rules narrow. A broad exception can bypass useful fraud checks for more customers than intended.

### Block list

[↑ Back to top](#doc-title)

Go to **Trusted & blocked customers > Block list**.

Use the block list to stop repeat abuse from known identifiers such as email addresses, IP addresses, phone numbers, countries, names, address keywords, cities, states or regions, and postal codes.

Email addresses and IP addresses can also be added automatically when configured high-risk behavior is detected.

![Anti-Fraud for WooCommerce allow-list and block-list settings for trusted and blocked customer information.](https://woocommerce.com/wp-content/uploads/2014/09/ChatGPT-Image-Oct-23-2026-04_48_13-PM.png?w=980)

## Handle Marketplace, Imported, and REST API Orders

[↑ Back to top](#doc-title)

Imported and API-created orders often contain different browser, IP, and checkout information from normal storefront orders. Treat them according to their actual source rather than assuming missing storefront data is fraudulent.

### Marketplace orders

[↑ Back to top](#doc-title)

Go to **Order review & alerts > Marketplace orders**.

Anti-Fraud can recognize supported marketplace imports such as eBay, Amazon, and Etsy and apply source-aware handling.

v8.0.7 improves recognition of legitimate third-party/API order flows and fixes imported Etsy orders being incorrectly treated as Unknown Origin during scheduled fraud checks.

### REST API orders

[↑ Back to top](#doc-title)

Under **Essential protection > Core protection > REST API orders**, the store can configure fraud scoring for API-created orders, hourly limits, and trusted REST API keys.

If the store uses an ERP, headless storefront, marketplace connector, order-routing service, or other API integration, test that workflow before applying restrictive limits or origin blocking.

v8.0.7 improves handling of legitimate third-party and API order flows. However, custom integrations can still create orders with unusual metadata. If only imported/API orders are being blocked, troubleshoot the order source and trusted API handling before changing normal storefront fraud thresholds.

![Anti-Fraud for WooCommerce settings for marketplace imports and REST API order protection.](https://woocommerce.com/wp-content/uploads/2014/09/ChatGPT-Image-Oct-23-2026-05_05_12-PM.png?w=980)

## Review Fraud Information on an Order

[↑ Back to top](#doc-title)

Open a WooCommerce order to review its Anti-Fraud assessment.

Depending on the order and enabled integrations, the order screen can show:

- The overall fraud risk score.
- Risk advice.
- Rules that contributed to the score.
- Rules that were skipped.
- Additional information from enabled integrations.
- Controls for adding suspicious information to the block list.

If an order has no score, use the available **Calculate fraud risk** or **Fraud Check** action and review queue status if the score does not appear.

![WooCommerce order showing Anti-Fraud risk score, matched fraud rules, and order-risk details.](https://woocommerce.com/wp-content/uploads/2014/09/woocommerce_order_fraud_assessment_Oct23_2026_WOO_OPTIMIZED.png?w=980)

## Use the Anti-Fraud Dashboard and Monitor Processing

[↑ Back to top](#doc-title)

When enabled, the Anti-Fraud dashboard provides a high-level view of recent risk activity and protection status.

The dashboard can include:

- Protection status and setup attention items.
- Recent risk activity and order outcomes.
- Recent blocked identifiers.
- PayPal verification activity where applicable.
- Fraud-check queue health.

The default home-insights range is 30 days. Shorter ranges load faster on stores with large order histories. Avoid using All orders as the normal dashboard view on a large store.

### Queue health

[↑ Back to top](#doc-title)

Some fraud checks are processed through WordPress scheduled tasks. If a queue warning appears:

1. Review the Anti-Fraud dashboard queue information.
2. Confirm WordPress scheduled events are running.
3. Use any available recovery or repair action.
4. Review WooCommerce and Anti-Fraud logs.
5. If orders remain unscored, collect the system status and affected order IDs for support.

A queue warning does not necessarily mean every fraud check has stopped. Review pending checks and recent processing information before changing fraud rules.

### Backfill past orders

[↑ Back to top](#doc-title)

Use **Backfill scores for past orders** when historical orders still need assessment. Start with a smaller date range on stores with a large order history.

Backfill affects historical assessment only. It does not enable or disable normal fraud checking for new orders.

![Anti-Fraud for WooCommerce dashboard showing a 30-day risk overview, recent orders, protection status, and processing health.](https://woocommerce.com/wp-content/uploads/2014/09/woocommerce_anti_fraud_dashboard_v807_under1MB.png?w=980)

## Configure Administrator Alerts

[↑ Back to top](#doc-title)

Go to **Order review & alerts > Email alerts**.

Configure the recipient and score that should trigger an alert. Use notification rate limiting during attack conditions so the administrator inbox remains usable.

Anti-Fraud sends messages through the WordPress email system. If fraud alerts are missing, test the site’s general email delivery before assuming the fraud trigger failed.

## Optional Advanced Protection Tools

[↑ Back to top](#doc-title)

These services can add more information or verification, but they should be treated as optional layers rather than prerequisites for basic Anti-Fraud operation.

### MaxMind minFraud

[↑ Back to top](#doc-title)

Anti-Fraud can use compatible MaxMind minFraud services for additional transaction intelligence.

Depending on the MaxMind service associated with the account, available options can include:

- **Score** for transaction risk scoring.
- **Insights** for additional fraud intelligence.
- **Factors** for more detailed risk factors.
- **Advanced Signals** for supported signals such as VPN, proxy, Tor, hosting/datacenter use, and IP-to-billing distance.

Only enable service levels and signals supported by the store’s MaxMind account. MaxMind is an external service and may require a separate paid plan.

### Trust Swiftly

[↑ Back to top](#doc-title)

Trust Swiftly can provide an additional identity-verification step for selected high-risk customers. Configure the account details, verification template, and the score at which verification should be requested.

### AI fraud signals

[↑ Back to top](#doc-title)

AI fraud analysis is an optional additional signal. Do not use it as the sole reason to accept or reject an order.

AI services are third-party services. Usage, charges, data handling, availability, and provider terms are separate from the Anti-Fraud for WooCommerce subscription.

### SMS verification

[↑ Back to top](#doc-title)

Anti-Fraud can use FraudLabs Pro to send a one-time verification code to a customer’s phone.

SMS verification applies to Classic Checkout in the current implementation. Do not rely on it as the verification layer for Checkout Block unless the plugin settings explicitly indicate support for the store’s checkout configuration.

## Troubleshooting Common Support Issues

[↑ Back to top](#doc-title)

When troubleshooting, first identify which layer is producing the behavior:

- Fraud scoring.
- Card-testing/velocity protection.
- Checkout CAPTCHA.
- PayPal or another payment gateway.
- An API/imported-order rule.
- A third-party fraud service.
- Scheduled fraud-check processing.

Changing unrelated fraud weights can hide the real cause.

### A legitimate customer receives “too many order attempts”

[↑ Back to top](#doc-title)

Check which limiter produced the message before changing settings. Review:

- The Order attempt limit and rolling window.
- Whether counting is set to Orders only or Advanced.
- The failed-payment limit.
- PayPal-specific attempt limits, if PayPal is involved.
- Any site-wide checkout rate limit.

In Advanced mode, buyer signals can come from orders and failed payments, and cart/session information can help identify rotating attackers. Store-wide failed-payment volume by itself does not block an individual checkout.

Do not raise every limit at once. Identify the limiter that matched first.

### A customer sees a PayPal attempt error on the first checkout

[↑ Back to top](#doc-title)

First confirm the site is running the current extension version. v8.0.7 includes PayPal hardening improvements designed to distinguish genuine payment attempts from CAPTCHA, PayPal SDK setup, and related request activity.

Then collect:

- The exact customer-facing error.
- The approximate time and store timezone.
- The payment method or PayPal path used.
- The related WooCommerce order ID, if one exists.
- The current PayPal rolling-window and hourly limits.

Use explicit numeric values for enabled PayPal attempt limits.

### Checkout CAPTCHA appears twice or fails validation

[↑ Back to top](#doc-title)

Look for another Turnstile/reCAPTCHA integration in a plugin, theme, security service, or optimization layer.

If another integration is already protecting WooCommerce checkout, disable checkout CAPTCHA in one of the two systems and retest. Clear relevant caches after changing CAPTCHA scripts.

### Checkout CAPTCHA does not appear

[↑ Back to top](#doc-title)

- Confirm Checkout CAPTCHA is enabled.
- Confirm the correct provider is selected.
- Confirm the site and secret keys belong to the same provider configuration.
- For Classic Checkout, review the configured CAPTCHA position.
- For Checkout Block, confirm the store is using a supported WooCommerce Blocks checkout configuration.
- Test for theme, cache, optimization, or JavaScript conflicts.

### PayPal is still receiving repeated attempts

[↑ Back to top](#doc-title)

Confirm Checkout CAPTCHA is active, PayPal checkout hardening is enabled where available, and the PayPal rolling-window/hourly attempt limits are appropriate.

Also review the general Card testing protection settings. PayPal-specific protection is not a replacement for the normal order and failed-payment limits.

### Card testing is happening through My Account > Add payment method

[↑ Back to top](#doc-title)

Use **Add payment method limits** under Card testing protection. This path is separate from normal checkout and may be targeted even when checkout itself is protected.

If the attack is severe, temporarily pause Add payment method or enable the automatic pause option. Checkout payments remain available.

### An order has no risk score

[↑ Back to top](#doc-title)

Open the order and use the available Calculate fraud risk or Fraud Check action.

If multiple orders remain unscored:

- Review the dashboard queue status.
- Confirm WordPress scheduled events are running.
- Review Anti-Fraud logs.
- Check whether the affected orders come from an API/import source that follows a different workflow.

### A legitimate order receives a high score

[↑ Back to top](#doc-title)

Open the order and review the matched rules. Change the specific rule or weight that caused the unexpected result rather than immediately raising all thresholds.

Common legitimate patterns that can raise risk include gifts with different billing/shipping addresses, travelers using VPNs, business buyers placing repeated orders, and unusual high-value purchases.

Use a narrow allow-list entry only when the customer or identifier is genuinely trusted.

### A fraudulent order receives a low score

[↑ Back to top](#doc-title)

Confirm the relevant fraud rules are enabled and weighted strongly enough to affect the overall score.

Consider additional layers such as Checkout CAPTCHA, card-testing limits, a targeted block list, MaxMind, or another appropriate signal.

No fraud-scoring system can identify every fraudulent transaction.

### Apple Pay, Google Pay, or another wallet behaves differently from standard card checkout

[↑ Back to top](#doc-title)

Test tokenized wallet flows separately from normal card checkout. Wallets and express-payment methods can use different checkout requests and payment flows.

Collect the wallet/payment method, checkout type, order ID, exact error, and gateway log when troubleshooting. Do not assume a successful standard card test covers every wallet path.

### Imported or API-created orders are being blocked

[↑ Back to top](#doc-title)

Check Marketplace orders, REST API handling, trusted API keys, and Block unknown origin before changing normal fraud scoring.

v8.0.7 improves legitimate third-party/API flow handling, including imported Etsy orders, but custom integrations should still be tested individually.

### The payment gateway says an order is high risk but Anti-Fraud does not

[↑ Back to top](#doc-title)

Payment gateways can have their own fraud rules, 3-D Secure decisions, risk systems, or decline logic. A gateway decision and an Anti-Fraud score are separate results.

When investigating, compare:

- The gateway response/log.
- The Anti-Fraud order assessment.
- The payment method.
- The order time and order ID.

Anti-Fraud does not override a gateway’s own decline or risk decision.

### Administrator alert emails do not arrive

[↑ Back to top](#doc-title)

Confirm the configured recipient and trigger score, then test the site’s normal WordPress email delivery and spam filtering.

### Failed orders or emails are flooding the store during an attack

[↑ Back to top](#doc-title)

Use Failed orders & cleanup to review the affected period and reduce failed-payment notification noise. Keep the card-testing controls active while cleaning up; deleting failed orders alone does not stop the attack.

## Testing Checklist After Configuration Changes

[↑ Back to top](#doc-title)

After changing Anti-Fraud settings, test the paths the store actually uses:

- A normal low-risk card checkout.
- PayPal or Braintree, if enabled.
- Apple Pay, Google Pay, or other wallet/express methods, if enabled.
- Classic Checkout and Checkout Block, where applicable.
- Order Pay/pay-for-order links, if customers use them.
- My Account > Add payment method, if saved payment methods are enabled.
- Subscription renewal or saved-card flows that are important to the store.
- Marketplace, ERP, headless, or REST API order creation.
- Known trusted customers or integrations that use allow-list exceptions.

After testing, open the resulting WooCommerce orders and confirm the risk score, matched rules, order status, and payment result are what you expected. A successful checkout alone does not confirm that the fraud configuration behaved as intended.

## Enable Logging for Troubleshooting

[↑ Back to top](#doc-title)

Anti-Fraud includes detailed logging options for support investigations.

Enable debug logging only while reproducing an issue, then collect the relevant logs and disable verbose logging again when troubleshooting is complete.

Do not change unrelated protection settings while collecting logs unless the test specifically requires it.

## What to Include When Contacting Support

[↑ Back to top](#doc-title)

If an issue cannot be resolved using the steps above, contact support through the WooCommerce.com support channel for Anti-Fraud for WooCommerce.

Include:

- A concise description of the expected behavior and what actually happened.
- Example WooCommerce order IDs.
- The approximate time of the event and store timezone.
- The exact customer-facing error message, if one appeared.
- The payment method and checkout type involved.
- Relevant Anti-Fraud and WooCommerce logs.
- The WooCommerce system status report.
- Any Anti-Fraud queue-health warning shown on the dashboard.
- Whether the order came from storefront checkout, Order Pay, a wallet, My Account > Add payment method, a marketplace, or an API/integration.

Do not send passwords, complete payment-card details, CVV values, payment tokens, CAPTCHA secret keys, MaxMind credentials, AI API keys, Trust Swiftly credentials, FraudLabs Pro credentials, or other private API secrets in a support ticket.

For issues involving a third-party service or payment gateway, support may also need logs or diagnostic information from that service.

## Best Practices

[↑ Back to top](#doc-title)

- Use several moderate protections instead of one extremely strict rule.
- Use Checkout CAPTCHA and attempt limits for automated card testing.
- Use pre-payment protection when High-risk transactions must be stopped before payment.
- Review High-risk and high-value orders before fulfillment.
- Use allow lists only for genuinely trusted customers or integrations.
- Use targeted block-list entries for known repeat abuse.
- Rate-limit administrator alerts during attack conditions.
- Enable optional third-party services only when they add a signal the store actually needs.
- Keep WordPress, WooCommerce, Anti-Fraud for WooCommerce, and payment extensions current.
- Retest important checkout paths after changing fraud settings or updating payment extensions.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2020/02/recaptcha.jpg)

### reCaptcha Integration

	
			by [I13 Web Solution](https://woocommerce.com/vendor/i13-web-solution/)

Protect your eCommerce store from malicious and automated attacks by using reCaptcha/Cloudflare...
				![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce/)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or...

---

