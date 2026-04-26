# Woocommerce Add On

*Category from LearnDash documentation*

---

## WooCommerce Integration

**Source:** [https://learndash.com/support/kb/add-ons/woocommerce-add-on/woocommerce-integration/](https://learndash.com/support/kb/add-ons/woocommerce-add-on/woocommerce-integration/)

Unlock the power of LearnDash and WooCommerce to elevate your e-learning platform with features designed to streamline your processes. You can use the WooCommerce integration to connect courses and groups effortlessly to WooCommerce products, empower retroactive enrollment management for courses and groups, and seamlessly regulate enrollment status based on WooCommerce subscription expiration (WooCommerce Subscriptions add-on required).

## Requirements

To get started with the WooCommerce integration, you’ll need to have the LearnDash and WooCommerce plugins installed and activated. If you are planning to use subscriptions in WooCommerce, you’ll also need to have [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) installed and activated.

## Installation

### Option 1: Add-ons Menu (requires activated LearnDash license )

1. Navigate to LearnDash LMS > Add-ons in your WordPress dashboard
2. Find the WooCommerce for LearnDash add-on under the Available section
3. Click the Install button on the right side
4. Click the Activate button for WooCommerce for LearnDash under the Installed section

### Option 2: Manual Upload

1. Visit [https://account.learndash.com/plugins](https://account.learndash.com/plugins)
2. Click the Download link for the WooCommerce for LearnDash addon
3. Once downloaded, visit Plugins > Add New Plugin in your WordPress dashboard
4. Click the Upload Plugin button at the top of the screen
5. Click the Choose File button and select the WooCommerce for LearnDash addon file that you downloaded
6. Click Install Now, then click on Activate Plugin

## Set Up Your Product

The integration allows you to associate both courses and/or groups to a product so that when your users purchase a product, they are enrolled into the courses/groups based on that specific order status.

**NOTE**: If youre new to WooCommerce, consider reviewing the [Getting Started](https://woocommerce.com/documentation/woocommerce/getting-started/) guide before continuing. Well show you how to create a simple product, but there are many other setup options to consider.

### Supported Product Types

WooCommerce supports various [product types](https://woocommerce.com/document/managing-products/product-editor-settings/#product-data) when configuring a product. You have the ability to associate courses/groups to the following types:

- Simple product
- Variable product
- Simple subscription
- Variable subscription
- Course

Depending upon your setup, youll need to choose the appropriate product type. Most users select either the Simple product or Course product type.

Before continuing, you’ll want to ensure that your courses/groups are already published and using the Closed access mode.

### Course/Group Product Association

If you dont already have a product created, navigate to Products > Add New in your WordPress dashboard. Otherwise, you can find your existing products at Products > All Products and select the product you want to modify.

The example below walks you through association if you are using either the Simple product, Simple subscription or Course product types mentioned above.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-product-data-metabox.png)

1. Find the Product data metabox
2. Click inside either the LearnDash Courses or LearnDash Groups fields, search for your course/group and click on it
3. You can add multiple courses/groups to a product by clicking on the fields again, searching, and then clicking
4. Click Update to ensure that the association saves

If you are using the Variable product or Variable subscription types, you’ll need to take a few additional steps. If you aren’t familiar with using variable products in WooCommerce, we suggest you check out their [Variable Products](https://woocommerce.com/document/variable-product) documentation for more information.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocomerce-variable-product-variations.png)

1. Find the Product data metabox
2. Click the Attributes tab, then click Add New
3. Configure a name and value(s) for the attributes following the instructions shown in the text area
4. Click on Save Attributes once you are done
5. Click the Variations tab, then either generate them automatically or add them manually
6. Click on the Variation Item row to expand the settings
7. Add your courses/groups using the LearnDash Courses and LearnDash Groups fields
8. Click on Save Changes, then click on Update

## Additional Course/Group Configuration

If you want to further optimize the checkout process for your users, you can add the product URL as the Button URL for the course/group.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-closed-button-url.png)

1. Visit your product on the front end of your site and copy the URL
2. Visit LearnDash LMS > Courses or LearnDash LMS > Groups and select the course/group you want to modify
3. Click on the Settings tab
4. Find the Access Mode section, paste the product URL into the Button URL field
5. Click Update to save your changes

Now, when visiting your course/group on the front end of your site, if users click on the button to enroll, they will be taken directly to the product page where they can make a purchase.

**TIP**: Want to speed up the checkout process? You can add the product to a users cart AND redirect them to the cart page all in one step. In the Button URL field, enter your cart URL (typically /cart/), followed by ?add-to-cart=123, where 123 is the WooCommerce product ID.

The entire URL will look like this:

```
https://yoursite.com/cart/?add-to-cart=123
```

## Additional Tips

While not required, there are a few additional things you might want to consider with your setup.

### Add a Purchase Note

WooCommerce has a built-in field called Purchase Note. This note is shown to the customer on the purchase confirmation page, or in the customer’s receipt email after a successful purchase.

Consider using this field to provide instructions or next steps for taking your course, along with a link to the course page.

1. Go to Products
2. Click on the product youd like to add a purchase note for
3. Scroll down to the Product data section
4. Click on the Advanced tab
5. Enter your instructions and/or a link to your course

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-purchase-note.jpg)

This field accepts HTML. Heres an example to create a link to your course. Replace the URL with the URL to your specific course.

```
<a href=https://yoursite.com/courses/course-name/>Start This Course</a>
```

### Post Purchase Redirect

After purchase, your customers are sent to the WooCommerce purchase confirmation page. You can bypass this step and send customers directly to the course by utilizing the Thank You Page for WooCommerce plugin:

> Thank You Page for WooCommerce

Once you have the plugin installed and activated, youll find a Thank You URL field when editing your product inside of the Product data metabox under the General tab.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-thank-you-url.png)

### Sales Funnel Using CartFlows

To optimize the checkout process for conversions, we recommend using the free [CartFlows](https://wordpress.org/plugins/cartflows/) plugin which has an integration with LearnDash.

## The User Experience

**NOTE:**When testing, we recommend visiting your site in a private browsing window. To see how the integration works, you should be logged out of your account (by default, administrators will already be enrolled in the course).

Once everything is set up correctly, there are a few ways in which potential customers can go through the process of purchasing one of your courses/groups. See the three examples below:

1. Customers start on your main shop page, which is automatically created by WooCommerce and contains a list of all of your products, including the ones that youve set up for your courses/groups:
1. The customers click on a product to visit the product page
2. They add the product to their cart
3. They complete the WooCommerce checkout process
4. If online payment was successful, they are enrolled into the configured courses/groups
2. The customer lands on your LearnDash course/group page first:
1. They click the Take this Course or Join Group button
2. They continue through the checkout process outlined above
3. You create a separate landing page including a purchase button and link directly to the WooCommerce cart, bypassing the product page altogether: 
```
https://yoursite.com/cart/?add-to-cart=123
```

**NOTE:**When going through the WooCommerce checkout process, users will be required to create an account during checkout. This is to ensure that enrollment into courses/groups associated with the product is successful.

## Access and Enrollment Status

As of LearnDash WooCommerce 2.0.0, you can find the Enrollment Status option under LearnDash LMS > WooCommerce. This feature allows you full control over how a customer gains access to a course/group based on the order and subscription status.

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-enrollment-status.png)

The Enrollment Status feature contains a list of all order and subscription ( if using WooCommerce Subscriptions ) statuses and a toggle switch to control whether a user is enrolled in the courses/groups associated with the products in that order.

### Order/Subscription Status

This column lists the different types of order and subscription statuses that are configured within WooCommerce, custom statuses are supported as well.

### Access

This column has a Deny/Grant toggle switch that controls a users enrollment status into any courses/groups associated with a product(s) within that order.

## Retroactive Course Access Tool

If you find that some customers dont have the correct access to a course/group, you can use the retroactive course access tool to parse through the list of users on your site and update their enrollment status. To use this tool:

1. Navigate to WooCommerce > Status
2. Click on the Tools tab
3. Scroll down to the Give LearnDash Students Retroactive Access row and click on Run

The tool will control enrollment based on the configuration set in the Enrollment Status feature.

## Subscription Access Removal on Expiration

By default, if you have subscriptions set up, the associated course/group access will be removed as soon as the subscription expires. However, you can disable this default behavior:

![](https://learndash.com/support/wp-content/uploads/2019/03/learndash-woocommerce-subscription-access-removal.png)

1. Navigate to WooCommerce > Settings
2. Click on the Subscriptions tab
3. Scroll down to the LearnDash section and ensure that the checkbox for the Access Removal on Expiration setting is checked
4. Click on Save changes

## Disabling Auto-Complete for LearnDash WooCommerce Orders

Imagine youre trying to balance selling online courses and physical products from your WordPress site that runs LearnDash and WooCommerce. Normally, when someone buys a course, WooCommerce will automatically mark the order as “Complete” after payment goes through.Thats great if you only deal with digital items, but if you plan to ship physical products alongside your courses, you’ll most likely want to control when the order is marked as complete.

Heres an easy way to stop that automatic order completion for courses so you can manually mark orders as “Complete” once your physical products ship:

## How to Disable Auto-Complete for Orders with LearnDash Courses:

1. **Add a Filter to Stop Auto-Completion:**Youll need to place a small piece of code in your themes functions.php file or use a plugin that allows you to add custom code (like Code Snippets). The code you need is:

```
add_filter( 'learndash_woocommerce_auto_complete_order', '__return_false' );
```

This filter ensures that when an order includes a LearnDash course, it wont be automatically marked as Complete.

1. **Manual Order Completion**: Once this filter is in place, any order that includes a LearnDash course will remain in the “Processing” state. When youre ready after shipping any physical products you can manually change the order status to “Complete.”

## Why This Is Helpful:

**Better Order Management**: Youll have more control over when an order is marked as complete, which is crucial when managing a mix of digital and physical products.

**Clearer Customer Communication**: Your customers wont get an “Order Complete” notification until everything (both courses and physical items) has been fulfilled, leading to clearer communication.

## Want to Switch Back?

If at any point you decide to return to the default behavior (where LearnDash course orders are automatically marked complete), just remove or comment out the line of code from your functions.php file or the code snippet plugin you used.

### Pro Tip:

Always make sure to back up your site or use a staging environment to test changes before applying them to your live site. This will save you from potential issues down the line.

## FAQ

**Why wasnt a user created and enrolled into the associated course/group after purchase?**

If a user is not logged into your site already, during the checkout process an account will be required to be created in order to complete the payment. This requirement helps ensure that the user is properly enrolled into the associated course/group that is associated with the product being purchased.

**Which payment gateways can I use with WooCommerce?**

Any [officially supported payment gateway](https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?categoryIds=1023&collections=product&page=1) should work.

**Is this integration compatible with WooCommerce Subscriptions?**

Yes!

**Can I disable the account required setting during checkout?**

Yes, you can use a snippet of code to disable this requirement. You can use a plugin such as [Code Snippets](https://wordpress.org/plugins/code-snippets/) to control this or add the following code into your active themes functions.php file:

```
add_filter( 'learndash_woocommerce_registration_required', function() { return false; } );
```

---

