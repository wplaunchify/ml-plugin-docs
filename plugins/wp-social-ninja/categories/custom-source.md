# Custom Source

*Category from WP Social Ninja documentation*

---

## Custom Source Overview ​

**Source:** [https://docs.wpsocialninja.com/guide/custom-source/custom-source-overview.html](https://docs.wpsocialninja.com/guide/custom-source/custom-source-overview.html)

# Custom Source Overview ​

The **Custom Sources** feature is a powerful tool that gives you complete control over your reviews. It allows you to create your own "review platforms" right inside **WP Social Ninja**, moving beyond the limits of standard platforms like Google or Facebook.

With Custom Sources, you can:

- Manually add reviews one by one, including the reviewer's name, photo, and a source URL.
- Bulk-import hundreds of reviews from a CSV file.
- Export your custom reviews for backup.
- Collect new reviews with a **Native Review Form** or by connecting a **Fluent Form**.
- Brand your source with a custom logo and name (e.g., "Website Testimonials") to represent your own company or an external source.

## How to Get Started ​

To begin, navigate to your WordPress dashboard and go to **WP Social Ninja → Custom Sources**.

If you don't have any sources yet, you'll see a blank page. Click the "**+ Add Source**" button to get started.

## The First Big Choice: Custom or Fluent Forms or Native Forms ​

When adding a new source, the first important step is selecting the **Source Type**. This determines how your reviews will be collected or added. WP Social Ninja offers **Custom**, **Native Review Form**, and **Fluent Forms** options, and each serves a different purpose.

### 1. Custom ​

- **What it is:** Use this option to display reviews you already have. These might be reviews collected from another platform or gathered manually in the past.
- **Use this if:** You want to add reviews manually one by one or import them in bulk from a CSV file.
- **Next Step:** After selecting this option, you’ll see a dashboard where you can click **+ Add Custom Review** to add reviews manually or **Import** to upload a CSV file.
- **Read the full guide:** [How to Manually Add or Import Custom Reviews](/guide/custom-source/manually-add-or-import-custom-reviews)

### 2. Native Review Form ​

- **What it is:** This is the built-in way to collect new reviews directly on your website without needing any third-party plugins.
- **Use this if:** You want a simple, high-performance "Write a Review" form that allows users to submit ratings, text, and photos directly into your system.
- **Next Step:** Select your desired Review Form from the dropdown menu to link it to this source.
- **Read the full guide:** [How to Collect Feedback with Native Review Forms](/guide/business-reviews/native-review-forms)

### 3. Fluent Forms ​

- **What it is:** Choose this option to collect *new* reviews directly from visitors on your website.
- **Use this if:** You want to create a “Write a Review” form using Fluent Forms. Once a visitor submits their review, it will automatically appear in your review source.
- **Next Step:** After selecting this option, you’ll be taken to a dashboard where you can connect your Fluent Form.
- **Read the full guide:** [How to Collect Reviews with a Fluent Forms Custom Source](/guide/custom-source/fluent-forms-custom-source)

## What Happens Next? ​

Once you create a source (using either method), it will now appear as a new, selectable platform in your **Review Template Editor**, right alongside Google, Facebook, and WooCommerce. You can then select, style, and display it anywhere on your site using its shortcode.

---

## Export Your Old Custom Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/custom-source/export-your-old-custom-reviews.html](https://docs.wpsocialninja.com/guide/custom-source/export-your-old-custom-reviews.html)

# Export Your Old Custom Reviews ​

WP Social Ninja is introducing a new and better way to manage Custom Sources. If you already have reviews created using the old Custom Reviews system, we recommend moving them to a new Custom Source. This will make your reviews easier to manage and keep them compatible with future updates.

This guide walks you through three simple steps to move your existing reviews into the new system.

## Step 1: Create a New Custom Source ​

Before moving your data, you need a dedicated space to hold your imported reviews.

Navigate to your WordPress dashboard and go to **WP Social Ninja → Custom Sources**. Click the **+ Add Custom Source** button located in the top-right corner.

In the General Settings pop-up, select the Custom source type. Enter a descriptive name for your source (e.g., "Legacy Reviews" or "Old Testimonials") and click **Create Source**.

## Step 2: Export Your Old Custom Reviews ​

Next, download your existing custom reviews as a CSV file using the plugin's built-in export tool.

Go to **WP Social Ninja → Tools** and select the **Export** tab from the sidebar.

Under **Select Data Type**, choose **Custom Reviews (Deprecated Soon)** from the dropdown menu. Click the **Export** button. A CSV file containing all your legacy custom reviews will be saved to your computer.

## Step 3: Import Reviews into the New Custom Source ​

The final step is to upload your exported CSV file into the new Custom Source you created in Step 1.

Still in the **Tools** section, switch to the **Import** tab.

Under **Select Import Type**, choose **Custom Sources Reviews**. Next, click **Choose File** and select the CSV file you just downloaded to your computer.

In the field labeled "Where would you like to import the reviews?", select the name of the new Custom Source you created in Step 1.

After that, click the **Import** button to finalize the migration.

Your old reviews have been successfully moved to the new Custom Sources system! You can now manage them alongside any new sources you create.

---

## How to Collect Reviews with a Fluent Forms Custom Source ​

**Source:** [https://docs.wpsocialninja.com/guide/custom-source/fluent-forms-custom-source.html](https://docs.wpsocialninja.com/guide/custom-source/fluent-forms-custom-source.html)

# How to Collect Reviews with a Fluent Forms Custom Source ​

The **Fluent Forms** source type allows you to collect new reviews directly from your website quickly and automatically.

With this feature, you can:

- Build a “Write a Review” form using Fluent Forms.
- Automatically send submitted reviews into a dedicated Custom Source inside WP Social Ninja.
- Approve, manage, and display these reviews just like reviews from other platforms.

It’s the simple and easy way to gather authentic feedback from your customers and showcase it beautifully on your site.

## Before You Begin: Create Your Form ​

Before you can use this feature, you must first create your review form in **Fluent Forms**. This form is the "entry point" for your reviews.

When building your form, you must include the "**Social Ninja Rating**" field (available in the Fluent Forms editor) for the star rating to work.

## Step 1: Create Your "Fluent Forms" Source ​

First, you’ll need to create a dedicated source to receive your new form submissions.

From your WordPress dashboard, go to **WP Social Ninja → Custom Sources**. Click the "**+ Add Source**" button.

In the pop-up that appears, select **Fluent Forms**. Then, click the **Next** button.

A new pop-up will appear under the **General Settings** section. Here, you can either select a template from the list or enter an existing **Fluent Forms ID** if you already have a form created. Once you’ve made your selection, click the **Create Source** button to proceed.

You’ll then be redirected to the dashboard of your newly created source. This dashboard will act as your new moderation queue, catching all the reviews that come from your connected form.

## Step 2: Add Reviews to Your Source ​

You have two ways to add your existing reviews: manually (one by one) or by importing a file (in bulk).

### Method A: Add Reviews Manually ​

This is the easiest and quickest way to add reviews.

Here you’ll see the source name on the left side. Now, on your source's dashboard, click the "**+ Add Custom Review**" button in the top-right corner.

A detailed form will pop up. Fill in as much information as you can:

- **Reviewer Name:** The name of the person who left the review.
- **Reviewer URL:** A link to the reviewer's website or profile (optional).
- **Reviewer Image:** Upload a photo of the reviewer.
- **Review Title:** The headline of the review.
- **Reviewer Text:** The main content of the review.
- **Review Date & Rating:** The date and the 5-star rating.

After that, click the "**Save**" button. The review will now appear in your list.

### Method B: Import Reviews from a CSV (in Bulk) ​

This method is the quickest way to upload a large number of reviews at once.

To start, go to your source’s dashboard and click the **Import** button at the top of the page.

Next, select the **Form ID** where you want to import these reviews from the dropdown list.

Once everything is set, click the **Import** button. All your reviews will be automatically added to your source. If you’d like to know more about exporting or importing reviews, check out the detailed Export/Import [Documentation](/guide/import-export-migration/export-import-custom-reviews).

## Step 3: Manage and Brand Your Source ​

Once your source is created and your Fluent Form is connected, you can manage all incoming reviews and customize your source's branding.

#### Manage Reviews ​

As visitors submit their reviews through your form, they will appear in this dashboard. Use the **Status** toggle to approve (make public) or hide any review. You can also click the **three-dot menu** to **Edit**, **Duplicate**, or **Delete** a review.

#### Get Reviews via QR Code ​

This button generates a QR code that you can share. When scanned, it will take users directly to the page containing your review form, making it easy to collect feedback. To know more about QR codes, read [this documentation](/guide/business-reviews/generate-qr-code-for-reviews).

#### Brand Your Source ​

Click **General Settings** to open a pop-up where you can upload a **Source Logo** (like your business logo), update the **Source Label**, and add a **Source Link URL**. These details will appear in your review templates, helping you maintain a consistent and professional brand look. Once done, click **Save Settings**.

## Step 4: Display Your Reviews on Your Website ​

Now that your source is set up to collect reviews, you can showcase them anywhere on your site.

Go to **WP Social Ninja → Templates** and create a new **Review Template** (or edit an existing one). In the template editor, open **General → Platforms**. Find and select your newly created source (e.g., 
```
Student Testimonials
```

).

Now, you can customize the design under the **Style** tab to match your website’s look. Click **Save Template** when you're done.

NOTE

If you want to learn more about the template styling, then see the [documentation](/guide/business-reviews/template-style-connection).Your template will generate a shortcode. Simply copy and paste it into any page, post, or widget area to display your new, form-collected reviews beautifully on your website!

---

## How to Manually Add or Import Custom Reviews ​

**Source:** [https://docs.wpsocialninja.com/guide/custom-source/manually-add-or-import-custom-reviews.html](https://docs.wpsocialninja.com/guide/custom-source/manually-add-or-import-custom-reviews.html)

# How to Manually Add or Import Custom Reviews ​

The **Custom** source type is ideal if you already have reviews that you want to display on your website. These could include testimonials collected through email, feedback from offline customers, or reviews imported from another platform.

With this option, you can either:

- Add reviews manually one by one, or
- Import them in bulk using a CSV file.

This gives you full control over how your existing reviews appear in WP Social Ninja.

## Step 1: Create Your "Custom" Source ​

First, you’ll need to create a Custom Source, a dedicated space to store your manual or imported reviews. Here’s how:

From your WordPress dashboard, go to **WP Social Ninja → Custom Sources**. Click the **+ Add Source** button.

In the pop-up that appears, select **Custom**. Enter a descriptive name for your source. For example, 
```
Website Testimonials
```

 or 
```
Offline Feedback
```

. Then, click **Create Source**.

You’ll then be redirected to the dashboard of your newly created (and currently empty) custom source.

## Step 2: Add Reviews to Your Source ​

You have two ways to add your existing reviews: manually (one by one) or by importing a file (in bulk).

### Method A: Add Reviews Manually ​

This is great for adding reviews quickly.

Here you’ll see the source name on the left side. Now, on your source's dashboard, click the "**+ Add Custom Review**" button in the top-right corner.

A detailed form will pop up. Fill in as much information as you can:

- **Reviewer Name:** The name of the person who left the review.
- **Reviewer URL:** A link to the reviewer's website or profile (optional).
- **Reviewer Image:** Upload a photo of the reviewer.
- **Review Title:** The headline of the review.
- **Reviewer Text:** The main content of the review.
- **Review Date & Rating:** The date and the 5-star rating.

After that, click the "**Save**" button. The review will now appear in your list.

### Method B: Import Reviews from a CSV (in Bulk) ​

This is the fastest way to add hundreds of reviews at once.

From your source's dashboard, click the "**Import**" button at the top of the page.

Now, under **Select Import Type**, choose "**Custom Sources Reviews**" from the dropdown menu.

**Important:** Click "**Download Sample CSV**" to get the correct template. This is a very important step to ensure your columns match.

Open the sample file and fill in your reviews, making sure to keep the column headers like 
```
reviewer_name
```

, 
```
rating
```

, and 
```
review_text
```

.

Save your file, then upload it using the "**Choose File**" button. After that, click to the "**Import**" button. Your reviews will be added to your source. If you want to learn more about export/import, then read [this documentation](/guide/import-export-migration/export-import-custom-reviews).

## Step 3: Manage and Brand Your Source ​

Once you’ve added your reviews, you can easily manage and customize your source to match your brand.

#### Manage Reviews ​

In your source dashboard, you’ll see all your added reviews. Use the **Status** toggle to approve or hide any review. You can also click the **three-dot menu** to **Edit**, **Duplicate**, or **Delete** a review.

#### Brand Your Source ​

Click **General Settings** to open a pop-up where you can upload a **Source Logo** (like your business logo), update the **Source Label**, and add a **Source Link URL**. These details will appear in your review templates, helping you maintain a consistent and professional brand look. Once done, click **Save Settings**.

## Step 4: Display Your Reviews on Your Website ​

Now that your custom source is ready, you can showcase those reviews anywhere on your site!

Go to **WP Social Ninja → Templates** and create a new **Review Template** (or edit an existing one). In the template editor, open **General → Platforms**. Find and select your newly created source (e.g., 
```
Website Testimonials
```

).

Now, you can customize the design under the **Style** tab to match your website’s look. Click **Save Template** when you're done.

NOTE

If you want to learn more about the template styling, then see the full detailed [documentation](/guide/business-reviews/template-style-connection).Your template will generate a shortcode. Simply copy and paste it into any page, post, or widget area to display your custom reviews beautifully on your website!

---

