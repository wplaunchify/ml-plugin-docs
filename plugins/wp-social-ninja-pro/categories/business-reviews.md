# Business Reviews

*Category from WP Social Ninja Pro documentation*

---

## Business Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/](https://docs.wpsocialninja.com/guide/business-reviews/)

# Business Reviews ​

Your business receives valuable **Business Reviews** on multiple social networking sites like [Google My Business](./google-configuration), [Facebook](./facebook-configuration), [Airbnb](./airbnb-configuration), [Yelp](./yelp-configuration), [Tripadvisor](./tripadvisor-configuration), [Ali Express](./aliexpress-configuration), **Amazon**, [Booking.com](./booking-com-configuration), [Trustpilot](./trustpilot-configuration), and [WooCommerce](./woocommerce-reviews). It's no surprise you want to add them all to your WordPress site so that you can display all the reviews consecutively.

**WP Social Ninja** will let you add different Reviews on your site in just a few clicks. For instance, Social Platforms like Google My Business and Facebook. WP Social Ninja will help you to add all those sites with zero hassle.

![social review platform](https://docs.wpsocialninja.com/assets/business-reviews-1.gg9EKVaj.webp)

Our Plugin has the power to engage with your customers by gathering reviews and recommendations in your business like never before.

We have nine platforms to offer at the moment. More platforms will come soon!

---

## Airbnb Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/airbnb-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/airbnb-configuration.html)

# Airbnb Reviews ​

This guide provides step-by-step instructions for connecting your Airbnb reviews with WP Social Ninja. Because Airbnb does not offer an official public API for reviews, this process requires a manual workaround to find the necessary connection keys directly from your Airbnb listing page.

## Connect Your Airbnb for Reviews ​

This guide will show you how to connect your Airbnb reviews to WP Social Ninja.

#### Why is this Manual Process Needed? ​

Unlike other platforms, Airbnb does not offer a public API that allows plugins like WP Social Ninja to easily fetch reviews. The standard connection method may not work reliably.

To solve this, we will use a manual workaround with two parts: finding a unique **API Key** and **Secret Key** to fetch your **reviews**, and copying a full request URL to fetch your listing's **name and star rating** ("Business Info"). By adding these to your WordPress site, you give WP Social Ninja the credentials it needs to securely and successfully fetch your data.

TIP

Only the **API Key** and **Room Reviews Secret Key** are required to display reviews and the review count. The **Business Info** step is recommended — skip it and your reviews will still show, just without the listing's name and star rating.**Disclaimer**: This method uses Airbnb's internal development tools. Because it is not an official public solution, Airbnb may change these values in the future, which could cause the connection to break. If this happens, you will need to repeat this process to get fresh values.

### Step 1: Find Your API Key and Secret Key ​

In this step, we will use your browser's developer tools to find the required keys from your Airbnb listing page.

- **Open Your Airbnb Listing**

- Using a desktop browser (like Chrome or Firefox), navigate to the Airbnb listing page (**Room** or **Experience**) that you want to get reviews from.
- **Open Developer Tools**

- Right-click anywhere on the page and select **Inspect** from the menu. This will open the Developer Tools panel.
- In the Developer Tools panel, click on the **Network** tab.
- The term you search for in the Network tab's **Filter** box depends on the type of listing and information you need. Use the appropriate term from the list below:
- **For Room Reviews:** Search for **StaysPdpReviewsQuery**.
- **For a Room's Business Info**: Search for **StaysPdpSections**.
- **For Experience/Service Reviews**: Search for **ReviewsModalContentQuery**.

NOTE

To find 
```
ReviewsModalContentQuery
```

, you must click on the **Show all reviews** button on the Airbnb page; only then will this request appear in the list.![airbnb review](https://docs.wpsocialninja.com/assets/show-all-review._gt24TUJ.webp)

After typing the correct term, refresh the page and click on the request that appears in the list to open its details.

TIP

The **Room Reviews** secret key (from 
```
StaysPdpReviewsQuery
```

) is required for reviews and the review count to work. The **Business Info** request (
```
StaysPdpSections
```

, below) is recommended in addition, so your listing's name and star rating display correctly — this matters most if you're adding several listings, since without it they can appear unlabeled.
### For Room Reviews (Required) ​

- In the **Filter** box at the top of the Network tab, type StaysPdpReviewsQuery and press Enter.
- Refresh your Airbnb listing page. You should see a file with the name StaysPdpReviewsQuery appear in the network requests list.
- Click on the StaysPdpReviewsQuery file name to open its details.

**Copy the Required Keys**

You will need to find and copy three pieces of information from this file:

- **The API Key:**- In the details panel, click on the **Headers** tab.
- Scroll down until you find the **x-airbnb-api-key**.
- Copy the long string of characters next to it. This is your API Key.

![airbnb api 1](https://docs.wpsocialninja.com/assets/reviewsquery-1.68K8WfWg.webp)

**The Secret Key:**

- Now, click on the **Payload** tab (it might also be called "Request").
- Navigate through extensions → persistedQuery.
- You will see a **sha256Hash**. Copy the long string of characters next to it. This is your Secret Key.

![airbnb api 2](https://docs.wpsocialninja.com/assets/reviewsquery-2.C1I82bDM.webp)

### Find the Business Info Payload (Recommended) ​

Unlike the Reviews keys above, for Business Info you don't need to open the request and dig for one specific field — you'll copy the **entire request URL** instead. Copying the whole request guarantees everything in it always matches, which is what makes this method reliable.

- In the **Filter** box at the top of the Network tab, type **StaysPdpSections** and press Enter.
- Refresh your Airbnb listing page. You should see a request named **StaysPdpSections** appear in the network requests list.

NEEDS SCREENSHOT

- **What to capture:** The Network tab with 
```
StaysPdpSections
```

 typed in the **Filter** box and the matching request visible in the list below it.
- **Where from:** Browser DevTools → **Network** tab, on an Airbnb room listing page, right after filtering and reloading.
- **Suggested filename:** 
```
business-info-request-list.webp
```- **Right-click** on the **StaysPdpSections** request in the list (no need to open it).
- From the context menu, hover over **Copy**, then click **Copy URL**.

NEEDS SCREENSHOT

- **What to capture:** The right-click context menu open on the 
```
StaysPdpSections
```

 request row, with **Copy → Copy URL** visible/highlighted.
- **Where from:** Same Network tab — right-click directly on the 
```
StaysPdpSections
```

 row itself (not inside its details panel).
- **Suggested filename:** 
```
business-info-copy-url.webp
```That copied URL is your Business Info payload — you'll paste the whole thing in Step 2.

TIP

Because the payload is copied as one complete request, it never gets out of sync — and the same payload works for **every listing** on your site. You only need to capture it once.
### Step 2: Add the Keys to Your WordPress Site ​

To make these keys work, you need to add a small code snippet to your WordPress site. The safest and easiest way to do this is by using a **Code Snippets** plugin. We recommend [FluentSnippets](https://fluentsnippets.com/).

#### Create a New Snippet ​

Go to **FluentSnippets → Add New Snippet**.

- Give your snippet a title, like "Airbnb API Keys for WP Social Ninja".
- **Paste the Code**

Copy the code block below and paste it into the "Code" area of your new snippet.

**Add Your Values**

- Replace 
```
paste_the_key_here
```

 in the first two filters with the **API Key** and **Room Reviews Secret Key** you copied in Step 1.
- Replace 
```
paste_the_copied_url_here
```

 in the Business Info filter with the **full URL** you copied in the Business Info step above.
- If you're also fetching Experience/Service reviews, replace the last filter's 
```
paste_the_key_here
```

 with that Secret Key too.

php
```
add_filter('wpsocialreviews/airbnb_api_key', function(){
    return 'paste_the_key_here';
});

// for room reviews
add_filter('wpsocialreviews/airbnb_rooms_api_secret_key', function(){
    return 'paste_the_key_here';
});

// for room business info (name & star rating) — paste the whole copied URL
add_filter('wpsocialreviews/airbnb_rooms_business_info_payload', function(){
    return 'paste_the_copied_url_here';
});

// for experiences or services
add_filter('wpsocialreviews/airbnb_experiences_api_secret_key', function(){
    return 'paste_the_key_here';
});
```**Important: Two Values Are Required, One Is Recommended**

To fetch reviews (and the review count), you **must** provide:

- **The Main API Key:** This is the master key for the connection.
- **The Room Reviews Key:** This key fetches the customer reviews.

Additionally **recommended**:

- **The Business Info Payload:** Without this, reviews still display, but the listing's name and star rating won't — this matters most if you're adding several listings, since they can otherwise look identical.Click the **Save Snippets and Activate** button at the top of the page.

## Airbnb Configuration ​

To add **Airbnb Reviews** on your site, it is obvious that you need somehow to connect with the Airbnb server to fetch the reviews from their repositories; however, it is not a difficult task for the non-techies as we have created the easiest way to aggregate reviews.

To add Airbnb Reviews to your site, first, click on Airbnb.

![airbnb platform 1](https://docs.wpsocialninja.com/assets/airbnb-config-1.BoKXXGjt.webp)

Now paste your room, experience or business URL here.

![airbnb platform 2](https://docs.wpsocialninja.com/assets/airbnb-config-2.BXVcBBlc.webp)

You can find the URL in the address bar of your Airbnb room, experience, or business page, just like in the screenshot below.

![airbnb platform 3](https://docs.wpsocialninja.com/assets/room-url.kMU0CPvm.webp)

Paste the URL into the field and hit **Save**. Once connected, you’ll see your Airbnb account linked with Social Ninja. Next, click **Create a Template** to start displaying your Airbnb reviews.

![airbnb platform 4](https://docs.wpsocialninja.com/assets/airbnb-config-3.Ze5NFWWt.webp)

Your template is now ready! From here, you can customize it the way you like. For more details, check out this [documentation](./template-style-connection) on template customization.

INFO

You can fetch up to **100 reviews** for each business on your site. If you're using the **free version of WP Social Ninja**, you can fetch a maximum of **5 Airbnb reviews**.However, downloading reviews sometimes might take some time. If you want, you can delete this account by clicking on the **Cross** icon.

You can even include additional business accounts when clicking the **Add More Business** button. Just enter the business name the same way as before & click the **Save** button.

TIP

If you save and see a message that reviews were fetched but the business information couldn't be retrieved, your Business Info payload has likely expired — Airbnb periodically rotates these values. Just repeat the [Business Info step](#find-the-business-info-payload-recommended) above to re-copy a fresh request URL. Reviews and the review count aren't affected by this rotation.

---

## AliExpress Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/aliexpress-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/aliexpress-configuration.html)

# AliExpress Reviews ​

This guide will show you exactly how to connect an AliExpress product page to your WP Social Ninja plugin. This is a very powerful feature for displaying **Business Reviews** on your own website.

Connecting an AliExpress product is a very simple and direct processe. You do not need any complicated API Keys, secret codes, or developer accounts. The only thing you need is the website link (the URL) for the product you want to get reviews from.

## Why is this feature so useful? (A Use Case) ​

> Imagine you have a dropshipping or affiliate e-commerce store. You've written a great description for a product, but you have no customer reviews on your site, which can make new buyers hesitant.This feature lets you go to the original product page on AliExpress, copy its URL, and paste it into WP Social Ninja. The plugin will then fetch all the customer reviews—including 5-star ratings and real customer photos—from that AliExpress page and display them beautifully on your product page.This instantly adds massive social proof and trust, which can directly increase your sales and conversions.

## How to Connect an AliExpress Product ​

Follow these simple steps to get your product connected in less than a minute.

### Step 1: Go to the "Platforms" Menu ​

First, please log in to your WordPress dashboard.

On the main menu on the left-hand side, find the **WP Social Ninja**. Click on it, and then select the [Platforms](../getting-started/all-platforms-of-wp-social-ninja). This will take you to the central hub where you can connect all your social media and review accounts.

### Step 2: Open the AliExpress Connection Window ​

Find the **AliExpress** row. On the right side of that row, click the **Settings icon** button.

![AliExpress Review](https://docs.wpsocialninja.com/assets/aliexpress-review-1.DyIWo5I3.webp)

### Step 3: Find the "Product URL" Field ​

A pop-up window will appear on your screen with the title "Connect Your AliExpress Account."

Inside this pop-up, you will see fields labeled **Add you Product ID here** and **Add your Product Name here**. This is the spot where you will paste the link to your AliExpress product.

![AliExpress Review](https://docs.wpsocialninja.com/assets/aliexpress-review-2.CRX3GpQi.webp)

### Step 4: Find and Copy Your AliExpress Product URL ​

This is the only piece of information you need to find, and it's very easy.

1. Go to the [AliExpress.com](https://www.aliexpress.com/) website.
2. Use the search bar on AliExpress to find the exact product you want to get reviews from.
3. Click on the product to go to its main details page.
4. Once the page has fully loaded, go to the address bar at the very top of your browser. Click inside it to select the entire website address (the URL).
5. And **Copy the Product Name**.
6. The URL should look something like this: 
```
https://www.aliexpress.com/item/1234567890.html
```

![AliExpress Review](https://docs.wpsocialninja.com/assets/aliexpress-review-3.DXktLBMk.webp)

### Step 5: Connect Your Product in WP Social Ninja ​

Now, go back to your WordPress dashboard browser tab (where the pop-up is still open from Step 3).

1. Paste the **Product Name** into the "Product Name" field.
2. Paste the **full URL** you just copied from AliExpress into the “Product ID” field.
3. Click the **Save** button.

![AliExpress Review](https://docs.wpsocialninja.com/assets/aliexpress-review-4.NiQyoPzl.webp)

### Step 6: You're Connected! ​

The pop-up window will close, and the page will refresh.

You will be returned to the main **Platforms** page. You will now see that the **AliExpress** row has a green "Connected" status and lists the product you just added. This confirms that WP Social Ninja can now communicate with that product page to fetch its reviews.

![AliExpress Review](https://docs.wpsocialninja.com/assets/aliexpress-review-5.NuYT2rlX.webp)

## Next Steps ​

Congratulations! Your AliExpress product is fully connected and ready to start syncing reviews.

Now that your product is connected, you're ready for the fun part:

- Click the **Add New Template** button to go to the [template editor](./create-template) and start designing your **Business Reviews** template to show off those great AliExpress reviews.
- You can connect more products at any time by clicking the **Add More Business** button and repeating this process.

---

## Booking.com Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/booking-com-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/booking-com-configuration.html)

# Booking.com Reviews ​

WP Social Ninja enables you to showcase reviews directly from your Booking.com business profile, adding credibility to your business and enhancing trust among potential customers. With this feature, you can create customized templates to make your reviews look more appealing and aligned with your website's style.

In this guide, we’ll walk you through the steps to display Booking.com reviews on your website.

TIP

You’ll need WP Social Ninja Pro to access and display Booking.com reviews on your site.
## Enable Booking.com Platform ​

Navigate to your **WP Social Ninja** dashboard and select [Platform](../getting-started/all-platforms-of-wp-social-ninja) from the navigation bar. Locate the **Booking Platform** and click on the **Settings** icon to configure it.

![booking review 1](https://docs.wpsocialninja.com/assets/booking-review-1.D_QmDkBz.webp)

## Steps to Configure Booking.com Reviews ​

Before fetching reviews from Booking.com using your Business Profile URL, you need to complete three additional steps:

- **Copy the Cookie AWS-WAF-Token Cookie Value from the Booking.com Site**
- **Add the AWS-WAF-Token Cookie Value to a Snippet**

Below is a step-by-step guide to complete these settings:

## Copy the Cookie AWS-WAF-Token ​

Open **Booking.com** and navigate to the business profile whose reviews you want to display on your website.

Access your browser's **Inspect** mode (usually by right-clicking on the page and selecting "Inspect").

In the Inspect mode, go to the **Application** tab and select **Cookies**.

Search for the **AWS-WAF-Token** in the cookies list then copy the value of the AWS-WAF-Token cookie and save it for later use.

![booking review 4](https://docs.wpsocialninja.com/assets/booking-review-2.mhFZVfE4.webp)

## Add the AWS-WAF-Token in a Snippet ​

To use the **AWS-WAF-Token** cookie value you copied earlier, you'll need to add it to your site using a code snippet. This can be done easily with a snippet plugin.

TIP

We recommend using **FluentSnippet** on your WordPress site for a seamless experience. However, you can use any other snippet plugin of your choice.Follow these steps to add the code snippet:

- Open **FluentSnippet** and click on the **Create Snippet** button.

php
```
add_filter('wpsocialreviews/booking_header_request_cookie_set', function($headers) {

    $headers['cookie'] = 'aws-waf-token=(Cookie value goes here)';    return $headers;

});
```- In the code editor field, insert the code above:
- Replace **Cookie value goes here** with the **AWS-WAF-Token** value you copied earlier.
- Save the snippet to apply the changes.

![booking review 5](https://docs.wpsocialninja.com/assets/booking-review-3.CYifDbsm.webp)

## Business URL from Booking ​

Navigate to your business profile on Booking.com and copy the **Business URL** directly from the address bar of your browser.

![booking review 6](https://docs.wpsocialninja.com/assets/booking-review-4.C3qT7xuT.webp)

Next, return to your **WP Social Ninja Booking Configuration** and paste the **Booking.com Business Profile URL** you copied earlier. Click on the **Save** button, and you’ll see that your business has been successfully added.

![booking review 2](https://docs.wpsocialninja.com/assets/booking-review-5.2EUWhCWM.webp)

If you wish to add another business profile, simply click on the **Add More Business** button and repeat the same steps.

To customize your **Booking.com Reviews Template**, click on the **Create a Template** button and start personalizing your [template](./create-template). Keep in mind, if you don't create a template, your reviews won't be displayed, as the template won't be created automatically.

![booking review 7](https://docs.wpsocialninja.com/assets/booking-review-6.CNOVzlJL.webp)

That's how you can easily fetch your **Booking.com** business profile reviews on your site using **WP Social Ninja**.

---

## Collect WooCommerce/Custom Reviews with Fluent Forms ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/collect-woocommerce-custom-reviews-with-fluent-forms.html](https://docs.wpsocialninja.com/guide/business-reviews/collect-woocommerce-custom-reviews-with-fluent-forms.html)

# Collect WooCommerce/Custom Reviews with Fluent Forms ​

Collecting customer reviews is one of the best ways to build trust and increase sales. By default, WooCommerce gives you a simple review form, but it’s limited — no image uploads, no extra fields, and no flexibility.

With **WP Social Ninja**, you can connect **Fluent Forms** to collect reviews in a smarter way. This unlocks two powerful use cases:

- **WooCommerce reviews with Fluent Forms** → Replace the standard WooCommerce form with a Fluent Form.
- **Custom reviews and ratings with Fluent Forms** → Collect standalone reviews anywhere on your site, such as testimonials or service feedback.

Both methods share the same basic setup: you’ll create a form, integrate it, design a template, and then decide whether to link it with WooCommerce or display it as a custom review feed.

## Why Collect Reviews with Fluent Forms? ​

Here’s why Fluent Forms + WP Social Ninja is better than the default WooCommerce setup:

- Add **custom fields** like review title, product photo, or ratings.
- Collect reviews **beyond WooCommerce products**, e.g., for services, memberships, or courses.
- Customize how the **"Write a Review" button** looks and works.
- Display reviews beautifully inside **WP Social Ninja templates**.

Example: If you sell perfumes, you could add an “Upload your photo” field so customers can show how they use the product. If you run an online course, you could use the same system to collect detailed testimonials from students.

## Step 1: Create a Review Form in Fluent Forms ​

First, you need a form where users can submit their reviews. For this, go to **Fluent Forms → Add New**. Choose a **Blank Form** or use a template. Then, dd the fields you want for reviews. For example:

- **Name** → Who is leaving the review.
- **Email** → Optional but useful for verification.
- **Review Title** → A short headline for the review.
- **Review Text** → The main review content.
- **Hidden Field** → Add a Hidden field (this step is required). Then, from the input customization section, set the Default Value to this shortcode: 
```
{embed_post.ID}
```

.
- **Rating** → Add a star rating field (You will get a Social Ninja Rating input field in Fluent Forms free version)

After that, **Save** the form and **Copy** the **Form Shortcode ID** — you’ll need it later to connect with WP Social Ninja.

![Create a Review Form ](https://docs.wpsocialninja.com/assets/review-form.C7RmEbW7.webp)

## Step 2: Connect Fluent Forms with WP Social Ninja ​

Next, you’ll link Fluent Forms to WP Social Ninja so that submitted reviews can be displayed in templates. Then, go to **Fluent Forms → Forms → Settings & Integrations**. Now, click on **Configure Integration → Add New Integration** and click to **WP Social Ninja Integration**.

![Connect Fluent Forms with WP Social Ninja ](https://docs.wpsocialninja.com/assets/connect-form-with-wpsocial-ninja.B1GQzWXT.webp)

While setting up the integration, you’ll be asked to choose a **Source**. This is important because it tells WP Social Ninja where the reviews belong.

For a complete guide on Fluent Forms integration with WP Social Ninja, see this [Documentation](./fluent-forms-review).

![update wp social ninja integration feed fluent forms](https://docs.wpsocialninja.com/assets/add-new-integration-feed.BX0AyKHk.webp)

## Step 3: Create a Review Template in WP Social Ninja ​

Now you’ll design how the reviews will appear on your site.

Go to **WP Social Ninja → Templates → Add New Template**. Select **Reviews** as the template type.

Under **Source → Platforms**, choose where the reviews come from:

- **WooCommerce** → Reviews tied to your products.

Scroll to the **Header section**:

- Toggle **Display Header ON**.
- Pick a **Header Template** (Template 1 or Template 2).
- Enable **Write a Review**.
- Under **Button Source Type**, select **Fluent Form Shortcode ID**.
- Paste the **Form ID** from your Fluent Form.

At this point, your **Write a Review** button is ready. When users click it, your Fluent Form will open for them to submit reviews.

Read the [documentation](./template-style-connection) to understand fully how [review templates](./create-template) work.

![edit review template](https://docs.wpsocialninja.com/assets/fluent-forms-review.yK476k4h.webp)

## Step 4: Apply Your Setup ​

Once your form and template are ready, the final step depends on how you want to apply it. You can set the review form globally for all products linked to a WooCommerce template, or configure it individually for specific products. Both methods work global setup for all products at once, or product-level setup for finer control.

### WooCommerce Global Review Settings ​

Go to **WP Social Ninja → Settings → Reviews Platform → WooCommerce Settings** to manage how reviews are collected and displayed across all [WooCommerce products](./woocommerce-reviews). These settings apply globally, but you can still override them on individual product pages.

- **Auto Syncing** – Automatically fetch new WooCommerce reviews. Choose how often to check (e.g., daily).
- **Make WP Social Ninja Default** – Replace the standard WooCommerce reviews with your selected Social Ninja template.
- **Hide Review Count / Title** – Toggle to hide the total review count or the “Reviews” heading.
- **Template Placement** – Decide whether reviews display inside the WooCommerce Reviews tab or outside it.
- **Reviews Form** – Choose between the default WooCommerce form or your Fluent Form via WP Social Ninja.
- **Default Template** – Select which review template will be applied to all WooCommerce products.

**Note:** These settings only affect products that are connected to a WooCommerce Review Template in WP Social Ninja. To learn more, follow this documentation.

### WooCommerce Product Specific Settings ​

- Go to **Products → Edit Product** in WooCommerce.
- Scroll to the **WP Social Ninja Integration** section.
- Under **Reviews Form**, select **Inherit from WP Social Ninja**.
- Save the product.

Now, on that product page, the review section will display your Fluent Form instead of the default WooCommerce form.

Check out the [Documentation](./woocommerce-reviews) for a full guide on integrating WooCommerce with Fluent Forms.

![edit product woocommerce](https://docs.wpsocialninja.com/assets/Edit-product-woocommerce.TMBn_hxd.webp)

### Collect Custom Reviews with Fluent Forms (Pro Only) ​

If you’re not using WooCommerce, or if you want reviews on pages like “Case Studies”:

- Use the **Custom Review Template** you created earlier in WP Social Ninja.
- Place it anywhere with the shortcode:

```
[wp_social_ninja id="TEMPLATE_ID" platform="reviews"]
```

- Publish the page or post.

Visitors will now see the reviews section along with a **Write a Review** button. When clicked, your Fluent Form opens, and their submission is stored and displayed in the template.

Example: You run an **online coaching program**. On your "Student Testimonials" page, you add the shortcode for your custom review template. Students can click **Write a Review**, leave their feedback, and their testimonial appears directly on the page.

### Final Thoughts ​

With this setup, you get the best of both worlds:

- For **WooCommerce**: Replace the limited review box with a customizable Fluent Form.
- For **Custom Use Cases**: Collect feedback, testimonials, or ratings anywhere on your site using WP Social Ninja Pro.

Your customers will have a smoother way to share their experiences, and you’ll have more control over how reviews are collected and displayed.

No more boring forms. With Fluent Forms + WP Social Ninja, reviews look professional, are easy to manage, and help you build trust at scale.

---

## How to Configure Schema Snippet with WP Social Ninja ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/configure-schema.html](https://docs.wpsocialninja.com/guide/business-reviews/configure-schema.html)

# How to Configure Schema Snippet with WP Social Ninja ​

Before diving into the settings, let’s see some Schema Snippet privacy policies.

## Google data structure policy ​

Google has its policy, and it does not guarantee that the structured data will appear in the search results even if the structured data is marked up. Moreover, the testing tool can be extracted successfully; still, it might not appear in the search result. [How Structured data works](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#how_does_it_work)

## Schema Snippet will not work if the reviews are only shown ​

Schema Snippet will not show if the reviews are only shown. So there has to be at least one business header and the mandatory fields, including images, names, and reviews count.

## Enable Schema Snippet for one page ​

TIP

Google doesn’t index Schema Snippets on homepages due to its own limitations, not because of the plugin.We recommend enabling Schema Snippets on just one page. Avoid placing a widget or shortcode with the Schema Snippets option on every page of your site, as Google may treat this as duplicate schema markup. Instead, choose a single page (excluding the homepage) to add the shortcode.

## Take a Test before going live ​

Before you publish your page, test the page from [Test Your Structured Data](https://developers.google.com/search/docs/advanced/structured-data)

Now let’s go to the WP Social Ninja dashboard to adjust the Schema Snippet.

## Schema Snippet ​

Now let’s go to the WP Social Ninja dashboard to learn how to adjust the Schema Snippet. First of all, enable the Schema Snippet button to adjust the settings.

![Enable Schema Snippet](https://docs.wpsocialninja.com/assets/enable-schema-snippet.DYHe32ee.png)

*Enable Schema Snippet*

Now a settings panel will appear on your screen.

![Schema Snippet Settings](https://docs.wpsocialninja.com/assets/image-4.BzMveM84.png)

*Schema Snippet Settings*

### Business Logo ​

Insert your Business Logo to display the Schema Snippet on Google with a valid Business Logo.

### Business Name ​

Next, provide your valid Business Name.

### Business Type ​

This part is a little crucial. You need to provide the Business Type following from the [Schema.org](https://schema.org/docs/schemas.html) Business Type list. Note that you need to put the type exactly the way from the list.

### Business Phone Number ​

Put your Business Phone Number to show it on the Schema Snippet.

### Rating ​

You can add your Average Fallback Rating and Fallback Total Rating. However, if you don’t add it, WP Social Ninja will, by default, collect the rating.

Once you are done, you can test whether your Schema Snippet is working or not from [Google Structured Data Testing Tool](https://developers.google.com/search/docs/advanced/structured-data)

Also, check out [How to use Shortcode](../integrations/shortcode-usage)

---

## Creating a Review Template ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/create-template.html](https://docs.wpsocialninja.com/guide/business-reviews/create-template.html)

# Creating a Review Template ​

This is one of the most important and powerful features of WP Social Ninja. The Review Template is where you design and control everything about how your reviews look and function.

This guide will walk you through the entire process, starting with how to create your first template, and then providing a detailed explanation of every single setting you have available.

## Part 1: How to Create Your Review Template ​

First, let's create the template itself.

1. From your WordPress dashboard, navigate to **WP Social Ninja → Templates**.
2. On this page, click the **+ Add New Template** button.
3. In the **Template Type** dropdown, choose **Review Template**.
4. Give your template a name you'll remember (e.g., "Main Website Reviews" or "5-Star Homepage Slider").
5. Click **Create Template**.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-1.geypTnWX.webp)

You will now be taken to the main **Template Editor**. This is where you will set up every detail of your new review feed. The editor is organized into two main tabs: **General** and **Style**.

This guide covers every setting in the **General** tab.

## Part 2: Customizing Your Template (General Settings) ​

The **General** tab controls *what* content is shown (your platforms, filters, and text) and *how* the feed functions (the layout, buttons, and pagination).

Here is a breakdown of each section:

### 1. Platforms ​

This is the most important step. It controls which reviews you want to display in this template.

- **Select Platforms:** This is a list of all the review sources you have connected to WP Social Ninja. You can select one or multiple platforms.

> Use Case: This is what makes WP Social Ninja so powerful. You can check the box for Google, Facebook, and Yelp all at the same time to create a single, unified feed of all your best reviews from every platform.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-2.SF6uHTSg.webp)

### 2. Template ​

This section controls the visual structure and arrangement of your reviews.

- **Layout Type:** This is the foundational structure of your feed. - **Grid:** Creates a clean, organized, multi-column grid. All review boxes are forced to be the same height, which creates a very neat and symmetrical look.
- **Slider:** Displays your reviews in a horizontal, swipe-able carousel. This is perfect for saving space on a homepage.
- **Masonry:** A "Pinterest-style" grid where boxes have different heights based on their review text, fitting together like bricks.
- **Badge:** A small, compact layout that is often used to show a summary of your rating (e.Example, "4.9 out of 5 stars").
- **Select a Template:** These are pre-designed visual "skins" for your feed (e.g., Vega, Spica, Sirius). Each one changes the styling of the review boxes, fonts, and layout.
- **Number of Columns:** This is a crucial responsive setting. You can set the number of columns you want to show on **Desktops**, **Tablets**, and **Mobile** phones.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-3.uNairmFk.webp)

### 3. Filters ​

Filters are how you refine your feed to only show the specific reviews you want.

- **Number of Reviews:** Sets the total number of reviews that will be loaded into this template.
- **Filters by Minimum Rating:** This is a very powerful filter. You can use this to show only your best reviews. > Example: If you select "5 Stars," this template will only display reviews that have a 5-star rating, creating a "Best Of" showcase.
- **Order:** This lets you sort your reviews. - **Descending:** Shows newest reviews first (most common).
- **Ascending:** Shows oldest reviews first.
- **Hide Reviews Without Text:** A simple On/Off toggle. If turned **On**, it will hide any reviews that have a star rating but no written text, ensuring every item in your feed has content.
- **Filter by Include/Exclude:** This gives you precise, manual control. You can search for and select specific reviews to either **Include** (show only these) or **Exclude** (show all except these).
- **Show/Hide reviews containing these words:** These are moderation tools. > Use Case: You could use "Show" to create a feed that only mentions "customer service." Or, you could use "Hide" to filter out any reviews that mention a "bug" or "shipping problem."
- **Filter by Business/Product:** (For WooCommerce/Custom Reviews) This lets you show reviews associated with only one specific product.
- **Filter by Category:** (For WooCommerce/Custom Reviews) This lets you show reviews only from a specific product category (e.g., "Shoes").

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-4.Z69xsoGF.webp)

### 4. Settings (Content Display) ​

This section controls which pieces of information you want to display inside each individual review card.

- **Display Rating:** A simple On/Off toggle to show or hide the star rating (e.g., ★★★★★).
- **Display Verified Badge:** A toggle to show or hide a "Verified" badge, which adds extra trust.
- **Rating Style:** This lets you choose the visual style for the stars.
- **Display Date:** A toggle to show or hide the date the review was posted.
- **Display Reviewer Name:** A toggle to show or hide the person's name (e.g., "John Doe").
- **Reviewer Name Format:** Lets you choose whether to display the reviewer's **Full Name** or just their **First Name** (which is a good option for privacy).
- **Display Reviewer Image:** A toggle to show or hide the reviewer's profile picture.
- **Display Platform Icon:** A toggle to show or hide the icon of the source platform (e.g., the Google, Facebook, or Yelp logo). This is great for a mixed-platform feed.
- **Display Review Title:** A toggle to show or hide the main "title" or "headline" of the review.
- **Display Review Text:** A toggle to show or hide the main body of the review text.
- **Content Type:** This lets you choose what to display for the main text: - **Full Content:** Shows the entire review text, no matter how long.
- **Excerpt:** Lets you show a short "snippet" of the text.
- **Trim Excerpt Words:** This setting only appears if you select "Excerpt." It lets you set the exact number of words (e.g., 25) to show before the text is cut off. This is the key to creating a clean, uniform look for your grid or slider.
- **Enable External Links:** A toggle to allow any links in the review text to be clickable.
- **Equal Height:** This toggle is essential for the **Grid** layout. When toggled **on**, all review boxes are forced to the same height (based on the tallest one), creating a perfect, uniform grid. You should turn this **Off** if you are using the **Masonry** layout.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-5.BZNQx4Di.webp)

### 5. Header ​

This section controls the large box that appears at the top of your entire feed, summarizing your reviews.

- **Display Header:** This is the master On/Off switch for the entire header section.
- **Header Template:** These are pre-designed visual "skins" for the header box itself.
- **Display Logo:** A toggle to show or hide your main business logo.
- **Display Title:** A toggle to show or hide the header's title (e.g., "Customer Reviews").
- **Display Rating:** A toggle to show or hide your aggregate (average) star rating (e.g., "4.9 out of 5").
- **Display Number of Reviews:** A toggle to show or hide the total number of reviews.
- **Display Write a Review Button:** This is a powerful Call to Action (CTA). It adds a button to your header to encourage your site visitors to leave a review.
- **Custom Title Text:** Lets you change the default "Reviews" text to anything you want (e.g., "What Our Customers Say").
- **Custom Number of Reviews Text:** Lets you customize the text (e.g., "Based on {total} reviews").
- **Custom Button Text:** Lets you change the "Write a Review" button text (e.g., "Leave Your Feedback!").

#### Add "Write a Review" URL? ​

- **Button Source Type:** This lets you decide what the button does. - **Custom URL:** The most common option. You can paste a link directly to your Google, Facebook, or Yelp review page, making it easy for customers.
- **Open in new window:** (Recommended) Check this to open the review link in a new browser tab.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-6.BkG-dYrw.webp)

### 6. Pagination ​

This controls what happens when a visitor gets to the bottom of the initial set of reviews.

- **Pagination Type:**- **None:** The feed will only show the "Number of Reviews" (from the **Filters** section) and that's it. There will be no way to load more.
- **Load More:** This will add a button at the bottom of your feed. When clicked, it will load the next set of reviews. This is the most popular option.
- **Load More Button Text:** You can change the text from "Load More" to something like "Show More Reviews" or "See More."
- **Reviews Per Page:** This is very important. This number controls how many *new* reviews are loaded *each time* the "Load More" button is clicked.

> Example: You might set your feed to show 10 reviews at first, and then set 5 "Reviews Per Page." When a user clicks "Load More," 5 new reviews will appear (for a total of 15).

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-7.C05O7nQE.webp)

### 7. AI Summarizer ​

This is a powerful "New" feature that uses AI to analyze your reviews and provide a summary for your visitors.

- **Display AI Summary:** The main On/Off toggle for the feature.
- **Summary Style:** Choose a visual style for the summary box.
- **Display Read More:** A toggle to add a "Read More" link if the summary is long.
- **Text Typing Animation:** A toggle to enable a "typing" effect for the summary text, which makes it very eye-catching.
- **Display AI Summary Icon:** A toggle to show or hide a small AI icon.
- **Regenerate AI Summary:** This is a key button. If you don't like the summary the AI generated, or if you have a lot of new reviews, you can click this to force the AI to write a new one.

![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-8.iQjD3ZZ7.webp)

### 8. Schema.org Markup ​

This is a crucial and highly technical feature for SEO (Search Engine Optimization).

- **What it does:** When enabled, this adds special, invisible code (called JSON-LD schema) to your page. This code helps Google understand that you have reviews on your page.
- **Why it's important:** This is the feature that helps you get gold review stars (rich snippets) to appear next to your website in Google search results, which can dramatically increase your click-through rate.

#### Configuration Options ​

- **Enable Schema.org Markup:** The main On/Off toggle. You should almost always keep this **On**.

> Note: You may test if your schema snippet is valid or not by using Google's Rich Results Test tool.

- **Schema Type:** Select the classification that best describes your content.

- **Aggregate Rating:** Use this for general business ratings (e.g., LocalBusiness, Restaurant).
- **Product with Reviews:** Select this to add detailed product information alongside individual reviews for richer search results.
- **Business Logo:** Provide your official **Business Name**, **Business Phone Number**, and upload a **Business Logo**. These details ensure search engines associate the reviews with the correct entity.
- **Business Name:** Choose the most accurate category from the dropdown menu to help search engines categorize your business correctly.
- **Business Type:** This is very important. Select the type that best fits your business from the list (e.g., "LocalBusiness," "Restaurant," "Product").
- **Business Phone Number:** Add your main business phone number.
- **Business Description:** (Available for "Product with Reviews") Enter a concise summary of the product or service being reviewed.
- **Include Business Address:** A toggle to include your physical location data in the structured code.

#### Moderation and Fallbacks ​

- **Fallback Average Rating:** Enter a backup rating (e.g., 4.5) to be used if the system cannot dynamically fetch your live rating.
- **Fallback Total Rating:** Set a default number of reviews to ensure the schema remains valid even if live data is temporarily unavailable.
- **Number of Reviews to Include:** (Available for "Product with Reviews") Define exactly how many individual reviews should be included in the structured data.

TIP

You can verify that your configuration is working correctly by using [Google's Rich Results Test](https://search.google.com/test/rich-results) tool. Simply paste your page URL to see if your review stars are ready for search results.![Create Review Template](https://docs.wpsocialninja.com/assets/create-review-template-9.FyeIALDE.webp)

## Part 3: Next Steps ​

Congratulations! You have now configured every single content and function setting for your review template.

Your next steps are:

- Click on the **Style** tab at the top of the editor to customize all the colors, fonts, borders, and spacing to perfectly match your brand.
- Click the **Save Template** button at the bottom.
- Copy the shortcode for your new template and paste it onto any page, post, or widget area on your site to make your new review feed go live!

---

## Facebook Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/facebook-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/facebook-configuration.html)

# Facebook Reviews ​

This guide will show you how to easily connect your Facebook Page to WP Social Ninja's **Business Reviews** feature. Once connected, you can pull in all your customer reviews to display on your website, building trust and social proof.

This process is very simple and uses the recommended "OAuth" method through WP Social Ninja's [secure connection bridge](../getting-started/connecting-your-accounts) — you just log in to your Facebook account and give permission. There are no complicated developer keys or apps to create.

> Use Case: This is the first and most important step for displaying your Facebook Reviews. Once you connect your page, you can create a beautiful Business Reviews template to show off your 5-star ratings, helping to convince new customers that your business is trusted and legitimate.

## How to Connect Your Facebook Page ​

Follow these simple steps to get your page connected in less than a minute.

### Step 1: Go to Platforms ​

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the [Platforms](../getting-started/all-platforms-of-wp-social-ninja) sub-menu. This is your main hub for connecting all your social accounts for feeds and business reviews.

### Step 2: Choose Your Connection Method ​

On the "Platforms" page, find the **Facebook** row. On the right side, click the **Settings icon** button.

![Facebook Page Review](https://docs.wpsocialninja.com/assets/fb-business-review-1.CxBNlMo6.webp)

A pop-up window will appear asking you to "Select Credential Type." You have two choices **OAuth 2.0** and **Manually Connect a Page**. In this guide we will show you the OAuth 2.0 connection process. To manually connect your Facebook Page follow this [Documentation](./facebook-reviews-access-token).

For the easiest and fastest setup, select the first option: **OAuth 2.0 (Recommended)**.

![Facebook Page Review](https://docs.wpsocialninja.com/assets/fb-business-review-2.55jyszDs.webp)

### Step 3: Authorize Your Facebook Account ​

After you select the recommended method, a new Facebook pop-up window will open. This is a secure window directly from Facebook.

- If you are not already logged in, Facebook will ask you to log in.
- Next, it will ask you to grant permission for "WP Social Ninja" to access your information. Click the **"Continue with..."** button to proceed. This is a standard and safe process.

![Facebook Page Review](https://docs.wpsocialninja.com/assets/fb-business-review-3.CIhTAwPM.webp)

### Step 4: Select Your Facebook Page(s) ​

After you grant permission, you will be brought back to a WP Social Ninja pop-up titled **Select Page(s)**.

- This window will show a list of all the Facebook Business Pages that your personal Facebook account manages.
- Find the Page (or Pages) you want to get reviews from.
- Click the checkbox next to each Page you want to connect.
- Once you have selected your Page(s), click the blue **Connect Pages** button.

![Facebook Page Review](https://docs.wpsocialninja.com/assets/fb-business-review-4.qwfeFtqK.webp)

### Step 5: You're Connected! ​

The pop-up will close, and you will be returned to the main **Platforms** page.

You will now see that the **Facebook** row has a green "Connected" status and lists the Page(s) you just added.

![Facebook Page Review](https://docs.wpsocialninja.com/assets/fb-business-review-5.pjfBm3RH.webp)

### Next Steps ​

Congratulations! Your Facebook Page is fully connected and ready to sync reviews.

Now that your account is connected, you're ready for the fun part:

- Click the **Add New Template** button to go to the [template editor](./create-template) and start designing your **Business Reviews** template for Facebook.
- If you manage pages under a different Facebook account, you can click the **Connect More Account** button to repeat this process and add those as well.

---

## Facebook Reviews (Using Access Token) ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/facebook-reviews-access-token.html](https://docs.wpsocialninja.com/guide/business-reviews/facebook-reviews-access-token.html)

# Facebook Reviews (Using Access Token) ​

This guide will show you the "manual connect" method for connecting your Facebook Page to WP Social Ninja's **Business Reviews** feature.

This is an excellent alternative to the direct "OAuth" login. It's perfect for developers who are building a site for a client and don't want to ask for their personal Facebook login credentials.

> Use Case: You are a developer. Instead of asking your client for their Facebook password, you can send them a link to our secure Access Token Generator. The client can safely generate the required keys (a Page ID and an Access Token) on their own computer, then just email you the two text codes. You can then paste these codes to connect their page without ever needing their login.

## How to Manually Connect Your Facebook Page ​

Follow these simple steps to get your page connected using the manual method.

### Step 1: Go to Platforms ​

First, go to your WordPress dashboard. In the left-hand menu, click on **WP Social Ninja**, and then select the **Platforms** sub-menu. This is your main hub for connecting all your social accounts.

### Step 2: Choose the "Manually Connect" Method ​

On the "Platforms" page, find the **Facebook** row and click the **Connect** button.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-1.BhygwzWa.webp)

A pop-up window will appear asking you to "Select Credential Type." The first option is the default login. For this method, select the second option: **Manually Connect a Page**.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-2.DhIRgQ4t.webp)

### Step 3: Find the Required Fields ​

After you select the manual method, a new pop-up will appear with two empty fields: **Page ID** and **Access Token**.

Your goal is to find these two pieces of information. Keep this browser tab open and proceed to the next step.

### Step 4: Go to the Access Token Generator ​

To get these two keys, you will use our free and secure tool. In a new browser tab, open the [WP Social Ninja Access Token Generator](https://wpsocialninja.com/access-token-generator/?id=facebook-reviews).

On this page, find the **Facebook Reviews** section.

### Step 5: Generate Your Keys ​

1. On the Token Generator page, click the blue **Continue with Facebook** button.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-3.Ad9_bMz1.webp)

1. A secure Facebook pop-up window will open. Log in to your Facebook account (the one that manages your Business Page).
2. Follow the prompts. Facebook will ask you to "Continue as..." and then to select which of your pages you want to grant access to. Make sure you select the correct page.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-4.D2Vjv76S.webp)

### Step 6: Copy Your Page ID and Access Token ​

After you grant permission, the generator page will refresh and display your unique **Page ID** and **Access Token**.

Click the **Copy** button for each of these keys.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-5.DzSsb5yj.webp)

### Step L: Connect Your Page ​

Now, go back to your WordPress dashboard (where you still have the pop-up from Step 3).

1. Paste the **Page ID** you just copied into the "Page ID" field.
2. Paste the **Access Token** you just copied into the "Access Token" field.
3. Click the **Save** button.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-6.DeR03a_y.webp)

### Step 8: You're Connected! ​

The pop-up will close, and you will be returned to the main **Platforms** page.

You will now see that the **Facebook** row has a green "Connected" status and lists the Page you just added manually.

![Facebook reviews manual process](https://docs.wpsocialninja.com/assets/fb-business-review-manual-7.gqMyWUXx.webp)

## Next Steps ​

Congratulations! Your Facebook Page is fully connected and ready to sync reviews.

Now that your account is connected, you're ready for the fun part:

- Click the **Add New Template** button to go to the template editor and start designing your **Business Reviews** template for Facebook.
- If you need to add another page manually, you can click the **Add More Business** button to repeat this process.

---

## How to Add Fluent Forms Reviews with WP Social Ninja ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/fluent-forms-review.html](https://docs.wpsocialninja.com/guide/business-reviews/fluent-forms-review.html)

# How to Add Fluent Forms Reviews with WP Social Ninja ​

You can collect and display reviews directly from your website visitors using Fluent Forms. By integrating Fluent Forms with WP Social Ninja, you can automatically fetch form submissions and showcase them as [Business reviews](./).

TIP

Displaying reviews from Fluent Forms is a premium feature and requires **WP Social Ninja Pro**.This guide will walk you through the entire setup, from connecting the module to displaying your new reviews.

## Step 1: Enable the WP Social Ninja Module ​

First, you need to enable the integration from the Fluent Forms dashboard.

From your WordPress dashboard, go to **Fluent Forms → Integrations**. Search for **WP Social Ninja** in the list, or scroll down to find it and click the **toggle to enable** the module.

This action connects Fluent Forms with WP Social Ninja, allowing them to share data.

![enable wp social ninja 1](https://docs.wpsocialninja.com/assets/enable-wp-social-ninja-module.R_bVXH8l.webp)

### Step 2: Create Your Review Form in Fluent Forms ​

Next, you need to configure the specific form you want to use for collecting reviews. Go to your Fluent Forms dashboard. You can either **Add a New Form** or edit an existing one.

Ensure your form includes the necessary input fields, such as **Name**, **Email Address**, **Text**, and a **Ratings** field.

**Note:** The Ratings field in Social Ninja is now available within Fluent Forms.![fluentforms input field](https://docs.wpsocialninja.com/assets/create-forms-2.Bntq-nyo.webp)

### Step 3: Configure the WP Social Ninja Integration Feed ​

After you select the WP Social Ninja integration, a configuration panel will appear. You must tell this specific form to send its data to WP Social Ninja.

Inside your form editor, go to the **Settings & Integrations** tab. Select **Configure Integration** from the left-hand menu. Click the "**Add New Integration**" button and select "**WPSocial Ninja Integration**" from the dropdown list.

![configure integration 03](https://docs.wpsocialninja.com/assets/add-new-integration-3.DUzcgvfx.webp)

## Step 4: Map Your Form Fields ​

A new configuration panel will appear. This is the most important step. You must "map" your form fields to tell WP Social Ninja which field is which.

- **Name:** Provide a name for this specific integration feed. This is for your internal reference, for example, "Customer Review Form Feed."
- **Integration Source:** From the dropdown menu, select the source of your reviews. In this case, you would choose **Fluent Forms**.
- **Ratings:** This is a required field. From the dropdown menu, select the field in your Fluent Form that collects star ratings from users. Make sure to choose the shortcode of social ninja ratings **{inputs.wpsr_rating_elem}** from the dropdown.
- **Reviewer Name:** This is a required field. Select the form field where users enter their full name.
- **Reviewer Email:** Select the field where users provide their email address. This is typically not displayed publicly, but can be useful for your records.
- **Comment:** This is a required field. Select the form field where users write their detailed review or feedback. Choose the shortcode from the dropdown option **{inputs.input_text}**.
- **Reviewer Image:** If your form allows users to upload a profile picture or avatar (using a file upload field), you can map that field here to display the image alongside their review. Choose the shortcode from the dropdown option **{inputs.image-upload}**.
- **Reviewer URL:** Use this to map a field where users can provide a link to their website or social media profile. This can be made clickable in the review template. Choose the shortcode from the dropdown option **{labels.url}**.
- **ReviewTitle:** If your form has a field for a review headline or title (e.g., "Summary of your experience"), map it here. Choose the shortcode from the dropdown option **{inputs.input_text_1}**.
- **Category:** If you use categories to organize your reviews (e.g., "Product Feedback," "Customer Service"), you can map a form field (like a dropdown or radio button) to this option to automatically categorize incoming submissions.
- **Conditional Logic:** Enable this option to set specific rules for when a submission should be sent to WP Social Ninja. For example, you can create a rule to only send submissions that have a rating of 4 stars or higher.

After you have mapped all the necessary fields, click the **Save Feed** button to finalize the integration setup.

![Add new WP social ninja integration feed](https://docs.wpsocialninja.com/assets/Add-New-WP-Social-Ninja-Integration-Feed-Fluent-Forms-4.VUusGvM7.webp)

The form has been integrated successfully. You can modify or remove the feed by selecting the **Settings** or **Delete** icon.

![edit or delete wp social feed 05](https://docs.wpsocialninja.com/assets/edit-or-delete-5.BIRpcCpg.webp)

After that, click the **Save Form** button. Then you can **copy** the Form's **shortcode** and paste it into any **page/post**.

![review form 06](https://docs.wpsocialninja.com/assets/Review-Form-06.BGAhcFPn.webp)

### Step 5: Create a Fluent Forms Review Template ​

After setting up your form, create a template in WP Social Ninja to display the submitted reviews. Go to your **WP Social Ninja** dashboard. Click **Templates → Add New Template** and choose **Add Review Template**.

![Add Review Template](https://docs.wpsocialninja.com/assets/add-review-template-6.CHv8U6_u.webp)

In the template editor, go to **General → Platforms**. Select **Fluent Forms** from the list of **platforms**. Style your template (layout, colors, etc.) and click the **Save** button.

Now, any reviews submitted through your configured form will automatically be fetched and displayed using this template.

![Select Fluent Forms Template](https://docs.wpsocialninja.com/assets/select-fluent-forms-7.B_PeaWeU.webp)

## Step 6: Display Your Form and Reviews ​

You now have two pieces to place on your site:

- **The Form:** **Copy** the shortcode for your **Fluent Form** and paste it onto a page (e.g., a "Write a Review" page).
- **The Reviews:** **Copy** the shortcode for your new **WP Social Ninja Template** and paste it onto a page where you want to display the collected reviews (e.g., your "Testimonials" page).

### Manually Approve Reviews (Optional) ​

By default, reviews might appear instantly. If you want to approve each review before it goes live:

- Go to **WP Social Ninja → Settings → Reviews Platform → Fluent Form Settings**.
- **Enable the Review/Testimonial** must be manually approved option. After that, click the **Save Settings** button.

![fluent form settings 09](https://docs.wpsocialninja.com/assets/fluent-forms-settings-8.BOPpUQSz.webp)

Now, all new submissions will go to the **Reviews** tab in WP Social Ninja, where you can manually approve or disapprove them before they appear on your site. You can check out the - **How to add Custom Reviews** documentation.

---

## FluentCart Product Review ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/fluentcart-product-review.html](https://docs.wpsocialninja.com/guide/business-reviews/fluentcart-product-review.html)

# FluentCart Product Review ​

WP Social Ninja serves as the primary review hub for FluentCart, providing a seamless way to collect, manage, and display professional product reviews. This integration replaces the standard review system with a feature-rich experience that includes detailed moderation, custom styling, and an interactive review drawer.

## Quick Setup: One-Click Review Hub (Pro) ​

Setting up FluentCart reviews used to take four separate steps — and it was easy to miss one. Now, a single click does it all.

**Previously**, to make WP Social Ninja your FluentCart review hub, you had to:

1. Create a review form
2. Build a display template
3. Connect the template's **Write a Review** button to that form
4. Turn on **Main Review Hub**

**Now**, the **Set Up Review Hub** button handles every one of those steps for you.

## Connecting FluentCart to WP Social Ninja ​

To use WP Social Ninja as the main review source for FluentCart, you first need to connect the two platforms.

Navigate to **WP Social Ninja → Platforms** from your WordPress dashboard. Locate **FluentCart** under the **Business Reviews** section and click on the **Settings** icon.

![Fluentcart](https://docs.wpsocialninja.com/assets/fluentcart-settings-1.BomboOS5.webp)

Alternatively, go to **WP Social Ninja → Settings → Reviews Platforms → Fluent Cart Settings** and click the **Configure Connection** button.

![Configure Connection](https://docs.wpsocialninja.com/assets/configure-connection-2.CVZUNeJc.webp)

In the **Fluent Cart Configuration** pop-up, use the search bar to find and select the specific products you want to fetch reviews for, also if you want to connect all of your FluentCart product simply click on the **Connect all Product** here. Click **Save** to confirm your selection.

![Select Product](https://docs.wpsocialninja.com/assets/select-product-3.Y_ZAln7k.webp)

Once connected, your products appear under **Your Connected FluentCart Products**, each with its own refresh icon so you can re-sync that product's reviews at any time. Click **Add More Product** whenever you want to connect additional products to WP Social Ninja.

TIP

If a product already has its own WP Social Ninja integration set up directly in FluentCart, you'll see an **Overridden In FluentCart** badge with a **Review** link next to it in this list — see [Per-Product Override Indicator](#product-level-integration-settings) below for what that means.**Then,** in the **Make WP Social Ninja your FluentCart review hub** card, click the **Set Up Review Hub** button.

That's it. In one click, WP Social Ninja will:

- Create a [Native Review Form](./native-review-forms) automatically
- Build a matching display [template](./create-template) with the **Write a Review** button already connected to that form
- Turn on **Make WP Social Ninja Your Main Review Hub**

There's nothing else to configure — your store is ready to collect and display reviews right away.

NOTE

**Prefer full control?** Choose **Start from a blank template → Add New Template** instead. This creates an empty template only, leaving you to create the review form, connect the **Write a Review** button, and turn on **Main Review Hub** yourself (the manual steps are covered below). Quick Setup is a **Pro** feature.![The FluentCart Configuration pop-up showing the connected products list with an override badge, and the Set Up Review Hub button](https://docs.wpsocialninja.com/assets/fluentcart-quick-setup.OBHg_yjd.webp)

## Customizing the FluentCart Reviews Layout ​

After establishing the connection, you can fine-tune how reviews appear on your storefront to match your site's branding and user experience.

To access these options, navigate to **WP Social Ninja → Settings → Reviews Platforms → Fluent Cart Settings**.

### Core Layout Options ​

- **Hide Rating Count from Product Listings:** Toggle this switch to remove the numeric review count text next to star ratings on your product listing pages.
- **Make WP Social Ninja Your Main Review Hub:** Enabling this ensures that WP Social Ninja acts as the primary interface for managing and displaying all product reviews.
- **Review Template:** Use the dropdown menu to select the specific template you want to use for displaying your FluentCart reviews.

### Interactive Click Behavior ​

This setting lets you control what happens when a customer clicks on the star rating on a single product page. Instead of a fixed action, you can choose how you want users to interact with your reviews, helping create a smoother and more engaging experience.

- **Scroll to review widget:** When a user clicks the star rating, the page will automatically scroll down to the review section. This helps users quickly find and read existing reviews without manually searching.
- **Open review drawer:** When clicked, a slide-in panel (drawer) will open on the screen, showing the full review layout. This provides a modern and interactive way for users to view and explore reviews without leaving the current page.

### Review Drawer Styling ​

If you select the drawer behavior, you can choose between two visual styles:

- **Modern:** A sleek, wide-panel layout that supports outside-click-to-close behavior.
- **Default:** A standard slide-in panel style.

![Fluentcart Settings](https://docs.wpsocialninja.com/assets/fluentcart-settings-5.DHr2ijjY.webp)

## Product-Level Integration Settings ​

You can manage the WP Social Ninja integration directly from within the FluentCart product editor.

Go to **FluentCart Pro → Products** and select a product to edit. Navigate to the **Integrations** tab for that product. Click the **Add Integration** dropdown and select **WP Social Ninja**.

![Add Integration](https://docs.wpsocialninja.com/assets/add-integration-6.yDwh77xf.webp)

Configure the integration by providing a **Title**, selecting your desired WP Social Ninja **Template**, and choosing if the feed should run on specific variations. Toggle the **Enable this Integration** switch and click **Create WP Social Ninja Feed**.

NOTE

When selecting a **Native Template** for your review collection, ensure that the **Review Target** is specifically set to FluentCart. For a deeper understanding of custom source templates, please refer to the detailed [documentation](/guide/custom-source/custom-source-overview).![Create WP Social Ninja Feed](https://docs.wpsocialninja.com/assets/create-wpsocialninja-feed-7.DnJUYpFw.webp)

Per-Product Override Indicator (Pro)

A product-level integration configured here in FluentCart takes precedence over your global review settings for that product. So you always know when this is happening, WP Social Ninja shows an **override badge** next to that product in the connected-products list, along with a direct link to the product's FluentCart **Integrations** screen — making it easy to review or resolve the conflicting setting.
## Managing FluentCart Integrations ​

Once you have added an integration for a specific product, you can manage it directly from the **Product Integrations** list within the FluentCart dashboard.

- **Status Toggle:** Quickly enable or disable the WP Social Ninja integration feed for that specific product.
- **Edit (Pencil Icon):** Click the edit icon to re-open the configuration settings and modify the template selection or change the integration title.
- **Delete (Trash Icon):** Permanently remove the WP Social Ninja integration from that specific product.

![Managing FluentCart](https://docs.wpsocialninja.com/assets/edit-or-delete-8.qazfYuFv.webp)

Once your WP Social Ninja template is connected to FluentCart, the review display is designed to build trust by showing detailed customer feedback directly on the product page.

![FluentCart Review](https://docs.wpsocialninja.com/assets/fluentcart-review-9.C9Fg7lr2.webp)

---

## Generate QR Code for Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/generate-qr-code-for-reviews.html](https://docs.wpsocialninja.com/guide/business-reviews/generate-qr-code-for-reviews.html)

# Generate QR Code for Reviews ​

The QR Code feature in WPSocialNinja makes it easy for your customers to leave reviews for your business. Generate a unique QR code that links directly to your review page on platforms like [Google Business Profile](./google-configuration), [Booking.com](./booking-com-configuration), [Airbnb](./airbnb-configuration), etc. Customers can scan the code to leave a review instantly, without needing to search for your page.

This guide will show you how to generate, use, and track your review QR code.

### How to Generate Your QR Code ​

Before you begin, ensure you have already connected your business [platforms](../getting-started/all-platforms-of-wp-social-ninja) in WP Social Ninja, as you will need to select their URLs during the setup process.

#### Navigate to the QR Code Menu ​

- From your WordPress dashboard, go to **WPSocialNinja** > **Settings**.
- Click on the **Get Reviews via QR Code** submenu item. This will take you to the QR code dashboard.

![get reviews via qr code 1](https://docs.wpsocialninja.com/assets/qr-code-review-1.B6o-psrY.webp)

#### Create a New QR Code ​

- Click the **+ Add New QR code** button to open the configuration popup.
- In the popup, enter a **Name** for your QR code so you can identify it later.
- Under **Business URL**, select the specific platform URL you want the QR code to link to.
- Click the **Generate** button.

![get reviews via qr code 2](https://docs.wpsocialninja.com/assets/qr-code-review-2.rYHpI44P.webp)

#### Download Your QR Code ​

- After generation, the QR code will be displayed.
- Click the **PNG** or **SVG** button to download the QR code image file to your computer.

![get reviews via qr code 3](https://docs.wpsocialninja.com/assets/qr-code-review-3.CJ8ncAL8.webp)

#### Manage Your QR Codes ​

- After creation, your QR code will be added to the list on the main dashboard where you can see details for each code, including its **Name**, **QR Code** image, and the **Total Scans** count.
- To edit or delete a QR code, use the icons at the end of its row: - Click the **pencil icon** to edit the code's details.
- Click the **delete icon** to permanently remove the code.

![get reviews via qr code 4](https://docs.wpsocialninja.com/assets/qr-code-review-4.CB1MjQFI.webp)

#### Using Your QR Code ​

Once downloaded, you can use the QR code image in any of your marketing materials. Place your QR code where customers can easily see and scan it, such as:

- Business cards or flyers
- Restaurant tables or menus
- Checkout counters
- Email signatures

#### Track Your QR Code Performance ​

WP Social Ninja automatically tracks how many times your QR code is scanned.

The **Total Scans** count is displayed on the main QR code dashboard, in the row corresponding to your generated code. Use this number to measure customer engagement and see how effective your QR code placement is. A higher scan count means more customers are interacting with your review invitations.

---

## Global Review Settings ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/global-review-settings.html](https://docs.wpsocialninja.com/guide/business-reviews/global-review-settings.html)

# Global Review Settings ​

The **Global Review Settings** panel allows you to manage the core performance and moderation rules for all your social reviews at once. These settings ensure that your website stays fast and that you have full control over how new feedback is displayed to your visitors.

## Accessing Global Review Settings ​

To find these configuration options, navigate to your WordPress dashboard and go to **WP Social Ninja → Settings**. From the left sidebar, click on **Reviews Platforms** and then select **Global Review Settings**.

## Reviews Image Optimization ​

This section is dedicated to improving your website's performance by managing how review images are handled.

- **Optimize Images**: Enabling this toggle allows the plugin to generate and store optimized versions of review images in multiple sizes using your local WordPress storage. This significantly improves loading speeds for your review templates.
- **Reset Local Images**: Clicking the **Reset Image Storage** button will clear all locally stored images for the Reviews platform. Use this if your images are not appearing correctly or if you wish to refresh your local storage.

![Access Global Review Settings](https://docs.wpsocialninja.com/assets/access-global-review-settings.BTkAC0k-.webp)

## Review Publishing Settings ​

Control how and when new reviews go live on your website with the **Review Publishing Mode**. There are three distinct modes available:

- **Publish Automatically**: New reviews are fetched and displayed immediately without any manual intervention.
- **Require Approval**: All incoming reviews are sent to the moderation panel first, where you must manually approve them before they appear on your site.
- **Auto Publish with Filters**: This advanced mode allows you to set specific Conditional Publishing Rules to automate your moderation process.

NOTE

The Auto Publish with Filters feature is available in the Pro version.
### Conditional Publishing Rules ​

When using the filtered publishing mode, you can define the following criteria:

- **Minimum Rating Required**: Automatically publish reviews only if they meet a specific star rating (e.g., at least 3 stars).
- **Blocked/Spam Words**: Enter specific keywords (separated by commas) that will trigger spam detection. Any review containing these words will be sent to moderation automatically.
- **Minimum Review Length**: Set a character limit. Shorter, low-effort reviews will be held for moderation rather than being published instantly.

![Review Publishing Settings](https://docs.wpsocialninja.com/assets/review-publishing-settings-2.BNkqUznf.webp)

## AI Review Summarizer API Settings ​

WP Social Ninja integrates with AI platforms to provide summarized versions of your reviews.

- **Enable AI Review Summarizer**: Toggle this option to activate AI-powered review summaries.
- **AI Platform & Model**: Select your preferred AI provider (e.g., OpenAI) and the specific model (e.g., gpt-4o) you wish to use.
- **API Key**: Enter the unique API key provided by your selected AI platform to securely connect the service.

After setting up all the configurations to your preference, click on the **"Save Settings"** button located at the top right corner to apply the changes.

![AI Review Settings](https://docs.wpsocialninja.com/assets/ai-review-settings-3.BEpvu-wl.webp)

## FluentCRM Review Tagging ​

If you use **FluentCRM**, this section lets you turn approved product reviews into marketing automations. When a **WooCommerce** or **FluentCart** review is approved, WP Social Ninja can automatically tag the reviewer's FluentCRM contact — so you can branch an automation on it (for example, a thank-you coupon vs. a reminder).

- **Enable Review Tagging**: Turn this toggle on so that approved reviews will tag the matching FluentCRM contact.
- **Tag Name**: Choose the FluentCRM tag applied to the contact. The dropdown lists your existing FluentCRM tags and defaults to 
```
review_submitted
```

. Reference this exact tag name in your FluentCRM automation condition.

After making your selection, click **Save Settings** to apply the changes.

![The FluentCRM Review Tagging settings card with the Enable Review Tagging toggle and Tag Name dropdown](https://docs.wpsocialninja.com/assets/fluentcrm-review-tagging.4Tf4Mj8R.webp)

NOTE

This is a **Pro** feature and only appears when the FluentCRM plugin is active.For the full walkthrough — including how to build a FluentCRM automation around the tag — see the [FluentCRM Review Tagging](../integrations/fluentcrm-review-tagging) guide.

---

## Google Business Profile Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/google-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/google-configuration.html)

# Google Business Profile Reviews ​

Do you wish to display all your scattered reviews in one place on your website? **WP Social Ninja** does exactly that — and connecting your Google Business Profile takes just one click.

Google Reviews connect through WP Social Ninja's [secure connection bridge](../getting-started/connecting-your-accounts), which keeps your connection reliable and refreshes it in the background. Let's walk through it.

## Connect Your Google Business Profile ​

**First,** from your WordPress dashboard, go to **WP Social Ninja → Platforms** and select **Google** from the list of platforms.

![Selecting Google from the Platforms list in WP Social Ninja](https://docs.wpsocialninja.com/assets/google-business-review-1.Dn3kTyQP.webp)

**Then,** in the **Google Business Profile Configuration** pop-up, click the **Sign in And Get Google Access Code** button. As the pop-up says, it only takes one click.

![The Google Business Profile Configuration pop-up with the Sign in And Get Google Access Code button](https://docs.wpsocialninja.com/assets/google-business-connect.DvBsxMN0.webp)

**Next,** choose the email account associated with your Google Business Profile.

![Choosing your Google account](https://docs.wpsocialninja.com/assets/google-business-review-3.C-sN1W1Z.webp)

**Finally,** click **Continue** to grant permission. WP Social Ninja takes care of the rest and brings you right back, with your Google Business Profile connected — no code to copy or paste.

![Granting permission to WP Social Ninja](https://docs.wpsocialninja.com/assets/google-business-review-4.D_7cfYX6.webp)

TIP

Manage reviews for more than one location? Click **+ Add Business** to bring in reviews from multiple Business Profiles. And because Google Reviews connect through the secure bridge, WP Social Ninja refreshes the connection automatically in the background — so your reviews keep syncing without you having to reconnect.You've successfully connected your **Google Business Profile Reviews**! Now head over to [Create a Template](./create-template) to display these reviews on your website.

---

## Collect Feedback with Native Review Forms ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/native-review-forms.html](https://docs.wpsocialninja.com/guide/business-reviews/native-review-forms.html)

# Collect Feedback with Native Review Forms ​

The **Native Review Form** is a built-in tool that allows you to collect customer reviews directly on your website without needing third-party form plugins. It provides a streamlined way for customers to submit ratings, text, and even photos, which then feed directly into your moderation dashboard.

This guide walks you through creating, customizing, and displaying your native review form.

## Step 1: Create a New Review Form ​

To begin, you need to generate a form dedicated to your feedback collection.

From your WordPress dashboard, navigate to **WP Social Ninja → Review Forms**. If you have no forms yet, click the **+ Create Form** button in the center of the page.

![Create a REview Form](https://docs.wpsocialninja.com/assets/create-form-1.B_eZUh_1.webp)

## Step 2: Customize Form Display ​

Once the editor opens, the **Form Display** tab allows you to control the initial look and feel of the form.

- **Form Title & Subtitle:** Toggle these on to add a heading (e.g., "Leave a Review") and a short description to guide your users.
- **Rating Style:** Choose the visual icon for your ratings. Options include **Star**, **Heart**, **Emoji**, and **Number**.

![Create a REview Form](https://docs.wpsocialninja.com/assets/form-display-2.DI6Fs0W1.webp)

## Step 3: Configure Form Fields ​

The **Form Fields** tab is where you determine what information you want to collect from your reviewers.

### Available Fields ​

- **Your Name:** Collects the reviewer’s name. You can edit the label and placeholder text, and make it required. This field helps identify who submitted the review.
- **Email Address:** Captures the user’s email. You can customize the label and placeholder, and mark it as required if needed for follow-up or verification.
- **Rating:** Allows users to rate with stars. This is useful for collecting quick feedback and overall satisfaction.
- **Review Title:** Lets users add a summary of their review. You can set a character limit and decide whether this field is required.
- **Your Review:** This is the main text area where users write their detailed feedback. You can control the maximum length and number of visible rows, and make it required.
- **Upload Photos:** Enable this toggle to allow customers to upload images along with their reviews, providing valuable visual social proof.
- **Privacy Policy Agreement:** You can add required checkboxes for **Privacy Policy** (with a custom URL) and a **Permission** statement to ensure you have the right to display the review publicly.

### Field Controls ​

For each field, you can:

- **Enable/Disable:** Show or hide the field using the toggle switch.
- **Label:** Change the field name displayed to users.
- **Placeholder:** Add example text inside the input field.
- **Required:** Make the field mandatory before submission.
- **Max Length / Rows:** Set limits for text input fields.

These options help you fully customize your review form to match your requirements and collect the information you need.

![Create a REview Form](https://docs.wpsocialninja.com/assets/form-field-3.lPVO6pzh.webp)

## Step 4: Configure General Settings & Targets ​

In the **General Settings** tab, you manage the form's behavior and determine where the submitted data is sent.

- **Submission Messages:** Customize the **Button Text** (e.g., "Submit Review") and the **Success Message** users see after submitting.

**Submission Rules:**

- **Require Login:** Toggle this on if you only want registered site users to leave reviews.
- **One Per Email:** Enable this to prevent multiple submissions from the same email address.

**Review Target:** This is a crucial setting. It tells WP Social Ninja which category or product these reviews belong to. You can select:

- **Native Form (Generic):** For general site testimonials.
- **FluentCart Product:** To link reviews directly to items in your [FluentCart](/guide/business-reviews/fluentcart-product-review) store.
- **WooCommerce Product:** To link reviews to specific [WooCommerce](/guide/business-reviews/woocommerce-reviews) products.

![Create a REview Form](https://docs.wpsocialninja.com/assets/general-settings-4.DsxUmXqK.webp)

## Step 5: Enable Spam Protection ​

To keep your reviews clean, use the **Spam Protection** tab. For stronger protection, select **Turnstile**. You will need to provide your **Site Key** and **Secret Key** from the respective provider. If you want to know more about cloudflare turnstile, read this [Documentation](/guide/management-settings/configure-cloudflare-turnstile)

![Create a Review Form](https://docs.wpsocialninja.com/assets/spam-protection-5.bEjDYn76.webp)

## Step 6: Display the Form on Your Site ​

After clicking the **Save** button in the top-right corner, your form is ready to go live.

1. Locate the **Shortcode** in the top bar of the form editor (e.g., 
```
[wpsr_review_form id="2"]
```

).
2. Click the **Copy** icon next to the code.
3. Paste this shortcode into any WordPress page, post, or widget area where you want the review form to appear.

## Managing Your Review Forms ​

Once you have created your Native Review Forms, you can manage them from the main **Review Forms** dashboard.

**Status Toggle:** Use the toggle switch to instantly enable or disable a form on your website without deleting it.

**The options menu:** Click the three-dot menu on the far right of any form to access the following actions:

- **Edit:** Re-open the form builder to modify fields, settings, or styling.
- **Duplicate:** Create an exact copy of an existing form to save time on setup.
- **View Submissions:** Jump directly to the reviews collected by that specific form for moderation.
- **Delete:** Permanently remove the form from your database.

**Search & Bulk Action:** Quickly find a specific form using the **Search** bar or use the **Bulk Action** menu to delete multiple forms at once.

NOTE

All reviews submitted through this form will appear in your **WP Social Ninja → Reviews** dashboard. Depending on your **Global Review Settings**, they will land in either the **Approved** or **Pending** tabs for moderation.![Create a REview Form](https://docs.wpsocialninja.com/assets/edit-delete-6.B2P6ke6i.webp)

---

## Template Styling & Connection ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/template-style-connection.html](https://docs.wpsocialninja.com/guide/business-reviews/template-style-connection.html)

# Template Styling & Connection ​

This guide will walk you through all the options in the **Style** and **Connection** tabs of the Review Template editor.

While the **General Settings** tab controls *what* content is shown (e.g., your platforms, filters, and header), the **Style** tab controls the visual design. This is where you can change all the colors, fonts, spacing, and borders to perfectly match your brand and website's look.

## Style Settings ​

The **Style** tab is organized into several sections, each controlling a different part of your review feed.

### 1. Star Rating ​

This section styles the (★) star ratings that appear on your reviews and in the header.

#### Filled Star ​

- **Filled Star Color:** This opens a color picker to set the color of the "filled" stars (e.g., the 4 gold stars in a 4-star review).

#### Empty Star ​

- **Empty Star Color:** This sets the color of the "empty" or "unfilled" stars (e.g., the 1 gray star in a 4-star review).

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-1.o33OTgyI.webp)

### 2. Header ​

This section controls the complete visual design of the **Header** at the top of your feed. This is the box that contains your overall rating summary, progress bars, and "Write a Review" button.

#### Title ​

This styles the main title of the header (e.g., "What Our Customers Say").

- **Text Color:** Sets the color of the title text.
- **Typography:** Opens a full set of font controls (Font Family, Size, Weight, etc.) for the title.

#### Rating Number ​

This styles the large average rating number (e.g., "4.9").

- **Text Color:** Sets the color of the number.
- **Typography:** Opens the font controls for the rating number.

#### Rating Text ​

This styles the text next to the number (e.g., "out of 5").

- **Text Color:** Sets the color of this text.
- **Typography:** Opens the font controls for this text.

#### Write a Review Button ​

This styles the "Write a Review" button (which you can enable in the General tab).

- **Text Color:** Sets the color of the text inside the button.
- **Background Color:** Sets the main background color of the button.
- **Typography:** Opens the font controls for the button's text.

#### Progress Bar ​

This styles the horizontal bars that show the breakdown of 5-star, 4-star, etc., reviews.

- **Fill Color:** Sets the color of the "filled" part of the bar (the part showing the percentage).
- **Background Color:** Sets the color of the "empty" part of the bar.
- **Progress Text Color:** Sets the color of the text label for the bar (e.g., "5 Star").
- **Typography:** Opens the font controls for the progress bar text.

#### Box ​

This controls the overall container or "box" that holds all the header elements.

- **Background Color:** Sets a background color for the entire header area.
- **Border Type:** Lets you choose the style of the border for the header box (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-2.CLfiU4u5.webp)

### 3. Reviewer Name ​

This section styles the author's name on each individual review card.

- **Text Color:** Sets the color of the reviewer's name.
- **Typography:** Opens the full set of font controls for the name.
- **Spacing Top:** This adds a bit of empty space (in pixels) above the name, pushing it away from the element above it (like the star rating).

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-3.CJY5DqZ_.webp)

### 4. Verified Badge ​

This section styles the "Verified" badge that can appear on reviews.

#### Star Background ​

- **Star Color:** Sets the color of the star icon inside the badge.

#### Checkmark ​

- **Checkmark Color:** Sets the color of the checkmark icon inside the badge.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-4.BgtS8Z3m.webp)

### 5. Author Position ​

This section styles the author's job title (e.g., "Marketing Manager"), which you can add to Testimonials.

- **Text Color:** Sets the color of the author's position text.
- **Typography:** Opens the full set of font controls for this text.
- **Spacing Top:** This adds empty space (in pixels) above the author's position.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-5.Ha_esB-A.webp)

### 6. Review Date ​

This section styles the date (e.g., "October 30, 2025") on each individual review card.

- **Text Color:** Sets the color of the date text.
- **Typography:** Opens the full set of font controls for the date.
- **Spacing Top:** This adds empty space (in pixels) above the date.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-6.B8AOjUOU.webp)

### 7. Title ​

This section styles the main "headline" or "title" of each individual review (e.g., "The Best Plugin Ever!").

- **Text Color:** Sets the color of the review title text.
- **Typography:** Opens the full set of font controls for the review title.
- **Spacing Bottom:** This adds empty space (in pixels) below the title, pushing it away from the main review text.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-7.CwTTkMjn.webp)

### 8. Content ​

This section styles the main body text (the full review) on each individual review card.

- **Text Color:** Sets the color of the main review text.
- **Typography:** Opens the full set of font controls for the review text.
- **Spacing Top:** This adds empty space (in pixels) above the review text.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-8.DxIgJyXv.webp)

### 9. Read More/Less ​

This section styles the "Read More" or "Read Less" link that appears on long reviews.

- **Text Color:** Sets the color of the "Read More/Less" link, making it stand out.
- **Typography:** Opens the full set of font controls for this link.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-9.C_SINosa.webp)

### 10. Platform Name ​

This section styles the platform label (e.g., "Google," "Facebook") that can appear on each review card.

- **Text Color:** Sets the color of the text inside the platform badge.
- **Background Color:** Sets the background color of the platform badge itself.
- **Typography:** Opens the full set of font controls for the platform name.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-10.DRVHnC1u.webp)

### 11. Badge ​

This section styles your template only if you selected the "Badge" layout type in the General tab.

#### Rating Title ​

- **Text Color:** Sets the color of the text (e.g., "Rated").
- **Typography:** Opens font controls for this text.

#### Rating Number ​

- **Text Color:** Sets the color of the average rating (e.g., "4.9").
- **Typography:** Opens font controls for this number.

#### Total Reviews ​

- **Text Color:** Sets the color of the total reviews text (e.g., "Based on 150 reviews").
- **Typography:** Opens font controls for this text.

#### Box ​

- **Background Color:** Sets the background color of the entire badge.
- **Typography:** (This likely refers to a global font setting for the badge if other typography is not set).
- **Border Type:** Lets you choose the style of the border for the badge (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-11.4orMShYi.webp)

### 12. Notification ​

This section styles your reviews only if you are using them in a Notification Popup.

#### Close Icon ​

- **Icon Color:** Sets the color of the "X" (close) icon on the notification.

#### Reviewer Name ​

- **Text Color:** Sets the color of the reviewer's name.
- **Typography:** Opens font controls for the name.

#### Notification Title ​

- **Text Color:** Sets the color of the title text (e.g., "New 5-star review!").
- **Typography:** Opens font controls for the title.

#### Review Time ​

- **Text Color:** Sets the color of the timestamp (e.g., "2 hours ago").
- **Typography:** Opens font controls for the time.

#### Box ​

- **Background Color:** Sets the background color of the entire notification popup.
- **Typography:** (This likely refers to a global font setting for the popup).
- **Border Type:** Lets you choose the style of the border for the popup.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-12.Bo3tYPH8.webp)

### 13. Pagination ​

This section styles the "Load More" button at the bottom of your feed (if you enabled it in the General tab).

- **Text Color:** Sets the color of the text inside the "Load More" button.
- **Background Color:** Sets the main background color of the button.
- **Typography:** Opens the full set of font controls for the button's text.
- **Border Type:** Lets you choose the style of the border for the button (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-13.HiKImfSP.webp)

### 14. Review Box ​

This is a very important section. The **Review Box** is the entire container or "card" that holds each individual review. These settings control the design of that main box.

- **Background Color:** This sets the background color for the entire review card. By default, it's usually white or transparent.
- **Padding:** This is the "breathing room" *inside* the review card. It's the empty space between the card's border and the content inside it (like the star rating and review text). You can set the padding (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Border Type:** This lets you choose the style of the border for the review card (e.g., **Solid**, **Dotted**, **Dashed**, or **None**).
- **Width:** This setting (which appears if you select a Border Type) lets you control the thickness of the border. You can set the thickness (in pixels) for the **Top**, **Right**, **Bottom**, and **Left** sides individually.
- **Color:** This opens a color picker to set the color of the border itself.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-style-14.DPjpjD63.webp)

---

## Connection Settings ​

The **Connection** tab is a simple shortcut. It allows you to connect a new review platform (like Facebook, Google, Yelp, Trustpilot, etc.) right from within the template editor.

This is very useful if you are building a template and realize you want to include a platform you haven't connected yet, or if you want to add multiple accounts from the same platform.

**Please Note:** The steps to connect an account here are identical to the main platform connection process.

![Template style and connection](https://docs.wpsocialninja.com/assets/review-template-connection.DcyTOAil.webp)

For a complete, step-by-step guide on how to connect each platform, please see our main Configuration guides:

- [How to Connect Google Reviews](./google-configuration)
- [How to Connect Facebook Reviews](./facebook-configuration)
- [How to Connect Yelp Reviews](./yelp-configuration)
- [How to Connect Trustpilot Reviews](./trustpilot-configuration)
- (and so on for all other platforms)

---

## Tripadvisor Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/tripadvisor-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/tripadvisor-configuration.html)

# Tripadvisor Reviews ​

WP Social Ninja integrates with TripAdvisor, allowing you to collect and display reviews from the platform to enhance your business's credibility.

It offers two methods for gathering TripAdvisor reviews: using a **Business URL** or through an **API key**. We recommend using the API method, as it allows for a more comprehensive and reliable data transfer. With the API, you can control the frequency and volume of data requests, ensuring a seamless and customizable review collection process.

In this article, we will guide you through the steps to obtain the TripAdvisor API from your TripAdvisor account and how to connect it to WP Social Ninja.

## Get Tripadvisor Credentials ​

To obtain your TripAdvisor credentials, log in to your TripAdvisor [developer account](https://www.tripadvisor.com/developers). From the navigation bar, select **My API** and then click the **Create API Key** button.

![Tripadvisor API Configuration 1](https://docs.wpsocialninja.com/assets/Tripadvisor-1-scaled.Dl47VThK.webp)

TIP

TripAdvisor offers a free API key that allows up to 5,000 requests for local details, photos, or reviews but you have to provide billing details to get this free API. To access additional requests and features, you will need to upgrade to their paid plans. For more information, refer to their [API documentation](https://tripadvisor-content-api.readme.io/reference/overview)*.*To generate your API key, you will need to provide TripAdvisor with some information about your business.

![Tripadvisor API Configuration 2](https://docs.wpsocialninja.com/assets/Tripadvisor-2.DAM01Odv.webp)

Verifying your website is necessary for creating the API. Enter your website address and register it under your business to ensure a smooth API transfer.

In the API Key restriction section, input your domain name and click the **Save** button.

![Tripadvisor API Configuration 3](https://docs.wpsocialninja.com/assets/Tripadvisor-3.B_JFZEfU.webp)

Once you’ve completed the form, your API key will be generated and you will see the domain name you have registered for this API. Just click the **Copy to Clipboard** button to copy the API key.

![Tripadvisor API Configuration 4](https://docs.wpsocialninja.com/assets/image.CnX5yYHd.png)

## Get the Place ID ​

To set up TripAdvisor with WP Social Ninja, you'll need the **Place ID** from your TripAdvisor business profile. You can find it in the URL of your Business profile.

Look for an ID in the URL that starts with the letter 'd'—this is your Place ID. In this case, the actual Place ID is '752551,' excluding the 'd' prefix. Copy the code from the URL.

![Tripadvisor API Configuration 5](https://docs.wpsocialninja.com/assets/Tripadvisor-ID-scaled.DrODOZFp.webp)

## Configuring Tripadvisor with WP Social Ninja ​

After receiving your TripAdvisor credentials, navigate to your WP Social Ninja dashboard and select [Platform](../getting-started/all-platforms-of-wp-social-ninja) from the navigation bar. Search for TripAdvisor and click on the **Settings** icon button.

![Tripadvisor API Configuration 6](https://docs.wpsocialninja.com/assets/tripadvisor-review-1.DplNadw7.webp)

A TripAdvisor configuration popup will appear. Select Credential Type: **API Key**, then paste your **API Key** and **ID** into the appropriate fields. Finally, click the **Save** button.

![Tripadvisor API Configuration 7](https://docs.wpsocialninja.com/assets/tripadvisor-review-2.rbZiG9Jx.webp)

TIP

WP Social Ninja will initially show the 5 most recent reviews from TripAdvisor, which will be stored locally on your site. The plugin will regularly check for new reviews and update your feed as they become available.

---

## Trustpilot Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/trustpilot-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/trustpilot-configuration.html)

# Trustpilot Reviews ​

This guide will show you how to easily connect your Trustpilot Business Page to WP Social Ninja.

The best part about connecting Trustpilot is how simple it is. Unlike other platforms that might require complicated API Keys or developer accounts, Trustpilot only needs one piece of information: your **Business URL**.

This guide will show you exactly what that is, where to find it, and how to connect your account in just a few minutes.

> Why is this so valuable?Trustpilot is one of the most recognized and trusted review platforms in the world. By displaying your high-star ratings and positive reviews directly on your own website, you are building a powerful "trust signal." This shows new visitors that your business is legitimate, that other people have had a good experience, and that they can feel safe buying from you.

## Connect Your Trustpilot Account ​

Follow these simple steps to get your page connected.

### Step 1: Go to the "Platforms" Menu ​

First, log in to your WordPress dashboard.

In the main menu on the left-hand side, find the **WP Social Ninja** icon. Click on it, and then select the [Platforms](../getting-started/all-platforms-of-wp-social-ninja). This is your main "control center" for connecting all your social media and review accounts.

### Step 2: Open the Trustpilot Settings ​

Find the **Trustpilot** row, and click the **Settings icon** button on the right side.

![Trustpilot Review](https://docs.wpsocialninja.com/assets/trustpilot-review-1.Bz8YhSS9.webp)

### Step 3: Find the "Business Domain" Field ​

A pop-up window will appear titled "Trustpilot Configuration."

You will see it has a single empty text box labeled **Enter your business URL to get your reviews**. This is the only piece of information we need to find!

![Trustpilot Review](https://docs.wpsocialninja.com/assets/trustpilot-review-2.btyjcqnl.webp)

Keep this pop-up window open in your browser tab. We are now going to find your Business Domain.

### Step 4: Find and Copy Your Business Domain from Trustpilot ​

This is the most important step, but don't worry, it's very easy.

1. Go to the [Trustpilot](https://www.trustpilot.com/) website.
2. Use the search bar on Trustpilot to search for your company's name.
3. Click on your company from the search results to open its main review page.
4. Now, look at the URL in your browser's address bar at the very top of your screen.

> Example:https://www.trustpilot.com/review/davidsw.com

Carefully **Copy** the URL.

![Trustpilot Review](https://docs.wpsocialninja.com/assets/trustpilot-review-3.C-ZOfsW1.webp)

### Step 5: Connect Your Business in WP Social Ninja ​

Now, go back to your WordPress dashboard browser tab (where the pop-up is still open from Step 3).

1. Click inside the business domain box.
2. Paste the domain you just copied (e.g., 
```
https://www.trustpilot.com/review/davidsw.com
```

).
3. Click the **Save** button.

![Trustpilot Review](https://docs.wpsocialninja.com/assets/trustpilot-review-4.DivRrcSl.webp)

### Step 6: You're Connected! ​

You will now see that the **Trustpilot** row has a green "Connected" status and lists your business domain. This confirms that WP Social Ninja is successfully connected to your Trustpilot page and is ready to start syncing your reviews.

![Trustpilot Review](https://docs.wpsocialninja.com/assets/trustpilot-review-5.CMyJw1rG.webp)

## Next Steps ​

Congratulations! Your Trustpilot account is fully connected and ready to sync reviews.

Now that your account is connected, you're ready for the fun part:

- Click the **Add New Template** button to go to the [template editor](./create-template) and start designing your **Business Reviews** template for Trustpilot.
- You can click the **Add More Business** button if you run another company and want to connect its Trustpilot page as well.

---

## WooCommerce Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/woocommerce-reviews.html](https://docs.wpsocialninja.com/guide/business-reviews/woocommerce-reviews.html)

# WooCommerce Reviews ​

WP Social Ninja simplifies the process of displaying WooCommerce product reviews on your website. You have to follow some easy steps to do this.

## Connecting WooCommerce Reviews ​

Go to your WP Social Ninja plugin's [Platforms](../getting-started/all-platforms-of-wp-social-ninja) section, enable the **WooCommerce** module, and click the **Settings** icon in the right corner.

![Enabling the WooCommerce module and opening its settings](https://docs.wpsocialninja.com/assets/woocommerce-review-1.uF7yOYsm.webp)

INFO

Make sure the WooCommerce plugin is installed on your site and that you have at least one product with a review.The **WooCommerce Configuration** pop-up opens. This is your one screen for connecting products and choosing how their reviews are displayed.

### Connect Your Products ​

Click the **Add More Product** button and choose the product (or products) whose reviews you want to display. Then click **Save** to confirm your selection.

TIP

Already have plenty of reviews in WooCommerce? Click **Sync All Reviews** at the top of the pop-up to bulk-import every existing product review at once. When it finishes, the confirmation tells you exactly how many *new* reviews were imported.
### Choose How Reviews Are Displayed ​

Once your products are connected, decide how WP Social Ninja should display their reviews. You have two options.

#### Option A: Quick Setup — One-Click Review Hub (Pro) ​

Setting up a review hub used to take four separate steps — and it was easy to miss one. Now, a single click does it all.

**Previously**, to make WP Social Ninja your WooCommerce review hub, you had to:

1. Create a review form
2. Build a display template
3. Connect the template's **Write a Review** button to that form
4. Turn on **Main Review Hub**

**Now**, in the **Make WP Social Ninja your WooCommerce review hub** card, just click the **Set Up Review Hub** button. In one click, WP Social Ninja will:

- Create a [Native Review Form](./native-review-forms) automatically
- Build a matching display [template](./create-template) with the **Write a Review** button already connected to that form
- Turn on **Make WP Social Ninja Your Main Review Hub**

There's nothing else to configure — your store is ready to collect and display reviews right away.

#### Option B: Start from a Blank Template ​

Prefer full control over each step? Under **Start from a blank template**, click **Add New Template**. This creates an empty template only, so you'll manually create the review form, connect the **Write a Review** button, and turn on **Main Review Hub** yourself. It takes you to the [template editor](./create-template), where you can design the layout and style for your reviews.

![Selecting a WooCommerce product to fetch reviews for](https://docs.wpsocialninja.com/assets/woocommerce-review-3.B05iWE-f.webp)

## Global WooCommerce Review Settings ​

Manage performance and layout rules across your entire store from **WP Social Ninja → Settings → Reviews Platform → WooCommerce Settings**. These apply to all products connected to a WooCommerce Review Template.

**Note**: These review settings will only apply to products that are connected with a WooCommerce Review Template in WP Social Ninja. If a product is not included in a template, these settings won’t take effect.
### Synchronization ​

- **Auto Syncing**: Enable this to automatically fetch new reviews submitted through WooCommerce. Use the dropdown menu to set how often the plugin should check for new reviews (e.g., 1 day).
- **Sync Product Reviews**: This button allows you to manually sync all your WooCommerce product reviews at any time. Clicking it will immediately fetch any new reviews from your products and add them to WP Social Ninja. This is useful if you have just received new reviews and don't want to wait for the next scheduled auto-sync.

### Customize WooCommerce Reviews Layout ​

- **Make WP Social Ninja Your Main Review Hub**: When enabled, WP Social Ninja takes control of your review display, replacing the standard WooCommerce review style with your selected WP Social Ninja template.
- **Hide the Review Total**: Enable this option to hide the summary text that shows the total number of reviews (e.g., "Based on 15 Reviews").
- **Hide Review Headline**: Enable this to hide the main heading (e.g., "Reviews") from the top of the reviews section on your product pages.
- **Display Location**: This dropdown lets you choose where the review template will appear. - **Display Inside Reviews Tab**: Places reviews inside the default WooCommerce "Reviews" tab.
- **Display Outside Tabs**: Places reviews outside of the tabbed content area.
- **Reviews Form Style**: Select which form visitors will use to submit reviews. - **Inherit from WP Social Ninja**: Uses the custom form you have styled globally.
- **Default Woocommerce Form**: Uses the standard, unstyled WooCommerce form.
- **Review Template**: Choose the default [review template](./create-template) that will be applied to all WooCommerce products across your site. This serves as the primary template for your entire store.

### Interactive Click Behavior & Drawer Styling ​

- **Star Rating Click Behavior:** Define what happens when a user clicks the star rating on a single product page: - **Scroll to review widget:** Smoothly scrolls the user down to the reviews section.
- **Open review drawer:** Launches an interactive slide-in panel displaying the reviews.
- **Drawer Style:** If you use the drawer behavior, select between a **Modern** wide-panel layout or the **Default** slide-in style.

After configuring these options, always click the **Save Settings** button to apply your changes.

![wp social ninja woocommerce settings](https://docs.wpsocialninja.com/assets/woocommerce-review-4.CwbSICtb.webp)

## Enabling Template from WooCommerce product ​

To customize your product reviews in WooCommerce, go to the specific product you want to edit. Click on **Edit** then go to the **Product Data** section and select **WP Social Ninja**.

These settings on the WooCommerce product page let you control how reviews are displayed for this specific item.

- **Select a Template**: Choose a WP Social Ninja [template](./create-template) to control the visual style and layout of the reviews on this product page.
- **Hide reviews total?**: Enable this checkbox to hide the total number of reviews from being displayed.
- **Hide reviews headline?**: Enable this checkbox to hide the "Reviews" heading above the review section.
- **Template placement**: Select where the review template will appear. The default is typically within the WooCommerce "Reviews" tab.
- **Reviews Form**: Choose which review submission form to use. You can select the form from your global WP Social Ninja settings, use the default WooCommerce form, or use [Native Review Form](/guide/business-reviews/native-review-forms).

![social ninja review settings in woocommerce products](https://docs.wpsocialninja.com/assets/woocommerce-review-5.DB3noGXw.webp)

Per-Product Override Indicator (Pro)

When a product has its **own** template selected here, that choice takes precedence over your global **Main Review Hub** template. To help you spot this, WP Social Ninja shows a **"Has Product-Level Override"** badge next to that product in the connected-products list. The badge includes a direct link to the product's **Product Data → WP Social Ninja** tab, so you can review or resolve the conflicting setting in one click.
## Reviews Notification Popup ​

You can also set a pop-up notification of WooCommerce product reviews on your site. The pop-up review notification will show up on your font end site like this.

Go to your Notification pop-settings from WP Social Ninja Dashboard and select [Notification Popups](../advanced-features/notification-popup) then select the **WooCommerce** platform from the **General** tab platform option.

![Notification Popup](https://docs.wpsocialninja.com/assets/woocommerce-review-6.BTf1ZKQE.webp)

By following these steps, you can integrate WooCommerce product reviews into your website using WP Social Ninja, enhancing your user experience and showcasing valuable customer feedback.

---

## Yelp Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/business-reviews/yelp-configuration.html](https://docs.wpsocialninja.com/guide/business-reviews/yelp-configuration.html)

# Yelp Reviews ​

This guide will show you how to connect your Yelp Business Page to WP Social Ninja's **Business Reviews** feature.

Yelp uses an API Key to connect. This is a simple key that you generate on Yelp's developer website. This guide will walk you through the entire process, step-by-step.

> Use Case: This is essential for restaurants, cafes, local shops, and service-based businesses. By connecting Yelp, you can display your valuable, high-star reviews directly on your website, building instant trust and credibility with new customers.

## Part 1: Start the Connection ​

First, let's start inside your WordPress dashboard to see what you need.

1. From your WordPress dashboard, navigate to **WP Social Ninja** in the left-hand menu, and then click on [Platforms](../getting-started/all-platforms-of-wp-social-ninja).
2. On the "Platforms" page, find the **Yelp** row in the Business Review section then click the **Settings icon** button with it.

![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-1.CC-pC9SK.webp)

A pop-up window will appear with fields labeled **API Key** & **Place ID**. This is the things you need to get from Yelp.

![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-2.DyAk7yTH.webp)

## Part 2: Yelp API Key ​

Now, let's go to Yelp's developer portal to generate your key.

### Step 1: Go to Yelp Developers ​

In a new browser tab, go to the [Yelp Developers website](https://www.yelp.com/developers) and log in to your [Yelp account](https://www.yelp.com/developers/v3/manage_app) (the one associated with your business page).

### Step 2: Create App ​

Once login go to the **Manage App** section and create an App by filling in the required information:

- **App Name:** Give it a name you'll recognize, like "My Website Reviews."
- **Industry:** Select the industry that best fits your business.
- **Your Contact Email:** Enter your email address.
- **Description:** Write a brief description, such as "Connecting Yelp reviews to my website."

Click the **Create App** button.

Yelp will immediately take you to a "Success!" page. On this page, you will see your new **API Key**. This is the key you need! Copy the API Key to your clipboard.

INFO

Yelp’s Fusion API no longer provides reviews for free. To fetch Yelp reviews in WP Social Ninja, you need a **Yelp Pro plan**:

- **Pro Enhanced** → Up to **3 review excerpts per business**.
- **Pro Premium** → Up to **7 review excerpts per business**.

These limits are controlled by Yelp, not WP Social Ninja. [Check Yelp Plan and Pricing](https://business.yelp.com/data/products/fusion/).![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-3.F1l6XhLi.webp)

## Part 3: Get Your Place ID (Add Your Business) ​

Now you must add your specific business. To do this, you need your business's **Place ID**.

### Step 1: Find Your Yelp Place ID ​

Your Place ID is simply the unique part of your business's URL on Yelp.com.

1. Go to **Yelp.com** in your browser.
2. Search for your business name and city.
3. Click on your business from the search results to open its main page.
4. Look at the URL in your browser's address bar. Your Place ID is the text that comes after 
```
https://www.yelp.com/biz/
```

.

> Example URL: https://www.yelp.com/biz/bocconcino-san-franciscoYour Place ID: bocconcino-san-francisco

Carefully copy this **Place ID**.

![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-4.BGn4wbPW.webp)

## Part 4: Connect Your Yelp Account ​

Now for the final, easy step.

### Paste Your API Key & Place ID ​

1. Go back to your WordPress dashboard (where you still have the WP Social Ninja pop-up open from Part 1).
2. Paste the **API Key** you just copied into the "API Key" field.
3. Then Paste your **Place ID** (e.g., 
```
bocconcino-san-francisco
```

) into the field.
4. Now click on the **Save** button.

![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-5.BVe1cKcZ.webp)

Your business is now fully connected and will begin to sync reviews.

The **Yelp** row will now show a green "Connected" status.

![Yelp Configuration for Review](https://docs.wpsocialninja.com/assets/yelp-business-review-6.CsoraOSO.webp)

## Next Steps ​

Congratulations! Your Yelp account is fully connected.

Now that your account is set up, you're ready for the fun part:

- Click the **Add New Template** button to go to the template editor and start designing your **Business Reviews** template for Yelp.

---

