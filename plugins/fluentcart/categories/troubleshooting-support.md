# Troubleshooting Support

*Category from FluentCart documentation*

---

## Troubleshooting & Support ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/](https://docs.fluentcart.com/guide/troubleshooting-support/)

# Troubleshooting & Support ​

The **Troubleshooting & Support** section in FluentCart is designed to help you resolve common issues, understand system logs, and find assistance when you encounter challenges. Our goal is to ensure you have a smooth and efficient experience running your online store.

This section provides resources and guides for:

- **Understanding Logs:** Learn how to interpret FluentCart's system logs to diagnose issues and track events.
- **Common Issues & FAQs:** Find solutions to frequently asked questions and common problems encountered by FluentCart users.
- **How to Get Support:** Information on how to reach out to the WPManageNinja support team for personalized assistance.

By utilizing these resources, you can quickly address many operational questions and keep your FluentCart store running optimally.

---

## Caching and Optimization Exclusions ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/caching-exclusions](https://docs.fluentcart.com/guide/troubleshooting-support/caching-exclusions)

# Caching and Optimization Exclusions ​

You don't need to disable caching across your whole website to use FluentCart. Keep caching on for your static and public pages, and add a few targeted exclusions so each shopper always sees their own cart and can finish checkout without errors.

This guide covers two different kinds of settings, and it helps to keep them apart:

- **Page cache exclusions:** Rules that stop your caching plugin, host, or CDN from saving and reusing a page's HTML. These are set by URL, cookie, or request.
- **Script optimization exclusions:** Rules that stop an optimization tool from minifying, combining, delaying, or deferring specific JavaScript files. These are set by script handle or file name, not by URL.

## Find Your Cart and Checkout Pages ​

Before adding any rules, confirm which pages your store uses. Go to **FluentCart Pro > Settings** and open the **Pages Setup** tab. The **Cart Page** and **Checkout Page** selected there are the pages you'll exclude.

INFO

Use the actual URL of each assigned page. FluentCart creates 
```
/cart/
```

 and 
```
/checkout/
```

 by default, but WordPress may have given your page a different slug (for example 
```
/checkout-2/
```

).
## Page Cache Exclusions ​

Add the following rules in your caching plugin, hosting cache panel, or CDN. Look for options such as "Never cache URLs", "Exclude pages", "Never cache cookies", or "Bypass cache".

### 1. Exclude the Cart and Checkout Pages ​

Add your **Cart Page** and **Checkout Page** URLs to the "never cache" list. Both pages are built for the current shopper: they show that shopper's items, totals, applied coupons, and checkout details.

### 2. Don't Cache Checkout URLs Containing fct_cart_hash ​

Buy-now buttons, modal checkout, and some payment flows send the shopper to a checkout URL that identifies their cart, like this:

text
```
/checkout/?fct_cart_hash=...
```Exclude any URL containing:

text
```
fct_cart_hash
```Also make sure your cache doesn't ignore or strip this query string. FluentCart needs it to load the correct cart.

### 3. Don't Cache Cart Output on Other Pages ​

The cart drawer (the side cart and cart count) appears on every page of your store. Once a shopper adds a product, their cart items are included in the page itself, including product and shop pages. If those pages are served from a shared cache, the side cart and the checkout can disagree.

To keep public pages cached while protecting shoppers who have a cart, bypass the cache when this cookie is present:

text
```
fct_cart_hash
```FluentCart sets this cookie when a visitor adds their first product to the cart. Visitors without a cart still receive cached pages.

### 4. Bypass the Checkout AJAX Request ​

The cart, coupons, shipping options, and checkout summary update in the background through one AJAX request. Make sure requests where:

text
```
action=fluent_cart_checkout_routes
```are never cached. WordPress already marks 
```
admin-ajax.php
```

 responses as not cacheable, so most caching plugins skip them automatically. This rule matters mainly for server or CDN rules that cache everything, including query-string requests.

### 5. Keep Logged-In Users Uncached ​

Most caching tools skip logged-in users by default. Leave that setting on. A logged-in customer's cart and saved checkout addresses are tied to their account, so their pages should not come from a shared cache.

## Script Optimization Exclusions ​

These rules don't control page caching. They tell your optimization tool which FluentCart scripts to leave alone when it minifies, combines, delays, or defers JavaScript.

Most FluentCart scripts load as JavaScript modules (
```
type="module"
```

), and several of them load shared files at runtime. Combining them with other scripts or changing how they load can stop the cart or checkout from working.

Some tools ask for the **script handle** and others for the **file name**. The HTML element ID is the handle plus 
```
-js
```

 (for example, 
```
fct-checkout
```

 prints as 
```
id="fct-checkout-js"
```

).

### Cart and Checkout Scripts ​

Exclude these on every store, since they run the cart and checkout.

| Handle | File | Loads on |
| --- | --- | --- |
| fluent-cart-app | FluentCartApp.js | Every front-end page (cart drawer and add to cart) |
| fluent-cart-fluentcart-toastify-notify-style | toastify-js-1.12.0.js | Every front-end page (cart notifications) |
| fct-checkout | FluentCartCheckout.js | Checkout page, when the cart has items |
| fct-orderbump | orderbump.js | Checkout page, when the cart has items |

### Product and Shop Page Scripts ​

Exclude these if your optimization tool also processes product and shop pages. They handle variation selection, add-to-cart buttons, image zoom, and shop filters.

| Handle | File | Loads on |
| --- | --- | --- |
| fluent-cart-single-product-page | xzoom.js | Single product pages (image zoom) |
| fluent-cart-single-product-page_1 | SingleProduct.js | Single product pages (variations and add to cart) |
| fluent-cart-single-product-page_2 | Reviews2.js | Single product pages (reviews) |
| fluent-cart-product-card-js | product-card2.js | Pages that show product cards |
| fluent-cart-fluentcart-product-page-js | ShopApp.js | Shop and product listing pages |
| fluent-cart-fluentcart-product-filter-slider | nouislider-15.7.1.min.js | Shop pages with the price filter |
| fluentcart-single-product-js | SingleProduct.js | Shop and product listing pages |
| fluentcart-zoom-js | xzoom.js | Shop and product listing pages |

### Other Scripts ​

These only apply in specific situations:

- **fluentcart-customer-js:** Loads only on the Customer Profile (account) page. Exclude it if that page misbehaves after optimization. It doesn't affect the cart or checkout.
- **cloudflare-turnstile:** Loads on the checkout only when the [Cloudflare Turnstile](/guide/integrations/cloudflare-turnstile-integration) integration is active and a site key is saved. If you don't use Turnstile, you can skip it.
- **Payment gateway scripts:** Scripts for payment methods such as Stripe load only on the checkout, and only for the methods you've enabled. FluentCart already marks them with 
```
data-no-optimize="1"
```

 and 
```
data-cfasync="false"
```

, which many optimization tools respect automatically. If your tool ignores these attributes and the payment form doesn't appear, exclude your payment provider's scripts in the same way.

## Signs of a Caching Problem ​

The following symptoms usually point to a caching or optimization rule. After changing any rule, clear every cache layer (plugin, server, and CDN) before testing again.

- **The side cart shows the latest item, but checkout shows an older cart:** Check the cart and checkout page exclusions, the 
```
fct_cart_hash
```

 URL rule, and the 
```
fct_cart_hash
```

 cookie bypass.
- **The checkout URL contains fct_cart_hash, but the page looks outdated:** The checkout URL is being cached. Exclude URLs containing 
```
fct_cart_hash
```

.
- **Coupons or the checkout summary behave differently in a private window:** This can mean a cached page or cached request is being served. Review the page cache exclusions above.
- **"Invalid nonce" errors when adding to cart or applying a coupon:** Pages carry a WordPress security token that expires after 12 to 24 hours by default. If your cache keeps pages longer than that, clear the cache or shorten how long pages stay cached.
- **The checkout form, order bump, or payment form doesn't load:** Check your browser console for JavaScript errors, then review the script optimization exclusions.

With these exclusions in place, your store keeps the speed of page caching while every shopper sees their own cart at checkout.

---

## Common Issues & FAQs ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/common-issues-faqs](https://docs.fluentcart.com/guide/troubleshooting-support/common-issues-faqs)

# Common Issues & FAQs ​

This section provides solutions to frequently encountered issues and answers to common questions about FluentCart. If you're experiencing a problem, check this guide first before reaching out for direct support.

## Frequently Asked Questions ​

### Q: Why are my PayPal/Stripe payments not going through in Live mode? ​

**A:**

- **Check API Credentials:** Ensure you have entered your **Live credentials** (API keys/secrets) correctly in **FluentCart Pro > Settings > Payment Settings > Stripe Settings** or **PayPal Settings**.
- **Switch Order Mode to 'Live':** Make sure your FluentCart store's "Order Mode" is set to "Live" (this setting is typically found under **FluentCart Pro > Settings > Store Settings > Store Setup**). Payments will not process in Live mode if your store is still configured for "Test" mode.
- **Configure Webhooks (for Stripe):** For Stripe, it's critical that you have correctly configured the Webhook URL in your Stripe Dashboard as instructed in the [Stripe Settings](/guide/payments-checkout/connecting-payment-gateways/stripe-settings) documentation.

### Q: My digital product downloads are not working, or files are missing. ​

**A:**

- **Verify Downloadable Assets:** In the **Product Edit** screen for your digital product, go to the "Downloadable Asset(s)" section and confirm that the correct files are uploaded or linked.
- **Check Storage Settings:** Ensure your [Storage Settings](/guide/settings-configuration/storage-settings) (Local or S3) are correctly configured and accessible. If using S3, verify your bucket credentials and permissions.
- **File Permissions:** On your server (for local storage), ensure the directories containing your digital files have the correct read/write permissions.

### Q: A customer can't access their license key or software updates. ​

**A:**

- **Check Order Status:** Ensure the customer's order for the licensed product is marked as "Completed" and fully paid.
- **Verify License Status:** On the [License Details screen](/guide/product-types-creation/creating-digital-products-with-licenses#_7-product-specific-license-settings) for that customer's license, ensure its status is "Active" and the "Activation Limit" has not been exceeded.
- **License Key Activation:** Guide the customer to activate their license key on their site if it's for a WordPress plugin, as outlined in the plugin's instructions.
- **FluentCart License Activation:** Ensure *your* FluentCart plugin license is active in [FluentCart Pro > Settings > Licensing](/guide/settings-configuration/licensing-settings) to receive updates.

## General Troubleshooting Tips ​

- **Check System Status:** Look for a "System Status" or "Health Check" tool within FluentCart (if available) or WordPress that can provide diagnostic information.
- **Deactivate Conflicts:** Temporarily deactivate other plugins one by one to check for conflicts that might be causing unexpected behavior.
- **Review Logs:** Utilize the [Understanding Logs](/guide/troubleshooting-support/understanding-logs) guide to check for any related "Warning" or "Failed" entries.

---

## How to Get Support ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/how-to-get-support](https://docs.fluentcart.com/guide/troubleshooting-support/how-to-get-support)

# How to Get Support ​

If you've reviewed the [Docs & FAQs](/guide/troubleshooting-support/common-issues-faqs) guides and still encountering a problem with FluentCart, our dedicated support team is here to help.

## How to Contact Support ​

To ensure you receive the quickest and most effective assistance, please follow these guidelines when contacting us:

1. **Visit the FluentCart Support Portal:** Go to the official FluentCart website. This is the primary channel for submitting support tickets.

- [FluentCart Account](https://fluentcart.com/account/)
2. **Submit a Support Ticket:**

- Log in to your FlunetCart account.
- Navigate to the "Support Tickets" section.
- Click on "Create Ticket."
3. **Provide Detailed Information:** When submitting your ticket, please include as much detail as possible. This helps our team understand your issue quickly and provide a precise solution. Include:

- **A Clear Description of the Problem:** Explain what you are trying to achieve and what is happening instead.
- **Steps to Reproduce:** List the exact steps you take that lead to the issue.
- **Screenshots or Screen Recordings:** Visual aids are incredibly helpful for diagnosing problems.
- **Error Messages:** If you see any error messages on your screen or in your WordPress debug log, copy and paste them.
- **Relevant Log Entries:** Check your FluentCart [Logs](/guide/troubleshooting-support/understanding-logs) screen for any "Warning" or "Failed" entries related to the issue and include them.
- **Your WordPress Version.**
- **Your FluentCart Plugin Version.** You'll find this at the bottom of any FluentCart admin screen.
- **Any Other Plugins Active on Your Site:** List them, especially if they are related to e-commerce, payments, or forms.
4. **Support Hours:** Our support team operates during business hours, typically Monday to Friday. We strive to respond to all inquiries as quickly as possible.

We are committed to helping you succeed with FluentCart!

---

## Understanding Logs ​

**Source:** [https://docs.fluentcart.com/guide/troubleshooting-support/understanding-logs](https://docs.fluentcart.com/guide/troubleshooting-support/understanding-logs)

# Understanding Logs ​

Think of the **Logs** screen as the diary for your store. It keeps a detailed record of every important event and action that happens, like when an order is paid or a setting is updated. This is an essential tool for keeping an eye on your store's operations and for figuring out what happened if something ever goes wrong.

## Accessing the Logs ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Logs** in the left sidebar.
2. This will open the **Logs** screen, displaying a detailed table of all recorded events.

## Understanding the Logs List Table ​

The Logs list table presents key information for each event entry:

- **ID:** A unique identification number for each log entry.
- **Date & Title:** The date and time when the event occurred, along along with a brief title describing the action.
- **Content:** A detailed description of the event that took place.
- **Status:** The outcome or severity of the action.
- **Module:** The FluentCart module or area from which the action originated.
- **Actions:** For many log entries, particularly those related to orders, a **"View Order"** link is provided. Clicking this link will navigate you directly to the [Order Details screen](/guide/store-management/orders-management/order-details-overview) for that specific transaction.

## Filtering Logs ​

If you are looking for a specific event, you can easily filter the log entries to narrow down your search.

### Filtering by Status Tabs ​

At the top of the logs screen, you will find several tabs to filter by the most common statuses:

- **All:** Displays every log entry.
- **Success:** Shows only successfully completed actions.
- **Warning:** Filters for entries that indicate a minor issue.
- **Error:** Shows only entries that are reporting an error

### Using 'More Views' ​

For more specific filters, click the **More views** dropdown menu. Here you will find these options:

- **Failed:** Shows only actions that resulted in a failure.
- **Info:** Displays informational messages that aren't errors or successes.
- **API Only:** Narrows the list to only show events related to API interactions.

## Using Logs for Troubleshooting ​

- **Diagnosing Errors:** If you encounter unexpected behavior or errors in your store, checking the "Failed" or "Warning" log types can help identify the root cause.
- **Auditing Changes:** The "Success" logs keep a record of all successful actions. This is helpful for audits or seeing who did what and when.
- **Tracking Workflows:** By reviewing the sequence of events in the log, you can understand how certain processes (like order fulfillment or refunds) unfolded.

---

