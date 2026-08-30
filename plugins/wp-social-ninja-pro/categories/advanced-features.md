# Advanced Features

*Category from WP Social Ninja Pro documentation*

---

## How to Add and Display Testimonials ​

**Source:** [https://docs.wpsocialninja.com/guide/advanced-features/add-testimonials.html](https://docs.wpsocialninja.com/guide/advanced-features/add-testimonials.html)

# How to Add and Display Testimonials ​

The Testimonials feature is a powerful tool that allows you to manually add, manage, and display your best customer reviews.

Unlike the [Business reviews](../business-reviews/) (like [Google](../business-reviews/google-configuration) or [Facebook](../business-reviews/facebook-configuration)) that are fetched automatically, the Testimonials feature is for all the other positive feedback you've collected. This is perfect for reviews you receive via email, private messages, or contact forms.

This guide will walk you through the entire process, from adding your first testimonial to designing a beautiful template to display it.

NOTE

You do not have to type every testimonial in by hand. A [native review form](/guide/business-reviews/native-review-forms) can be set to collect testimonials directly from your customers, including their job title, company and company logo.
## Part 1: How to Add a New Testimonial ​

Before you can create a template, you need to add some testimonials to the plugin.

### Step 1: Go to the Testimonials Tab ​

From your WordPress dashboard, go to **WP Social Ninja → All Testimonials**. This will open the main dashboard where all your manually-added testimonials will be listed.

### Step 2: Add Your First Testimonial ​

Click the **+ Add New Testimonial** button in the top-right corner to get started.

### Step 3: Fill in the Testimonial Details ​

A pop-up window will appear with all the fields you need to create a rich, professional-looking testimonial.

Here is a breakdown of each field:

- **Author Name:** Enter the full name of the person who gave the review (e.g., "John Doe").
- **Author Position:** Enter the person's job title (e.g., "Marketing Manager"). This is great for B2B social proof.
- **Company Name:** Enter the name of their company (e.g., "Example Inc.").
- **Author Website:** Enter the URL of their company's website.
- **Author Image:** Click to upload a photo of the author. This adds a huge amount of authenticity.
- **Company Logo:** Click to upload the author's company logo.
- **Rating:** Click the stars to set a rating from 1 to 5. This is crucial for filtering your templates later.
- **Testimonial Title:** Add a short, powerful "headline" for the review (e.g., "The Best Plugin I've Ever Used!").
- **Testimonial Text:** This is the most important part. Paste the full text of the review here.
- **Video:** Add a video testimonial — see [Adding a Video Testimonial](#adding-a-video-testimonial) below.
- **Video Thumbnail:** The image shown before an uploaded video plays.
- **Date:** Select the date you received the testimonial.
- **Category:** This is a very useful organizing tool. You can create categories (like "Service Reviews," "Product Feedback," etc.) to group your testimonials. This allows you to create templates that only show testimonials from a specific category. See [Organize Reviews with Categories](/guide/business-reviews/organize-reviews-with-categories) for bulk tagging.

### Adding a Video Testimonial ​

A written testimonial is good social proof. A customer saying the same thing on camera is better, and you can attach a video to any testimonial.

In the **Video** field you can either:

- **Paste a link** to a YouTube or Vimeo video, or a direct link to a video file.
- **Upload a video** from your WordPress media library using the **Upload** button. It accepts **MP4**, **WebM**, or **MOV** files.

**About the Video Thumbnail.** If you uploaded a video file, also set a **Video Thumbnail** — this is the image visitors see before they press play. Without one, an uploaded video appears as a black box on your page.

You will only see the Video Thumbnail field when it is needed. YouTube and Vimeo links already carry their own thumbnail, so the field is hidden for those.

NOTE

Paste the full address including 
```
https://
```

. A link without it is rejected when you save.
### Step 4: Save and Manage Your Testimonials ​

Click the **Save Testimonial** button. Your testimonial is now saved!

You will be returned to the "All Testimonials" dashboard, where you will see your new entry in a list. From here, you can click the **Edit** or **Delete** buttons to manage your testimonials at any time.

## Part 2: Customizing Your Testimonial Template (General Settings) ​

Now that you have some testimonials, it's time to create a template to display them on your website.

Go to **WP Social Ninja → Templates** and click **"Add New Template"**. Select **Testimonials** as your platform. This will take you to the template editor. The **General** tab controls *what* your template shows and *how* it functions.

### 1. Template ​

This section controls the visual structure and arrangement of your testimonials.

- **Layout Type:** This is the foundational structure of your feed. - **Grid:** Creates a clean, multi-column grid where all boxes are the same height.
- **Slider:** Displays your testimonials in a horizontal, swipe-able carousel.
- **Masonry:** A "Pinterest-style" grid where boxes have different heights to fit together.
- **Select a Template:** These are pre-designed visual "skins" (e.g., Testimonial 1, Testimonial 2) that change the look of your testimonial boxes.
- **Number of Columns:** Set the number of columns to show on **Desktop**, **Tablet**, and **Mobile**.

### 2. Filters ​

This section is how you refine your feed to only show the specific testimonials you want.

- **Number of Reviews:** Sets the total number of testimonials to load into this template.
- **Filters by Minimum Rating:** A powerful filter. Select "5 Stars" to create a template that only shows your best 5-star reviews.
- **Order:** Sort your testimonials by **Descending** (newest first) or **Ascending** (oldest first).
- **Hide Reviews Without Text:** If turned **On**, this will hide any testimonials that have a star rating but no written text.
- **Filter by Include/Exclude:** Manually select specific testimonials to either **Include** (show only these) or **Exclude** (show all except these).
- **Show reviews containing these words:** Create a topic-specific feed. For example, enter "customer support" to only show testimonials that mention that phrase.
- **Hide reviews containing these words:** A moderation tool to hide testimonials that mention certain words (e.g., "bug," "problem").
- **Filter by Business/Product:** (If applicable) Show testimonials associated with a specific WooCommerce product.
- **Filter by Category:** This is very powerful. It lets you create a template that only shows testimonials from a specific category you created in Part 1 (e.g., "Service Reviews").

### 3. Settings (Content Display) ​

This section controls which pieces of information you want to display on each testimonial card.

- **Display Rating:** Show or hide the star rating.
- **Display Verified Badge:** Show or hide a "Verified" badge for extra trust.
- **Rating Style:** Choose the visual style for the stars.
- **Display Date:** Show or hide the date.
- **Display Author Name:** Show or hide the author's name.
- **Author Name Format:** Choose to display the **Full Name** or just the **First Name**.
- **Display Author Position:** Show or hide the author's job title (e.g., "Marketing Manager").
- **Display Author Company Name:** Show or hide the author's company.
- **Display Author Website Logo:** Show or hide the company's logo. This adds huge credibility.
- **Display Author Image:** Show or hide the author's profile picture.
- **Display Testimonial Title:** Show or hide the main "headline" of the testimonial.
- **Display Testimonial Text:** Show or hide the main body of the review.
- **Content Type:** Choose to show the **Full Content** or a short **Excerpt**.
- **Trim Excerpt Words:** If you chose "Excerpt," set the maximum number of words (e.g., 25) to show. This is key for creating a clean, uniform look.
- **Enable External Links:** A toggle to make any links in the text clickable.
- **Display Video:** Show or hide video testimonials in this template. This is **on** by default. A testimonial without a video is unaffected either way.
- **Equal Height:** Essential for the **Grid** layout. Turn this **On** to force all boxes to the same height. Turn it **Off** for the **Masonry** layout.

#### Choosing How Videos Play ​

By default, WP Social Ninja uses the most sensible player for each video: an uploaded file plays in your visitor's browser player, and a YouTube or Vimeo link plays in that provider's embedded player.

If you also use **Fluent Player**, two extra options appear:

- **Play with Fluent Player:** Turn this on to play your testimonial videos in Fluent Player instead of the default player.
- **Player Design:** Pick one of your existing Fluent Player videos, and these testimonials reuse its design and its layers — such as a title banner, a call to action, or an email capture form.

INFO

The template editor preview never shows Fluent Player. Check the real page on your site to see the finished result.WARNING

If you have turned on GDPR mode, YouTube and Vimeo videos are not embedded, since that setting exists to keep third-party embeds off your pages. Videos you uploaded yourself still play normally, because your own site serves them.
### 4. Pagination ​

This controls how visitors load more testimonials.

- **Pagination Type:** Choose **None** (to show a fixed number) or **Load More** (to add a button).
- **Load More Button Text:** Customize the text (e.g., "Show More Stories").
- **Reviews Per Page:** Set how many new testimonials load each time the "Load More" button is clicked.

## Part 3: Customizing Your Testimonial Template (Style Settings) ​

Now that you've set up the content, click on the **Style** tab to control the visual design. This is where you match your template to your brand's colors and fonts.

---

## How to Collect Testimonials with Fluent Forms ​

**Source:** [https://docs.wpsocialninja.com/guide/advanced-features/collect-testimonials-fluent-forms.html](https://docs.wpsocialninja.com/guide/advanced-features/collect-testimonials-fluent-forms.html)

# How to Collect Testimonials with Fluent Forms ​

Using Fluent Forms, **WP Social Ninja** has introduced an incredible feature for collecting Testimonials. You must need to know how to integrate Fluent Forms with WP Social Ninja to collect testimonials using Fluent Forms on your website.

Let's look at how **WP Social Ninja** may help your business by gathering Testimonials using Fluent Forms.

## Enable the Fluent Forms Integration Module ​

First, go to **Integrations** from the **Fluent Forms** Navbar. Search for **WP Social Ninja** through the search bar or scroll down to find the **WP Social Ninja** module from the list. Then, **Toggle** the switch to **Enable the module**.

This action connects Fluent Forms with WP Social Ninja, allowing them to share data.

### Create Your Testimonial Collection Form ​

Next, you need to configure the specific form you want to use for collecting reviews.

Go to your Fluent Forms dashboard. You can either **Add a New Form** or **edit an existing one**. Ensure your form contains all the fields you want to collect.

Recommended fields include:

- **Author Name** (Text Field)
- **Author URL** (URL Field)
- **Author Image** (File Upload Field)
- **Author Company Name** (Text Field)
- **Title** (Text Field)
- **Testimonial Text** (Text Area Field)
- **Ratings** (Ratings Field)

### Configure the WP Social Ninja Integration Feed ​

Once your form is ready, go to the **Settings & Integrations** section, navigate to the **Configuration Integrations** tab. Click the **Add New Integration** button, and select the **WP Social Ninja Integration** feed from the dropdown list.

After you select the WP Social Ninja integration, a configuration panel will appear. Then, you will find the configuration panel where you must map your form fields to the corresponding testimonial fields in WP Social Ninja.

Here is a breakdown of the fields you need to configure:

- **Name:** Enter a name for this specific integration feed.
- **Switch to Testimonial Mode:** Select **Yes** from the dropdown. This is crucial for mapping testimonial-specific fields like Author Position and Company.
- **Ratings (Required):** Map this to the Ratings field on your form.
- **Author Name (Required):** Map this to the name field on your form.
- **Comment (Required):** Map this to the text area field where users write their testimonial.
- **Title, Author Email, Author Image, etc.:** Map the remaining fields (like Author Position, Company, Website URL) to their corresponding fields on your form.
- **Conditional Logic:** You can enable this to set rules for submissions. For example, you can set a rule to only accept submissions with a 4-star rating or higher.

After mapping the fields, click the **Save Feed** button. Your integration is now active and will appear in the list, where you can edit or delete it later.

The form has been integrated successfully. You can modify or remove the feed by selecting the **Settings** or **Delete** icon. After that, you can **copy** the Form's **shortcode** and paste it into any **page/post**.

### Add a Custom Testimonial ​

First, go to your WP Social Ninja dashboard. From the top menu bar, click on the **Testimonials** tab. This will take you to the "All Testimonials" page. To add a new entry, click the **Add Testimonial** button located in the top-right corner. Learn more about [adding testimonials](./add-testimonials).

### Enter the Testimonial Details ​

After clicking the button, a pop-up form will appear. Here, you can fill in all the details for the testimonial. Once you have entered all the information, click the **Save Testimonial** button at the bottom of the form to add it to your collection. After saving, your new testimonial will appear in the "**All Testimonials**" list.

### Display Your Testimonials on Your Website ​

Finally, to display the testimonials collected through your form, you need to create a [template](../getting-started/templates-overview) in WP Social Ninja. Copy the template's [shortcode](../integrations/shortcode-usage) and paste it onto any page or post where you want your testimonials to appear.

- Go to your **WP Social Ninja dashboard → Templates**.
- Click the **Add New Template** button and select **Add Testimonial Template**.
- Customize the layout and style of your template in the editor. The testimonials submitted through Fluent Forms will automatically be pulled into this template.

After clicking on the **Add Testimonial Template**, let’s look at how it looks on the frontend.

Collecting Testimonials in Fluent Forms is as simple as a slice of pie!

You can also check out - **How to Add Fluent Forms Reviews with WP Social Ninja** here.

---

## Notification Popup ​

**Source:** [https://docs.wpsocialninja.com/guide/advanced-features/notification-popup.html](https://docs.wpsocialninja.com/guide/advanced-features/notification-popup.html)

# Notification Popup ​

Want to show off your best reviews as live social proof? WP Social Ninja’s **Notification Popup** feature lets you display your reviews one by one in a small, eye-catching pop-up on your site.

This is a fantastic way to build trust and show visitors that real people are enjoying your products or services. Let's walk through how you can set it up!

## Create a New Notification Popup ​

To get started, you first need to create a pop-up template.

From your WordPress dashboard, navigate to **WP Social Ninja → Notification Popups**. Click the "**Add New Popup**" button in the top-right corner to open the editor.

## Configuring Your Popup (General Tab) ​

The **General** tab is where you select which reviews to display and set the **basic style**.

**Select Platforms:** First, you need to select your source. Click on the **Platforms** section and check the box for where you want to pull reviews from, like [Testimonial](../advanced-features/add-testimonials), [Fluent Forms](../business-reviews/fluent-forms-review), [Google My Business](../business-reviews/google-configuration), [Booking.com](../business-reviews/booking-com-configuration), **Amazon**, [Tripadvisor](../business-reviews/tripadvisor-configuration), or [WooCommerce](../business-reviews/woocommerce-reviews) etc.

**Select a Template:** Next, click on the **Template** section. This allows you to choose the visual style for your pop-up. Select a design you like, such as **Vega, Spica, or Sirius**. You can click the **see all** button to find all the available template.

## Customize Your Notification Settings ​

This is the most important section for controlling how, where, and when your pop-ups appear. Click on the **Notification** tab to see all the options.

Here’s what each setting does:

- **Custom Notification Title:** Change the default text. For example, you can write "Just left us a 5-star review!" to add a personal touch.
- **Notification Position:** Choose which corner of the screen the pop-up will appear in (e.g., "Float Left Bottom" or "Float Right Bottom").
- **Display Reviews in:** Select what happens when a visitor clicks the pop-up. The **Popup** option will open a larger lightbox showing a feed of all your reviews.
- **Display 'Read all reviews' Button:** Toggle this on to show a button that links to your main reviews page (if you have one).
- **Include Pages to Display Notification:** This controls where the popups will appear. You can choose "Everywhere" to show them on all pages, or select specific pages.
- **Exclude Pages to Hide Notification:** Use this to prevent popups from showing on specific pages, such as your "Checkout" or "Thank You" page.
- **Or Display by Post Type:** This is another option to control display. For example, you could choose to only show popups on your "Posts."
- **Hide Notification on Desktop / Mobile:** Use these toggles to hide the pop-ups on certain devices.
- **Display Close Button:** This shows a small "X" on the pop-up so users can close it.
- **Display Date:** Show or hide the date the review was left.
- **Initial Delay:** This is the time (in milliseconds) to wait before the first pop-up appears after a visitor loads your page. (e.g., 6000ms = 6 seconds).
- **Delay Between:** This is the time (in milliseconds) to wait between each notification. (e.g., 5000ms = 5 seconds). Display For: This sets how long (in milliseconds) a single pop-up will stay on the screen before hiding. (e.g., 6000ms = 6 seconds).

When you're all done, don't forget to click the **Save** button! You can also use the **Filters, Header, and Style** tabs to refine further which reviews are shown and how they look, just like a standard feed template.

---

