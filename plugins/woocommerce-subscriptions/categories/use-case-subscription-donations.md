# Use Case Subscription Donations

*Category from WooCommerce Subscriptions documentation*

---

## Use Case: Accept Recurring Donation Payments

**Source:** [https://woocommerce.com/document/subscriptions/use-case-subscription-donations/](https://woocommerce.com/document/subscriptions/use-case-subscription-donations/)

# Use Case: Accept Recurring Donation Payments

			One common use for subscriptions is to accept recurring donations where the subscriber can choose a custom donation amount, then donation payments are made on a regular schedule. When [creating a subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/), a set price is required. However, extensions are available which allow your customers to set their own price, and these can be used in combination with WooCommerce Subscriptions to create recurring donation products where the customer selects a donation amount and even selects a payment schedule.

## How can I charge recurring payments for donations?

Two great extensions which work with Subscriptions to allow your customers to name their own price are:

1. [Name Your Price](https://woocommerce.com/products/name-your-price/)
2. [Gravity Forms Add Ons](https://woocommerce.com/products/gravity-forms-add-ons/)

Both of these extensions can be used to add a text field on a subscription product which allows the customer to enter their preferred donation amount. In the below examples we’ll demonstrate using the Name Your Price extension.

## Scenario & Required Extensions

[↑ Back to top](#doc-title)

**Scenario:**

You’re a local community organization that relies on donations to keep the lights on, some of your benefactors have asked about setting their donations on “autopilot” so you can have more stability in your budget. Others have asked about choosing a donation schedule that works best for them. Let’s use the WooCommerce Subscriptions and Name Your Price extensions to set this up in your shop!

**Required** **Extensions**:

- [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)
- [Name Your Price](https://woocommerce.com/products/name-your-price/)

We’ll cover how to set up a [simple subscription product with shopper-defined pricing](#monthly-donation-custom-amount) so customers make a donation of a custom amount on a monthly basis. As well as a [variable subscription product with shopper-defined pricing](#custom-donation-amounts-with-variable-schedules) that allows supporters to choose from a range of schedules for their recurring donations. In both cases the steps closely follow the normal process of [creating subscription products](https://woocommerce.com/document/subscriptions/creating-subscription-products/), with the addition of checking the option for shoppers to name their price. See the [Name Your Price documentation](https://woocommerce.com/document/name-your-price/#section-9) for more details including settings that allow customers to change their donation amount.

## Simple Monthly Donations With Custom Amounts

[↑ Back to top](#doc-title)

After you’ve purchased, installed, and activated both WooCommerce Subscriptions and Name Your Price, set up a simple subscription product for monthly donations as follows:

1. Create a new product at **Products > Add New**.
2. Give the product a fitting title and description for accepting monthly donations.
3. In the **Product data** section set the product type to *Simple subscription*.
4. Check the “Name Your Price” box, and you’ll see fields appear for “Suggested Price”, “Minimum Price”, and “Maximum Price”. You can leave fields empty if you don’t want to set values for them.
5. Set the subscription product’s schedule to bill every month.

![](https://woocommerce.com/wp-content/uploads/2024/06/simple-recurring-donation-woocommerce-subscriptions.png?strip=all&w=704)Setting a suggested price and minimum price for the recurring donation product

In the shop your customers will see a field to enter their desired donation amount, as well as your suggested and minimum prices if you entered any.

![](https://woocommerce.com/wp-content/uploads/2024/06/recurring-donation-shop-view.png?w=980)

Now your customers can set a donation value of their choice.

## Custom Donation Amounts with Variable Schedules

[↑ Back to top](#doc-title)

The product configuration for offering different donation schedules is very similar, but uses a variable subscription product instead of a simple one, to offer different billing schedules.

After you’ve purchased, installed, and activated both WooCommerce Subscriptions and Name Your Price you can set this up as follows:

1. From your site admin area, click **Products > Add New**.
2. Give the product a fitting title and description for accepting donations on various schedules.
3. In the top of the “Product data” area, set the product type to Variable Subscription.
4. In the “Attributes” section and add an attribute with the name 
```
Frequency
```

, that has values of 
```
Weekly | Monthly | Quarterly | Annual
```

 to correspond to the different billing schedules. Check to ensure the “Used for variations” box is checked, then click to save the attributes.
5. In the “Variations” section, click the button to “Generate Variations”. You’ll see a variation created for each of the frequencies we entered in the last step.
6. Expand each variation and enter the following product details:
- If you won’t be shipping anything to your benefactors, check the “Virtual” box so shipping options won’t be offered.
- Check the “Name Your Price” box and enter any suggested, minimum, or maximum price.
- Set the subscription billing schedule to match the name of the variation you’re editing (e.g. for the “Quarterly” variation, set the schedule to bill “every 3rd month”)
7. After entering the details and schedules for each variation, click to “Save changes” at the bottom of the variations section.
8. Publish the product.

![](https://woocommerce.com/wp-content/uploads/2024/07/subscription-variable-donation-nyp.png?w=980)Setting the product data for the variation with a quarterly billing schedule.

You can also add images, or other details to the different variations as needed, for example if your donations are non-taxable you may want to assign a zero-rate tax class so no tax is collected at checkout.

On the product page your customers will see an option to select their billing frequency, and a field to enter their donation amount.

![A page product for a product titled "Recurring Donation Plan" with an option to select a frequency and enter a price.](https://woocommerce.com/wp-content/uploads/2024/07/variable-donation-plan-subscription-woocommerce-customer-view.png?w=980)

### Let the Customer Change their Donation Amount

[↑ Back to top](#doc-title)

The Name Your Price documentation has a section that explains the [switching setting it adds](https://woocommerce.com/document/name-your-price/#section-9) so you can allow your customers to update their chosen payment amount.

## Questions and support

[↑ Back to top](#doc-title)

**Something missing from this documentation? Still have questions and need assistance?**

- If you have a question about a specific extension or theme you’d like to purchase, [contact us](https://woocommerce.com/contact-us/#sales-form) to get answers.
- If you already purchased this product and need some assistance, get in touch with a Happiness Engineer via our [support page](https://woocommerce.com/my-account/create-a-ticket/) and select this product’s name from the Product dropdown.

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.
				![](https://woocommerce.com/wp-content/uploads/2019/03/All_Products_Woo_Subscriptions_icon-marketplace-160x160-2.png)

### All Products for WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Offer your existing products on subscription, with this powerful add-on for WooCommerce Subscriptions.

---

