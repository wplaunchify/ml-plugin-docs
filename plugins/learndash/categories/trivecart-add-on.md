# Trivecart Add On

*Category from LearnDash documentation*

---

## ThriveCart Integration

**Source:** [https://learndash.com/support/kb/add-ons/trivecart-add-on/thrivecart/](https://learndash.com/support/kb/add-ons/trivecart-add-on/thrivecart/)

The LearnDash ThriveCart integration is one of several options for selling your courses. [ThriveCart](https://thrivecart.com/) is a premium eCommerce solution that provides several payment options (one-time, subscriptions, trials), advanced analytics, cart abandonment recovery, A/B split testing, upsells, and more.

ThriveCart is a premium service, and at this time dont offer a free trial. You can use this integration to sell courses on your LearnDash site.

**NOTE**: You need to sign up for a ThriveCart account before you can use this integration.

If youre looking for a free and/or easier way to accept payments, consider our [built-in PayPal integration](https://learndash.com/support/docs/documentation/settings/paypal-settings/) or the free [Stripe add-on](https://learndash.com/support/docs/add-ons/stripe/).

## Who Should Use the ThriveCart Integration?

#### You should consider using the ThriveCart integration if:

- You want to use beautiful, pre-built checkout templates
- You have one, or only a few, courses to sell
- Youre looking for advanced analytics and other conversion-focused eCommerce features

#### You might not want to use the ThriveCart integration if:

- You’re selling a lot of courses (or other products)
- You want to closely manage the account creation & login process
- You’re on a tight budget

## Sign Up for a ThriveCart Account

- Go to [ThriveCart.com](https://thrivecart.com/)and follow the instructions for registering a new account
- Once your account is set up, you can navigate to your ThriveCart dashboard to access your account settings, as well as the information youll need to set up the LearnDash integration.

## Install the ThriveCart Integration

### Option 1: Add-ons Menu (requires an active LearnDash license)

In your WordPress admin area, go to LearnDash LMS > Add-Ons and locate the ThriveCart for LearnDash add-on. Click Now and once the installation is complete, click the Activate plugin button.

### Option 2: Manual Upload

[Download the plugi](https://account.learndash.com/plugins/)[n](https://account.learndash.com/plugins/) file (remember that you must be [logged i](https://account.learndash.com/)[n](https://account.learndash.com/) to download). In your WordPress admin dashboard go to Plugins > Add New and then Click to upload the EDD plugin. You’ll need to browse for the plugin .zip that you downloaded previously. Once you find it (it may be in your computer’s Downloads folder), click Open, Install Now and finally, click the Activate Plugin button.

## Create a Product in ThriveCart

Before you can connect a LearnDash course, youll need to create a product in ThriveCart that you can connect it to.

![Adding a product to ThriveCart from the Dashboard](https://learndash.com/support/wp-content/uploads/2020/10/Adding-a-product-to-ThriveCart.gif)

1. Go to [ThriveCart.com](https://thrivecart.com/) and click the Log In button
2. From your dashboard, click on Products
3. Click the Create Product button
4. Select Digital on the product type selection pop-up
5. Click the Create New Product****button
6. Fill in your product details, clicking Next on each tab until all the necessary details are complete
7. Click Save and Get URL to finish creating your product

For more information on creating your first product, check out [ThriveCart’s getting started guide.](https://support.thrivecart.com/help/just-signed-up-watch-this-first/)

## Create a Product in WordPress

Now that you have a product in ThriveCart, youll need to create a matching product in WordPress, and link it to a LearnDash course.

![Adding a ThriveCart product in WordPress](https://learndash.com/support/wp-content/uploads/2020/10/Adding-a-ThriveCart-product-in-WordPress.gif)

1. Go to LearnDash LMS > ThriveCart
2. Click Add New ThriveCart Product

### Title

Enter a title for your product. In most cases, this should match the title for your LearnDash course.

### Slug

The slug is a unique identifier for this product. It should match your product title, but

- Be all lowercase
- Spaces should be replaced with hyphens

If your product title is My Awesome Course, your slug should be:

```
my-awesome-course
```

### ThriveCart Product ID

You can locate your Product ID from the ThriveCart dashboard.

1. Click on a product to edit it
2. Look in the URL bar at the top of your browser window
3. The product ID is the number located after 
```
/products/
```

![ThriveCart Product ID](https://learndash.com/support/wp-content/uploads/2020/10/Thrivecart-product-id.png)

ThriveCart uses ascending product IDs. In general, if you have 1 product the product ID will be 1.

### Associated Courses

Select the LearnDash courses that youd like to link to this product. As soon as someone buys the product via ThriveCart, they will be automatically added to the course.

Hold down 
```
CTRL
```

(
```
CMD
```

 on Mac) to select multiple courses.

## Webhook URL

The Webhook URL is automatically created for you, but you need to provide it to ThriveCart in order to complete the integration.

.kadence-column3957_0e06f9-22 > .kt-inside-inner-col,.kadence-column3957_0e06f9-22 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column3957_0e06f9-22 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column3957_0e06f9-22 > .kt-inside-inner-col{flex-direction:column;}.kadence-column3957_0e06f9-22 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column3957_0e06f9-22 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column3957_0e06f9-22{position:relative;}@media all and (max-width: 1024px){.kadence-column3957_0e06f9-22 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column3957_0e06f9-22 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Go to LearnDash LMS > ThriveCart
2. Click on the Settings tab
3. Copy the URL from the “Webhook URL” box

.kadence-column3957_e43afc-2f > .kt-inside-inner-col,.kadence-column3957_e43afc-2f > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column3957_e43afc-2f > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column3957_e43afc-2f > .kt-inside-inner-col{flex-direction:column;}.kadence-column3957_e43afc-2f > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column3957_e43afc-2f > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column3957_e43afc-2f{position:relative;}@media all and (max-width: 1024px){.kadence-column3957_e43afc-2f > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column3957_e43afc-2f > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Webhook URL for ThriveCart](https://learndash.com/support/wp-content/uploads/2020/10/webhook-url-for-thrivecart.png)

.kadence-column3957_a05400-c9 > .kt-inside-inner-col,.kadence-column3957_a05400-c9 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column3957_a05400-c9 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column3957_a05400-c9 > .kt-inside-inner-col{flex-direction:column;}.kadence-column3957_a05400-c9 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column3957_a05400-c9 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column3957_a05400-c9{position:relative;}@media all and (max-width: 1024px){.kadence-column3957_a05400-c9 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column3957_a05400-c9 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Go to your ThriveCart dashboard
2. Click on your Profile
3. Click on Settings
4. Click on API & Webhooks
5. Click on Webhooks & Notifications
6. Click on Add a Webhook
7. Paste in your webhook URL into the box and save

.kadence-column3957_fb99a0-ea > .kt-inside-inner-col,.kadence-column3957_fb99a0-ea > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column3957_fb99a0-ea > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column3957_fb99a0-ea > .kt-inside-inner-col{flex-direction:column;}.kadence-column3957_fb99a0-ea > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column3957_fb99a0-ea > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column3957_fb99a0-ea{position:relative;}@media all and (max-width: 1024px){.kadence-column3957_fb99a0-ea > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column3957_fb99a0-ea > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Adding the webhook URL to ThriveCart](https://learndash.com/support/wp-content/uploads/2020/10/Adding-the-webhook-URL-to-ThriveCart.gif)Adding the webhook URL to ThriveCart

## Secret Word

The Secret Word is automatically generated by ThriveCart from your ThriveCart account. Having the correct Secret Word added to your LearnDash website will ensure that both platforms, ThriveCart and your website, can communicate securely and payments are well validated. Here is how you can set it up

1. On your ThriveCart dashboard, go to Settings > API & Webhooks > ThriveCart Order Validation
2. Click on View Settings
3. Copy the generated Secret Word
![ThriveCart Secret Word](https://learndash.com/support/wp-content/uploads/2020/10/thrivecart-secret-word.png)
4. Go back to your WordPress admin area
5. Navigate to LearnDash LMS > ThriveCart
6. Click on the Settings tab
7. Paste your Secret Word on to the Secret Word field

.kadence-column3957_4badf9-f5 > .kt-inside-inner-col,.kadence-column3957_4badf9-f5 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column3957_4badf9-f5 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column3957_4badf9-f5 > .kt-inside-inner-col{flex-direction:column;}.kadence-column3957_4badf9-f5 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column3957_4badf9-f5 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column3957_4badf9-f5{position:relative;}@media all and (max-width: 1024px){.kadence-column3957_4badf9-f5 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column3957_4badf9-f5 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![Add Secret Word from ThriveCart to WordPress](https://learndash.com/support/wp-content/uploads/2020/10/thrivecart-secret-word-wp-dashboard.png)Add Secret Word from ThriveCart to WordPress

If you’re having problems with the integration, you have the option to generate a new Secret Word from your ThriveCart settings page. Just make sure that you also update the Secret Word on your LearnDash ThriveCart Addon settings.

## Course Configuration

After youve configured your ThriveCart for LearnDash settings, the final thing you need to do is set up your course to accept payments.

1. In the WordPress admin area, navigate to LearnDash LMS > Courses
2. Click on the course youd like to sell
3. Click on Settings at the top
4. Scroll down to Course Access Settings
5. Set the Access Mode to Closed
6. Enter your ThriveCart product URL in the Button URL field

![Setting up course settings in LearnDash for ThriveCart](https://learndash.com/support/wp-content/uploads/2020/10/Setting-up-course-settings-on-LearnDash-for-ThriveCart.gif)

To locate your ThriveCart product URL, navigate to your Products page from your ThriveCart Dashboard, then, click the “Get URL” button next to the product that you created. It should automatically be copied to your clipboard, otherwise, copy the URL from the box that shows up on the page.

![ThriveCart product page get URL button](https://learndash.com/support/wp-content/uploads/2020/10/thrivecart-product-page1.png)

## The User Experience

Now, when someone navigates to your course page and clicks the Take this Course button, theyll be directed to ThriveCart to complete their purchase.

After payment is complete, a new user account is automatically created, and that user is enrolled into the course they just purchased.

**COURSE REMOVAL**
The ThriveCart integration will automatically remove users from a course if you refund their payment or their subscription is cancelled.

## FAQ

**Can I still use and set up “Bumps” and “Upsells”?**

Yes, you can still add “Bumps” and “Upsells” to your products from your ThriveCart product set up. Since ThriveCart will handle the checkout process, any upsells or promotions that you associate with a product will be reflected when the user is redirected to the ThriveCart checkout page. You can learn more about setting up ThriveCart “Bumps” and “Upsells” on [ThriveCart’s official support site.](https://support.thrivecart.com/)

On the LearnDash side, you have to create a new ThriveCart Product on the ThriveCart addon for every new Upsell or Bump that you associate with your main product. Under the **ThriveCart Product ID** field, you have to enter:

- **For Bumps:** 
```
bump-main product number
```

 (Substitute your main product number with the real values,e.g., 
```
bump-1
```

)
- **For Upsells:** 
```
upsell-upsell product number
```

 (Substitute your Upsell number with the real values, e.g., 
```
upsell-1
```

. You can get this number from the URL of the Upsell on your ThriveCart Upsells Page.)

**Why is it showing two transactions on my records?**

For LearnDash 4.5.0 or newer, there will be 2 transaction record per single transaction. This is normal and your user will not be charged twice for each transaction. See our explanation on this on our [Payment Transaction Records documentation.](https://learndash.com/support/docs/core/settings/payments/)

---

