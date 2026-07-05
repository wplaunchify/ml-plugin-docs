# How To Configure Smart Coupons

*Category from WooCommerce Smart Coupons documentation*

---

## How to configure Smart Coupons

**Source:** [https://woocommerce.com/document/smart-coupons/how-to-configure-smart-coupons/](https://woocommerce.com/document/smart-coupons/how-to-configure-smart-coupons/)

# How to configure Smart Coupons

			Smart Coupons provide a powerful, “all-in-one” solution for gift cards, store credits, discount coupons, and vouchers extending the core functionality of WooCommerce coupons.

This doc article explains how to setup & configure Smart Coupons plugin.

## Configuration

[↑ Back to top](#doc-title)

### Enable coupons

[↑ Back to top](#doc-title)

This is to activate the use of coupons on your store. Go to **WordPress Admin panel > WooCommerce > Settings > General > Enable coupons**. Tick the ‘**Enable the use of coupon codes**’ checkbox.

![](https://woocommerce.com/wp-content/uploads/2019/10/General-options-highlighted.png?w=980)

### Smart Coupons Settings

[↑ Back to top](#doc-title)

Go to **WordPress Admin panel > WooCommerce > Settings > Smart Coupons**. You’ll find the following Smart Coupons settings:

- **Colors:**Some of the predefined color pallets are listed here. You can choose any one pallet from the listed pallets (as per your theme’s color scheme). The selected pallet’s color will be applied to the coupons that will be displayed on the website.
- **Customize colors**: You can choose your own set of colors that will be applied to the coupons. As you change the colors in this setting, you would see the changes in the coupons below.
- **Styles**: The coupons will look like this on your website. You can choose any one style from the listed styles. The selected style will be applied to all the coupons that are displayed on the website. More about customizing coupon styles [here](https://woocommerce.com/document/smart-coupons/how-to-customize-coupon-style-smart-coupons/).
- **Style for email**: The coupons that will be sent in the email will look like this.![](https://woocommerce.com/wp-content/uploads/2019/10/Customize-Coupons.png?strip=all&w=704)
- **Number of coupons to show**: Enter how many coupons (at max) you want to show on the cart / checkout page.
- **Number of characters in auto-generated coupon code**: This option can be used to set the length of the coupon code that is generated automatically excluding prefix and/or suffix. The default length of the auto generated coupon code is 13. It is recommended to keep this number between 10 to 15 to avoid coupon code duplication.
- **Valid order status for auto-generating coupon**: Choose order statuses that will trigger the auto-generation of coupons.![](https://woocommerce.com/wp-content/uploads/2019/10/General-tab.png?strip=all&w=704)
- **Enable store notice for the coupon**: Search & select a coupon here. The selected coupon here will be displayed as a store notice throughout your website. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/smart-coupons-enable-store-notice-for-coupon.png)]
- **Generated store credit amount**: When “**Include tax in the amount of the generated store credit**” is **enabled/checked**, the generated credit amount will be the same as the amount that is paid by the customer. If this setting is **disabled/unchecked**, then the generated credit amount can be less that the amount that is paid by the customer because the taxes paid by the customer will not be included in the credit amount.
- **Displaying Coupons**: Settings related to displaying coupons on the website. You can enable / disable these settings:
- Include coupon details on product’s page, for products that issue coupons [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-associated-coupons.png)]
- Show coupons available to customers on their My Account > Coupons page [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-myaccount.png)]
- Include coupons received from other people on My Account > Coupons page [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-coupon-received.png)]
- Show invalid or used coupons in My Account > Coupons [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-invalid-used-coupons.png)]
- Display coupon description along with coupon code (on site as well as in emails) [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-coupon-description.png)] ![](https://woocommerce.com/wp-content/uploads/2019/10/Display-Coupons.png?strip=all&w=704)
- **Apply Before Tax**:
- **Deduct credit/gift before doing tax calculations**: Enable this option to deduct store credit / gift card amount before doing tax calculations.![](https://woocommerce.com/wp-content/uploads/2019/10/Tax.png?strip=all&w=704)
- **Store credit discount is inclusive of tax**: When enabled/checked, the store credit amount will also be applied to the tax.
- **Automatic Deletion**: Delete the store credit / gift card when entire credit amount is used up. (Note: It’s recommended to keep it disabled)
- **Coupon Emails**: Enable this option to email auto-generated coupons to the recipients.
- **Printing Coupons**: Enable this option to print coupons. [Learn more about printing coupons](https://woocommerce.com/document/smart-coupons/how-to-print-coupons/).
- **Sell store credit at less price? –**Enable this option to allow selling store credits at a discounted price. [Here’s how](https://woocommerce.com/document/smart-coupons/how-to-sell-gift-card-at-less-price/).
- **Recurring Subscriptions**: This setting will appear only when [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/) is activated. You can enable / disable these settings:
- Use store credit applied in first subscription order for subsequent renewals until credit reaches zero.
- Renewal orders should not generate coupons even when they include a product that issues coupons.![](https://woocommerce.com/wp-content/uploads/2019/10/Recurring-subscriptions-highlighted.png?strip=all&w=704)

### Labels

[↑ Back to top](#doc-title)

Go to **WordPress Admin panel > WooCommerce > Settings > Smart Coupons**. Scroll down to locate the ‘**Labels**’ option. The settings in this section allows you to quickly change text labels through your store.

- **Store Credit / Gift Certificate**: Use this option to rename Store Credit / Gift Certificate on your site. For example, if you want to call Store Credit / Gift Certificate as Gift Cards on your store, then set both the Singular and the Plural name for ‘Gift Card’ in the respective boxes provided. In this case, the Singular name will be ‘Gift Card’ and Plural name will be ‘Gift Cards’.
The renamed label will be shown on all pages that have the text ‘Store Credit / Gift Certificate’ except on Smart Coupons Welcome page, Smart Coupons Settings page and Smart Coupons Privacy Policy guide.
- **Store Credit Product CTA**: For products that sell store credits, the option you choose here will show up instead of ‘Add to Cart’. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-purchase-credit-shop-text.png)]
- **While purchasing Store Credits**: When you opt to allow people to buy store credits of any amount, this label will be used. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-purchase-credit-product-page-text.png)]
- **“Coupons with Product” description**: This is the heading above coupon details displayed on products that issue coupons. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-associated-coupon-description-front.png)]
- **On Cart / Checkout pages**: The title for the list of available coupons, shown on the cart and checkout pages. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-coupon-cart-checkout-title.png)]
- **My Account page**: The title of available coupons on My Account page [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-myaccount-title.png)]

![](https://woocommerce.com/wp-content/uploads/2019/10/Labels.png?w=980)

### Coupon Receiver Details during Checkout

[↑ Back to top](#doc-title)

Go to **WordPress Admin panel > WooCommerce > Settings > Smart Coupons**. Scroll down to locate the ‘**Coupon Receiver Details during Checkout**’ option. The settings in this section allows the buyers to send coupons to others.

- **Allow sending of coupons to others:**Enable this option if you want your buyers to send or gift coupons to someone else.
- **Title**: The title for coupon receiver details block. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-title-coupon-receiver-form.png)]
- **Description**: Additional text below the title. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/sc-coupon-receiver-form-description.png)]
- **Allow schedule sending of coupons?:** Enable this option to allow your buyers to select the date & time for delivering the coupon. [[Preview](https://woocommerce.com/wp-content/uploads/2012/08/schedule-delivery-of-coupon.png)]
- **Combine Emails:** Enable this option to send only one email instead of multiple emails when multiple coupons are generated for the same recipient.

Click on the ‘**Save changes**’ button. That’ it.

![](https://woocommerce.com/wp-content/uploads/2019/10/Send-Coupons-to-form.png?w=980)

[← WooCommerce Smart Coupons Documentation](https://woocommerce.com/document/smart-coupons/)

					
		
## Related Products

	
	
	![](https://woocommerce.com/wp-content/uploads/2012/09/Woo_Subscriptions_icon-marketplace-160x160-2.png)

### WooCommerce Subscriptions

	
			by [Woo](https://woocommerce.com/vendor/woocommerce)

Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis.
				![](https://woocommerce.com/wp-content/uploads/2015/06/skyverge-wc-icon-b2vhw6.png)

### WooCommerce Memberships

	
			by [SkyVerge](https://woocommerce.com/vendor/skyverge)

Power your membership association, online magazine, elearning sites, and more with access control to content/products and member discounts.

---

