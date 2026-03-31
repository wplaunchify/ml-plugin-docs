# Subscription Access To Memberships

*Category from WooCommerce Subscriptions documentation*

---

## Use Case: Sell Subscriptions for Membership Access

**Source:** [https://woocommerce.com/document/subscriptions/subscription-access-to-memberships/](https://woocommerce.com/document/subscriptions/subscription-access-to-memberships/)

# Use Case: Sell Subscriptions for Membership Access

			[WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) and [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/) are two powerful extensions that can be integrated to create a subscription-based membership system on your WooCommerce store. This guide will walk you through an example of how they can be integrated so that you can create a system where purchasing a subscription automatically grants membership access, and switching to a different subscription automatically updates the customer to the correct membership plan. We also cover some details of switching between membership-connected subscriptions, and selling subscriptions for access to members-only content.

See the [WooCommerce Memberships Subscription Integration documentation](https://woocommerce.com/document/woocommerce-memberships-subscriptions-integration/) for more general details on how the two extensions integrate.

## Scenario and Requirements

[↑ Back to top](#doc-title)

**Scenario:**

You’re a fitness coach who runs an online platform offering personalized workout plans and nutrition guides. You want the ability to charge customers on a recurring basis in exchange for access to the following membership options:

- **Starter** – this plan grants customers access to exclusive training programs and nutrition guides.
- **Intermediate** – this plan grants access to all the starter resources, plus live-streamed classes each week and a 10% discount on supplements from your store.
- **Advanced** – this plan grants access to all the starter and intermediate resources, plus 1:1 coaching and a personalized training and nutrition program.

Additionally you want customers to be able to upgrade and downgrade between plans as they like. Each customer should only be able to have one active membership at a time.

**Required Extensions**:

- [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)
- [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/)

**Settings Used:**

- [Subscription Switching between Subscription variations](https://woocommerce.com/document/subscriptions/switching-guide/#switch-settings)
- [Limit Subscribers to one active Subscription](https://woocommerce.com/document/subscriptions/creating-subscription-products/#limit-subscriptions)

## Setup and Configuration

[↑ Back to top](#doc-title)

To set this up we’ll take the following steps:

1. **Create the subscription product**.
2. **Create the membership plans** and associate them with the subscription product.
3. **Configure membership access**.
4. [Allow customers to switch, and limit to one active subscription](#allow-switching-only-one-plan-active) (optional)

### Creating the Subscription Product

[↑ Back to top](#doc-title)

First, we must [create a subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/) that will be used to grant access to each membership tier. For this use case, we’ll create a [variable subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/#variable-subscriptions), with each variation being assigned to a plan. Follow these steps to create the variable subscription product:

1. From your WordPress Admin Dashboard, navigate to **Products > Add New**. For this example, we’ll title the product “Fitness Plans”.
2. In the Product data box, set the Product Type to “Variable subscription.”

![](https://woocommerce.com/wp-content/uploads/2024/07/Annotation-on-2024-07-18-at-22-50-35.png?w=980)

1. Click on the Attributes tab and add the three membership tiers. Check the “Used for variations” box.
2. Click “Save attributes.”

![](https://woocommerce.com/wp-content/uploads/2024/07/woocommerce-subscriptions-add-attributes-variable-subscription-use-case.png?strip=all&w=704)

1. On the Variations tab, click the button to “Generate variations.”
2. Assign each variation a price, billing schedule, and other details like product image and any desired sign-up fees or free trial periods.

Now our subscription products are all set up and ready to be purchased. Next we’ll need to create the membership plans to go with these variable subscriptions.

### Create the Membership Plans and Associate them with the Subscription Products

[↑ Back to top](#doc-title)

Now that our subscription products are in place, we’ll create the three membership plans, each one corresponding to a different variation of the variable subscription product.

1. Navigate to **WooCommerce > Memberships**.
2. Click the button near the top to “Add Membership Plan”.
3. Configure the membership plan to be granted access upon product purchase of the subscription variation with matching tier.
4. Set the subscription tied membership length to “Subscription Length” so the membership will remain active while the subscription is active.

![](https://woocommerce.com/wp-content/uploads/2024/07/CleanShot-2024-07-22-at-17.26.32.png?strip=all&w=704)The Advanced Fitness Membership is set here to be granted when the advanced fitness plan subscription product is purchased.

1. Repeat steps 2 through 4 for the other two membership tiers.

![](https://woocommerce.com/wp-content/uploads/2024/07/membership-subscriptions-use-case-woocommerce.png?w=980)All three membership tiers created with access based on purchasing the relevant subscription variation.

Once you’ve created the membership plans and associated them with the subscription variations, customers will be granted the appropriate tier of membership as soon as they purchase the corresponding subscription variation, and their membership will be valid for as long as their subscription is active.

### Configure Membership Access to Content

[↑ Back to top](#doc-title)

Now that our membership plans are created and connected to their variable subscription products, we’ll need to set up the appropriate content access for each plan so members can access their benefits.

If you recall, we had the following benefits for each membership tier:

- **Starter** – this plan grants customers access to exclusive training programs and nutrition guides.
- **Intermediate** – this plan grants access to all the starter resources, plus live-streamed classes each week and a 10% discount on supplements from your store.
- **Advanced** – this plan grants access to all the starter and intermediate resources, plus 1:1 coaching and a personalized training and nutrition program.

Let’s review how we can set up these membership benefits.

#### Starter Plan Benefits

The starter plan members get access to exclusive training programs and nutrition guides. This content lives on pages of our site that are restricted to be viewable by members only. (See the [memberships documentation for more info](https://woocommerce.com/document/woocommerce-memberships-restrict-content/)) Let’s grant starter-level members access to this content:

1. Edit the starter membership plan at **WooCommerce > Memberships > Membership Plans (tab)**.
2. In the “Restrict Content” section of the membership plan data, create a new rule that grants access to the pages that contain the nutrition guides and training programs.

![](https://woocommerce.com/wp-content/uploads/2024/07/starter-membership-use-case.png?strip=all&w=704)

If you want to “drip” content so that new members don’t immediately get access to all content, you can specify a time after which members will get access to the different content.

#### Intermediate Plan Benefits

The Intermediate plan members get the same benefits as the starter plan, as well as access to live-streamed classes and a [members-only discount](https://woocommerce.com/document/woocommerce-memberships-quick-start/#section-7) in the shop on supplements. Let’s set up these additional benefits for the intermediate members. For this example we’ll presume you have embedded your exclusive live stream on a page of your website.

1. Edit the Intermediate Membership plan at **WooCommerce > Memberships > Membership Plans (tab)**.
2. In the “Restrict Content” section of the membership plan data, create a new rule that grants access to the page that contains the live streamed classes.
3. In the “Purchasing Discounts” section, add a 10% discount on the “Supplements” product category and set it to. beactive, so the discount will be automatically applied for members.

![](https://woocommerce.com/wp-content/uploads/2024/07/membership-discount-woocommerce.png?strip=all&w=704)

Now your intermediate membership subscribers will get a discount, and can attend your live-streamed classes!

#### Advanced Plan Benefits

Advanced Plan Members get access to all the starter and intermediate resources, plus 1:1 coaching, and a personalized training and nutrition program! We’ll presume the 1:1 coaching will happen using a video-calling program, and clients can book times by filling out a form on the 1:1 coaching page. You can use any additional scheduling or booking integration you like on this page. The personalized training and nutrition program can be delivered directly to the member via email.

That means all we need to do is grant advanced members the same access as the other memberships, plus access to the 1:1 scheduling page:

1. Edit the Advanced Membership plan at **WooCommerce > Memberships > Membership Plans (tab)**.
2. In the “Restrict Content” section of the membership plan data, create a new rule that grants access to the page that contains the form to schedule 1:1 coaching sessions.

![](https://woocommerce.com/wp-content/uploads/2024/07/1on1-coaching-WooCommerce-Memberships-use-case.png?strip=all&w=704)

Now your advanced members can book their 1:1 sessions!

### Allowing Customers to Switch Membership Plans, While Also Limiting to one Active Membership per Customer

[↑ Back to top](#doc-title)

If you want customers to be able to switch between different subscriptions/membership plans, and only have one active membership per customer at a time, using a variable subscription product with connected membership plans sets you up nicely for this. In the [subscription switching settings](https://woocommerce.com/document/subscriptions/switching-guide/#switch-settings) at **WooCommerce > Settings > Subscriptions** you can enable switching *between subscription variations*, and then [limit the variable subscription product](https://woocommerce.com/document/subscriptions/creating-subscription-products/#limit-subscriptions) to one subscription at a time.

Here’s how that would go:

1. Set up different subscriptions as [variations](https://woocommerce.com/document/subscriptions/store-manager-guide/#section-1) of a variable subscription product.
2. Make sure a customer can only have one active Subscription for this variable product using the [limit subscription setting.](https://woocommerce.com/document/subscriptions/creating-subscription-products/#limit-subscriptions)
3. Set up access to a [Membership Plan](https://woocommerce.com/document/woocommerce-memberships-plans/) for each subscription variation
4. Purchase a test Subscription from your variable subscription product.
5. Notice that if you view the variable subscription product again, it will not let you purchase a separate subscription for a different variation, but only let you [switch the subscription](https://woocommerce.com/document/subscriptions/customers-view/subscribers-view-switch/), which is what we intended!

Now your subscribers can switch between your connected subscription & membership options, while only having one at a time.

![](https://woocommerce.com/wp-content/uploads/2024/07/limit-subscription-setting-woocommerce-subscriptions_09b628.png?strip=all&w=704)You can limit subscribers to one *active* subscription, or one subscription of *any status* depending on your store’s needs. See the documentation on the [“limit subscription” setting](https://woocommerce.com/document/subscriptions/creating-subscription-products/#limit-subscriptions) for more details.

### Sell Memberships for Access to Content

[↑ Back to top](#doc-title)

If you want subscribers to get access to exclusive products or content, the integration between WooCommerce Subscriptions and WooCommerce Memberships is a perfect solution. You can use subscriptions in combination with WooCommerce Memberships to set up subscriber/member only content or products – accessible or purchasable only when a customer’s subscription is active, plus other great features to link member access to an active subscription. Learn more about managing access to content in the [WooCommerce Memberships documentation](https://woocommerce.com/document/woocommerce-memberships/).

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

