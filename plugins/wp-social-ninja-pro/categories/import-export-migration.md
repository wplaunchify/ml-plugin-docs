# Import Export Migration

*Category from WP Social Ninja Pro documentation*

---

## How to Export/Import ​

**Source:** [https://docs.wpsocialninja.com/guide/import-export-migration/export-import-custom-reviews.html](https://docs.wpsocialninja.com/guide/import-export-migration/export-import-custom-reviews.html)

# How to Export/Import ​

With WP Social Ninja, you can effortlessly import and export your feeds, templates, reviews, testimonials, notification popup templates, and chat widgets. This makes the process of creating and transferring your content more seamless and efficient.

In this article, we'll guide you through the steps to import and export your contents.

## Export ​

Navigate to the **Tools** section of WP Social Ninja from the left sidebar in WordPress. Here, you will find the **Export** and **Import** options.

First, choose the data you want to export by selecting it from the drop-down menu. You'll have the following options:

- [Reviews](../business-reviews/)
- [Testimonials](../advanced-features/add-testimonials)
- Feed and Reviews [Template](../getting-started/templates-overview)
- [Notification Popups](../advanced-features/notification-popup) Template
- [Chat Widgets](../social-chat/chat-widget-configuration)

After selecting the data, pick the specific template you want to export.

Please note that **Reviews** and **Testimonial** content will be exported in **CSV** format. Similarly, **Feed and Reviews Template**, **Notification Popup Template**, and **Chat Widget** will exported in **JSON** format.

It's important to mention that when exporting the Feed and Reviews option, only the Template Settings of WP Social Ninja will be exported. The reviews themselves cannot be exported because they won't appear on another site during import.

This happens because the other site doesn't have the necessary authorization to display reviews from the platform. Not all platforms require this authorization, but platforms like [Facebook](../business-reviews/facebook-configuration), [Instagram](../social-feeds/instagram-configuration), [Tripadvisor](../business-reviews/tripadvisor-configuration), and [Yelp](../business-reviews/yelp-configuration) do require authorization.

![wpsocialninja export import 1](https://docs.wpsocialninja.com/assets/export-import-1.DtJpVVJr.webp)

## Import ​

To import data into WP Social Ninja, click on the **Import** option from the left sidebar. Then, choose the type of data you want to import from the dropdown menu. Next, click on the **Choose File** button to select the file from your local storage.

Once you've selected the file, click on the **Import** button to upload it.

One thing to keep in mind is that **Reviews and Testimonial** content will be imported in **CSV** format. **Feed and Reviews Template**, **Notification Popup Template**, and **Chat Widget** will be imported in **JSON** format.

For your convenience, a demo CSV file is provided, showing the format of the CSV you're uploading. This helps you understand the correct structure for your import.

![wpsocialninja export import 2](https://docs.wpsocialninja.com/assets/export-import-2.p4JKpiye.webp)

---

## Migrate from Judge.me ​

**Source:** [https://docs.wpsocialninja.com/guide/import-export-migration/migrate-from-judge-me.html](https://docs.wpsocialninja.com/guide/import-export-migration/migrate-from-judge-me.html)

# Migrate from Judge.me ​

This guide provides a step by step process for transferring your WooCommerce product reviews from Judge.me directly into WP Social Ninja.

#### Step 1: Export Reviews from Judge.me ​

First, you need to export your existing reviews from your Judge.me [account](http://judge.me).

- Log in to your **Judge.me** dashboard where you manage your product reviews.
- Click the **Export Reviews** button. This will download a CSV file containing all your review data.

![judgeme export](https://docs.wpsocialninja.com/assets/judgeme-export-scaled.CdmVH4Kw.webp)

For detailed steps on exporting Judge.me, please refer to this [documentation](https://judge.me/help/en/articles/8236266-exporting-reviews).

#### Step 2: Import Reviews into WP Social Ninja ​

Next, you need to import the CSV file into WP Social Ninja.

- From your WordPress dashboard, navigate to **WP Social Ninja → Tools**.
- Select the **Import** tab.
- In the **Import** section, click the dropdown menu and select **Judge.me Reviews**.
- Click **Choose File** and upload the CSV file you just downloaded from Judge.me.
- Click the **Import** button to begin the migration process.

![judgeme import](https://docs.wpsocialninja.com/assets/judgme-import.BZG9I3To.webp)

**Note:** Please be aware of the following when migrating:

- **Same Site Migration:** If you are importing reviews on the **same site** you exported from, no changes are needed in the CSV file.
- **Different Site Migration:** If you are moving reviews to a **different site**, you have to manually edit the CSV file before importing. Ensure the product IDs in the file match the corresponding WooCommerce product IDs on your new site. If the IDs do not match, the reviews will not be linked to the correct products.

#### Step 3: Verify Your Reviews ​

Once the import is complete, go to the **All Reviews** section in WP Social Ninja. You will find all your migrated Judge.me reviews displayed there and associated with your WooCommerce products.

To learn more about collecting reviews from WooCommerce, see this documentation.

---

