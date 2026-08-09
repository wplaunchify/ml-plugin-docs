# How To Import Coupons In Bulk Using A Csv File

*Category from WooCommerce Smart Coupons documentation*

---

## How to import coupons in bulk using a CSV file

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-import-coupons-in-bulk-using-a-csv-file/](https://woocommerce.com/document/smart-coupons/how-to-import-coupons-in-bulk-using-a-csv-file/)

# How to import coupons in bulk using a CSV file

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, gift certificates, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how using Smart Coupons, you can import coupons in bulk using a structured CSV file.

A [sample.csv](https://woocommerce.com/wp-content/uploads/2019/11/sample.csv) file is included in the Smart Coupons plugin folder within your WordPress install. You can use this as a starting point to create an import file.

**Important**: If you’re importing coupons on a site having a different language, make sure the 
```
discount_type
```

 column of your CSV file has the translated value of the corresponding discount type.

## Steps to Import Coupons

[↑ Back to top](#doc-title)

1. Go to your WordPress Admin dashboard. Under **Marketing > Coupons**, click on the ‘**Import Coupons**‘ tab.
2. Click the **‘Choose a CSV file’** button and upload your file.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-import-page-one.png?strip=all&w=704)
3. Click on the **‘Upload file’** button.
4. You can also send the generated coupon code to the respective customer at the time of import. This works with the **Usage restrictions > Allowed emails** option. Any email address you entered will receive the coupons once they are imported.
5. Click **Import** and wait for a message about importing.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-import-step-2.jpg?strip=all&w=704)

## How to Import Coupons with Categories

[↑ Back to top](#doc-title)

Smart Coupons provides a feature using which you can set a category or multiple categories to a coupon or multiple coupons.

Categories help you identify a group of coupons based on certain requirements and usage. For example, holiday season coupons, deal sites coupons, etc.

### Steps to import coupons with categories

[↑ Back to top](#doc-title)

1. Go to your WordPress Admin dashboard. Under **Marketing > Coupons**, click on the ‘**Import Coupons**‘ tab.
2. Download the 
```
sample.csv
```

 file as shown in the image below.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-csv-import-file.png?strip=all&w=704)
3. Give a name to your CSV file. Make sure your CSV file contains the column “**sc_coupon_category**” as shown in the image below.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-category-column-name.png?strip=all&w=704)
4. Now, go to your WordPress Admin dashboard. Under **Marketing > Coupons**, you will see the “**Manage Coupon Categories**” button. Click on it & you’ll be redirected to a page from where you can manage (add, update, delete) coupon categories. Refer to [this](https://woocommerce.com/document/smart-coupons/how-to-categorize-coupons/) doc on how to create and manage coupon categories.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-access-coupon-categories.png?strip=all&w=704)
5. Add your preferred categories and note down the coupon category ID. These ID’s will be used under the “**sc_coupon_category**” column in the CSV file.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-category-ids.png?strip=all&w=704)
6. Add the noted category IDs under the column “**sc_coupon_category**” in your CSV file along with other coupon data. Save your CSV file. If you want to set multiple categories then you can separate the category ids with a pipe (|). For example, 38|37|36.![](https://woocommerce.com/wp-content/uploads/2019/10/woocommerce-smart-coupons-categories-ids.png?strip=all&w=704)
7. Go to **Marketing > Coupons > Import Coupons**
8. Refer to the [above-mentioned steps](https://woocommerce.com/document/smart-coupons/how-to-import-coupons-in-bulk-using-a-csv-file/#section-1) to know how you can upload this CSV file to import coupons.

Additionally, if you find it difficult to create and edit values from the 
```
sample.csv
```

 file, you can also use the “**Export to CSV**” feature after adding your preferred coupon values. Go to your WordPress Admin dashboard. Under **Marketing > Coupons**, click on the “**Bulk Generate**” tab. Enter the coupon values and click on “**Export to CSV**“. Then, follow the steps mentioned above.

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

WooCommerce Subscriptions is a WooCommerce extension that lets customers subscribe to your products or services and pay on a weekly,...
				![](https://woocommerce.com/wp-content/uploads/2012/07/Table_Rate_Shipping_icon-marketplace-160x160-2.png)

### Table Rate Shipping

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Advanced, flexible shipping. Define multiple shipping rates based on location, price, weight, shipping class or item count.

---

