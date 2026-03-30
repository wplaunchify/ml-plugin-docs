# Easy Digital Downloads Add On

*Category from LearnDash documentation*

---

## Easy Digital Downloads Integration

**Source:** [https://learndash.com/support/kb/add-ons/easy-digital-downloads-add-on/easy-digital-downloads/](https://learndash.com/support/kb/add-ons/easy-digital-downloads-add-on/easy-digital-downloads/)

The LearnDash Easy Digital Downloads integration creates the ability for you to sell your courses using the Easy Digital Downloads (EDD) ecommerce plugin. The integration works with the [free version of EDD](https://wordpress.org/plugins/easy-digital-downloads/), but some payment gateways require [paid extensions](https://easydigitaldownloads.com/downloads/).

Easy Digital Downloads is not required to sell LearnDash courses, but is one of several [ecommerce integrations](https://learndash.com/support/docs/documentation/add-ons/#ecommerce_payment_gateways) we offer to provide a more robust ecommerce and checkout experience for your users.

**NOTE**: Both the LearnDash and EDD plugins need to be installed and activated to use the EDD for LearnDash plugin.

## Why Use Easy Digital Downloads?

A few reasons why you might want to use EDD to sell your courses:

- Use additional payment gateways not directly supported by LearnDash (anything other than [PayPal](https://learndash.com/support/docs/core/settings/paypal-settings/), [Stripe](https://learndash.com/support/docs/add-ons/stripe/) and [2Checkout](https://learndash.com/support/docs/add-ons/2checkout/))
- Offer coupons or discount codes
- Sell courses in a bundle (i.e. one price provides access to multiple courses)
- Sell access to courses as an ongoing subscription
- You want to control the emails sent to course enrollees

[Learn more about all of EDD’s features here](https://easydigitaldownloads.com/edd-features/)

## Installation

### Option 1: Add-ons Menu (requires an active LearnDash license)

In your WordPress admin area, go to LearnDash LMS > Add-Ons and locate the EDD for LearnDash add-on. Click Install Now button and once the installation is complete, click the Activate plugin button.

![Easy Digital Downloads LearnDash integration plugin](https://learndash.com/support/wp-content/uploads/2019/03/easy-digital-downloads-learndash-integration-plugin-card.jpg)

### Option 2: Manual Upload

[Download the plugin file](https://support.learndash.com/download/195521/)(remember that you must be [logged in](https://account.learndash.com/) to download). In your WordPress admin dashboard go to Plugins > Add New and then Click to upload the EDD plugin. You’ll need to browse for the plugin .zip that you downloaded previously. Once you find it (it may be in your computer’s Downloads folder), click Open, Install Now and finally, click the Activate Plugin button.

## How it Works

Before you can sell a LearnDash course with EDD, you need to:

- Create a LearnDash course
- Create a product in EDD

We’ll assume you have already created a LearnDash course.

### Create a Product

EDD calls their products “Downloads,” so you can think of downloads and products synonymously.

1. Go to Downloads > Add New
2. Fill out any pertinent information about your product ([see this help article](https://docs.easydigitaldownloads.com/article/177-creating-products))

### Link a Course to an EDD Product

Now it’s time to associate this product with the appropriate LearnDash course. Doing so will mean that once a product is purchased, the user will have access to the associated course.

![Easy Digital Downloads, assign LearnDash course](https://learndash.com/support/wp-content/uploads/2019/03/easy-digital-downloads-learndash-assign-course.gif)

1. On the Edit Download page, scroll down and look in the sidebar for the****LearnDash box
2. Check the box for Is this a LearnDash course?
3. Click in the text box under “Which course?”. You can select a course from the dropdown list, or start typing to search all courses.

**NOTE:** You may link multiple courses to a single product.

When you’re finished editing your product, be sure to click the “Publish” or “Update” button to save your changes.

## FAQ & Troubleshooting

**Why wasn’t a user created and enrolled into the associated course(s) after purchase?** There are a few reasons why this might happen. First, make sure that the Require Login option is selected in the Easy Digital Downloads settings. To do this go to Downloads > Settings and click on the Misc tab and then clcik on the Checkout link. Check the box for Require Login to enable it. Finally, be sure to Click the Save Changes button.
![EDD require login setting](https://learndash.com/support/wp-content/uploads/2019/03/easy-digital-downloads-setting-require-login.jpg)
Next, if you are using PayPal, make sure you have [verified your account](https://www.paypal.com/us/smarthelp/article/faq1014).
Lastly, purchases must have a status of Complete before the LearnDash integration will trigger account creation and course enrollment. To check the status of an order in EDD:
![Easy Digital Downloads payment status complete](https://learndash.com/support/wp-content/uploads/2019/03/easy-digital-downloads-payment-status-complete.jpg)
See [this support article](http://docs.easydigitaldownloads.com/article/190-payments-not-marked-as-complete) on the Easy Digital Downloads site for more details. **Can I use any payment gateway in Easy Digital Downloads to sell courses?** Yes, the integration will work with any EDD payment gateway (as well as free products). Here’s a [complete list of EDD payment gateways](https://easydigitaldownloads.com/downloads/category/extensions/gateways/).

## Additional Resources

- [See this article](https://brianhogg.com/how-to-restrict-lessons-based-on-edd-variable-price-with-learndash/) from another LearnDash user on restricting individual lessons based on EDD’s variable pricing

---

