# Admin Experience

*Category from WooCommerce Stripe Gateway documentation*

---

## Administrator experience with the Stripe extension

**Source:** [https://woocommerce.com/document/stripe/admin-experience/](https://woocommerce.com/document/stripe/admin-experience/)

# Administrator experience with the Stripe extension

			After the Stripe extension is [set up and configured](https://woocommerce.com/document/stripe/setup-and-configuration/), customers will be able to use it to complete purchases on your site.

If you’d like to learn how to handle certain important aspects of managing your orders with the Stripe extension — like issuing refunds and what details are added to your orders — then this is the best place to learn more.

## Handling orders

[↑ Back to top](#doc-title)

The Stripe extension is designed to [add important identifying information](https://woocommerce.com/document/stripe/admin-experience/order-information/) to your orders and [automatically update your order statuses](https://woocommerce.com/document/stripe/admin-experience/order-statuses/) as orders move through your system.

Here are some additional topics that affect how the Stripe extension handles orders:

- [Can I use Stripe Billing to handle recurring payments?](https://woocommerce.com/document/stripe/admin-experience/stripe-billing/)
- [How do I refund orders?](https://woocommerce.com/document/stripe/admin-experience/refunding-orders/)

## Fraud protection

[↑ Back to top](#doc-title)

When using the Stripe extension, you can configure your Stripe account to prevent fraudulent purchases. Stripe calls this product “Radar.”

You can learn more about how to protect your site from fraud using Stripe Radar [here](https://woocommerce.com/document/stripe/admin-experience/preventing-fraud-via-stripe-radar/).

## Accepting payments in-person

[↑ Back to top](#doc-title)

If you’d like to be able to use your Stripe extension to accept payments in-person, you can do so with [a card reader](https://dashboard.stripe.com/terminal/shop/) from Stripe or using Tap to Pay on a compatible Apple or Android device.

Our [in-person payments documentation](https://woocommerce.com/document/stripe/admin-experience/in-person-payments/) covers the full requirements, how to set up up your card reader, collecting payments, and more.

## Settings guide

[↑ Back to top](#doc-title)

As a site administrator, you have access to modify [settings in the Stripe extension](https://woocommerce.com/document/stripe/setup-and-configuration/settings-guide/) that can impact how you accept payments and how your customers experience purchases on your site.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Authorize and Capture Guide

**Source:** [https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/)

# Authorize and Capture Guide

			Card transactions occur very quickly, which is what makes them so convenient for day-to-day purchases. In fact, they happen so fast that many people don’t realize that there are actually *two* events taking place: an authorization and a capture.

By default, the Stripe extension will perform the authorization and capture at the same time. However, by enabling the **Issue an authorization on checkout, and capture later** setting, you can prevent the automatic capture of charges. This allows you to manually capture the charge at a later time.

Although most merchants don’t need this feature, it may be helpful in certain cases.

**NOTE:** Our suggestion is that you **leave authorize and capture disabled** unless you have a very specific and well-justified use case in mind. If you do need or want to enable it, please read the entirety of this document beforehand!

## Enabling authorize and capture later

[↑ Back to top](#doc-title)

If you wish to enable this feature, follow these steps:

1. Navigate to **WooCommerce > Settings > Payments > Stripe > Settings**.
2. Scroll down to the *Payments & transactions* section.
3. Check the box labelled **Issue an authorization on checkout, and capture later**.
4. A popup will appear to ask if you’re sure. Click **Enable**.
5. Scroll to the bottom and click **Save changes**.

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2026-03-09-at-15.13.32-UTC@2x.png?strip=all&w=704)

### Payment method support

[↑ Back to top](#doc-title)

Cards (including [express checkout methods](https://woocommerce.com/document/stripe/setup-and-configuration/express-checkouts/)), Affirm, Afterpay, and Klarna are the only payment methods that support manual capture. Other payment methods will be hidden if manual capture is enabled.

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2026-03-09-at-15.11.23-UTC@2x.png?strip=all&w=704)

## Viewing authorized orders

[↑ Back to top](#doc-title)

If an order is placed while manual capture is enabled, the order will be assigned the “On Hold” status, which you can see under **WooCommerce > Orders**.

![](https://woocommerce.com/wp-content/uploads/2022/11/Screenshot-taken-on-2022-11-18-at-18.19.56-UTC@2x.png?strip=all&w=704)

If you open the order itself, you’ll see a note indicating that the payment was authorized:

![](https://woocommerce.com/wp-content/uploads/2024/01/Screenshot-taken-on-2024-11-05-at-18.38.59-UTC.png?w=980)

## Capturing authorized payments

[↑ Back to top](#doc-title)

**NOTE:** You have seven days after the order was placed to capture the charge. After that time, the authorization will automatically expire and you will be unable to capture the charge.

To capture an authorized payment, you can either:

- Change the order status manually under **WooCommerce > Orders** to “Processing” or “Completed” and update the order.
- Capture the funds [via the Stripe dashboard](https://stripe.com/docs/payments/place-a-hold-on-a-payment-method#capture-funds).

## Partial captures

[↑ Back to top](#doc-title)

You may, if you wish, capture a lower amount than the one you originally authorized against the customer’s card. This is called a “partial capture.”

Keep in mind, however, that *you can only capture once per order*. If the capture is a partial one, the difference between the captured amount and the authorized amount is immediately released back to the customer, and you will not be able to capture it later.

To perform a partial capture:

1. Find the order under **WooCommerce > Orders** and click to open it.
2. Hover your cursor over an item from the order and click the pencil icon that appears.

![](https://woocommerce.com/wp-content/uploads/2023/09/Screenshot-taken-on-2023-09-06-at-20.45.25-UTC@2x.png?strip=all&w=704)

1. In the *Total* box, enter the amount you wish to capture, then click **Save**.

![](https://woocommerce.com/wp-content/uploads/2023/09/Screenshot-taken-on-2023-09-06-at-20.46.46-UTC@2x.png?strip=all&w=704)

1. The cost of the item will updated as if a coupon were applied.

![](https://woocommerce.com/wp-content/uploads/2023/09/Screenshot-taken-on-2023-09-06-at-20.47.43-UTC@2x.png?strip=all&w=704)

1. Change the order status to 
```
Processing
```

 or 
```
Completed
```

.
2. Click the **Update** button.

After updating the order, the lesser amount will be captured.

**NOTE:**Attempting to capture *more* than the authorized amount will fail with an error. The order can still be captured once it’s been edited to have a total less than or equal to the original authorized amount.

## Cancelling authorizations

[↑ Back to top](#doc-title)

Although authorizations [expire automatically after seven days](#expired-authorizations), it’s best to cancel them if you’ve confirmed that you won’t need to charge the customer. Doing so releases the hold that their bank placed on their funds.

If a customer wishes to cancel their order after it’s been authorized but before it’s been captured, you can do so by:

- Setting the order status to “Cancelled”, or…
- Cancelling the authorization [in the Stripe dashboard](https://docs.stripe.com/refunds#cancel-payment).

## Expired authorizations

[↑ Back to top](#doc-title)

If an authorized charge is not captured within seven days, the authorization will expire. An expired authorization operates similarly to a [cancelled authorization](#cancelling-authorizations), meaning that:

- The held funds will be returned to the customer.
- The order status is set to “Failed.”
- The funds can no longer be captured.

The only difference between an expired authorization and a cancelled authorization is that expiration happens automatically, and cancellation is a manual process.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Getting started with In-Person Payments with Stripe

**Source:** [https://woocommerce.com/document/stripe/admin-experience/in-person-payments/](https://woocommerce.com/document/stripe/admin-experience/in-person-payments/)

# Getting started with In-Person Payments with Stripe

			With the Stripe WooCommerce Extension, your customers can pay for products and services in-person using the **M2 card reader**, **WisePad 3 card reader**, or **Tap to Pay** on a [compatible iPhone](https://woocommerce.com/document/tap-to-pay-iphone/) or [Android device](https://woocommerce.com/document/tap-to-pay-android/).

In-Person Payments via Stripe is available to qualified merchants using iPhone, iPad, or Android devices for non-subscription-based products.

Currently, **In-Person Payments** & **Tap to Pay for Stripe** are available for the following countries and features:

| Country / Features | Card Reader model for In-Person Payments | Tap to Pay on iPhone | Tap to Pay on Android |
| --- | --- | --- | --- |
| US 🇺🇸 | M2 | ✅ | ✅ |
| UK 🇬🇧 | WisePad 3 | ✅ | ✅ |
| Finland 🇫🇮 | WisePad 3 | ❌ | ❌ |
| Luxembourg 🇱🇺 | WisePad 3 | ❌ | ❌ |
| Ireland 🇮🇪 | WisePad 3 | ❌ | ❌ |
| Netherlands 🇳🇱 | WisePad 3 | ❌ | ❌ |
| Singapore 🇸🇬 | WisePad 3 | ❌ | ❌ |
| New Zealand 🇳🇿 | WisePad 3 | ❌ | ❌ |

## Requirements

[↑ Back to top](#doc-title)

You will need to meet the following requirements in order to collect payments in-person using the Stripe WooCommerce Extension:

- Connection to the Internet via WiFi or cellular data.
- The latest version of the Stripe WooCommerce Extension active on your WooCommerce site.
- A Stripe account based in one of the following countries:
- Finland
- Ireland
- Luxembourg
- Netherlands
- New Zealand
- Singapore
- United Kingdom
- United States
- The latest version of the Woo Mobile App.
- A device running iOS 14+ or Android 5+.

### Additional requirements for Tap to Pay

[↑ Back to top](#doc-title)

If you’d like to collect In-Person Payments using **Tap to Pay**, you also need to meet these additional requirements:

- iPhone XS or newer that:
- Is running iOS 16+
- Is signed in to an iCloud account
- Has a passcode set
- Does not have the [NFC](https://developer.apple.com/design/human-interface-guidelines/nfc) chip disabled
- Android device that
- Contains a functioning NFC antenna and chipset.
- Is not “rooted.”
- The device bootloader is locked and unchanged.
- Runs Android 11 or above.
- Uses Google Mobile Services.
- Has a hardware-backed keystore.
- Has stable connection to the internet

## Charging your card reader

[↑ Back to top](#doc-title)

Allow your reader to fully charge before the first use. The reader ships partially charged, but we recommend that you charge your reader fully before the first use.

To charge your reader, use the supplied cable to connect the USB-C on the reader to a USB charger. A full charge will take a few hours.

With a full charge, the reader should be able to process600 to 800 contactless transactionsbefore needing a recharge.

## Connecting your card reader

[↑ Back to top](#doc-title)

Your reader will need to be connected to your device using the Woo Mobile App. You should not pair the card reader in your phone or tablet’s settings.

To connect your card reader:

1. Navigateto **Menu** page.
2. Select**Payments**:

![](https://woocommerce.com/wp-content/uploads/2024/03/menu-payments-ipp.jpeg?w=768)

1. Tap **Continue setup** for In-Person Payments:

![](https://woocommerce.com/wp-content/uploads/2024/03/ipp-incomplete.jpeg?w=768)

1. Tap the **Connect card reader**button:

![](https://woocommerce.com/wp-content/uploads/2024/03/IMG_0F17D882ECAB-1.jpeg?w=768)

1. Tap **OK** to allow the Woo Mobile App to use your device’s Bluetooth capabilities to scan for your card reader.
2. Turn on your card reader by holding the power button for one second.

![](https://woocommerce.com/wp-content/uploads/2024/03/IMG_583560E7118A-1.jpeg?w=768)

**NOTE:**Keep the card reader near the mobile device while the Woo Mobile App completes the scanning process.

1. Tap **Connect to Reader** to begin the connection process.

![](https://woocommerce.com/wp-content/uploads/2024/03/IMG_966E6994F59B-1.jpeg?w=768)

1. Tap the **Allow While Using App** prompt when asked.

That’s it: your reader is now connected and ready to accept payments!

## Accepting payments in-person

[↑ Back to top](#doc-title)

When collecting a payment, In-Person Payments supports the following payment methods:

- **Cash**
- **Card reader**
- You’ll also be given the option to use [Tap to Pay](#collecting-payment-ttp) to collect the payment if you are using a supported device.
- **Shareable payment link**
- This link can be shared with a customer and used to pay for the order online.
- **Scan to Pay**
- This will generate a QR code that a customer can scan to pay for the order online.

![](https://woocommerce.com/wp-content/uploads/2024/03/CleanShot-2024-03-01-at-17.27.48@2x.png?strip=all&w=704)

### Collecting payment with Tap to Pay on iPhone

[↑ Back to top](#doc-title)

After selecting **Tap to Pay on iPhone** for the first time, the Woo Mobile App will:

- Check that your device is ready to use Tap to Pay on iPhone
- Display a prompt to accept the terms and conditions.
- Ask you tocontinue with your device’s Apple ID or another Apple ID.

**NOTE:**The Apple ID you use will be associated with a merchant account for merchant account management and fraud prevention and compliance purposes through Apple. You can unlink your Apple ID from a merchant account by contacting Apple Support

If selecting **Tap to Pay on iPhone** after it is set up:

- The Woo Mobile App will display the payment screen.
- The customer can tap their preferred payment method on the area indicated on your device.
- The app will process the payment.
- You will be prompted to print or email a receipt.

## Creating orders

[↑ Back to top](#doc-title)

With In-Person Payments, there are two ways of creating orders to collect payments:

1. [Build orders](#build-orders)
2. [Collect payments for an order placed online](#collect-order-payment)

### Build orders

[↑ Back to top](#doc-title)

With In-Person Payments, you can build an order in the Woo Mobile App and collect payment immediately.

To build an order and collect payment:

1. Navigate to the **Orders** section of the Woo Mobile App.
2. Tap on the 
```
+
```

 icon in the top-right corner to create an order.
3. To add products to the order, you can either:
- Scan product barcodes using your device’s camera.
- If the barcode matches a SKU for a product available on your store, it will automatically be added to the order.
- Select **Add Products**.
4. If you choose **Add Products**, select the product(s) you’d like to add to the order and tap the **# Product(s) Selected** button to add the product(s) to the order.
5. After the order is fully created, select the **Collect Payment** button to take payment.
6. Choose how to collect payment.

**NOTE:****For quick payments without inventory tracking, tap the **Add Custom Amount** button instead of selecting a product. This is perfect when you need to collect payments quickly—such as at trade shows, craft fairs, or for services.

- ![](https://woocommerce.com/wp-content/uploads/2024/03/orders-ipp.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-new-order.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-add-product-or-scan.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-product-selected.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-collect-payment-1.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/IMG_3DD97953F6EF-1-1.jpeg?w=768)

### Collect payment for an order placed online

[↑ Back to top](#doc-title)

With In-Person Payments, you can allow customers to place an order online using the [cash on delivery](https://woocommerce.com/document/cash-on-delivery/) payment method to then pay for the order in-person using a card or cash.

To collect a payment in-person after it is placed online:

1. Navigate to the **Orders** section of the Woo Mobile App.
2. Tap on the order being paid for.
- Orders placed online with a **Cash on Delivery** payment method will have the 
```
Processing
```

 status.
3. Review the order details and tap on on the **Collect payment** option.
4. Choose how to collect payment.

- ![](https://woocommerce.com/wp-content/uploads/2024/03/ipp-orders.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-order-select.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-pip-collect.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/IMG_3DD97953F6EF-1-1.jpeg?w=768)

## Receipts

[↑ Back to top](#doc-title)

An email receipt is sent automatically upon payment collection if a customer email address is set on the order. You can also send the email receipt manually after the payment.

**NOTE:**As an In-Person Payments merchant, you are *obligated* to provide your customers the option of a printed receipt for any payment.

### Printing receipts on a network printer

[↑ Back to top](#doc-title)

If your mobile device has access to a WiFi Network (e.g. for curbside payments or point-of-sale type payments), you should be able to use any printer accessible via that WiFi network using AirPrint (iOS) or Mopria (Android).

Android users may need to install additional software (e.g., the [Brother Print Service Plugin](https://play.google.com/store/apps/details?id=com.brother.printservice&hl=en&gl=US)) depending on the printer.

### Printing receipts on a WiFi direct printer

[↑ Back to top](#doc-title)

WiFi Direct printers, like the[Brother RJ-4250WB-L](https://brothermobilesolutions.com/products/mobile-printers/ruggedjet-series/ruggedjet-4-series/brother-ruggedjet-rj4250wbl/), have their own internal WiFi access hotspot that a mobile device can connect to directly for printing receipts.

To print receipts using a WiFi direct printer:

1. Ensure your mobile device has access to cellular data.
2. Connect to the printer WiFi using your device’s WiFi settings.

You can then accept payments (over cellular data) and print receipts (over WiFi Direct). This can be especially useful for in-person delivery at a customer’s home.

## Fulfillment options

[↑ Back to top](#doc-title)

If you offer local pickup or curbside pickup options, you’ll need to decide if you want to deliver to your customers, have them pick up their orders, or both.

You can specify [shipping zones](https://woocommerce.com/document/setting-up-shipping-zones/#shipping-zones) to determine what shipping methods customers may be eligible for. Shipping zones allow you to offer specific fulfillment options, like [Local Pickup](https://woocommerce.com/document/local-pickup/), to customers depending on where they are located in the world.

## Updating your privacy policy

[↑ Back to top](#doc-title)

Like any Payment Method, customers using**In-Person Payments**should be aware of what data is shared about them and their transactions with others. Customers using**card-present payments**can expect to have the following personal data shared with [our partners at Stripe](https://woocommerce.com/document/woopayments/account-management/partnership-with-stripe/):

- Their location at the time and date of purchase.
- Their email address.
- Their name.
- AStripe assigned customer ID if they had prior payments for this store.
- Their address and phone number.
- The quantity, price, and description of items in the order.

All data is used to support fraud detection during payment collection. You can find more details on provacy and our products [here](https://automattic.com/privacy/), and you can manage your store’s privacy policy in the**Settings**>**Privacy** section of your site’s administrator dashboard.

**NOTE**: You can read more about privacy and our products [here](https://automattic.com/privacy/).

## Powering off your reader

[↑ Back to top](#doc-title)

If you want to power off the M2 or WisePad 3 to save battery life, hold down the power button for roughly four seconds.

Depending on the device, either the light will go off and stay off, or the LED will display a prompt 
```
Power off?
```

 — which you can confirm with the green enter button on the PIN pad.

## Refunds

[↑ Back to top](#doc-title)

You can refund your customers’ In-Person Payment just as you would any other WooPayments payment by following the refund flow on their order in the app or on your site via WP Admin.

If an order was paid with **Interac**, the refund must be initiated from the Woo Mobile App, and the original card used for the purchase must be presented.

To refund through the Woo Mobile App:

1. Navigate to the **Orders** section of your Woo Mobile App.
2. Select the order you’d like to refund.
3. Select the **Issue Refund** option.
4. Adjust the quantity of the products you’d like to refund.
5. Select **Next**.
6. Enter a reason for the refund, if desired.
7. Tap the **Refund** button.
8. Select **Refund** again to confirm the refund.

- ![](https://woocommerce.com/wp-content/uploads/2024/03/ipp-orders-1.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-order-select-refund.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-issue-refund.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/refund-quantity-ipp.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/ipp-refund-final.jpeg?w=768)
- ![](https://woocommerce.com/wp-content/uploads/2023/07/refund-confirm-final.jpeg?w=768)

## Frequently asked questions

[↑ Back to top](#doc-title)

### Does In-Person Payments work with test mode enabled?

[↑ Back to top](#doc-title)

No, In-Person Payments is not compatible with[test mode](https://woocommerce.com/document/stripe/customer-experience/testing/).

### Does my mobile device need an Internet connection to collect payments?

[↑ Back to top](#doc-title)

Yes, your mobile device needs to be connected to the Internet to collect payments.

If you are using cellular data to connect to the internet, please be sure**Cellular Data**is enabled for the**“Woo**” application in your device’s**Cellular** **Settings**.

### Which cards and digital wallets are supported?

[↑ Back to top](#doc-title)

In-Person Payments supports *most* credit and debit cards. It also supports payments using the following wallets:

- Apple Wallet
- Google Wallet
- Samsung Pay
- VISA payWave
- MasterCard PayPass
- AMEX ExpressPay
- Interac
- Discover D-PAS

### Can I use In-Person Payments for my subscription-based products?

[↑ Back to top](#doc-title)

Not at this time. Support for subscription products will be coming in a future release.

## Still experiencing issues?

[↑ Back to top](#doc-title)

If you’re using the Jetpack plugin to connect the app to your site, make sure that the Jetpack connection is active and working correctly. You can verify some[known issues](https://jetpack.com/support/getting-started-with-jetpack/known-issues/)or try[reconnecting your site](https://jetpack.com/support/reconnecting-reinstalling-jetpack/).

If you’re still having difficulty, please fill out our contact form to reach our support team from within the app by going to Menu > Settings > Help & Support > Contact Support.

---

## Stripe extension and Level III Data

**Source:** [https://woocommerce.com/document/stripe/admin-experience/level-iii-data/](https://woocommerce.com/document/stripe/admin-experience/level-iii-data/)

# Stripe extension and Level III Data

			When placing a charge, there are three “levels” of data that merchants can send to payment processors such as Stripe:

- **Level I:** The charge date and the charge amount.
- **Level II:** The sales tax amount and a customer code.
- **Level III:** Order line items and the shipping address.

However, Stripe will only accept Level III data if all of the following are true:

- The merchant is based in the U.S.
- The card being charged is a Visa or a Mastercard.
- There are no physical products in the order.
- The customer billing details are all present.

Our Stripe extension automatically sends data for Levels I and II. However, the way our extension works prevents us from knowing ahead of time whether Stripe will accept the Level III data or not.

Therefore, what our extension does is first attempt to send the charge through with the Level III data attached. If the charge fails, our extension automatically removes the Level III data and retries the charge. If that happens, the extension will not attempt to send Level III data again for 3 months.

For more details on how Stripe handles Level III data, please see [their documentation](https://docs.stripe.com/level3). (Note that you must be logged into a Stripe account capable of using Level III data to see that link.)

If you wish to customize the Level III data our plugin sends to Stripe, you can use the 
```
wc_stripe_payment_request_level3_data
```

 filter.

**NOTE:**We are unable to provide support for custom code under [our Support Policy](https://woocommerce.com/support-policy/#customization). If you need to customize a snippet further or extend its functionality, we highly recommend [Codeable](https://www.codeable.io/partners/woocommerce/?ref=OaWImk) or a [Certified WooExpert](https://partners.woocommerce.com/English/marketplace/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Optimized Checkout Suite

**Source:** [https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/)

# Optimized Checkout Suite

			Stripe’s Optimized Checkout Suite is a modern version of the payment form. As of version 10.8.0, it’s enabled by default for all eligible merchants.

## Advantages

[↑ Back to top](#doc-title)

The Optimized Checkout Suite uses machine learning to decide the order in which payment methods should be displayed to individual shoppers. The goal is to prioritize payment methods that are most likely to lead to purchases.

The prioritization logic only applies to payment methods that you have enabled in the extension settings or via the Stripe dashboard itself. (It’s possible to use it with just a single payment method enabled if you want.)

Enabling Optimized Checkout Suite also lets you use [Adaptive Pricing](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/), which allows your international customers to see prices and pay in their preferred currency.

For more details, see [Stripe’s documentation](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-%28ocs%29).

## Enabling

[↑ Back to top](#doc-title)

First, update to the most recent version of the Stripe extension to be sure that the Optimized Checkout Suite will be available to you. We recommend [enabling automatic updates](https://woocommerce.com/document/how-to-update-woocommerce/#updating-extensions-and-payment-gateways).

If you need to update the Stripe extension manually, you can update to version 9.8 by following the steps below:

1. In your WordPress dashboard, go to **Dashboard > Updates**.
2. Click the **Check again** link to check for plugin updates.
3. If a new version of the Stripe plugin is available, update it.
4. Go to **Plugins > Installed Plugins**.

Here’s how the **Dashboard > Updates** page will look if a WooCommerce Stripe Gateway update is available to be installed:

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-2025-08-04-at-2.57.36-PM.png?w=980)

After ensuring the most recent version of the plugin is installed:

1. In your store’s WordPress dashboard, go to **WooCommerce > Settings > Payments > Stripe > Settings**.
2. Scroll to the *Advanced Settings* section.
3. Check the box for “Dynamically display the most relevant payment methods you’ve enabled.”
- You can also optionally enable [Adaptive Pricing](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/).
4. Choose [a layout option](#layout).
5. Click **Save Changes** at the bottom.

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-19.33.06-UTC@2x.png?w=980)

## Layout

[↑ Back to top](#doc-title)

The *Layout* setting controls how the payment methods are shown in the checkout form. See the images below for a comparison.

- ![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-19.43.45-UTC@2x.png?strip=all&w=704)Accordion layout
- ![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-19.44.12-UTC@2x.png?strip=all&w=704)Tabs layout

Also, since the Optimized Checkout Suite works best when Stripe is at the top of your payment providers list (under **WooCommerce > Settings > Payments**), we present a notice to you if Stripe is *not* in the top slot:

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-04-27-at-14.36.31-UTC@2x.png?strip=all&w=704)

Clicking the **Move to top** button will move Stripe to the top of the payment providers list, thus allowing customers to see the full range of payment methods.

## Changing the name in checkout

[↑ Back to top](#doc-title)

By default, when Optimized Checkout Suite is enabled, the list of payment methods shown in checkout will be under a “Payment methods” title, like so:

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-15.02.23-UTC@2x.png?strip=all&w=704)

To change this, use the 
```
wc_stripe_optimized_checkout_title
```

 filter:

```
add_filter( 'wc_stripe_optimized_checkout_title', fn() => 'Pay here!' );
```

The result:

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-15.05.00-UTC@2x.png?strip=all&w=704)

## Troubleshooting

[↑ Back to top](#doc-title)

There are some situations in which Optimized Checkout Suite cannot be enabled.

### Settings Sync disabled

[↑ Back to top](#doc-title)

For Optimized Checkout Suite to work properly, your site and Stripe both need to know which payment methods you have enabled vs. disabled. This is so that shoppers are only shown your enabled payment methods.

We released a settings sync feature in version 9.5.0 that is responsible for keeping your enabled payment methods synchronized between your site and Stripe’s systems. This syncing is critical to Optimized Checkout Suite.

To check to see if settings sync is working correctly:

1. In your WordPress dashboard, navigate to **WooCommerce > Settings > Payments**.
2. Click the **Manage** button for the Stripe extension.
3. Click the **Settings** tab.
4. In the *Account Details* section, make sure that **Sync** shows as **Enabled**.

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-17.12.13-UTC@2x.png?w=980)

If the **Sync** feature does not show **Enabled**, you will need to [reconnect your site to Stripe’s system](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/) before Optimized Checkout Suite will be available.

![](https://woocommerce.com/wp-content/uploads/2025/07/Screenshot-taken-on-2026-05-13-at-19.40.03-UTC.png?strip=all&w=704)

### Stripe account on another platform

[↑ Back to top](#doc-title)

If you created your Stripe account through another platform or service, it may still be controlled by that platform/service, and not by WooCommerce.

To take advantage of the Optimized Checkout Suite, you’ll need to [disconnect from that platform account](https://support.stripe.com/questions/disconnect-your-stripe-account-from-a-connected-third-party-platform) and then [reconnect to the WooCommerce platform account](https://woocommerce.com/document/stripe/setup-and-configuration/connecting-to-stripe/).

### Using manual API keys

[↑ Back to top](#doc-title)

Sites that are still using manually entered API keys may not be eligible for Optimized Checkout Suite. Re-authenticating your connection solves this issue.

### Some methods not shown

[↑ Back to top](#doc-title)

Optimized Checkout Suite will only show a payment method if it’s relevant to a given customer. For example, Przelewy24 will be hidden for customers outside Poland.

Furthermore, although the Stripe dashboard shows many payment methods, our Stripe plugin can only support a subset of those. [Here’s the list](https://woocommerce.com/document/stripe/setup-and-configuration/additional-payment-methods/#which-apms) of what our plugin supports.

---

## Adaptive Pricing

**Source:** [https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/adaptive-pricing/)

# Adaptive Pricing

			Adaptive Pricing is a feature of the [Optimized Checkout Suite](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/) that lets your international customers see prices and pay in their preferred currency, while you continue to receive payouts in the same currency as before.

As of version 10.8.0, Adaptive Pricing is enabled by default for all eligible merchants.

## Adaptive Pricing vs. multi-currency

[↑ Back to top](#doc-title)

Adaptive Pricing is not the same as full multi-currency support. It is a lightweight way to offer local-currency checkout for one-time purchases. It does not change the currency orders are stored in, and it does not work with subscriptions or other purchase flows where charges will occur in the future, e.g. [manual capture](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/).

If you need full multi-currency support across your catalog, orders, and reports, you will want a dedicated multi-currency solution instead.

## Requirements

[↑ Back to top](#doc-title)

For Adaptive Pricing to work in your store, all of these are required:

### The Optimized Checkout Suite must be enabled

[↑ Back to top](#doc-title)

Adaptive Pricing is a feature of the Optimized Checkout Suite and cannot be used on its own. See [Enabling the Optimized Checkout Suite](https://woocommerce.com/document/stripe/admin-experience/optimized-checkout-suite/#enabling) for instructions.

### Manual capture must be disabled

[↑ Back to top](#doc-title)

Adaptive Pricing is incompatible with the **Issue an authorization on checkout, and capture later** [setting](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/).

### Your Stripe account must be in a supported country

[↑ Back to top](#doc-title)

Adaptive Pricing is not available to merchants in India. If your Stripe account is based in India, the Adaptive Pricing setting cannot be enabled.

### Your store currency must match your Stripe payout currency

[↑ Back to top](#doc-title)

Adaptive Pricing requires your [WooCommerce store currency](https://woocommerce.com/document/shop-currency/) to match the currency Stripe uses when paying you out.

To check or change your store currency, go to **WooCommerce > Settings > General** and confirm that the **Currency** setting matches the currency you receive payouts in.

### Adaptive Pricing must be enabled in Stripe dashboard

[↑ Back to top](#doc-title)

In addition to enabling Adaptive Pricing in your store, you also need to make sure it’s enabled at the Stripe account level as well.

1. Sign in to your [Stripe dashboard](https://dashboard.stripe.com/).
2. Navigate to **Settings > Payments > Adaptive Pricing**.
3. Make sure Adaptive Pricing is enabled for your account.

![](https://woocommerce.com/wp-content/uploads/2026/05/Screenshot-taken-on-2026-05-05-at-20.02.39-UTC@2x.png?strip=all&w=704)

## Enabling Adaptive Pricing

[↑ Back to top](#doc-title)

Once all four requirements above are met, turn Adaptive Pricing on in your store:

1. In your WordPress dashboard, go to **WooCommerce > Settings > Payments > Stripe > Settings**.
2. Scroll to the *Advanced Settings* section.
3. If the Optimized Checkout Suite is not already enabled, enable it.
4. Check the box for **Let customers pay in their local currency with Adaptive Pricing**.
5. Click the **Save changes** button at the bottom of the page.

![](https://woocommerce.com/wp-content/uploads/2026/05/Screenshot-taken-on-2026-05-13-at-19.54.14-UTC@2x.png?w=980)

When Adaptive Pricing is enabled, all additional payment methods will become available under **WooCommerce > Settings > Payments > Stripe > Payment Methods**. We highly suggest enabling as many as possible, since they will present international customers with a wider range of payment options. (Note: fees vary across payment methods.)

## What shoppers see

[↑ Back to top](#doc-title)

### Currency selector in checkout

[↑ Back to top](#doc-title)

When an eligible shopper visits your checkout, a currency selector appears directly above the Stripe payment form. The shopper can switch between your store’s currency and a supported local currency.

![](https://woocommerce.com/wp-content/uploads/2026/05/Screenshot-taken-on-2026-05-05-at-20.22.34-UTC@2x.png?strip=all&w=704)

### Payment methods adjust to the chosen currency

[↑ Back to top](#doc-title)

Only payment methods that support the selected currency are shown. For example, if a shopper switches to Euros, payment methods that don’t support Euros are hidden from the list. Your enabled list of payment methods is still respected — Adaptive Pricing only filters within that list, it doesn’t add new methods.

### Order received page

[↑ Back to top](#doc-title)

After a successful purchase, the order received page shows the converted total in the shopper’s chosen currency along with a notice describing the exchange rate.

![](https://woocommerce.com/wp-content/uploads/2026/05/Screenshot-taken-on-2026-05-05-at-20.26.42-UTC@2x.png?strip=all&w=704)

For payment methods that complete asynchronously (such as bank-redirect methods), the *Pay* and *Cancel* buttons that normally appear on the order received page during pending status are hidden for Adaptive Pricing orders. This avoids confusion while the payment is still confirming with the bank.

### Order confirmation emails

[↑ Back to top](#doc-title)

The shopper’s order confirmation email includes a notice with the converted total and the exchange rate that was applied.

Internal merchant notification emails include an **Adaptive Pricing Applied** note, so you can tell at a glance which orders went through this flow.

### Information shown to EEA shoppers

[↑ Back to top](#doc-title)

Shoppers based in the EEA see additional information on the order received page and in their confirmation email, as required by EU regulations: the European Central Bank’s interbank exchange rate, plus a currency conversion service fee. This disclosure is only shown to EEA-based shoppers; shoppers from other regions don’t see it.

## What merchants see

[↑ Back to top](#doc-title)

When an order goes through Adaptive Pricing, several places in your store reflect that the shopper paid in a different currency.

### New Order email

[↑ Back to top](#doc-title)

When an order completes, the **New Order** email sent to you (and any other admin-bound order emails like Cancelled Order or Failed Order) includes an **Adaptive Pricing Applied** notice with the converted amount, the exchange rate that was used, and a confirmation that your settlement is unchanged.

![](https://woocommerce.com/wp-content/uploads/2026/05/Screenshot-taken-on-2026-05-06-at-08.58.34-UTC@2x.png?strip=all&w=704)

### Order totals in the orders list

[↑ Back to top](#doc-title)

In **WooCommerce > Orders**, any order placed using Adaptive Pricing shows the original store currency total alongside the currency the shopper actually paid in. For example:

```
$25.00 (€ 22.19 EUR)
```

### Order notes in the order itself

[↑ Back to top](#doc-title)

Any order placed using Adaptive Pricing also gets an order note recording the local currency amount the shopper paid:

> Local currency purchase via Adaptive Pricing. Amount paid was: EUR 22.19

The note appears in the **Order notes** panel on the order edit page.

## Refunds

[↑ Back to top](#doc-title)

When you refund a payment made via Adaptive Pricing, the amount is converted to the customer currency using the exchange rate *at the time you issued the refund*. Because exchange rates vary over time, this may be more or less than the original amount.

Put another way: the customer will always be refunded the exact amount that they paid and in the currency that they paid in, regardless of exchange rate fluctuations between the time of the transaction and the time of the refund.

## Compatibility

[↑ Back to top](#doc-title)

Adaptive Pricing works with:

- The Optimized Checkout Suite (required)
- One-time purchases
- Pre-orders that charge upfront

Adaptive Pricing does **not** work with:

- Subscriptions
- Pre-orders that charge upon release
- Other recurring or scheduled payment flows
- Saved payment methods
- Express checkouts (Apple Pay, Google Pay)
- Manual auth and capture

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## What information does the Stripe extension add to my orders?

**Source:** [https://woocommerce.com/document/stripe/admin-experience/order-information/](https://woocommerce.com/document/stripe/admin-experience/order-information/)

# What information does the Stripe extension add to my orders?

			When a customer uses the Stripe extension to pay for their order, several unique Stripe object identifiers may be used to help keep track of the payment and other aspects of the order. You can use these identifiers in the Stripe dashboard to help you find orders, refunds, disputes, and so on.

## Stripe object identifiers

[↑ Back to top](#doc-title)

Stripe assigns unique identifiers depending on what kind of information is being processed. The identifier will be a combination of three separate components:

- Two to three letters indicating the object being identified. For example:
- A charge will start with 
```
ch
```

.
- A dispute will start with 
```
du
```

.
- A refund will start with 
```
re
```

.
- An event will start with 
```
evt
```

.
- A Stripe account will start with 
```
acct
```

.
- An underscore (
```
_
```

) separator.
- A unique, case-sensitive identifier.

When combined, it will look something like this:

```
re_1ORe6HHKb07LG7yY68hujmkB
```

## Where are identifiers used?

[↑ Back to top](#doc-title)

These identifiers will appear in two different places:

- The [order details](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-details) at the top of the page.
- The [order notes](https://woocommerce.com/document/managing-orders/view-edit-or-add-an-order/#order-notes) metabox.

### Identifiers in the order details

[↑ Back to top](#doc-title)

When a payment is processed via the Stripe extension, an identifier will appear in the order details at the top of the page, alongside information about the payment method.

![](https://woocommerce.com/wp-content/uploads/2023/12/stripe-ch-id.png?strip=all&w=704)

The identifier in this section is a link. Clicking it will take you to your Stripe dashboard so that you can find more information about the transaction.

### Identifiers in the order notes

[↑ Back to top](#doc-title)

When a payment is processed via the Stripe extension, an identifier will appear in the order notes as the order goes through its life cycle. Since payments go through several stages, it’s common for there to be different identifiers in the order notes.

![](https://woocommerce.com/wp-content/uploads/2023/11/image_e40945.png?strip=all&w=704)

Note that identifiers appearing in the order notes depends on having [webhooks set up](https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Does the Stripe extension modify my order statuses?

**Source:** [https://woocommerce.com/document/stripe/admin-experience/order-statuses/](https://woocommerce.com/document/stripe/admin-experience/order-statuses/)

# Does the Stripe extension modify my order statuses?

			With WooCommerce, every order has its current state marked by an order status. These statuses can be changed manually, but the Stripe extension will also *automatically* apply certain statuses to an order based on the payment status.

Keep in mind that automatic order status updates from the Stripe extension will only work if [your webhooks](https://woocommerce.com/document/stripe/setup-and-configuration/stripe-webhooks/) are configured correctly!

On this page, we’ll explore how the Stripe extension may affect order statuses.

## “Processing” status

[↑ Back to top](#doc-title)

When a payment is processed successfully via the Stripe extension, the order is automatically assigned the “Processing” status. This is the default behavior of payment methods in the core WooCommerce plugin. The “Processing” status indicates that the payment was successful and the order is now awaiting fulfillment.

One exception to the above rule is for orders that solely contain products that are both [virtual and downloadable](https://woocommerce.com/document/digitaldownloadable-product-handling/). Such orders will automatically be assigned the “Completed” status, since no fulfillment is required.

If you’d like to automatically mark orders “Completed” even if they contain other product types, we suggest using an extension like [WooCommerce Order Status Control](https://woocommerce.com/products/woocommerce-order-status-control/).

## “Refunded” status

[↑ Back to top](#doc-title)

If you [refund a payment](https://woocommerce.com/document/stripe/admin-experience/refunding-orders/) processed via the Stripe extension, the status of the order will be updated to “Refunded.”

**NOTE:** Manually changing the order status to 
```
Refunded
```

 or 
```
Cancelled
```

 will **not** automatically refund a payment to the customer!

## “On Hold” status

[↑ Back to top](#doc-title)

If a customer has disputed a payment, but the dispute has not yet been decided by the cardholder’s bank, the order status will be set to “On Hold.”

“On Hold” is also used for transactions that have been [authorized but not captured](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/).

## “Pending payment” status

[↑ Back to top](#doc-title)

This status is applied if a [Woo Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) renewal payment is attempted with [a 3D Secure card](https://woocommerce.com/document/stripe/customer-experience/3d-secure/). In such cases, the subscriber will get an email that includes a link to visit your website and pay for the renewal.

## “Cancelled” status

[↑ Back to top](#doc-title)

This status can occur if [authorize and capture setting](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/) was used, but the card authorization was cancelled before being captured.

## “Failed” status

[↑ Back to top](#doc-title)

This status is applied if a charge was [disputed](https://support.stripe.com/topics/disputes) and decided in the cardholder’s favor.

If you use [the Subscriptions extension](https://woocommerce.com/products/woocommerce-subscriptions/) and [Stripe Radar](https://woocommerce.com/document/stripe/admin-experience/preventing-fraud-via-stripe-radar/), subscription payments might also be marked as “Failed” if Radar blocks the charge. This is so that the Subscriptions extension does not [schedule further retries](https://woocommerce.com/document/subscriptions/failed-payment-retry/) against a payment method that Radar has already flagged as high risk or similar.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Preventing fraud via Stripe Radar

**Source:** [https://woocommerce.com/document/stripe/admin-experience/preventing-fraud-via-stripe-radar/](https://woocommerce.com/document/stripe/admin-experience/preventing-fraud-via-stripe-radar/)

# Preventing fraud via Stripe Radar

			Fraud is a real concern for e-commerce merchants. However, when you connect our Stripe extension to your Stripe account, [Stripe Radar](https://stripe.com/radar) helps protect you against risky transactions using machine learning technology.

## What is Stripe Radar?

[↑ Back to top](#doc-title)

Radar is a Stripe service that uses real transaction data from millions of merchants along with advanced machine learning technology to help identify and automatically block fraudulent purchases.

[Radar for Fraud Teams](https://stripe.com/radar/fraud-teams) is also available if you’d like additional control and analytics. However, there is a per-transaction cost.

## How do I enable Radar?

[↑ Back to top](#doc-title)

Radar is built into Stripe, so it’s always active and monitoring transactions.

Radar for Fraud Teams can be enabled from [Stripe’s Settings > Radar page](https://dashboard.stripe.com/settings/radar).

## How do I configure Radar?

[↑ Back to top](#doc-title)

It’s not currently possible to configure Radar from within the Stripe extension. You must [use the Stripe dashboard](https://dashboard.stripe.com/radar).

For example, with [Radar rules](https://docs.stripe.com/radar/rules), you can allow, block, or require a review for orders based on various criteria you set, including but not limited to:

- The country a card was issued in
- Card brand used (e.g. American Express)
- The type of card used (e.g. debit cards)
- Geographic information about the customer
- etc.

Radar rules can be configured directly from [your Stripe account dashboard](https://dashboard.stripe.com/settings/radar/rules).

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## How do I refund orders?

**Source:** [https://woocommerce.com/document/stripe/admin-experience/refunding-orders/](https://woocommerce.com/document/stripe/admin-experience/refunding-orders/)

# How do I refund orders?

			The Stripe extension can refund orders from inside the WooCommerce interface. This means that, assuming everything is working correctly, you should not need to initiate refunds using the Stripe dashboard.

Please see the [WooCommerce refunds](https://woocommerce.com/document/woocommerce-refunds/) documentation page for more information on how to perform refunds, restocking products, and so on.

**NOTE:** Please also see [Stripe’s refund documentation](https://docs.stripe.com/refunds) for full details on all aspects of refunds, including how to cancel them, how to trace them, etc.

## Can I refund authorized payments that haven’t been captured?

[↑ Revenir en haut](#doc-title)

No. This is because, if a payment has only been *authorized* but not *captured*, then no money has been exchanged yet. Thus, there is no money to refund.

Please see the [authorize and capture documentation](https://woocommerce.com/document/stripe/admin-experience/authorize-and-capture/) for more information on how to cancel authorized orders, if need be.

## How long do refunds take to process?

[↑ Revenir en haut](#doc-title)

A refund will typically take 5 to 10 business days to appear on your customer’s bank statement. This is standard for most payment processors.

If a refund is sent shortly after the original charge, the refund might be processed as a “reversal.” What this means is that the original charge will simply disappear from the customer’s statement, and a separate credit is not issued.

Here’s what a reversal looks like in the Stripe dashboard:

![](https://woocommerce.com/wp-content/uploads/2023/11/Screenshot-taken-on-2024-08-30-at-17.16.04-UTC@2x.png?w=980)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

## Can I use Stripe Billing for recurring payments?

**Source:** [https://woocommerce.com/document/stripe/admin-experience/stripe-billing/](https://woocommerce.com/document/stripe/admin-experience/stripe-billing/)

# Can I use Stripe Billing for recurring payments?

			No, the Stripe extension does not use the [Stripe Billing](https://stripe.com/billing) product offered by Stripe.

Instead, it’s designed to handle subscriptions and renewal payments by saving and using [secure tokens](https://stripe.com/resources/more/payment-tokenization-101). This allows extensions like [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) to provide flexible recurring payment features on WooCommerce sites.

For this reason, you will not see subscriptions paid for via the Stripe extension under the [Billing](https://dashboard.stripe.com/subscriptions) menu in your Stripe dashboard. Payments that are a part of a subscription will show in the [Payments](https://dashboard.stripe.com/payments) part of the Stripe dashboard, just like standalone orders.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2018/06/Woo_Tax_icon-marketplace-160x160-1.png)

### WooCommerce Tax

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Automatically calculate how much sales tax should be collected for WooCommerce orders — by city, country, or state — at checkout.
				![](https://woocommerce.com/wp-content/uploads/2018/01/icon-80@2x.png)

### Klarna

	
			by [Klarna](https://woocommerce.com/vendor/klarna)

Grow your business with increased sales and an enhanced shopping experience — at no extra cost.

---

