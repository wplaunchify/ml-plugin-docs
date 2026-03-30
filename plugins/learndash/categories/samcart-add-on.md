# Samcart Add On

*Category from LearnDash documentation*

---

## SamCart Integration

**Source:** [https://learndash.com/support/kb/add-ons/samcart-add-on/samcart/](https://learndash.com/support/kb/add-ons/samcart-add-on/samcart/)

The LearnDash SamCart integration is one of several options for selling your courses. [SamCart](https://www.learndash.com/samcart-homepage) is a premium ecommerce solution that provides several payment options (one-time, subscriptions, trials), advanced analytics, cart abandonment recovery, A/B split testing and more.

SamCart is a premium service, but they do offer a free trial so you can test it out before making a decision. If you decide to stick with it, you can use this integration to sell courses on your LearnDash site.

**NOTE:**You need to sign up for a [SamCart account](https://www.learndash.com/samcart-homepage) before you can use this integration.

If you’re looking for a free and/or easier way to accept payments, consider our [built-in PayPal integration](https://learndash.com/support/docs/documentation/settings/paypal-settings/) or the free [Stripe add-on](https://learndash.com/support/docs/add-ons/stripe/).

## Who Should Use the SamCart Integration?

#### You should consider using the SamCart integration if:

- You want to use beautiful, pre-built checkout templates
- You have one, or only a few, courses to sell
- You’re looking for advanced analytics and other conversion-focused ecommerce features

#### You might not want to use the SamCart integration if:

- You’re selling a lot of courses (or other products)
- You want to closely manage the account creation and login process
- You’re on a tight budget

## Sign Up for a SamCart Account

- Go to [samcart.com](https://www.samcart.com/) and follow the instructions for registering a new account
- Once your account is set up, you can head over to your SamCart dashboard to access your account settings, as well as the information you’ll need to set up the LearnDash integration

## Install the SamCart Integration

#### Option 1: Add-ons Menu (requires an active LearnDash license)

In your WordPress admin area, go to LearnDash LMS > Add-Ons and locate the SamCart for LearnDash add-on. Click the Install Now button and once the installation is complete, click the Activate plugin button.

![SamCart Integration plugin card](https://learndash.com/support/wp-content/uploads/2019/03/learndash-samcart-integration-plugin-card-1.jpg)

#### Option 2: Manual Upload

[Download the p](https://support.learndash.com/download/195521/)[lugin file](https://account.learndash.com/plugins/)(remember that you must be [logged in](https://account.learndash.com/) to download). In your WordPress admin dashboard go to Plugins > Add New and then Click to upload the plugin. You’ll need to browse for the plugin .zip that you downloaded previously. Once you find it (it may be in your computer’s Downloads folder), click Open, Install Now and finally, click the Activate Plugin button.

## Create a Product in SamCart

Before you can connect a LearnDash course, you’ll need to create a product in SamCart that you can connect it to.

![SamCart create a product](https://learndash.com/support/wp-content/uploads/2019/03/samcart-create-product.gif)

1. Go to [samcart.com](https://www.learndash.com/samcart-homepage) and click the Log In button
2. From your dashboard, click on Products
3. Click the New Product button
4. Fill in your product details
5. Click Create Product

For more information on creating your first product, check out [SamCart’s getting started guide](https://help.samcart.com/support/solutions/articles/60000647885--2-create-your-first-product-page).

## Create a Product in WordPress

Now that you have a product in SamCart, you’ll need to create a matching product in WordPress, and link it to a LearnDash course. Go to LearnDash LMS > SamCart and click Add New Samcart Product

![SamCart, creating product in WordPress](https://learndash.com/support/wp-content/uploads/2019/03/samcart-create-product-wordpress.gif)

### Title

Enter a title for your product. In most cases, this should match the title for your LearnDash course.

### Slug

The slug is a unique identifier for this product. It should match your product title, but…

- Be all lowercase
- Spaces should be replaced with hyphens

In other words, If your product title is My Awesome Course, your slug should be: my-awesome-course

### SamCart Product ID

You can locate your Product ID from the SamCart dashboard, here’s how you’d do it:

Click on a product to edit it and then look in the URL bar at the top of your browser window. The product ID is the number located after 
```
/products/
```

1. 

![SamCart product ID in URL](https://learndash.com/support/wp-content/uploads/2019/03/samcart-product-id-in-url.jpg)

### Associated Courses

Select the LearnDash courses that you’d like to link to this product. As soon as someone buys the product via SamCart, they will be automatically added to the course.

Hold down 
```
CTRL
```

 (
```
CMD
```

 on Mac) to select multiple courses.

### Notification URL

The notification URL is automatically created for you, but you need to provide it to SamCart in order to complete the integration.

1. Copy the URL from the Notification URL box
2. Go to your SamCart dashboard
3. Click on Products
4. Click on the product that you’re linking
5. Go to the Advanced Settings tab
6. Scroll down to the Advanced area
7. Paste your Notification URL into the box

![SamCart notification URL setting](https://learndash.com/support/wp-content/uploads/2019/03/samcart-notification-url.jpg)

## Course Configuration

After you’ve configured your SamCart for LearnDash settings, the final thing you need to do is set up your course to accept payments.

1. In the WordPress admin area, navigate to LearnDash LMS > Courses
2. Click on the course you’d like to sell
3. Click on Settings at the top
4. Scroll down to Course Access Settings
5. Set the “Access Mode” to Closed
6. Enter your SamCart product URL in the Button URL field

![LearnDash closed course, enter SamCart URL](https://learndash.com/support/wp-content/uploads/2019/03/learndash-closed-course-samcart-button-url-animation.gif)

To locate your SamCart product URL, click the eye icon in the top-right corner of your SamCart product details page:

![SamCart, how to get product URL](https://learndash.com/support/wp-content/uploads/2019/03/samcart-preview-icon-get-product-url.jpg)

## The User Experience

Now, when someone navigates to your course page and clicks the “Take this Course” button, they’ll be directed to SamCart to complete their purchase.

After payment is complete, a new user account is automatically created, and that user is enrolled into the course they just purchased.

**COURSE REMOVAL**
The SamCart integration will automatically remove users from a course if you refund their payment or their subscription is cancelled.

## FAQ

**Which payment gateways does SamCart support?** As of May 2019, SamCart supports Stripe and PayPal. Please check [SamCart’s docs on supported gateways](https://help.samcart.com/support/solutions/articles/60000647884-connecting-payment-processors) for an up-to-date list.

---

