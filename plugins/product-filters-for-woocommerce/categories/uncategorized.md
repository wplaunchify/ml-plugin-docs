# Uncategorized

*Category from Product Filters for WooCommerce documentation*

---

## Product Filter Design Modification Guide (CSS)

**Source:** [https://woobewoo.com/documentation/product-filter-design-modification-guide-css/](https://woobewoo.com/documentation/product-filter-design-modification-guide-css/)

Create and customize filters for your online store using the free [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) WordPress plugin.

This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

In this documentation, we will explain how to customize filter elements to match your design and enhance the user experience.

### How to change the design of filters individually when there are several of them

If there are multiple filters on the site and you want to change the design of a specific one, append the ID of that filter to the CSS code.

*Read How to Configure CS for Product Filter here: https://woobewoo.com/documentation/how-to-configure-css/*

**Adding styles for the id=11 filter:**
```
.wpfMainWrapper select,
.wpfMainWrapper select option {
color: #0DA3B0;
background-color: #9FDDE2;
}
```

```
.wpfMainWrapper[data-filter=11] select {
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
}
```

**Adding styles for the id=12 filter:**

```
.wpfMainWrapper[data-filter=12] select {
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
}
```

![width=454](https://woobewoo.com/wp-content/uploads/2025/03/product_filter_design_modification_guide2-300x68.png)

### Explanation of the Code

- - **.wpfMainWrapper select, .wpfMainWrapper select option** : This style applies to all 
```
select
```

 elements and their options within the 
```
.wpfMainWrapper
```

 container, setting the text color and background color.
- **.wpfMainWrapper[data-filter=11] select**: This style applies only to the filter with ID 11, adding a border radius to the top-left and bottom-left corners.
- **.wpfMainWrapper[data-filter=12] select**: This style applies only to the filter with ID 12, adding a border radius to the top-right and bottom-right corners.

## 

### Conclusion

Following these steps, you can easily change the filter design and customize styles for specific filters.

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Filter by Downloadable / Virtual

**Source:** [https://woobewoo.com/documentation/filter-by-downloadable-virtual/](https://woobewoo.com/documentation/filter-by-downloadable-virtual/)

WooBeWoo Product Filter for WooCommerce can filter by absolutely all product fields. And despite the fact that the downloadable / Virtual fields are not presented as separate filters by default, you can easily include filtering blocks by these parameters in your filter. And this tutorial will help you enable and configure filters on the fields Downloadable / Virtual

![width=1297](https://woobewoo.com/wp-content/uploads/2022/09/ice_screenshot_20220905-205620.png)

### How to add a filter by Downloadable / Virtual?

This filter type is added using an attribute filter. To do this, in the Filters tab in the Select filters to add field, select attribute and click Add.

![width=1668](https://woobewoo.com/wp-content/uploads/2022/09/attrubute.png)

Now in the Select attribute field, you must select the [Custom meta field](https://woobewoo.com/documentation/filter-by-custom-meta-field/) as an attribute.  And now in the custom meta field input field, enter the desired parameter. For example:

- **_downloadable**
- **_virtual**

![width=1684](https://woobewoo.com/wp-content/uploads/2022/09/ice_screenshot_20220905-210004.png)

This way you can add an unlimited number of attribute filters. After the filter is added, you can configure it like any **attribute filter**.

---

## Filter by Length, Width, Height and Weight

**Source:** [https://woobewoo.com/documentation/filter-by-length-width-height-and-weight/](https://woobewoo.com/documentation/filter-by-length-width-height-and-weight/)

WooBeWoo Product Filter for WooCommerce can filter by absolutely all product fields. And despite the fact that the Length, Width, and Height fields are not presented as separate filters by default, you can easily include filtering blocks by these parameters in your filter. And this tutorial will help you enable and configure filters on the fields Length, Width, Height, and Weight

![width=1295](https://woobewoo.com/wp-content/uploads/2022/09/ice_screenshot_20220905-190701.png)

### How to add filter by Length/Width/Height/ Weight?

This filter type is added using an attribute filter. To do this, in the Filters tab in the Select filters to add field, select attribute and click Add.

![width=1668](https://woobewoo.com/wp-content/uploads/2022/09/attrubute.png)

Now in the Select attribute field, you must select the [Custom meta field](https://woobewoo.com/documentation/filter-by-custom-meta-field/) as an attribute.  And now in the custom meta field input field, enter the desired parameter. For example:

- **_length**
- **_width**
- **_height**
- **_weight**

![width=1679](https://woobewoo.com/wp-content/uploads/2022/09/ice_screenshot_20220905-190943.png)

This way you can add an unlimited number of attribute filters. After the filter is added, you can configure it like any **attribute filter**.

---

## Plugin Quick Guide

**Source:** [https://woobewoo.com/documentation/plugin-quick-guide/](https://woobewoo.com/documentation/plugin-quick-guide/)

1. Welcome to the Reward Points plugin by WooBeWoo!

 

Thank you for choosing our WooCommerce loyalty plugin. Just click here to start using it and we\’ll walk you through its features and powerful features step by step.

 
1. This is the main menu of the plugin, here you can fully control every detail of the bonus system.

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/1.-Plugin-Menu-1-1024x458.png)
 

3. This is the Set point menu. This is where you can control how many bonus points your customers get for a particular product purchased.

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/2-1024x462.png)
 

4. Moreover, you can not only set the reward manually, but also collect groups of products according to a certain attribute: prices, taxonomies, and so on.

 
![Loyalty](https://wupsales.com/wp-content/uploads/2022/07/6-Create-Group-1024x430.png)
 

5. This is the Balance menu. This is where you can control the current balance of bonus points of your users. Accrual/debit is available not only manually, but also in bulk, moreover, you can perform pending operations.

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/10-1024x434.png)
 

6. The Settings menu is a complete control point for the loyalty program. Activate and stop the entire system, limit participation by age, set the expiration date, conditions for using bonuses, and of course the design of all elements (widgets) of the bonus system on the front.

 
![Setting](https://wupsales.com/wp-content/uploads/2022/07/17-1024x499.png)
 

7. This magical section is called Auto Actions. It is here that you will be able to create companies for auto-calculation of bonuses, according to a huge number of triggers and conditions. Set a time frame for it, connect several triggers and conditions to each other, assign logic to them and then just relax – after all, we will do everything for you.

 
![Auto](https://wupsales.com/wp-content/uploads/2022/07/47-1024x416.png)
 

8. The analytics section is designed to help in obtaining a real-time status report, determining the most effective use, obtaining up-to-date data on the use of the bonus system and many other indicators.

 
![analytics](https://wupsales.com/wp-content/uploads/2022/07/52-1024x560.png)
 

We hope you enjoy using our plugin and feel free to leave us your feedback.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Setting points as a reward for a purchase

**Source:** [https://woobewoo.com/documentation/setting-points-as-a-reward-for-a-purchase/](https://woobewoo.com/documentation/setting-points-as-a-reward-for-a-purchase/)

To set points as a reward for a purchase, go to the plugin dashboard – set points This is where you can control how many bonus points your customers get for a particular product purchased.

The section consists of two tabs:

1. **Products.**Set points for each product manually.

To set a reward in the form of points for a specific product, it is enough to click in the Point column in the row of the selected product and set the number of Reward Points that the user will receive for the purchase of this product. In the same way, you can remove the reward for the product.

![Setting](https://wupsales.com/wp-content/uploads/2022/07/3-1024x460.png)

To set/delete rewards for several products at once, select the checkboxes of all required products and click the set point/delete points button respectively.

![reward](https://wupsales.com/wp-content/uploads/2022/07/4-1024x465.png)

If your store has a variety of products, you can set a separate reward for each variation. To do this, activate the Show Variations option. Now you will see in the list all variations of variable products and you can set the reward for them in exactly the same way.

![Show](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-012558-1024x511.png)

!Be attentive. The input of variations has priority, and if “X” bonuses are entered for a variable product, and “Y” is entered for one of its variations, then “Y” will be applied.

1. **Groups.**Create groups from conditions by taxonomies and set rewards for the products included in them.

To create a group, go to set points->groups and click Create New.

![Wordpress](https://wupsales.com/wp-content/uploads/2022/07/6-Create-Group-1-1024x430.png)

Now the group is created, let\’s set it up:

- First, enter the name of the group.
- Next, we will set the reward that the user will receive in the form of bonus points for a product that meets the conditions of this group. Set the exact number of points or percentage of the cost.
- Next, let\’s set the Logic for the added conditions: “AND” (all conditions must match at once); “Or” (at least one condition must match).
- And most importantly, let\’s add conditions for our group. You can add the following conditions in unlimited quantities:
- Category. Select the categories/subcategories you want, and choose whether or not to include child categories.
- Attribute. Select the required Attributes and their parameters.
- Tag. Select the desired tags.
- Brand. Select the brands you want.
- Price. Specify the range from/to.
- Goods at a discount. You can choose to exclude all sale items or apply to sale items only.

So we created a group. Thus, you can create an unlimited number of groups. If products from several groups overlap, the group that is higher in the list has priority. For such cases, you can set the priority by dragging the groups in the list.

![/](https://wupsales.com/wp-content/uploads/2022/07/7-1024x368.png)

!!! Recalc points.  For the correct and fast operation of product filters and calculation of user bonuses, the plugin creates the corresponding meta-parameters. These parameters are automatically updated by editing/creating products and plugin settings. But if you\’ve edited the products with third-party plugins or methods and/or noticed that the plugin doesn\’t work correctly, then click the button Run to force a refresh of the product\’s settings. If you have many products, the process may take some time. You can run this process in the background.

![Recalc](https://wupsales.com/wp-content/uploads/2022/07/5-Recalc-1024x462.png)

To delete a group, select the group\’s checkboxes and click the Delete button.

After all groups are created and configured, the order is determined, all unnecessary groups are removed, click the Save button to save all changes.

1. **Set the reward right in the product editor.**

You can also set rewards in woocommerce itself during product creation/editing. To do this, go to Products->Select the desired product/Create a new one.

For Simple Products, you can set the value here:

![Edit](https://wupsales.com/wp-content/uploads/2022/07/8-1024x458.png)

For Variable Products, you can go to each variation and set your reward here:

![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/9-1024x442.png)

**Priority Products>/< Groups**

**Priority groups.**If a product has a certain number of points.

![Loyalty](https://wupsales.com/wp-content/uploads/2022/07/25-1024x465.png)

But the group that will include the same product has a different value.

![WupSales](https://wupsales.com/wp-content/uploads/2022/07/26-1024x366.png)

Then you can determine which value to use for such cases. To set the priority, go to settings -> main, and in the**Priority groups(<)product** option, set the operator to the position you need.

![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-145812-1024x389.png)

In our example, exactly the value that is set for products and not for groups will be displayed.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## User Balance

**Source:** [https://woobewoo.com/documentation/user-balance/](https://woobewoo.com/documentation/user-balance/)

So this is the User Balance menu. This is where you can control the current balance of bonus points of your users. Accrual/debit is available not only manually, but also in bulk, moreover, you can perform pending operations.

 
![User](https://wupsales.com/wp-content/uploads/2022/07/10-1-1024x434.png)
 
- **Filter.**

 

So, initially, all users of your site are listed in the list, but you can filter and show only certain users. Specify options and logic between selected options. Now click the filter and only users matching the selected criteria will be shown.

 
![Filtering](https://wupsales.com/wp-content/uploads/2022/07/11-1024x522.png)
 
- **Accrue / Write off points.**
- **Specific user.**To Accrue/Debit bonus points to a specific user, simply click on the +, – icon next to the selected user.

 
![Accrue](https://wupsales.com/wp-content/uploads/2022/07/12-1024x402.png)
 
- **To several/all users.** To Accrue/Write off bonus points to several/all users. Select the checkboxes of the required users and click on the Add Points/Delete Points button.

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/13-1024x432.png)
 
- **For all filtered.** To Accrue/Debit bonus points to all filtered users, after you have filtered users, click the “For all filtered” button.

 
![WupSales](https://wupsales.com/wp-content/uploads/2022/07/14-1024x497.png)
 

In the pop-up that opens, you can configure all the necessary fields for accruing/withdrawing bonus points to selected users:

 
![The](https://wupsales.com/wp-content/uploads/2022/07/15-1024x450.png)
 
- **Operation.**Specify the operation type (Add/Delete);
- **Count.**Specify the number of bonus points to be Accrued/Debited to the selected user(s).
- **Reason (max 50 symbols).**Each operation must have a reason, so your users will know for what reason they were credited / debited with bonus points.
- **Action date.**You can schedule transactions, for this, specify the date and time when you need to charge. If you want to perform the operation right now, leave the field blank.
- **Expiry date.**Bonus points accrued manually have a separate expiration date from the expiration date of points for purchases. In this way, you can create unique promotions and motivate purchases with expiration dates. Sets when the expiration date of the points for this operation will expire.

 

The operation is almost ready, it remains to choose whether you want to notify the user, and if so, how exactly you want to notify the user about the accrual/debiting of bonus points. The plugin provides notification via Popup and/or notification via email.

 
- **Send email.** Activate the option to customize the letter.

 

Here you can specify the subject of the letter, add a description, media. Moreover, you can Add bonus point block and/or Add shop button by clicking on the corresponding options. Once the email is set up, you can click to show a preview of the email.

 
- **Show popup.**Activate the option to set up a popup.

 

Here you can specify Title, add description, media. Moreover, you can Add bonus point block and/or Add shop button by clicking on the corresponding options. When the popup is set up, you can click to show the popup preview.

 

Now that everything is set up, it\’s time to click Save.

 
- **History.**All completed and scheduled operations will be displayed in the User Balance -> History section.
- Activate the Show Completed option to display only transactions that have already been completed in the list.
- Operations that are not yet perfect, you can edit, or even cancel.

 
![Loyalty](https://wupsales.com/wp-content/uploads/2022/07/16-1024x526.png)
Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Activation and stop of the bonus system

**Source:** [https://woobewoo.com/documentation/activation-and-stop-of-the-bonus-system/](https://woobewoo.com/documentation/activation-and-stop-of-the-bonus-system/)

We have thought of this moment so that after installing the plugin, the administrator will have the opportunity to first set up the bonus system and only then use the **“Run”** option of the bonus system. At the same time, the admin can also suspend the bonus system at any time.

 

Once the plugin is activated, the Loyalty System is set up and everything is ready to launch, go to settings to launch the Bonus System. To do this, click the **Run** button to enable the functionality on the front for users.

 
![Activation and stop of the bonus system](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-134123-1024x393.png)
 

In the same way, when you need to stop the bonus system, you can go to settings and click **stop**.

 
![Woocommerce Loyalty program](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-134044-1024x391.png)

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Balance Widget + Shortcode

**Source:** [https://woobewoo.com/documentation/balance-widget-shortcode/](https://woobewoo.com/documentation/balance-widget-shortcode/)

The balance widget is needed to show your users all the information about their status in the bonus system.
The widget looks like a button that shows the current balance and the name of the bonus points.

 
![Balance](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-021612-1024x454.png)
 

When clicking on the widget, the user will see a popup with detailed information about their balance.

 

Popup contains 3 sections:

 

1. **Account Details.**

 

It contains counters for the number of bonus points and their expiration dates. Initially, we see the total number of bonus points, but we can click on the arrow to see information for each counter separately (for purchases and for each promotion).
Also here the user can see his level in the loyalty program, as well as other levels and conditions for reaching them (if the levels are enabled).

 
![Account](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-021948-1024x388.png)
 

2. **Transaction Details.**

 

Here you can see a list of all completed transactions involving points. All accruals, write-offs and expenses.

 
![Transaction](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-022345-1024x468.png)
 

**3. Settings.**

 

In this section, the user can, and if control of participants by age is enabled, then must enter their date of birth. Also here the user can refuse (then return here) from the bonus system.

 
![Settings](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-022918-1024x373.png)
 

## How to add a widget to a page

 

****Control where to show the balance information widget to your customers.

 

Go to settings and here you will see the Balance widget shortcode.

 
![add](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-132052-1024x390.png)
 

Copy the shortcode and use one of the following methods:

 
- Paste it anywhere on the page/post.

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/18-1-1024x479.png)
 
- Add a balance widget with a WordPress widget. To do this, go to WordPress Dashboard -> Appearance -> Widget and add the Balance Widget to the desired widget.

 
![Appereance](https://wupsales.com/wp-content/uploads/2022/07/19-1024x481.png)
Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Rules page

**Source:** [https://woobewoo.com/documentation/rules-page/](https://woobewoo.com/documentation/rules-page/)

We care about our clients, so the rules will be generated automatically from the settings in the plugin. To do this, after installing and activating the plugin, the Bonus point rules page will be created. At any time, you can change them or restore them by default.

 
![Rules](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-134440-1024x475.png)
 

Users can see the link to the rules in the personal account of the balance widget -> settings. But you can also place this page wherever you like.

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-022918-1-1024x373.png)
 

As soon as you install and activate the plugin, a rules page is automatically added to your site.

 

The page is generated automatically from the plugin settings you specified. But you can edit it just like a normal WordPress page. To do this, go to settings -> rules page:

 
![Auto](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-135146-1024x398.png)
 

Here you can click View to view the page, and Edit to edit the page.
If you have changed the page and want to return it to the default value, then click Reset to default.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Control of participants by age

**Source:** [https://woobewoo.com/documentation/control-of-participants-by-age/](https://woobewoo.com/documentation/control-of-participants-by-age/)

The plugin supports many functions that use age, these are conditions and triggers for scoring points and controlling participants by age.

 

But there is no standard age field in WordPress/WooCommerce. We have foreseen this moment and added such a field to the personal account of the Bonus system.

 
![Loyalty](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-022918-2-1024x373.png)
 

Let\’s see how to set it up and use it.

 

First, let\’s enable the age field in the **balance widget**. To do this, go to settings -> main:

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-142038-1024x393.png)
 

**Set an age limit.**If the option is enabled, a field will be added to all program participants in their personal balance account, in the Settings section, asking them to enter their age. This will give you the option to limit company participation by age and will also help you use the Birthday trigger and Age condition for auto-action company planning in the future.

 
![Date](https://wupsales.com/wp-content/uploads/2022/07/21.png)
 

**Min age.**All current and future members will be forced to display a popup with a mandatory age field. The participant must enter the age and confirm participation in the program. If the participant refused or did not reach the minimum age – he will not be a participant in the program.

 
![Min](https://wupsales.com/wp-content/uploads/2022/07/22.png)
 

Now you can arrange marketing campaigns using the age field, for example, congratulate users on their birthday, or charge only a certain age, etc.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Points Value and Auto Conversion

**Source:** [https://woobewoo.com/documentation/points-value-and-auto-conversion/](https://woobewoo.com/documentation/points-value-and-auto-conversion/)

By default 1 reward point = 1 unit of Woocommerce default currency. (You can check this value in Woocommerce -> Settings -> Currency options -> Currency.)

 

Accordingly, if your main currency is USD ($), then 1 reward point will be equivalent to $ 1. And for example, if a user uses 10 points to pay, he will receive a $10 discount. But I think this is so easy and understandable.

 
![Points](https://wupsales.com/wp-content/uploads/2022/07/8-1-1024x477.png)
 

## Multicurrency Sites

 

If your store has multiple currencies installed. Then when the user switches to another currency, bonus points will be automatically converted to the equivalent of the main currency.

 

For example, let\’s say you\’ve used the awesome [currency switcher from WooBeWoo](https://woobewoo.com/plugins/woo-currency/) and your store has multiple currencies installed. For example, the main currency is Dollar ($) and you have set Euro (1€ = 1.1$) and Ruble (1$ = 75₽) as additional ones.

 

Thus, when the user switches between currencies, everything will be automatically converted.

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/18.gif)
Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Name of Reward Points

**Source:** [https://woobewoo.com/documentation/name-of-reward-points/](https://woobewoo.com/documentation/name-of-reward-points/)

A great element of gamification of your loyalty program Reward Points is a custom name for bonus points.
But usually, you don’t want to manually install everything and change the names in all places where they are displayed separately.

 

Well, we have great news here. The WooBeWoo Reward Points for Woocommerce plugin provides the ability to enter your own custom name for bonus points, which in one click will replace the name in all places, both single and plural, as well as the abbreviation.

 

To change the name of bonus points go to settings->main.

 
![Name](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-145102-1024x390.png)
 
- **The name of the bonus points.**This name will be used everywhere on the front of your store, where the name of the bonus points is involved. You can enter a single number, plural as well as an abbreviated name of bonus points.

 

For example, here the bonus points are called Chill.

 
![single](https://wupsales.com/wp-content/uploads/2022/07/13-1-1024x707.png)

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Response time for accruals and promotions

**Source:** [https://woobewoo.com/documentation/response-time-for-accruals-and-promotions/](https://woobewoo.com/documentation/response-time-for-accruals-and-promotions/)

All accruals/withdrawals of bonus points, whether it\’s a regular accrual or a **promotion**organized in the **Auto Actions** section, are a very resource-intensive process in terms of technical resources.
Therefore, all accruals work ONCE PER HOUR, every hour at XX.00 the plugin checks all campaigns and perform operations.

 
![Response](https://wupsales.com/wp-content/uploads/2022/07/moritz-kindler-mGFHA_0TWnA-unsplash-1024x683.jpg)
 

Including e-mails notifying about accrual are sent once an hour. And in the settings -> main you can set how many emails to send at a time per hour, so as not to overload the system.

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-152117-1024x397.png)
 

**Emails to send per session.** This option is required to control the number of emails sent, promotions, and automatic actions. All scheduled emails are sent once per hour. Determine how many emails to send at one time. (Default value = 30 emails per hour)

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Setting the expiration date for purchases

**Source:** [https://woobewoo.com/documentation/setting-the-expiration-date-for-purchases/](https://woobewoo.com/documentation/setting-the-expiration-date-for-purchases/)

As we said earlier, Reward Points for **purchases** and **promotional points** are independent of each other. And this tutorial will help you figure out how to set the expiration date of points for purchases.

 

The user in the personal account of the bonus system (balance widget) will see the total count of all bonus points available for payment. But he can open this counter and see the details for each counter. Including points for the purchase, their number, and their expiration date:

 
![expiration](https://wupsales.com/wp-content/uploads/2022/07/29.png)
 

## Setting the expiration date for purchases

 

First, let\’s go to settings -> main – expiry date. Here, find the following options:

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/30-1024x128.png)
 
- **Bonus expiry date (days per purchase).**

 

Here you can set the number of expiration days for reward points awarded to your customers for purchases. Your users will always be able to see the expiration date of both points for purchases and points for each individual promotion in their personal account balance.

 
- **Logic expiry date.**

 

If “Update when adding new ones” is selected, then each new purchase made by the user will reset the expiration timer to the value specified in the Bonus expiry date option.

 

If Each point has its own expiration date is selected, each point accrual will have its own expiration date, regardless of purchases made.

 

## Date format

 

If you want to change the date display format, for this, in the same settings section, go a little and find the option **Date format**.

 
![Bonus](https://wupsales.com/wp-content/uploads/2022/07/31-1024x381.png)
 

This option controls the date format in the entire bonus system interface on the front. For example, for a counter that is located in the user\’s balance widget and shows when the points expire, or to enter the user\’s age, etc. You can choose from the following date formats: yyyy-mm-dd; dd/mm/yyyy; dd.mm.yyyy.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## The expiration date for points for promotion / manual accrual

**Source:** [https://woobewoo.com/documentation/the-expiration-date-for-points-for-promotion-manual-accrual/](https://woobewoo.com/documentation/the-expiration-date-for-points-for-promotion-manual-accrual/)

As we said earlier, Reward Points for **purchases** and **promotional points** are independent of each other. And this tutorial will help you figure out how to set the validity period of points for promotions and manual accruals.

 

The user in the personal account of the bonus system (balance widget) will see the total count of all bonus points available for payment. But he can open this counter and see the details for each counter. Including counters of points for each promotion separately.

 
![Balance](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-153640-1024x396.png)
 

## The expiration date for points for promotion / manual accrual

 

Regardless of whether you are making a one-time manual accrual or a deferred Marketing Company (accrual by triggers in the auto-actions section), when filling it out, you will see a field for setting the expiration date for the bonus points of this particular accrual. Just set the date of burning bonus points from accrual.

 
![expiration](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-154142-1024x477.png)
 

Here is an example where we give points for the new year, and set their expiration date = at 7 days.

 

## Date format

 

If you want to change the date display format, for this, in the same settings section, go a little and find the option **Date format**.

 
![Loyalty](https://wupsales.com/wp-content/uploads/2022/07/31-1024x381.png)
 

This option controls the date format in the entire bonus system interface on the front. For example, for a counter that is located in the user\’s balance widget and shows when the points expire, or to enter the user\’s age, etc. You can choose from the following date formats: yyyy-mm-dd; dd/mm/yy.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Settings Payment for purchases with reward points

**Source:** [https://woobewoo.com/documentation/settings-payment-for-purchases-with-reward-points/](https://woobewoo.com/documentation/settings-payment-for-purchases-with-reward-points/)

Manage all payment settings for Reward Points from one place of settings. To do this, go to settings -> main -> pay settings

 
![Pay](https://wupsales.com/wp-content/uploads/2022/07/32-1024x436.png)
 
- **Max to pay by points.**

 

Set the maximum percentage of the cart amount that can be paid with reward points. Thus, you can control that users do not buy goods cheaper than you expected. (By default, users can pay 100% of the basket with bonus points)

 
- **Max value BP for 1 cart.**

 

Set the maximum amount of points that can be used for one cart. Here we are talking about the exact number of points, the maximum possible for use in one cart.

 
- **Min amount cart.**

 

Set the minimum amount of the cart to be able to use the points.

 
- **Exclude sales items.**

 

If this option is enabled, discounted items will be excluded from the cart amount calculation**.**

 
![Checkout](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-155305-1024x632.png)
 

For example, here, the store owner allows you to pay with bonus points of only 25% of the basket and the plugin will not allow you to enter more.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Refund Settings

**Source:** [https://woobewoo.com/documentation/refund-settings/](https://woobewoo.com/documentation/refund-settings/)

If at the time of returning the goods, the client does not have enough Bonuses on the Bonus account to write off the amount previously accrued for the purchase and spent by the client, then you have complete control over such situations. To do this, go to **settings -> main -> Refund settings**.

 
![Refund](https://wupsales.com/wp-content/uploads/2022/07/33-1024x520.png)
 

Here choose how exactly to proceed with the returns **When rewards are spent**

 
- If **Write off the rest** is selected, the maximum possible number of bonuses will be written off.
- If **Do not take bonuses (and not return bonus discount)** is selected, then the bonuses accrued for the returned goods will not be deducted under any circumstances when returning the goods.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## User Balance Widget Design

**Source:** [https://woobewoo.com/documentation/user-balance-widget-design/](https://woobewoo.com/documentation/user-balance-widget-design/)

In the Settings -> Design tab, you can fully control the appearance of all elements of the bonus system on the front. Stylize the design of the bonus points widget and other elements of the bonus system on the front side with the ability to upload your own icons, change the color, font, etc.

## Set up Widget Design

**Balance Widget** is a user balance widget that you can add anywhere in your store. By clicking on the widget, the user will be able to see his personal account of the bonus system.

To configure it – go to Settings -> Design tab.

![Best](https://wupsales.com/wp-content/uploads/2022/07/34-1-1024x358.png)

The following widget appearance settings are available to you:

- **Use icon.**Upload your unique Bonus Points badge for the balance widget
- **Show balance.** If the option is enabled, the balance will be displayed in the place specified by the shortcode.

![Set](https://wupsales.com/wp-content/uploads/2022/07/35.png)

- **Color user balance.** Specify the background color for the balance widget.
- **Font.**Set the font for the balance widget.

This way you can create stylish widgets that fit the design of your store.
Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Product Badge Design

**Source:** [https://woobewoo.com/documentation/product-badge-design/](https://woobewoo.com/documentation/product-badge-design/)

In the Settings -> Design tab, you can fully control the appearance of all elements of the bonus system on the front. Stylize the design of the bonus points widget and other elements of the bonus system on the front side with the ability to upload your own icons, change the color, font, etc.

 

## Set up Bage Design

 

The badge on the product card has a very important purpose – firstly, to attract the buyer to the purchase of this particular product. Secondly, inform the user how many bonus points he will receive for the purchase of this product.

 
- **Example in Catalog:**

 
![Set](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-162033-1024x459.png)
 
- **Example on Product Page:**

 
![Example](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-162100-1024x760.png)
 

To configure it – go to Settings -> Design tab.

 
![Badge](https://wupsales.com/wp-content/uploads/2022/07/36-1024x450.png)
 

The following bage appearance settings are available to you:

 
- **Use icon.** Upload your unique Bonus Points icon for your product badge by inviting users.

 
![Shop](https://wupsales.com/wp-content/uploads/2022/07/37-1024x496.png)
 
- **Show bonus point.**Specify whether to display the exact number of points received for this product.

 
![Example](https://wupsales.com/wp-content/uploads/2022/07/38.png)
 
- **Color product badge.** Specify the background color for the product bage.
- **Font**. Set the font for the product bage.
- **Show.**Specify where exactly to show the product badge.

 
![Bage](https://wupsales.com/wp-content/uploads/2022/07/39.png)
 

If you chose to display the badge on the product image, then you can customize the location in more detail:

 
- **Start for shop page.**Start for a better position on the shop page.

 

**Start for product page**. Start for a better position on the product page.

 
![Loyality](https://wupsales.com/wp-content/uploads/2022/07/40-1024x308.png)
 

In this way, you can customize the design to exactly match the style of your store.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Cart Size Rewards

**Source:** [https://woobewoo.com/documentation/cart-size-rewards/](https://woobewoo.com/documentation/cart-size-rewards/)

You can create an unlimited number of cart range levels for which the user can receive the specified number of points. This is very convenient, and most importantly, it can please your users and give them the final argument why they should choose your store.

 

To set cart ranges, go to Settings -> Cart and make the option use cart bonuses active.

 
![Cart](https://wupsales.com/wp-content/uploads/2022/07/41-1024x345.png)
 

Here you can create and control an unlimited number of cart conditions.
To create a shopping cart condition, click Create new.

 

After that, a new level will appear in the list. Let\’s go to it to set up the conditions.

 
![Create](https://wupsales.com/wp-content/uploads/2022/07/42-1024x396.png)
 
- **Name.**Let\’s start by calling this level cart.
- **Range.** Next, enter the range that the shopping cart must have in order for the bonus to be activated.
- **Bonus points.** Now enter the number of bonus points that the user will receive for paying for such a cart.

 

**Priority by drag and drop.** If the carts overlap in the ranges of different levels, then you can determine which value to use for such cases. The higher the level is located, the higher its priority, just drag the levels between them.

 
![Priority](https://wupsales.com/wp-content/uploads/2022/07/Drag-and-drop.gif)
 

**Delete Cart Level.**To delete a level(s), just select the checkbox of the desired level(s) and click the Delete button.

 

Gamify the processes of the bonus system and make the store really interesting with WooBeWoo.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## User levels in the Reward System

**Source:** [https://woobewoo.com/documentation/user-levels-in-the-reward-system/](https://woobewoo.com/documentation/user-levels-in-the-reward-system/)

Create unique levels that users can reach for completed actions, such as the total amount of purchases, registration, roles, and others, and reward them with a permanent discount.

 

In order to create, configure and control User Bonus Levels go to Settings ->User Levels and make the option Use levels active.

 
![User](https://wupsales.com/wp-content/uploads/2022/07/43-1024x339.png)
 

Here you can create and manage an unlimited number of user levels.

 

To create a level and customize it, click Add level. A new level will be added to the list. Now let\’s start setting it up:

 
![User](https://wupsales.com/wp-content/uploads/2022/07/44-1024x668.png)
 
- **Name.** First, let\’s enter a name for the level. Take it seriously, because the name of the level will be displayed in the user\’s personal balance account.
- **Reward bonus.**Set a one-time bonus that the user receives by reaching this level.
- **Reward discount.**You can give a permanent discount to a user who reaches this level. Specify as a percentage or an exact number in currency. Leave the fields blank if you don\’t want to give a permanent discount to this user level.
- **Logic.**Set the logic between the conditions, which we will add in the next paragraph. So, for example, if the AND logic is enabled, then the user must fulfill all the conditions to reach this level, and with the OR logic, only one of the conditions.
- **Conditions.**Next, let\’s add the condition(s) that the user needs to fulfill in order to reach this level. You can add and configure the following conditions:
- **User role(s).** Specify one or more roles.
- **Count of day since registration.** Enter the number of days that must elapse from the moment the user is registered (from/to).
- **Number of purchases.** Enter from/to the number of purchases the user should make.
- **Total amount of purchases.**Enter from/to the total amount of purchases that the user should make.
- **Current level label design.**As we mentioned earlier, the level label will be displayed in the user\’s personal account, under the bonus points counter. And you can completely customize the design for a particular level, Changing the background, font, text size, and text color.

 
![User](https://wupsales.com/wp-content/uploads/2022/07/45.png)
 

**Priority by drag and drop.**If the carts overlap in the ranges of different levels, then you can determine which value to use for such cases. The higher the level is located, the higher its priority, just drag the levels between them.

 
![Priority](https://wupsales.com/wp-content/uploads/2022/07/Dragdrop.gif)
 

**Delete User Level.**To delete a level(s), just select the checkbox of the desired level(s) and click the Delete button.

 

After all the manipulations, do not forget to click the **Save** button.

 

Now the user will be motivated to perform one or another action in your store, for example, to buy more often and receive additional discounts for this.

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Setting up a new auto-action company

**Source:** [https://woobewoo.com/documentation/setting-up-a-new-auto-action-company/](https://woobewoo.com/documentation/setting-up-a-new-auto-action-company/)

Auto-actions is an absolutely magical section that can replace a whole marketer and assistants for you.

 

With this magical section, you can create and schedule delayed automated scoring campaigns based on a trigger and additional conditions, followed by a notification to the user via email or pop-up. For example, automatic accrual for registration, birthday, amount of purchases, and many other conditions and triggers.

 
!!! Please note that all accruals/withdrawals of bonus points for Auto Actions work ONCE PER HOUR, every hour at XX.00 the plugin checks all campaigns and performs operations.

 

To do this, to start working with auto-actions, go to the plugin menu -> Auto-actions.

 
![Marketing](https://wupsales.com/wp-content/uploads/2022/07/46-1024x347.png)
 

Click add a company to create a new auto-action company. Now we can create and set up a company:

 
![Reward](https://wupsales.com/wp-content/uploads/2022/07/47-1-1024x416.png)
 
- **Reason.**Each accrual must have a reason, so your users will know for what reason they were credited/debited with bonus points.
- **Begin Date/End date.**You can schedule delayed marketing campaigns by specifying the date and time when the campaign will start, as well as the date and time it will end. During this specified period, the campaign will be active.
- **Add bonus point.**Set the exact number of points that a user who falls under the trigger/conditions of this marketing campaign will receive.
- **Expiry days.**Bonus points accrued using auto actions have a separate expiration date from the expiration date of points for purchases. In this way, you can create unique promotions and motivate purchases with expiration dates. Set the expiration date of the points for this automated marketing company.
- **Trigger.**This is an event/user action that must occur in order to activate the Auto-Action. Select the trigger on which you want to auto-action.
- ***new user.** All newly registered users, from the start date of the company\’s auto action.
- ***days since registration.** The number of days that must elapse from the date of registration. Be careful, only those users who reach this threshold in the future will be counted.
- ***birthday**. If you have the Set an age limit option enabled, then your users can enter their date of birth in their account balance. This means that you can use this data to congratulate the user on his birthday, accruing points to him as a gift.
- ***total purchases amount.** As soon as the user reaches the specified range of the total purchase amount, the trigger is activated.
- ***count of purchases.**As soon as the user reaches the specified range of the number of purchases, the trigger is activated.
- ***Time spent on site (for the session).** The time spent by the user on the site in one session.
- ***not active user (no orders for days).** As soon as the user reaches the specified number of days without making a purchase, the trigger fires.
- ***By review.** As soon as a user leaves a new review on any of your store\’s Woocommerce products, the trigger fires.
- ***by a specific visiting page.** As soon as the user visits the page you specified in your store, the trigger fires.
- **Additional conditions.**Thanks to additional conditions, you can create multi-level conditions for Auto Actions. Thus, in order to perform auto-calculation, the user must fulfill both a trigger and/or an additional condition (depending on which logic you will install). You can add the following additional conditions to an already selected trigger:
- ***registration.** Previously registered users in the specified time period.
- ***age.** Users who right now the specified number of years.
- ***total purchases amount.** The total amount of purchases so far.
- ***count of purchases.** The total number of purchases so far.
- ***not active users.** Users who haven\’t made a purchase in X days.
- ***Users who have reviewed.** Users who have already left a review at this point in time.
- ***user role.**Select specific user roles.

 

## User notification about accrual

 

The campaign is almost ready, it remains to choose whether you want to notify the user when auto-accrual will work for him, and if so, how exactly you want to notify the user about the accrual/debiting of bonus points. The plugin provides notification via Popup and/or notification via email.

 
- **Send email.**Activate the option to customize the letter.

 

Here you can specify the subject of the letter, add a description, and media. Moreover, you can Add bonus point block and/or Add shop button by clicking on the corresponding options. Once the email is set up, you can click to show a preview of the email.

 
![Email](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220721-165042-1024x483.png)
 
- **Show popup**. Activate the option to set up a popup.

 

Here you can specify Title, add a description, and media. Moreover, you can Add bonus point block and/or Add shop button by clicking on the corresponding options. When the popup is set up, you can click to show the popup preview.

 
![Bonus](https://wupsales.com/wp-content/uploads/2022/07/6Попап-1024x614.png)
 

**Now, when a company is created, it is included in the list of all companies in the Auto actions -> Companies section. Here you can:**

 
![Woocommerce](https://wupsales.com/wp-content/uploads/2022/07/50-1024x337.png)
 
- **Show active.**If this option is enabled, then only active companies with automatic actions will be shown.
- **Start/Stop company.**The option allows you to pause/resume a particular company of auto-actions at any time.
- **View company.**You can view at the terms of the company and all the settings you have set at any time.
- **Delete company.**This option completely deletes the company, without the possibility of recovery.

 

**History.**All accruals for auto-actions fall into the section in Auto-actions -> History. Here you can select a time period and a specific company to check the data on a particular accrual.

 
![History](https://wupsales.com/wp-content/uploads/2022/07/51-1024x370.png)
 

Combine, experiment and everything will definitely work out effectively. The section is able to replace an entire marketer and provide the store owner with healthy sleep.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Getting to know the analytics section

**Source:** [https://woobewoo.com/documentation/getting-to-know-the-analytics-section/](https://woobewoo.com/documentation/getting-to-know-the-analytics-section/)

The **analytics** section is designed to help in obtaining a real-time status report, determining the most effective use, obtaining up-to-date data on the use of the bonus system, and many other indicators. Go to plugin **menu -> Analytics**section. Next, select the desired period and metric.

 
![Bonus](https://wupsales.com/wp-content/uploads/2022/07/52-1-1024x560.png)
 
- Profit. The sum of all purchases made (completed), regardless of the participation in them of bonus points and buyer roles. Displayed as a line graph. On the chart, the periods when the bonus system was active are highlighted with a green, translucent background.
- Count of purchased products. Quantities (pieces) of all goods is completed (completed) orders, regardless of the participation in them of bonus points. Displayed as a line graph. On the chart, the periods when the bonus system was active are highlighted with a green, translucent background.
- Dynamics of the customer base. All users, of any roles, have made at least 1 completed order, regardless of whether he is a member of the bonus system. Displayed as a line graph. On the chart, the periods when the bonus system was active are highlighted with a green, translucent background.
- Cost. The sum of all bonuses spent by users for the purchase of goods. Displayed as a line graph. On the chart, the periods when the bonus system was active are highlighted with a green, translucent background.
- Bonus program conversion (returnability). Shows how many of those who received points made a repeat purchase. Shows how the percentage of conversion: (The number of participants in the bonus system who partially or fully paid for purchases with points (completed orders, meaning the basket is complete) / The total number of participants in the bonus system who have points for purchases) * 100%. For periods when the bonus system is not enabled, the red background is displayed with the caption bonus system disabled.
- Percentage of purchases with spent points. The share of purchases (meaning the entire basket of completed orders), with points spent – is displayed as a percentage of purchases with/without spent points, for the selected period. (PIE chart with two parts: With points / without points).
- Percentage of purchases earning points. The share of purchases (completed orders, meaning the whole basket), with the receipt of points – is displayed as a percentage of purchases for which they give points / no points, for the selected period (PIE diagram with two parts: With points / without points).
- Best-selling product (with BP). The best-selling product (order must be completed) is rewarded with bonuses for the entire selected period. Displayed as a list.
- Most Purchased Product for Bonuses. The most purchased product (the order must be completed) with partial or full payment with bonuses; Displayed as a list.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Installation and Activation

**Source:** [https://woobewoo.com/documentation/installation-and-activation/](https://woobewoo.com/documentation/installation-and-activation/)

We welcome you to WooBeWoo and have created this guide to help you easily get started using the Woocommerce Reward Points plugin for WordPress in a couple of steps.

 

## Installing and activating FREE

 

To install a plugin from the WordPress directory, in the WordPress dashboard, click Plugins > Add New. Find WooBeWoo Woo Reward Points and click Install.

 

When the installation is completed, click the “Activate” Plugin. You will see a new plugin, ready to work in the admin menu.

 

Another way to install the plugin is to add the archives manually. To manually add a plugin to your WordPress site:

 
- Download the WooBeWooplugin as a ZIP file either from the WordPress directory or from a third-party source such as our website WooBeWoo.com. If you are downloading from a third-party website, make sure the plugin developer is legit.
- From the WordPress dashboard, select Plugins > Add New.

 
![Download](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-211325-1024x123.png)
 
- Click Plugin Plugin at the top of the page.

 
![installation](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-211639-1024x175.png)
 
- Click Choose File, find the plugin\’s ZIP file and click Install Now.

 
![Install](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-211857-1024x340.png)
 
- Once the installation is complete, click **Activate** Plugin.

 
![WupSales](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-211947-1024x226.png)
 

## Installing and activating PRO

 

After purchasing the PRO version on the WooBeWoo.com website, or on another official source with a confirmed developer, you will receive an Archive with the Pro version of the plugin and a license key by mail. But you can also always find this data in your personal account on WooBeWoo.com. To install the PRO version on the site, the FREE version of the plugin must be installed!

 

To install the PRO version of the plugin follow the next steps:

 

*Keep in mind, to install the PRO version, the FREE version of the plugin must be installed on the site!*

 
- The archive with the Pro version is installed in the same way as the Free version. (Go to Plugins > Add New > Upload Plugin > Install Now -> Activate Plugin.)

 
![Installing](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-213416-1024x325.png)
 

After activating the PRO version, you must enter a license key. Follow the next steps:

 
- Navigate to the Reward Points plugin in your WordPress dashboard.
- Go to the License tab in the plugin\’s left navigation menu.
- Enter your email address and license key.
- Click the Activate button.

 
![license](https://wupsales.com/wp-content/uploads/2022/07/ice_screenshot_20220720-213903-1024x477.png)
 

## Setting up the bonus system

 

Now let\’s go ahead and launch a loyalty bonus system on your website.

 

Once you\’ve installed the WooBeWoo plugin, it\’s time to start quickly setting up your bonus rewards system. Thanks to the wide functionality of our plugin, this does not require special programming knowledge.

 

And this guide was created for a quick superficial acquaintance with the functionality of the plugin. Let\’s go =)

 

This is the main menu of the plugin, here you can fully control every detail of the bonus system.

 
![Setting](https://wupsales.com/wp-content/uploads/2022/07/1.-Plugin-Menu-1024x458.png)
 

In subsequent articles, we will cover everything in detail.

 

Check out our documentation to learn more about other **WooBeWoo Reward Points for Woocommerce** options.
Also, if you have any questions, please [contact us](https://woobewoo.com/contact-us/)and we will be happy to help you.

---

## Product Filter Statistics

**Source:** [https://woobewoo.com/documentation/product-filter-statistics/](https://woobewoo.com/documentation/product-filter-statistics/)

Product Filter by WooBeWoo comes with a detailed filter statistics section to make it easier to collect, analyze data and subsequently support global business growth. Gather real-time filtering and search information for your customers and convert it into business solutions to drive sales and keep customers coming back. The plugin provides the following filter statistics metrics:

And in this tutorial, we are going to show you where to find and how to use filter statistics from Woocommerce Product Filter by WooBeWoo.

### Enable statistics collection

First, let\’s understand how statistics work. The way it works is simple: we enable tracking of a certain filter and then we can track its metrics in the statistics section.

In order to enable filter tracking go to the plugin menu ->FIlters and Click on the **Enable statistics collection** icon. (in the same way tracking can be disabled).

![width=1689](https://woobewoo.com/wp-content/uploads/2022/08/Seofriend.png)

If this option is enabled, then at each act of filtering products through this filters, information about the filtering parameters will be saved to the database. Charts and summary tables of statistics can be viewed on the tab Statistics.

Please note that collecting and saving filtering statistics may slow down your site and take up a significant amount of database space.

### Statistics tab

**Please note that statistics are generated at 00.00 every day, so the events of the current day will not be reflected in the report.**

Well, when enough data has been collected, it\’s time to go to the plugin Menu -> Statistics.

Now you need to select the metric, period and all additional settings.

![width=1632](https://woobewoo.com/wp-content/uploads/2022/08/metrick.png)

The plugin provides the following metrics in the statistics section:

- **Count of filter requests.**The total number of requests for the filter will be displayed as a line graph for the specified period.
- **Count of unique users who used filtering.**The total number of unique users of the filter will be displayed as a line graph for the specified period.
- **What blocks were used for filtering.**Usage statistics for each filter block. You can choose a convenient way to display statistics: pie; bar or table. Moreover, you can track this metric for each individual page.

![width=1651](https://woobewoo.com/wp-content/uploads/2022/08/Stat-1.png)

- **What values ​​were chosen for a particular block.**This metric will help determine the effectiveness of the parameters of a particular block, a particular filter on a particular page. You can choose a convenient way to display statistics: pie; bar or table. Moreover, you can track this metric for each individual page.

![width=1645](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220809-153845.png)

- **No result.**The number of requests for which the user did not receive the corresponding goods is displayed.

Now select the period for which you want to display statistics. You can choose one of the periods:

- **Last 7 days;**
- **Last Month;**
- **This Month;**
- **Last Year;**
- **This Year;**
- **Custom period.**

But as we said earlier, note that statistics for the current day are accumulated, but will appear in the report only tomorrow.

![width=1615](https://woobewoo.com/wp-content/uploads/2022/08/Period.png)

Moreover, each statistics for each filter is displayed separately, so you need to select one of the filters whose statistics you want to display.

![width=1613](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220809-140557.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Why is my WordPress site crashing? Fixes for the Most Common Problems

**Source:** [https://woobewoo.com/documentation/why-is-my-wordpress-site-crashing-fixes-for-the-most-common-problems/](https://woobewoo.com/documentation/why-is-my-wordpress-site-crashing-fixes-for-the-most-common-problems/)

[WordPress](http://wordpress.com)is one of the most popular content management systems and also one of the most reliable. However, like any software platform, **WordPress** has its share of problems. Constant updates and bug fixes help keep the CMS running smoothly. But every site experiences outages or crashes from time to time. These problems are not necessarily problems in and of themselves, but they can cause problems if they become persistent. If you find that your **WordPress**site is constantly crashing or giving errors, read on to find out why this is happening and how you can fix it.

## 

## Determine if your site is crashing or slowing down.

If you find that your site is down, you need to determine the cause before doing anything else. There are many reasons why your site might crash. Here are some of the more common ones: – The error log is full. If your site is experiencing a lot of errors, the error log will quickly fill up. If you haven\’t followed this log, it may be full, causing the site to crash. You should log into the control panel and clear the log as soon as possible. – Your hosting company is overloading their system. If your site crashes frequently and you don\’t know why, chances are your host is in trouble. This is usually caused by a significant increase in traffic. If your site receives a lot of traffic, the hosting system may not be able to handle it, causing it to crash.

## The cause of the problem could be WordPress updates.

WordPress is constantly updating its software and adding new features to the platform. This helps keep WordPress secure and also keeps it compatible with new software and technologies. However, while updates are designed to run smoothly, sometimes they can cause problems. More often than not, after an upgrade, you may find that your site is crashing. You may see a 404 error or the site may not load at all. If you\’re experiencing a sudden spike in website issues after an update, it\’s likely the problem is with the update itself. Your site may be down due to an update.

## 

## Too many plugins are to blame.

Plugins are a great way to add extra functionality to your WordPress site. They can help you add new features and take your site to the next level. Some of the most popular WordPress plugins include JetPack, Yoast SEO, and Google Analytics. However, if you have too many plugins installed, your site may crash because of them. This can happen for various reasons. The most common is the incompatibility of the plugin with the latest version of WordPress. If your site is experiencing an error, you should check the WordPress repository to see if there are any known issues with your plugins. If there are any, you should contact the developer and ask them to update the plugin. If there are no known issues, you may need to uninstall the plugin.

- **Solution 1**– Try to selectively disable unused plugins.
- **Solution 2**. Try disabling all plugins one by one and find the plugin that is causing the problem.

## 

## Hosting issues are to blame.

If you\’re not sure if the problem is with plugins or with WordPress itself, it might be worth checking with your hosting provider. Many hosting companies offer WordPress hosting. However, sometimes they provide hosting that is not compatible with WordPress. This can lead to various issues, including crashes. Before choosing a host, make sure it is compatible with WordPress.

## 

## Your WordPress installation is corrupted.

Sometimes the problem isn\’t a WordPress update or an incompatibility with your site. Sometimes the problem is that your WordPress installation is corrupted. Luckily, this can be fixed using a few different methods.

- **Solution 1:**First, you need to make sure that you have the latest version of WordPress installed on your website. Next, you need to make sure that you are logged in as an administrator and that you have cleared your files. It\’s possible that your installation is corrupted if your site crashes and you can\’t access your dashboard.

## 

## This is due to incorrect settings.

If your site crashes, it\’s important to make sure your settings are correct. The most common reason for a site to fail is a misconfiguration. Malicious hackers also sometimes target WordPress sites and try to change their configuration, causing the site to crash. You can avoid this by making sure all WordPress settings are correct.

## 

## You are using the wrong WordPress theme.

A WordPress theme is one of the most important aspects of your website. It defines how your site looks, how people interact with it, and how it functions. However, you must be sure that you are using a theme that is compatible with your version of WordPress. If you are using an older version of WordPress, using a newer theme may cause your site to crash. Likewise, if you are using a theme that is not compatible with your version of WordPress, it may crash your site.

- Solution 1: Check the compatibility of the theme with the current version of WordPress and update it if the version is incorrect.
- Solution 2: Try switching to a different WordPress theme and test your site with it.

![width=1887](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-214645.png)

## Your site is media heavy.

If you visit a site that has a lot of images but still loads incredibly fast, it probably has a Content Delivery Network (CDN) in place. The CDN takes website static files such as CSS, images, and JavaScript and serves them on servers as close to the user\’s physical location as possible. Large websites use CDNs to make sure their visitors from all over the world have the fastest experience possible, for example a user in Vancouver should have the same experience as a user in London. Today there are CDNs that are specific to WordPress, as well as a few that run on various other platforms.

- **Solution. Connect CDN for your WordPress site. The WordPress directory is full of plugins and ready-made solutions (even free ones) for implementing a connection to a CDN.**

![width=918](https://woobewoo.com/wp-content/uploads/2022/08/cdn-connect.png)

## Wrong caching.

Caching in general is when applications store data in memory for faster processing or access. Similarly, by enabling caching, you can preload parts of your website for faster access. You can take advantage of different caching modes, but they generally fall into two categories; client-side cache or server-side cache.

Client-side caching (usually browser caching) helps you determine which elements of your site are stored in a visitor\’s web browser. It also allows you to specify how long to keep these elements, so that if your site is updated, the browser can update the cache with the updated elements. Browser caching works with static elements such as CSS, JS, and images.

Server side caching is any caching method implemented on your web server. These may include OPcode Caching, Page Caching, Database Caching, and so on. Each of these methods deals with different WordPress elements and using them can help improve our work. site performance.

- **Solution 1**: Install good caching plugins. Caching is one of the most important ways to greatly improve the performance of your WordPress website. Luckily, as with everything related to WordPress, there are plugins you can use to help with this. There are many good WordPress caching plugins on the market
- **Solution 2**: Enable OPCache on your website. By copying the compiled opcodes of PHP scripts, OPcache allows sites to serve page content much faster. The good news is that most shared hosting providers allow their users to install the OPcache extension from their control panel. So – to use this option to load your site faster, just log into your hosting control panel and enable this feature.

![width=1702](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-220113.png)

## Legacy PHP.

WordPress is based on PHP and the version of PHP your server is running on can also affect the performance of your site. PHP 7 has been tested to outperform PHP 5.6 almost twice as fast – that\’s a 100% performance boost!

- Solution: Update Your Site\’s PHP Version If you\’re using an older version of PHP, it\’s likely that you\’ll see some pretty good speed improvements just by choosing the newer version of PHP. Most web hosting providers offer several versions of PHP that you can choose from in your web hosting control panel.

![width=1327](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-214354.png)

## Outdated protocol.

HTTP/2 is the New Internet Protocol which was introduced in 2015. Unlike the previous version of HTTP 1.1, it allows multiple data requests to be made at the same time. This helps reduce the loading time of your website resources.

- Solution: Implement HTTP/2. However, despite this, some web hosts still don\’t offer HTTP/2, or only offer it at more expensive rates. There are two ways to take advantage of HTTP/2; find a host that offers it, or use the Cloudflare CDN.

![width=1600](https://woobewoo.com/wp-content/uploads/2022/08/PR-1712-2.png)

## Large media files.

While large, crisp images or captivating videos can be a sight to behold, remember that these media files are often large. As practice shows, the larger the file size, the more time it takes to download it.This does not mean that you should completely abandon them, but at the very least, be sure to optimize your files.

- Solution: compress images. Images can be scaled down a bit, and using the correct format can help reduce the size as well. For example, a BMP file is usually larger than a GIF or JPG file. To optimize images, you can do it manually with an external service or with an image compression plugin.

![width=1539](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-215730.png)

## Can Product Filter slow down my site?

If you are convinced that your WordPress site is not working correctly but the WordPress version is up to date, disabling other plugins one by one did not give any results, the theme is compatible with the current version of wordpress, and replacing it does not change the fact that the site is still slow and gives errors – then perhaps the problem is related to the use of our filtering plugin.

Let\’s see in which cases the filtering plugin can slow down the work and what can be done about it.

- **Too large product base. Although we guarantee the fastest product filtering on the market, too large a database can slow down the filtering. But we are working daily on solutions to make filtering even faster. We recommend using loader and pagination to display products.**
- **Product images are not optimized.**As we mentioned earlier, multimedia files are often large and in addition to the fact that the filter must almost instantly find a selection of the desired products, then it also needs to display them instantly, with all the data and media. Therefore, it is worth taking media optimization very seriously.

![Frontend](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_821,h_511/https://wpwhale.com/wbwlive/wp-content/uploads/2020/12/Example.png)

- **Recount Products Yes, recalculation allows you to automatically change the counters of filter parameters, depending on the parameters already selected, but this feature requires a lot of resources, and if you notice that filtering has started to work more slowly, then disable this option.**

![width=1281](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-222104.png)

- You may have enabled the option “**Apply Parameters From The Address Bar To Display Filter Items**”, try disabling it and check if it works (options->content).

![width=1255](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-222138.png)

- **Filtering by meta fields.**Some plugins create separate meta fields for Woocommerce products. WooCommerce Product Filter fully supports filtering custom meta fields. With the help of the plugin, you can create a separate filter for any meta field and the standard woocommerce scu, weight, etc., but this can slow down the filter significantly.

![Custom](https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_822,h_387/https://wpwhale.com/wbwlive/wp-content/uploads/2020/12/Custom-meta-field.png)

- [Force theme template.](https://woobewoo.com/documentation/enable-ajax/)Ajax filtering fetches products according to the specified criteria in the filter, and then passes the resulting set of data through the WooCommerce template, which is used by default to build the store page. AJAX filtering + Force theme template works differently: when Force Theme Templates is enabled, the filter requests the entire page via AJAX (not just the product block), and when received, it looks for the same product block on the page. When it finds it, it cuts out this block and replaces the current block with products on the page with a block with filtering results. Accordingly, it takes resources and filtering can work a little slower.
- **Recalculate filter. This option recalculates all filters considering third-party filters from other plugins on the page. For example, if the products on the page with the woobewoo already been pre-filtered by some third-party filter plugin, as a result of which the counters do not work correctly. But be careful, with this option enabled, the filter may work slowly if the product database is large.**

![width=1211](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-224411.png)

- **Lots of products per page.** Use pagination for filter results to speed up page loading. You can set fewer products per page and products per row in Options->Set Number Of Displayed Products to load the page faster (don\’t forget to duplicate this value in the general settings).

![width=731](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-222811.png)

- **Lots of options in filter/products.** A very logical item, but we still decided to add it to the list. The more parameters added to each filter, the more taxonomies assigned to the product, the longer the filter will process.
- The filter may run slowerwhen users make each filter section a separate filter and synchronize them. In order for the filter to work faster, it is better to combine different blocks into a single filter.

![width=1524](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220815-223050.png)

## Conclusion

The most important thing to remember when dealing with a problem like a broken website is not to panic. It is important to correctly diagnose the problem in order to resolve it as quickly as possible. If you follow the steps in this article, you should be able to determine the cause of your site\’s failure. Armed with this knowledge, you can quickly fix the problem and get your site back up and running.

---

## Floating Mode

**Source:** [https://woobewoo.com/documentation/floating-mode/](https://woobewoo.com/documentation/floating-mode/)

The WooBeWoo Product Filter plugin comes with everything you need to organize filtering for any purpose. For example, you can enable the Floating mod and your filter will appear in the popup. And this tutorial will help you enable and configure the floating mod.

### How to enable floating mod?

If you have already created and configured your filter and now you want to make the filter appear in the popup, it\’s time to turn on the floating mod.

To do this, go to **Design -> Floating Mode** and check the **Use Floating Mode** checkbox.

![width=1677](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-125931.png)

Now that Floating Mode is enabled, you can customize each element of the popup, its behavior, the popup call button, and more.

## Devices

- **Devices.** When you have checked the Use Floating Mode checkbox, select which devices to use the filter in the popup. (All devices; Only Mobile; Only Desktop)

![width=1689](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-130914.png)

## Call Button

Here you can choose What to use to call the filter: either a standard button from the plugin or any event on the page (Custom button).

![width=1020](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-145034.png)

### Plugin Button:

If you have selected Plugin Button as the filter call, then you can fully customize its appearance on a per-device basis:

![width=1038](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-140055.png)

- **Button type.** You can choose a classic button with text and enter text for it, or upload your own custom icon.
- **Fixed/Float.**If the Fixed button is selected, the button will be positioned exactly where the filter is located. If Floating is selected, then the button will be placed on top of all page elements at the specified coordinates (top; bottom; left; right).

And also **Font; Text shadow; Button width; Button height; Corner radius; Background; Borders; Button shadow; Padding; Margin** per device, both mobile and desktop.

### Custom Button:

**!Choose only if you have minimal programming knowledge.**

You can use absolutely any element on the page to call the filter. To do this, switch the Call Button option to Custom Button.

![width=858](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-145851.png)

Next, you need to write a small JS code construct: Specify the element class that should act as a filter call, then specify an event such as a mouse click, etc., and specify a code snippet as the result to be copied from the Custom Button option.

Paste the resulting code into any JS fragment happening on the page, or into the editor built into the JS plugin.

For example, we want the filter to be called using a regular button added to the page on mouse click.

So our code will look like this:

```
jQuery(\'.wp-block-button__link\').on(\'click\', function() {
window.wpfFrontendPage.showFloatingPopup(134);
});
```

![width=1603](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-145946.png)

Now we will leave this code in the JS editor, and the popup filter will be called using this custom button

Note. But the filter itself should still be added to the page, in any way convenient for you (using a shortcode, or a widget).

## Title Design

Now let\’s move on to customizing the appearance of the pop-up itself. A popup consists of the popup area + title + filter. ( All filter appearance settings are taken from the filter settings)

![width=789](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-150549.png)

Here you can fully configure (for each device separately):

- **Enable title** and specify **title text**. If the title is enabled. then it will be fixed.
- **Font**, size font, style font, and color font.
- **Background**.
- **Borders**. Set borders width in this order: color, top, right, bottom, left.
- **Icon Close.** Choose an icon to close the popup, as well as its color and size.

![width=1145](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-150707.png)

## Popup Design

And now we can customize the appearance of the popup area where the filter will be placed. Here we can fully customize:

- Popup **Width** and **Height**. Initially, the size of the popup will be determined automatically based on the size of the filter, but you can set a custom popup size in percentages or pixels.
- **Background.**
- **Popup borders.**Set borders width in this order: color, top, right, bottom, left.
- **Popup shadow.** Set popup shadow in this order: color, X, Y, blur, spread (px).
- **Corners radius.**Set the rounding of the corners of the popup area in pixels or percentages.
- **Padding.**Set paddings in this order: top, right, bottom, left.
- **Scrollbar.** Set scrollbar property in this order: thumb color, track color and width. And also you can choose the type of scrollbar or disable it altogether.
- **Overlay remaining area.**You can control the visible area of the rest of the page when the popup is open. For example, you can blur it, darken it.

![width=1029](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-151519.png)

## Animation settings

And finally, let\’s set up the behavior of the popup and its animation.

![width=893](https://woobewoo.com/wp-content/uploads/2022/08/ice_screenshot_20220826-153111.png)

- **Arrival side.**

Specify where exactly the filter will appear after clicking on the button. (Left; Right; Top; Bottom)

- **Stop position.**Set popup stop position in this order: top, right, bottom, left.
- **Animation speed.** Set the filter\’s appearance rate in ms.
- **Close popup after action.**Specify whether the popup will close when the user selects a filtering option (for autofiltering) or when they click the filter/clear button.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Issue: Displaying all products on category page

**Source:** [https://woobewoo.com/documentation/shows-all-products-on-category-page/](https://woobewoo.com/documentation/shows-all-products-on-category-page/)

Some of our users have encountered a problem: when filtering on the category page, all store products are displayed in the filtering results, and not just the products of the current category.

Why does this problem occur? The possible causes of this problem and how to solve them are listed below:

- **The Always Filtering By All Products option is enabled.**One of the possible reasons for this behavior may be the enabled Always Filtering By All Products option, which takes into account filtering for all store products, no matter what page the filtering occurs on. Just disable this option and only the products of the current category page will be displayed.

![Always](https://woobewoo.com/wp-content/uploads/2022/07/ice_screenshot_20220711-213512.png)

- **Custom category page..** Another possible reason for this behavior could be when you have inserted products on a custom page (page not provided by woocommerce). In this case, for the category filter, you must specify a specific category, the products of which should be taken into account when filtering.![width=1301](https://woobewoo.com/wp-content/uploads/2022/07/CategoryFilter.png)

To do this, go to the category filter and select the appropriate category in the Product categories option. After that, enable the Make selected categories as default option, this will include only products of the specified category in the filtering results.

Now, on the category page, only the results of filtering by the current category will be displayed.

---

## Synchronizing multiple filters on a page

**Source:** [https://woobewoo.com/documentation/synchronizing-multiple-filters-on-a-page/](https://woobewoo.com/documentation/synchronizing-multiple-filters-on-a-page/)

With Woocommerce Product Filter, you can add filtering by an unlimited number of parameters in one filter. But sometimes your site\’s UX needs to split the filter options into two or more filters. And it is for such cases that we have added a new option Synchronization of several filters on the page, which will work even with Ajax mode. Now several filters on the same page can be synchronized and take into account the selected parameters of each other.

It does not matter how exactly you added the filter to the page, using a shortcode or a widget – the filters will be synchronized correctly.

### How to enable filter synchronization?

Let\’s assume that you have added several filters to the page and now you want to synchronize them. To do this, go to the plugin menu and open the filter added on the page.

Now go to the **options->content** tab -> **Filter synchronization** option. Enable this setting if there are two or more filters on the page and you want changes to one of them to affect the others, as well as to have products filtered by the parameters selected in all filters. At this stage, only filters of the same type can be synchronized.

!Please note that this option must be enabled in all filters on the page.

![Best](https://woobewoo.com/wp-content/uploads/2022/07/Synchronize-FIlters.png)

Now, as we can see, the filters are synchronized and work correctly.

![Synchronizing](https://woobewoo.com/wp-content/uploads/2022/07/product-Filter-best.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## How to Sort Filter Results

**Source:** [https://woobewoo.com/documentation/how-to-sort-filter-results/](https://woobewoo.com/documentation/how-to-sort-filter-results/)

Using the Woobewoo Product Filter, you can always be sure that your customers will find what they are looking for anyway.

And you can help them by enabling the necessary options to display the filter results in the desired order.

In this tutorial, we\’ll show you how to configure filtering results sorting. (not to be confused with normal sorting).

### Sort By Title After Filtering

If you want products to be displayed by title in ascending order after filtering, then open filter editing -> options -> content and enable the Sort By Title After Filtering option.

!!! Be careful – this option disables any other sorting on the page.

![How](https://woobewoo.com/wp-content/uploads/2022/04/SortResult.png)

Now the filtering results will be sorted by title.

---

## Compatibility with Elementor Addons

**Source:** [https://woobewoo.com/documentation/compatibility-with-elementor-addons/](https://woobewoo.com/documentation/compatibility-with-elementor-addons/)

[Elementor](https://elementor.com/) is a free and the most popular WordPress plugin whose purpose is to add an advanced block visual editor. Thanks to Elementor, you can assemble WordPress site pages by simply dragging and dropping ready-made elements. There are lots of free plugins made for Elementor that are enough for many users. Especially if the website is already live and you just need to add new pages or sections. However, this will not be enough for webmasters and developers. With the free version, you can create a good landing page or blog. The free version will suit you:

- for building pages
- for testing a product or service through a landing page
- if you are a beginner webmaster and want to learn how to use the plugin

If you need more serious features, for example, creating a full-fledged online store, a free version won\’t be enough. Elementor Pro version has lots of options(e.g. creating price lists, shop page templates, etc.) that are needed for building shops. Besides, there are lots of addons made for Elementor Pro that expand the functionality of the builder thus bringing the best tools for you to create a stunning webshop.

If you stuck upon this article you\’d probably look for the answer if the [Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) by WooBeWoo is compatible with the addons made for Elementor Pro. The answer is yes. So let\’s check the Elementor Pro addons that the Product Filter plugin is compatible with.

## Element Pack Pro Compatibility

[Element Pack](https://www.elementpack.pro/) is an addon for the Elementor plugin with 70+ of the most popular elements you need for everyday use in website page building. The  Pack includes the most commonly used widgets that help you easily manage website content by simply using drag and drop functionality. Element Pack Pro has a set of widgets suitable for eCommerce and you’ll be glad to find out that the WooCommerce Product filter plugin is fully compatible with products showcasing widgets.

First of all, you need to enable the WooCoomerce set in the Element Pack Dashboard. To do so, move to the**Element Pack >> 3d Party widgets >> eCommerce**and toggle the**WoooCommerce**Products widget.

![Enable](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_enable_widget.png)

The next step is to proceed to the Product Filter plugin settings to enable compatibility between the plugins. Navigate to the**Woo Product Filter >> Show All Filter**and select the one you’ve created. Here you need to go to the**Options >> Content**and turn on**Enable third-party prefilter**.![Third-party](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_third-party_prefilter.png)

It allows the third-party plugins that do not use WooCommerce shortcodes to filter products (required, for example, to work Product Grid Widget with categories preselection from Essential Addons for Elementor).

Afterward, you can go to the needed page and open it with Elementor. You’ll be redirected to the page builder where you can drag and drop the **WC – Products** widget from Element Pack to your page. ![WC](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_wc_products.png)

Then you can drag and drop the **WooFilters** widget to the page for filtering the products. Click save and that’s it.

![Elementor](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_elementor_pack.png)

## Compatibility with Ultimate Addons for Elementor

[Ultimate Addons for Elementor](https://ultimateelementor.com/) is a highly rated Elementor extension that you can\’t miss. It provides 21+ widgets with advanced and unique features. You can use its modular control to make your website run fast. On top of that, Ultimate Addons offers WooCommerce and Post widgets to display all your products/contents beautifully on your website.

So if you are using Ultimate Addons for Elementor to pull out your products, then you can be sure that the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) plugin works perfectly with the widget.

To begin with, you need to enable compatibility between the plugins. Navigate to the**Woo Product Filter >> Show All Filter**and select the one you’ve created. Here you need to go to the**Options >> Content**and turn on**Enable third-party prefilter**.![Third-party](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_third-party_prefilter.png)

Then, you can go to the needed page and edit it with Elementor. Drag and drop the **WooFillters** and **Woo Products** widgets in the way you like and that’s it.![Woo](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_woo_products.png)

## Essential Addons for Elementor Compatibility

[Essential Addons for Elementor](https://essential-addons.com/elementor/) is an Elementor page builder addon with amazing design and endless customization. It has solutions for any kind of website and eCommerce is not an exception. It has a set of Woo widgets so you can display the products in different ways and the [Products Filter](https://woobewoo.com/plugins/woocommerce-filter/) plugin made by the WooBeWoo team will ensure the filtration for the products.

Firstly, you have to enable the products widget in the Essential Addon Dashboard. To do so, navigate to the **Elementor >> Essential Addons >> Elements.**

![Grid](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_grid.png)

After that, you need to enable compatibility between the plugins. Navigate to the**Woo Product Filter >> Show All Filter**and select the one you’ve created. Here you need to go to the**Options >> Content**and turn on**Enable third-party prefilter**.![Third-party](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_third-party_prefilter.png)

The very last step is to go to the page and open it with Elementor, drag and drop the widgets.![Grid](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_grid_widget.png)

And enjoy the results.![Products](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_products_grid.png)

---

## Main Plugin Settings

**Source:** [https://woobewoo.com/documentation/main-plugin-settings/](https://woobewoo.com/documentation/main-plugin-settings/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/?filter_cat_list_4=106%7C40%7C84%7C172%7C79%7C87%7C210%7C173%7C36%7C75%7C88%7C174) is a first-class plugin that allows the creation of different kinds of filters. The filter works with taxonomies, ratings, prices, brands and it can sort the product by any parameters. What\’s even more, the plugin is compatible with the most popular page builders like [Elementor](https://woobewoo.com/documentation/getting-started-with-woocommerce-filter/) and [Divi](https://woobewoo.com/blog/how-to-create-filtered-sidebars-for-your-divi-woocommerce-pages/). But don\’t worry if you are using none of them, because you can display the filter using [shortcode](https://woobewoo.com/documentation/getting-started-with-woocommerce-filter/) on any page on your website.

Let’s look through the main settings available in the Woo Product Filter Dashboard.

Go to the **Woo Product Filter >>Settings** path.

![Settings](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_settings-1.png)

**Start indexing product parameters**

The plugin creates index tables for product parameters for the correct and fast operation of filters. These tables are automatically rebuilt by editing/creating products. However, if you edited products with third-party plugins or methods, and/or noticed that the filter does not work correctly, this option forcefully rebuilds the index tables. If you have a lot of products, the process may take a while.

![Indexing](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_indexing_product_parameters.png)

If you don’t want to click the option manually every time you make changes in the product, you can tick the run in the background checkbox.

**Disable automatic calculation of index tables after editing products**

The option can be useful if you add products only through imports. After importing, just do a full recalculation of the index tables once by clicking the button above.

![Disable](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_disable_calculation.png)

**Start indexing on a schedule**

This option allows setting the indexing on the schedule. Check the box and you\’ll get the field for setting the time.

![Indexing](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_indexing_on_schedule.png)

**Logging**

You can enable this option if there are any conflicts between the elements on your website with the filters so that the debug messages will be saved to the WooCommerce SystemStatus Log for further investigation.

![Logging](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_logging.png)

**Send usage statistics**

This option is made by the dev to send information about what plugin options you prefer to use thus helping us make the plugin better for you.

![Send](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_send_statistics.png)

**Set number of displayed products**

Here you need to set the number of displayed products per pagination after filtration. You can leave blank for the default value. You must set the same number as in the basic store settings or in[Options >> Main](https://woobewoo.com/documentation/options-main-tab/)settings.

![Number](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_number_of_products.png)

**Move Sidebar To Top For Mobile**

You can turn on the option if you want the sidebar to appear above content on mobile devices. Please note that some themes do not have blocks required for this option.

![Move](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_move_to_top_for_mobile.png)

**Display a message about not found products**

Enable the option to display a message if no products are found. Move to the**Options >> Content**path where you can change the default no products found text.

![Display](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_display_message.png)

**Generate HTML based on WCAG standards**

Turn on the option to generate HTML based on WCAG standards. Use Web Content Accessibility Guidelines.

![WCAG](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_WCAG.png)

**Enable filter icon on load**

It shows the filter icon while the page is loading for all available filters. In case you need to set the loader icon while filtering results, you need to go to the [Options >> Loader](https://woobewoo.com/documentation/customizable-loader-iconwpf/)directory.

**Filter Loader Color**

From this color picker, you may select the color of the filter loader animation.

**Filter Loader Icon**

Click the chooses icon button to open the window with icons selection.

![Loader](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_loader.gif)

**Multiple Dropdown selected title**

For many filters type such as categories, stages, attributes, etc there is a multiple selection dropdown. This option allows changing the sample text for this dropdown.

![Multiple](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_multipledropdown_text.png)

**Hide products without price**

This option globally hides the products without prices in the filter and in the list of products.

![Hide](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_hide_products_without_price.png)

---

## Category hierarchy display settings

**Source:** [https://woobewoo.com/documentation/category-hierarchy-display-settings/](https://woobewoo.com/documentation/category-hierarchy-display-settings/)

Category hierarchies are used to classify products, vendors, and other information for reporting and analysis. Each hierarchy consists of a parent category and a structure of subcategories, also called child categories. An organization can have multiple category hierarchies.

![display](https://woobewoo.com/wp-content/uploads/2022/02/Hierarchy.png)

It is also a very important element of the product filter. In [WooBeWoo Product Filter](https://woobewoo.com/plugins/woocommerce-filter/?filter_cat_list_4=106%7C40%7C84%7C172%7C79%7C87%7C210%7C173%7C36%7C75%7C88%7C174), you can customize the display of all levels of child categories in great detail, and in this tutorial, we will show you exactly how to set it up.

**Show hierarchical and setting**

First, let\’s say you\’ve already created a product filter and added a category filter to it.

Now let\’s choose how our categories will be displayed on the front, for this, in the **show on frontend as** option, select **checkbox list** or **radio buttons list**.

Next, activate the **Show hierarchical** option to show paternal and subsidiary categories.

![Show](https://woobewoo.com/wp-content/uploads/2022/02/Collabsiple.png)

These options are available even in the Free version. But now let\’s look at the full range of options that will become available to you in the Pro version, namely Collapse and configuring child categories.

- **Hide categories parent.**If you want to show only categories of children, then check these options.

![Hide](https://woobewoo.com/wp-content/uploads/2022/02/ice_screenshot_20220221-161457.png)

- **Collapsible.**If enabled, then show only parent elements, if there are children, they are minimized. They can be opened/closed by clicking on the icon.

![Collapsible](https://woobewoo.com/wp-content/uploads/2022/02/ice_screenshot_20220221-161639.png)

- **Unfolding children.**(If the Collabsiple option is enabled) When you select a parent filter category, all child nodes will be automatically opened. When you select a parent filter category, the child categories of the first level are automatically opened.
- **Unfolding all nesting levels.**Unfold all nesting levels of children, not just the first

![Unfolding](https://woobewoo.com/wp-content/uploads/2022/02/Unfolding.png)

As you can see, we already know how to open categories, but you can configure it so that child categories are not only opened but also marked:

- **Extended parent select**. If the parent filter category was selected then extend the selection to child categories.

![Extended](https://woobewoo.com/wp-content/uploads/2022/02/Extended.png)

- **Automatically collapses parent.**If the parent filter category was selected then extend the selection to child categories.
- **Product selection hierarchically.**Restrict filtering results only to child categories or only to parents if both of them are selected at the same time:
- Could be both, child or parent;
- only in child;
- only in the parent.
- **Collapse level.**With this option, you can set which child-level the collapse starts from.

![Collapse](https://woobewoo.com/wp-content/uploads/2022/02/ice_screenshot_20220221-171813.png)

**Custom icon design**

What\’s more, with the Pro version, you can customize the open/close icon for category hierarchy levels.

To do this, go to **design->blocks** and in the option **Open / Close icon** categories you can select the following icons:

- **Plus/minus**
- **Chevron**
- **Angle double**

![Design](https://woobewoo.com/wp-content/uploads/2022/02/icon.gif)

After that, you can adjust the **size** of the icon and make it **bold**.

![icon](https://woobewoo.com/wp-content/uploads/2022/02/ice_screenshot_20220221-172832.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to Enable Currency Switcher for Product Table?

**Source:** [https://woobewoo.com/documentation/how-to-enable-currency-switcher-for-product-table/](https://woobewoo.com/documentation/how-to-enable-currency-switcher-for-product-table/)

If you are running an international online shop, it\’s important to display the product prices in the currency of the countries the goods are shipped to. However, how can you allow the customer to switch currencies in your shop?

![Currency](https://woobewoo.com/wp-content/uploads/2022/02/product_table_currency.png)

WooCommerce doesn\’t have built-in functionality to switch currencies. That is why the installation of the appropriate plugin is the way out. But how to select the right one between the many plugins on the Internet to suit your needs?  If you are using the Product Table plugin for pulling out the products, then you can easily use WooCommerce Currency Switcher which is fully compatible with Product Table. Let’s find out how to set them up.

## Getting started with Currency Switcher

When you\’ve installed the plugin, you need to go to the**WooCurrency**tab in your Dashboard.In the settings panel, you can set up all the options you need for currency showcasing. To find out the detailed description of the customization settings, you need to check [this guide](https://woobewoo.com/documentation/woocommerce-currency-switcher-plugin/).

![Currency](https://woobewoo.com/wp-content/uploads/2022/02/product_table_currency_settings.png)

After you are ready with the customization, you need to set the page(s) where the switcher is needed to be shown.

![Display](https://woobewoo.com/wp-content/uploads/2022/02/product_table_display_everywhere.png)

Afterward, proceed to the**Appearance >> Widgets**directory and add the [WooCurrecy](https://woobewoo.com/plugins/woo-currency/) widget to the sidebar.

![Add](https://woobewoo.com/wp-content/uploads/2022/02/product_table_add_widget.png)

## Preparing your Product Table

When you are done with the Currency Switcher settings, it’s time to set up the table where the products are displayed. Go to the**Product Table >> Add New Table**and give your table a title.After that, you will be redirected to the settings page. To find out more about each option, please check our [documentation](https://woobewoo.com/docs/woocommerce-product-tables/).

![Settings](https://woobewoo.com/wp-content/uploads/2022/02/product_table_settings.png)

When the product table is ready for publication, you need to copy the shortcode and paste it to the needed page.

![Paste](https://woobewoo.com/wp-content/uploads/2022/02/product_table_paste_shortcode.png)

## Checking the result

That’s pretty much it. As you can see there is no need to enable any additional settings or whatever, you just have to install these two plugins and enjoy the result.

![Currency](https://woobewoo.com/wp-content/uploads/2022/02/product_table_currency_switcher.gif)

---

## Display Filter with Divi Builder

**Source:** [https://woobewoo.com/documentation/display-filter-with-divi-builder/](https://woobewoo.com/documentation/display-filter-with-divi-builder/)

If you stumble upon this article, you are probably looking for the perfect design for your website and we understand. There are tens of thousands of WordPress themes, but many of them are not suitable for you for many reasons:

- Your site does not look the way you want
- Most themes are too heavy and they take forever to set up
- Some themes require specific builders  to be installed
- Sometimes you need to dig into the code to make any changes in them

That\’s why many love [Divi](https://www.elegantthemes.com/gallery/divi/). It is truly a multi-purpose theme with a rich feature set. In addition, Divi allows you to design and customize almost any aspect of your site, upload individual posts and pages. What\’s even more,  you\’ll get one of the best page builders, excellent use of the WordPress Customizer, and convenient testing options. One of the most powerful tools is the builder. Divi Builder helps create beautiful pages via drag and drop way. We\’re glad to tell you that [WooCommerce Product Filter](https://woobewoo.com/all-plugins/) is compatible with Divi.

So if you use the Products Filters functionality for your website, you\’ll be happy to know that they can be combined with Divi builder. So now you don\’t have to choose between beautiful design and powerful functionality for online store development. You can easily combine both. Let\’s find out how to work add filters to the pages created with Divi builder.

## Adding Filters via Sidebar

**Step 1**

The very first step is to create a filter based on your needs. To do so, you can check [this guide](https://woobewoo.com/documentation/create-your-first-product-filter/). After everything is set up, you need to set the conditions for the filters to make sure they will be displayed on the needed pages.

**Step 2**

Now, proceed to the**Appearance >> Widgets**path in your WP Dashboard where you need to add Woo Product Filter to the**Sidebar**section on your website.

![Sidebar](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_sidebar_widgets.png)

**Step 3**

When you add the widget to the sidebar, you need to open the page where you want to place filters with the Divi builder.

![Enable](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_enable_divi.png)

In this example, we are going to use the Shop page.Add a **Section** with the desired layout.

Click the**Sidebar Module**to add to the page.

![Sidebar](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_sidebar_module.png)

From the**Widget area**dropdown, you’ll need to pick up the sidebar you\’ve previously created in Step 2.

![Sidebar](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_sidebar.png)

## Adding Filters via Shortcode

The other way to add the filter to the page edited with the Divi editor is to go to the filter’s settings and copy the shortcode.

![Shortcode](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_shortcode.png)

Open the needed page with the Divi editor and add the **Text** or **Code** module to the section. After that, you just need to paste the shortcode to the field.

![Text](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_text_module.png)

## Adding Filters With PHP Code

The process of adding filters with the help of PHP code is almost the same as with the shortcode.Proceed to the filter’s settings page.

Near the filter name section, select the **Filter PHP code** and copy it.

![PHP](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_php.png)

Create a section in the Divi builder, insert the **Code/Text** module and paste the shortcode or PHP code to the module.

![Code](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_code.png)

Now you can go to your page and check how it works.

![Divi](https://woobewoo.com/wp-content/uploads/2022/02/product_filter_divi.gif)

---

## How to Filter WCFM Multiple Vendors\’ Products?

**Source:** [https://woobewoo.com/documentation/how-to-filter-wcfm-multiple-vendors-products/](https://woobewoo.com/documentation/how-to-filter-wcfm-multiple-vendors-products/)

Are you trying to build a shop similar to eBay, Etsy, or Amazon? Well, there are different plugins for WordPress that allow creating your online marketplace to sell your products just like a full-fledged professional marketplace. The main reason for the success of such big tech brands like eBay is the possibility to select multiple vendors on the website. It creates competition between vendors and allows people to choose products with multiple options.

**WCFM** plugin from WC lovers is an all-in-one free multi-vendor WooCommerce plugin that is a great solution for the virtual market. The plugin includes all the required features related to the expansion, creation, and operation of your trading platform. It\’s time to forget the pain of developing with a tedious backend for vendors.

In a combination with the [WooCommerce Product Table](https://woobewoo.com/) plugin, you\’ll get the power to build a stunning product marketplace. So let\’s find out how to enable the **WCFM** plugin support in the Product Table plugin.

## Step 1

The very first step is to install the WCFM plugin. To do so, you can move to the **Plugins** menu in your Dashboard, click **Add New,** and install the plugin. To get acquainted with the full process of installation, you need to check the WCFM documentation.

![Install](https://woobewoo.com/wp-content/uploads/2022/02/product_table_install.png)

## Step 2

After the installation process is done and all the settings are completed, you can now proceed to your product table. Move to the **Settings >> Features** path and toggle the **Show products by vendor** option. When you turn it on, on the vendor page, the product table will display the particular vendor’s products.

![Multivendor](https://woobewoo.com/wp-content/uploads/2022/02/product_table_multivendor.png)

That’s pretty much it. Now you can check how it works on the live page.

---

## How to Add YITH Quick View to Product Table?

**Source:** [https://woobewoo.com/documentation/how-to-add-yith-quick-view-to-product-table/](https://woobewoo.com/documentation/how-to-add-yith-quick-view-to-product-table/)

You\’ll agree that selling online is not an easy task. There are too many factors to consider in the rapidly changing Internet environment. Even for an experienced entrepreneur, it is difficult to achieve additional sales. The efficiency of any shop is measured by the number of goods sold. To increase sales you need to make the shop as convenient for the customer as possible. This is especially true for an online business. How quickly a purchase is made depends on how quickly a potential customer finds what\’s needed.

Fortunately, you can easily turn your WooCommerce shop into a successful one with the right tools. One of such tools that will completely change the way you do business is the WooCommerce Product Table plugin.  It is a great WordPress plugin to help you create amazing product tables. Below is an example of a product table that you can create with the plugin.

![Quick](https://woobewoo.com/wp-content/uploads/2022/02/data_table_quick_view.png)

The plugin has all the features you need to create beautiful tables and streamline the customer journey from start to finish. At the same time, it\’s easy to set up and use, making it one of the best tools you\’ll ever have. Except that, the plugin is fully compatible with YITH WooCommerce Quick View. That\’s powerful functionality for increasing sales.

YITH WooCommerce Quick View is the most popular Quick View plugin. With the plugin, you can add the quick view functionality to your product table for showcasing products’ data in a modal window without waiting for a page to be opened.The plugin allows selecting which elements to show in the quick view lightbox.

## Why Do You Need a Quick View?

The Quick View mode allows the visitor to get acquainted with the product without going to a separate page. So there is no need to spend extra time and perform unnecessary actions to find what\’s needed in the product catalog. The customer will simply click on the “quick view” button and in one click, without waiting for a long loading of the product page, add the product to the basket. Here are a few reasons why a quick view is important:

- a customer gets quick access to such product details as the product’s image, descriptions, pricing, etc.
- it makes easier for a customer to decide on the products and add them shopping cart without having to leave the main shop page
- it simplifies the buying user flow and improves shopping experiences.

So let’s find out how to enable the quick view option for your product table.

## Step 1

Proceed to the **Plugins** menu in your WP Dashboard. Click **Add New**, type YITH WooCommerce Quick View in the search bar, and install the plugin. After the installation is made, you\’ll get the **YITH** menu in your Dashboard. You can go there to set up the appearance of the quick view.

![YITH](https://woobewoo.com/wp-content/uploads/2022/02/product_table_yith.png)

## Step 2

After you customize everything according to your need, it’s time to go to your products table, open the one where you need to enable the quick view. In the **Select properties to add to the table**, you’ll receive one extra option called **YITH Quick View**. You need to add the properties and that’s it.

![View](https://woobewoo.com/wp-content/uploads/2022/02/product_table_view.png)

Here you go! Now it’s time to go to the liv page and check how it works.

![YITH](https://woobewoo.com/wp-content/uploads/2022/02/product_table_yith_quick_view.gif)

---

## WooCommerce Product Table Import and Export

**Source:** [https://woobewoo.com/documentation/woocommerce-product-table-import-and-export/](https://woobewoo.com/documentation/woocommerce-product-table-import-and-export/)

How to quickly import/export product tables to WordPress? In the age of e-commerce, this question is becoming more and more relevant, especially for web administrators of online stores. If you are creating a shop on localhost first, you may want to transfer your product table settings to the live site. In such cases, the export and import option will come in handy.

That\’s why almost all plugins usually come with the built-in functionality to import and export the information. What\’s even more, commonly this process takes a few minutes. If you are using the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) plugin for your shop, you\’ll be glad to find out the transferring functionality is included in the plugin.  From this article, you\’ll find out how to use the import/export option.

## How to Use the Export Option?

The export option is located above the list of the tables in the plugin\’s menu. You can export one particular table or a group of tables. You just need to select the desired and then click the **Export Selected** button. In the pop-up, you need to set the path for saving the data. The tables are saved in **SQL** format. If you are exporting more than one table, they will be saved in one doc.

![Export](https://woobewoo.com/wp-content/uploads/2021/05/product_table_export.png)

## How to Import a Table?

The **Import Tables** button is located near the exportation option. To insert the table, you need to click the corresponding button, select the file from your computer and click the Import button. Please note, the plugin allows importing the data in the **SQL** format.

![Import](https://woobewoo.com/wp-content/uploads/2021/05/product_table_import.png)

As you can see you can effortlessly import and export the data in the WooCommerce Product Table plugin in a few seconds.

---

## Force theme templates

**Source:** [https://woobewoo.com/documentation/force-theme-templates/](https://woobewoo.com/documentation/force-theme-templates/)

Thanks to the extensive functionality of the **WooCommerce Product Filter**plugin, you can customize almost every Product Filter option to suit your store\’s individual interface.

So, for example, if your product filter, after filtering **ajax**, has differences in the styles of the product list, pagination, or invoice block, then we recommend using the **Force theme templates** option. And this tutorial will help you understand this option.

### Force theme templates

So, as we said above, if after ajax filtering there are differences in the styles of the product list, pagination, or invoice block, then enable this option.

You can enable and configure this option in the settings of the selected product filter.

To do this, select the product filter you need->**Options->Main-> Force theme templates.**

![Force](https://woobewoo.com/wp-content/uploads/2021/02/Force.png)

### Product container selector

**Important!** For **Force theme templates** option to work correctly, we recommend filling in the Product container selector option.

To do this, select the product filter you need->**Options->Main-> Product container selector.**

The main task of this option is to specify which page block to replace with a new one during filtering.

-for example, sometimes the page may contain several .products blocks, but it would be necessary to load the filtering result only into one of them.

-or you have a theme for this block in a completely different class – then the filter cannot find at all where to display what you have filtered.

After filling out this option, if there are multiple product shortcodes on the page, you can add a container selector that will limit the effect of this filter to only within it

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to paginate filter results?

**Source:** [https://woobewoo.com/documentation/is-it-possible-to-paginate-filter-results/](https://woobewoo.com/documentation/is-it-possible-to-paginate-filter-results/)

**WooCommerce Product Filter**is a plugin that allows you to increase the conversion of your store website and create the most comfortable shopping conditions for your customers.

The plugin gives you the ability to customize almost every option and element of your product filter. For example, a very frequently asked question from users of the **Product Filter** plugin Can filter results be paginated? Of course it is possible, and this tutorial will help you familiarize yourself with this option.

### Paginate Filter Results

For starters, understand that in general pagination is a feature of your theme, so you should look for its settings there.

Still, for most WordPress themes, the Set number of displayed products option is ideal. This option allows you to specify the number of products to display on the page, i.e. all products will be automatically paginated into search results pages according to the specified number of products for one page

In order to configure this option, you just need to open the editing of the filter you need, go to **Options> Main** and in the **Set number of displayed** products option, specify the desired number of products

![Set](https://woobewoo.com/wp-content/uploads/2020/12/Paginate.png)

Now, on the front-end of your store, when users set a filtering request, the search results will be paginated according to the specified number of products.![Frontend](https://woobewoo.com/wp-content/uploads/2020/12/Example.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Filter by Custom Meta Field

**Source:** [https://woobewoo.com/documentation/filter-by-custom-meta-field/](https://woobewoo.com/documentation/filter-by-custom-meta-field/)

Some plugins create separate meta fields for **Woocommerce** products.

**WooCommerce Product Filter** fully supports Custom Meta Field filtering. With the plugin you can create a separate filter for any meta field and standard woocommerce scu, weight etc.

### Filter by Custom Meta Field

After you\’ve created a Custom Meta Field, it\’s time to add a filter for these fields. To do this, open the **WooCommerce Product Filter** plugin and add an attribute filter in the**Filters** tab.

Next, click on the arrow on the attribute filter to open the options available for the attribute filter.

Now in the **Select Attribute** field, select **Custom Meta Field.**

![Custom](https://woobewoo.com/wp-content/uploads/2020/12/Custom-meta-field.png)

### Filter Option Settings

Here you can configure all the necessary options for the filter, all changes will be displayed in the preview.

You can configure the following options:

**Custom meta-field.**Here you can enter a custom name for the meta field.

For example, to display a sale price field, you would enter **_Sale_price** . In the same way, you can display any fields here.

![Sale](https://woobewoo.com/wp-content/uploads/2020/12/Sale-Price.png)

**Show title label.**Show title label with open/close filter functionality. Be carefull when show it as close with Hide filter by title click filter oprionality. In such case users do not see filter content

**Show on frontend as.**Depending on whether you need one or several attributes to be available at the same time, show attributes list as checkbox or dropdown. Attention! Slider type work only with numeric titles of attributes :

- Checkbox list
- Dropdown
- Multiple Dropdown
- Colors
- Text
- Buttons . If you select the buttons, then you can fully customize their design.
- Switch
- Slider. **Attention!** Slider type work only with numeric titles of attributes

**Alphabetical index.**Show Alphabetical index.

**Use Custom tags.**Choose tags for filter titles. Any settings you leave blank will default .

**Show count.**Show count display the number of products that have the appropriate parameter

**Layout.** Select a vertical or horizontal layout and set the count of columns .

**Maximum height in frontend.**Set maximum displayed height in frontend

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to use two filters on one page

**Source:** [https://woobewoo.com/documentation/how-to-use-two-filters-on-one-page/](https://woobewoo.com/documentation/how-to-use-two-filters-on-one-page/)

Using [WooCommerce Product Filter,](https://woobewoo.com/plugins/woocommerce-filter/) you can add unlimited filters to your website pages.

While we recommend adding all items to one filter, some users still prefer to add different items to different filters.

So this tutorial will help you understand how to use two filters on one page?

### How to add multiple filters to one page?

Let\’s say you have created severa**l Product Filters** and want to display all of them on your website page (remember that you can place filters in an unlimited number)

**You can do this in two ways**:

- **using shortcode**
- **through the widget.**

In this example, we have added two Product Filters to the page using the**Sidebar** widget.

![Several](https://woobewoo.com/wp-content/uploads/2020/12/product_filter_several_widgets.png)

So in the first Product Filter, we added the only **Search by text**, in the second Product Filter we added all the other elements.

This is how it looks on the frontend:

![Frontend](https://woobewoo.com/wp-content/uploads/2020/12/2-Filters-on.png)

### Recommendations for use

- At the same time, even if you add the same filter elements (for example, the Price in the 1st filter and the price in the 2nd filter), the search will proceed correctly, and even if you enable the **AJAX option**, the filters will simply duplicate each other.

![Recommendations](https://woobewoo.com/wp-content/uploads/2020/12/filters-2.png)

- Many plugin users do not know that you can add multiple filter elements directly to one filter. For example, you can add an unlimited number of filters by: categories; tags; attributes.

And we highly recommend adding all elements to one filter, rather than using several.

![width=865](https://woobewoo.com/wp-content/uploads/2020/12/Many-Filters.png)

- Some users try to create a Horizontal Product Filter in this way, but we recommend not to do this as their display may be unpredictable. Check out**this article to learn how to create a horizontal filter**.

![width=1175](https://woobewoo.com/wp-content/uploads/2019/09/horizontal-filter-1.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Filter with Redirect to page

**Source:** [https://woobewoo.com/documentation/filter-with-redirect-to-page/](https://woobewoo.com/documentation/filter-with-redirect-to-page/)

**WooCommerce Product Filter** is one of the most convenient and efficient product filtering plugins for your WooCommerce store. As practice shows, the use of this plugin allows you to accompany a potential buyer to the product he needs much faster and more comfortable, and often allows you not to lose a client at all.

For example, you can add a filter directly on the main page (or any other page that has no products) of your site, and when a site user selects any filter values, he will receive filtering results for the selected query already on a specific page.

For this, the plugin has an option **Redirect after filter selection**, and this tutorial will help you configure this option.

### Redirect after filter selection

In order to enable the option and select which page users will link to after selecting the filtering parameters, go to the **Settings-> Main** tab.

And check the box next to **Redirect after filter selection.**You can enable **Redirect if only click the button.**

Then you can select one of the available pages to redirect to it after selecting a filter

![Redirect](https://woobewoo.com/wp-content/uploads/2020/12/product_filter_redirect.png)

### Practical use

**Redirect a product filter from a non-product page to a shop page.**For example, the very common use of this option is when you place a product filter, as a search box (or any other filters) right on the home page of your site, or on any other without products.

Then enable the redirect option to the store page. Now, when the user sets a query in the search bar (or in any other filter), the filter will automatically redirect the user to the specified page with all the parameters of the filtering query saved.

![Settings](https://woobewoo.com/wp-content/uploads/2020/12/Settings-Redirect-1.gif)

After you have added a filter to the page you need using a widget or shortcode, we can see how it will look on the front-end:

![Redirect](https://woobewoo.com/wp-content/uploads/2020/12/Redirect-front.gif)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to set a fixed table width

**Source:** [https://woobewoo.com/documentation/how-to-set-a-fixed-table-width/](https://woobewoo.com/documentation/how-to-set-a-fixed-table-width/)

With the **WooCommerce Product Table**plugin, you can customize every element of your table. Do you need to display a table with a specific width? Your table is very large and when displayed it blows to an indecent size? Then this tutorial will be useful for you.

This tutorial is about exactly how to set the fixed width of the product table in pixels or percent.

### Fixed table width

After you\’ve created the **Product Table,** added the columns and products you want, it\’s time to set up a fixed table width.

To do this, go to editing the table you need, open the**Settings-Appearance** tab and go to setting the**Fixed table width** option.

Here you can set a fixed width of the table in **pixels or percent**, for this just set the values you need.

![Fixed](https://woobewoo.com/wp-content/uploads/2020/11/width.gif)

We also recommend that you check out this article to learn more about how to control the **column width**of a Product Table.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Lazy load

**Source:** [https://woobewoo.com/documentation/lazy-load-2/](https://woobewoo.com/documentation/lazy-load-2/)

Having problems with the loading speed of your spreadsheet due to a large number of products in stores?

The**lazy load** option will help your product table pages load much faster.

Get the **WooCommerce Product Table** plugin and use the**lazy load**option now.

### What is lazy loading?

Lazy loading is an option that allows you to load your products for each page separately, because. initially, the [Product Table p](https://woobewoo.com/plugins/table-woocommerce-plugin/)lugin will load all your products on all pages at the same time.

If you have more products than can fit on one result page (for example, you have 100 products and 10 rows per page are displayed), then 10 pages will be generated with pagination links below the table. However, all products on all pages are loaded at the same time.

### Why do I need the lazy loading option?

If you display products in a table in a standard way, this can lead to a loss in the performance of your website\’s website and, as a result, a loss in conversion, since all relevant products are retrieved from the database and then formatted by the plugin. This can result in slower page loads and – for very large product databases – it can even lead to a website crash, server, or database error when trying to load a table.

If you have a lot of products, you can enable the lazy load to avoid performance issues.

### How to enable lazy loading?

You can easily enable this option by going to **WooCommerce Product Plugin Table -> Settings -> Features** -> Enable**Lazy load.**

Moreover, you can set the number of lines to display in one lazy load. To do this, specify the required quantity in the **Lazy load limit** field

![Lazy](https://woobewoo.com/wp-content/uploads/2020/11/Lazy-Load.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Pre-Sorting

**Source:** [https://woobewoo.com/documentation/pre-sorting-2/](https://woobewoo.com/documentation/pre-sorting-2/)

WooCommerce Product Table plugin has a functionality that allows sorting the products by custom queries. To enable the option, go to the **Settings** options page and check the **Use pre-sorting** box.

## Drag&drop Custom Sorting

**Pre-Sorting** . Enable the сheck the box if you want to add manual sorting to define the order of products in the table. To set up custom sorting, go to the Content tab, add products to the table, drag and drop products in the order you want:

![Pre-Sorting](https://woobewoo.com/wp-content/uploads/2020/11/Pre-sort.gif)

## Manually Custom Sorting

Moreover, you can place an order for an item manually by entering the item number in the table.

To do this, click on the arrows, and specify the number. You can easily rearrange the object to the desired position. This is a more convenient way if there are many products in the table.

Also, this is the only way to move a product to the next or previous page due to pagination.

![Custom](https://woobewoo.com/wp-content/uploads/2020/11/Pre-sorting.png)

## Sorting by Specific Parameters

Except for the**Manual**option, there are seven other options you can arrange your products by in the admin panel.

If you select the**Popularity**option, the products in the table will be according to the number of purchases.

When it is set to the**Rating**option, the products will be sorted based on the reviews.

![Rating](https://woobewoo.com/wp-content/uploads/2020/11/product_table_rating.png)

The**Newness**option will be to sort the products by the date of adding to the shop from the newest added to the latest.

![Newness](https://woobewoo.com/wp-content/uploads/2020/11/product_table_newness.png)

If you select the**Price**option for ordering, the products will be located in the ascending order.

![Price](https://woobewoo.com/wp-content/uploads/2020/11/product_table_price.png)

The**Random**option will sort the products in the accidental order.

In order to sort the products in alphabetical order, you can select the**Name**option.

![Name](https://woobewoo.com/wp-content/uploads/2020/11/product_table_name.png)

If you set the**Menu Order**option, then the products in a table will be sorted according to the order you have in the**Products**Dashboard.

Below the**Sorting type**drop-down list, there is the**Sorting descending**option which sets the sort products in descending order.

The order will be saved in the way you set it and will display in a table.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Filter by Brands

**Source:** [https://woobewoo.com/documentation/filter-by-brands/](https://woobewoo.com/documentation/filter-by-brands/)

**WooCommerce Product Filter** plugin is fully compatible with WooCommerce Brands plugin and supports filtering by brand

[WooCommerce Brands](http://woocommerce.com/products/brands/) allows you to create brands for your shop, with a name, description, and image assigned to each.

Check out this article to learn how to set up product filtering by brand.

### Filter by Brand

**Step 1. Get plugins**

First, make sure you have installed and activated the plugins:

- **WooCommerce ;**
- [WooCommerce Brands;](http://woocommerce.com/products/brands/)
- **WooCommerce Product Filter.**

**Step 2.Creating brands**

To start adding brands:

1. Go to: **WooCommerce >** **Products > Brands**. The interface looks and works similar to adding categories and tags — the form on the left lets you add a brand, which is then displayed on the right.

![Brand](https://woobewoo.com/wp-content/uploads/2020/11/product_filter_brand.png)
2. **Enter a Name and Description**. Image is optional. Brands can be hierarchical, specifying a ‘parent’ with ‘child’ brands under it.
3. **Select Add New Brand** to save.

### Step 3. Editing and deleting brands

Modify Brands by hovering over the Name and click **Edit** or **Delete**. Brands may also be **re-ordered**by dragging and dropping.

![WooCommerce](http://docs.woocommerce.com/wp-content/uploads/2012/11/WooCommerce-Brands-List.png)

### Step 4. Assigning a brand to a product

Assigning brands to products is the same process as adding categories and tags.

1. Go to: **WooCommerce > Products**.
2. **Select a product** to assign a brand.
3. Find the **Brands** box in the right sidebar.
4. **Tick the box of brands** you wish to assign to the product.
5. **Update or Publish** to save changes.

![Assign](http://docs.woocommerce.com/wp-content/uploads/2012/11/WooCommerce-Brands-Assign-Brand.png)**Step 5. Add filter by brand**
Now, go to the **WooCommerce Product Filter**plugin and choose to edit the filter you want (or create a new one)

Next, add a filter by the brand to your product filter, for this, in the Select filters to add field (in the Content tab), select the **Perfect brand**filter and click add.

**Step 6. Setting up a filter by brand**

Click the drop-down arrow to configure any brand filter options you don\’t need.

![Add](https://woobewoo.com/wp-content/uploads/2020/11/Perfect-Brand.png)

- Edit **Filter title** and**description**
- **Show title labe**l. Here you can choose how to show the title with the function of opening/closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show on frontend as.** Depending on whether you need one or several brands to be available at the same time, you may show your brands list as :
- Radiobuttons list (single select)
- Multiple Dropdown. For this type, there is the Single select mode that allows only one item from the list to be selected at a time
- Dropdown (single select)
- Checkbox list (multiple select)
- Buttons
- Text
- **Show hierarchical**. Show paternal and subsidiary brands (for checkbox list). If you display only some brands, make sure that the parent brands are selected.
- **Collapsible.**If enabled, then show only parent elements, if there are children, they are minimized. (Only available for Radiobuttons list and Checkbox list)
- **Show images**. Show element image. Not working with dropdown.
- **Alphabetical index**. Show the Alphabetical index. Works only for parent elements.
- **Sort by.**Here you may set brands sorting by ascendance or descendance.
- **Order by custom**. Brands are displayed according to the order of their selection in the input fields.
- **Hide brands parent.**Show only brands children
- **Show count.** Show count displays the number of products that have the appropriate parameter.
- **Hide brands without products.**Do not show the filter option if there are no products with such a brand.
- Select **Product brands.**Select product brands to be displayed on your site from the list. If you want to select several brands, hold the Shift button, and click on brand names. Or you can hold Ctrl and click on brand names. Press Ctrl + a for checking all brands.
- **Make selected brands as default.**Selected brands will be marked as default and hidden on the frontend.
- **Clear filter only to selected brands.**When the filter is clear, he will be filtered only by selected items. Be careful when using two or more brand filters!
- **Exclude terms ids.** Exclude brand terms from the filter by ids. Example input: 1,2,3.
- **Show search**. Show search display the bar for searching by brand name in the filter
- **Hide child.**Hide child taxonomy.
- **Always display all brands.** If checked, the entire list of brands will always be visible, otherwise only available for filtered items.
- **Layout.**Select a vertical or horizontal layout and set the count of columns.
- **Maximum height in frontend.**Set maximum displayed height in frontend.
- **Display brand description.** Turn on the option todisplay the brand description before the product list.
- If you have several filters based on different taxonomies on your pages, you have an option to set the logic between them. To do so, go to the**Options >> Content**and scroll down to the**Multiblock Taxonomy Logic**dropdown. The available options are OR and AND.![Taxonomy](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_taxonomy_logic-1.png)

### Display on the Brand Page

Besides, after the Perfect WooCommerce Brands plugin installation, you will have an opportunity to showcase the filters on brand pages. To do so, you need to proceed to the **Option >> Main** path and from the **Display On Pages** dropdown select **Brand Page**. You can find out more about displaying filters on pages from this [guide](https://woobewoo.com/documentation/display-only-on-page-wpf/).

![Display](https://woobewoo.com/wp-content/uploads/2020/11/product_filter_display_pages.png)

### How does it work on the frontend?

![How](https://woobewoo.com/wp-content/uploads/2020/11/Brand-Front.gif)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Columns and Settings

**Source:** [https://woobewoo.com/documentation/columns-in-the-product-table/](https://woobewoo.com/documentation/columns-in-the-product-table/)

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/)plugin lists your products in a table with columns of information about each product. You can use the columns option to choose which columns to include in the table.

Check out **this article** to learn more about how to create a table and add products .

### How do I add columns to the Product Table?

To add a column to the product table, go to the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/)plugin menu, create a new table, or go to editing an already created one.

Here click on the**Select properties to add to the table** dropdown box and you will see all **available columns**. Just select the ones you need and click add.

**Each column has the following option icons:**

![Column](https://woobewoo.com/wp-content/uploads/2020/11/Column-options.png)

1. **Sorting** – just drag the icon and define the order of the columns in the table;
2. **Settings** – click on the pencil and advanced settings for each column will open individually;
3. **Delete** – click if you want to delete a specific column from the table.

### Column Settings

Each column has an individual setting of options, but also has settings that apply to all columns.

To open the column settings – Go to the Content tab in the plugin menu, add the required columns and click on the pencil.

![Column](https://woobewoo.com/wp-content/uploads/2020/11/product_table_column_settings.png)

The following option settings are available for each column:

- **Title.**Here you can specify how the column will be named: by default or enter a custom title for the column.

* if you leave the field empty, the column header will be empty.
- **Column Width** .  This setting sets the maximum width for the column, but the rest of the table content also affects its width – check how it looks on Preview.
- **Always hide .**The column will be hidden and will only be used for hidden attributes
- **Hide/Show on small screens .**If you want to make this column hidden. The screen size you can set in the Appearance tab:
- **Disable search on this column** .  If you enable this parameter, then information from this column will not be included in the search query.
- **Disable sorting on this column.** If you enable this option the information from this column will not be sorted.

And as we indicated above, each column has additional individual options in the column settings

### Available Columns and Settings

You can add an unlimited number of columns, in any order .The plugin fully supports:

**1.Name.**

Contains information about the product name.

![Name](https://woobewoo.com/wp-content/uploads/2020/11/product_table_name_column.png)

In the settings of the Name column, in addition to the standard options, you can configure the following:

- **Show link to the Product page .** Check this option if you want the product name to be clickable and link to the product page.
- **Cut product title text.**Here you can cut the length of the product name to a certain number of characters.
- **Show parent title for product variations.**
- **Open link on a new window.**Check this option if you need to open the link in a new window.
- **Show short description below title** . A short description is displayed under the Product Name.
- **Add icon to favorites.** This option adds a heart icon near the title of the products thus allowing to add the products to favorites.

The **Name** column has also self-templated logic. So if you want to add a line break to the title of the product or make some elements bold, you just need to add the corresponding HTML code to the title of the products.

![self-templated](https://woobewoo.com/wp-content/uploads/2020/11/product_table_self_templated_logic.png)

**2. SKU**

Product SKU, inventory unit, part number.

In the settings of this column, in addition to the standard parameters, you can configure the **Change SKU after variation change**

![SKU](https://woobewoo.com/wp-content/uploads/2020/11/product_table_sku.png)

**3.Date.**

The **Date** column will display the date the product was added to your store (i.e. when it was published).

**4.Thumbnails.**

The **Thumbnails** column will display the main product image (see the [Thumbnails_size](https://woobewoo.com/documentation/thumbnail-size/) option below to set a custom size).

![Thumbnails column](https://woobewoo.com/wp-content/uploads/2020/11/Thumbnail-1.png)

- **Add cart button.**When this option is enabled, a button for adding an item to the cart will appear below the image.
- **Add second thumbnail.**Check this option if you want the product Thumbnail to be clickable and link to the product page.
- **Use product link.** Check this option if you want the product Thumbnail to be clickable and link to the product page. Otherwise, clicking on the product an image lightbox with navigation arrows appears to check the images gallery.
- **Responsive mod thumnbnail size.**Set the size in the pixels to display full-size thumbnails on mobile.![image](https://woobewoo.com/wp-content/uploads/2020/11/product_table_image_lightbox.gif)

**5.Featured**

****This column will display information about the recommended products.

![Featured](https://woobewoo.com/wp-content/uploads/2020/11/Featured-2.png)

To recommend to customers, go to **WooCommerce -> Products** and check the star next to the desired product.

![WooCommerce](https://woobewoo.com/wp-content/uploads/2020/11/Featured.png)

In the settings of the Featured column, in addition to the standard option, you can configure the following:

- **Show as** (text;icon; image )

**6.Summary**

The Summary column will show the full description of the product displayed on the Summary tab of the product page. The description is truncated to 100 characters, but you can customize it using the column settings-> Cut description text (Select Description popup and a popup will open when you click on a description with a full description of the product on it.)

![Summary](https://woobewoo.com/wp-content/uploads/2020/11/summary.png)

In the settings of the Summary column, in addition to the standard options, you can configure the following:

- **Cut description text.**Set the number of characters of text to display in the column.
- **Description popup.**Open popup when click description with product full description on it.

**7.Rating**

The **Rating** column will display the average star rating out of 5 for each product, based on previous customer reviews.

![Rating column](https://woobewoo.com/wp-content/uploads/2020/11/Rating.png)

**8.Stock status**

The stock column will contain either the basic stock status (for example, “In stock” or “Out of stock”) or the exact stock level. This is controlled in the main settings of WooCommerce – WooCommerce> Settings> Products> Inventory. On this page you can indicate whether you want to show the general condition of the product or the exact quantity of the product for each product.

![stock](https://woobewoo.com/wp-content/uploads/2020/11/Stock-Status.png)

In the settings of the **Stock status** column, in addition to the standard options, you can configure the following:

- **Show icons**
- **Show status text .**
- **Show quantity items in stock.** Display the quantity of available product. The option works with variable products too.

**9.Price**

The Price column will display the current product price. If there are variations for the product then the price is displayed as a range – e.g. “$2.99 – 5.99”. If the product is currently on sale, then the sale price is shown with the original price crossed out next to it.

![Price](https://woobewoo.com/wp-content/uploads/2020/11/price-column.png)

**10.Short description**

The **Short-description** column displays a brief description of the product entered on the product edit screen. It is usually displayed on the page of your product immediately before the price and add a button to the basket

In the settings of the Short description column, in addition to the standard options, you can configure the following:

- **Cut short description text. Set the number of characters of text to display in the column.**
- **Do shortcodes?.**In the Woocommerce product editor,**add media / shortcodes / media links**to the Short Description field, and the Product Table will display it in the player directly in the table.
- **Short description popup.**Open popup when click short description with product full text short description on it.

**11.Buy**

The **Buy** column will display the Add to cart button for that product,If the product is in stock. You can also show attribute variations.You can also **customize the style of the Buy button.**

![ Buy column](https://woobewoo.com/wp-content/uploads/2020/11/Buy-now.png)

In the settings of the Buy column, in addition to the standard options, you can configure the following:

- [Hide variation attributes.](https://woobewoo.com/documentation/variable-products-and-settings/)
- [Show a button for each variation.](https://woobewoo.com/documentation/variable-products-and-settings/)
- **Select options in the popup.**

**12. Downloads**

The **Downloads** column displays Downloadable products,which give access to a file upon purchase.

![Downloads column](https://woobewoo.com/wp-content/uploads/2020/11/DownLoad.png)

In the settings of the **Downloads** column, in addition to the standard options, you can configure the following:

- **Show as** (button ;icon;  link ;audio; video)
- **Open link on a new window.**Check this option if you need to open the link in a new window.

**14.Product link**

The**Product link** column will display a button by default “More” in the table which links to the product detail page. You can change its text to any other

![select](https://woobewoo.com/wp-content/uploads/2020/05/any-text.png)

In case, you don\’t want a user to be sent to the product page, you can check the **Open a page in the same tab** option in the column\’s settings.

In the settings of the Downloads column, in addition to the standard options, you can configure the  **Button text**

**15 and 16 .Categories and Tags Columns**

The Categories and Tags columns display the list of categories/tags that the product is in. You can use the links option to control whether or not these columns will link to the relevant category or tag. If search on this column is enabled then clicking on the category or tag in the table will filter the table to products in that category/tag.

![Categories](https://woobewoo.com/wp-content/uploads/2020/11/Category-and-tag.png)

In the settings of the **Category/Tag** columns, in addition to the standard options, you can configure the following:

- **Show category/ tag link .**Check this option if you want the productcategories/ tags to be clickable and link to the product page.
- **Open category link on a new window .**Check this option if you need to open the link in a new window. (Doesn\’t work with inner filter category/tag option activated)
- **Display each category/tag on a new line.**
- **Exclude terms ids.**Here you may exclude category terms by ids. Example input: 1,2,3 ( category column only).

**17.Attributes**

You can map either the Attributes column or the Product Attributes columns as a separate column in the table, for example Color or Model.

![Attributes](https://woobewoo.com/wp-content/uploads/2020/11/Attribute-column.png)

In the settings of the **Attributes** column, in addition to the standard options, you can configure the following

- **Display each attribute on a new line.**
- **Treat attribute column as integer data value for searching and sorting.**
- **Show only marked as Visible on the product page**. The option is responsible would it be possible for showing attributes marked correspondingly.

**18. Sales**

**WooCommerce Product Table**gives an option to display all necessary information about the products in columns. One of them is a SALES column.

If you add it to the table you actually can show the customers how many times the product has been sold.  This data is base on WooCommerce Report – Sales by-product and provides information about total sales for all period.

Add a sales column and as a result, a table with a sales presentation is ready

![sales](https://woobewoo.com/wp-content/uploads/2020/05/SALES.png)

**19.Sale Price dates**

Use along with the **“Sale Price dates” column**. This column will show the dates of the sale price for a particular product. Use this to limit the period of the sale price, motivating your customers to buy here and now!

![Sale](https://woobewoo.com/wp-content/uploads/2020/05/data-sales-1.png)

**20.Custom fields**

Using taxonomies, you can store and display additional product data. Thus, they are designed to store reusable information that can be used to group and filter products.

If you create the **Product table**, all taxonomies created will be displayed in the list of available columns and marked in yellow.

Select Taxonomy, add a column and add products according to the taxonomy. Check out our article “[How to add custom taxonomy](https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/)” .

![Taxonomy](https://i.gyazo.com/e58c4dbe7726bafdf255d4dced584557.png)

**21. Weight**

The Weight column allows showing the weight of the products. It is suitable for heavy goods like engines, etc. to make the customer know the weight.

**22. Dimensions**

This option allows displaying the dimension of the items sold.

Want to know more about the **Product Table**options? Explore **our documentation**, or **contact us** and we will be happy to help you.

---

## Can I add product variations as separate products?

**Source:** [https://woobewoo.com/documentation/can-i-add-product-variations-as-separate-products/](https://woobewoo.com/documentation/can-i-add-product-variations-as-separate-products/)

Variable Product is a type of product in WooCommerce that allows you to offer a product with a set of variations, and you can also control prices, stocks, images and more for each variation. They can be used for goods such as shirt, where you can offer large, medium and small sizes in different colors.

**WooCommerce Product Table by WooBeWoo** fully supports variable products and can display them in a table in a variety of ways. For example :

- **Select options in the pop-up.**
- [Show a button for each option.](https://woobewoo.com/documentation/variable-products-and-settings/)
- [Display options as drop-down lists in the “buy” column.](https://woobewoo.com/documentation/variable-products-and-settings/)
- **Display each variation as a separate product.**

This documentation article will help you understand the 4th method, or how to display product variations as separate products in a table?

You can do this in two ways: manually and automatically.

## Manually

To manually add product variations as separate products, you need:

- Move to the **WooCommerce Product Table** plugin menu, select the table you want and click **Add Products**.
- Next, in the top menu, put a tick on the option **Show variations**  .Now in the product list, you display each variation as a separate product.
- It remains only to select the ones you need and click to **add the selected products to the table**

![Show](https://woobewoo.com/wp-content/uploads/2020/11/manually.gif)

## Add products variations automatically

Instead of manually adding each variation, you can enable this option and all product variations are automatically added to the table as individual products.

![Add](https://woobewoo.com/wp-content/uploads/2020/06/add-variations.png)

To enable this option, click on the checkbox and in the drop-down list select the variations of which particular product you want to add to the table. The variations will then appear in the table as separate products.

![Add](https://woobewoo.com/wp-content/uploads/2020/06/variations-such-as-products.png)

Still have questions? Explore **our detailed documentation**, or **contact us**and we will be happy to help you.

---

## How to create a multiply filter?

**Source:** [https://woobewoo.com/documentation/how-to-create-a-multiply-filter/](https://woobewoo.com/documentation/how-to-create-a-multiply-filter/)

To avoid any mistakes and misunderstandings on the part of users, as well as to remind them about the available filters, it is recommended to allow several selections in one category at the same time.

This may seem like a very simple idea, however, many e-commerce sites do not adhere to this principle.

Filters that are limited to a single option can negatively impact the site\’s usability and customer satisfaction.

A good example of a woocommerce store filter is one that gives its users the ability to filter based on multiple criteria.

**Woocommerce product filter by WooBeWoo**has this capability in the plugin.

This documentation article will help you figure out how to create multiple product filters.

### How to create a multiply filter?

After you have installed and activated the plugin, go to the Product Filter plugin menu.

Here you can create or edit the filters you want.

Next, open the product filter you need and add the required filter elements, recall that multiple options are available for the following filters :

### PRODUCT TAGS

To enable multi-selection in a filter by tags, click on the arrow to open the drop-down list of Filter by Tags options.

Next, use the **Show on frontend as** an option and set :

- checkbox list (multiple select);
- Multiple dropdown;
- Buttons(pro)
- Text(pro)

![multiply](https://woobewoo.com/wp-content/uploads/2020/10/multiple-product-tags.png)

### PRODUCT ATTRIBUTES

To enable multiple selections in an attribute filter, click the arrow to open the drop-down list of Attribute Filter options.

Next, in the select attribute field, select the desired attribute.

Next, use the **Show on frontend as** an option and set :

- Checkbox list (multiple select);
- Multiple dropdown;
- Colors(pro)
- Buttons(pro)
- Text(pro)
- Switch(pro)

![multiple](https://woobewoo.com/wp-content/uploads/2020/10/Multiple-Attribute.png)

### PRODUCT CATEGORIES

To enable multiple selections in a category filter, click the arrow to open the drop-down list of Filter by Category options.

Then use the **Show on frontend as** option and set:

- checkbox list (multiple select);
- Multiple dropdown;
- Buttons(pro)
- Text(pro)

![multiple](https://woobewoo.com/wp-content/uploads/2020/10/Multiple-Categories.png)

### AUTHOR

To enable multiple selection in a filter by author, click the arrow to open the Filter by Author drop-down list.

Then use the Show on frontend option and set:

- checkbox list (multiple select);
- Multiple dropdown;

![multiple](https://woobewoo.com/wp-content/uploads/2020/10/Author.png)

In the example below, you can see how this filter works on the front-end

![example](https://woobewoo.com/wp-content/uploads/2020/10/Filter-multi-select.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to create a Product Directory ?

**Source:** [https://woobewoo.com/documentation/how-to-create-a-product-directory/](https://woobewoo.com/documentation/how-to-create-a-product-directory/)

WooCommerce Product Directory is a website page or a separate section, that contains detailed information about products or services. The product catalog usually contains a photo of the product, a detailed description, technical data and requirements, prices, information about the popularity of the product, customer, and expert reviews.

### Step 1. Install plugins and create products.

- You need to add products from your WooCommerce store:

Install the free **WooCommerce**plugin and run the setup wizard. Add all your products to the catalog in WooCommerce. You can do this manually through Products > Add New.

(do not forget to use our tips in the previous paragraph of the article)

- Install the plugin **WooCommerce Product Table by WooBeWoo**. Use the **plugin documentation** to customize all the options and design elements you need.

### Step 2. Plan your WooCommerce Product Directory.

This should be done in advance to make sure the navigation is logical and intuitive.

These questions will help you plan your store\’s directory structure:

- Will you have a central catalog page listing all products?
- Maybe you are better off using multiple pages, each listing different products based on their category, tag, or custom taxonomy term?
- Will each page of catalog listings contain a single product table? Or would you add multiple tables to each page with different products?
- Is your server powerful enough to support the number of products per page in the catalog? Remember that with the product table plugin you can use the Lazy Load option.

![Set](https://woobewoo.com/wp-content/uploads/2020/10/Settings-Directory.png)

### Step 3. Set up the WooCommerce Products Table.

Once you\’ve installed the **WooCommerce Product Table** plugin and selected the default settings, it\’s time to start creating your product tables. Thanks to the wide functionality of our plugin, this does not require any special programming knowledge. Creating tables using the WooBeWoo plugin is very easy and interesting.

**Read this article** to learn more about how to create a product table

This will create a base directory listing your WooCommerce products in a table.

Use the **detailed product table documentation** to customize your catalog. It is very flexible and offers many different personalization options. Here\’s a rundown of the main options you are likely to use to improve your WooCommerce store catalog:

- **Select product table  columns and catalog headers**

The WooCommerce product table supports all standard product data such as title, short and long description, price, sizes, availability, reviews, and attributes. It also supports custom data through custom fields and WooCommerce taxonomies.

You have complete control over which columns appear in the catalog. You can also rename or delete the column headings.

![Select](https://woobewoo.com/wp-content/uploads/2020/10/Table.png)

- **Turn your catalog into an order form with add to cart buttons, variatons, and a quantity selector**

Turn your store catalog into a WooCommerce one-page order by allowing customers to place orders directly from the catalog page. You can do this by including the “Add to Cart” column in the table.

You can also display variable products and quantity selector directly in the table. Customers can select options, quantity, and add multiple products to their cart without having to visit the single product page.

- **Search, sort and filter**

You can choose how customers can interact with the WooCommerce catalog to find products quickly and easily. There are options to show, hide, or reposition various elements, such as the keyword search box. Customers can click a column heading to sort by that column. You can also add product filters so customers can narrow down their catalog listings by category, tags, price, custom taxonomy, and more.

![Search,](https://woobewoo.com/wp-content/uploads/2020/10/Filters.png)

- **Insert audio and video into a directory**

WooCommerce product table supports embedded audio and video. If you are creating a catalog of music or videos, then customers can watch or listen directly from the catalog listings page. This is ideal if you are using audio or video to convince people to buy your products.

- [Select options in the pop-up](https://woobewoo.com/documentation/select-options-in-the-popup/)

For products with variations, instead of the add to cart button, you will see a button to select options, after clicking on it, your customers will have the opportunity to select variations in a pop-up window. At the same time, the products will retain the familiar Add to Cart button unchanged.

### Step 4. Add the Catalog to the store page

Your store catalog is now ready to launch.

To add a product table, go to the Product Table plugin and use the shortcodes from the table list. (You can also open the Product Table and copy the shortcode above the main tabs):

Copy the shortcode and paste it into your website content, and then the Product Table plugin will display the table you created in the appropriate post/page using the settings you configured in that table.

![Add](https://woobewoo.com/wp-content/uploads/2018/06/woocommerce-product-table-shortcode.png)

## Make your Product Directory more efficient with WooBeWoo

We hope you are convinced of the huge benefits you get by using the**WooCommerce Product Table** plugin by WooBeWoo to create a Product Directory.

You can get the plugin right now and start building effective and selling directories thanks to the plugin\’s wide functionality.

**Contact us**if you have any questions that are not covered in this guide, or if you need advice on setting it up to create the perfect directory.

---

## Select options in the popup

**Source:** [https://woobewoo.com/documentation/select-options-in-the-popup-2/](https://woobewoo.com/documentation/select-options-in-the-popup-2/)

If you want to create an effective [Woocommerce](https://woocommerce.com/) store, then you should definitely pay attention to the plugin[WooCommerce Product Table by WooBeWoo](https://woobewoo.com/plugins/table-woocommerce-plugin/), which will help you display your products correctly! [The Product Table plugin](https://woobewoo.com/plugins/table-woocommerce-plugin/)dynamically displays product variations and allows your customers to select the desired product option to add to the cart in real time, without refreshing the page.

It would seem it couldn\’t be more convenient, but we went further and we have good news for you:

**Attention!** Now you can allow your customers to choose options in a beautiful popup, at the same time as quickly and conveniently as possible.

Read on and we will explain how to enable and configure this option.

![Select](https://woobewoo.com/wp-content/uploads/2020/09/popup.png)

## Select options in the popup

Let\’s assume at this point you have already installed the **Woocommerce plugin**, created products, and **added variations using attributes.**

Now you can enable this spectacular option very easily:

**Step 1. Create a product table.**

After you have added the products you want, add the columns you want, be sure to add the Buy column.

**Step 2. Enable the Select options in the popup option**

To do this, click on the pencil on the Buy column to open the column settings.

Next, set the checkbox to the **Select options in the popup** option.

**Step 3: Enter text for the option button**

After enabling the option, you will see a field in which you can **enter your text** for the option selection button, by default Select Options.

While customizing the popup, you can also enable the**Short description** option to display a short description instead of a full one.

The **Natural order** option allows sorting alphanumeric attribute names human familiar.

![Popup](https://woobewoo.com/wp-content/uploads/2020/10/popup.png)

## Add product note in the popup

You can let your customers add a note to the product in a pop-up window. The note field will be added to the modal, which will then be stored as the product_note meta field in the cart item data.

![width=1680](https://woobewoo.com/wp-content/uploads/2020/10/ice_screenshot_20220711-223854.png)

Now the user will be able to leave a comment on the purchase, in the variation selection popup.

![width=1240](https://woobewoo.com/wp-content/uploads/2020/10/Note.png)

In addition, the entered value appears in the cart.

![width=1769](https://woobewoo.com/wp-content/uploads/2020/10/Cart.png)

## Display the selection of variations more effectively!

Now, for products with variations, instead of the add to cart button, you will see a button for selecting options, after clicking which your customers can select variations in the popup.

Whereas products without variation will retain the familiar add to cart button.

Magic? Yes, and all without a single line of code.

Below you can enjoy the work of this option:

![Select](https://woobewoo.com/wp-content/uploads/2020/09/variations.gif)

If you need to change the size of the popup, scroll to the**Features**section where you\’ll find the**Popup size**option. You can set the size either in % or px.

As you can see, everything is very simple, but nevertheless, if you still have questions, then study [our detailed documentation](https://woobewoo.com/docs/woocommerce-product-tables/) or [contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## How can I display a product filter on my store page?

**Source:** [https://woobewoo.com/documentation/how-can-i-display-a-product-filter-on-my-store-page/](https://woobewoo.com/documentation/how-can-i-display-a-product-filter-on-my-store-page/)

Once you\’ve created your product filter, it\’s time to add it to your store.

After creating a filter, you can add a filter in two ways:

using shortcode and PHP code (you can find them in the settings tab) or add the Woo Product Filter widget.

## How to add Product Filter to the Store?

- **Enter shortcode /PHP**

Copy **Shortcode** under the main tabs and paste it to the website content. Product Filter plugin will display the filter on appropriate post/page using settings tuned in this filter.

**Filter PHP code** can be inserted at any place of the page code – to display exactly in this place, for example in the header or footer of the page.

![Enter](https://woobewoo.com/wp-content/uploads/2020/09/shortcode.png)

**Widget.** If you are using a product filter on the sidebar of your store, you can also enable the product filter widget.

Did you know that WordPress sidebar and footer can enhance the functionality of your site?

You can add additional information to both parts using WordPress widgets. In this article, we will learn about the capabilities of a widget to help readers navigate your page. We\’ll also take a look at how you can add and customize widgets to suit your needs.

![widget](https://i.gyazo.com/e4a4c2834c2c7b7da713184f5927b365.gif)

Now, your store will be more efficient, product searches will be more intuitive, and conversion will begin to grow.

![Frontend](https://woobewoo.com/wp-content/uploads/2020/09/Screenshot_2.png)

Still, have any questions? Read **our detailed documentation** or **contact us** and we will be glad to help you.

---

## How to create Product Filter Accordion ?

**Source:** [https://woobewoo.com/documentation/how-to-create-product-filter-accordion/](https://woobewoo.com/documentation/how-to-create-product-filter-accordion/)

Product Filter Accordion is essentially the same WooCommerce product filter, but each filter element is rolled by default and appears only after clicking on the drop-down list icon or title.

This is very convenient, especially for displaying large filters or filtering on mobile devices.

**By using the WooCommerce Product Filter by WoobeWoo, you will have a significant advantage over the classic filtering view.**

Today there are practically no plugins on the WordPress market that provide such a simple Product Filter Accordion customization because what you need to do is just click on the option and you do not need to apply any code.

You can install the Accordion for mobile devices, or desktop, or for all devices at once, and also configure how it will be reflected when the page is first loaded in the opened or closed position.

![Responsive](https://woobewoo.com/wp-content/uploads/2020/09/Responsive-1.png)

### How to create Product Filter Accordion by WooBeWoo?

When you use **WooCommerce Product Filter by WooBeWoo**, absolutely any customization becomes a pleasure of ease of customization.

After all, the most difficult thing that you have to do is to decide which filters to display in the form of an accordion, and this is very important, as you may have noticed in the previous two paragraphs of the article.

So, you have installed and activated the WooCommerce Product Filter plugin by WooBeWoo, then:

- **Click “Create filter”, or “edit an existing one”.**
- **Add all the filtering elements you need, such as text search, filters by category, attribute, price, and others.**
- **Next, open the drop-down list with options for the required filters.**
- **In the “Show title label” field, select individually displayed on mobile and desktop devices.**

desktop (No; Yes, show as close; Yes show as opened)

mobile (No; Yes, show as close; Yes show as opened

![Create](https://woobewoo.com/wp-content/uploads/2020/09/Create-Accordion.png)

Still, have any questions? Read **our detailed documentation** or **contact us** and we will be glad to help you.

---

## Product filtering by Custom Taxonomy (manually)

**Source:** [https://woobewoo.com/documentation/product-filtering-by-custom-taxonomy-manually/](https://woobewoo.com/documentation/product-filtering-by-custom-taxonomy-manually/)

WooCommerce Custom Taxonomy is a feature that allows you to display additional product data based on class. This could be the color, size, or style of your product.

Most WooСommerce clients use **CPT UI** and **ACF** plugins to create a custom taxonomy**. Read this article** to learn how to create taxonomies using these plugins and filter by them with the **Product Table plugin by WooBeWoo.**

But is it possible to create custom taxonomies and custom fields without these plugins? Definitely yes, and this article will help you create your own taxonomies for WooCommerce products manually using code.

## Product filtering by Custom Taxonomy

Using the plugin is the easiest way to create a custom taxonomy and get a toolbox for working with custom content types.

However, if you choose manually creation of a Custom Taxonomy, this article will help you do just that.

**Step 1. Copy the code to functions.php file**

Just add the following code to your theme\’s functions.php file.

Below we have provided an example of such code:

/*

* Add custom taxonomy

* https://developer.wordpress.org/reference/functions/register_taxonomy/

*/

$args = array(

\’hierarchical\’          => true,

\’labels\’                => array(

\’name\’                       => _x( \’Taxonomy Name\’, \’taxonomy general name\’, \’THEME_DOMAIN\’ ),

\’singular_name\’              => _x( \’Singular Name\’, \’taxonomy singular name\’, \’THEME_DOMAIN\’ ),

\’search_items\’               => __( \’Search\’, \’THEME_DOMAIN\’ ),

\’popular_items\’              => __( \’Popular\’, \’THEME_DOMAIN\’ ),

\’all_items\’                  => __( \’All\’, \’THEME_DOMAIN\’ ),

\’parent_item\’                => null,

\’parent_item_colon\’          => null,

\’edit_item\’                  => __( \’Edit\’, \’THEME_DOMAIN\’ ),

\’update_item\’                => __( \’Update\’, \’THEME_DOMAIN\’ ),

\’add_new_item\’               => __( \’Add new\’, \’THEME_DOMAIN\’ ),

\’new_item_name\’              => __( \’New\’, \’THEME_DOMAIN\’ ),

\’add_or_remove_items\’        => __( \’Add or remove\’, \’THEME_DOMAIN\’ ),

\’menu_name\’                  => __( \’Taxonomy Name\’, \’THEME_DOMAIN\’ ),

),

\’show_ui\’               => true,

\’show_admin_column\’     => true,

\’update_count_callback\’ => \’_update_post_term_count\’,

\’query_var\’             => true,

\’rewrite\’               => array( \’slug\’ => \’taxonomy-slug\’ ),

);

register_taxonomy( \’taxonomy_name\’, \’product\’, $args );

**Step 2. Make Custom Taxonomy**

Let\’s assume that you have already installed WooCommerce and created the products you need.

After you have added the code, a tab for adding taxonomies will appear in the admin panel of your WordPress website, namely in the sub-items of the Products section.

Open this tab. Here you can add a new taxonomy:

-for that, just enter the title, slug, parent taxonomy, description, and click add.

For example, we have added several types of textiles for a clothing store.

![Custom](https://woobewoo.com/wp-content/uploads/2020/09/Custom-taxonomy-add.png)

**Step 3. Assign taxonomy to your product**

Now when you have created a taxonomy, in the product editor you can assign it to the corresponding product.

Go to Products and check the box next to the relevant taxonomy

![Edit](https://woobewoo.com/wp-content/uploads/2020/09/edit-product.png)

**Step 4. Add a custom taxonomy to the product filter.**

The good news is that there is a handy **WooCommerce Product Filter by WooBeWoo** plugin for filtering products based on additional data such as custom WooCommerce taxonomies.

After you have installed and activated the plugin, proceed to edit the desired product filter, or create a new one.

Now when editing the product filter:

-add filter by attributes,

-the attribute selection field, select your taxonomy, after which it will be displayed in the preview,

-now in the preview, you will see the filter for this type of taxonomy, after which you can fully customize its parameters and design. Explore our detailed documentation to find out more.

![Add](https://woobewoo.com/wp-content/uploads/2020/09/select-attribute-1.png)

**Working on the Frontend**

**WooCommerce Product Filter by WooBeWoo** is the perfect way to display products with additional information as everything is presented in a structured tabular format. You can add a product filter to any WordPress page, your main WooCommerce store, or product category pages. Products can be filtered by taxonomy with handy checkboxes, dropdowns, buttons, and many other display methods.

![width=858](https://woobewoo.com/wp-content/uploads/2020/09/Frontend.png)

Still, have any questions? Read **our detailed documentation** or **contact us** and we will be glad to help you.

---

## How to Filter Products by Colors

**Source:** [https://woobewoo.com/documentation/how-to-create-product-filter-by-color/](https://woobewoo.com/documentation/how-to-create-product-filter-by-color/)

**WooCommerce Product Filter** is a convenient and flexible tool for effectively filtering WooCommerce products. One of the many features of the plugin is the presence of an [attribute filter](https://woobewoo.com/documentation/attribute-filter-settings/) that manages to filter all the attributes available to the product, as well as a well-thought-out display system that will help you display this or that attribute as accurately as possible. You can display an attribute filter in the following ways:

- Checkbox list;
- Radio Buttons list;
- Dropdown;
- Multiple Dropdown;
- Colors;
- Text;
- Buttons;
- Switch;
- Slider.

How to create a products filter by the colors attribute, and show you how best to customize it .

## Product Filter by Color

### Step 1. Create a color attribute for the WooCommerce product

An attribute is an additional element that improves site navigation, expands the visual search for the buyer. Here\’s what the system says about attributes: Product attributes allow you to define additional product data such as size or color.

Navigate to Products> Attributes to add, edit, and remove attributes.

On this page, you can quickly and easily add attributes and their values.

• Add Title. (in our example Color)

• Add Label (optional) – Human-friendly URL version of the name.

• “Include Archives?” If you like.

• sorting by default. Choose between “Name”, ”Name (numeric)”, “Value ID” or “Arbitrary order”

• Select Add Attribute.

![Create](https://woobewoo.com/wp-content/uploads/2020/08/1.png)

• Select Configure Terms to add attribute values.

• Next Add a new “Attribute Name”, for example “green”, “black”, etc.

### Step 2. Adding new attributes to the product

• Navigate to Products> Add Product (or edit an existing one).

• Select the “Attributes” tab in the Item Data. There, you can select any of the attributes you have created from the dropdown menu.

• Select Add. If you selected a previously created attribute, you can select the value you have already added.

![add](https://woobewoo.com/wp-content/uploads/2020/08/save-attributes.png)

### Step 3. Adding filtering by color attributes to the product filter

To add an attribute filter:

- Select Attribute from the filter drop-down list.
- Next, in the Select Atribute field, select the desired attribute, in our example we select Color

![Select](https://woobewoo.com/wp-content/uploads/2020/08/select-attributes.png)

- To make everything look as authentic as possible, our plugin provides an option to display the attribute. In the **Show on frontend as** field, select how Color is displayed.

![Color](https://woobewoo.com/wp-content/uploads/2020/09/product_filter_color.png)

- And set a corresponding color for each attribute. For the color type filter, there is also bicolor functionality.

![Bicolor](https://woobewoo.com/wp-content/uploads/2020/09/product_filter_bicolor.png)

- **Color group.** You can combine attributes into attribute groups. Only parent attributes on the front will be displayed, but at the same time, all products that have child attributes assigned will be selected![Color](https://woobewoo.com/wp-content/uploads/2020/09/product_filter_color_group.png)
- In case, there are many attribute colors, you may use the **Show More** functionality. You can find out more about it [here](https://woobewoo.com/documentation/content-options/).![Show](https://woobewoo.com/wp-content/uploads/2020/09/product_filter_show_more.gif)
- Also configure any additional functions to display this attribute. Read **this docs article** to learn more about the attribute filter.

![How](https://woobewoo.com/wp-content/uploads/2020/08/example.png)

## Conclusion

But this very simple function at the same moment is very effective for filtering by product colors, since the customer may not even read the color labels, but intuitively choose the color of the product he needs.

Still have questions? read our **detailed documentation** or **contact us**and we will be happy to help you.

---

## How do I create a dropdown filter?

**Source:** [https://woobewoo.com/documentation/how-do-i-create-a-dropdown-filter/](https://woobewoo.com/documentation/how-do-i-create-a-dropdown-filter/)

Drop-down is one of the standard input fields in the Input Form Design Toolbox.

On the surface, a dropdown seems like a great way to get information from the user. It can include from one to an unlimited number of options, is compact and is part of the standard user interface for web and mobile versions of sites. Need a way to collect information from users without entering data? The dropdown will help you

## What filters to display as a drop-down list?

This is a great way to display, for example, WooCommerce product categories in a dropdown list. With the **Woocommerce Product Filter by WooBeWoo** plugin, there is a way to add dropdown filters to your store. You can apply the dropdown to the following filters:

- **price range**
- **rating**
- [stock status](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)
- [categories](https://woobewoo.com/documentation/product-categories/)
- [attributes](https://woobewoo.com/documentation/attribute-filter-settings/)
- [tags](https://woobewoo.com/documentation/product-tags/)
- [author](https://woobewoo.com/documentation/author-filter-optionswpf/)
- [custom taxonomies.](https://woobewoo.com/documentation/filtering-by-custom-taxonomy-compatible-with-acf-and-cpt-ui-plugins/)

Customers can filter all products and quickly select a product item from the dropdown list.

## How do I create a dropdown filter?

Let\’s consider an example of a drop-down list using the example of a category filter, and then, by analogy, you can also add to the rest.

### Step 1. Add the required filter.

First, select a category filter and click add.

![Add](https://woobewoo.com/wp-content/uploads/2020/09/dropdown1.png)

### Step 2 Choose a display method.

In the Show Frontend as field, select how to display your filter elements.

Select **Dropdown (single list)** for a dropdown list with a single choice, or **Multiple Dropdown** for a dropdown list with multi-choice.

![Choose](https://woobewoo.com/wp-content/uploads/2020/09/dropdown2.png)

### Step 3 Configuring dropdown options

To make your list truly effective, the next step is to correctly configure its options.

- **Use the default word, or enter your own in the dropdown label field**
- **Specify the sort order of the dropdown list items in the order by field**
- **Specify the number of displayed items of the drop-down list in the field show count**
- **And we also recommend reading this article for more of our tips for using the dropdown list.**

![Configuring](https://woobewoo.com/wp-content/uploads/2020/09/Dropdown3.png)

As you can see, managing the **Woocommerce Product Filter** plugin is very simple. Using this plugin you just need to click on the Show frontend as option in the filter editor menu and select the way you want to display the product filter, in our example, the dropdown list.

Still have questions? Read **our detailed documentation** or **Contact us** and we will be happy to help you

---

## Filtering by Custom Taxonomy (Compatible with ACF and CPT Ui plugins)

**Source:** [https://woobewoo.com/documentation/filtering-by-custom-taxonomy-compatible-with-acf-and-cpt-ui-plugins/](https://woobewoo.com/documentation/filtering-by-custom-taxonomy-compatible-with-acf-and-cpt-ui-plugins/)

Providing the ability to filter products on your website is essential. A good filter will allow your customers to find the exact post or product they are looking for as quickly as possible, saving time, improving the experience, and therefore increasing conversions by directly accessing the products. WordPress comes with some limited filtering options by default, which in turn has resulted in our**WooCommerce Product Filter by WooBeWoo** plugin with better filtering options.

**WooCommerce Product Filter by WooBeWoo** allows you to filter products based on almost any parameters such as price, categories, attributes, tags, ratings, and others.

But our plugin has gone further and offers you integration (for Pro version of Product FIlter ) with the **Advanced Custom Field**plugin  and full integration for **Custom Post Field UI**  (for Pro version of Product FIlter).

Let\’s say you\’ve added a new field to your product, or even created a completely new product type with all kinds of new fields. It would be nice to be able to filter your product type by one or more of these fields

### Advanced Custom Field

**WooCommerce Product Filter by WooBeWoo** is compatible (for Pro version of Product FIlter) with the **Advanced Custom Field** plugin.

The Advanced Custom Fields plugin gives you full control over WordPress editing screens and custom field data.

Custom fields are a great opportunity to add any required information about your products. You can also add data that cannot be added to any of the fields that come with WooCommerce by default.

- First, you need to create a custom field that you will use to add data to the **Advanced Custom Fields plugin** . Navigate to custom fields and click Add New Field Group. Make sure you select the Products message type. This is required for the custom field to appear on the add/edit screen for your products.

![Add](https://woobewoo.com/wp-content/uploads/2020/08/acf.png)

- Click Add Field, add a label, a field name and select the desired field type. You can add the following ACF field types – \’text\’, \’number\’, \’radio\’, \’select\’, \’button_group\’, \’checkbox\’, \’true_false\’, \’date_picker\’, \’date_time_picker\’, \’time_picker\’, \’color_picker \’ . Let\’s add a True / False field as an example.

![Add](https://woobewoo.com/wp-content/uploads/2020/08/true-false.gif)

- After you add any type of field, it will appear on the product page. Navigate to Products and click Add / Edit Product. Scroll down to the custom files created and add data and refresh/publish the product page.

![True](https://woobewoo.com/wp-content/uploads/2020/08/acf-product.png)

- To display a custom field in a product filter, go to the filter editor. Click Add Attribute Filter and select the required field from the drop-down list.

![Add](https://woobewoo.com/wp-content/uploads/2020/08/Select-attribute.png)

- Now in the preview you will see a filter for this type of field.Then you can completely customize its options and design. Explore our detailed documentation to find out more

![Example](https://woobewoo.com/wp-content/uploads/2020/08/Example-True.png)

## Custom Post Field

**WooCommerce Product Filter by WooBeWoo** PRO version is fully compatible with the Custom Post Field UI plugin.

This free plugin lets you create a taxonomy and assign it to WooCommerce products or any other type of post. Once you\’ve created a custom taxonomy, it will appear on the product page with a checkbox for each taxonomy term. You can add a taxonomy term in the same way as adding categories and display it easily in the product filter.

With taxonomies, you can store and display additional product data. So, they are designed to store reusable information that can be used to group and filter products. You can create a dedicated page listing all products that have a specific custom taxonomy term. You can also use taxonomies to filter products with the **WooCommerce Product Filter**plugin.

Follow this guide step-by-step to create taxonomies, add them to a product, and display them in a filter:

- Installed the**Custom Post Type UI**
- Go to CPT UI -> Add / Edit Taxonomies
- Add labels Slug, Singular and Plural.
- Select Products as the post type to attach.

![Add](https://woobewoo.com/wp-content/uploads/2020/08/Add-Taxonomy.png)

- Make other necessary settings. All detailed instruction you can find in the **plugin documentation**.
- Click Add Taxonomy. A new taxonomy will now appear on the product page.
- Then just enter the details. For example the genre of music

![Edit](https://woobewoo.com/wp-content/uploads/2020/08/Genres.gif)

- Next, when creating a product filter, add a filter by Attributes, and in the field select an attribute, select your taxonomy, after which it will be displayed in the preview.

![Add](https://woobewoo.com/wp-content/uploads/2020/08/add-cpt.png)

- Now in the preview you will see a filter for this type of field.Then you can completely customize its options and design. Explore our detailed documentation to find out more

![Work](https://woobewoo.com/wp-content/uploads/2020/08/frontend.png)

### Your store needs Product Filter by WooBeWoo

If you are going to create your first store or already have a store based on WooCommerce, then you need this plugin, which can filter by any product parameter, and now it is fully compatible with these excellent plugins for adding taxonomy and custom fields.

The plugins come with numerous design options that you can from colors to shapes, you can change their appearance. Moreover, you can choose from different types of filters such as slide filters, checkboxes, dropdowns, and others. The more design options you have at your disposal, the more custom websites you can create.

The WooBeWoo team works every day and makes working with WooCommerce very convenient and almost perfect for you. Nowadays it is the best plugin for filtering WooCommerce products.

Get the**WooCommerce Product Filter** plugin and filter your products online today through your online store. Or use the**WooCommerce Product Table** plugin to create a new online store and try the filters built inside. Choose the plugin you want and install it now!

---

## Attribute Filter Settings

**Source:** [https://woobewoo.com/documentation/attribute-filter-settings/](https://woobewoo.com/documentation/attribute-filter-settings/)

The first thing customers do is monitor and filter the price, size, colours, categories and other item’s properties. So, in this tutorial, we will consider the main steps to set up the Attributes.

Each product you’re planning to sell should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).

Firstly, navigate **WooCommerce -> Products -> Add New product or edit**already created one. After you created the product page, it\’s time to set the attributes for this product.

### Create the attributes

To create and set the attributes listed in WooCommerce, navigate to **Products -> Attributes.**Here you can add such properties as:

- **Name.** Add attribute’s name.
- **Slug.** A unique code for the attribute.
- **Enable archive:** check it if you want this attribute to have product archives in your store.
- **The default sort order:** defines sort order.
- After that just click **Add attribute**button.

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/attributes.png)

When, on the right side, you will see your new attribute. Press **Configure the terms** to add info:

- **Name:** what will appear on the site
- **Slug:** a unique code
- **Description:** write more about  the new attribute’s item
- Click **Add new**button.

---

### Add the attributes to the product

To add the created attributes, to the product, open the product page and scroll down![](https://i.gyazo.com/82e8e8bd7b6b306156e97f1f0eaf3fd8.png)

1. Find **the Product data**section
2. Click **Attributes**
3. Search your attribute and add it.
4. After that, select the item’s relevant characteristics from the drop-down list. Here you can add new attributes as well. Notice, that you can add more than one choice.

**Here you can see a short video instruction step by step:**

![Image](https://gyazo.com/373a72ae9d97025dd96168d5a374dbd3.gif)

## Attribute Filter Settings

Here you can:

- Edit **Filter title** and**description**

- **Select attribute .** Here you may select attribute to be displayed on your site from the list.

![Select](https://woobewoo.com/wp-content/uploads/2020/07/Attribute.gif)

- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show on frontend as.** Depending on whether you need one or several tags to be available at the same time, you may show your tags list as checkbox or dropdown.
- Checkbox list
- Dropdown
- Radio buttons list (single select)
- Multiple Dropdown. For this type, there is the Single select mode that allows only one item from the list to be selected at a time
- Colors
- Text
- Buttons . If you select the buttons, then you can fully customize their design.
- Switch
- Slider. **Attention!** Slider type works only with numeric titles of attributes

![Attribute](https://woobewoo.com/wp-content/uploads/2020/07/Attribute-Show-as.gif)

- **Select default id.** This option allows selecting the default filter value by id.
- **Force numeric values.** Transform attribute values to numeric
- **Use Custom tags**. Choose tags for filter titles. Any settings you leave blank will default
- **Order by custom**. Attributes are displayed according to the order of their selection in the input fields.
- **Show count.** Show count display the number of products that have the appropriate parameter.
- **Hide attributes without products**
- **Attributes .**Here you may select attributes to be displayed on your site from the list. If you want to select several attributes, hold the Shift button and click on names. Or you can hold Ctrl and click on names. Press Ctrl + a for checking all names.

![width=1022](https://woobewoo.com/wp-content/uploads/2020/07/Example-Select-Attribute-1.gif)
- **Make selected attributes as default.** Selected attributes will be marked as default.
- **Logic.**Here you can select the filter logic or /and/not in
- **Sort by**. Here you may set attributes sorting by ascendance or descendance.
- **Show Search.**Show search display the bar for searching by attribute name in the filter
- **Always display all attributes**. If checked, the entire list of attributes will always be visible, otherwise only available for filtered items.
- **Layout.** Select a vertical or horizontal layout and set the count of columns.
- **Maximum height in frontend**. Set maximum displayed height in frontend

![width=1193](https://woobewoo.com/wp-content/uploads/2020/07/Example.gif)

- If you have several filters based on different taxonomies on your pages, you have an option to set the logic between them. To do so, go to the**Options >> Content**and scroll down to the**Multiblock Taxonomy Logic**dropdown. The available options are OR and AND.![Taxonomy](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_taxonomy_logic-1.png)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## On sale

**Source:** [https://woobewoo.com/documentation/filter-on-sale/](https://woobewoo.com/documentation/filter-on-sale/)

Create and customize filters for your online store using the free [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) WordPress plugin.

This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

This tutorial will help you customize the On sale filter elements .

## Add Filter On Sale

Thanks to this filter, your users can choose to find the On sale products .

To add a filter, select Featured from the drop-down list and click Add.

![On](https://woobewoo.com/wp-content/uploads/2020/07/On-sale.png)

Once you have added this filter, you can fully configure it:

## On Sale Filter Settings

- Here you can enter your **Title** **Lable**text
- If you wish, you can enter the filter **Description** text (optional)
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show fronted as:**
- checkbox
- toggle switch
- **Switch  settings** . If you select  toggle switch ,the following settings will be available to you:
- Switch Type.  Rounded/Square
- Height
- Color

![On](https://woobewoo.com/wp-content/uploads/2020/07/On-Sale-example.gif)

- **Use as default.** Select On Sale status as default. Check the Hide filter option to hide the filter.![On](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_on_sale_status.gif)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Filter “Featured”

**Source:** [https://woobewoo.com/documentation/featured-filter-settings/](https://woobewoo.com/documentation/featured-filter-settings/)

Create and customize filters for your online store using the free [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) WordPress plugin.

This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

This tutorial will help you customize the Featuredfilter elements .

## Add Filter Featured

Thanks to this filter, your users can choose to find the Featured products .

To add a filter, select Featured from the drop-down list and click Add.

![Featured](https://woobewoo.com/wp-content/uploads/2020/07/Featured.png)

Once you have added this filter, you can fully configure it:

## Featured Filter Settings

- Here you can enter your **Title** **Lable**text, by default Featured
- If you wish, you can enter the filter **Description** text (optional)
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show fronted as:**
- checkbox
- toggle switch
- **Switch  settings** . If you select  toggle switch ,the following settings will be available to you:
- Switch Type.  Rounded/Square
- Height
- Color

![Featured](https://woobewoo.com/wp-content/uploads/2020/07/Featured-example.gif)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Product tags

**Source:** [https://woobewoo.com/documentation/product-tags-2/](https://woobewoo.com/documentation/product-tags-2/)

In this tutorial, we will consider the main steps to set up the tags for the product.

Each product you’re planning to sell should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).

Firstly, navigate **WooCommerce -> Products -> Add New product or edit**already created one. After you created the product page, it’s time to add the tags.

### Create the tags

1. Move to the *WooCommerce -> Products– Tags* section:
![Product](https://woobewoo.com/wp-content/uploads/2019/02/woocommerce-tags-1.png)
2. Set a name (f.e. hoodie), a slug and fill description (optional) and press the “**Add new tag”** button. A new tag will appear in the list.

**Here you can see a short video instruction step by step:**

### Add the tags to the product page

Open a product, move to the right panel, **Tags section**, and add a new tag or select from the most used tags:

![page](https://woobewoo.com/wp-content/uploads/2019/02/product-tags.png)

Also, you can add a new tag as well. Notice, that you can add more than one tag for each product.

### Tags Filter settings

Here you can:

- Edit **Filter title** and**description**
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show on frontend as.** Depending on whether you need one or several tags to be available at the same time, you may show your tags list as checkbox or dropdown.
- Checkbox list
- Dropdown
- Multiple Dropdown. For this type, there is the Single select mode that allows only one item from the list to be selected at a time
- Text
- Buttons . If you select the buttons, then you can fully customize their design.![Product](https://woobewoo.com/wp-content/uploads/2020/07/Buttonts.png)
- **Use Custom tags**. Choose tags for filter titles. Any settings you leave blank will default
- **Sort by**. Here you may set Tags sorting by ascending or descending .
- **Order by custom**. Tags are displayed according to the order of their selection in the input fields.
- **Show count.** Show count display the number of products that have the appropriate parameter.
- **Hide tags without products**.
- **Product tags.**Here you may select product tags to be displayed on your site from the list. If you want to select several tags, hold the Shift button and click on tag names. Or you can hold Ctrl and click on tag names. Press Ctrl + a for checking all tags.![Product](https://woobewoo.com/wp-content/uploads/2020/07/Custom-order.gif)
- **Make selected tags as default.** Selected tags will be marked as default.
- **Exclude terms ids.** Here you may exclude tags terms from filter by ids. Example input: 1,2,3
- **Logic.**Here you can select the filter logic or /and
- **Show search**. Show search display the bar for searching by tag name in the filter![Product](https://woobewoo.com/wp-content/uploads/2020/07/search.png)
- **Always display all tags .**If checked, the entire list of tags will always be visible, otherwise only available for filtered items.
- **Layout.** Select a vertical or horizontal layout and set the count of columns.
- **Maximum height in frontend**. Set maximum displayed height in frontend

- If you have several filters based on different taxonomies on your pages, you have an option to set the logic between them. To do so, go to the **Options >> Content** and scroll down to the **Multiblock Taxonomy Logic** dropdown. The available options are OR and AND.![Taxonomy](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_taxonomy_logic-1.png)

Still have questions? Read our detailed [Documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Product Categories

**Source:** [https://woobewoo.com/documentation/product-categories-2/](https://woobewoo.com/documentation/product-categories-2/)

In this tutorial, we will consider the main steps to set up the product categories.

Each product you’re planning to sell should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).

### Create the Categories

In order to set the product Categories, move to the *WooCommerce -> Products – Attributes* section:

Product categories for your store can be managed here. To change the order of categories on the front-end you can drag and drop to sort them.

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/categories.png)

Set a name (f.e. Sale), a slug, select parent category and fill description (optional) and press the **Add new category** button. A new category will appear in the list.

---

### Add the Category to the product

Open a product, move to the right panel, **Categories section**, and add new category/select Parent category:

![woocommerce](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-product-categories-1.png)

Also, you can add a new category as well. Notice, that you can add more than one category for each product.

**Here you can see a short video instruction step by step:**

## Add Filter Product Categories

To add a filter, select price in the drop-down list and click Add

![Product](https://woobewoo.com/wp-content/uploads/2020/07/Add-product-categories.png)

After you have added a Product Categories filter, the following settings will be available to you:

## Product Categories Settings

- Edit **Filter title** and**description**
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show on frontend as.** Depending on whether you need one or several categories to be available at the same time, you may show your categories list as :
- Radiobuttons list (single select)
- Dropdown (single select)
- Checkbox list (multiple select)
- Multiple Dropdown. For this type, there is the Single select mode that allows only one item from the list to be selected at a time
- Buttons
- Text![Product](https://woobewoo.com/wp-content/uploads/2020/07/Show-fronted-as.gif)
- **Show hierarchical** . Show paternal and subsidiary categories (for checkbox list). If you display only some categories, make sure that the parent categories are selected.
- **Hide categories parent.**Show only categories children![product](https://woobewoo.com/wp-content/uploads/2020/07/Colabsible.gif)
- **Collapsible.**If enabled, then show only parent elements, if there are children, they are minimized.(Only available for Radiobuttons list and Checkbox list)![Product](https://woobewoo.com/wp-content/uploads/2020/07/Hide.gif)
- **Extend parent select.** If the parent filter category was selected then extend the selection to child categories. (only available for checkbox list multiple select)![Woocommerce](https://woobewoo.com/wp-content/uploads/2020/07/extend-parent.gif)
- **Check page category.** Оn the category page automatically put a checkmark for the current category.
- **Check parent.** Toggle the option to check only parent categories.
- **Filter with children.** If the parent filter category was selected then extend the filter result to child categories.![Page](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_check_page_category.png)
- **Show images**. Show element image. Not working with dropdown.![Show](https://woobewoo.com/wp-content/uploads/2020/07/show-images.gif)
- Show **Alphabetical index**. Works only for parent elements
- **Use Custom tags.**Choose tags for filter titles. Any settings you leave blank will default.![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Use-custom-tags.png)
- **Sort by.**Here you may set categories sorting by ascendance or descendance.
- **Order by custom** . Categories are displayed according to the order of their selection in the input fields.
- **Show count.** Show count display the number of products that have the appropriate parameter (attribute, category, tag).
- **Count for parent category also her children count.** ![product](https://woobewoo.com/wp-content/uploads/2020/07/Count.png)
- **Hide categories without products.**Do not show filter option if there are no products with such category.
- **Product categories.** Here you may select product categories to be displayed on your site from the list. If you want to select several categories, hold the “Shift” button and click on category names. Or you can hold “Ctrl” and click on category names. Press “Ctrl” + “a” for checking all categories.
- **Make selected categories as default.** Selected categories will be marked as default and hidden on frontend.
- **Clear filter only to selected categories.** When the filter is clear, he will be filtered only by selected items. Be careful when using two or more category filters!
- **Exclude terms ids.**Here you may exclude category terms from filter by ids. Example input: 1,2,3
- **Show search**. Show search display the bar for searching by category name in the filter![Category](https://i.gyazo.com/5348b8b12f6a5a6563268af5e55893bf.gif)
- **Hide child.**Hide child taxonomy.
- **Always display all categories.** If checked, the entire list of categories will always be visible, otherwise only available for filtered items.
- **Layout.**Select a vertical or horizontal layout and set the count of columns.
- **Maximum height in frontend.**Set maximum displayed height in frontend.
- If you have several filters based on different taxonomies on your pages, you have an option to set the logic between them. To do so, go to the **Options >> Content** and scroll down to the **Multiblock Taxonomy Logic** dropdown. The available options are OR and AND. ![Taxonomy](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_taxonomy_logic-1.png)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Price Range Filter

**Source:** [https://woobewoo.com/documentation/price-range-filter-2/](https://woobewoo.com/documentation/price-range-filter-2/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) has a unique set of options and a variety of filters.

Each filter criterion is customizable, giving you maximum control over what your customers are filtering and the results that they see.

This tutorial will help you learn more about the Price Range Filter  .

## Price Range Filter Settings

To add a filter, select **price range** in the drop-down list and click Add

![Price](https://woobewoo.com/wp-content/uploads/2020/07/Price-Range.png)

After you have added a filter, you can fully configure its options:

![Price](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_price_range.png)

**1. Title.**

Here you can enter your **Title** **Lable**text, by default Price

**2. Description**.

If you wish, you can enter the filter **Description** text (optional)

**3. Show title label.**

Here you can choose how to show the title with the function of opening / closing the filter:

desktop (No; Yes, show as close; Yes show as opened)

mobile (No; Yes, show as close; Yes show as opened)

![options](https://woobewoo.com/wp-content/uploads/2020/07/desktop.gif)

### 4. Show on frontend as.

Depending on whether you need one or several categories to be available at the same time, you may show your categories list as checkbox or dropdown.

![Show](https://woobewoo.com/wp-content/uploads/2020/07/show-as.gif)

### 5. Set range automatically.

If this option is enabled, you may set the price range settings automatically.

**Price range step.**Here you may set the value of prise increase step. The default value is set to 20. All the steps are equal. When setting the step, please note that the number of elements in the list should not exceed 100, otherwise the step setting will be reset and automatically calculated.

![Set](https://woobewoo.com/wp-content/uploads/2020/07/step.png)

### 6. Set range manually.

If this option is enabled, you may press the Setup button and customize your price range settings. You may increase or decrease the number of steps and set different values for each step.

### 7. Use Under/Over values.

Use Under/Over label instead of minimum and maximum values.

![price](https://woobewoo.com/wp-content/uploads/2020/07/under-over.png)

### 8. Show price input fields.

Add fields for manually entering a price range.

![Show](https://woobewoo.com/wp-content/uploads/2020/07/input-field.png)

### 9. Use custom number of decimals.

This sets the number of decimal points shown in displayed prices.

![Price](https://woobewoo.com/wp-content/uploads/2020/07/decimals.gif)

### 10. Set tax rates.

The values will be changed by the specified percentage.

### 11. Layout.

Select a vertical or horizontal layout and set the count of columns.

![Range](https://woobewoo.com/wp-content/uploads/2020/07/layout.png)

### 12.Maximum height in frontend.

****Set maximum displayed height in frontend.(px)

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Price Filter

**Source:** [https://woobewoo.com/documentation/price-product-filter/](https://woobewoo.com/documentation/price-product-filter/)

**WooCommerce Product Filter** has a unique set of options and a variety of filters. Each filter criterion is customizable, giving you maximum control over what your customers are filtering and the results that they see. This tutorial will help you learn more about the filter by product price.

## Add Price Filter

To add a filter, select price in the drop-down list and click Add

![price](https://woobewoo.com/wp-content/uploads/2020/07/Filter-1.png)

After you have added a filter, you can fully configure its options:

![Options](https://woobewoo.com/wp-content/uploads/2020/07/Filter-Settings.png)

## Show Title and Description

### Title and Description.

- Here you can enter your **Title** Lable text, by default Price
- If you wish, you can enter the filter **Description** text (optional)

![Title](https://woobewoo.com/wp-content/uploads/2020/07/Title.png)

### Show title label.

Here you can choose how to show the title with the function of opening / closing the filter:

- **desktop** (No; Yes, show as close; Yes show as opened)
- **mobile** (No; Yes, show as close; Yes show as opened)

## Filter Skin Settings

### Filter skin.

Here you may select the price filter skin.The following price filter skins are available to you:

![Filter](https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_440/https://wpwhale.com/wbwlive/wp-content/uploads/2018/06/filter-price-skins-1-440x1024.png)

### Filter skin settings.

You can improve the look of your filter by choosing the following settings:

- **Color** . Improve the look of your filter by choosing any skin color
- **Show min and max labels.**

![skin](https://woobewoo.com/wp-content/uploads/2020/07/min-and-max.png)

- **Show from and to labels.**

![woocommerce](https://woobewoo.com/wp-content/uploads/2020/07/Filter-from-and.png)

- **Step** . Here you may set the value of prise increase step
- **Show grid**. Turn it on if you want to display the filter grid.

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/WooCommerce-Product-Filter1.gif)

## Input Fields Settings

To configure the Input Fields settings, select the **Show price input fields** check box and begin the configuration.

- **Symbol position**. Choose where the symbol (code)  will be displayed (before or after).
- **Show currency as Symbol** . Choose how the currency will be displayed: as a symbol or as a code

![Input](https://woobewoo.com/wp-content/uploads/2020/07/Position.gif)

- **Show currency in slider.** Enable this option to showcase the currency near the amount in the slider.
- **Set min/max prices**. By default the filter takes the data based on the prices of the products, however, you can manually change it. Please note that the option doesn\’t work with the recount prices option!
- **Set tax rates.** The values will be changed by the specified percentage.![Min/max](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_min_max_price.png)

- **Use text tooltip instead of input fields.** If you selected the default skin, then you can use the text tooltip instead of the input fields

![Product](https://woobewoo.com/wp-content/uploads/2020/07/Field.png)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or**Contact us** and we will be happy to help you

---

## Filter Titles Design

**Source:** [https://woobewoo.com/documentation/filter-title-design/](https://woobewoo.com/documentation/filter-title-design/)

With **WooCommerce Product Filter**, you can style every item and parameter in your product filter. In the filter settings, you can see the design tab where you can improve the style of your filter. This menu is logically divided into 4 tabs for ease of use. This tutorial will help you improve the custom design of your product filter Titles without any programming knowledge.

## Titles Design

First, go to Design-> Titles  and select Use Custom Styles .Choose your custom styles for filter Titles. Any settings you leave blank will default.

![Titles](https://woobewoo.com/wp-content/uploads/2020/07/Titles.gif)

## Customizing Title Design

Here you can select and configure the following parameters:

- ### Font.

You can choose the font, font size, style and color for the Titles of your filter.

![Customizing](https://woobewoo.com/wp-content/uploads/2020/07/Font-Litles.gif)

- ### Background.

You can choose a background color for your filter Titles, leave it blank and the default setting will be applied.

- ### Borders.

Set the border color and style for your filter.

- ### Borders size.

Here you can set borders width in this order: top, right, bottom, left.

![Title](https://woobewoo.com/wp-content/uploads/2020/07/Size.gif)

- ### Padding.

Here you can set paddings in this order: top, right, bottom, left.

- ### Margin.

Here you can margins in this order: top, right, bottom, left.

![Title](https://woobewoo.com/wp-content/uploads/2020/07/Borders.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Buttons Design

**Source:** [https://woobewoo.com/documentation/buttons-design/](https://woobewoo.com/documentation/buttons-design/)

With **WooCommerce Product Filter**, you can style every item and parameter in your product filter. In the filter settings, you can see the design tab where you can improve the style of your filter. This menu is logically divided into 4 tabs for ease of use. This tutorial will help you improve the custom design of your product filter Buttons without any programming knowledge.

## Buttons Design

First, go to Design-> Buttons and select Use Custom Styles .Choose your custom styles for filter buttons. Any settings you leave blank will default.

![Buttons](https://woobewoo.com/wp-content/uploads/2020/07/Buttons.gif)

## Customizing Buttons Design

Here you can select and configure the following parameters:

- ### Block align

Here you can set the block alignment with the product filter buttons, set the value to the left,center or right.

- ### Font

You can choose the font, font size, style and color for the buttons of your filter.

Also you can set the design by hovering over the button.

![Buttons](https://woobewoo.com/wp-content/uploads/2020/07/Buttons-font.gif)

- ### Text shadow

Set text shadow in this order: color, X, Y, blur.

![Text](https://woobewoo.com/wp-content/uploads/2020/07/Shadow.gif)

- ### Button width

Here you can set the maximum width of your product filter buttons in percent or pixels

- ### Button height

Here you can set the maximum height of your product filter buttons in pixels

- ### Corners radius

Here you can set the rounding level of the buttons

![Buttons](https://woobewoo.com/wp-content/uploads/2020/07/Width.png)

- ### Background

You can choose a background color for your filter Buttons, leave it blank and the default setting will be applied.

![Background](https://woobewoo.com/wp-content/uploads/2020/07/design.png)

- ### Borders

Set the border color and style for your filter Buttons.

![Borders](https://woobewoo.com/wp-content/uploads/2020/07/Desdign-borders.png)

- ### Button shadow

Here you can set button shadow in this order: color, X, Y, blur, spread (px).

![Button](https://woobewoo.com/wp-content/uploads/2020/07/Shadow.png)

- ### Padding

Here you can set paddings in this order: top, right, bottom, left.

- ### Margin

Here you can margins in this order: top, right, bottom, left.

Read**this tutorial** to learn how to improve options your product filter buttons .

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## General Filter Design

**Source:** [https://woobewoo.com/documentation/general-design-tab/](https://woobewoo.com/documentation/general-design-tab/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) has very flexible Design settings that you can easily customize to suit the style and functionality of your store. For ease of use, the “Design” settings tab is logically divided into 4 tabs. This tutorial will help you understand the options on the General tab.

## Filter Width

Here you can set the filter width in pixels or percentage. By default, the width is 100% new; you can change it if you wish in % or pixels.

![General](https://woobewoo.com/wp-content/uploads/2020/07/Width-1.png)

This parameter sets the maximum width of the Filter.But the rest of the contents of the Filter also affects its width – check how it looks in preview mode.

## Filter Block Width

Here you can set the filter block width in pixels or percentage. By default, the width is 100% new; you can change it if you wish in % or pixels.

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Width-block.png)

This parameter sets the maximum width of the Block Filter.But the rest of the contents of the  Block Filter also affects its width – check how it looks in preview mode.

## Filter Block Height

Here you can set the height in pixels. If not filled, then the height is calculated automatically based on the content of the filter. Please note that if the value of the Maximum height in frontend of the filter is greater than the specified value, some data may be hidden

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Heigth.png)

## CSS editor

CSS editor is a tool for simple editing of CSS code. Read this article to find out [How to Configure CSS for Product Filter](https://woobewoo.com/documentation/how-to-configure-css/)?

![CSS](https://woobewoo.com/wp-content/uploads/2020/07/Css.png)

## JS editor

JavaScript Editor – write and run your javascript code online, see result in live view or in editor console

![JS](https://woobewoo.com/wp-content/uploads/2020/07/js.png)

## Use theme styles

Disable the use of custom plugin styles for filter elements. This option does not work in admin preview.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Filter Block Design

**Source:** [https://woobewoo.com/documentation/filter-block-design/](https://woobewoo.com/documentation/filter-block-design/)

With WooCommerce Product Filter, you can style every item and parameter in your product filter. In the filter settings, you can see the design tab where you can improve the style of your filter. This menu is logically divided into 4 tabs for ease of use. This tutorial will help you improve the custom design of your product filter blocks without any programming knowledge.

## Blocks Design

First, go to Design-> Blocks and select Use Custom Styles .Choose your custom styles for filter blocks. Any settings you leave blank will default.

![Blocks](https://woobewoo.com/wp-content/uploads/2020/07/Blocks-Design.gif)

## Customizing Design Blocks

Here you can select and configure the following parameters:

- ### Font.

You can choose the font, font size, style and color for the blocks of your filter.

![Style](https://woobewoo.com/wp-content/uploads/2020/07/Font-Design.gif)

- ### Background.

You can choose a background color for your filter blocks, leave it blank and the default setting will be applied.

- ### Borders.

Set the border color and style for your filter.

![Blocks](https://woobewoo.com/wp-content/uploads/2020/07/Borders-Design.gif)

- ### Borders size.

Here you can set borders width in this order: top, right, bottom, left.

- ### Padding.

Here you can set paddings in this order: top, right, bottom, left.

- ### Margin.

Here you can margins in this order: top, right, bottom, left.

![Blocks](https://woobewoo.com/wp-content/uploads/2020/07/BORDERS-SIZE.png)

- ### Checkboxes

Here you can styles for checkboxes:

- **Select the type of checkboxes (circle;square;square rounded corners)**
- **Size in pixels**
- **Color: checked and unchecked checkbox**

![Blocks](https://woobewoo.com/wp-content/uploads/2020/07/cHECKBOX-1.gif)

From the**Open / Close**icon categories dropdown, you can select the close selection icon. It can be plus/minus, chevron or angle double.

You can resize the icon for collapsing/expanding categories in the**Size icon categories**numeric filed.

Toggle the**Bold icon categories**option if you want to make category icons bold.

In the**List line height**option, you can adjust the line height.

![Icons](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_icons.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Content Options

**Source:** [https://woobewoo.com/documentation/content-options/](https://woobewoo.com/documentation/content-options/)

---

In the WooCommerce Product Filter, after filtering, you will see which products are suitable for your filtering settings. This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge. Thanks to the wide functionality of our plugin, you can fully customize how the content of your filter will be displayed.

This tutorial will help you understand how to use and configure content options. This is a very important aspect of setting up an effective product filter for your store. To configure the content of the filter, go to the options menu on the content tab.

## Content tab

![Content](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_content_tab.png)

Here you can configure the following options:

### Always Filtering By All Products

This option allows searching throughout the entire website among all shop products on any shop pages.

### Show Clear block

If this option is enabled, the **“< clear”**links appear on the page next to the filter block titles. The presets of this filter block will be deleted after clicking on the link. The default name for this button is “Clear.” But you can easily change this in the corresponding text field.

![Options](https://woobewoo.com/wp-content/uploads/2020/06/Example-clear-block.png)

### Recount Products By Selected Filter

Turn it on to automatically recount product by selected filters (If the product category is loading slowly – Disable this function).
![Content](https://woobewoo.com/wp-content/uploads/2020/06/example.gif)
### Recount min/max price by selected filter

Automatically change min/max price by selected filters (If product category loading slowly – Disable this function).
### Show parameters without products as disabled

Automatically disabled parameters without products. Works only when options Show count and Always display all… are enabled. For example, if there are no products assigned to the red attribute on the page, such filter parameter will be missed.
### Sort by title after filtering
After enabling this option, all products after filtering will be sorted by title.
### Checked items to the top

Let the checked terms will be on the top
![Options](https://woobewoo.com/wp-content/uploads/2020/07/top.gif)

### Checked Items In Bold
Toggle the option so that the checked item becomes bold.

![Bold](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_bold_checked.gif)
### Set no products found text
Here you can enter the text that your users will see if, according to the parameters they set for the product filter is not found.(input “no products found” text for category)

### Filtering By Variations Attributes

After filtration will be display products with variations that have filtered attributes.

### Exclude variations on backorder

If the option Hide out of stock items from the catalog is enabled, out-of-stock products will not be filtered. If this option is also enabled, on-backorder products will also be excluded.

![product](https://woobewoo.com/wp-content/uploads/2020/07/FilterbyVariations.png)

### Display Variations Instead Of Variable Product
After filtration by attributes will be displayed product variation instead of a main variable product.
### Display “Show more”

For long vertical lists, “Show more” will be displayed. This is a very convenient option if the filter contains a lot of elements. If you use a vertical list of displaying table elements, you can enable the Show more option.
Now if there are too many filter elements, some of them will be hidden. To open them, click Show more.
![product](https://woobewoo.com/wp-content/uploads/2020/07/Show-More.gif)
Turn on **full opening** so that the list opens completely.
**Show more** – the list will open completely.
**Show fever** –  to hide the full list.
### Display selected parameters of filters

Selected parameters will be displayed at the top/bottom of the filter.
![product](https://woobewoo.com/wp-content/uploads/2020/07/display_selected_parameters_of_filters.png)
Here you can enable:
- Select the display position of the selected parameters.
- **Clear all**. Click to delete selected parameters.
- **Display child** **categories**. Display both child and parent categories

![Content](https://woobewoo.com/wp-content/uploads/2020/07/Display-selected.gif)

### Autoscroll to products after filtering

This section is needed if you want a product block to be scrolled after filtration. Here you may set the animation speed. And set the retreating from products block (in px).

![Autoscroll](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_autoscroll.png)

### If one filter block is open, other blocks are closed

When you click on the block open icon, all other open blocks will be automatically closed.

### Show category slugs in URL instead of IDs

Turn on only when necessary. Please note that slug should only contain lowercase Latin letters, numbers, and hyphens.

### Hide filter by title click

![Content](https://woobewoo.com/wp-content/uploads/2020/07/Title-click.gif)
### Use filter titles as slugs for the filter clear buttons

Use this option if you want the title of the filter to serve as the clear button. For example, you filter by some parameter and you want to remove the filtering, so if the option is enabled, then clicking on the filter title will work as a clear button.

### Filtering Of Categories List

Filtering of categories list on filter process.

### Apply Parameters From The Address Bar To Display Filter Items

It comes in handy if you want to have a link to the filtered results.

Please pay attention that this option can greatly slow down page loading if you have a lot of products.

### Multiblock Taxonomy Logic

Filter products by different filter blocks of categories/tags/attributes by logic and/or.

![Taxonomy](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_taxonomy_logic.png)

### Enable third-party prefilter

The option allows third-party plugins that do not use WooCommerce shortcodes to filter products (e.g. it is required to work Product Grid Widget with categories preselection from Essential Addons for Elementor).
As you can see with the WooCommerce Product Filter, you can display and customize the order of products after filtering, based on your preferences and your customers.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Loader Options

**Source:** [https://woobewoo.com/documentation/loader-options/](https://woobewoo.com/documentation/loader-options/)

## What are loading indicators for?

Loader icon is a loading indicator that helps the user understand the loading position at any given time, especially when the system is working on a task.Users want to have control over the system they use.

The progress indicator of the task is one of the most popular forms of providing system status for the user.

Immediate response is undoubtedly the best option for any application, but situations where it is not feasible are often possible. (Slow operation of the system may be due to a weak Internet connection, or the operation itself can be complex and take a long time.)

In such cases, in order to reduce user stress, you must confirm to the user that the system is busy working on his task and that there is real progress.

This is a kind of simple but very necessary thing.

![loading](https://woobewoo.com/wp-content/uploads/2020/07/Loaders.gif)

**WooCommerce Product Filter** has very flexible settings that you can easily customize to the style and functionality of your store.The **Options** tab is logically divided into 4 tabs, for ease of use. This tutorial will help you understand the options on the **Loader** tab.

![Loader](https://woobewoo.com/wp-content/uploads/2020/07/Loader-tabs.png)

## Enable filter icon on load

Enable filter icon while filtering results are loading.

Click on the arrow to apply the loader to all filters.

![filter](https://woobewoo.com/wp-content/uploads/2020/07/Loader-tab.png)

## Filter Loader Icon

Here you may select the animated loader, which appears when filtering results are loading.

You can select the Loader icon from the list or add a custom one:

- Just click on **Choose Icon** and select any loader you like from the list.
- Or you can add your custom icon by clicking on **Select Icon**
- **Filter Loader Color.**Here you may select the color of filter loader animation.You can choose any color from the color palette. Assign color tone and transparency

![Loader](https://woobewoo.com/wp-content/uploads/2020/07/Loaders-1.gif)

## Enable overlay

Overlay in WooCommerce Product Filter is a stylish custom transition between the beginning and the result of filtering.

Overlays as well as the loader will help smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

You can add this to your filter and fully customize and improve.

To **Enable Overlay** option, move to the Loader Tab . Here you can enable the overlay, choose whether to show the loader icon, set the background,loader icon and loader word.

![Enable](https://woobewoo.com/wp-content/uploads/2020/07/Overlay.gif)Give your store the most unusual and effective interface with [WooBeWoo](https://woobewoo.com/)

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## Button Options

**Source:** [https://woobewoo.com/documentation/button-options/](https://woobewoo.com/documentation/button-options/)

**WooCommerce Product Filter** has very flexible settings that you can easily customize to the style and functionality of your store.The **Options** tab is logically divided into 4 tabs, for ease of use. This tutorial will help you understand the options on the **Buttons** tab.

![Options](https://woobewoo.com/wp-content/uploads/2020/07/buttons-tab.png)

### Filter activation type

- If the “**Filtering button**” option was selected, the “Filter” button appears on the page. It allows users to set all necessary filter parameters before starting the filtering. You can also change the name of the button to any text.
- **Automatically Update The Filter.** When you select one filter element, the rest of the elements will be updated based on it.

![“Filtering](https://i.gyazo.com/6e6d13a158817e60425464db016dd296.gif)
- If “**Auto filtering**” option was selected, filtering starts as soon as filter elements change and the data reloads automatically.

![Ajax](https://i.gyazo.com/a423f126fb53e28127054d14ead47e2f.gif)
### Show Clear All Button

If this option is enabled, the “Clear” button appears at the page. All filter presets will be removed after pressing the button. You can also change the name of the button to any text. Besides, you can enable the **Reset All Filters On Page** option.
![Clear](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_clear.gif)
### Select Filter Buttons Position and Order

- **Select Filter Buttons Position.** Here you may select the position of filter buttons on the page: Top;Bottom;Both.
- **Select Filter Buttons Order.** Here you may change the order of filter buttons on the page.
### 

### Display Hide Filters button

By default, the button is not displayed.

Choose how the button will be displayed on Desktop and mobile:
- No.
- Yes, show as close
- Yes, show as opened.

You can also change the name of the button to any text.

![Show/Hide](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_show_hide_button.gif)

### Floating button

If you set either to **Yes, show as close** or **Yes, show as opened** for mobile devices, you’ll get an opportunity to use the **Floating button**.

Please note that you need to set the mobile breakpoint in the **Option >> Main >> Set Mobile/Desktop Breakpoint.**

When you turn on the floating button, you need to configure its parameters.

![Floating](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_floating_button.png)

Read **this tutorial** to learn how to improve your product filter  buttons design.
As you can see, our plugin offers you a very functional filter with a convenient and simple interface.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Main Options

**Source:** [https://woobewoo.com/documentation/options-main-tab/](https://woobewoo.com/documentation/options-main-tab/)

**WooCommerce Product Filter** has very flexible settings that you can easily customize to the style and functionality of your store. The **Options** tab is logically divided into 4 tabs, for ease of use. This tutorial will help you understand the options on the **Main** tab.
![Options](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_options.png)
### Display on pages
Choose on which pages you want to display the product filter. By default, the filter is displayed on All Woocommerce pages.

To change this option, move to the Options tab and find the Display only on page option. Select an option from the drop-down list.

You can display the filter on:

![Display](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_dispay_on.png)

- **-Shop;**
- **-Product category;**
- **-Product tag;**
- **-All Pages;**
- **-Shop+category+tag;**
- **-Specific**(cart, blog or any specific page you created).
### Display On Pages Apply For Shortcode

By default, the filter added by the shortcode is displayed everywhere. This option allows you to restrict the display to only those selected in Display on pages.

### Redirect after filter selection

You can select one of the pages to redirect to after selecting a filter. By default, the redirection is made after selecting one of the filtering results. You can toggle the Redirect only if click the button option so that the user will be redirected only after clicking the filter button.

### Open Filters One By One

If you want to show the next filter automatically when a selection is made in the current filter.

![One-by-one](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_one_by_one.gif)

### Display Filter On(devices)

Sometimes it’s not very convenient to use a product filter on mobile devices, and with this option, you can control it. Choose on which devices the filter will be displayed. (only for mobile; only for desktop; for all devices).

### Force Show Only Current Filter On Page

If you have several filters on the page, you can turn on this option thus removing other woofilters except for the current one.

### Set mobile/desktop breakpoint

Set a breakpoint for all options that depend on a mobile/desktop view. “Show title label”, “Display filter on” etc.
![Main](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_main_settings.png)
### Hide filter on shop pages without products

Hide filter on shop and categories pages that display only categories or subcategories without products.

### Set number of displayed products

Set number of displayed products. This number will only be shown after the filter is applied! You must set the same number as in the basic store settings or in the basic filter **settings**. When the page is first loaded, the store displays the number of goods set in its settings.
If you set a number here, then after any filtering the number of products indicated here will be displayed. You can enable this option in the Options >> Main tab. Enter the desired quantity in the **Set number of displayed products** field.
### Set number of products per row

Set the number of products per row. Please note that this number will only be shown after the filter is applied!

### Enable Ajax

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) comes with a Filter button by default (filtering occurs after you select the filter elements and click the Filter button). But thanks to the wide functionality of our plugin, you can display the results at the same time as you click on the filter element. This option enables Ajax search. Product filtering and displaying results in a browser will be run in the background without a full page reload.

![AJAX](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_ajax.png)

AJAX Loading Results: Users can see filtered results in real-time:

![Ajax](https://i.gyazo.com/a423f126fb53e28127054d14ead47e2f.gif)

When you enable the ajax functionality, you\’ll get a few more options for customization.

### Remove Actions Before Filtering

Enable this option when ajax filtering does not work as expected. For example, sorting does not work. Removes filters such as posts_orderby and pre_get_posts.

### Display Products With The Status Private

Toggle this option so that products with the private status will be displayed after filtration is applied.
![Private](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_private.gif)

### Product List / Loader Selector

Custom selector for loading a loader and updating the product list. The default product selector is `ul.products`. If the Filter after ajax filtering does not find the product block and cannot replace it with the filtered list of products, the page will reload. In this case, you need to specify the product block selector in this setting.

### Product Container Selector

If there are several product shortcodes on the page, you can add a container selector that will limit the effect of this filter only inside it.

### Force Theme Templates

If after ajax filtering there are differences in the styles of the list of products, pagination, or count-block, then enable this option. Important: for correct operation, we recommend filling the Product container selector option. When you enable the force theme template option, you can also toggle the Recalculate Filters option.

### Don\’t Use Shortcode Settings

If you do not want to use shortcut settings on standard WooCommers pages, turn on this option.
As you can see with the WooCommerce Product Filter, you can display and customize the order of products after filtering, based on your preferences and your customers.
Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Media in the Product Table

**Source:** [https://woobewoo.com/documentation/media-in-the-product-table/](https://woobewoo.com/documentation/media-in-the-product-table/)

**WooCommerce Product Table** plugin is very popular for displaying embedded audio and video files, as well as other multimedia content such as multimedia playlists or image galleries. For example, you might want to include an MP3 music player or embedded YouTube / Vimeo videos directly in a spreadsheet so people can watch and listen without having to go to another page.

### Create Media Products

- Before you start, let’s suggest that you have already installed a ready to go WordPress website with the**WooCommerce plugin**and **Woocommerce Product Table.**
- In order to**add a new WooCommerce product**, switch to Products> Add New section (Products > Add New) from the control panel.

![Create](https://woobewoo.com/wp-content/uploads/2020/07/add-new.png)

- Considering the fact that the main goal is to sell music on the Internet, the first thing you have to do is to tick a box at the top of the window. It will mean that the product is virtual and it will be downloadable. This step will change the parameters that will be displayed during the sale: the things for sale are online music files, not physical products.

![Create](https://woobewoo.com/wp-content/uploads/2020/07/virtual.png)

- Then you have to specify the price for the product and upload the file (s) that customers will get when they purchase in the Downloadable files section. Besides, you can set a limit on how many times files can be downloaded and adjust all the product parameters.
- Click Add Media in the short description field. Download the audio file from your computer, fill it out and make sure that you select the Embed Media Player option in the Embed or link window.

![Product](https://woobewoo.com/wp-content/uploads/2020/07/Add-media.png)

- If you want to add a video via the YouTube link, just insert the link in the short description field.
- After you have finished the adjustment of your first product, click the Publish button. Then repeat this process in order to add all the songs, albums, etc. that you are going to sell.

![create](https://woobewoo.com/wp-content/uploads/2020/06/Music.gif)

### Create Media Table

Once you have created multimedia products, it\’s time to add them to your spreadsheet:

You can read how to create a table in [this tutorial.](https://woobewoo.com/documentation/create-your-first-product-table/)

1) Add the products you need to the table

2) Add all the columns you need, and most importantly, the column Short Description because it will be where your media will be located.

3) On the short description column, click on the pencil to go to its settings.

![Media](https://woobewoo.com/wp-content/uploads/2020/07/do-shortcodes.png)

4) Choose Do shortcodes? This will turn on the media player in this column.

**Tip**

-Set the width, columns, so that everything would look stylish and nothing would interfere.

-Change the title of the column to something like Music, Video or Song

-Take the design of the Buy button, and change the text for example to Download

[wtbp-table-press id=63]

In fact, it’s you who has all the rights in order to decide how exactly you want to realize your creative capacity. **Product Table** will help you do this in a user-friendly and profitable way.

Sell ​​your multimedia, or help other talented guys and remember that WooBewoo will make it truly classy and effective.

---

## Sort by

**Source:** [https://woobewoo.com/documentation/sort-by-3/](https://woobewoo.com/documentation/sort-by-3/)

Create and customize filters for your online store using the free [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) WordPress plugin.

This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

With the help of our plugin, your customers can filter your products by any criteria .

Each filter criteria**customizable**, giving you maximum control over what your customers are filtering and the results they see.

This tutorial will help you customize the Sort byfilter elements .

## Sort by Add Filter

Thanks to this filter, your users can choose in which order the products will be sorted after filtering.

To add a filter, select Sort by in the drop-down list and click Add

![Sort](https://woobewoo.com/wp-content/uploads/2020/07/add-sort-by.png)

Once you have added this filter, you can fully configure it:

## Sort by Filter Settings

- Here you can enter your **Title** **Lable**text, by default Price
- If you wish, you can enter the filter **Description** text (optional)
- **Show title labe**l. Here you can choose how to show the title with the function of opening/closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Sort options**. Here you may select the sorting options available for your site users (min two options). There is also an opportunity to sort by title from A to Z or Z to A.
- **Show on frontend as.** Here you may select how to showcase on the live pages.
- **In stock always show first.**Sort products by stock status first then by the selected criterion.
- **Use as default.** Here you may select the default parameters for sorting.
- **Hide filter.** Toggle the option to hide the sorting filter.

![Sort](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_sort_by.gif)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Translation of WooCommerce Product Table into other languages

**Source:** [https://woobewoo.com/documentation/translation-of-woocommerce-product-table-into-other-languages/](https://woobewoo.com/documentation/translation-of-woocommerce-product-table-into-other-languages/)

Do you want to translate the WooCommerce Product Table plugin into your language?  In this article, we will show you how to easily translate the WooCommerce Product Table plugin into your language (without knowing any code).Use Loco Translate plugin or you can translate the plugin in your WordPress admin area and your translations will take effect immediately on your website.

## Compatible with Loco Translate plugin

Our plugin is fully compatible with the Loco Translate plugin, which will help you translate the plugin.

The first thing you need to do is install and activate the Loco Translate plugin.

After activation, you need to visit the Loco Translate »Plugins page to start translating your plugins.

**Translating WooCommerce Product Table with Loco Translate.**

You will see a list of all the plugins currently installed on your site. You need to click on the WooCommerce Product Table.

On the next screen, you will see a list of languages ​​available for the plugin, as well as the status of the translation for each language.

**Choosing a language in Loco Translate.**

If there is indicated the language into which you want to translate, then you need to click on it. Otherwise, you can click on the New Language button at the top.

![Translating](https://woobewoo.com/wp-content/uploads/2020/06/New-language.png)

**Adding a new language to Loco Translate.**

On the new language page, first, you need to choose your language. You have two options available. The first , simple user interface withthe source. This option will automatically start using this language file if the user sets the WordPress admin area in that language. The second option is to use a custom language.

Next, you need to choose where you want to store the translation files. By default, Loco Translate will recommend saving the translation file in its own folder. You can change this to save translation files in WordPress languages ​​or the plugin’s own languages ​​folder.

After you have configured your settings, click on the start translation button to continue.

Translation of the plugin is very simple. You will see the source text and below it you will see the translation field.

Just enter your translation for the source line, and then select the next line for translation.

Remember to click on the SAVE button to save your progress.

## Helping Translate a WooCommerce Product Table in Your Language

This method is simpler and highly recommended because it not only helps you use the plugin in your language, but also helps other users to automatically use the plugin in their language.

When you visit the plugin page, you will see a notification asking for help in translating the plugin into your language.

![Translation](https://woobewoo.com/wp-content/uploads/2020/06/translating-wordpress.png)

If you do not see this notification, then you can also search for WordPress Website Translation for the plugin.

You will be asked to choose your language, and then you can start contributing.

On the translation screen, you will see a simple user interface with source text and text area to provide translation for specific words.

## Contribution of your translation to the plugin

If you are creating a translation for a language that is currently not supported, we would like to add it to the plugin!

Please **contact us** and attach your files so that we can add them in a future release.

---

## Translate Plugin and Get Pro version for Free

**Source:** [https://woobewoo.com/documentation/translate-plugin-and-get-pro-version-for-free/](https://woobewoo.com/documentation/translate-plugin-and-get-pro-version-for-free/)

Currently, the**WooCommerce Product Table** comes with a full translation for: English and Dutch. If your language is not listed above, you can translate the plugin yourself.

If you are creating a translation for a language that is currently not supported, we would like to add it to the plugin!

In this article, we will show you how easy it is to translate a WordPress plugin into your language (without knowing any code).

Note: If you are interested in translating any of our plugins, such as Product Tablets or Product Filter, **we will be happy to offer you a free license of our Pro version in exchange.** Just contact us through our contact form to get started.

## How to translate the plugin into your language?

This method is simpler and highly recommended because it not only helps you use the plugin in your language, but also helps other users to automatically use the plugin in their language.

When you visit the plugin page, you will see a notification asking for help in translating the plugin into your language.

On the translation screen, you will see a simple user interface with source text and text area to provide translation for specific words.

![Help](https://woobewoo.com/wp-content/uploads/2020/06/Translate-Plugin.png)

You will be asked to choose your language, and then you can start contributing.

![Help](https://woobewoo.com/wp-content/uploads/2020/06/Translate.png)

On the translation screen, you will see a simple user interface with source text and text area to provide translation for specific words.

Also read **this tutorial**on translating WordPress plugins.

## Compatible with Loco Translate plugin

Our plugin is fully compatible with the Loco Translate plugin, which will help you translate the plugin.

The first thing you need to do is install and activate the Loco Translate plugin.

After activation, you need to visit the Loco Translate »Plugins page to start translating your plugins.

**Translating WooCommerce Product Table with Loco Translate.**

Read this**detailed guide**to learn more.

## Contribution of your translation to the plugin

If you are creating a translation for a language that is currently not supported, we would like to add it to the plugin and we will be happy to offer you a free license of our Pro version

Please **contact us** and attach your files so that we can add them in a future release.

---

## How can I change / delete the title of columns in a table?

**Source:** [https://woobewoo.com/documentation/how-can-i-change-delete-the-title-of-columns-in-a-table/](https://woobewoo.com/documentation/how-can-i-change-delete-the-title-of-columns-in-a-table/)

Our **WooCommerce Product Table** has custom column headers. You can also hide or delete any column headings and leave them blank.

You can check out the available columns in **this article**.

If you do not install it, the default title will be used. You can add your titles for any column in the table, or leave them blank.

To set the column title, click on the “pencil” in the column tab

![How](https://woobewoo.com/wp-content/uploads/2020/06/1-1.gif)

If you want to completely remove the column heading, leave the field blank.

You can do this with any number of columns.

![change](https://woobewoo.com/wp-content/uploads/2020/06/table-content.png)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Can you customize the plugin for me?

**Source:** [https://woobewoo.com/documentation/can-you-customize-the-plugin-for-me/](https://woobewoo.com/documentation/can-you-customize-the-plugin-for-me/)

The **WooCommerce Product Table**experts are constantly working on improving our plugin. We provide any help for customizing the Product Table and our **other plugins**.

Our standard plugin support extends to help you use the plugin as you intended. If you are interested in customizing it according to your specific requirements, we recommend that you **contact us.**

We also advise you to study our tutorials with detailed [documentation.](https://woobewoo.com/docs/woocommerce-product-tables/)

![customize](https://woobewoo.com/wp-content/uploads/2020/06/Contact-Us-1-2.png)

---

## Can I add custom columns to the product table?

**Source:** [https://woobewoo.com/documentation/can-i-add-custom-columns-to-the-product-table/](https://woobewoo.com/documentation/can-i-add-custom-columns-to-the-product-table/)

Yes! The WooCommerce product table supports many different column types.

## Custom field and taxonomy columns

You can add a custom column to store additional data by **creating a custom field** and displaying it in the product table.

![](https://i.gyazo.com/625bc426b6aef6b009cc7a42887bf03e.png)

If you want to sort or filter the table by additional data, you should use **custom taxonomies** instead.

example photo

![](https://i.gyazo.com/e58c4dbe7726bafdf255d4dced584557.png)

---

## Woo Product Table compatible with Page Builder Plugins?

**Source:** [https://woobewoo.com/documentation/woo-product-table-compatible-with-page-builder-plugins/](https://woobewoo.com/documentation/woo-product-table-compatible-with-page-builder-plugins/)

Yes! WooCommerce Product Table is designed to work with any plug-in for page builder.

To add a table to the page that you developed using the page builder plugin, you must add the Shortcode of your Product Table to the page.(Or any other our plugin)

Example(Elementor page builder):

![Woo](https://woobewoo.com/wp-content/uploads/2020/06/7.gif)

After adding the shortcode, the product table is displayed on the page

![width=759](https://woobewoo.com/wp-content/uploads/2020/06/Example.png)

---

## How to Fix Header in the Table?

**Source:** [https://woobewoo.com/documentation/how-to-fix-header-in-the-tablefaq-ptables/](https://woobewoo.com/documentation/how-to-fix-header-in-the-tablefaq-ptables/)

The [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) plugin is even more convenient with the new Fix option. If your table has too many rows  enable the option Fixed header. It will keep the title visible while you move to another area. Working with such a table is simple and requires no special knowledge.

If a page where the product table is located already has a fixed header, you may use the **Top margin** field to set the margin for a table header.

The same can be done for mobile in the **Top margin (mobile)** field.

![Fixed](https://woobewoo.com/wp-content/uploads/2020/06/product_table_fixed_header.png)

To do this, in the main settings tab, put a checkmark in the fixed header.

Important! To use this feature, the header option must be enabled.

![How](https://woobewoo.com/wp-content/uploads/2020/06/Examole-Fixed-header.gif)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How to make a Product Table from only a certain category?

**Source:** [https://woobewoo.com/documentation/how-to-make-a-product-table-from-only-a-certain-category-faq-ptables/](https://woobewoo.com/documentation/how-to-make-a-product-table-from-only-a-certain-category-faq-ptables/)

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/), due to its wide functionality, can do this in two ways.

## Manually

To manually create a product table from a specific category, open WooCommerce Product Table -> Add New Table-> Select Products to add-> and Select the desired category->

And select the products you need from this category.

![How](https://woobewoo.com/wp-content/uploads/2020/06/Manually.gif)

## Automatically

To automatically create a product table from a specific category, open the WooCommerce product table -> Add a new table-> Add products automatically -> and select the desired category-.

All products in this category will be added to the Product Table.

![How](https://woobewoo.com/wp-content/uploads/2020/06/Auto.gif)

In the same way, you can create a Product Table by a specific tag, attribute, or author.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## How can I add products to the table?

**Source:** [https://woobewoo.com/documentation/how-can-i-add-products-to-the-table/](https://woobewoo.com/documentation/how-can-i-add-products-to-the-table/)

You can easily add products to the table in the *Content tab*in one click. Select all the products at once or sort them by category, display the products which are not in the table or use sorting by SKU, price, date and other parameters. Also, you can searching by keyword is available.![How](https://woobewoo.com/wp-content/uploads/2018/06/add-products.png)

If you have tons of products, it could be a challenge to search the specific products for adding. To simplify the process of adding the products to the table, in the plugin there is an option to search the products by SKU.

Also, you can **add products automatically** by category multiselection – just choose categories from the drop-down list:

![add](https://woobewoo.com/wp-content/uploads/2020/06/Add-Product.png)

Read**this article**to find out more.

---

## How to use attributes in a WooCommerce product table?

**Source:** [https://woobewoo.com/documentation/how-to-use-attributes-in-a-woocommerce-product-table-faq-ptables/](https://woobewoo.com/documentation/how-to-use-attributes-in-a-woocommerce-product-table-faq-ptables/)

Our **WooCommerce Product Table** plugin fully supports product attributes. You can display attributes in a table, sort by attribute, filter by attribute, or even list products with specific attributes. This article describes various ways to use attributes with the WooCommerce product table.

## Global or product-specific attributes?

First, you need to decide how to add your attributes, because WooCommerce provides two ways to do this.

In WooCommerce, you can create attributes globally and then select them for each product; or you can add attributes individually for each product.

As a rule, we recommend adding your attributes globally in the “Products” → “Attributes” section, and then selecting them for each product. This is because global attributes are easier to use to group multiple products, and you can add drop-down filter lists only when using global attributes.

## Attribute Columns

You can list each attribute as a separate column in the product table. For example, you can create one attribute column for an attribute named “color” and another for an attribute named “size”.

## Display products with a specific attribute

You can create a table with a list of products only with a specific attribute value – for example, you can list products with a “red” attribute.

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/), due to its wide functionality, can do this .

****To  create a product table from a specific Attribute, open WooCommerce Product Table -> Add New Table-> Select Products to add-> and Select the desired Attribute->

And select the products you need from this Attribute.

![attributes](https://woobewoo.com/wp-content/uploads/2020/06/5555555555555555.png)

## Attribute filtering

You can also filter by attribute. Read this attribute filter**documentation**.

[wtbp-table-press id=6]

## Attribute Sort

You can [sort](https://woobewoo.com/documentation/sorting-product-table/)the table by attribute – allowing customers to click the attribute column heading to sort by this attribute.

![use](https://woobewoo.com/wp-content/uploads/2020/06/Sort.png)

## Using Attributes as Variations

A product variation consists of one or more attributes that you use to create a variation.

Example:

A product can have two attributes:

- **Color** (with attribute values ​​Green and Black) and
- **Size** (with attribute values ​​Small and Large)

If you create options based on all these attributes, the product will have the following options:

- **Green small**
- **Green large**
- **Black small**
- **Black large**

Once you have used your attributes to create product variables, you can display it.

Read **this documentation**to learn more about it.

---

## Create Your First Product Filter

**Source:** [https://woobewoo.com/documentation/create-your-first-product-filter/](https://woobewoo.com/documentation/create-your-first-product-filter/)

Once you have installed the **WooCommerce Product Filter** plugin and selected the default settings, it\’s time to start creating a product filter.

This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

This tutorial will help you get started with the Plugin and create your first product filter.

## Add New Filter

![Add](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_add_new.png)

## 

After clicking on “Add New Filter”, a window will appear for entering the **name** of your new filter.![Enter](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_enter_filter_name.png)

After entering the name, click save, and start creating your filter.

## Create Product Filter

With WooCommerce Product Filter you can Filter by price, categories, tags and attributes, enable or disable ajax search, use extensive sorting options and adjust the price range precisely.

Create a filter based on your personal needs. You can add any number of filters, and customize them to your individual style.

In order to add a filter, simply check the box .

![Create](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_create_filters.gif)

You can see all the changes in the live preview.

## Filter Options

With our plugin, your customers can filter your products by any criteria. You can also customize each filter to your preference.

To configure filter options, click **Show Options** and select the options you need:

![Show](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_show_option.png)

Check out the detailed documentation for setting options for each filter:

- [Price](https://woobewoo.com/documentation/price-product-filter/)
- [Price range](https://woobewoo.com/documentation/price-range-filter/)
- [Sort by](https://woobewoo.com/documentation/sort-byon-salefeatured-filters-optionswpf/)
- [Categories](https://woobewoo.com/documentation/product-categories-settings-filtering/)
- [Tags](https://woobewoo.com/documentation/product-tags-settings-filtering/)
- **Author**
- [Featured](https://woobewoo.com/documentation/sort-byon-salefeatured-filters-optionswpf/)
- [On sale](https://woobewoo.com/documentation/sort-byon-salefeatured-filters-optionswpf/)
- [In Stock](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)
- [In Stock, Out of Stock, On Backorder](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)
- [Rating](https://woobewoo.com/documentation/product-rating-settings-and-filtering/)
- [Search by text](https://woobewoo.com/documentation/search-by-text-optionswpf/)
- [Attribute](https://woobewoo.com/documentation/attributes-settings-filtering/)

## Drag and drop filters

Upgrade your store using the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) functionality.

You can sort your filters and arrange them in any order.

Arrange filters by dragging and dropping the online builder.![Arrange](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_arrange_filters.gif)

## Our Detailed Documentation

As you can see with our plugin, you do not need to worry about the technical component of your Product Filter.

Just choose the parameters of your preferences, and the **WooCommerce Product Filter**will do everything for you.

Check out **our detailed documentation.**

It will help you figure out how to use the plugin as efficiently as possible. Make the Product Filter interface stylish and convenient.

Delight your customers with new solutions with **WooBeWoo plugins.**

Or **contact us** and we will be happy to help you.

---

## 2. Create Your First Product Table

**Source:** [https://woobewoo.com/documentation/create-your-first-product-table/](https://woobewoo.com/documentation/create-your-first-product-table/)

Once you have installed the **WooCommerce Product Table**plugin and selected the default settings, it’s time to start creating product tables.Due to the wide functionality of our plugin, this does not require any special knowledge in programming.

Creating tables with the **WooBeWoo plugin**is very simple and interesting.

## Add New Table

To create your first product table, open the **WooCommerce Product Table** and select Add New Table.

![Create your first product table](https://woobewoo.com/wp-content/uploads/2020/06/add-new-table.png)

## Create New Table

Next, after you clicked add a new table. You will automatically be sent to create your table.

Here you can customize the contents of your table.

Enter a**name for your table** to easily find it from your many tables.

**Also thanks to Live Builder, you can select products by:**

- **author.**You can select products from a specific author of your store
- category
- **tags**
- **attribute**
- **only current attribute**
- **show variations**
- **show private**

Create your first product table with **Woo Product Table** :

![Create your first product table](https://woobewoo.com/wp-content/uploads/2020/06/Example-online-Builder.gif)

## Adding Products to the Table

When you have selected all the parameters by which you want to find products, you will see a list of suitable products for your parameters.

Next you can:

- Select each product manually. Just**click on the product checkbox** to add the product to the table.
- You can also click on “**Select All**” to add all products according to your chosen parameters.
- Click “**Select None**.” If you want to cancel the selected products, and display the table empty.

![Create your first product table](https://woobewoo.com/wp-content/uploads/2020/06/Create-table.gif)

After selecting the products, click **Create Table**

If you have tons of products, it could be a challenge to search the specific products for adding. To simplify the process of adding the products to the table, in the plugin there is an option to search the products by SKU.

As you can see, everything is very simple, now you will see your product table with the products you have selected.

## Displays the user’s products

At the bottom of the list of products, there is an option named **Displays the user’s products**. Check it on if you want a table to list the products, that the logged-in user has already bought.

![Display user's products](https://woobewoo.com/wp-content/uploads/2020/06/product_table_display_users_products.png)

## Add products automatically

One more way to easily**add products automatically** **(pro)** by category multiselection – just choose categories from the drop-down list. All the new products you will add to your shop will be automatically added to the table according to the selected category. All the new products you will add to your shop will be automatically added to the table according to the selected category.

![Create your first product table](https://woobewoo.com/wp-content/uploads/2020/06/Add-products-auto.png)

## Add products variations automatically

Instead of manually adding each variation, you can enable this option and all product variations are automatically added to the table as individual products.

![Add products variations automatically](https://woobewoo.com/wp-content/uploads/2020/06/add-variations.png)

To enable this option, click on the checkbox and in the drop-down list select the variations of which particular product you want to add to the table. The variations will then appear in the table as separate products.

![Add products variations automatically](https://woobewoo.com/wp-content/uploads/2020/06/variations-such-as-products.png)

Except for automatically adding products to the table, they can be dynamically deleted. For example, if you delete a category from a product, it is removed from the table that has auto-update products from this category.

## Filter products dynamically based on page type

If you enable the option on the page of a specific term, the products will be filtered from this specific term. For example, on the particular tag page, the products of this tag will be shown, on the attribute page will be displayed only the products assigned to the attribute, and so on.

![Filter products dynamically](https://woobewoo.com/wp-content/uploads/2020/06/product_table_filter_products_dynamically.png)

## Product Table Columns

Product table allows you to build a table according to your needs.

Our **WooCommerce Product Table**plugin lists your products in a table with columns of information about each product. You can use the columns option to choose which columns to include in the table.

The plugin fully supports:

- **Thumbnails**
- **Name**
- **Featured**
- **SKU**
- **Categories**
- **Attributes**
- **Summary**
- **Rating**
- **Stock status**
- **Date**
- **Price**
- **Buy**
- **Short description**
- **Sales**
- **Downloads**
- **Sale Price dates**
- **Product link**
- **Tags**
- **Custom fields**

Read this documentation to learn more about the [available columns](https://woobewoo.com/documentation/columns-in-the-product-table/)

### Add Product Table to the site content

There are 2 different ways to add a table to your site using code: table shortcode and table PHP code.

Table shortcode can be found on the left navigation menu if you click “Show All Tables”.

![](https://woobewoo.com/wp-content/uploads/2020/06/Add-Product-Table-to-the-site-content.png)

Or you can also find shortcodes in the table settings in the top left of the panel. Simply choose a necessary code from the drop-down menu and copy the code.

![](https://woobewoo.com/wp-content/uploads/2020/06/woocommerce-product-table-shortcode.png)

Copy Table shortcode and paste into the page content.  PHP code can be inserted at any place of the page code.

Look at all the **Examples of the WooCommerce Product Table.**

## Our Detailed Documentation

As you can see with our plugin, you do not need to worry about the technical component of your table.

Just choose the parameters of your preferences, and the **WooCommerce Product Table** will do everything for you.

Check out**our detailed documentation**.

It will help you figure out how to use the plugin as efficiently as possible. Make the product table interface stylish and convenient.

Delight your customers with new solutions with**WooBeWoo plugins.**

---

## How to sort a filters by drag and drop?

**Source:** [https://woobewoo.com/documentation/drag-and-drop-builder-wpf/](https://woobewoo.com/documentation/drag-and-drop-builder-wpf/)

Upgrade your store using the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) functionality.

You can sort your filters and arrange them in any order.

Arrange filters by dragging and dropping the online builder.

![how](https://woobewoo.com/wp-content/uploads/2020/06/Drag-and-drop.gif)

The order will be saved in the form in which you installed it and displayed in the filter.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you

---

## Filter by Author

**Source:** [https://woobewoo.com/documentation/author-filter-optionswpf/](https://woobewoo.com/documentation/author-filter-optionswpf/)

Create and customize filters for your online store using the free WooCommerce Product Filter WordPress plugin. This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

## Filter by Author Settings

Once you have added this filter, you can fully configure it:

- Here you can enter your **Title** **Lable**text, by default Price
- If you wish, you can enter the filter **Description** text (optional)
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Roles.**You can define which role show users in the drop down
- **Show on frontend as** . You may show your roles list as **checkbox** or **dropdown**
- If you select the Dropdown list, then you can change the **Dropdown label** text.
- If you select the checkbox list, then you can:
- **Show Search.**Show search display the bar for searching by author name in the filter.
- **Layout.**Select a vertical or horizontal layout and set the count of columns
- **Maximum height in frontend.**Set maximum displayed height in frontend.(px)

![Author](https://woobewoo.com/wp-content/uploads/2020/06/Author.gif)

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Filter Block Height

**Source:** [https://woobewoo.com/documentation/filter-block-heightwpf/](https://woobewoo.com/documentation/filter-block-heightwpf/)

Thanks to the excellent  functionality of[WooCommerce products filter](https://woobewoo.com/plugins/woocommerce-filter/), you can easily control the height of the filter block.

And immediately look at the changes in the preview

## Filter Block Height

Here you can set the height in pixels. If not filled, then the height is calculated automatically based on the content of the filter. Please note that if the value of the Maximum height in frontend of the filter is greater than the specified value, some data may be hidden

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Heigth.png)

Check out our [Filter and block Width](https://woobewoo.com/documentation/filter-and-block-widthwpf/) article to improve the look of your filter and the entire store.

---

## Customizable Loader icon

**Source:** [https://woobewoo.com/documentation/customizable-loader-iconwpf/](https://woobewoo.com/documentation/customizable-loader-iconwpf/)

## What is Loader icon?

Loader icon is a loading indicator that helps the user understand the loading position at any given time, especially when the system is working on a task.Users want to have control over the system they use.

The progress indicator of the task is one of the most popular forms of providing system status for the user.

Immediate response is undoubtedly the best option for any application, but situations where it is not feasible are often possible. (Slow operation of the system may be due to a weak Internet connection, or the operation itself can be complex and take a long time.)

In such cases, in order to reduce user stress, you must confirm to the user that the system is busy working on his task and that there is real progress.

This is a kind of simple but very necessary thing.

## Enable Loader Icon

The WooCommerce Product Filter provides the ability to enable and fully configure your personal Loader filter for the individual style of the store.

To enable the filter loader, select the **Enable filter icon on load** checkbox in Woo Product Filter-> Options->Loader.

![Loader](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_loader.png)

Click on the **Arrows** icon If you want to **apply loader settings to all filters.**

## Customizable Icon

Creative progress indicators can smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

**Filter Loader Icon.**Here you may select the animated loader, which appears when filtering results are loading.

You can select the Loader icon from the list or add a custom one.

Just click on **Choose Icon** and select any loader you like from the list.

![Icon](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_icon_list.png)

Or you can add your custom icon by clicking on **Select Icon**

![Setting](https://woobewoo.com/wp-content/uploads/2020/06/Select-icon.png)

**Filter Loader Color.**Here you may select the color of filter loader animation.

Initially, there will be a default value.

Here you can choose any color from the color palette. Assign color tone and transparency

![Cusmtomize](https://woobewoo.com/wp-content/uploads/2020/06/Filter-Loader-Color.png)

From the**animation** dropdown, you can select the animation mode for the loader. They are **none**, **flip**, **jump**, **rotate**.

![Animation](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_animation.png)

With the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/), you get a user-friendly design that meets any of your requirements. Your sales will be more successful and your customers the happiest.

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Filter and Block Width

**Source:** [https://woobewoo.com/documentation/filter-and-block-widthwpf/](https://woobewoo.com/documentation/filter-and-block-widthwpf/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) is a fully customizable filter that will make your store more attractive and successful.

By adjusting the width of the filters and adjusting the width of the blocks, you can use every pixel of your store to good use.

## Filter Width

Here you can set the filter width in pixels or percentage..

By default, the width is 100% new; you can change it if you wish in % or pixels.

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Width-1.png)

This parameter sets the maximum width of the Filter.But the rest of the contents of the Filter also affects its width – check how it looks in preview mode.

## Filter Block Width

Here you can set the filter block width in pixels or percentage.

By default, the width is 100% new; you can change it if you wish in % or pixels.

![Filter](https://woobewoo.com/wp-content/uploads/2020/07/Width-block.png)

This parameter sets the maximum width of the B;ock Filter.But the rest of the contents of the  Block Filter also affects its width – check how it looks in preview mode.

## The Width Option does not Work!

If the Widths option does not work, you may have set the width too narrow and the content will no longer fit in the filter. Instead of letting it look spoiled, the plugin will make the width wider to keep the content consistent. Try increasing the width of the affected blocks.

---

## Customizable Filter Title and Description

**Source:** [https://woobewoo.com/documentation/customizable-filter-title-and-descriptionwpf/](https://woobewoo.com/documentation/customizable-filter-title-and-descriptionwpf/)

Create and customize filters for your online store with [WooCommerce Product Filter.](https://woobewoo.com/plugins/woocommerce-filter/)

Thanks to the wide functionality of the plugin, you can not only set the title and description of the filter, but also configure how the title of your filter will be displayed.

The option is applicable to each filter.

It is very simple, just click on the show options and select show as.

## Title and Description Product Filter

Each filter of our plugin has a custom title and description.

**Title.**By default, the filter title is not displayed, but below you will learn how to show it. You can also change the title text to the one you want.

**Description**. Initially, the filter is displayed without a description. You can enter its text in the Description field

![Title](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_title_and_description.gif)

## Hidden, Closed, Opened Filter Label

**Set the way to display a filter label on the page on desktop/mobile:**

- **no label**
- **show as closed**
- **show as opened**

Here is an example of title label displaying:

![Show](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_show_title_label.png)

Choose your way of displaying the Title and description of the filter . Experiment and improve the appearance of the entire table with the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/)

---

## Clear all,Clear block and Filtering Buttons

**Source:** [https://woobewoo.com/documentation/clear-allclear-block-and-filtering-buttonswpf/](https://woobewoo.com/documentation/clear-allclear-block-and-filtering-buttonswpf/)

Tested by many users, the WooCommerce Product Filter plugin offers you a large selection of options.

Customize the look and functionality of your plugin to your preference.

This tutorial will help you understand Clear all and Clear block buttons.

## Clear All Button Settings

The default plugin is provided without this button but you can easily add it by navigation:

**WooCommerce Product Filter >> Edit filter >> Options >> Buttons**and enable**Show Clear all Button.**

![Filter](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_filter_button.png)

**Show Clear all button.**Turn on this option to get the clear button.

**Select Filter Buttons Position.** Here you may change the position of the clear button.

![Clear](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_clear_button_position.png)

Besides, you can enable the **Reset All Filters On Page** option.

![Clear](https://woobewoo.com/wp-content/uploads/2020/07/product_filter_clear.gif)

The default name for this button is “Clear.” But you can easily change this.

![Custom](https://woobewoo.com/wp-content/uploads/2020/06/Clear-all-button-exampl-1.png)

## Clear Block Settings

To display the clear links, go to the**WooCommerce Product Filter >> Edit filter >> Options >> Content**and enable**Show Clear all Button.**

![Clear](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_clear_block.png)

If this option is enabled, the < clear links appear on the page next to the filter block titles. The presets of this filter block will be deleted after clicking on the link. The sample text is Clear which can be easily changed:

![width=466](https://woobewoo.com/wp-content/uploads/2020/06/Example-clear-block.png)

## Filter Button Settings

To enable filter button, go to the **WooCommerce Product Filter >> Edit filter >> Options**. Here you need to select the **Filtering button** from the **Filter Activation Type** dropdown.

The default text is Filter and you can easily change it according to your needs.

![Filter](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_filter_buttons.png)

**Automatically Update The Filter.** When you select one filter element, the rest of the elements will be updated based on it.

**Select Filter Buttons Position.** Here you may change the position of the clear button.

![Clear](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_clear_button_position.png)

**Select Filter Buttons Order.** This option allows changing the order of filter buttons on the page e.g. Filter – Clear or Clear-Filter.

**Display Hide Filters button.** Here you may decide if the buttons will be shown on different devices. You can find out more [here](https://woobewoo.com/documentation/button-options/).

![Buttons](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_buttons_order.gif)

As you can see, using the WooCommerce Product Filter, you have all the necessary options in one plugin.

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Filtering Button

**Source:** [https://woobewoo.com/documentation/filtering-buttonwpf/](https://woobewoo.com/documentation/filtering-buttonwpf/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) comes with a**Filter** button by default.
Just select the filters you need and click on the Filter button to display filtering results
You can easily disable it (replace Ajax with a search), or customize your filter button to an individual style.

## Filtering Button Settings

You can turn on / off and configure the Filter button by navigate:

**WooCommerce Product Filter >> Edit filter >> Options >> Buttons.**

Here you need to set the **Filter Activation Type** to **Filtering Button.**

**Show Filtering button**.This button is necessary when ajax mode is disabled. It allows users to set all necessary filter parameters before starting the filtering. This option is not available when Ajax is enabled.

Create your own filter button text in the **Filtering button text.**Here you may change the filtering button word

![Filtering](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_filtering_button.png)

## Can I Change the Location of the Filter Button?

Of course! You can display the filter button wherever you want.

**WooCommerce Product Filter >> Edit filter >> Options >> Buttons.**

**Select Filter Buttons Position.**Here you may select the position of filter buttons on the page:

- **Top**
- **Bottom**
- **Both**

![Button](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_button_position.gif)

## Ajax Search Instead of Filter button

Also, thanks to the wide functionality of our plugin, you can install [Ajax search](https://woobewoo.com/documentation/enable-ajax/) instead of the Filter button
(you cannot enable these options together)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) plugin with Ajax let filtering starts as soon as filter elements change and the page reloads automatically, filter results are displayed instantaneously.

Users can see filtered results in real-time.

## Convenient for Everyone

Choose the best option for displaying filtering that is suitable for your store. Attract your customers with a stylish interface and we will delight you with convenient options.
Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## Enable Ajax

**Source:** [https://woobewoo.com/documentation/enable-ajax/](https://woobewoo.com/documentation/enable-ajax/)

The **WooCommerce Product Filter** plugin with Ajax is a very efficient option. Filtering products and displaying results in the browser will be performed in the background without a full reload of the page, both with auto filtering and filtering using the Filter button.

## How to enable Ajax mode?

So you have a ready-made store, and the woo filter is displayed in the directory. To enable instant AJAX filtering: go to the **Options -> Main** tab and check the **Enable Ajax** option.

![Enable](https://woobewoo.com/wp-content/uploads/2020/06/Ajax.png)

Now that you have AJAX enabled, filtering will happen without page refresh, like with **Autofiltration:**

**Filter** button:

## Ajax doesn\’t work.

If the Ajax option is enabled, but does not work correctly, for example, it has a difference in styles, the wrong products are displayed, additional elements of the product container do not work correctly – such as pagination of the number of products, or sorting does not work correctly, etc. If these problems are familiar to you, then most likely you are faced with an incompatibility issue with a third-party plugin or theme.

First, let\’s find out how Ajax works from a technical point of view.
Ajax filtering makes a selection of products according to the specified criteria in the filter, and then runs the resulting data set through the WooCommerce template, which is used by default to build the store page.

![width=1300](https://woobewoo.com/wp-content/uploads/2020/06/222.png)

After that, the filter returns only the block of products matching the filtering criteria and inserts it INSTEAD of the current block of products in the store. Here we get this piece of the site with goods and replace it with the filtering results:

![width=1300](https://woobewoo.com/wp-content/uploads/2020/06/111.png)

## How to fix?

Now, let\’s figure out how to solve the problem if you are facing Ajax not working.
Go to **Settings -> Main** and make sure the Ajax option is enabled. Here you can find all the tools you need to fix Ajax errors.

![width=1155](https://woobewoo.com/wp-content/uploads/2020/06/ice_screenshot_20220722-165928.png)

- **Remove Actions Before Filtering.**Enable this option when ajax filtering does not work as expected. For example, sorting does not work. (Removes filters such as posts_orderby and pre_get_posts.)
- If, when filtering Ajax, the results do not display products with the “Private” status, enable the option **Display Products With The Status “Private”**. Now, when filtering, products will be displayed not only with the “publish” status, but also with the “private” status.

### Force Theme Templates.

The Force theme template option was originally added for WordPress themes that incorrectly change the wokomers template to display the store page, due to which our plugin cannot find the product block on the page.
But the option is also relevant in other cases. For example, if what we get via Ajax differs from what we see when we reload the page. These are not necessarily only the product display styles, but the products may not be displayed correctly, as some other plugin or theme may interrupt our filtering.

So, earlier we figured out how filtering with AJAX usually works, from a technical point of view. But when you enable the Force Theme Templates option, AJAX filtering works in a different way:
When the Force Theme Templates option is enabled, the filter requests the entire page via AJAX (not just the product block), and when it is received, it searches for the same product block on the page. When it finds it, it cuts out this block and replaces the current block with products on the page with the block with filtering results.

**So If after ajax filtering there are differences in the styles of the list of products, pagination or count-block, then enable this option. (settings->main->ajax).**

*Important: for correct operation, we recommend filling the Product container selector option (see below).*

- **Recalculate Filter + Force Theme Template.** This option recalculates all filters, taking into account third-party filters from other plugins on the page. For example, if the products on the page with the woobewoo filter were already pre-filtered by some third-party plugin filter, as a result of which the counters do not work correctly. But be careful, when the option is enabled, the filter may work slowly if the product base is large.(options->main->enable ajax->force theme templates->Recalculate Filter)

![width=1655](https://woobewoo.com/wp-content/uploads/2020/06/ice_screenshot_20220722-194954.png)

### Product Container selector and Product List / Loader Selector+Force Theme Template

As we have already figured out earlier, filtering with AJAX + Force Theme Template works in such a way that it searches the entire page for the Block Selector with products and when it finds it, it replaces this block with a block with filtering results.

- **The Product List / Loader Selector** is just the same block that contains all the product blocks. To find the Product List / Loader Selector, open the browser console on the products page (In most Windows browsers, developer tools can be opened by pressing F12 . In Chrome for Mac use Cmd+Opt+J , Safari: Cmd+Opt+C). Now find on the page which contains exactly blocks of products.

![width=1912](https://woobewoo.com/wp-content/uploads/2020/06/ice_screenshot_20220722-150037-1.png)

The Product List / Loader Selector must be entered, if it is different from the standard one, to tell the filter what to look for on the page, what to cut and paste.

The default Product List / Loader Selector in Woocommerce is “**ul.products**”. But sometimes it happens that in a particular topic, the Block selector with products has different meanings. Then the filter can\’t find the products on the page and you run into errors, incorrect AJAX work, and so on.

![width=1662](https://woobewoo.com/wp-content/uploads/2020/06/555.png)

For such situations, we have added Product List / Loader Selector manual input fields (settings->main->enable Ajax->Product List / Loader Selector).

- **Product Container selector** – by default, this is the very first parent of the block with products (Product List / Loader Selector). The container contains pagination blocks, the number of products found, and the product blocks themselves.

But sometimes it happens that in a given theme, the first parent container of the product container does not include all the necessary elements, which is why you need to take older parents to capture all the elements – then you need to set the Product Container selector (and this the container must contain both the product block and the pagination block and the block of the number found, so that everything is replaced together).

As you can see in the screenshot of our product block (number 2 on the screen), the first parent element contains all the elements: pagination; sorting; number of products (number 1 on the screen), so in this case you do not need to enter the Product container selector:

![width=1801](https://woobewoo.com/wp-content/uploads/2020/06/ice_screenshot_20220722-195353.png)

To find the Product Container selector, open the browser console on the products page. Here, find the parent block of the product container:

![width=1669](https://woobewoo.com/wp-content/uploads/2020/06/666.png)

For such situations, use the input field (settings->main->enable Ajax->Product Container selector).

**So when do you need a Product Container selector and when do you need a Product List / Loader Selector?**

Well, let\’s fix it:
**Product List / Loader Selector** – the meaning of this option is to specify which page block to replace with a new one during Ajax filtering. Therefore, if your block with products has a selector that is not ul.products (not the standard one from woocommerce), then you need to enter Product List / Loader Selector .

**Product Container selector** – the meaning of this option is to show where elements such as pagination, the number of products found, and the product blocks themselves are located. Usually, these elements are included in the first parent container of the block with products, but if these elements are not included in the container, then the Product Container selector must be specified.

We have made such a simple scheme for understanding that when you need to enter the Product Container selector:

![width=1166](https://woobewoo.com/wp-content/uploads/2020/06/777.png)

**Input rules for Product Container selector and Product List / Loader Selector:**
All selectors are set as standard:
-selector can be entered with a tag.
– the class is preceded by a “dot”, for example “.products.”
-if these are classes of one element, then there is no gap between the classes. For example “.products.columns”
-if the class is a child of the previous ones, then a space is placed between the classes. For example “.products .columns”
– id is written with a pound sign at the beginning. For example #content. (The id itself is unique, but the parent of the products doesn\’t always have an id, and it doesn\’t always have a unique class, so it\’s not always worth setting one.)

The number of classes can be unlimited, and sometimes one is enough, but the main thing is that it be unique on the page. Accordingly, the main thing is to make sure that the selector you set is unique and returns only this block, otherwise all the same ones will be replaced by products.

### Don\’t Use Shortcode

If product blocks are created by shortcodes with parameters (categories, tags, sorting, pagination, etc.) for example [prod ucts limit=6 category=Earrings ], then using the Dont Use Shortcode option you can control whether these shortcode parameters are used for the filter or not .
For example, we entered the shortcode [prod ucts limit=6 category=Earrings ] and we see that the filter now always displays only the parameters suitable for this shortcode, in our example it is only this category and price.

But if you enable the Don\’t Use Shortcode option, then the filter will ignore the shortcode parameters and will always treat the shortcode as if you just entered the [pro ducts] shortcode.

![width=1665](https://woobewoo.com/wp-content/uploads/2020/06/ice_screenshot_20220722-200249.png)

### Pagination disappeared after Clear filter

f you did add it to the documentation, the issue is this:

If ajax filtering is enabled and you reload a filtered category page that has fewer products than the max product per page limit (e.g. 3 products available for the selected filter and 20 is the max products per page), the pagination will not be repopulated upon resetting the filters because the pagination element does not exist due to the filtered category page not requiring pagination.

The fix is:

Add in a check, to wherever your pagination element is inserted, that checks if the woocommerce_pagination() exists for the current page. If it doesn\’t exist then insert an empty .pagination element that can be used by the ajax filters to repopulate the page numbers.

As an example, the validation we used for our woocommerce_pagination() function looks like this:

```
if(woocommerce_pagination()) {  woocommerce_pagination();  } else {  echo \'<nav class=pagination style=display:none></nav>\';  }
```

### 

### 

### Didn\’t find a solution to the problem?

This looks like a conflict with another plugin of yours or your theme. Please try deactivating all your plugins one by one and check the issue. This way you will know which plugin is causing the error.
If that doesn\’t help, try temporarily switching to the default WordPress theme.
If this does not help, please contact us via the **Contact us** form.

### Conclusion

As you can see, WooCommerce Product Filter this is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.
Choose your option of displaying filtering, and please your customers with a convenient interface.
Still have questions? **Contact us** and we will be happy to help you.

---

## Display Selected Parameters

**Source:** [https://woobewoo.com/documentation/display-selected-parameterswpf/](https://woobewoo.com/documentation/display-selected-parameterswpf/)

WooCommerce Product Filter has a user-friendly interface. You can easily manage without any special skills. Make it stylish and effective for customers.

The plugin filters by any parameter, and displays all the options you need.

So for example, you can choose whether all the selected filter parameters will be shown, and where they will be located

This tutorial will help you deal with this.

## Display Selected Parameters and Settings

By default, **Display selected parameters of filters** option will be turned off.

But if you wish, yo can enable this option, move to the **Options >> Content** tab and enable a checkbox.

![Display](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_display_selected_parameters.png)

**Selected parameters position.**

Here you may select the position of selected parameters block**.(Top or Bottom)**

Example bottom parameters position :

![Position](https://woobewoo.com/wp-content/uploads/2020/06/Exanole-Bottom-position.gif)

**Display Clear All**

Once you have selected the filter options, you can easily hide them.

To do this, you can go to the **“Options”** tab and enable  **Display Clear All**

![Diplay](https://woobewoo.com/wp-content/uploads/2020/06/Display-clear-all.gif)

As you can see, our plugin offers you a very functional filter with a convenient and simple interface.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Set no products found text

**Source:** [https://woobewoo.com/documentation/customising-the-no-products-found-text-wpf/](https://woobewoo.com/documentation/customising-the-no-products-found-text-wpf/)

WooCommerce Product Filter has a fully customizable interface to your individual style.

This tutorial will help you set your own text, which users will see if nothing was found by their filtering parameters.

## Set no products found text

The option allows you to select the text that will be displayed if results are not found when the user is trying to find or filter products. For example, this message will appear if you have no products on your site, or if you’re showing a category with no products.

The default text is: No products found

But you change this in via **Options >> Content** tab. Just enter your custom text in the **Set no products found text** field.

![No](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_no_products_found.png)

Still need help?

Read our**documentation**or **Contact us** and we will be happy to help you.

---

## Search by Text

**Source:** [https://woobewoo.com/documentation/search-by-text-optionswpf/](https://woobewoo.com/documentation/search-by-text-optionswpf/)

WooCommerce Product Filter. This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge.

In Product Filter, you can use text search as one way to filter.

## Search by Text Settings

You can fully customize the Search to Text status to your individual style(see the change immediately in the preview):

![Search](https://woobewoo.com/wp-content/uploads/2020/06/Search-by-text.png)

- Here you can enter your **Title** **Lable**text, by default Price
- If you wish, you can enter the filter **Description** text (optional)
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Use title as placeholder**. You can set filter title as search input placeholder.
- **Search by .**Here you can choose searching params (for ex.Title;Content;Excerpt;Attributes;SKU and Meta Fields)
- Select the search **Logic** and or or
- **Search by Full Word Only.**Include if you want the search to work only with fully written words.
- **Exclude from search results**. Exclude from search results selected items or items with selected taxonomies.
- **Disable auto filtering when focus out.**You can disable filtering products if focus on search input

**Autocomplete.**Autocomplete relevant variants. Works only when searching by title

![Search](https://woobewoo.com/wp-content/uploads/2020/06/search.gif)

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Hide Filters Button and Hide Filter by Title Click

**Source:** [https://woobewoo.com/documentation/hide-filters-button-and-hide-filter-by-title-click-wpf/](https://woobewoo.com/documentation/hide-filters-button-and-hide-filter-by-title-click-wpf/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) offers you a multi-functional interface for managing your store’s filters. You can filter by any parameter, apply filter styles, select drop-down options and show filters as you wish.

This tutorial will help you figure out how you can hide/show your store’s filters using the “**Hide Filters**” button.

## Hide Filters Button

By default, the button is not displayed.

You can enable it (in the **Options > Buttons** tab), and specify how it will be displayed (in the **Design**tab) by choosing the option **Display Hide Filters button.**

![Hide](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_hide_filter_button.png)Here you can choose:

- No.
- Yes, show as close
- Yes, show as opened. **Example:**

![Hide](https://woobewoo.com/wp-content/uploads/2020/06/Hide-Filter-Button.gif)

## Hide Filter by Title Click

You can also easily hide your filters after clicking on the filter title.

This is a very convenient option that you can turn on / off in the Options Tab>>Content.

![By](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_by_title_click.png)

**Hide filter by title click.** Here oy can check the box and the filter will be hidden after clicking on the filter title.

![Hide](https://woobewoo.com/wp-content/uploads/2020/06/Hide-Filter-Title.gif)

As you can see, our plugin offers you a very functional filter with a convenient and simple interface.

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Checked items

**Source:** [https://woobewoo.com/documentation/checked-items-to-the-top-wpf/](https://woobewoo.com/documentation/checked-items-to-the-top-wpf/)

With the wide functionality of the WooCommerce Product Filter, you can completely manage the elements in the product filter.

If you want the selected filter elements to be displayed at the top of the list, this tutorial will help you do this.

## Checked Items to the Top

You can use this option only if you use a filter with checkboxes.

To enable this option open the**Options >> Content** tab and check the box for **Checked items to the top**

![To](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_to_the_top.png)

Now when you select the filter option, it will automatically be displayed at the top of the list

![Checked](https://woobewoo.com/wp-content/uploads/2020/06/Checked-Items-to-the-Top-.gif)

## Checked Items In Bold

To enable the **Checked Items In Bold** option, move to the **Options >> Content** tab and toggle the option.

![Checked](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_checked_bold.png)

Now the checked items will be marked as bold.

![Checked](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_checked_in_bold.gif)

Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Stock Status Filter

**Source:** [https://woobewoo.com/documentation/stock-status-filter-optionswpf/](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)

Thanks to the [WooCommerce Product Filter,](https://woobewoo.com/plugins/woocommerce-filter/) you can filter by any parameter, for example, by Stock Status. This is controlled in the main WooCommerce settings – WooCommerce> Settings> Products> Inventory. On this page you can indicate whether you want to show the general condition of the product or the exact quantity of the product for each product.

## Filter Settings by Stock Status

- Here you can enter your **Title** **Lable**text
- If you wish, you can enter the filter **Description** text (optional)
- **Show title label**. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show fronted as:**
- checkboxes
- dropdown
- toggle switch (You can give your own custom design.
- **Stock status.**Here you may select the sorting options available for your site users (min two options).
- **Change status names.**Here you may change stock status names
- **Use as default.** Toggle the option to select the default stock status.
- **Hide filter.** Turn on the option to hide the filter.

![Stock](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_stock_status.gif)

## How to change the stock status of the product?

You can do this in the product settings in the Inventory section.

The inventory section gives you the ability to manage stocks individually and determine whether to allow reverse orders and more. It allows you to sell products, and customers add them to the cart for purchase.

You can select “Enable Product Level Inventory Management” in the goods inventory settings. If you do not select then in the “Inventory” section only the “Inventory Management” option will be displayed.

When inventory management at the product level is disabled, you must manually update the Balance Status.

![Prtoduct](https://woobewoo.com/wp-content/uploads/2020/05/Product-Inventory.png)

### Exclude variations on backorder

If the option Hide out of stock items from the catalog is enabled, out-of-stock products will not be filtered. If this option is also enabled, on-backorder products will also be excluded.

![product](https://woobewoo.com/wp-content/uploads/2020/07/FilterbyVariations.png)

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## Enable and Setting Overlay

**Source:** [https://woobewoo.com/documentation/enable-and-setting-overlay/](https://woobewoo.com/documentation/enable-and-setting-overlay/)

Designing modern interfaces is more than just static screens; these are design skills combined with programming skills.

But thanks to the**WooCommerce Product Filter,** you can create and customize the interface of your site without any special coding knowledge.

**Overlay** in WooCommerce Product Filter is a stylish custom transition between the beginning and the result of filtering.

Overlays as well as the loader will help smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

## Enable and Setting Overlay

You can add this to your filter and fully customize and improve.

To **Enable Overlay** option, move to the Loader Tab and enable a checkbox :

![Enable](https://woobewoo.com/wp-content/uploads/2020/06/Overlay.png)

**Show Loader Icon on overlay**. If you wish, you can enable the filter icon during the filtering process.

**Show loading word on overlay**and **Set loading word for overlay :**

Here you may select overlay word for filter. This is a very cool option that allows you to both smooth out waiting for users to download and additionally show the label of your store. (or any other word)

## Customizable Loader Icon

Loader icon is a loading indicator that helps the user understand the loading position at any given time, especially when the system is working on a task.Users want to have control over the system they use.

The progress indicator of the task is one of the most popular forms of providing system status for the user.

This option works well with the overlay,**read this article** about the loader to learn more

Give your store the most unusual and effective interface with [WooBeWoo](https://woobewoo.com/)

Still have questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## Full list of WooCommerce Product Filter options

**Source:** [https://woobewoo.com/documentation/full-list-of-woocommerce-product-filter-options/](https://woobewoo.com/documentation/full-list-of-woocommerce-product-filter-options/)

This is a complete list of features available in the [WooCommerce Product Filter,](https://woobewoo.com/plugins/woocommerce-filter/) with links to complete instructions for each parameter.

Create and customize filters for your online store using the free WooCommerce Product Filter WordPress plugin. This is an ideal way to make the purchase process really simple and enjoyable for users of your site without any special coding knowledge. Filter by price, categories, tags and attributes, enable or disable ajax search, use the extensive sorting options and precisely adjust the price range.

## Full List of Options by WooCommerce Product Filter

- ## Filtering by any parameter

WooCommerce Product Filter with advanced filters for your customers and full control for you is a “Must Have” for any online store!

With the help of the plugin, your customers can filter products by any criteria —

1. [Price](https://woobewoo.com/documentation/price-product-filter/)
2. [Price range](https://woobewoo.com/documentation/price-range-filter/)
3. [Sort by](https://woobewoo.com/documentation/sort-by/)
4. [Categories](https://woobewoo.com/documentation/product-categories-settings-filtering/)
5. [Tags](https://woobewoo.com/documentation/product-tags-settings-filtering/)
6. [Author](https://woobewoo.com/documentation/author-filter-options/)
7. [Featured](https://woobewoo.com/documentation/featured-filter-settings/)
8. [On sale](https://woobewoo.com/documentation/filter-on-sale/)
9. [In Stock,](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)
10. [In Stock, Out of Stock, On Backorder](https://woobewoo.com/documentation/stock-status-filter-optionswpf/)
11. [Rating](https://woobewoo.com/documentation/product-rating-settings-and-filtering/)
12. [Search by text](https://woobewoo.com/documentation/search-by-text-optionswpf/)
13. [Attribute](https://woobewoo.com/documentation/attributes-settings-filtering/)

You can enable an unlimited number of filters

- ## Drag and drop builder

You can sort your filters and arrange them in any order.

Arrange filters by dragging and dropping the online builder.

- ## Show Count

With **WooCommerce Filter** **“Show count option”**you can display the number of products matching the selected category, tag or attribute. An option is available for displaying in the dropdown and multiple dropdowns, checkbox and colours lists on the frontend.

- ## Display Selected Parameters

You can choose whether all the selected filter parameters will be shown, and where they will be located

- ## Customizable filter title and description

Choose your way of displaying the Title and description of the filter . Experiment and improve the appearance of the entire table with the [WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/)

- ## Hidden, closed, opened filter label

Set whether to **Show**  **Title Lable** :  (**No; Yes, show as close; Yes show as opened**)

- ## Hide Filters Button

By default, the button is not displayed.

You can enable it, and specify how it will be displayed in the **design tab** by choosing the option **Display Hide Filters button.**

- ## AJAX live search

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) plugin with Ajax let filtering starts as soon as filter elements change and the page reloads automatically, filter results are displayed instantaneously.

To enable Ajax option, move to the [Design Tab](https://woobewoo.com/documentation/woocommerce-filter-main-settings/#3) and enable a checkbox

- ## Display on Mobile/desktop

The plugin comes with enabled responsive mode and displays on mobiles and desktops by default. But if for some reason you need to display filter only on mobile or only on the desktop, you can set it up. Move to the Options tab and select, where to display filter.

- ## Editable price range step

Here you may set the value of prise increase step. The default value is set to 20. All the steps are equal. When setting the step, please note that the number of elements in the list should not exceed 100, otherwise the step setting will be reset and automatically calculated

- ## Filter Block Height

Here you can set the filter block height in pixels. If not filled, then the height is calculated automatically based on the content of the filter. Please note that if the value of the Maximum height in frontend of the filter is greater than the specified value, some data may be hidden.

- ## Enable and Setting Overlay

**Overlay** in WooCommerce Product Filter is a stylish custom transition between the beginning and the result of filtering.

Overlays as well as the loader will help smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

- ## Filter and block Width

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/) is a fully customizable filter that will make your store more attractive and successful.

By adjusting the width of the filters and adjusting the width of the blocks, you can use every pixel of your store to good use.

- ## Clear all and Clear block buttons

Customize the look and functionality of your plugin to your preference.

**Show Clear all button.**If this option is enabled, the Clear button appears at the page. All filter presets will be removed after pressing the button.

**Show Clear block.**If this option is enabled, the **< clear** links appears at the page next to the filter block titles. The presets of this filter block will be deleted after clicking on the link.

- ## Filtering Button

This button is necessary, when ajax mode is disabled. It allows users to set all necessary filter parameters before starting the filtering. This option is not available when Ajax is enabled.

Create your own filter button text in the **Filtering button text.**Here you may change filtering button word

- ## Customizable Loader icon

Creative progress indicators can smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

Select the loader icons from the list or add custom ones. You can completely control the icon, changing its color, tone.

- ## Price filter skins

Here you may select the price filter skin.The following price filter skins are available to you

AlsoYou can improve the look of your filter by choosing any skin color.

- ## Search text filter

In Product Filter, you can use text search as one way to filter.

You can set and customize the title and description.

Set how the filter will be displayed.

Choose what parameters the filter will search for.

Install Full Word Search Only

And also choose what you need to Exclude from search results.

- ## Customising the no products found text

The option allows you to select the text that will be displayed if results are not found when the user is trying to find or filter products. For example, this message will appear if you have no products on your site, or if you’re showing a category with no products.

The default text is: No products found

But you change this in the design of the tab. Just enter your custom text in the Set no products found text field.

- ## Show category image

The image display function allows you to display a category image when filtering (does not work with a drop-down menu)

- ## Hierarchical output of categories

Show hierarchical option is available in the category filter that canShow paternal and subsidiary categories (for checkbox list).

- ## Recount products by selected filter

To enable this option open the tab design and check the box for **Recount products by selected filter.**

After enabling this parameter, the plugin will automatically recalculate the product according to the selected filters

- ## Sort by Title After Filtering

To enable this option move to the design tab and check the box **Sort by title after filtering**

After enabling this option, all products after filtering will be sorted by title.

- ## Display Items in a Row

By default, this option is disabled. And the filter elements are located as vertical lists.

But if you want the filter elements to be arranged in a row, open the design tab, and check the **Display items in a row**

- ## Display View more

This is a very convenient option if the filter contains a lot of elements. If you use a vertical list of displaying table elements, you can enable the View more button.

In the design tab, check the Display View more

- ## Set number of displayed products

When the page is first loaded, the store displays the quantity of goods set in its settings.

If you set a number here, then after any filtering the number of products indicated here will be displayed

- ## Do not run filter on page load

This Option prevents the filter from starting when the page loads, even if it contains blocks with the Selected categories/tags/attributes will be marked as default flag enabled.

- ## Single line and multiline Star rating

Here you can Show on front-end as radio buttons list, drop-down, multiline star rating and single line star rating.

Depending on whether you need one or several attributes to be available at the same time, you also may show your attributes list as checkbox or dropdown.

- ## Checked items to the top

With this option, the filter elements selected by you or customers may appear at the top of the list. (For a filter with checkboxes)

- ## Display only on page

You can Choose on which pages you want to display the product filter:

- Shop;
- Product category;
- Product tag;
- All.

- ## Live Preview

Any changes you make when creating the filter will be displayed in the preview window, and you can check how the table looks on desktop computers, tablets and mobile devices.

- ## Usage Statistics

You can enable this option in the **Plugin Settings** to help improve our plugin.

This option sends us data on how the user uses the plug-in, in order to study statistics and type of improvement of functionality

This will help us make our solution better for you.

![Full](https://woobewoo.com/wp-content/uploads/2020/06/send-usage.png)

Take full advantage of our plugin by customizing every element of product filter, giving it a unique style.

Change and improve the appearance of the product filter to make your store beautiful and convenient for all your customers.

Also, if you have any questions? **Contact us**and we will be happy to help you.

---

## Adding Products to a Table

**Source:** [https://woobewoo.com/documentation/add-products/](https://woobewoo.com/documentation/add-products/)

**WooCommerce Product Table** is very simple to set up and take just a minute to manage Table Content and Columns.

Before to make Product Table Settings, firstly you need to add products to the table in the Content tab.

The plugin uses the product data already created by WooCommerce itself.

You can add products to WooCommerce manually or add them using a CSV/XML import. Just one click – and all your products uploaded into the table content

Add products to the table:

## Manually

Select the necessary items and add them to Manage Table Content.

You can select all the products at once or filter them by:

- **category**
- **attribute**
- **author**
- **tag**
- **in a table: yes/no**

and sort product in order by

- **name**
- **SKU**
- **price**
- **date and other parameters**

Searching by keyword is available.

Also, here you can find checkboxes with the following parameters:

- **only current attribute** – filter by attribute will display the single attribute exactly matches the search criteria.
- **show variation** – display the variation of the variable product separately.

![Adding](https://woobewoo.com/wp-content/uploads/2018/06/product-variations-1-1.png)

- **show private** – display private products on the list.

## Automatically

One more way to easily**add products automatically** **(pro)** by category multiselection – just choose categories from the drop-down list. All the new products you will add to your shop will be automatically added to the table according to the selected category. All the new products you will add to your shop will be automatically added to the table according to the selected category.

![Adding](https://woobewoo.com/wp-content/uploads/2018/06/add-product-auomatically-2.png)

## Sort the Added Products

After you have added products, they will appear in the table in the order they were added. But you can sort them manually or by any product parameters.
To do this, go to the**Settings / Functions** tab and click on the **Use pre-sorting** checkbox.

![Use](https://woobewoo.com/wp-content/uploads/2020/06/use-pre-sorting.png)

Now select the **Sorting type**:

- **Manual .** Select Manual option if you want to add a **sort by drag-n-drop**from the admin table preview to the frontend.

![Drag](https://woobewoo.com/wp-content/uploads/2020/06/sort.gif)

- **Popularity.**
- **Rating**
- **Newness .**
- **Price .**
- **Random**
- **Name .**
- **Menu Order.**

Now, as you can see in the preview, the products are sorted in ascending order according to the selected parameter . But, if you want to set descending sort according to the selected parameter, click on the **Sorting descending checkbox**.

Still have questions? Explore **our detailed documentation**, or **contact us**and we will be happy to help you.

---

## Display Filter on Pages

**Source:** [https://woobewoo.com/documentation/display-only-on-page-wpf/](https://woobewoo.com/documentation/display-only-on-page-wpf/)

**WooCommerce Product Filter**has many convenient options that you can customize to your liking to achieve the most comfortable interface for you and your customers.

This tutorial will help you place the filter on the pages you choose.

Read**this article** to learn how to add a filter to a store page.

### Display on pages
Choose on which pages you want to display the Product filter. By default, the filter is displayed on the **All Woocommerce Page**

To change this option, move to the **Settings ->Main** tab and find the **Display on pages** checkbox. Select an option from the drop-down list.

You can display the filter on:

![Display](https://woobewoo.com/wp-content/uploads/2020/06/product_filter_dispay_on.png)

- **-Shop.**The filter will only appear on the store page.
- **-Product category.**The filter will only appear on category pages.
- **-Product tag.**The filter will only appear on tag pages.
- **-All Woocommerce Page.**The filter will be displayed on all in Woocommerce pages.
- **-All Pages.** The filter will be shown on all pages of the website.
- **-Specific.**You can choose any page with Woocommerce products. Just create a new page and it will appear in the list.

![Specific](https://woobewoo.com/wp-content/uploads/2020/06/specific-page.png)

- **-Specific Category.** You can also display a filter on a page of a specific or several specific categories. To do this, select the category pages you need.
![Specific](https://woobewoo.com/wp-content/uploads/2020/06/Example-F.png)
Check out our **documentation** to learn more about other **WooCommerce Product Filter**options.

Also, if you have any questions, please **contact us**and we will be happy to help you.

---

## Category Display and Category Filter

**Source:** [https://woobewoo.com/documentation/category-display-and-category-filter/](https://woobewoo.com/documentation/category-display-and-category-filter/)

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) plugin fully support categories. You can display them as a separate column in the product table.

But the main thing is that Product Table has the built-in filter for category custom , which can be added like a drop-down menu above the table.

You can enable these options in the product table and allow customers filtering the products they’re looking for:

## How Can I Create Category?

The Category option allows you to display products based on their category. You can find and create it under Products> Category.

![width=433](https://woobewoo.com/wp-content/uploads/2020/06/category-new.png)

### Category Filter Settings

**Filter category title** .Display as a default option of dropdown filter category.

**Hide categories from table** .Hide categories column and keep the filter to display. You don’t need to add Categories as a column to make filter available. If you will add Categories as a column manually, it will not be hidden even if “Hide categories from table” is enabled.

**Inner table filter.** Apply filter by category after clicking the category link in the table column.

**Show as:** **dropdown** of **multiselect dropdown** (If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions **Or** or **And**)

**Filter position.**You can select the filter position**Before** or **After**

**Use only some categories** .Show only selected categories in the filter. If you have selected this option you can **Select Categories** to filtering(For ex. Clothing, Hoodies,Poster,etc).

**Include children**.Shows categories designed for children.

**Use as main filter.** Toggle the option if you want the category filter to dynamically affect the content of attribute filters.

**Hide products before filtering**.Hide all the products in the table until a user defines a search parameter or filter.

![Category](https://woobewoo.com/wp-content/uploads/2020/06/product_table_category_filter.png)

## Multiselect for Filters

Try filtering by several parameters at once. Read [this article](https://woobewoo.com/documentation/multiselect-for-filters/) to find out more about it.

---

## Search by Columns

**Source:** [https://woobewoo.com/documentation/search-by-columns/](https://woobewoo.com/documentation/search-by-columns/)

**The WooCommerce Product Table** contains a wide variety of features and options. For example, you can search not only by **Searching** all the properties of the product table, but you can also search by columns.

## Search by Columns

This is a very convenient function, for example, when you are looking for a specific property of a product column that does not fit any of the filters. Use a semicolon as separator for select any of the values.

You can enable this option in the table settings. Click on **Search by Columns**

![Searching](https://woobewoo.com/wp-content/uploads/2020/06/product_table_searching.gif)

If you wish, you can also disable this option in the same way.

You can select whether the search will be at the top or at the bottom of a table in the**Position**dropdown.

The**Use newline as separator**option allows using newline as separator with search by column.

If you enable the**Use newline as separator**option, you can set the number of rows of the search input that will be visible at a time in the Set count of input rows numeric field.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Tag Display and Tag Filter

**Source:** [https://woobewoo.com/documentation/tag-display-and-tag-filter/](https://woobewoo.com/documentation/tag-display-and-tag-filter/)

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) comes with many options to select products that are included or excluded from the table.this tutorial will help you learn how to display tags and use a tag filter.

**Tags** are text labels that will allow online store customers to quickly find all products thematically related to each other.

## How Can I Create Tags?

The Tags option allows you to display products based on their tags. You can find and create it under Products> Tags.

![SHOW](https://woobewoo.com/wp-content/uploads/2020/05/Add-tag.png)

As with categories, you can use a single tag or multiple tags, and also use commas or a plus sign to control logic. The use of commas means “products with this tag OR this tag”, while the use of the plus sign (+) means “products with this tag AND this tag”. You cannot mix and match commas and pluses – you must use one or the other.

![Display](https://woobewoo.com/wp-content/uploads/2020/05/Product-tag.png)

## Tags Filter Settings

**Tags Filter Title.**Display as a default option of dropdown tags filter.

**Hide Searching Tags from Table .**Hide tags column and keep the filter to display. You don’t need to add Tags as a column to make filter available. If you will add Tags as a column manually, it will not be hidden even if “Hide tags from table” is enabled.**

**Show as:** dropdown of multiselect dropdown (If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions Or or And)

**Use only some tags** .Show only selected tags in the filter. If you have selected this option you can **Select Tags** to filtering(For ex. Cotton,Denim,etc).

![Tags](https://woobewoo.com/wp-content/uploads/2020/06/product_table_tags.png)

## Multiselect for Filters

Try filtering by several parameters at once. Read [this article](https://woobewoo.com/documentation/multiselect-for-filters/) to find out more about it.

---

## Price Filter Settings

**Source:** [https://woobewoo.com/documentation/price-filter-settings/](https://woobewoo.com/documentation/price-filter-settings/)

### Price Filter

The Price Filter only works with the included Price Column.

**Price filter title.**Display as a title for a dropdown filter price

**Show as:**You can choose **Dropdown** of **Multiselect Dropdown**

**Set range** . You can choose **Automatically**or **Manually** **:**

- **If you selected Automatically then you can configure the following:**

–**Step** .Here you may set the value of prise increase step. The default value is set to 20. All the steps are equal. When setting the step, please note that the number of elements in the list should not exceed 100, otherwise the step setting will be reset and automatically calculated.

-(**Min price**:___**Max price**:___)

![Price](https://woobewoo.com/wp-content/uploads/2020/05/price-Filter.png)

- **If you selected Manually then you can configure the following:**

–**Setup range.**And just select your ranges

Manualy/Multiple Dropdown Example:

![Multiple](https://woobewoo.com/wp-content/uploads/2020/05/Multople-dropdown.png)

## Multiselect for Filters

Try filtering by several parameters at once. Read [this article](https://woobewoo.com/documentation/multiselect-for-filters/) to find out more about it.

---

## Stock Status Settings

**Source:** [https://woobewoo.com/documentation/stock-status-settings/](https://woobewoo.com/documentation/stock-status-settings/)

The **Stock Status** column will contain either the basic stock status (for example, “In stock” or “Out of stock”) or the exact stock level. This is controlled in the main settings of **WooCommerce – WooCommerce> Settings> Products> Inventory**. On this page you can indicate whether you want to show the general condition of the product or the exact quantity of the product for each product.

## Settings Stock Status Column

![Stock](https://woobewoo.com/wp-content/uploads/2020/06/product_table_stock_settings.png)

**Here you can improve the look of this column for your individual style:**

**Title.**Here you can change the title text of your column ( by default stock status)

**Column width.**This setting sets the maximum width for the column, but the rest of the table content also affects its width – check how it looks on Preview.

You can also **Always Hide** the column and choose how it will be displayed on mobile devices. (**Hide on Small Screen** and **Show Only on Small Screen**)

**Show Icons.**When turned on, the emoticon icon will be displayed

**Show Status Text.**If you wish, you can hide the product status text.

**Show Quanity Items in Stock**.Choose whether to display the exact quantity of goods in stock.

**Max quantity input.** Set the max number of quantity input.

**Color if less than.** Change color if the quantity of products is less than.

**Show variations quantity items in stock.** Check the option to display the variation quantity or leave it empty to hide them.

**Show attribute names for variations quantity.** Enable the option to display the names of the variations.

![Style](https://woobewoo.com/wp-content/uploads/2020/05/Stock-Status-custom.png)

## Hide out of stock items

The presence of products in the table of products that are not available in the store can negatively affect the conversion of your store.

To do this, the plugin provides the **Hide out of stock items** option.

Go to **Settings-> Features** and enable the option if you do not want to display products that are not in stock in the store in the table.

![Hide](https://woobewoo.com/wp-content/uploads/2020/06/Hide-out-of-stock-items.png)

If you scroll down to the **Overwrite Table Text** section, you can change the out-of-stock text to your custom one e.g. On the way, etc.

![Stock](https://woobewoo.com/wp-content/uploads/2020/06/product_table_stock_status.png)

## How to change the stock status of the product?

You can do this in the product settings in the Inventory section.

The inventory section gives you the ability to manage stocks individually and determine whether to allow reverse orders and more. It allows you to sell products, and customers add them to the cart for purchase.

You can select “Enable Product Level Inventory Management” in the goods inventory settings. If you do not select then in the “Inventory” section only the “Inventory Management” option will be displayed.

When inventory management at the product level is disabled, you must manually update the Balance Status.

![Management](https://woobewoo.com/wp-content/uploads/2020/05/Stock-Status.png)

If Stock Management at the Product level is turned on, the following options are available: enter the quantity of inventory, after which WooCommerce will automatically manage inventory and update inventory status: is in stock, is out of stock, or is pre-order of goods. Choose whether to enable pre-order.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Borders

**Source:** [https://woobewoo.com/documentation/borders-row-striping/](https://woobewoo.com/documentation/borders-row-striping/)

With**WooCommerce Product Table,** the process of creating product tables becomes very simple and requires no special skills. This tutorial will help you make your table more attractive with Borders & Row Striping.

## Borders

You can set the **Borders** settings in the Product Table in “Settings-> Appearance”:

- **None**.You may not display the borders of the product table
- **Cell** . Adds border around all four sides of each cell.

![customize](https://woobewoo.com/wp-content/uploads/2020/05/Borders-cell.png)

- **Row** – adds border only over and under each row. (i.e. only for the rows).

![Setting](https://woobewoo.com/wp-content/uploads/2020/05/Borders-rows.png)

## How Else Can I Highlight my Product Table?

Yes! You can enable selection when you hover and make viewing the table more convenient. And also enable the option when the currently sorted column is highlighted

Read this [Highlight](https://woobewoo.com/documentation/highlighting/) tutorial to learn more.

## Can I Color my Product Table?

Of course! Thanks to our Pro version, you can create adaptive Product Sheets for selected items automatically, without any special skills, and give your stores the best styles.

Check out our **Custom Table Styles and Design**tutorial to learn more about it.

Have questions or have a suggestion about Borders & Row Striping ?**Contact us**and we will be happy to help you.

---

## Highlighting

**Source:** [https://woobewoo.com/documentation/highlighting/](https://woobewoo.com/documentation/highlighting/)

This tutorial will help you easily make your table more stylish and attractive for your clients. It would seem like an almost imperceptible action, but visually it will be very cool and comfortable to look.

### Highlighting by Mousehover

![Highlighting-by-Mousehover](https://woobewoo.com/wp-content/uploads/2020/05/HIghlight.png)

A simple feature [Woocommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) that adds a highlighting effect to the rows you hover over. This option is great for digesting any product that your customers will see. Simply click on the Highlighting by Mousehover  icon(settings->appearance)**,** press the hook and watch your text come to life as you follow along with your mouse:

![Highlighting-by-Mousehover](https://i.gyazo.com/86cf4eba34658973c23ac4ecfc06fedb.gif)

### Highlight  Sorted Column.

![Highlight-Sorted-Column](https://woobewoo.com/wp-content/uploads/2020/05/sorted-columns.png)

Highlighting the Sorted column will allow your eyes to more easily track the text on the screen, and focus your attention on the column you need. Just click on the Highlight Sorted Column icon (settings-> appearance) and click on the hook and you will see how your sorted column is highlighted:

![Highlight-Sorted-Column](https://i.gyazo.com/1c77fa6d49a21ad1a90b89bb24a116f8.gif)

***Only works with sorting enabled**

## Row Striping

**Row Striping.**You can add automatic highlight for table odd rows.

For example – you use a table, but the table’s rows are difficult to separate visually, especially when there are many columns (or multiple lines to a row) – add row striping to a table, it will display rows background in two similar shades of colour to alternately.

![Setting](https://woobewoo.com/wp-content/uploads/2018/10/Row-Striping.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Multiselect for Filters

**Source:** [https://woobewoo.com/documentation/multiselect-for-filters/](https://woobewoo.com/documentation/multiselect-for-filters/)

## Filters in the WooCommerce Product Table

The WooCommerce Product Table plugin fully supports product attributes, tags, and categories. You can display them as a separate column in the product table.

But most importantly, Product Table has built-in filters for categories, tags, attributes, custom taxonomy and prices, which can be added as a drop-down menu above the table and use to Multiselect  for Filters  option.

You can enable these options in the product table and let customers filter the products they are looking for.

The advantage of the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) in the existence of the **Multiselect  for Filters**  **option**– with it, you can filter by several parameters at the same time.

![Multiselect](https://woobewoo.com/wp-content/uploads/2018/09/filters-for-woocommerce-products-1.jpg)

## How to Use Filters in The WooCommerce Product Table?

**Settings for Available Filters   in Product Tables:**

### Attribute Filter

**Attribute filter title.**Set it if you want to replace titles for all filtered attributes.

**Select attributes.** Select attributes to filtering.(For ex. Color,Materials,Size,etc)**

**Hide searching attributes from table .**Hide attribute column(s) and keep the filter to display. You don’t need to add attributes as a column to make filters available. Selected filters will be displayed. If you will add some attribute as a column manually, it will not be hidden even if “Hide searching attributes from a table” is enabled.**

**Show as:** dropdown of multiselect dropdown:

- If you have chosen Dropdown  you can enable**Search for a specific attribute.**Finds all products where the attribute exactly matches the search criteria.
- If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions Or or And
- **Search for a specific attribute.**Toggle the option to find all products where the attribute exactly matches the search criteria.
- **Custom order for terms.**The option determined whether to sort attribute terms by Woocommerce custom sorting.

If you want to learn more about attributes, see[this article](https://woobewoo.com/documentation/product-attribute-and-category-filters/).

![Attributes](https://woobewoo.com/wp-content/uploads/2020/06/product_table_attribute_filter.png)

### Tags Filter

**Tags Filter Title.**Display as a default option of dropdown tags filter.

**Hide Searching Tags from Table .**Hide tags column and keep the filter to display. You don’t need to add Tags as a column to make filter available. If you will add Tags as a column manually, it will not be hidden even if “Hide tags from table” is enabled.**

**Show as:** dropdown of multiselect dropdown (If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions Or or And)

**Use only some tags** .Show only selected tags in the filter. If you have selected this option you can **Select Tags** to filtering(For ex. Cotton,Denim,etc).

![Tags](https://woobewoo.com/wp-content/uploads/2020/06/product_table_tags_filter.png)

### Custom Taxonomy Filter

**Custom taxonomies filter title.** Set it if you want to replace titles for all custom taxonomies.

**Select taxonomies** . Select custom taxonomies to filtering**

**Hide searching attributes from table.**Hide custom taxonomies column(s) and keep the filter to display. You don’t need to add custom taxonomies as a column to make filters available. Selected filters will be displayed. If you will add some custom taxonomies as a column manually, it will not be hidden even if “Hide searching custom taxonomies from a table” is enabled.

**Show as:** dropdown of multiselect dropdown (If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions Or or And)

In order to [add the Custom taxonomy](https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/) filter,  move to the Settings -> Features -> and enable Taxonomy filter. Select the terms and Save the settings.

![Multiselect](https://woobewoo.com/wp-content/uploads/2018/06/Custom-taxonomy-filter.gif)

### Price Filter

The Price Filter only works with the included Price Column.

**Price filter title.**Display as a title for a dropdown filter price

**Show as:**You can choose **Dropdown** of **Multiselect Dropdown**

**Set range** . You can choose **Automatically**or **Manually** **:**

- **If you selected Automatically then you can configure the following:**

–**Step** .Here you may set the value of prise increase step. The default value is set to 20. All the steps are equal. When setting the step, please note that the number of elements in the list should not exceed 100, otherwise the step setting will be reset and automatically calculated.

-(**Min price**:___**Max price**:___)

- **If you selected Manually then you can configure the following:**

–**Setup range.**And just select your ranges

![Multiselect](https://woobewoo.com/wp-content/uploads/2020/05/Price-Filter.gif)

### Category Filter

**Filter category title** .Display as a default option of dropdown filter category.

**Hide categories from table** .Hide categories column and keep the filter to display. You don’t need to add Categories as a column to make filter available. If you will add Categories as a column manually, it will not be hidden even if “Hide categories from table” is enabled.

**Show as:** **dropdown** of **multiselect dropdown** (If you have chosen   Multiselect Dropdownyou can enable**Logic.**Select the filtering conditions **Or** or **And**)

**Inner table filter.**Apply filter by category after clicking the category link in the table column.

**Filter position.**You can select the filter position**Before** or **After**

**Use only some categories** .Show only selected categories in the filter. If you have selected this option you can **Select Categories** to filtering(For ex. Clothing, Hoodies,Poster,etc).

**Use as main filter.** Toggle the option if you want the category filter to dynamically affect the content of attribute filters.

**Include children**.Shows categories designed for children.

**Hide products before filtering**.Hide all the products in the table until a user defines a search parameter or filter.

![Multiselect](https://woobewoo.com/wp-content/uploads/2020/05/Categories-filter.png)

## Try Multiselect for filters  in the Product Table

With the [WooCommerce Product Table plugin](https://woobewoo.com/plugins/table-woocommerce-plugin/), you can use this option which allows you to filter by S**everal Parameters at the Same time**.

Set the parameters you are interested in and find exactly what you need!

Try option Multiselect for filters in this example Product Table:

[wtbp-table-press id=34]

Still have some questions about Multiselect for Filters?[Contact us](https://woobewoo.com/contact-us/) and ask about it.

---

## Table Elements

**Source:** [https://woobewoo.com/documentation/table-elements/](https://woobewoo.com/documentation/table-elements/)

## Why is it Important to Consider Every Little Thing When Creating a Product Table?

The look of your table is the very product label on which the first impression of the store and its products appears. The best way to make a first impression is to use the Table Elements and the [Table Style](https://woobewoo.com/documentation/custom-table-styles-and-design/). High-quality packaging allows you to win and maintain customer confidence, turn it from a one-time buyer to a regular one.
With the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/), you can improve every element of your table.

## Customizing Table Elements

You can improve the elements of the Product Table in Settings-> General:

**Caption**. Check here if you want to show the name of the table above the table.**
**Description** .You can add short description to the table between title and table.**
**Header** .Check here if you want to show the table head**
**Fixed Header** .Allows to fix the table\’s header during table scrolling. Important! Header option must be enabled for using this feature.**
Footer .Check here if you want to show the table footer**
Signature .You can add signature under table footer.**
![Table](https://woobewoo.com/wp-content/uploads/2020/05/Table-Element.png)

## Can I Colorize my Table Elements?

Of course! Thanks to our Pro version, you can create adaptive Product Sheets for selected items automatically, without any special skills, and give your stores the best styles.

Check out our [Custom Table Styles and Design](https://woobewoo.com/documentation/custom-table-styles-and-design/) tutorial to learn more about it.

Have questions or have a suggestion? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## Custom Table Styles and Design

**Source:** [https://woobewoo.com/documentation/custom-table-styles-and-design/](https://woobewoo.com/documentation/custom-table-styles-and-design/)

![Custom](https://woobewoo.com/wp-content/uploads/2020/05/Wow.png)

Using Custom Table Styles and Design by[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) you have all the necessary options in one plugin.

You can create responsive Product Tables of the selected items automatically without any special skills and give your stores the finest styles.

#### All the settings to improve the look of the table you can find in the Appearance Tab.

- Here you can set the**fixed table width**in PX or %.
- Select the [Thumbnail Size](https://woobewoo.com/documentation/thumbnail-size/) to display in the interface.
- Manage **width to hide columns on the mobile screens** and set which columns should be hidden on the Content tab in the column options and set the width of the column.
- Choose **Table loader**.
- Use **Higlighting**

Choose a **Responsive Mode for a table.** WooCommerce Tables are fully responsive and provide 4 different modes of Responsive design according to your needs: standard, automatic column hiding, horizontal scroll,  and disabled responsivity.

## Table Styling (Pro)

Thanks to Table Styling mode options (pro) you can give your table an individual and unique style.

Choose your custom table styles below. Any settings you leave blank will default to your theme styles.

## Borders:

- **Borders external.**
- **Borders header.**
- **Borders rows.**
- **Borders columns.**

![Style](https://woobewoo.com/wp-content/uploads/2020/05/Borders-Design.png)

## Header:

Set the colour and width for a header. These settings apply to a header, footer and “search by columns” field.

Here you also can set the text style.

- **Header background**
- **Header Font.**
- **Horizontal alignment for header.**Here you can set horizontal alignment of table header contents.**(None/Left/Center/Rigth)**

![Design](https://woobewoo.com/wp-content/uploads/2020/05/Header-Design.png)

# Cell:

Set the text color and cell width.

Here you can set the text style. And also set the horizontal alignment of the contents of the table cell.**(None/Left/Center/Rigth)**

- **Cell background**
- **Cell font**

![Design](https://woobewoo.com/wp-content/uploads/2020/05/Cell-design.png)

- **Search Bar Colors. Here you are able to set the colour of Background, Font and Border:**

![Design](https://woobewoo.com/wp-content/uploads/2020/05/Search-Bar-Color.png)
- **Fixed Layout.** Here you can set **all columns** of the same width.
- **Vertical alignment .**Set vertical alignment of table cell contents**(None/Top/Middle/Bottom)**

![Styilish](https://woobewoo.com/wp-content/uploads/2020/05/Vertical-alignment-1.png)

- **Pagination Position.**Set horizontal pagination buttons position.**(None/Left/Center/Rigth)**

![Table](https://woobewoo.com/wp-content/uploads/2020/05/position-pagination.png)

## Buy Button Styling

Choose your custom styles for button Add to cart. Any settings you leave blank will default.

Read this  tutorial to learn more: [Buy Button Styling](https://woobewoo.com/documentation/buy-button-design/)

![design](https://woobewoo.com/wp-content/uploads/2018/06/buy-button-design.png)

## View Cart Button Styling

Under the **Buy Button Styling** section, there are also settings for the **View Cart** button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart_style.png)

Toggle the corresponding option to change the text and color of the button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart.gif)

## CSS in Product Table

Change and customize product table styles in WooCommerce from WooBeWoo. Read this CSS tutorial to learn more: **How to Configure CSS** for Product Table?

## Custom Table Styles and Design for Successful Sale

Enhance the look of your spreadsheets with many stylish editable options on the Product Table.

And remember that the first step to a **Successful Sale** is the presentable appearance of the product and its correct presentation to the potential buyer.

Still have questions? Please [contact us](http://Https:)and we will be happy to help you.

---

## Column Widths

**Source:** [https://woobewoo.com/documentation/product-table-column-widths/](https://woobewoo.com/documentation/product-table-column-widths/)

## Product Table Column Widths

This tutorial will help you learn all about the  settings of the **Product Table Column**Width. And answer frequently asked questions.

**The WooCommerce Product Table** will automatically determine the size of your columns for best fit. You can override this behavior and control the width of the columns manually.

This is a way to increase or decrease the space for specific columns in a table. .

## Settings Column Widths

**Customize Column Width:** After you have selected and added columns to the table. You can click on the “Pencil” icon to edit the properties of the column.

To use the width parameter of a specific column, you need and change the Column Width to the size you need.

This parameter sets the maximum width of the column.But the rest of the contents of the table also affects its width – check how it looks in preview mode.

![Settings](https://woobewoo.com/wp-content/uploads/2020/06/Column-Width.png)

## Can I Set All Columns to the Same Width?

Of course ! Our Pro version supports this feature.

Turn on **Table Style** (settings-> appearance) and turn on the hook Fixed Layout

![Product](https://woobewoo.com/wp-content/uploads/2020/05/FIxed-Layout.png)

## How do Columns Respond to Responsive Mode Changes?

**Standard Responsive mode** – in this mode if table content doesn\’t fit all **columns** become under each other with one cell per row.

**Automatic column hiding** – in this mode table **columns** will collapse from right to left if content does not fit to parent container width.

**Horizontal scroll** –  in this mode scroll bar will be added if table overflows parent container width.

**Disable Responsivity** – default table fluid layout.

## The Width Option does not Work!

If the Widths option does not work, you may have set the width too narrow and the content will no longer fit in the column. Instead of letting it look spoiled, the plugin will make the width wider to keep the content consistent. Try increasing the width of the affected columns.

## I Have Several Tables on One Page, and the Column Widths are Different in Each Table

Column widths are calculated automatically based on information about each product in the current table. If you have more than one table per page, you can use the widths option (above) so that the width of the columns is the same for each table.

## The Width of my Column Changes When Going from One Page to Another or When Using Filters

This can happen if the contents of the column contain a different number of characters for each product. The width of each column of the table is calculated based on the current products on this page of the table, so this can change when you filter or go from one page to another.You can use the widths option (above) so that the columns are always the same width.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Text Overwriting

**Source:** [https://woobewoo.com/documentation/text-overwriting/](https://woobewoo.com/documentation/text-overwriting/)

Using the **WooCommerce Product Table,** you have all the necessary options in one plugin. Use the **Text Overwriting** option and give your table a beautiful and convenient look.

In the settings section **Language and Text** you can rewrite the text of almost any element of the table.

## Settings of Service Text in Your Table

Here you can change the settings of service text in your table:

- **Multiple add selected to cart button text** – set the text that your users will see when you enable a “Multiple add to cart” option.

![Add](https://woobewoo.com/wp-content/uploads/2020/05/Add-to-cart.png)

- **Empty table** – set the text that your users will see if the table has no data.

![empty](https://woobewoo.com/wp-content/uploads/2020/05/Empty-table.png)

- **Table info text** – the text that users will see in the left bottom corner under your table (Pagination  enabled)

![Table-into-tex](https://woobewoo.com/wp-content/uploads/2020/05/Table-into-text.png)

- **Empty info text** – set the text that users will see in the left bottom corner under your table if it is empty (pagination should be enabled).
- **Filtered info text** – set the text for filtering.

![Filtered](https://woobewoo.com/wp-content/uploads/2020/05/Filtered-info-texx.png)
- **Length text** – the text that users will see in the left top corner above your table ( if pagination is enabled)

![Lengh](https://woobewoo.com/wp-content/uploads/2020/05/Leight.png)

- **Search label** – rename the label for searching on your own taste.

![Search](https://woobewoo.com/wp-content/uploads/2020/05/Search-Label.png)

- **Zero records** – input the text for users, if no matching data were found during their search

![ZERO](https://woobewoo.com/wp-content/uploads/2020/05/ZERO-PRODUCT.png)

- **Filer text** – set the text that users will see before the filter dropdown

![Filter](https://woobewoo.com/wp-content/uploads/2020/05/Filter-text.png)

- **Reset text** – input the text for Reset icon is you using the filters.

![Reset](https://woobewoo.com/wp-content/uploads/2020/05/Reset-text.png)

- Stock quantity items text.You can add your text to stock quantity
- Specify the text that your users will see on the **Previous page (Pagination)** and **Next page (Pagination)**

![Text](https://woobewoo.com/wp-content/uploads/2020/05/Pagination.png)

## Preview

After you change some settings – with responsive data tables plugin, you can immediately see the result – open the “Preview” tab and check the table. Note that the table may have minor changes depending on the style that your theme has.

Still have some questions about Text Overwriting?**Contact us**and ask about it.

---

## Product Table on Mobile Devices

**Source:** [https://woobewoo.com/documentation/product-table-on-mobile-devices/](https://woobewoo.com/documentation/product-table-on-mobile-devices/)

## Mobile Visibility

The**WooCommerce Product Table**comes with several options for controlling the behavior of tables on screens of different sizes, such as on mobile devices and tablets.You can easily choose between display modes on gadget screens. And also choose the width of the screen to hide the columns.

## Responsive Design

Responsive design is the practice of designing a table so that it looks and works correctly on various devices – in particular, on mobile phones and tablets, as well as on desktop computers and laptops. WooCommerce spreadsheets are fully responsive and look great on any device.

**The plugin provides 4 different modes of Responsive Design according to your needs:**

- **Responsive Mode**

In this mode, if table content doesn’t fit all columns become under each other with one cell per row.

![responsive](https://i.gyazo.com/0d51e8e53e40862ee3aae9221b67543b.gif)

If this mode is selected you can configure the **Hide child action** option. Set behavior for hide responsive child columns: **First column click;****Additional table column click;****Disable hide child behavior.**

![responsive](https://woobewoo.com/wp-content/uploads/2020/06/responsive.gif)

- **Automatic Column Hiding**

In this mode, table columns will collapse from right to left to parent container width.

![automatic](https://i.gyazo.com/66c050ce20d3b563d78790a68e66ee15.gif)

- **Horizontal scroll**

In this mode, the scroll bar will be added if the table overflows parent container width. You can change the horizontal scrollbar position – display it in header, footer or both.

![Horizontal](https://i.gyazo.com/c23dd880a587842f19513ca8eaafea32.gif)

If this is selected you can select the **position of the scrollbar**:**Footer; Header ;Footer and Header.**

- **Disable Responsivity**

Disable Responsivity – default table layout.

Here you can look at [the examples of product tables](https://woobewoo.com/use-cases/)which has been built using **WooCommerce Tables by Woobewoo.**

- **Force responsive mod.**Force enable responsive mod for automatic column hiding.

## Responsive mod Thumnbnail Size

You can also set the thumnbnail size while in responsive mode.

To do this, open the **Thumbnail column settings** and in the **Responsive mod thumnbnail size** field, set the value you need.( by default 150×150)

![Responsive](https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_275/https://wpwhale.com/wbwlive/wp-content/uploads/2020/05/Size.png)

## Can I hide the column for small screens?

Yes! You can enable **“Hide / Show on Small Screens**” if you want to hide this column. Just click on the “pencil” and adjust the visibility of each column on small screens.

![column-settings-for-responsive-mode](https://woobewoo.com/wp-content/uploads/2018/06/column-settings-for-responsive-mode.png)

Screen size that you can set on**the Appearance tab** Select the screen width to hide the columns.

![Mobile](https://woobewoo.com/wp-content/uploads/2020/05/Mobile-screen-width.png)

Our **WooCommerce Product Table** plugin is as adaptive as possible to any devices. User-friendly interface and stylish design for you and your customers

Still have some questions about Woo Product Table on mobile screen?**Contact us** and ask about it.

---

## Product Description Length

**Source:** [https://woobewoo.com/documentation/product-description-length/](https://woobewoo.com/documentation/product-description-length/)

In the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/), product descriptions will be displayed in the Summary and Short Description columns.

You can change the length of the description shown in the table. And also determine how many characters will be displayed in the product table.

## How to set the product description length?

And so, after since you added the Summary Column to the table. You can change the number of characters that you want to display in the product description.

By default, in the Summary column, a full description will be truncated to 100 characters.

In order to change this value, click on Pencil.

![Fescription](https://woobewoo.com/wp-content/uploads/2020/05/Description-leigth.png)

- Enter the number of characters in the**Cut description text** column to which you want to trim the description in the product table.
- Add a checkmark to **Description popup** .And a popup will open when you click on a description with a full description of the product on it.

![summary](https://woobewoo.com/wp-content/uploads/2020/05/Summary.gif)

- Uncheck **Cut description text** if you do not want to trim your description. (caution, if the description is too long, it may lead to slow loading)

## Can I change the length of the short description?

Of course ! You can do this in a similar way. Turn **Cut short description text** on or off. You can also set the length to which the description will be trimmed.

![Short](https://woobewoo.com/wp-content/uploads/2020/05/short-description-leigth.png)

With our wide table settings, you can choose your ideal look for your product table

Still have some questions about Product Description Length? Contact us and ask about it.

---

## Product Table Columns

**Source:** [https://woobewoo.com/documentation/product-table-columns/](https://woobewoo.com/documentation/product-table-columns/)

**Product table**allows you to build a table according to your needs.

Our WooCommerce Product Table plugin lists your products in a table with columns of information about each product. You can use the columns option to choose which columns to include in the table.

## Available Columns

The plugin fully supports:

![woocommerce-product-table-content](https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300/https://wpwhale.com/wbwlive/wp-content/uploads/2018/06/image4-1-300x176.jpg)

1. Thumbnails
2. Name
3. Featured
4. SKU
5. Categories
6. Attributes
7. Summary
8. Rating
9. Stock status
10. Date
11. Price
12. Buy
13. Short description
14. Sales
15. Downloads
16. Sale Price dates
17. Product link
18. Tags
19. Custom fields
20. Weight
21. Dimensions

****and you can display each type as a separate column in the product table.

### You Can Select Any Number of Columns in Any Order.

- The **S****ku** and **N****ame** columns are self-explanatory
- The**Summary**the column will show the full description of the product displayed on the Summary tab of the product page.          The description is truncated to 100 characters, but you can customize it using the column settings-> Cut description text    (Select**Description popup** and a popup will open when you click on a description with a full description of the product on it.)

![Column](https://woobewoo.com/wp-content/uploads/2020/05/summary-1.png)

- The **Short-description** column displays a brief description of the product entered on the product edit screen. It is usually displayed on the page of your product immediately before the price and add a button to the basket
- The **Date** column will display the date the product was added to your store (i.e. when it was published)
- The**Categories** and**Tags** columns display the list of categories/tags that the product is in. You can use the links option to control whether or not these columns will link to the relevant category or tag. If search on this column is enabled then clicking on the category or tag in the table will filter the table to products in that category/tag.
- The **Thumbnails** column will display the main product image (see the [Thumbnails_size](https://woobewoo.com/documentation/thumbnail-size/) option below to set a custom size).
- The **Rating** column will display the average star rating out of 5 for each product, based on previous customer reviews.
- The **Price** column will display the current product price. If there are variations for the product then the price is displayed as a range – e.g. “$2.99 – 5.99”. If the product is currently on sale, then the sale price is shown with the original price crossed out next to it.
- The **Buy** column will display the Add to cart button for that product,If the product is in stock. You can also show attribute variations.You can also [customize the style of the Buy button](https://woobewoo.com/documentation/buy-button-design/).
- The**Product link** column will display a button by default More in the table which links to the product detail page. You can change its text to any other
- The **Sales**column. WooCommerce has a custom Sales field that stores the total number of sales for each product.
- The **Sale Price dates**column. This column will show the dates of the sale price for a particular product.

![select](https://woobewoo.com/wp-content/uploads/2020/05/any-text.png)

- The **Downloads** column displays Downloadable products, which give access to a file upon purchase.
- The **Featured**column of particulars shows exactly the particular product.
- The **Weight**column allows showing the weight of the products.
- The **Dimensions** column allows displaying the dimension of the items sold.

## The Attributes Column

You can display any product attribute as a separate column in the table, for example, Color or Materials.

![Attribute](https://woobewoo.com/wp-content/uploads/2020/05/attribute.png)

**Should I use global or product specific attributes?**

We recommend adding your attributes globally under Products → Attributes, and then selecting them for each product. This is because global attributes are easier to use for multiple products, and drop-down filter lists can only be used for global attributes.You can see our documentation to learn [how to create an attribute.](https://woobewoo.com/documentation/product-attribute-and-category-filters/)

If you want to display a custom product attribute (i.e., an attribute added for only one product), use the attribute name that you entered on the Attributes tab for that product. You can display this as a column in the product table, and (if you are not using lazy loading), customers can click on the column heading to sort by that column.

## Custom Column Fields

You can also add custom fields to the table . This is a good way to store additional data in custom columns in the product table.

Custom fields are the ability to include other types of content in a table. You can use them to store various data, such as links, buttons, icons and shortcodes from other plugins. You will need to add the full HTML code or shortcode to the custom field so that the product table displays it correctly.

Tip: If you have not yet created your custom fields, we recommend that you study our article: [How to add custom fields to the table](https://woobewoo.com/documentation/how-to-add-custom-fields-to-the-table/)? (With Advanced custom fields ). If you use Advanced Custom Fields, the field name can be found in the Field Name column of the Custom Fields menu.

## Custom Taxonomy Columns

Using taxonomies, you can store and display additional product data. Thus, they are designed to store reusable information that can be used to group and filter products.

If you create the Product table, all taxonomies created will be displayed in the list of available columns and marked in yellow.

Select Taxonomy, add a column and add products according to the taxonomy.

Check out our article [How to add custom taxonomy](https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/)

![Taxonomy](https://i.gyazo.com/e58c4dbe7726bafdf255d4dced584557.png)

## Stock Status Column

The stock column will contain either the basic stock status (for example, “In stock” or “Out of stock”) or the exact stock level. This is controlled in the main settings of WooCommerce – WooCommerce> Settings> Products> Inventory. On this page you can indicate whether you want to show the general condition of the product or the exact quantity of the product for each product.

## How to Display Sales of the Products?  Sales Column

[WooCommerce Product Table](https://woobewoo.com/wp-admin/admin.php?page=wtbp-table-press) gives an option to display all necessary information about the products in columns. One of them is a SALES column.

If you add it to the table you actually can show the customers how many times the product has been sold.  This data is base on WooCommerce Report – Sales by-product and provides information about total sales for all period.

Add a sales column and as a result, a table with a sales presentation is ready

![ALL](https://woobewoo.com/wp-content/uploads/2020/05/SALES.png)

## How to Display the Sale Price?

By default, the selling price of your WooCommerce products will be displayed in the main “price” column. But you can to make a sale price. Products-> Edit  and set the Sale Price

Use along with the **Sale Price dates column**. This column will show the dates of the sale price for a particular product. Use this to limit the period of the sale price, motivating your customers to buy here and now!

![Sale](https://woobewoo.com/wp-content/uploads/2020/05/data-sales-1.png)

## Select Custom Column Headers

You can add your own headings for any column in the table. If you don’t install it, the default title will be used. To create a title, click on the “pencil” and enter your title. An example of using a custom column header:

![Custom](https://woobewoo.com/wp-content/uploads/2020/05/Example-Header-1.png)*Please note that column names are case sensitive and should always be lower case.

## How to Hide a Column

You can easily hide the columns, just click on the icon trash columns in the table. This will remove the column from the table.

If you want to hide the column only on certain devices, click on the pencil and select Hide on small screen or Show only on small screen

![How](https://woobewoo.com/wp-content/uploads/2018/06/mobile-settings-for-columns.png)

### If you want to know more about column settings, check out our article “Table Content Settings”

---

## Print Button

**Source:** [https://woobewoo.com/documentation/print-button/](https://woobewoo.com/documentation/print-button/)

## Why do I Need a Print Button?

Most WooCommerce websites accept orders online! However, I fully understand that everyone uses WooCommerce in different ways. There are many good reasons why you might want to list products on your website, allowing customers to print an order form and fill it out with good old pen and paper. They can send it to you by mail, fax, as they like.

## How to Add a Print Button?

**Woocommerce Product Plugin**offers a convenient interface for customization:

**-Settings -> Appearance** and put the hook **PRINT**

The table will now display the **Print button**.

Logo print. Select this option if you want your website users to be able to print the product table along with your website logo.

Also select Print captions to Print table caption, description and signature.

![Print](https://woobewoo.com/wp-content/uploads/2020/06/Print-Button.png)

After your customers click on the **Print** button, they will see their print option in a new window. They will only have to choose a printer.

![print](https://woobewoo.com/wp-content/uploads/2020/05/%D0%BF%D1%80%D0%B8%D0%BD%D1%822.png)

Also, you can save your table as **PDF**file by choosing to save as pdf at the new window in destination settings.

![Save](https://woobewoo.com/wp-content/uploads/2018/06/Save-as-pdf-1.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Table Loader

**Source:** [https://woobewoo.com/documentation/table-loader/](https://woobewoo.com/documentation/table-loader/)

### What is a Table Loader?

**Table Loader** is a loading indicator that helps the user understand the loading position at any given time, especially when the system is working on a task.Users want to have control over the system they use.

The progress indicator of the task is one of the most popular forms of providing system status for the user.

Immediate response is undoubtedly the best option for any application, but situations where it is not feasible are often possible. (Slow operation of the system may be due to a weak Internet connection, or the operation itself can be complex and take a long time.)

In such cases, in order to reduce user stress, you must confirm to the user that the system is busy working on his task and that there is real progress.

This is a kind of simple but very necessary thing.

### Table Loader

Creative progress indicators can smooth out negative expectations. If the application offers the user something interesting during the download, this allows you to distract him from the fact of expectation.

The**Table Loader** from the WooCommerce Product Table is provided by default. But if you want, then you can hide it,

**-Settings -> Appearance** and put the hook “**Hide table loader**”

![width=224](https://woobewoo.com/wp-content/uploads/2020/06/Loader.png)

Also here you can **Choose Icon Table Loader** and  **Table Loader Color**.

![width=891](https://woobewoo.com/wp-content/uploads/2020/06/Loader-Gif.gif)

## Can I Add a Custom Icon?

Unfortunately no, you can choose from the list any loader that you like. But if you would like to see this option in the **WooCommerce Product Table,** then please **contact us**for an offer.

With the **WooCommerce Product Table**, you get a user-friendly design that meets any of your requirements. Your sales will be more successful and your customers the happiest.

---

## Pagination

**Source:** [https://woobewoo.com/documentation/pagination-2/](https://woobewoo.com/documentation/pagination-2/)

## What is Pagination?

This is a must for every large site. How many products can be on a large web resource? Tens, hundreds, thousands … It’s very difficult for the user to navigate in such a number of pages. And here you can’t do without pagination.

## It Solves Several Problems:

- Speeds up page loading. An endless web page is technically possible, but in practice it will load for a very long time, checking the user’s patience for strength.
- Makes browsing and searching for the necessary elements easier and more convenient;
- Gives the site design a neat and finished look.
- Pagination allows you to find the information you need on the site quickly and comfortably.

Therefore, users of the **WooCommerce Product Table**like this mechanism.

## Pagination  in the Product Table

Firstly, open  -Settings-> Features  :

![Pagination](https://woobewoo.com/wp-content/uploads/2020/06/product_table_pagination.png)

- **Pagination** to show the pagination in the table.
- Turn **Pagination menu**  if you want to show a drop-down list to select the number of products per page to display.

If the Pagination menu is enabled, in the contents of the Pagination list you can specify the number of lines displayed on one Pagination page. Set multiple numbers separated by commas so that users can select them in person. The first number will be displayed by default. After that, the number of pagination pages will also be recounted.
- **Products per Page**. (If the Pagination Menu is disabled) By default, one page consists of 10 products.But you can change this by setting the values in the Products per Page**.** Here you can specify the number of products displayed on one page.
- Toggle the ******Scroll to top on pagination** option to scroll the page to the top when pagination is used.
- **Server-side processing** – this option is recommended for large tables that cannot be processed in the usual way. The table will be loaded ajax sequentially for each page, all filtering, ordering and search conditions are also implemented on the server side.

An example of using pagination options:

[wtbp-table-press id=35]

## Can I Set the Location of the Pagination Buttons?

Of course ! By default, the Pagination Buttons are located on the right, but you can easily set the horizontal position of the pagination buttons. :

1) Turn on “Table Style” (Settings-> Appearance)

2) And select**“Pagination Position”** to the position you like. (none;left;center;rigth)

Example Pagination Positions on the Left:

![Example](https://woobewoo.com/wp-content/uploads/2020/05/position-pagination.png)

### If Products per Page is not Displayed ?

Most likely you have the Pagination Menu turned on. Turn it off and you can specify the number of products displayed on one page.

### Can I Display the Page Numbers Above the Product Table?

Unfortunately,  at the moment you can only display the position of the page number buttons below the product table (see above). But anyway if you would like to see such an option in the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) please [contact us](https://woobewoo.com/contact-us/) for an offer.

---

## 3. WooCommerce Product Table – Full list of options

**Source:** [https://woobewoo.com/documentation/woocommerce-product-table-full-list-of-options/](https://woobewoo.com/documentation/woocommerce-product-table-full-list-of-options/)

This is a Full list of features available in the **WooCommerce Product Table**, with links to complete instructions for each option.

**WooCommerce Product Table**is a plugin that will help you list your products correctly. An adaptive and effective table of selected products will be created automatically according to your requirements. Add signature, sorting, searching, pagination, and other functions to the product table with one click.

This tutorial will help you find and understand each of our options, follow the link in the name of the option to learn more about it.

## • Online Table Builder

With live builder, every step is very simple and takes just a minute!

• Adding products is possible in a couple of clicks.

• Easily add products automatically by category multiselection – just choose categories from the drop-down list

• Add the Product Table Features

Take control of your product page, using:

table information (searching, sorting, pagination, print button, multiple and all add to cart, filters)

## • Auto and Fixed Column Width

The WooCommerce product table will automatically determine the size of your columns for best fit.

Also, you can override this behavior and control

This is a way to increase or decrease the space for specific columns in a table. For example, some people believe that the parameters, the quantity selection button, and the add to cart button are displayed vertically in table one above the other. You can combine them into one row using the width parameter to increase the size of the added column to the cart.

## • Mobile Screen Width

The plugin comes with several options for controlling the behavior of tables on screens of different sizes, for example on mobile devices and tablets.

The parameters are individually controlled in the shortcode for each product table and are not displayed on the plugin settings page.

Width control, which allows you to hide columns on screens of mobile devices and specify which columns should be hidden on the content tab in the column settings.

## • Columns Customization

After you have selected and added columns to the table, you can click on the “Pencil” icon to edit the column properties.

All columns have similar settings, some of them have additional properties.

Set the width, hide columns, choose the adaptation of columns to mobile devices, and more.

## • Borders and Row Striping

Our plugin is fully customizable to your individual style.

You can set and change the boundaries.

Also, enable line rotations and fully customize them

For example – you use a table, but the table’s rows are difficult to separate visually, especially when there are many columns (or multiple lines to a row) – add row striping to a table, it will display rows background in two similar shades of color to alternately.

## • Table Elements

The appearance of your table is the very label on which the first impression of the store and its products appears. The best way to make a first impression is to use Table Elements and Table Style. High-quality packaging allows you to gain and maintain customer confidence by turning it from a one-time buyer to a regular one.

With the WooCommerce Product Table, you can improve every element of your table.

## • Variation Dropdown

The WooCommerce Product Table plugin fully supports variable products. The options can be displayed in the form of drop-down lists along with filters for attributes and categories. This makes the selection of the necessary products incredibly flexible and fast.

The plugin also comes with options such as displaying product thumbnails according to variation. The option “Show thumbnails of options” allows users to exchange different images and see different images of a product variant, all in different colors and styles.

In addition, you can display options as drop-down lists, as separate rows in a table.

## • 4 Responsive Modes

The plugin provides 4 different responsive design modes to suit your needs:

• Answer mode.

• Automatically hide columns.

• Horizontal scrolling.

• Disable function

response. Disable the response function.

Here you can see sample product tables.

• Information table

The product table allows you to build a table according to your needs, add table columns and add any product data.

## • Pagination

This feature is useful if you have hundreds of products in a table. Pagination paginates the table and minimizes the table.

By providing customers with fewer products on one page, they more carefully examine the page. The option will speed up download time and optimize your online store, make it faster.

All you have to do is enable the pagination feature, which provides users with better website navigation and usability.

## • Search and Sort

The search field in the Product table is located above the table (top right). Here, customers can instantly filter the table by product with a specific keyword or search query.

The Sorting.The product table allows you to sort data rows on the external interface and display the data in the exact order. You can find the indicators at the top of the column.

Filter by global search URL parameters. The tables content will be filtered by `s` parameter from the url.

## • Drag and Drop Custom Fronted Sorting

Select the check box if you want to add sorting by dragging and dropping from the preview of the administrator table into the web interface.

## • Print Button

People can easily print an order form using the option “print which is included in their browser. However, you can help your less tech savvy customers by adding the convenient “Print” button on the print order page.

## • CSS Editor

CSS is responsible for the style of elements on a web page. It controls the color and size of text, headings, background colors, spacing, etc.

## • Usage Statistics

You can enable this option in the **Plugin Settings** to help improve our plugin.

This option sends us data on how the user uses the plug-in, in order to study statistics and type of improvement of functionality

This will help us make our solution better for you.

![full list of options WooCommerce Product Table](https://woobewoo.com/wp-content/uploads/2020/06/send-usage.png)

## • Thumbnail Size

In the product table, you can display an image of your product.

It will be shown in the Thumbnail column.

You can enable/hide this column in your table, fully customize size and display, which will help optimize your store for you and your customers.

## • Highlighting

This will help you easily make your table more stylish and attractive to your customers. It would seem an almost imperceptible action, but visually it will be very cool and comfortable to look at. You can turn on the backlight when you: hover your mouse; Select the order column (if it is enabled, the selected column will be highlighted)

## • Table Loader

Table Loader is a loading indicator (table) that helps the user understand the loading position at any given time, especially when the system is working on a task.

Visibility of the system state is one of the main characteristics of the user interface. Users want to have control over the system they use.

## • Preview

Any changes you make when creating the table will be displayed in the preview window, and you can check how the table looks on desktop computers, tablets and mobile devices.

## • Text Overwriting

Using the WooCommerce Product Table, you have all the necessary options in one plugin. Use the Text Overwriting option and give your table a beautiful and convenient look.

In the settings section “Language and Text” you can rewrite the text of almost any element of the table.

## • Add to Cart Button

The WooCommerce Product Table comes with a “Add to Cart” button, as well as “Add Selected to Cart”, “Add All to Cart” options and an option to display or hide quantities entered.

All you need to do is go to “Manage Table Columns” on the “Content” tab and add the “Buy” property to the table.

## • Hide Quantity Input

By default, the table displays the Add to Cart column with a quantity selector.

You can change this by selecting the Hide quantity check box on the settings page of the product table.

This will hide the quantity field next to the Add to Cart button.

## • Display Private Products

Privatize your online store by giving registered users access to your online store, a feature has been added to the Private Store for WooCommerce that forces guest customers to log in / register to view private products, product categories, product tags and pages. If you have private products in the store, you can also display them in the WooCommerce product table.

## •Stock Status Settings

The Stock Status column will contain either the basic stock status (for example, “In stock” or “Out of stock”) or the exact stock level. This is controlled in the main settings of WooCommerce – WooCommerce> Settings> Products> Inventory. On this page you can indicate whether you want to show the general condition of the product or the exact quantity of the product for each product.

## •Search by Columns

**The WooCommerce Product Table** contains a wide variety of features and options. For example, you can search not only by **Searching** all the properties of the product table, but you can also search by columns.

## •Product Description Length

You can change the length of the description shown in the table. And also determine how many characters will be displayed in the product table.

## Take Full Advantage of Connecting PRO Version
(try PRO before you buy)

## • Attribute Column and Attribute Filter

This information is about the product’s properties, size, color, field, etc. Add them to each product and provide additional data so that customers can search for products by category and attribute.

Turn on the attribute filter and select the attribute that will be sorted: size, color, or any other attribute. The category filter works for all categories that have been added to the products, for example, gender, product type, design, etc. Filters work only with the included category and attribute columns.

With filters for your customers and complete control for you, this is a must-have feature for any WooCommerce online store. After these simple settings, your customers can filter by attributes and all categories and find exactly what they are looking for!

## •  Multiple Add to Cart and Add All to Cart

The WooCommerce Product Table plugin lists products in a table with an optional column to add to the cart. There are several options for controlling how the Add to Cart buttons appear in the table. You can select buttons or flags, show or hide the quantity selector, and whether it is worth updating the page after adding products to the basket. Or, if you want, you can completely remove the “add to cart” column and list your products without purchase options.

## • The First Variation as Default

One of the settings is to display the first option in the selected form.

By default, products are displayed with a drop-down list of options so that users can select.

But If you enable Show first variation as default – the first variation will be selected straight away.

## •Hide View Cart Link

With WooCommerce Product Table, you can customize any table element to your unique style.

For example, after adding the Buy column, which contains the Add to Cart button.

By default, along with the add to basket button, the “view basket” button will be added

But if you wish, you can hide it in the settings of the product table.

## •Category Filter

Now, if you want customers to be able to find products by category, add drop-down menus above the table. This can be done by checking the “Category Filter” checkbox on the settings page of the “Product” table on the “Functions” tab.

(Only works with category column enabled)

## • Table Loader Icon and Color

You can select the “Loader Icon” (standard or another from the list), and also select “Table Loader Color” (any color palette).

## • Tag Filter

Allows your customers to filter by tags and find exactly what they are looking for!

The tag filter works for all tags that have been added to products. You can set the headers of the tag filter, Hide tags from the table, Show the drop-down tag filter as the default parameter, Show only selected tags in the filter

## • Hide Searching Properties from Table

In some cases, to improve search results, it becomes necessary to exclude certain columns from the search.

This can be done by going to the settings of the desired column and selecting the Disable search in this column check box.

## • Price Filter

The price filter only works with the included price column. Here you can set the range – for manual settings, click the “Settings” button and adjust the price range parameters. You can increase or decrease the number of steps and set different values ​​for each step. You can also set a minimum and maximum price.

## • Add Products Automatically

If you add products in this way, you do not need to edit the table in the future by adding new products. All new products that you add to your store will be automatically added to the table according to the selected category.

## • Custom Taxonomy Filter

Using taxonomies, you can store and display additional product data. Thus, they are designed to store reusable information that can be used to group and filter products. Display filters for custom taxonomy (created using post-type user interfaces and ACF plugins)

The taxonomy filter works for all taxonomies that have been added to products. You can set the headers of the taxonomic filter, Hide the taxonomy from the table, Show as the default parameter for the drop-down taxonomy filter, Show only the selected taxonomy in the filter.

## • Advanced Custom Field Compatibility

The WooCommerce Product Table plugin is fully compatible with Advanced Custom Fields (ACFs). You can create custom fields for your products and display them as columns in a table.

Custom fields are a great opportunity to add any necessary information about your products. Add additional data that cannot be added to any of the fields that come with WooCommerce by default.

## • Multiselect for Filters

Customers can filter by attributes, tags, price, categories. With the multi-select filter, customers can filter by several parameters at the same time, which allows them to find exactly what they are looking for!

## • Custom Post Type UI Compatibility

This free plugin allows you to create a taxonomy and assign it to WooCommerce products or any other type of publication. Once you have created your own taxonomy, it will be displayed on the product page with a field for each taxonomy term. You can add a taxonomy term in the same way as adding categories, and easily display it in the product table.

## • Measurement Price Calculator Compatibility

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) is one of the few plugins that is compatible with the [Measurement Price Calculator](https://woocommerce.com/products/measurement-price-calculator/).

This is a plugin thanks to which you can sell objects at a price per unit or allow customers to add their own quantities using the measurement price calculator.

## • Custom Table Styles and Design

With the WooCommerce product table, you can make the table more attractive and informative. We offer all the necessary options to best customize the look of the table.

## • Buy Button Design

Choose your own styles for the Add to Cart button. Any settings you leave blank will be the default.

## Make Your Store More Stylish with the WooCommerce Product Table

Use all the advantages of our plugin, customizing every element of your table.

Change and improve the look of the product table so that your store is beautiful and convenient for all your customers.

Do you have any questions? [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you.

---

## How to show a quantity of input in the product table

**Source:** [https://woobewoo.com/documentation/how-to-show-a-quantity-picker-in-the-product-table/](https://woobewoo.com/documentation/how-to-show-a-quantity-picker-in-the-product-table/)

## Hide quantity input

By default, the Add to Cart column is displayed in the table with the quantity selector.

You can change this by checking the**Hide quantity input** checkbox on the settings page of the product table.

This will hide the quantity field next to the Add to Cart button.

![How](https://woobewoo.com/wp-content/uploads/2020/05/Hide-quanity-input.gif)

To learn more about the Buy button in the product table, check out [this article.](https://woobewoo.com/documentation/buy-button-design/)

---

## How to sell by weight?

**Source:** [https://woobewoo.com/documentation/how-to-sell-by-weight/](https://woobewoo.com/documentation/how-to-sell-by-weight/)

Many people use the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) to sell products by weight. For example, if they sell food per kilogram. There are several ways of selling the products by weight. Let’s check them both.

## Adding the Weight Column

The very intuitive way is just to add the corresponding column to the table. ![Weight](https://woobewoo.com/wp-content/uploads/2020/05/product_table_weight_column.png)

Make sure that you’ve set the weight in the settings of the product.![Weight](https://woobewoo.com/wp-content/uploads/2020/05/product_table_weight.png)

## Using Price Column

The easiest way to sell by weight is to rename the price column to “Price (per kg)” (or any other weight indicator in which you sell).

The buyer will see the price per kilogram in the “price” column of the product table and using the quantity indicator in the “add to basket” column will choose how many kilograms he wants to order. Then they can add to the cart and pay in the usual way.

![How](https://woobewoo.com/wp-content/uploads/2020/05/Price-per-kg.png)

## Compatible with Measurement Price Calculator Plugin (PRO )

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) is one of the few plugins that are compatible with [Measurement Price Calculator](https://woocommerce.com/products/measurement-price-calculator/).

This is a plugin thanks to which you can sell objects at a price per unit or allow customers to add their quantities using the measurement price calculator.

![Measurement](https://woobewoo.com/wp-content/uploads/2020/05/Calculator.png)

To learn more about all columns in the product table, check out [this article](https://woobewoo.com/documentation/product-table-columns/).

---

## Thumbnail Size

**Source:** [https://woobewoo.com/documentation/thumbnail-size/](https://woobewoo.com/documentation/thumbnail-size/)

Do you want your tables to be more attractive and satisfy even the most demanding customers.? In the **WooCommerce product table,** you can add a Thumbnail Column. Fill in the table with images of products and select the desired size of thumbnails

### How to display Thumbnail Column in WooCommerce Product Table?

![product-table-thubmnail](https://woobewoo.com/wp-content/uploads/2020/05/1-1.png)

### Thumbnail Size

The**Thumbnail size** option controls the size of the **Thumbnail** column if you have included this column in your **Product Table**.

To configure it, go to **Settings-> Appearance** and select the desired **Thumbnail size.**

The default **Thumbnail size** is 150×150. You can use any standard image size (e.g. thumbnail, medium, large, etc), or one or two numbers to denote the width and height for the image.

For example, here we tried 150×150, 250×250 and 300×300 Thumbnail size.

![Size](https://woobewoo.com/wp-content/uploads/2018/06/Size-example-1024x546.png)

### Responsive mod Thumnbnail Size

You can also set the thumnbnail size while in responsive mode.

To do this, open the **Thumbnail column settings** and in the **Responsive mod thumnbnail size** field, set the value you need.( by default 150×150)

![Responsive](https://woobewoo.com/wp-content/uploads/2020/05/Size.png)

### Product Images are in the wrong size!

Image size is very complicated in WordPress and can lead to unexpected results.

**A few tips:**

- Product images must be in the correct proportion for the image size you select. For example, if product images are square and you set Thumbnail size = 50×40 them, they will still be displayed square
- If you use the built-in Thumbnail size. (for example, reduced, medium or large), you can check their sizes in the menu Settings> media.
- It is possible that the width settings (see above) may override the size of your Thumbnail . For example, if you set a fixed Thumbnail . column width and a specific image size, these options may conflict.
- If you really want your Thumbnails to have the correct size in the table, you can resize the original Thumbnail s to the desired size.
- If product images are displayed or displayed with the wrong size or aspect ratio, despite providing the correct settings or Thumbnail . proportions, this can sometimes be due to the image settings of your theme, which override the plug-in settings and lead to cropping of images in the product table. in unexpected sizes. To check this, temporarily switch to a standard WordPress theme (e.g. Twenty Seventeen) and check if the image problem persists. If this is not the case, then review your theme’s settings for its own Thumbnail . or crop size settings. An example of this is the Flatsome theme, which has its own custom image ratio setting.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Show variation description

**Source:** [https://woobewoo.com/documentation/show-variation-description/](https://woobewoo.com/documentation/show-variation-description/)

In order to display descriptions for your product variations in Product Table you need:

![width=1731](https://woobewoo.com/wp-content/uploads/2020/04/vardes1.png)

In the Add Products Wizard, display the variations as separate products (show variations checkbox), and add the ones you need to the table.

![width=1834](https://woobewoo.com/wp-content/uploads/2020/04/vardes2.png)

Now descriptions will be displayed in the Summary column.

![width=1549](https://woobewoo.com/wp-content/uploads/2020/04/vardes3.png)

Except that, you can also enable the popup description functionality for the summary column.  To do that, you need to open the column settings and in the opened window check the **Description popup** option.

![Summary](https://woobewoo.com/wp-content/uploads/2020/04/product_table_summary.png)

If you go to the **Settings >> Features** path, you can toggle the **Show variation description instead of the product description** option to show variation description instead of product description in variations popup.

![Variation](https://woobewoo.com/wp-content/uploads/2020/04/product_table_variation_popup.gif)

If you need to change the size of the popup, scroll to the **Features** section where you\’ll find the **Popup size** option. You can set the size either in % or px.

---

## Custom attributes converter

**Source:** [https://woobewoo.com/documentation/custom-attributes-converter/](https://woobewoo.com/documentation/custom-attributes-converter/)

Backup your database first.

To convert personal product attributes to the WooCommerce attributes of your site move to the converter tool in the plugin main menu.

![width=1050](https://woobewoo.com/wp-content/uploads/2020/04/conv1-min.png)

**Select the custom product attribute** that you want to convert.

![width=959](https://woobewoo.com/wp-content/uploads/2020/04/conv2-min.png)

Then choose the **Name for taxonomy attribute** and **Slug for taxonomy attribute** for the attribute that you want to add.

If you specify an existing slug, then new terms will be added to it and it will be attached to the products.

![width=993](https://woobewoo.com/wp-content/uploads/2020/04/conv3-min.png)

After clicking on the **Go** button, you will receive a new attribute with its terms in the list of WooCommerce attributes.

![width=1248](https://woobewoo.com/wp-content/uploads/2020/04/conv4-min.png)

---

## Buy button design

**Source:** [https://woobewoo.com/documentation/buy-button-design-2/](https://woobewoo.com/documentation/buy-button-design-2/)

To customize the**Buy button Styling**, please move to the**Settings > Appearance**. (column Buy must be added)

Choose your custom styles for button **Add to cart**. Any settings you leave blank will default.

![Product](https://woobewoo.com/wp-content/uploads/2020/01/Buy-Button.png)

- **Button type.**First, let\’s choose the type of button display: **text or icon**.

![Best](https://woobewoo.com/wp-content/uploads/2020/01/Button-icon-2.png)

- **Text(any product type).**Here you can set the default button text for all product types.

![Best](https://woobewoo.com/wp-content/uploads/2020/01/Any-product-type.png)
- **Text (after clicking the button).**Here you can set the text of the button to be displayed after it is activated, for all product types.
- **Set text by product types.**As you know, Woocommerce has different types of products, but in the Product Table, you can set the text for each type of product. Check this option and enter text on the relevant product type.

![Variable](https://woobewoo.com/wp-content/uploads/2020/01/TextButtonType.png)

- **Icon.** If you select the icon type for the Buy button, you can choose an icon from the list**.** ![width=1734](https://woobewoo.com/wp-content/uploads/2020/01/iconBuyButtons.png)
- **Font.**Here you can choose the font, its size, color, shadow, and style.

(* If icon was selected as the button type, then the internal image of the icon will change)

![FontButton](https://woobewoo.com/wp-content/uploads/2020/01/ButtonSizeFont.png)

- **Font(hover).**Set the color and style of the text that will be displayed when hovering over the button.
- **Button size** – set width and height values in pixels (in that order).

![Button](https://woobewoo.com/wp-content/uploads/2020/01/SizeStyleButton.png)

- **Corners radius.**Here you can specify the rounding of the corners of the button, in px or in %.

![Radius](https://woobewoo.com/wp-content/uploads/2020/01/RadiusCorner.png)

- **Background type**– select the type of button you prefer from the list:
- none
- unicolored
- bicolored
- simple gradient
- pyramid gradient

![Button](https://woobewoo.com/wp-content/uploads/2020/01/Button.gif)

- **Background Color.**Select a color for the button background.
- **Background Colors.**If not Unicolored is selected, then here you can select additional gradient colors.
- **Background (hover).**In the same way, you can choose the type and colors for the button when the cursor is hovered over it.
- **Borders**. Set button Borders in this order: color, top, right, bottom, left.
- **Borders (hover).**Set button Borders in this order: color, top, right, bottom, left. (when the cursor is hovered over it.)
- **Button shadow.**  Set button shadow in this order: color, X, Y, blur, spread.
- **Padding** – set the padding for button content in this order: top, right, bottom, left.

![width=1693](https://woobewoo.com/wp-content/uploads/2020/01/PaddingButtons.png)

- **Set buttons in a row.**Set the position of buttons for custom style. If enabled, this will align all buttons in one row. It can be very useful when a button with variations moves to the side in relation to others.

![width=1283](https://woobewoo.com/wp-content/uploads/2020/01/ButtinRow.png)

## View Cart Button Design

Under the **Buy Button Styling** section, there are also settings for the **View Cart** button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart_style.png)

Toggle the corresponding option to change the text and color of the button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart.gif)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Help us to solve your problem faster

**Source:** [https://woobewoo.com/documentation/help-us-to-solve-your-problem-faster/](https://woobewoo.com/documentation/help-us-to-solve-your-problem-faster/)

**We are always trying to help our users as soon as possible.**

We can help you faster if you’ll try to analyze and describe the problem in more details. For this, follow the next suggestions –

- Test for Conflicts with other WordPress Plugins and Themes
- Enable WordPress Debugging Mode
- Use Your Browser to Diagnose JavaScript Errors

### Conflicts with Other WordPress Plugins and Themes

We hope, that you understand that these are WordPress plugins. Therefore you could have conflicts with your WordPress template or any other WordPress plugin that you use. We cannot control all developers of plugins or templates and they often make mistakes, whereas our plugins are being tested at least on 4 testing servers before each release. Nonetheless, errors in other code could cause problems in the work of our plugins.

Try to deactivate all your plugins one by one and check the issue. Thus you will find out which plugin causes the error. If it won’t help, try to switch temporarily to a standard WordPress theme. Afterwards, let us know about the result. This will help our developers to solve your problem faster.

### Enable WordPress Debugging Mode

In order to check and solve the issues with third-party code (plugins or theme) on your site – you need to enable Debugging mode for your site. Enabling of Debugging mode will display all PHP errors, notices and warnings on your site. For example, if you’ll have a white screen of death – after enabling of WordPress Debug mode you’ll see the text of fatal error which is caused the problem. Generally, these WordPress configurations are used by developers and not recommended to use on “live” sites. However, this will help to resolve your problem faster. By default Debug mode is disabled, to turn it on –

1. Go to wp-config.php file and find such line –
| 1 | define( \’WP_DEBUG\’, false ); |
| --- | --- |
2. Replace this line with such code –
| 1 | define( \’WP_DEBUG\’, true ); |
| --- | --- |
3. Save the file. Now Debugging mode is active.

> Note: WordPress Debugging mode will display all PHP errors, notices and warnings on your site. Therefore when you or developer will finish – don’t forget to disable it.
> Change the line with default value –
> 
> 
> 
> 
> 
> 
> 
> 
> 1
> 
> 
> 
> 
> define( \’WP_DEBUG\’, false );

### Use Your Browser to Diagnose JavaScript Errors

If you’re experiencing any issues with your site functionality – this may be due to JavaScript errors or conflicts. One JavaScript error can stop all of the scripts on the page from working. This means that JavaScript error of another plugin can break Supsystic JavaScript on the same page. Therefore you should check the page with issue for any JavaScript errors.

1. Open *Developer Tools* or *Console* in your browser.

**Internet Explorer:** Press F12 to open Developer Tools. Note that Internet Explorer annoyingly won’t show any errors from before you pressed F12, so it’s likely you’ll have to press F12 then refresh the page to see the error message.

**Google Chrome:** Press Ctrl + Shift + J to open Developer Tools. There should be an error log at the bottom of the pane that opens – if not, click the Console tab.

**Firefox:** Press Ctrl + Shift + J to open the error console. Note you may want to press Clear and refresh the page otherwise you might see error messages from other websites. Press Ctrl + Shift + K to open the advanced log which contains more detailed information.

**Opera:** Press Ctrl + Shift + O to open the error console.

**Safari:** Press Ctrl + Alt + C to open the error console. On iPhone or iPad you can enable Debug mode under Safari – Developer or Advanced in Settings. This will show errors in a bar at the top of the screen which you can tap for more information.
2. Check the Console for any JavaScript errors.
3. If in Console of your browser there are some errors
4. In order to check the details of error click on the black arrow near the error title. It will show the details.
5. Also to find the causer of the issue – hover your mouse on a text at the right side of the line with the error. It will show the path to file where occurs this JavaScript error.

If Javascript error occurs in files of Supsystic plugin – contact us through our ticket system. If the error is placed in a file of another plugin or theme – contact developers of this plugin/theme and inform them about the problem. After the error will be fixed – check the issue with our plugin one more time. If the issue will still persist – contact us through our internal support.

Let’s check the most frequent errors and methods of resolving these errors:

- **Incorrect selector**

The problem is connected with your other WordPress plugin or theme due to the release of a new WordPress version. There is a problem with the incorrect selector in the file. In order to check the file – hover your mouse on a text at the right side of the line with the error. It will show the path to file where occurs this JavaScript error.

Also, you can read more about this error here – https://github.com/jquery/jquery/issues/2824

Contact your theme/plugin developers. They should fix the problem. Or you can try to fix the problem yourself. In the file with errors, you need to replace the code –
```
a[href=#top]
```

 with this –
```
a[href=#top]
```

- **jQuery is not defined**

jQuery Library is not connected on your site or connected incorrectly. Usually, it is connected with the theme of the site. In order to connect it yourself you need to open “functions.php” file of your theme and write the following code there:

| 1
2
3
4
5 | add_action(\’wp_enqueue_scripts\’, \’my_frontend_scripts\’);

function my_frontend_scripts {
    wp_enqueue_script(\’jquery\’);
} |
| --- | --- |
Or contact your theme’s developers and ask them to enable jQuery for your site.

---

## Show variation price in price column

**Source:** [https://woobewoo.com/documentation/show-variation-price-in-price-column/](https://woobewoo.com/documentation/show-variation-price-in-price-column/)

Variable products are a product type in **WooCommerce** that lets you offer a set of variations on a product, with control over prices, image and more for each variation.

**Product Table**provides you with the settings to represent such products in the way you prefer – with an option to **Show variation thumbnails, Display the first variation selected by default. ,**as well as **different ways to display variations** in the table .

By default the price for every selected variation is displayed in the **Buy** column and the range of price for the product on the **Price column**:

![Price](https://woobewoo.com/wp-content/uploads/2019/12/Price-Variations.png)

Also, you are able to display the price for the selected variant in the **Price column**:

Just enable**Show variation price in price column** and variation price will appear in the separated column.(Settings->Features)

![Show](https://woobewoo.com/wp-content/uploads/2019/12/Show.png)

> Note! Works only with enabled price column.

![Show](https://woobewoo.com/wp-content/uploads/2019/12/Var.gif)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you

---

## Show the first variation as default

**Source:** [https://woobewoo.com/documentation/show-first-variation-as-default/](https://woobewoo.com/documentation/show-first-variation-as-default/)

[WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/) allows to display [variable products](https://woobewoo.com/documentation/variable-products-and-settings/) and make all necessary settings for their better representation.

One of the settings is to display the first variation as selected.

By default, products are displaying with a drop-down list of parameters to make the users select:

![](https://i.gyazo.com/41dc20d791a15bab9a611ffd53d0cb10.png)

If you enable **Show first variation as default**– the first variation will be selected straight away.

![](https://i.gyazo.com/1dad2d74296f76d2fe75a661d5ae8b55.png)

---

## Show variation thumbnails

**Source:** [https://woobewoo.com/documentation/show-variation-thumbnails/](https://woobewoo.com/documentation/show-variation-thumbnails/)

Would you like your customers can see the preview of each variant of your product?  What can be better to look through the products and find exactly what you need in one table?

Customers need not navigate to the product page to look at additional photos. Just select the attribute and see how the variants look like.

![“Show](https://woobewoo.com/wp-content/uploads/2019/12/variation-tumbnails.gif)

This is one of the most ideal ways to list drop-downs of options and add to cart buttons directly to product lists. It is much more flexible than displaying variations for each product. Since you significantly save space and the buyer will not scatter eyes all over the page.

Moreover, when choosing a certain option, in real-time mode, its data will also change (for example, price or image).

In order to display a selection of options in the form of drop-down lists in the buy column, you need to:

–**Create a table of products.**

**-Add all the columns you need including Buy.**

**-Add the products you want, including variations.**

– **Select the checkbox with the “Show variation thumbnails” option, so that the product image would change depending on the selected variation in real-time, without refreshing the page. (settings->features)**

![Show](https://woobewoo.com/wp-content/uploads/2019/05/variations-thumnails.png)

If you have any questions, please **contact us** and we will be happy to help you.

---

## How to display sales of the products

**Source:** [https://woobewoo.com/documentation/how-to-display-sales-of-the-products/](https://woobewoo.com/documentation/how-to-display-sales-of-the-products/)

**WooCommerce Product Table** gives an option to display all necessary information about the products in columns. One of them is a SALES column.

If you add it to the table you actually can show the customers how many times the product has been sold.  This data is base on WooCommerce Report – Sales by-product and provides information about total sales periods.

To add Sales column – select it in the drop-down of available parameters and press Add:

![Sales](https://woobewoo.com/wp-content/uploads/2019/12/Sales.gif)

As a result, a table with **Sales** presentation is ready:

![width=845](https://woobewoo.com/wp-content/uploads/2019/12/product-sales-1.png)

---

## How to Configure CSS for Product Table?

**Source:** [https://woobewoo.com/documentation/css-for-product-table/](https://woobewoo.com/documentation/css-for-product-table/)

To change and customize the **Product Table**styles, please move to the **WooCommerce Product Tablt by WooBeWoo** -> **Settings** tab -> **CSS** editor

![CSS](https://woobewoo.com/wp-content/uploads/2019/10/CSS-settings.png)

- To  **justify the product names** to the left, right, centre:

```
.wtbpContentTable td.product_title {
text-align: left !important;
}
```

- To  **justify the Buy button** to the left, right, centre:

```
.wtbpContentTable .wtbpAddToCartWrapper {display: inline-block !important; }
```

- To **position the search box** and change the font size for the input field:

```
.wtbpTableWrapper .dataTables_filter {
float: none;
text-align: center;
width: 100%;
}
.wtbpTableWrapper .dataTables_filter input {
width: 100%;
}
```

- To change the colour for a **star rating:**

```
.wtbpContentTable .star-rating span::before {color: #6565b0 !important;}
```

---

## How to Configure CSS for Product Filter?

**Source:** [https://woobewoo.com/documentation/how-to-configure-css/](https://woobewoo.com/documentation/how-to-configure-css/)

To change and customize the filter styles, go to Design -> General -> CSS Editor

![width=936](https://woobewoo.com/wp-content/uploads/2019/10/download.png)

- To **change fonts, font size and weight of filter blocks:**

```
.wfpTitle {font-weight: normal; font-size:20px !important;}
.wpfValue {font-size:16px; font-family: Source Sans Pro; !important;}
```

The Title is a title of every block, Value is a block.

Here you can put:

```
font-weight: normal/bold;
font-size:XXpx;
font-family: Arial; or other font family
background-color: #xxxxxx;
color:#xxxxxx
```

and other parameters from Styles if you tap right click -> **Inspect:**

![](https://i.gyazo.com/472c1f9158d53ee4104efb0aaaf239ef.png)

- To change the **on-hover colour** of the select options in the filter

```
.wpfCheckboxHier option[selected] { background-color: orange; }
```

- In order to **change checkboxes style**:

```
.wpfFilterWrapper .wpfCheckbox label::before {
background-color: rgb(255, 255, 255) !important;
border: 1px solid rgb(204, 204, 204) !important;
color: rgb(68, 68, 68) !important;
}
```

- To **align checkbox and the label:**

```
.wpfFilterWrapper .wpfCheckbox label {margin: -10px 0px 0px 0px;}
```

- **To make checkboxes (squares) for all filters if one of them is radio buttons (circles) :**
```
.wpfFilterContent .wpfCheckboxHier input,
```

```
.wpfFilterWrapper[data-filter-type=wpfCategory] .wpfCheckbox label:before {
```

```
border-radius: 0 !important;
```

```
width: 18px !important;
```

```
height: 18px !important;
```

```
}
```
- To change the button (CLEAR/FILTER) style

```
.wpfButton {
background-color: blue;
}
```

- To change **the text for Search bar** (JS editor)

```
jQuery(\'.wpfSingleInputSearch input\').attr(\'placeholder\', \'my text\');
```

- To change the **size and colour for + in collapsible categories:**

```
.wpfFilterWrapper .wpfCollapsible {
font-size: 30px;
color: black;
}
```

- To **center** the Attribute filter on the screen

```
.wpfFilterVerScroll {
display: flex;
justify-content: center;
align-items: center;
}
```

![How](https://woobewoo.com/wp-content/uploads/2025/03/Screenshot_4-1024x599.png)

Customizing the design of your product filters with CSS gives you full control over their appearance, ensuring they blend seamlessly with your website’s style. With CSS, you can modify colors, spacing, fonts, and even create interactive effects to enhance the user experience. This guide will walk you through the steps to configure and apply custom CSS to the Product Filter WBW plugin.

*How to change the design of filters individually, if there are several of them, read here: https://woobewoo.com/documentation/product-filter-design-modification-guide-css/*

Still have questions? Read our detailed [documentation](https://woobewoo.com/docs/woocommerce-filter-documentation/) or [Contact us](https://woobewoo.com/contact-us/) and we will be happy to help you

---

## How to create Horizontal Product Filter

**Source:** [https://woobewoo.com/documentation/how-to-create-horizontal-product-filter/](https://woobewoo.com/documentation/how-to-create-horizontal-product-filter/)

[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/)plugin allows you to create a comfortable and multifunction filter for your customers. Not only sidebar filter but also horizontal!

Let \’s look for a few simple steps to create your Horizontal Product Filter:

1. To get started, change thesetting of the Filter block width up 20-25%
2. Change the Filter width, by default it is 100%, but you can change it up to any value checking the result on the frontend, it depends on your theme template.![width=1314](https://woobewoo.com/wp-content/uploads/2019/09/download.png)
3. Also, you can change the “Layout” for each section of the[WooCommerce Product Filter](https://woobewoo.com/plugins/woocommerce-filter/)plugin you want.![width=1281](https://woobewoo.com/wp-content/uploads/2019/09/download-1.png)
4. Then you need to add a filter to the page via Widgets or via shortcode. Check our tutorial [“How to add WooCommerce product filter to the shop?”](https://woobewoo.com/documentation/how-to-add-woocommerce-product-filter-to-shop/)

![width=1024](https://woobewoo.com/wp-content/uploads/2019/09/horizontal-filter-2-1024x664.png)

### As a result, you will receive your Horizontal Product Filter!

![width=1024](https://woobewoo.com/wp-content/uploads/2019/09/horizontal-filter-1-1024x837.png)

### 

Also, you can check other topics about customization such as[Easy to customize and set up](https://woobewoo.com/feature/customize-and-set-up/).

---

## WooCommerce Popup Notification Main Settings

**Source:** [https://woobewoo.com/documentation/woocommerce-popup-notification-main-settings/](https://woobewoo.com/documentation/woocommerce-popup-notification-main-settings/)

We have all the necessary options in one plugin. You can start to try them now, following this clarification.

Popup Notification plugin contains 3 main tabs:

[Design](/#1)

[Content](/#2)

[Rules to display](/#3)

---

## Design

In the Design, there are 3 tabs: Templates, View Styles, Custom CSS.

### Templates

Here you can choose a template from the list. Search by name or tag.

![width=949](https://woobewoo.com/wp-content/uploads/2019/07/templates.png)

In the left panel, you can see the template construction: blocks with text and display rules.  The base template includes 1 rule to display and 2 blocks of text.

---

### View Styles

View styles come with settings for popup style: you are able to change the position on page, background, borders, text, close button.

**Position**

Choose the position on the page – left (bottom, middle, top) centre(bottom, middle, top), right (bottom, middle, top)

Select the padding for any side in px.

**Background and overlay**

Enable Override template background and pick the colour and transparency for a background.

Enable overlay and pick the colour and transparency for overlay.

**Borders**

Enable Override template borders to change:

- Borders width in px
- Borders colour and opacity
- Borders style
- Borders radius in px

******Text**

Enable Override template title or/and description font to change:

- Title font size in px
- Title font-family
- Title font style
- Title font-weight

![](https://i.gyazo.com/3f82c0bb64e36ba9f43071fd923541e3.png)

**Close button**

Enable Override template close button to change:

- Background colour and opacity for button
- Background colour and opacity for a button on-hover effect
- Borders colour and opacity
- Close button icon colour
- Borders width in px
- Borders style and radius

---

### Custom CSS

![](https://i.gyazo.com/54e4d371f7302e5eb7c3216b10bb40a8.png)

If you have basic knowledge of CSS – you can use the CSS Editor to change the appearance of the table.  Simply type styles for popup elements in the editor window.

> Don\’t forget to press Save

---

## Content

In the Content section, there are 2 tabs: Text and Text rules. Here you can create, duplicate and remove custom text for your notification template by using static text and custom text rules.

### Text and Text rules

![width=1002](https://woobewoo.com/wp-content/uploads/2019/07/text-tab.png)

### Text

In the Text Editor add a text you would like to see in a popup. Here are the same settings as in Classic WP Editor – font settings, align, link insert, list etc. Also, you are able to add Media.

To display variations like numbers, locations, WooCommerce data you can add a shortcode with a text rule. Additional settings for text design you can find in the Design -> Text.

---

### Text Rules

In order to create a text rule, click on **Text Rules.** Select a type of rule in the list:

![](https://i.gyazo.com/1db9cbcbc6ef23e1fd284e0369a310fc.png)

**Number.** Choose how to display the numbers (f.e a quantity of sold products, how many people bought etc)  – random or exact. If you want to display random numbers – specify the diapason of numbers (f.e diapason 5-10 in the popup will be shown as random numbers 5,6,7,8,9,10).

**Text.** Add a text and conditions to show it – random or one-by-one. If you want to display random text – use the **delimiter ~** to separate it.

**Categories.** Select **custom** to display a category from the list or select user current category to display a category of the page that user browsing.

**Tags.**Select the tag(s) from the list to display.

**Products.**You can use all products or select some of them and display one by one or randomly.

**Location.** Here are 2 options: to show visitor city and country or display random nearest cities.

**Time.**Select the time formate. Here you can display the current time or show a time countdown with a target time.

**Users.**If you want to use all users name leave the checkboxes empty.

Example: Today [text_rule_1] users bought [text_rule_2] in the [text_rule_3] city.

---

## Rules to display

Display rules parameters will help you determine how and when to display the notification.
![width=894](https://woobewoo.com/wp-content/uploads/2019/07/rules-to-display-1.png)
Parameters can be set according to less/more/exactly then specified value. For example – popup will appear than user browsing the page more than 10 sec, less than 10 sec or exactly 10 sec.
- **Time on page**– popup appear on page depend on the selected time and value.
- **Time on site**– popup appears on page depend on the time the user spent browsing the website.
- **Distance scrolled**– popup appears than user scrolling the page, depending on the value in px.
- **Visitor inactive time**– set the time of visitor inactivity to display a popup.
- **The date** – set the date to display a popup
- **The current time**– set the time to display a popup
- **The current day**– set the day to display a popup
- **A visitor is new** – popup will be displayed only for new visitors.

---

---

## How to add custom taxonomy (Custom Post Type UI)

**Source:** [https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/](https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/)

Create custom taxonomies quite easily using [Custom Post Type UI](https://en-gb.wordpress.org/plugins/custom-post-type-ui/) that is fully compatible with [WooCommerce Product Table.](https://woobewoo.com/plugins/table-woocommerce-plugin/)

This free plugin allows you to create a taxonomy and assign it to WooCommerce products or any other post type.

Once you have created a custom taxonomy, this will appear on the product page with a tick box for each taxonomy term. You can add taxonomy term in the same way as adding categories and easily display it in the product table.

### What is custom taxonomy in WooCommerce?

With the help of taxonomies, you can store and show extra product data. So, they are designed to store re-usable information which can be used to group and filter products. You can create a dedicated page listing all products that share a specific custom taxonomy term. You can also use taxonomies to filter products using the [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/)****plugin.

Custom taxonomies are very similar to WooCommerce product categories. When you create a custom taxonomy in WooCommerce, it adds a field on the right side of the Add/Edit Product – the same as categories.

### How to create WooCommerce custom taxonomies with the Custom Post Type UI plugin

Follow this step by step tutorial to create taxonomies, add them to the product and display in the table:

1. Installed the [Custom Post Type UI](https://en-gb.wordpress.org/plugins/custom-post-type-ui/)
2. Navigate to CPT UI  -> Add/Edit taxonomies
3. Add a Slug, Singular and Plural label.
4. Select the Products as a Post type to attach.

![custom](https://woobewoo.com/wp-content/uploads/2019/07/taxonomies-settings.png)
5. Make other necessary settings. All detailed instruction you can find in the **plugin documentation**.
6. Press Add Taxonomy. Now new taxonomy will appear on the Product page:

![width=807](https://woobewoo.com/wp-content/uploads/2019/07/custom-taxonomy-1024x509.png)
7. Add the value and update or publish a product page.
8. Now, if you create the Product table, all the created Taxonomies will be displayed in the list of available columns and marked yellow colour.

![custom](https://woobewoo.com/wp-content/uploads/2019/07/custom-post-ui-taxonomy.png)
9. Select the Taxonomy, add the column and add the products according to the taxonomy. ![](https://i.gyazo.com/e58c4dbe7726bafdf255d4dced584557.png)
10. In order to add the Custom taxonomy filter,  move to the Settings -> Features -> and enable Taxonomy filter. Select the terms and Save the settings.

![Custom](https://woobewoo.com/wp-content/uploads/2018/06/Custom-taxonomy-filter.gif)

---

## Getting Started with WooCommerce Popup Notifications

**Source:** [https://woobewoo.com/documentation/woocommerce-popup-notifications-getting-started/](https://woobewoo.com/documentation/woocommerce-popup-notifications-getting-started/)

We’re glad to welcome you to the world of WooBeWoo plugins, and create this tutorial to help you easily get started to use WooCommerce Popup Notifications by following a couple of steps.

### WooCommerce Popup Notifications Installation

In the left panel of WordPress, click Plugins > Add New. Search for “WooCommerce Popup Notifications by WooBeWoo” and click “Install”. When the installation is completed, click “Activate Plugin”. You will see a new plugin, ready to work in the admin menu.

### Create a WooCommerce Popup Notifications

Now, let’s go ahead and create our first popup. Move admin panel and find a Woo Popup Notifications by Woobewoo.

- Click “Add New Notifications”
- Enter the notification name.
- Click “Save”. ![width=972](https://woobewoo.com/wp-content/uploads/2019/06/New-popup-1.png)

### Set notification properties

**All information about the Main settings and options** you can find in our tutorial.

The plugin comes with settings, there you are able to fully customize the appearance and popup displaying rules:

#### Design

- Templates
- Styles
- Custom CSS

Design a unique recent sales popup that matches your store in many ways: different templates, 9 positions on screen, background colour and opacity, overlay, borders, text and Close button style settings.

#### Content

- Text
- Text rules

Promote any product, category, tag. Direct URL link allows visitors to click on the recent sales popups to view details in the page.

Add numbers to display the random quantity of users or products, add users name and location, time, text. To increase notifications’ authenticity, use the real user name or display selected users named randomly. Display location of the buyer according to visitor IP or display random nearest cities.

#### Rules to Display

Display rules parameters will help you determine how and when to display the notification.

Set a time, rules and condition to show: time on a website, time on page, distance scrolled, visitors inactive time, current date/time/day, popup for new visitors.

#### A/B settings

A/B settings involve testing two or more versions of a popup notification — an A version (original) and a B version (the variation) — with live traffic and measuring the effect each version has on your conversion rate. Start an A/B test by identifying a goal for you then determine which popup contribute to the successful completion of that goal.

#### Statistics

If you like to keep everything under control – the Statistics page is useful for you. Monitor and analyze statistics of your popups.  You can always check and see which popup is very effective and which is not.

Don\’t forget to click the**Save**button and check the created popup in Preview mode.

### Add WooCommerce Popup Notifications to the site content

There are 2 different ways to add a popup to your site using code: table shortcode and table PHP code

Popup shortcode can be found on the left navigation menu if you click “Show All Notifications”

![width=874](https://woobewoo.com/wp-content/uploads/2019/06/add-notification-to-the-site-content.png)

You can also find popup shortcode and PHP code if you open Notification to change settings. Simply choose a necessary code from the drop-down menu and copy the code.

![width=951](https://woobewoo.com/wp-content/uploads/2019/06/shortcode.png)

In order to insert the notification, you need:

1. Copy the shortcode.
2. Paste the shortcode into your post or page and Popup Notification by Woobewoo will automatically create a notification on your page according to its settings
3. The PHP code can be inserted at any place of the page code. Besides, it can be inserted in the code of template of the theme – to display on all pages.

---

## How to add custom fields to the table (ACF)

**Source:** [https://woobewoo.com/documentation/how-to-add-custom-fields-to-the-table/](https://woobewoo.com/documentation/how-to-add-custom-fields-to-the-table/)

**WooCommerce Product Table plugin** fully compatible with [Advanced custom fields (ACF)](https://www.advancedcustomfields.com/). You can create custom fields for your products and display them as columns in a table.

Custom fields are a great opportunity to add any necessary information about your products. You also can add additional data that can not be added in any of the fields that come with WooCommerce by default.

![width=801](https://woobewoo.com/wp-content/uploads/2019/04/field-types-1024x658.png)

In order to add the custom field to the product table, you need:

- First, you need to create the custom field that you will use to add the data in the [Advanced Custom Fields](https://www.advancedcustomfields.com/) plugin (free).
- Move to the Custom fields and click Add new Field Group
- Make sure you select the ‘Products’ post type. This is essential to make the custom field appear on the Add/Edit screen for your products. ![width=920](https://woobewoo.com/wp-content/uploads/2019/05/ACF-1024x502.png)
- Press Add Field and add the label, field name and select the type field do you need. You can add any type of fields: text, link, image, oEmbed, file, WYSIWYG editor, etc. On this example, we will add the WYSIWYG editor to add the video content to the column.

- Once you added any type of field, it will appear on the product page.
- Move to the Products and click on Add new/edit the Product.
- Scroll down to the created custom files and add the data – link, picture, code, etc (we are using youtube embed video shortcode for example) and update/publish a product page.

Once you have created your custom field, use these instructions to display it as a column in the table:

- Move to the Product table (*pro* version have to be active) and create or edit the table.
- Add the product with this custom field to the table. Use the searching or sorting for better navigation.
- Then, add the column with a custom field.

4. Save a table. You can display a table with any type of fields you added to the product.

> You can create as many custom fields as you need, and list each one as a separate column.

### How to add links, downloads, icons or buttons

If you want to create a button or icon, use a custom field to store the code or shortcode for your button/icon. The exact method for adding the button or icon will depend on your theme. For example, your theme may provide a shortcode for buttons or icons. If you don’t know how to do this, ask your theme developer.

*Here as an example, we added the link with a custom icon as a column via WYSIWYG Editor type of custom field:*

```
<p style="text-align: center;"><a href="https://woobewoo.com/plugins/table-woocommerce-plugin/" target="_blank" rel="noopener"><img src="https://woobewoo.com/wp-content/uploads/2019/05/icon-example.png" /></a></p>
```

*And added the music player via the same type of custom field:*

```
<iframe src=https://drive.google.com/file/d/1HuF6MObRunMtI0sOkcaHrWtgJ5aSEiwU/preview width=300 height=60 frameborder=0>
</iframe>
```

Also, if you add a custom field with link or file type to the product, you can display them as an icon, link, image or button:

![width=702](https://woobewoo.com/wp-content/uploads/2019/05/custom-icons.png)

**Link:**

**Button** – style depends on your theme template

**Icon:**

**Image** – upload any images as a custom icon (max width – 300px)

**True/False** – set the false or true status for your product. Also, in our plugin you can edit label for True.

![True](https://woobewoo.com/wp-content/uploads/2019/05/True-or-False-column.png)

Look at the example of the **WooCommerce Product table with custom fields here.**

---

## Variable products and settings

**Source:** [https://woobewoo.com/documentation/variable-products-and-settings/](https://woobewoo.com/documentation/variable-products-and-settings/)

**WooCommerce Product Table**plugin fully supports variable products. You can display variations as dropdown lists, together with attribute and category filters. It makes the selection of the necessary products incredibly flexible and fast.

Also, the plugin comes with such options as displaying the thumbnails of the product according to the variation. Show variation thumbnails option allows users to swap different images and see different images of a product variation all in different colour and style.

Moreover, you can either display variations as dropdown lists, as separate rows in the table.

In order to display Variable products with images according to the attribute, you need:

1. Each product should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).
2. **Set the product attributes** in *Products – Attributes* section:![woocommerce](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-attributes.png)
3. Add the information to Add new attribute. Set a name (f.e. colour), a slug and press the Add attribute button. The new attribute will be added to the list.
4. Now, if you open a product, move down to the Product data section, and change **Product data to Variable product.**
5. Click on the Attributes tab, and select a new attribute from the drop-down list in Values:![Attributes](https://woobewoo.com/wp-content/uploads/2019/05/variable-products.png)
6. Enable **Use for variation** for the attribute you want to use for product variations and be available to select in a table. Save the settings.
7. Move to the Variations tab and create variations from selected or all attributes.
8. Add price for every variation.
9. Add the **image** to the variation and other data. Save changes. ![ Add](https://woobewoo.com/wp-content/uploads/2019/05/variable-products-image.png)

### How to display variations in the product table

If you are looking for building an effective WooCommerce store, then you should definitely check out the **WooBeWoo WooCommerce Product Table**plugin that helps you to display goods correctly! The **Product Table** plugin dynamically displays product variants and allows your customers to select the desired product variant to add to their cart in real-time without refreshing the page.

- ### Method 1. Display each variation as a separate product.

Display variations as separate products, you may have added your variations as options but you want to list them as separate goods. Just list them individually in the chart!

In any case, you can specify variations as separate products, even if they are actually variations of the same good. This means that you can list them along with the standard products in one table, with a separate line for each product or variant.

In order to display each option as a separate one, you need to:

–**Create a table of products;**

**-When adding products, click “show variations” and select all the options you need;**

**-Click “Add” and save, now all options will be displayed in separate rows of the table.**

* or just after adding products, check the “Add products variations automatically” checkbox in the table editor menu, and the variations will be added to all variable products in separate rows of the table.

![width=756](https://woobewoo.com/wp-content/uploads/2020/09/Method-1.png)

Read this **documentation article** to find out more .

- ### Method 2. Display options as drop-down lists in the “buy” column.

This is one of the most ideal ways to list drop-downs of options and add to cart buttons directly to product lists. It is much more flexible than displaying variations for each product. Since you significantly save space and the buyer will not scatter eyes all over the page.

Moreover, when choosing a certain option, in real-time mode, its data will also change (for example, price or image).

In order to display a selection of options in the form of drop-down lists in the buy column, you need to:

–**Create a table of products.**

**-Add all the columns you need including Buy.**

**-Add the products you want, including variations.**

– **Select the checkbox with the “Show variation thumbnails” option, so that the product image would change depending on the selected variation in real-time, without refreshing the page. (settings->features)**

**-You can also use the Show first variation as default option .By default, products are displayed with a drop-down list of options for users to select. If you enable the Show first option as default option, the first option will be selected immediately.**

![Show](https://woobewoo.com/wp-content/uploads/2019/05/variations-thumnails.png)

Customers can buy different products faster and easier. They no longer need to go to the product detail page to view product options and prices.

![Display](https://woobewoo.com/wp-content/uploads/2020/09/dropdown.gif)

If you want to hide the drop-down lists altogether, then use the Hide variation attributes option. To do this, go to the **Buy column settings** and check the **Hide variation attributes** option.

![Hide](https://woobewoo.com/wp-content/uploads/2019/05/product_table_hide_variation.png)

- ### Method 3. Show a button for each option.

An “add to cart” button will be added for each variation. This is a great way to display options if the product doesn\’t have many variations.

In order to show the button for each option, you need:

**-Create a table of products.**

**-Add all the columns you need including Buy.**

**-Next, click on the pencil in the Buy column to open the column settings.**

**-Then check the box next to Show a button for each variation.**

Now, each product variation will have its own button in the “buy” column.

![width=972](https://woobewoo.com/wp-content/uploads/2020/09/each-button.png)

- ### Method 4 (new one). Select options in the pop-up.

Now you can let your customers choose options in a beautiful pop-up window as quickly and conveniently as possible.

Let\’s say at this point you\’ve already installed the WooCommerce plugin, created products, and added variations using attributes.

Now you can turn on this impressive option very easy:

**1)** **Create a table of products.**

**2) Add the products you want.**

**3) Add the columns you want, be sure to add the “Buy” column.**

**4) Turn on the “Select” option in the pop-up window. To do that, click on the pencil in the “Buy” column to open the column settings. Then, select the checkbox next to Select options in the pop-up.**

**5) Enter text for the select button.**

**6) After enabling the option, you will see a field in which you can enter text for the option selection button, by default it is “Select Options”.**

**7) While customizing the popup, you can also enable the Short description option to display a short description instead of a full one.**

**8) The Natural order option allows sorting alphanumeric attribute names human familiar.**

Now for products with variations, instead of the add to cart button, you will see a button to select options, after clicking it your customers will have a chance to choose variations in a pop-up window.

While the products will retain the familiar add to cart button unchanged.

Magic, isn’t it? And all that done without a single line of code.

Below you can see and enjoy the work of this option:

![width=759](https://woobewoo.com/wp-content/uploads/2020/09/Variationsss.gif)

Read this **documentation article** to find out more about **Select options in the pop-up**.

This guide should help you understand the variable products and their settings, but if you have any questions, please **contact us** and we will be happy to help you.

---

## Show Private products

**Source:** [https://woobewoo.com/documentation/private-products/](https://woobewoo.com/documentation/private-products/)

If you have private products in the shop, you can also display them in the **WooCommerce Product table**.

In order to add them to the table, you need:

1. Click on the button Add products
2. In the **Manage table content window,** check **Show private** to display them in the list of products.![Manage](https://woobewoo.com/wp-content/uploads/2019/05/Private-Products-1.png)
3. Select and add the private product to the table
4. Move to the **Features tab** and enable the **Show private products** option.

![Settings](https://woobewoo.com/wp-content/uploads/2019/05/Show-Privater.png)

Selected private products will be visible and available for order in the Product table on front-end.

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you

---

## How to translate WordPress plugin?

**Source:** [https://woobewoo.com/documentation/how-to-translate-wordpress-plugin/](https://woobewoo.com/documentation/how-to-translate-wordpress-plugin/)

Translate plugin and send us translation files. Notice that files must be in standard WordPress language format.

### How to translate plugin

If you are looking for the best method to translate a WordPress plugin, you can use [Poedit](https://poedit.net/download). There are other ways to realize translate function for WordPress, but this is the most popular: a cross-platform get text catalogues (.po files), editor.

#### The Formats

.mo stands for Machine Object

— compiled export of the .po file, which is used by WordPress

.po stands for Portable Object

— editable text file with the translations strings

— based on the master .pot file, using Update from POT file PoEdit function

— some folks distribute this as a master file, but it should be used only for translations

.pot stands for Portable Object Template

— editable text file used to grab all the translatable strings from WordPress itself and Themes and Plugins, using Update from Sources PoEdit function

#### The Procedure

Duplicate the .pot file and rename it to plugin-basename-lang_COUNTRY.po

Example for the referenced plugin case: subscribe-reloaded-pt_BR.po

— pt_BR means Portuguese Brazil, but many languages don’t have a country variation…

— you’ll have to fill in with your own language

WPLANG in the wp-config.php file must be set to your language, e.g., pt_BR

Every time you save the .po file, PoEdit automatically generates a .mo file, which is the one WordPress uses and basically the only one you need to upload

#### Observations

If you do a full or a decent partial translation, submit it to the plugin author, so it can include it in the Repository and you get credited for it.

Don’t forget to make a backup of your translation, because if you upgrade the plugin, your file will be lost.

---

## Change currency at checkout

**Source:** [https://woobewoo.com/documentation/change-currency-at-checkout/](https://woobewoo.com/documentation/change-currency-at-checkout/)

**Currency Switcher** provides an opportunity to change the currency at checkout and allow customers to pay in their selected (preferred) currency.

Also, this feature is perfect for WooCommerce shops with a shop currency not in this list:

“ARS, LP, UYU, AUD, BRL, CAD, CZK, DKK, EUR, HKD, HUF, ILS, JPY, MYR, MXN, NOK, NZD, PHP, PLN, GBP, SGD, SEK, CHF, TWD, THB, USD”,

or want to convert into a different PayPal currency to avoid conversion fees by PayPal.

So, you are able to convert any given WooCommerce shop currency to allowed PayPal currencies for PayPal’s Payment Gateway within WooCommerce on checkout.

*Please note*, that some payment systems could use only fixed currencies. PayPal does not support some currencies. So if the main currency, for example, is USA dollar ($) and the user select a euro (€) as a currency to pay, the transaction will be in euro as a customer required. If the customer will select a currency that PayPal does not support – in the checkout a main (default) currency will be displayed.

In order to enable this option, move to the Options tab and enable the Change currency at checkout.

![checkout](https://woobewoo.com/wp-content/uploads/2019/05/checkout-currency.png)

---

## Show Count

**Source:** [https://woobewoo.com/documentation/show-count-option/](https://woobewoo.com/documentation/show-count-option/)

With **WooCommerce Filter**you can display a count of products that match each parameter in a filter, such as a category, tag, or attribute.

![show](https://woobewoo.com/wp-content/uploads/2019/02/show-count.png)

### How to enable Show Count?

**Show count.**In order to display the count for products, open the filter you customize (Product tags, Product categories, Attributes) and check the **Show count.**

**Show parents with children.** It counts parent category and the children. Warning! If filtering will slow do uncheck this option.

![Show](https://woobewoo.com/wp-content/uploads/2019/02/product_filter_show_count.png)

Further, press the**Save button** and the count option will appear in a filter.

### Recount Filter

Initially, the counter will display the number of all products for this parameter, excluding those already selected. But you can change this and automatically recalculate the parameters for the selected filter or price.

To do this, go to the options->content tab and check the checkbox next to the option:

![width=858](https://woobewoo.com/wp-content/uploads/2019/02/Recount-filter.png)

- **Recount Products By Selected Filter.**Automatically recount product by selected filters (If product category loading slowly – Disable this function
- **Recount Min/Max Price By Selected Filter.**Automatically change min/max price by selected filters (If product category loading slowly – Disable this function)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Product rating settings and filtering

**Source:** [https://woobewoo.com/documentation/product-rating-settings-and-filtering/](https://woobewoo.com/documentation/product-rating-settings-and-filtering/)

One of the most important elements on a product page is user-generated content. This can take the form of reviews, images, star ratings, etc. It is a huge factor in the purchase decision for a visitor.

> Reviews can make a serious impact on your sales.

Even negative reviews can be good for your credibility. 95% of consumers think your reviews are fake if they are all positive. So you shouldn\’t be too quick to delete or block those negative reviews!

In this tutorial, we are going to take a look at product reviews and how you can display them in WooCommerce.

## Reviews settings

All the changing your settings for reviews can be done on the **Products tab under WooCommerce > Settings**, as shown below.

![width=838](https://woobewoo.com/wp-content/uploads/2019/02/reviews-woocommerce.png)

1. Firstly, enable product reviews and set the required options:

- Limit the customers who can leave the reviews and enable this option only for verified customers:

![width=688](https://woobewoo.com/wp-content/uploads/2019/02/logged-in-customers-review.png)

- Also, you can display a special label if the review was left by the verified owner.

1. Then enable product ratings to items. These are the stars or number ratings you sometimes see with products (ex. 4/5 stars, 3 stars etc).
2. One more setting you can change is to make it **required**.

---

### WooCommerce Reviews on the Front End

Let\’s make sure reviews work on the front end. They should work fine, but occasionally a theme will not include the right code and reviews aren\’t possible. Let\’s check.

- Go to the frontend of your site.
- Navigate to a product.

> On most themes, reviews will be tucked away at the bottom of the product page in a tab. But sometimes they may be located somewhere else. If you don\’t see them on the product page, it\’s likely your theme doesn\’t support reviews and we advise you to contact your theme developer.

**Let\’s see what a complete review looks like.**

![width=752](https://woobewoo.com/wp-content/uploads/2019/02/rate.png)

Now, logged in customers can write a review, just put a rate and click Submit.

**Logged in** customers able to give a review without moderation.

For not **logged in** users the review would need to be moderated. Nobody else would be able to see this review until it has been approved.

Go back to the *admin panel ->Comments* and you\’ll see that you have one comment awaiting approval.

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/comments-1.png)

From here you can choose to Approve, Reply, Edit, Trash, or mark as Spam.

If we approve this review, we will be able to see it on our site.

---

### Rating filter settings

Now you can use product rating for filtering and display it for your customers. You can set all required settings in the [Rating Filter](https://woobewoo.com/documentation/woocommerce-filter-main-settings/#l)of Product Filter Plugin.

![](https://i.gyazo.com/932c1b4a03ddb0bd81fd7b81eedd8034.gif)

Here you can:

- Put **Filter title** and **description.**
- **Show title labe**l. Here you can choose how to show the title with the function of opening / closing the filter:
- desktop (No; Yes, show as close; Yes show as opened)
- mobile (No; Yes, show as close; Yes show as opened)
- **Show fronted as:**
- checkbox
- dropdown
- Single line star rating
- Multiple star rating

![width=926](https://woobewoo.com/wp-content/uploads/2018/06/rating-types.png)

- **Stars Settings.** If you chose Single line star rating or Multiple star rating, then you can customize the design of rating stars

![Rating](https://woobewoo.com/wp-content/uploads/2019/02/product_filter_rating.png)

## Why add Rating filter?

- The rating can tell customers what the overall opinion of a product is before they even view the page.
- They allow shoppers to see what a reviewer’s opinion is at a glance — especially helpful if there are a lot of individual reviews.
- Products with rating are preferred over those without.

So, give some serious thought to adding stars or numbers for shoppers to visualize ratings — they can have a big impact!

---

## Product categories settings and filtering

**Source:** [https://woobewoo.com/documentation/product-categories-settings-filtering/](https://woobewoo.com/documentation/product-categories-settings-filtering/)

In this tutorial, we will consider the main steps to set up the product categories.

Each product you’re planning to sell should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).

### Create the Categories

In order to set the product Categories, move to the *WooCommerce -> Products – Attributes* section:

Product categories for your store can be managed here. To change the order of categories on the front-end you can drag and drop to sort them.

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/categories.png)

Set a name (f.e. Sale), a slug, select parent category and fill description (optional) and press the **Add new category** button. A new category will appear in the list.

---

### Add the Category to the product

Open a product, move to the right panel, **Categories section**, and add new category/select Parent category:

![woocommerce](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-product-categories-1.png)

Also, you can add a new category as well. Notice, that you can add more than one category for each product.

**Here you can see a short video instruction step by step**

---

### Categories Filter settings

Now you can use created attributes for [filtering by Categories](https://woobewoo.com/documentation/woocommerce-filter-main-settings/#c) in the Product Filter Plugin:

![Filter](https://woobewoo.com/wp-content/uploads/2019/02/product_filter_category.png)

Here you can:

- Edit **Filter title** and**description**.
- Show in front-end as **checkbox list or****drop-down**. Depending on whether you need one or several categories to be available at the same time, you may show your categories list as checkbox or drop-down.
- Set a **Drop-down label**(working with enabled Show on frontend as Dropdown).
- **Product selection.** Choose the way of displaying products: **Should be at least in one category** or **Should be in all selected categories**(working with enabled Show on frontend as Checkbox list).
- **Show images** feature allows you to show the category image(**not** working with **dropdown**).![Show](https://woobewoo.com/wp-content/uploads/2018/06/Show-images-feature.png)
- **Sort by**. Here you may set categories sorting by ascending or descending price.
- **Order by custom.**Categories are displayed according to the order of their selection in the input fields.

![width=1000](https://i.gyazo.com/c60eecacf8c374c6b5573de9c667b989.gif)

- **Show hierarchical.** Show paternal and subsidiary categories (for checkbox list).
- Enable **Show count.**
- **Hide categories without products.**Do not show filter option if there are no products with such category.
- **Product categories.** Here you may select product categories to be displayed on your site from the list. If you want to select several categories, hold the “Shift” button and click on category names. Or you can hold “Ctrl” and click on category names. Press “Ctrl” + “a” for checking all categories.
- **Clear filter only to selected categories.**When the filter is clear, he will be filtered only by selected items. Be careful when using two or more category filters!
- **Exclude terms ids.** Here you may exclude category terms from the filter by ids. Example input: 1,2,3
- **Show search –**enable if you need to add a field for searching  by categories ****
- **Maximum height.**Set maximum displayed height on front-end.
- **Hide child.** Hide child taxonomy.

---

## Show and Hide Cents

**Source:** [https://woobewoo.com/documentation/show-and-hide-cents/](https://woobewoo.com/documentation/show-and-hide-cents/)

With an option Show/Hide Cents, you can turn off the display of cents for each currency.

For this move to the Currencies tab and in Cents column select the necessary value:

![width=748](https://woobewoo.com/wp-content/uploads/2019/02/cents-for-prices.png)

You can set this option for each currency depending on your needs.
![Show/Hide](https://woobewoo.com/wp-content/uploads/2019/02/cents.png)

---

## Currency Rates mode

**Source:** [https://woobewoo.com/documentation/currency-rates-mode/](https://woobewoo.com/documentation/currency-rates-mode/)

## Currency Rates

Currency Rates allows you to get exchange rates for all currencies in the list by selected currency.

In Currency rates settings tab you can customize the **design and display rules:**
![width=799](https://woobewoo.com/wp-content/uploads/2018/06/currency-rates-settings.png)

### Design

- **Toggle panel –** the panel can be displayed by mouse hover, by click or full-size view.
- **Panel width** – choose panel width in px.
- **Position**– choose a basic position of the panel (left, right, top, bottom).
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel and opening button.
- **Enable the dropdown flag** – enable currency flag in dropdown select.
- **Show in currency dropdown** – set the display order and what to display in the dropdown select list: currency codes,currency symbols, titles.
- **Show in currency list** – set the display order and what to display in the list: flags, currency codes and rates,currency symbols, titles.

- **Panel opening button text** – type your text for the opening button.
- **Text colour –**choose a text colour for the opening button.
- **Background colour** – choose a panel background colour for the opening button.
- **Show border** – show opening button outer border.
- **Border-radius for an opening button** – set an opening button border-radius.

![width=699](https://woobewoo.com/wp-content/uploads/2019/02/rates-border-radius.png)
- **Panel header text** – type your text for panel title.
- **Show the inner and outer border and colour** – show panel border.

**Rows stripping** – enable background striping in the panellist.

![width=700](https://woobewoo.com/wp-content/uploads/2018/06/borders.png)
Also, you can set a colour for any type of element:

- header text
- header background
- panel text
- panel background

and font setting for header, panel, opening button.

### Display Rules

> The serrings work in the same way as for Switcher, Tooltip and Converter.

![width=700](https://woobewoo.com/wp-content/uploads/2019/02/screenshot-7-2.png)
- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– select pages from the list on which you want to display the panel or select “Enable” to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.

**Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\',
\'show_flag_dropdown\' => false,
\'show_flag_currency_list\' => false,
\'width\' => \'100%\',
\'exclude\' => array(),
\'show_on\' => \'both\',
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\',
\'show_on_widths_value\' => \'\',
```
For example, if you need to display the converter as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-rates exclude=\'USD,GBP\' show_flag_dropdown=true show_flag_currency_list=true]
```
Check the “Enable” to display the panel on each page. Also, you can display it for certain categories and for custom post types.

---

## Currency Converter mode

**Source:** [https://woobewoo.com/documentation/currency-converter-mode/](https://woobewoo.com/documentation/currency-converter-mode/)

Currency Converter allows you to convert currencies by exchange rates.
![width=808](https://woobewoo.com/wp-content/uploads/2018/06/converter-currency-1.png)

### Design

- **Toggle panel –** the panel can be displayed by mouse hover or by click and full-size view.
- **Layout** – choose a horizontal or vertical panel layout design.

![width=500](https://woobewoo.com/wp-content/uploads/2019/02/horizontal-vertical-layout.png)
- **Panel width** – choose panel width in px.
- **Position**– choose a basic position of the panel (left, right, top, bottom).
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset for mobile and desktop in px and %.
- **Transparent** – change the level of transparency for the panel and opening button.
- **Enable the dropdown flag** – enable currency flag in dropdown select.

![width=336](https://woobewoo.com/wp-content/uploads/2018/06/dropdown-flag.png)
- **Show in currency dropdown** – set the display order and what to display in the dropdown select list: currency codes,currency symbols, titles.
- **Panel opening button text** – type your text for the opening button.
- **Panel opening button font setting** – select opening button font setting.
- **Panel opening button size**– choose a size for an opening button.
- **Text colour for the opening button –**choose a text colour for the opening button.
- **Background colour for the opening button**– choose a panel background colour for the opening button
- **Show border** – show opening button outer border.
- **Border-radius for an opening button** – set an opening button border-radius ![width=803](https://woobewoo.com/wp-content/uploads/2019/02/button-radius.png)
- **Show header** – show panel title.
- **Panel header text** – type your text for panel title.
- **Outer border and colour** – show panel outer border.

Also, you can set a colour and fonts for any type of element:

- header text
- header background
- panel text
- panel background
- convert button text
- convert button background
- convert button hover

![width=1024](https://woobewoo.com/wp-content/uploads/2019/02/converter-examples-1024x215.png)

### Display Rules

It allows you to set the conditions for displaying the converter.

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– select pages from the list on which you want to display the panel or select Enable to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.

**Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\',
\'show_flag_dropdown\' => false,
\'layout\' => \'vertical\',
\'btn_txt_color\' => \'white\',
\'btn_bg_color\' => \'#333\',
\'btn_bg_color_h\' => \'#e58004\',
\'width\' => \'100%\',
\'exclude\' => array(),
\'show_on\' => \'both\',
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\',
\'show_on_widths_value\' => \'\',
```
For example, if you need to display the switcher as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-converter exclude=\'USD,GBP\' layout=horizontal show_flag_dropdown=true]
```
**Save changes.**

Also, you can**add Currency Switcher into the site content with a help of widgets.**

---

## Currency Tooltip mode

**Source:** [https://woobewoo.com/documentation/currency-tooltip-mode/](https://woobewoo.com/documentation/currency-tooltip-mode/)

Currency Tooltip mode allows you to show the price cost of a product by other currencies. ![width=800](https://woobewoo.com/wp-content/uploads/2018/06/tooltip-currency.png)

In this tab the following settings are available:

![Tooltip](https://woobewoo.com/wp-content/uploads/2018/06/currency-tooltip-tab.png)

## Tooltip design
- **Position** – choose a basic position of the panel.
- **Text colour** – сhoose panel text colour.
- **Text size** – сhoose panel text font size.
- **Background colour** – сhoose panel background colour.
- **Show border** – show panel outer border.
- **Border-radius for an opening button** – set an opening button border-radius.

![width=910](https://woobewoo.com/wp-content/uploads/2019/02/tooltip-examples-1.png)

## Display Rules

In the Tooltip display rules tab, you can set the conditions for displaying the tooltip.

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/screenshot-7-2.png)

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– if enabled, the currency module will be displayed everywhere. If you need to display it only on several pages, you can select them in the list for **Pages,****for certain Product categories and for custom post types.** Press Ctrl to select more than 1 page or post.

---

## Currency Switcher mode

**Source:** [https://woobewoo.com/documentation/currency-switcher-mode/](https://woobewoo.com/documentation/currency-switcher-mode/)

With Currency Plugin, you can add the Currency Switcher, Rates and Converter modes and make it functional and match the website design.

To set the Switcher mode, move to the Frontend switcher tab. There are Design and Display settings.

## Design

In the Design tab the following options are available:

![Switcher](https://woobewoo.com/wp-content/uploads/2018/06/Currency-plugin-switcher-settings-1.png)

Select the **type of switcher**: Simple, Floating, Rotating.

![width=739](https://woobewoo.com/wp-content/uploads/2019/01/currency-switcher-type.png)

### Simple type

This type displays Switcher like a bar and includes the following settings:

- **Design.** Here are 2 modes: Classic or Drop-down.
- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Show** – You can select what to display: Flags, Currency codes or Currency symbols.
- **Icon size** – choose icon size for Currency Switcher Simple (small, middle or large).

###
- **Layout** – choose a horizontal or vertical panel layout design.
- **Position**– choose a basic position of the panel (left or right).
- **Icon spacing** – set the distance between currency blocks (margin)
- **Show border** – show panel outer border.
- **Border-radius**– set panel border-radius in px  or% .
- **Border colour** – choose panel border color.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.

### Floating type

Floating type saves space on your store page and floating by mouse-over or by click.

![](https://i.gyazo.com/218a657ab1c4d985232533cf534b5eae.gif)

- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Move current currency to the top** – show current currency at the top of the panel.
- **Show floating order**– set the display order and what to display in the list: Currency codes, Titles, Currency symbols, Currency rates, Flags.
- **Position** – choose a basic position of the panel: left, right, top, bottom.
- **Switcher opening button** – currency codes,currency symbols,flags,text.
- **Switcher opening button font setting** – select switcher opening button font setting.
- **Show current currency only** – show only the current currency in opening button.
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset (only for left and right position for Floating or Rotating type) for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel and opening button.
- **Show border** – show panel outer border.
- **Border colour** – choose panel border color.
- **Show header** – type your text for panel title.
- Panel header **text and background colour** settings
- **Panel header and text font setting** – select panel text font setting.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.

### Rotating type

This type has animation and creative form and design.

![](https://i.gyazo.com/257ebacf95608a73c18dbd301580ebe4.gif)

- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Move current currency to the top** – show current currency at the top of the panel.
- **Show flags in Rotating** – show currency flag in Currency Switcher Rotating.
- **Position** – choose a basic position of the panel: left, right.
- **Vertical offset**– change vertical panel offset for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel.
- **Show border** – show panel outer border.
- **Border colour** – choose panel border color.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.
- **Rotating block text and background colour** –  choose a colour for static and hover elements.

> All the changes you can see immediately in the preview window.

**Here is a different variation of the Currency Switcher types:**

![width=550](https://woobewoo.com/wp-content/uploads/2019/02/screenshot-6.png)

### Display Rules

The mode allows you to set the conditions for displaying the switcher and show it on **All pages**, on **selected pages, products categories or custom post types.**

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/screenshot-7-1.png)

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- ******Display everywhere**– select pages from the list on which you want to display the panel or select “Enable” to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to display a module.

**Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\', (name, title)
\'show_as\' => \'dropdown\', (dropdown, flags)
\'show_flag_dropdown\' => false, (false, true)
\'width\' => \'100%\', 
\'exclude\' => array(), (CODE of Currency ex. UAH)
\'show_on\' => \'both\', (both, desktops, mobiles)
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\', (less, more)
\'show_on_widths_value\' => \'\'
```
For example, if you need to display the converter as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-switcher exclude=\'USD,GBP\' show_as=dropdown show_flag_dropdown=true]
```

Also, you can**add Currency Switcher into the site content with a help of widgets.**

---

## Geo IP rules

**Source:** [https://woobewoo.com/documentation/geo-ip-rules/](https://woobewoo.com/documentation/geo-ip-rules/)

Currency Switcher Plugin comes with **Geo IP rules feature** that provides an automatical change of currency according to customer’s IP.

The first time visitor comes to the site and currency is switched to the one used in the customer country. That will be the currency he will see on the website unless he manually selects another one.

**Set currency automatic by default** option autocompletes countries for your selected currencies.

Also, you can define the currencies for each country.

Using **custom settings** you are able to specify the definition of the currency yourself, just select countries from a list for each currency. All other countries that are not on the list will display a default currency.  To use these settings you need to disable the option “Set currencies automatic by default with GeoIP”.

Using a VPN server we demonstrate changes in prices depend on IP and country:

![width=800](https://woobewoo.com/wp-content/uploads/2019/02/id.gif)

Using this feature, plugin recalculates prices follow the exchange rate value. Exchange rates can be **updated manually or automatically** (e.g. hourly) and always keep your product’s prices valid.

---

## How to add Currency Switcher to the website

**Source:** [https://woobewoo.com/documentation/add-currency-switcher/](https://woobewoo.com/documentation/add-currency-switcher/)

Currency Switcher provides 2 ways to add a module into the site content: with the help of widgets, shortcode and PHP code or using the Display Rules tab for each mode.

### Display rules tab

![width=648](https://woobewoo.com/wp-content/uploads/2019/02/display-rules-and-shortcode.png)

Select the mode you want to add into the page and move to Display rules tab. Here you can find the next settings:

- **Show on** – select the devices on which the panel should be displayed. You are able to show switcher only on mobile, on desktop or both.
- **Show on screen** – if this option is enabled, the mode will be displayed only under the selected conditions, f.e: if the width of the screen is more or less than the specified width
- **Display everywhere**– select Enable to display the panel on each page. Select disable and select pages from the lists on which you want to display the switcher.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to display a switcher.

**Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:

```
\'currency_display\' => \'name\', (name, title)
\'show_as\' => \'dropdown\', (dropdown, flags)
\'show_flag_dropdown\' => false, (false, true)
\'width\' => \'100%\', 
\'exclude\' => array(), (CODE of Currency ex. UAH)
\'show_on\' => \'both\', (both, desktops, mobiles)
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\', (less, more)
\'show_on_widths_value\' => \'\'
```
For example, if you need to display the converter as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-switcher exclude=\'USD,GBP\' show_as=dropdown show_flag_dropdown=true]
```

---

### Widgets

Move to the Appearance -> Widgets and you can find the Currency Switcher widgets:

![width=845](https://woobewoo.com/wp-content/uploads/2019/02/widgets-1.png)

**Each widget has personal settings. Select the widget and specify a widget area or sidebar.**

![width=330](https://woobewoo.com/wp-content/uploads/2019/02/switcher-widget.png)

#### Currency Switcher Widget settings:

- **Title** – put the title of the widget.
- **Width** – set the width for a widget in %
- **Show as** a Dropdown list or Flags icons.
- **Currency Dropdown Options Text** – display a currency code or currency title.
- Enable the option to **show the flag** in a dropdown.
- **Excluded currencies from the list.** The selected currency will not be displayed in the list of switches. Press CTRL + CLICK to toggle select.
- Specify the **display rules** to show switcher on mobile, desktop or both.
- Choose the **screen width** in px to displayed only under the selected conditions.

**Set the settings and press Save.**

#### 

#### Currency Converter widget:

- **Title** – put the title of the widget.
- **Width** – set the width for a widget in %
- **Show as** a Dropdown list or Flags icons.
- **Currency Dropdown Options Text** – display a currency code or currency title.
- Enable the option to **show the flag** in a dropdown.
- **Excluded currencies from the list**. The selected currency will not be displayed in the list of switches. Press CTRL + CLICK to toggle select.
- **Layout** – choose a vertical or horizontal type
- Select a **colour**for Button Text, Button Background and Button Background Hover Color
- Set the**display rules** to show switcher on mobile, desktop or both.
- Specify the **screen width** in px to displayed only under the selected conditions.

**Don\’t forget to Save the changes.**

#### 

#### 

#### 

#### 

#### Currency Rates widget settings:

- **Title** – put the title of the widget.
- **Width** – set the width for a widget in %
- **Currency Dropdown Options Text** – display a currency code or currency title.
- Enable the option to **show the flag** in a dropdown.
- Enable the option to **show the flag** in currency list.
- **Excluded currencies from the list**. The selected currency will not be displayed in the list of switches. Press CTRL + CLICK to toggle select.
- Set the**display rules** to show switcher on mobile, desktop or both.
- Set the **screen width** in px to displayed only under the selected conditions.

Example of the Currency Switcher Plugin widgets:![width=941](https://woobewoo.com/wp-content/uploads/2019/02/Currency-widgets-examples.png)

---

## How to add WooCommerce product filter to the shop?

**Source:** [https://woobewoo.com/documentation/how-to-add-woocommerce-product-filter-to-shop/](https://woobewoo.com/documentation/how-to-add-woocommerce-product-filter-to-shop/)

With the WooCommerce Product Filter plugin you can allow customers  to find easily and fast products in your shop. After plugin activation you can see “Woo Product Filters” on your dashboard where you can create your filter and make requiring settings.

Before starting please make sure that you have the following requirements on your site:

1. [WooCommerce Plugin](https://wordpress.org/plugins/woocommerce/)– Installed and activated.
2. Products with[category and attributes](https://woobewoo.com/documentation/product-attribute-and-category-filters/), tags, price, etc.

This is necessary, because all the filter functions are related to the product category, tags, attributes, price, atc, that you’ve set.

After creating the filter template you can add a Filter in these ways:

– Using a shortcode

– Using a Widget

– Using Elementor

– Using PHP

### The shortcode

Copy Shortcode from filter settings and paste it to your website content.

![Shortcode](https://woobewoo.com/wp-content/uploads/2018/10/wbw-product-filter-shortcode-dropdownpng.png)

For a shortcode, it doesn\’t really matter on what page and where you add it, it will display the filter in this place ignoring almost all restrictions, except that the place where it is added should allow it to initialize.

But, we have added the ability to limit the shortcode to a specific (selected) type of pages if you activate the [Display On Pages](https://woobewoo.com/documentation/display-only-on-page-wpf/) Apply For Shortcode option.

![display](https://woobewoo.com/wp-content/uploads/2018/10/wbw-filter-display-on-pages.png)

Then the Product Filter shortcode will display the filter you created on the appropriate post/page using the settings you tuned in this filter.

### Display Widget

In case you are utilizing Product Filter in your internet store sidebar, then you can use the Product Filter Widget.

To display the Product Filter on a sidebar using the widget, go to the WP Admin > Appearance > Widgets.

![widget](https://woobewoo.com/wp-content/uploads/2018/10/wbw-filter-widget-adding.png)

Find the section for adding widgets to the Sidebar (or another place if necessary).

Click the Plus icon in the middle, in the text search type Filter. A list of widgets related to Filters will appear, select WBW Product Filter.

![Select](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-product-filter-select-filter-for-widget.png)

Once the filter widget is inserted into the sidebar section, select which of your filters you want to display.

Click the drop-down menu inside the widget and select the appropriate filter from the list of filters you previously created.

Click the Update button in the upper right corner of the screen to save your changes.

### Through Elementor interface

WBW Product Filter is integrated with one of the best visual website editors [Elementor](https://woobewoo.com/documentation/compatibility-with-elementor-addons/). This extension allows you to quickly and without programming skills create quite complex and professional-looking pages using drag and drop technology.

We have added a widget of our plugin to Elementor so that you can add and configure the Product Filter to your site without leaving the page editor.

It works simply, while in page edit mode, type Filter in the Widgets search box.

![elementoe](https://woobewoo.com/wp-content/uploads/2018/10/elementor-widget-for-product-filter.png)

You will see a widget called Woofilters, add it with your mouse to the desired place on your page.

![Creating](https://woobewoo.com/wp-content/uploads/2018/10/elementor-new-filter-create.png)

After this, the widget settings menu will open and you will be asked to Create a new filter or Select a previously created one.

![adding](https://woobewoo.com/wp-content/uploads/2018/10/elementor-adding-new-filter-sections.png)

If you select Create new, a menu will open in the widget settings where you can add and configure all the necessary filter sections.

### Using PHP

Filter PHP code can be inserted at any place of the page code – to display exactly in this place, for example in the header or footer of the page.

![php](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-product-filter-php-shortcode.png)

To get this code, select Filter PHP Code from the drop-down menu at the top of the Filter editor.

This code can be embedded, for example, into page templates that do not have space for a sidebar or filter, thus bypassing the limitations of the design theme.

Here are few examples of how to embed a PHP shortcode for a product filter in a WooCommerce page template:

#### 1. Embedding in a WooCommerce Template (e.g., archive-product.php)

This code adds the filter before the product list:

> <?php
> // Insert the shortcode before the product list on the catalog page
> echo do_shortcode(\'[wpf-filters id=12]\’);
>  
> // Display WooCommerce products
> if ( woocommerce_product_loop() ) {
>     woocommerce_product_loop_start();
>     
>     while ( have_posts() ) {
>         the_post();
>         wc_get_template_part( \’content\’, \’product\’ );
>     }
>     
>     woocommerce_product_loop_end();
> } else {
>     do_action( \’woocommerce_no_products_found\’ );
> }
> ?>

#### 2. Embedding in functions.php Using a Hook

If you want to add the filter to the shop page viafunctions.php, you can use thewoocommerce_before_shop_loophook:

> function add_custom_product_filter() {
>     echo do_shortcode(\'[wpf-filters id=12]\’);
> }
> add_action(\’woocommerce_before_shop_loop\’, \’add_custom_product_filter\’);

This code will insert the filter before the product list on the shop page.

These examples will help you integrate the filter into WooCommerce templates in a convenient way.

---

## Add to cart button and variations

**Source:** [https://woobewoo.com/documentation/add-to-cart-button-and-variations/](https://woobewoo.com/documentation/add-to-cart-button-and-variations/)

Product Table gives you all the control which information to show in the product table.

**WooCommerce Product Table** comes with **Add to cart button**, plus options of **Add selected to cart**, **Add all to cart** .

Firstly, everything that you need to do, move to “**Select properties to add to the table**” in the Content Tab and add “Buy” property to the table.

![Buy](https://woobewoo.com/wp-content/uploads/2018/10/Buy.gif)

### Table with Add selected card and Add all to a cart

In order to add features move to**Feature Tab**.

![Feature](https://woobewoo.com/wp-content/uploads/2018/10/Add-selected-to-cart.png)

**Add selected to cart .**Multiple add to cart selected products .As a result, customers can select a number of necessary products and add everything in cart in one go.
If you added a button **add selected to cart** you can also select**Checkboxes position: First or Last Column .**
*Last column does not work in Responsive mode and Automatic column hiding mode with Server-side Processing.
**Add all to cart.**This button allows your customers to add all the products in the table to the shopping cart.
**Min/Max bunch add to cart.** Regulate min/max bunch add to cart.
![Min/Max](https://woobewoo.com/wp-content/uploads/2018/10/product_table_min_max.png)

### Show message after put product to cart

Standard visuals prevent the user from knowing what to do next.

Practice shows that pop-ups with an offer to place an order or continue shopping do a good job with this task.

Go to **Settings / Features t**o enable this option enable **Show message after put product to cart** option

**Popup position .**Here you can also choose where to display the popup with a message about adding to the cart.

![Popup](https://woobewoo.com/wp-content/uploads/2018/10/Popup-position.png)

### 

### Hide view card link

By default, the plugin comes with a **View Cart** link, but you can choose not to display it.

To do this, go to **Settings / Features** and select the Hide view cart link option .

After adding the product, this link will not appear:

![](https://i.gyazo.com/bcd0d045741457f1d538872b937df7ee.png)

### Product Table with hidden quantity input

Explore **this article** to learn more about how to **Hide quantity input** at the buy button

![](https://i.gyazo.com/3b5043ce4e0c203d39763bf76aacdb8a.png)

### Added cart button to Thumbnail column

You can put a buy button right below the picture of your product. To do this, go to the plugin menu->Content-> go to the Thumbnail column settings and check the Added cart button option. Save your changes.

### 

Now there will be a button below the product image, which you can customize in the same way as the button in the Buy column.

### 

### Add to cart button design

Explore**this article**to learn how to style and customize your Add to Cart button

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Product Table Appearance Settings

**Source:** [https://woobewoo.com/documentation/appearance-settings/](https://woobewoo.com/documentation/appearance-settings/)

With a [WooCommerce Product Table](https://woobewoo.com/plugins/table-woocommerce-plugin/), you can make a table more attractive and informative. We propose all the necessary options to set the appearance of the table in the best way.

### Custom Table styling

Choose your custom table styles below. Any settings you leave blank will default to your theme styles.

**Borders external.**Set the border color and width in px:****

---

**Borders header.**Set the color and width for a header. These settings apply to a header, footer and “search by columns” field. ****

---

**Borders rows**

---

**Borders columns**

![width=734](https://woobewoo.com/wp-content/uploads/2018/10/Borders-columns.png)

---

**Header background.**These settings apply to a header, footer and “search by columns” field. ****

---

**Header Font.**Select the font for a header (the same for a footer), font size and color:****

---

**Cell background**

---

**Cell font.**Select the font for cells, font size and color:****

---

**Search Bar Colors.**Here you can set the color of background, font and border:****

**Fixed Layout** – set all columns of the same width.

**Vertical alignment** – set the vertical alignment of table cell contents.

**Horizontal alignment** – set the horizontal alignment of table cell contents.

**Pagination Position** – set pagination buttons position, left, center, right.

*Important! After you changed the settings of the plugin don’t forget to click the “Save” button.*

### You can set the following Table elements in the Main tab:

- **Caption** – the name of the table above the table.
- **Description** – Description of the table between title and table.
- **Signature** – signature under table footer.
- **Header** – the table head.
- **Footer** – the table footer.

Here you can see their appearance and position in the Product table:

![width=800](https://woobewoo.com/wp-content/uploads/2018/10/table-elements-product-table-woocommerce-1.png)

---

#### Also, you can  set some additional settings of the visual style in the Appearance Tab:

**Fixed Table Width.** Set a fixed table width in PX or %.

**Summary column width.** Set width to a summary column or leave it empty to default.

**Mobile screen width.**Select screen width to hide columns. Which columns should be hidden on small screens, you can set on the Content tab in the column options.

**Borders.**  *Cell* – adds a border around all four sides of each cell, *Row* – adds border only over and under each row. (i.e. only for the rows), *None.*

![borders](https://woobewoo.com/wp-content/uploads/2018/10/borders-product-table.png)

**Row Striping –** add row striping to a table, it will display rows background in two similar shades of color to alternately.

![Row](https://woobewoo.com/wp-content/uploads/2018/10/Row-Striping.png)

**Highlighting by Mouse-hover**– add row highlighting on mouseover.

![](https://i.gyazo.com/86cf4eba34658973c23ac4ecfc06fedb.gif)

**Highlight the Order Column.** If enabled – the currently sorted column will be highlighted.

![](https://i.gyazo.com/1c77fa6d49a21ad1a90b89bb24a116f8.gif)

**Hide Table Loader.** Enable/disable table loader icon before the table will be completely loaded.

**Border color.** Choose any color for the loader.

**Table Loader Icon.** Choose the icon type for the loader.

![](https://i.gyazo.com/e1fdefb1dfade8215b17b91165488172.gif)

---

---

## Searching

**Source:** [https://woobewoo.com/documentation/searching-feature-of-product-table/](https://woobewoo.com/documentation/searching-feature-of-product-table/)

**WooCommerce Product Table** comes with a **Searching feature**, that is displayed like a search box above the table. This allows your customers to instantly filter the table to products with a specific keyword or search term.

For example, we have typed the term “hoodie” in the search box. Like a result, the option has filtered the table to the 3 products which match that term:

![Searching](https://i.gyazo.com/b6e6ad75f60f183b0474b1b93c1ee87b.gif)

You can enable the Searching option in the Settings/Features:
![Search](https://woobewoo.com/wp-content/uploads/2018/10/product_table_search_by_letter.png)

The other useful option is  **Search by letter**. It shows the alphabet for search by the first letter.

Also, **Searching** allows the user to input multiple words (space separated) and will match a row containing those words, even if not in the order that was specified.

![Searching](https://i.gyazo.com/86fb4b2cf126c28c691ab0f39cab8e2d.gif)

Searching Feature is a must-have option, with the help of which you can make the shopping on your website comfortable, easy for browsing and searching! Moreover, **working together with the Sorting feature****,** your tables will be twice more accessible to users.

Besides, the search option from the Product Table plugin has extremely useful functionality **Accent neutraliling**. It means that the search option will react to the symbol. For example, if you are writing é à ù è ö the search is made as if you are typing a u e o. The option is located in the **Settings** tab.

![Accent](https://woobewoo.com/wp-content/uploads/2018/10/product_table_accent_neutraliling.gif)

In some cases, to improve search results, it becomes necessary to exclude certain columns from the search.

This can be done by going to the settings of the column you need and activating the **Disable search on this column** checkbox.

![Disable](https://woobewoo.com/wp-content/uploads/2018/10/searchdis.png)

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## Sorting

**Source:** [https://woobewoo.com/documentation/sorting-product-table/](https://woobewoo.com/documentation/sorting-product-table/)

**WooCommerce Product Table** has a sorting feature, so customers can click on a column heading and sort by that column.

#### You can sort by any table property: Name, SKU, Date, Price and other.

The table is sorted alphabetically and numerically. Sorting works for any type of content – numbers, text, date. You can find control indicators at the top of the column. When you sort a column, the indicator becomes colored thus showing which column is currently sorted. The arrow to the bottom points the descending direction while the arrow to the top points the ascending sorting.

![Sorting](https://woobewoo.com/wp-content/uploads/2018/10/product_table_sorting.png)

To enable the **Frontend sorting** option, move to the plugin Settings-> Features:

This is allow enable dynamic sorting with arrows. To use this option you must enable Header option

![Frontend](https://woobewoo.com/wp-content/uploads/2018/10/Sorting.png)

**Auto-sorting.**You have an option to select the column for sorting from the list. The table will be sorted by a selected property on the frontend. Select the column to sort by default.  (Works only with relevant columns enabled)

**Auto-sorting descending.** The default is the 1st column and “Ascending” order for the sorting. Enable the checkbox if you want to sort by descending.

### Highlight Sorted Column

Also, you can enable a **Highlight Sorted** **Column option** in the Settings-> Appearance tab to make the sorting column more visible and convenient for viewing.

![Highlight](https://woobewoo.com/wp-content/uploads/2018/10/Sorted-Column.png)

Try this feature and make the product table more accessible to customers:

[wtbp-table-press id=8]

Still, have questions? Read our detailed**documentation** or **Contact us** and we will be happy to help you.

---

## How to display Product attribute and category filter

**Source:** [https://woobewoo.com/documentation/product-attribute-and-category-filters/](https://woobewoo.com/documentation/product-attribute-and-category-filters/)

All information about a product, that you can give to the customers to let them pick and make decision, is a key to sell more goods in your store.

> For this purpose you need to find the way to display the attributes and categories for each product.

Using WooCommerce Product Table plugin by Woobewoo, you can create an attractive, well-organized table that represent all products and offers in the best way.

**Attributes and Categories** are information about the product properties, f.e. size, color, gender, etc. Add them to each product and provide an extra data to let customers search for items by category and attributes.

#### How to display attribute and category filter on WooCommerce shop with Product Table Plugin

1. Each product you’re planning to sell should be [listed as a WooCommerce product](https://docs.woocommerce.com/document/managing-products/).
2. **Set the product attributes** in *Products – Attributes* section:

![woocommerce](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-attributes.png)

Add the information to Add new attribute. Set a name (f.e. color), a slug and press the Add attribute button. New attribute will be added to the list.
Now, if you open a product, move down to the**Product data** section, click on the **Attributes** tab, and select new attribute from the drop-down list:

You can include one or more options per attribute. Then **Save attributes** and **update** each product you modify in this way.

3. Set the product **Categories** in**Products – Attributes** section:

![product](https://woobewoo.com/wp-content/uploads/2018/10/product-categories.png)

Make the similar settings and add the information to **Add new category**. Set a name (f.e. Hoodies), a slug, select parent category and fill description (optional) and press the**Add new category** button. New category will be added to the list.
Open a product, move to the left, **Product Categories** section, and add new category/select Parent category:

![woocommerce](https://woobewoo.com/wp-content/uploads/2018/10/woocommerce-product-categories-1.png)

4. Now if you want customers to be able to find products with attributes and category, add dropdown menus above the table. You can do this enabling**Attribute** and **Category Filter** check-boxes on the **Product table** settings page in the Feature Tab:

![Attribute](https://woobewoo.com/wp-content/uploads/2018/10/Attribute-FIlter.png)

Enable **attribute filter** and select the attribute that will be sorted: Size, Color or any custom attribute. Category filter works for all categories which were been added to the products, e.g. gender, type of product, clearance etc. Filters work only with enabled **category** and **attibute** columns.

With filters for your customers and full control for you, this is a must-have feature for any **WooCommerce** online store. After these easy settings, your customers can filter by attributes and all categories and find exactly what they’re searching for!

**Try it now!**

[wtbp-table-press id=6]

---

## How to add a Product Table to a page

**Source:** [https://woobewoo.com/documentation/how-to-add-a-product-table-to-a-page/](https://woobewoo.com/documentation/how-to-add-a-product-table-to-a-page/)

Once you’ve **installed** the WooCommerce Product Table plugin and set the **Main settings,** it’s time to add product tables to a page.

To add a product table, go to the Product Table Plugin and use shortcodes from the list of tables:

![Shortcode](https://woobewoo.com/wp-content/uploads/2018/10/product_table_shortcode.png)

Also,you can open Product Table and copy shortcode above the main tabs:![Short](https://woobewoo.com/wp-content/uploads/2018/10/product_table_short.png)

### There are available Table Shortcode and PHP code

Copy **Shortcode** and paste it to your website content, then Product Table plugin will display the table you created on appropriate post/page using settings you tuned in this table.

**Table PHP code** can be inserted at any place of the page code – to display exactly in this place, for example in the header or footer of the page. Besides, it can be inserted in the code of template of the theme – to display on all pages.

---

## Table Content Settings

**Source:** [https://woobewoo.com/documentation/table-content/](https://woobewoo.com/documentation/table-content/)

Product Plugin is very simple to set up and take just a minute to manage Table Content and Columns.

Before to make [Product Table Settings,](https://woobewoo.com/documentation/woocommerce-product-plugin-settings/) firstly you need to add products to the table in the *Content tab.*

> The plugin uses the product data already created by WooCommerce itself. You can add products to WooCommerce manually or add them using a CSV/XML import.

Just one click – and all your products uploaded into the table content.

### Add products to the table

- ### Manually

Select the necessary items and add them to Manage Table Content.

You can select all the products at once or filter them by:

- category
- attribute
- author
- tag
- in a table: yes/no

and sort product in order by

- name
- SKU
- price
- date and other parameters

Searching by keyword and product SKU is available.

Also, here you can find checkboxes with the following parameters:

- only current attribute – filter by attribute will display the single attribute exactly matches the search criteria.
- show variation – display the variation of the variable product separately.  ![width=775](https://woobewoo.com/wp-content/uploads/2018/06/product-variations-.png)
- show private – display private products on the list.

- ### Automatically

One more way to easily**add products automatically** **(pro)** by category multiselection – just choose categories from the drop-down list. All the new products you will add to your shop will be automatically added to the table according to the selected category. All the new products you will add to your shop will be automatically added to the table according to the selected category.

![width=619](https://woobewoo.com/wp-content/uploads/2018/06/add-product-auomatically.png)

### Columns Settings

Once you selected and added columns to the table, you can click on the Pencil icon to edit column properties.

All columns have similar settings, some of them have additional properties.

Here is a list of column properties you can setup:

![width=300](https://docs.woocommerce.com/wp-content/uploads/2020/01/name-column.png?w=418)

**Column settings:**

**Name.** Use the default title of the column or rename it and enable the field for the custom title.

**Column width.**This setting sets the maximum width for the column, but the rest of the table content also affects its width – check how it looks on Preview.

Enable “**Hide/show on small screens**” if you want to make this column hidden. The screen size you can set in the Appearance tab:
![width=377](https://docs.woocommerce.com/wp-content/uploads/2020/01/mobile-screen-settings.png?w=439)

Check the last setting if you need to **open the link on a new window**.

**Show product link** – disable is you don’t need to make name clickable.

**Responsive mode thumbnail size**(for Thumbnails) – Set the size in the pixels to display full-size thumbnails on mobile.

**Cut description text**(for Summary and Short description) – set the number of characters of text to display in the column.

**Show icons/text** -(for Stock Status) – select in which way to display status – as an icon, text or both.

**Show quantity items in-stock**(for Stock Status) – display the quantity of available product. The option works with variable products too.

**Show as an icon, text or image** (for Features). You can select the icon or upload the image to display

Display download link as an **icon**, **button**, **link**, **audio**, **video**(for Downloads). For displaying links you need to fill up the downloadable files form in product settings.

If you want to download link, opens in a new window, enable **Open link in a new window**In the Downloads column settings.

![width=979](https://woobewoo.com/wp-content/uploads/2018/06/downloadinnew.png)

Note – all the features values are synced with WooCommerce, so you can’t edit its content directly; to manage any of them, you need to change product properties via WooCommerce Product editing.

Now, content for the table is ready and you can move to **the Settings tab** for further customization. ****

---

## Getting Started with WooCommerce Currency Switcher

**Source:** [https://woobewoo.com/documentation/woocommerce-currency-switcher-plugin/](https://woobewoo.com/documentation/woocommerce-currency-switcher-plugin/)

In this article, we\’ll navigate you through installing the plugin and implementing it to your site content.

### Step 1 – Currency Switcher Plugin installation

1. Navigate to Plugins -> Add New in your admin panel.
2. Press Upload file and choose a plugin archive from a folder.
3. Move to Plugins menu, find our plugin and click Activate

Done! Now you\’re ready to start working with WooCommerce Currency Switcher plugin.

### Step 2 – Moving to the plugin directly

As in your left panel should have appeared new tab WooCurrency. Click on it and it will redirect you to a special tab in the WooCommerce plugin (you can also go there via WooCommerce -> Settings -> Currency Switcher ).

We don\’t emphasize any special settings of the plugin, cause you can learn more about them **in the Main Settings Full tutorial.**

> Don\’t forget to save changes after you\’ve finished with setting it up!

### Step 3 – Manage the Currency main settings

Of course, the plugin provides a wide list of settings for each currency. Here you can make the following tune-up:

![width=702](https://woobewoo.com/wp-content/uploads/2018/06/Currency-main-settings.png)

- Set the base currency. This currency will be displayed as the default value in the Switcher and will give the starting point for getting the exchange rate for the other currencies.
- Currency code. Select the currency.
- Flag. Flag icon will be automatically added in appliance with selected currency. You can select any required from the list.
- Title. Enter currency Title.
- Symbol. Select currency symbol or just type and add Custom Symbol (Pro).
- Position. Select the position of the currency sign.
- Cents. Show/Hide Cents of Front to Currency.
- Converter rates. This rate is updated automatically with a selected Currency Aggregator.
- Manual Rate. This value overwrites the automatic rate from field Converter Rates. Input value in the following format example: 12.5035

![](https://i.gyazo.com/c38c179a3b0b7e48806576e557ae347d.gif)

### Step 4 – Select the Currency Aggregator

The plugin makes full use of **Cryptocompare and Free Converter**Aggregator which are providing the latest exchange rates, and substitute displayed prices in real-time.

> Select the free API key of the converter in this field. Read instructions on how to get a free API key for the converter. If the field is empty, Free Converter will use the default API key – this may create an error when getting the exchange rate.

Also, in the Pro version an Automatic exchange rate updates are available for a certain period: **every minute, hourly, twice a day, daily, weekly or manual.**

Exchange rates updates option lets to send a notice to admin email with result values.

You can provide an option to **use a selected currency in checkout** for your customers. In order to use this feature – enable Change currency at checkout. Please note, that some payment systems (like PayPal) could use only fixed currencies.

![width=768](https://woobewoo.com/wp-content/uploads/2018/06/Currency-options-1.png)

### Step 5 – Design settings for Currency Switcher/Converter/Rates

The plugin comes with a lot of design settings to customize the switcher the way you like. You can select the type of switcher, position on the page, offset, borders, colours for every element. Learn more about these settings here: [Currency Switcher Design.](https://woobewoo.com/feature/currency-switcher-design/)

### Step 6 – Adding Currency Switcher into a post or page

Frontend Switcher, Currency Converter and Currency Rates Tabs have a Settings for Display Rules:

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions.
- **Display everywhere**– select pages from the list on which you want to display the panel or select Enable to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.

**Save changes.**
---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\', (name, title, symbol)
\'show_as\' => \'dropdown\', (dropdown, flags)
\'show_flag_dropdown\' => false, (false, true)
\'width\' => \'100%\', 
\'exclude\' => array(), (CODE of Currency ex. UAH)
\'show_on\' => \'both\', (both, desktops, mobiles)
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\', (less, more)
\'show_on_widths_value\' => \'\'
```
For example, if you need to display the switcher as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-switcher show_as=dropdown show_flag_dropdown=true]
```

Also, once you set the options, you can display **WooCommerce Currency as a widget.**

Move to the “Appearance” > Widget.

Here you can find the widgets:

- WooCommerce Currency Switcher
- WooCommerce Currency Converter
- WooCommerce Currency Rates.

Customize widget settings such as **Excluded Currencies, Title, Width, Currency, Dropdown Options Text and Color**to be displayed on the front-end according to your preference.

---

## Currency Switcher Main Settings

**Source:** [https://woobewoo.com/documentation/currency-main-settings/](https://woobewoo.com/documentation/currency-main-settings/)

First of all, we would like to thank you for using WooCommerce Currency Switcher Plugin. Currency Plugin allows you to display prices in multiple currencies, use an unlimited number of currencies and set the exchange rate for each currency manually or automatically. The following guide will help youto setup our plugin and increase the reach of your site to an international level in no time. Let\’s get started!

- [Currencies](/#1)
- [Options](/#2)
- [Frontend Switcher](/#3)
- [Tooltip](/#4)
- [Currency Converter](/#5)
- [Currency Rates](/#6)
- [Custom CSS](/#7)
- [Geo IP rules](/#8)
- [Custom Flags](/#9)
- [Custom Currencies](/#10)

---

Move to WooCommerce > Setting > Currency.

![Currency](https://woobewoo.com/wp-content/uploads/2018/06/Currency-plugin-location.png)

Before configuring the Currency Switcher Plugin, you should decide which currencies you are going to show on your site.

*Our recommendation is to enable only the currencies that are most important to your business, as enabling too many could make the site confusing.*

---

## Currencies Tab

In the Currency tab firstly you can set your WooCommerce shop basic currency. Then choose currencies you want to add from drop-down lists and set the exchange rate for each currency.You can hold and drag the cursor on the row to change the position of the currency.

![](https://i.gyazo.com/d33d019b3ae0a80f527f78786c0c1103.png)

#### Here are the following settings available:

- **Set the base currency**. This currency will be displayed as the default value in the Switcher and will give the starting point for getting the exchange rate for the other currencies.
- **Currency code.** Select the currency.
- **Flag.** Flag icon will be automatically added in appliance with selected currency after you save the settings. You can select any required flag from the list.
- **Title.** Enter currency Title, f.e: pound for the GBP, dollar for the USA etc.
- **Symbol.** Select currency symbol or just type and add Custom Symbol (Pro).
- **Position.** Select the position of the currency sign.
- **Cents.** Show/Hide Cents on Front to Currency.
- **Converter rates.** This rate is updated automatically with a selected Currency Aggregator.

The exchange rate used to convert an amount from your base currency to the currency indicated in the row.*For example, if your base currency is GBR, and you are on the row for USD, an exchange rate of 1.5 indicates that 1 GBR will correspond to 1.5 US Dollars.***Enter exchange rates manually.**You can choose this way to define a fixed currency exchange rate and avoid any fluctuation in the exchange market. It will require you to keep an eye on the market and change the values accordingly.You can set the exchange rates manually as follows:
- **Manual Rate**. This value overwrites the automatic rate from field Converter Rates. Input value in the following format example: 12.5035

1. Click the Manual Rate column, next to the currency for which you would like to set the exchange rate.
2. Enter the exchange in the Manual Rate column. Important: you must enter a valid exchange rate, which must be numeric, greater than zero, and with the point as a decimal separator, or the Currency Switcher will consider the rate invalid. The formatting of the prices on thefrontendwill still use the decimal separator you configure for the currency.
3. Please, click the Save Changes button after all the changes you made.

## Options tab

The plugin makes full use of [Cryptocompare](https://www.cryptocompare.com/)and **Free Converter, RatesApi, The Free Currency Converter by European Central Bank** aggregators which are providing the latest exchange rates, and substitute displayed prices in real-time. You can select the rate using these interactive platforms and grab the latest exchange rates.

Put the free**Converter**API key of the converter in this field. Read [instructions](https://free.currencyconverterapi.com/free-api-key)on how to get a free API key for the converter. If the field is empty, Free Converter will use the default API key – this may create an error when getting the exchange rate.

**Automatic exchange rates updates** *(Pro)*allows to update the rates by a certain period: every minute, hourly, twice a day, daily, weekly or manual.

**Exchange rates updates** option lets to send a notice to admin email with result values.

You can provide an option to **use a selected currency in checkout** for your customers. In order to use this feature – enable “Change currency at checkout”. Please note, that some payment systems (like PayPal) could use only fixed currencies.
![width=768](https://woobewoo.com/wp-content/uploads/2018/06/Currency-options-1.png)

## Frontend Switcher tab

With Currency Plugin, you can make the Currency Switcher not only functional but also match the website design.

Currency Switcher allows you to switch the currency of the products according to the selected settings:

![width=900](https://woobewoo.com/wp-content/uploads/2018/06/Currency-plugin-switcher-settings-1.png)
Firstly, you can select the type of switcher. Every type have slightly different settings:

### Simple type displays the Switcher like a bar.

![](https://i.gyazo.com/79446a6cd05bf776fc8506b7222df096.gif)

- **Design.** Here are 2 modes:Classic or Drop-down.
- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Show** – You can select what to display: Flags, Currency codes or Currency symbols.
- **Icon size** – choose icon size for Currency Switcher Simple (small, middle or large).
- **Layout** – choose a horizontal or vertical panel layout design.
- **Position**– choose a basic position of the panel (left or right).
- **Icon spacing** – set the distance between currency blocks (margin)
- **Show border** – show panel outer border.
- **Border-radius**– set panel border-radius in px or% .
- **Border colour** – choose panel border color.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.

### Floating type saves space on your store page and floating by mouse-over or by click.

![](https://i.gyazo.com/3eb8dec4aefff6c35428fa6c4aec6457.gif)

- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Move current currency to the top** – show current currency at the top of the panel.
- **Show floating order**– set the display order and what to display in the list: Currency codes, Titles, Currency symbols, Currency rates, Flags.
- **Position** – choose a basic position of the panel: left, right, top, bottom.
- **Switcher opening button** – currency codes,currency symbols,flags,text.
- **Switcher opening button font setting**– set the switcher opening button font setting.
- **Panel opening button size**– choose a size for an opening button.
- **Show current currency only** – show only the current currency in opening button.
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset (only for left and the right position for Floating or Rotating type) for mobile and desktop in px and %.
- **Show border** – show panel outer border.
- **Border colour** – choose panel border color.
- Panel header and Panel text font setting.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.

### Rotating type has the animation and creative form and design.

![](https://i.gyazo.com/257ebacf95608a73c18dbd301580ebe4.gif)

- **Toggle Switcher –** the panel can be displayed by mouse hover or click.
- **Move current currency to the top** – show current currency at the top of the panel.
- **Show flags –**show currency flag in Currency Switcher Rotating.
- **Position** – choose a basic position of the panel: left, right.
- **Vertical offset**– change vertical panel offset for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel.
- **Show border** – show panel outer border.
- **Border colour** – choose panel border color.
- **Text colour –**choose a panel text colour for static and hover elements.
- **Background colour** – choose a panel background colour for static and hover elements.
- Rotating block text and background colour – choose a colour for static and hover elements.

> All the changes you can see immediately in the preview window.

![](https://i.gyazo.com/414b156efb871f5687e88dcbd6c581e2.gif)

### Display Rules

The mode allows you to set the conditions for displaying the switcher and show it on **All pages**, on **selected pages or posts.**

![width=648](https://woobewoo.com/wp-content/uploads/2019/02/display-rules-and-shortcode.png)

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– select pages from the list on which you want to display the panel or select Enable to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.
- **Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\', (name, title)
\'show_as\' => \'dropdown\', (dropdown, flags)
\'show_flag_dropdown\' => false, (false, true)
\'width\' => \'100%\', 
\'exclude\' => array(), (CODE of Currency ex. UAH)
\'show_on\' => \'both\', (both, desktops, mobiles)
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\', (less, more)
\'show_on_widths_value\' => \'\'
```
For example, if you need to display the switcher as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-switcher show_as=dropdown show_flag_dropdown=true]
```

## Tooltip

Currency Tooltip allows you to show the price cost of a product by other currencies. In this tab the following settings are available:

![width=800](https://woobewoo.com/wp-content/uploads/2018/06/currency-tooltip-tab.png)

### Design
- **Position** – choose a basic position of the panel.
- **Text colour** – сhoose panel text colour.
- **Text size** – сhoose panel text font size.
- **Background colour** – сhoose panel background colour.
- **Show border** – show panel outer border.
- **Border-radius for an opening button** – set an opening button border-radius.
![width=800](https://woobewoo.com/wp-content/uploads/2018/06/tooltip-currency.png)

### Display Rules

> The mode works in the same way as for Switcher, Converter and Currency rates.

It allows you to set the conditions for displaying the switcher and show it on **All pages**, on **selected pages or posts.**

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– select pages from the list on which you want to display the panel. Press Ctrl to select more than 1 page or post.
Check the Enable to display the panel on each page. Also, you can display it for certain categories and for custom post types.

## Currency Converter

Currency Converter allows you to convert currencies by exchange rates.
![width=808](https://woobewoo.com/wp-content/uploads/2018/06/converter-currency-1.png)

### Design

- **Toggle panel –** the panel can be displayed by mouse hover or click and full-size view.
- **Layout** – choose a horizontal or vertical panel layout design.
- **Panel width** – choose panel width in px.
- **Position**– choose a basic position of the panel (left, right, top, bottom).
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel and opening button.
- **Enable dropdown flag** – enable currency flag in dropdown select.
![width=336](https://woobewoo.com/wp-content/uploads/2018/06/dropdown-flag.png)
- **Show in currency dropdown** – set the display order and what to display in the dropdown select list: currency codes,currency symbols, titles.
- **Text colour –**choose a text colour for the opening button.
- **Background colour** – choose a panel background colour for the opening button.
- **Panel opening button text** – type your text for the opening button.
- **Show border** – show opening button outer border.
- **Border-radius for an opening button** – set an opening button border-radius
- **Show header** – show panel title.
- **Panel header text** – type your text for panel title.
- **Outer border and colour** – show panel outer border.

Also, you can set a colour and font for any type of element:

- header text
- header background
- panel text
- panel background
- button text
- convert button background
- convert button hover

### Display Rules

> The mode works in the same way as for Switcher, Tooltip and Currency rates.

It allows you to set the conditions for displaying the switcher and show it on **All pages**, on **selected pages or posts.**

- - **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:

- **Display everywhere**– select pages from the list on which you want to display the panel or select Enable to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.

**Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\',
\'show_flag_dropdown\' => false,
\'layout\' => \'vertical\',
\'btn_txt_color\' => \'white\',
\'btn_bg_color\' => \'#333\',
\'btn_bg_color_h\' => \'#e58004\',
\'width\' => \'100%\',
\'exclude\' => array(),
\'show_on\' => \'both\',
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\',
\'show_on_widths_value\' => \'\',
```
For example, if you need to display the switcher as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-converter exclude=\'USD,GBP\' layout=horizontal show_flag_dropdown=true]
```

## Currency Rates

Currency Rates allows you to get exchange rates for all currencies in the list by selected currency.
![width=932](https://woobewoo.com/wp-content/uploads/2018/06/currency-rates-settings.png)

### Design

- **Toggle panel –** the panel can be displayed by mouse hover or click and full-size view.
- **Panel width** – choose panel width in px.
- **Position**– choose a basic position of the panel (left, right, top, bottom).
- **Vertical and Horizontal offset**– change horizontal and vertical panel offset for mobile and desktop in px and %.
- **Transparent**– change the level of transparency for the panel.
- **Show border** – show panel outer border.
- **Enable dropdown flag** – enable currency flag in dropdown select.
- **Show in currency dropdown** – set the display order and what to display in the dropdown select list: currency codes,currency symbols, titles.
- **Show in currency list** – set the display order and what to display in the list: flags, currency codes and rates,currency symbols, titles.
- **Panel opening button text** – type your text for the opening button.
- **Text colour –**choose a text colour for the opening button.
- **Panel opening button size**– choose a size for the opening button.
- **Background colour** – choose a panel background colour for the opening button.
- **Show border** – show opening button outer border.
- **Border-radius for an opening button** – set an opening button border-radius
- **Panel header text** – type your text for a panel title.
- **Show the inner and outer border and colour** – show panel border.
- **Rows stripping** – enable background striping in the panellist.
- **Show outer border** – show outer border for a panel.

![width=850](https://woobewoo.com/wp-content/uploads/2018/06/borders.png)

Also, you can set a colour and font for any type of element:

- header text
- header background
- panel text
- panel background

### Display Rules

> The mode works in the same way as for Switcher, Tooltip and Converter.

It allows you to set the conditions for displaying the switcher and show it on **All pages**, on **selected pages or posts.**

- **Show on** – select the devices on which the panel should be displayed.
- **Show on screen** – if this option is selected, the panel will be displayed only under the selected conditions, f.e:
- **Display everywhere**– select pages from the list on which you want to display the panel or select Enable to display the panel on each page.
- **Pages/ Product categories/ Custom post types–**enable and select page or post from the list on which you want to hide a module.
- **Save changes.**

---

### Shortcode and PHP code

In this tab, you can copy the shortcode and insert into the page or theme code to display a module.

You are able to add additional parameters to the shortcode:
```
\'currency_display\' => \'name\',
\'show_flag_dropdown\' => false,
\'show_flag_currency_list\' => false,
\'width\' => \'100%\',
\'exclude\' => array(),
\'show_on\' => \'both\',
\'show_on_widths\' => 0,
\'show_on_screen_compare\' => \'less\',
\'show_on_widths_value\' => \'\',
```
For example, if you need to display the switcher as a dropdown with flags, add these parameters to the shortcode:

```
[woo -currency-rates exclude=\'USD,GBP\' show_flag_dropdown=true show_flag_currency_list=true]
```

## Custom CSS

If you have basic knowledge of CSS – you can use the CSS Editor to change the appearance of the panel. It is located on the CSS tab. Simply type styles for elements in the editor window.
![width=833](https://woobewoo.com/wp-content/uploads/2018/06/custom-css.png)

## Geo IP rules

If you enable this feature, it allows you to automatically set the currency for visitors when they first visit the site.

if this option is enabled, currencies for your visitors will be set by default by the country code.

**Use custom settings**– if you want to specify the definition of the currency yourself, please select your list of countries for each currency. The option Set currencies automatic by default with GeoIP must be disabled.

![width=895](https://woobewoo.com/wp-content/uploads/2018/06/ip-rules.png)

## Custom Flags

With **Custom Flag feature (pro)** you are able to upload your own flag icon.

After saving, the image is added to the database. It combined with other currencies and will be available in the basic tab currencies. On the Custom flags tab, you can view all the added custom icons and add or remove the previously uploaded ones.

![width=820](https://woobewoo.com/wp-content/uploads/2019/02/custom-flags-3.png)

In order to add your own image, move to the Custom currency tab, press “add a custom flag” and press “Save” before to upload an icon:

![Image](https://i.gyazo.com/7bee0b0e077776e52f8c926e7a122795.gif)

## 

## Custom Currency

With **Custom Currencies feature (pro)**, you are free to add your own currency in the same way. Move to the Custom Currency tab and enter a required code and symbol.![width=825](https://woobewoo.com/wp-content/uploads/2019/02/currency-custom.png)

Press saving and the plugin will add data to the database, ready to use and combined with other currency codes and symbols. Now it is available for selection in the Currencies tab. To make any changes come back to the Custom currency tab. There you can see all data and you are able to edit data or add and remove it.

![Image](https://i.gyazo.com/19298068d49640508c3717218bfdadf4.gif)

---

## Main Settings

**Source:** [https://woobewoo.com/documentation/main-settings-comparison/](https://woobewoo.com/documentation/main-settings-comparison/)

### Here you can find a list of all current settings with detailed description for every single option.

![comparison](https://woobewoo.com/wp-content/uploads/2018/06/3.jpg)

- **Compare button name** – a field to manage a text for adding a product to table button

- **Added button name** – a field to manage a text for a button, which appears after adding product to table, and reveals table itself by being clicked.

- **Show on the product page** – check this box, if you want to allow table appearing on the individual product pages

- **Show on products list** – check this box, if you want to allow table appearing on pages with product lists, such as shop page

- **Display table as** – choose a way for table displaying

- **Table template** – select table preset from the list

- **Fields** – select fields to be shown in the comparison table. You can reorder them by dragging an arrow. Note – fields content is filled automatically from WooCommerce attributes

---

## Getting Started with WooCommerce Product Comparison Plugin

**Source:** [https://woobewoo.com/documentation/getting-started-with-woocommerce-product-comparison-plugin/](https://woobewoo.com/documentation/getting-started-with-woocommerce-product-comparison-plugin/)

Let\’s create our first comparison table together! We\’ll walk you through all the steps from installation of plugin to  adding table to site\’s content.

### Step 1 – Product Comparison Woocommerce installation.

1. Navigate to Plugins -> Add new in your admin panel.

2. Press Upload file and choose plugin archive from folder.

3. Move to Plugins menu, find our plugin and click Activate.

Done! Now you\’re ready to get acquainted with the functional of **Product Comparison Woocommerce**plugin.

### Step 2 – Creating first Product comparison table.

As in your left panel appeared tab of Compare plugin, move there and click Settings menu.

We don\’t stop on any special settings, cause you\’d better read a detailed description about them in **Main Settings article.**

> When you\’ve finished, don\’t forget to click Save button!

### 

### Step 3 – Adding comparison table into site content.

And here is a pleasant surprise – no need to do any special – Compare table will appear automatically.

Now go to a page with comparison table installed, and click on Compare button. Then, click on Added button to reveal the table itselves!

Congratulations – you\’ve successfully finished with setting our Product Comparison plugin up!

[Our example of Product Comparison Plugin](http://woo.woobewoo.com/shop/) on store page you can find here.

---

## WooCommerce Product Filter Main Settings

**Source:** [https://woobewoo.com/documentation/woocommerce-filter-main-settings/](https://woobewoo.com/documentation/woocommerce-filter-main-settings/)

We have all the necessary options in one plugin. You can start to try them now, following this clarification. It’s really easy to make the required settings and add Filter Plugin into your online store.
Product filter contains 3 main tabs:

[Filters](/#1)

[Design](/#3)

[Advanced](/#4)

## 

---

## Filters

With the help of our plugin, your customers can filter your products by any criteria –

- [Price](/#a)
- [Price range](/#b)
- [Sort by](/#o)
- [Categories](/#c)
- [Tags](/#d)
- [Author](/#e)
- [Featured](/#f)
- [On sale](/#f)
- **Stock Status**
- [Rating](/#l)
- [Search by text](/#s)
- [Attribute](/#m)

Each filter criteria customizable, giving you maximum control over what your customers are filtering and the results they see.

### All settings changes you can see in the life preview:

![width=1639](https://woobewoo.com/wp-content/uploads/2018/06/dem1.gif)

> Let’s consider each criterion for filtering:

#### Price

Here you can put **Filter title** and **description**.

![width=889](https://woobewoo.com/wp-content/uploads/2018/06/prifil.png)

Set the way to display a filter **label on the page**: no label, show as closed/opened

Here is an example of title label displaying:

![width=1296](https://woobewoo.com/wp-content/uploads/2018/06/filt2.png)

**Filter skin** – select the design (default, flat, big, modern, sharp, round, square) and make a custom setting for its design (not available for default skin): colour and enable/disable grid.

![width=440](https://woobewoo.com/wp-content/uploads/2018/06/filter-price-skins-1-440x1024.png)

**Show price input fields** – check if you want to provide customers with an option to specify the price.

![price](https://woobewoo.com/wp-content/uploads/2018/06/price-input-fields.png)

**Symbol position.** Change the position of currency displaying: before or after input fields.

**Show currency as** – select the way to display currency: code or symbol.

**Use text tooltip instead of input fields** – check if you need not input fields, just text tooltip.

![width=700](https://woobewoo.com/wp-content/uploads/2018/06/5d9401d285fab5af0eccee31fd939682.gif)

---

#### Price range

Here you can make the following settings:

![width=765](https://woobewoo.com/wp-content/uploads/2018/06/Screenshot_1.png)

- Put **Filter titl**e and **description.**
- Show label as open/close/none
- Set how to show on front-end: checkbox list/drop-down.![width=668](https://woobewoo.com/wp-content/uploads/2018/06/filter-dropdown-1.png)
- **Drop-down label.** Set a drop-down first option text.
- **Set range automatically**. If this option is enabled, you may set the price range settings automatically.
- **Price range step.**Here you may set the value of price increase step. The default value is set to 20. All the steps are equal.
- **Set range manually.** If it’s enabled, you can press the Setup button and customize your price range.![width=599](https://woobewoo.com/wp-content/uploads/2018/06/Screenshot_1-1.png)
- Set Maximum height on front-end.

---

#### Sort by

Here you can:

- Put **Filter title** and **description**
- Select the **sorting options**  (min 2 options).

![width=769](https://woobewoo.com/wp-content/uploads/2018/06/Screenshot_2.png)

---

#### Categories

Here you can:

- Put **Filter title** and**description**.
- Show in front-end as**radio button list,****drop-down (single select) or checkbox list (multi-select) (pro)**. Depending on whether you need one or several categories to be available at the same time, you may show your categories list as checkbox or drop-down.
- **Show images.**Show the category image (that set in the Category page). Not working with dropdown
- Set a **Drop-down label**(for drop-down).**
- **Collapsible** (for checkbox list multi-select) – if enabled, then show only parent categories, if there are children, they are minimized.
- **Product selection.** Choose the way of displaying products: **Should be at least in one category** or **Should be in all selected categories**(working with enabled Show on frontend as Checkbox list).
- **Show images** feature allows you to show the category image(**not** working with **dropdown**).![Show](https://woobewoo.com/wp-content/uploads/2018/06/Show-images-feature.png)
- **Sort by**. Here you may set categories sorting by ascending or descending price, by default.
- **Order by custom.**Categories are displayed according to the order of their selection in the input fields.
- 
- **Show hierarchical.** Show paternal and subsidiary categories (for checkbox list).![width=700](https://woobewoo.com/wp-content/uploads/2018/06/2c17de92e1822bc8a1b785b1917e034b.gif)
- Enable **Show count.**
- **Hide categories without products.**Do not show filter option if there are no products with such category.
- **Product categories.** Here you may select product categories to be displayed on your site from the list.
- **Make selected categories as default.**Selected categories will be preselected as default on the frontend.
- **Clear filter only to selected categories.**When the filter is cleared, it will be filtered only by selected items. Be careful when using two or more category filters!
- **Exclude terms ids.** Here you may exclude category terms from the filter by ids. Example input: 1,2,3**
- **Show search –**enable if you need to add a field for searching  by categories
****
- **Maximum height.**Set maximum displayed height on front-end.
- **Hide child.** Hide child taxonomy.
- **Always display all categories**– if checked, the entire list of categories will always be visible, otherwise only available for filtered items

![width=620](https://woobewoo.com/wp-content/uploads/2018/06/Screggenshot_1.png)

---

### Tags

Here you can:

- Put **Filter title** and **description.**
- Show label as open/close/none.
- **Show on front-end as checkbox list, drop-down or multi-select drop-down.** Depending on whether you need one or several tags to be available at the same time, you may show your tags list as checkbox or drop-down.
- Set a **Drop-down label.**
- **Sort by**. Here you may set Tags sorting by ascending or descending price.
- **Order by custom.**Tags are displayed according to the order of their selection in the input fields.![width=708](https://woobewoo.com/wp-content/uploads/2018/06/9dfe94313b15ce51a33080674f55f785.gif)
- 
- Enable **Show count.**
- **Hide tags without products.**Do not show filter option if there are no products with such tag.
- **Product tags.**Here you may select product tags to be displayed on your site from the list.
- **Make selected tags as default.** ****Selected tags will be marked as default and results will be filtered already according to selected tags on the frontend.
- **Exclude terms ids.** Here you may exclude category terms from the filter by ids. Example input: 1,2,3
- **Show search.**Display a bar to search the tag in the list.
- **Maximum height.**Set maximum displayed height on front-end.
- **Always display all tags.** If checked, the entire list of tags will always be visible, otherwise only available for filtered items.

![width=769](https://woobewoo.com/wp-content/uploads/2018/06/Screesdsnshot_1.png)

---

#### Author

Here you can:

- Put **Filter title** and **description.**
- Show label as open/close/none.![width=768](https://woobewoo.com/wp-content/uploads/2018/06/4f169d2093c34346648d7eefb24630dd.gif)
- Define which **role** show to users in the drop-down.
- **Show on front-end as checkbox list or drop-down.** Depending on whether you need one or several tags to be available at the same time, you may show your tags list as checkbox or drop-down.
- **Drop-down label.** Set a drop-down first option text.
- **Show search.**
- **Maximum height.**Set maximum displayed height on front-end.![width=767](https://woobewoo.com/wp-content/uploads/2018/06/Screessanshot_1.png)

---

#### Featured, On sale, Stock status

Here you can:

- Put **Filter title** and **description.**
- Show label as open/close/none.

In **Stock status**filter you can select the parameters to display: *In stock, Out of stock and On backorder.*

**Change status names.**Here you may rewrite stock status names.

![width=769](https://woobewoo.com/wp-content/uploads/2018/06/Screen78shot_1.png)

---

#### Rating

Here you can:

- Put **Filter title** and **description.**
- Show label as open/close/none.
- **Show on front-end as radio buttons list, drop-down, multiline star rating and single line star rating.**

![width=926](https://woobewoo.com/wp-content/uploads/2018/06/rating-types.png)

For Stars rating you can select the icon size, icon size and border, set an additional text.

- **Drop-down label.** Set a drop-down first option text.![width=767](https://woobewoo.com/wp-content/uploads/2018/06/Screensh000ot_1.png)

---

#### Search by text

Here you can:

- Put **Filter title** and **description.**
- Show label as open/close/none.
- **Search by**– chose searching params: title, content, excerpt, content or excerpt, title or content, title and content.
- **Exclude from search results** selected items or items with selected taxonomies.

For searching by title a **Search by full word only**and **Autocomplete**(autocomplete relevant variants) options are available.

![width=770](https://woobewoo.com/wp-content/uploads/2018/06/Screensho444t_1.png)

---

#### Attribute

Here you can:

- Put **Filter title** and **description.**
- Select an attribute to be displayed on your site from the list.
- Show label as open/close/none.
- **Show on front-end as checkbox list, drop-down, multiple drop-down or colours**.
- **Attributes.**Here you may select attributes to be displayed on your site from the list.
![width=772](https://woobewoo.com/wp-content/uploads/2018/06/Screewwwnshot_1.png)
- **Order by custom.** If enabled – attributes are displayed according to the order of their selection in the input fields. If disabled – selected attributes display in the A-Z order.
- **Hide attributes without products.**Do not show filter option if there are no products with such category.
- For **Colors**, you have additional settings: icon type, layout – horizontal and vertical. Also, you can choose the number of Colors in a row, set an icons spacing, set icon size and border. Check if you want to Show border and select the icon colour.
- ![width=700](https://woobewoo.com/wp-content/uploads/2018/06/sdfssd.gif)
- **Drop-down label.** Use a drop-down first option text.
- **Show count.**Show count displays the number of products that have the appropriate parameter.
- **Make selected attributes as default.**Selected attributes will be marked as default and results will be filtered already according to selected attributes on the frontend.
- Set attributes **sorting** by ascendance or descendants.
- Put **maximum displayed height in the frontend.**
- **Always display all attributes.**Attributes in the filter always displaying according to the category. If you added, shoe size attributes for categories shoes, they will not appear if user select Cloth category. If this option enabled, all the attributes in filters always display – shoe size attribute filter will be visible in the Cloth category.

![width=759](https://woobewoo.com/wp-content/uploads/2018/06/downhjhload.png)

---

## Options

In this tab set the options to improve the work of the filter:

- **Enable ajax**. If you don’t want the page to reload every time a filtering action is performed, you can also use [AJAX load function](https://woobewoo.com/feature/ajax-live-search/). Filtering starts as soon as filter elements change and filter results are displayed instantaneously.

![width=818](https://woobewoo.com/wp-content/uploads/2018/06/fed32bbdb90ad501ab00ad37da79d189.gif)

- **Show Clear all button.**If this option is enabled, the Clear button appears at the page. All filter presets will be removed after pressing the button.
- Clear all button word – you can overwrite the button text here.
- **Show Filtering button.**This button is necessary when [ajax](https://woobewoo.com/feature/ajax-live-search/) mode is disabled. It allows users to set all necessary filter parameters before starting the filtering.
- **Filtering button text.**Here you may change filtering button word.
- **Display items in a row.**The parameters for filtering will be displayed in a row according to the filter width. F.e. – ![](https://i.gyazo.com/7cbede358fabd1983430296e4e519cf4.png)
- **Display cols in a row.** This feature helps you to set many columns in which there will be elements.![Cols](https://woobewoo.com/wp-content/uploads/2018/06/Cols-number.png)
- **Display filter on.**Chose where display filter: for all devices/for mobile/for a desktop.
- **Recount products by selected filter.**Automatically recount product by selected filters (if product category loading slowly – disable this function).
- **Sort by title after filtering.**Displaying the results in the alphabetical order after filtering.
- **Checked items to the top.**Lets checked terms will be on the top.

Also, here you can set the Filter design: Button position, style and colour of an icon and other design settings:

- **Filter Width** – here you can set the filter width in pixels or percentage.
- **Filter Block Width** – here you can set the filter block width in pixels or percentage.
- **Select Filter Buttons Position**– here you may select the position of filter buttons on the page: bottom, top or both.
- **Enable filter icon on load**– enable filter icon while a page is loading.
- **Filter Loader Icon.** Here you may select the animated loader, which appears when filtering results are loading.

**Select icon** – add your logo as a loader icon.

- **Filter Loader colour.** Here you may select the colour of filter loader animation.
- **Enable overlay.**
- **Overlay background colour and opacity.**
- **Show Loader Icon on an overlay.**
- **Show loading word on an overlay.**
- **Set loading word for an overlay.**Here you may select overlay skin for a filter.****
- **Set no products found text.**Here you may input no products found text for the category.

---

## Advanced

If you have some knowledge in coding, this tab will be useful and you can set the following editor:

**CSS editor.** Write your **CSS style**

**JS editor.** Write your js code

**Display only on the page.**Chose the page for a filter: **Shop**, **Product Category**, **Product Tag** or **All** pages!

**Hide filter by title click.**

![width=709](https://woobewoo.com/wp-content/uploads/2018/06/Screensrtrhot_1.png)

---

## Getting Started with Product Filter Plugin

**Source:** [https://woobewoo.com/documentation/getting-started-with-woocommerce-filter/](https://woobewoo.com/documentation/getting-started-with-woocommerce-filter/)

Let’s examine the first steps in getting started with our Free WooCommerce Product Filter WordPress plugin. Follow this simple tutorial, and in a couple of minutes, you will be ready to add such an effective tool as Product Filter into the store!

### 1. Plugin installation

In order to install a plugin make three simple steps:

1. Download plugin WooCommerce Product Filter Plugin for WordPress by Woobeewoo.
2. Upload it to the WordPress plugins directory.
3. Activate.

### 2. Creating the first Product filter

On the left navigation menu click on Add new filter. In a pop-up window insert a title of the filter and click **Create.**

After that, you are able to customize a filter. All the necessary information and detail instructions look at **the Filter Main settings.**

When you\’ve finished customizing, the last step is to add a filter to the page.

### 3. Adding filter into the site content

- #### Input shortcode

Copy **Shortcode** under the main tabs and paste it to the website content. Product Filter plugin will display the filter on appropriate post/page using settings tuned in this filter.

**Filter PHP code** can be inserted at any place of the page code – to display exactly in this place, for example in the header or footer of the page.

![filter](https://woobewoo.com/wp-content/uploads/2018/10/filter-product-shortcode.png)

- #### Display Widget

In case you are utilizing Product Filter in the store sidebar, Product Filter Widget can also be included.

To display the Product Filter on a sidebar, move to go to the WP Admin > Appearance > Widgets. Expand the sidebar dropdown option then drag and drop Filter widget. Select the filter and **Save.**

![](https://i.gyazo.com/e4a4c2834c2c7b7da713184f5927b365.gif)

- #### Elementor widget

If you’re using an Elementor page builder, you can easily manage the filter settings while in the editor.

To do so, you need to open the needed page with Elementor, select the **Woofilters** widget and drop it to the section.

If you already created a filter in the WordPress Dashboard, you just need to select it from the **Select Filter** dropdown.

After you’ve selected the filter, you get the settings to edit it just the same you have in the Dashboard. Here you can fully manage your filters content.

![Filters](https://woobewoo.com/wp-content/uploads/2018/06/product_filter_filters.png)

In the **Style** tab, there are the same options available in the [main](https://woobewoo.com/documentation/options-main-tab/), [buttons](https://woobewoo.com/documentation/button-options/), [content](https://woobewoo.com/documentation/content-options/), and [loader](https://woobewoo.com/documentation/loader-options/) settings pages in the Dashboard.

![Elementor](https://woobewoo.com/wp-content/uploads/2018/06/product_filter_elementor_options.png)

The A**dvanced** tab has the design settings for filters.

![Elementor](https://woobewoo.com/wp-content/uploads/2018/06/product_filter_elementor_design.png)

---

## Product Table Settings

**Source:** [https://woobewoo.com/documentation/woocommerce-product-plugin-settings/](https://woobewoo.com/documentation/woocommerce-product-plugin-settings/)

In order to customize the table functionality and design, open the Settings tab which includes:

[Main settings](/#1)

[Features](/#2)

[Appearance](/#3)

[Language and text](/#4)

## Main Tab

In this tab, you can set the Table elements

**Caption.** Check if you want to show the name of the table above the table.

![Product](https://woobewoo.com/wp-content/uploads/2018/06/Caption.png)

![width=355](https://woobewoo.com/wp-content/uploads/2018/06/Description.png)

**Description**. You can add a short description to the table between title and table.

![width=350](https://woobewoo.com/wp-content/uploads/2018/06/Signature.png)

**Signature**. You can add a signature under table footer.

![width=350](https://woobewoo.com/wp-content/uploads/2018/06/Header.png)

**Header**. Check if you want to show the table head.

![Footer](https://woobewoo.com/wp-content/uploads/2018/06/Footer.png)

**Footer**. Check if you want to show the table footer.

**Fixed Header** allows fixing the table\’s header during table scrolling. You can also set the **Top margin** which is extremely useful if a page with a table already has some fixed elements like a fixed menu etc.

> Important! Header option must be enabled for using this feature.

#### Date Formats

![date](https://woobewoo.com/wp-content/uploads/2018/06/date-formats-product-tables.png)

**Date.** Let output format for the date. For example: y-m-d- 1991-12-25, d.m.y – 25.12.1991

**Time / Duration.** Set output format for time and duration. For example: 1) time – H:m – 18:00, h:m a – 9:00 pm 2) duration h:m – 36:40, h:m:s – 36

---

## Features

Here you can activate additional functions to work with the table:

![width=347](https://woobewoo.com/wp-content/uploads/2018/06/Table-information.png)

**Table information.** Show pagination information after the table.

![](https://i.gyazo.com/84d8afa80932c4ddec9cafdecf6153cd.gif)

**Sorting.** Allow dynamic sorting with arrows. To use this option you must enable the Header option.

You have an option to select the **column to sort by default**. Works only with relevant columns enabled.

**Sorting descending.**  The default is the 1st column and “Ascending” order for the sorting. Enable the checkbox if you want to sort by descending.

**Sorting type.** Toggle the option if you want to sort the products in the admin table preview to the frontend. To set the custom sorting, move to the **Content tab,**add the products to the table, and locate them in the exact order you need:

![Manual](https://woobewoo.com/wp-content/uploads/2018/06/product_table_manual_order.gif)

Moreover, you can **set the order for the product manually**. You can easily replace the item to the necessary position. It is a more convenient way if the table contains a big number of products. Also, this is the only way to move the product to the next or previous page due to pagination.

The order will be saved in the way you set it and will display in a table.

**Pagination.** Show table pagination.

![width=348](https://woobewoo.com/wp-content/uploads/2018/06/product-table-pagination-.png)

Enable **Pagination menu** if you’d like to show the drop-down list to select the number of products on the page for display.

*If Pagination menu is enabled*, in **Pagination list content** you can set the number of rows to display on one Pagination page. Establish several numbers separated by a comma to let users choose it personally. The first number will be displayed by default. Since that the number of Pagination Pages will be recounted also.

Toggle the **Scroll to top on pagination** option to scroll the page to the top when pagination is used.

*If Pagination menu is disabled,* set the number of products to display on one Pagination page in **Products per Page option.**

**Server-side Processing** – this option is recommended for large tables that cannot be processed in a conventional way. The table will be sequentially loaded by ajax

on a per-page basis, all filtering, ordering and search clauses is server-side implemented too.

**Searching.** Enable to add an instant search by keywords.

**Search by Columns.**Add search by table columns. Use a semicolon as a separator to select any of the values.

**Search by letter.**Show alphabet for search by the first letter.**

![](https://i.gyazo.com/03f3f01b49f21e896c46f913dc5c8682.png)

**Print.**Print the product data straight away from the table in one click.

![Print](https://woobewoo.com/wp-content/uploads/2018/06/Print-feature.png)

Also, you can save your table as **PDF**file by choosing to save as pdf at the new window in destination settings.

![Save](https://woobewoo.com/wp-content/uploads/2018/06/Save-as-pdf-1.png)

**Print Logo.** If the option is one, the website logo will be also printed.

**Print captions.**If enabled, you can print the table caption, description and signature.

![width=350](https://woobewoo.com/wp-content/uploads/2018/06/Print.png)

**Hide the out of stock items** helps you to hide all of the products that ended.

![Hide](https://woobewoo.com/wp-content/uploads/2018/06/Hide-out-of-stock-items.gif)

**Show private products**feature needs to [display products on the front-end.](https://woobewoo.com/documentation/private-products/)

**Show message after put product to cart** – enable the option to show a message in a popup after putting the product in the cart.

**Popup position** – set the position of the adding to cart notification.

**Show variation description instead of product description** – toggle the option to show variation description instead of product description in variations popup.

**Show variation thumbnails** – if you have different pictures for a variable product, the thumbnail will be changed that the user selects the variation.

![](https://i.gyazo.com/0f1f4dbc28b25de5c045848bf6b8986a.gif)

**Show the first variation as default**– preselection of variation for variable products instead of the name of an attribute.

**Show variation price in price column**– the price of selected variation will be in the Price column instead of the price range +  price of the selected variation in Buy column.

**Add all to cart** feature allows you to add all current products on the table to the cart.

![Add](https://woobewoo.com/wp-content/uploads/2018/06/Add-all-to-cart-1.png)

**Add selected to cart**allows your customers to select a number of necessary products and add everything to the cart in one go.

**Min/Max bunch add to cart** – turn on the option to eat the Set min and max quantity values for the **Add selected to cart** and **Add all to cart** buttons in the corresponding numeric field.

**Hide view cart link**– you can hide a link view cart after customer added a product to the cart if you need.

**Lazy load** – is the option suitable for a large table. You can set the number of rows to display on one lazy load in the **Lazy load limit** numeric field.

**Hide quantity input** feature allows you to hide quantity input for add to cart button in the frontend.

- **Attribute filter – enable attribute filter** and select attributes to filtering.

**Hide searching attributes from a table**– if you have too many attributes or don\’t want to show them in a table, you can hide them using this option, but still using filter to search by.

*Attention:* you don\’t need to add attributes as a column to make filters available. Selected filters will be displayed. If you will add some attribute as a column manually, it will not be hidden even is **Hide searching attributes from a table**is enabled.

![Attribute](https://woobewoo.com/wp-content/uploads/2018/06/product_table_attribute_filter_title.gif)

**Attribute filter title.**Set it if you want to replace titles for all filtered attributes.

**Select attributes.**Select attributes to filtering.

**Show as.** From this dropdown, you can select how to display the filters: dropdown or multiple dropdowns.

**Search for a specific attribute** – Results includes all products where the attribute exactly matches the search criteria, f.e:

![width=698](https://woobewoo.com/wp-content/uploads/2018/06/Search-for-a-specific-attribut.png)

**Logic.** Set the logic for showcasing OR or AND.

**Custom order for terms.** Enable the option to sort attribute terms by Woocommerce custom sorting.

- **Tags filter.** To filter the products in the table by tags, toggle the Tags filter button. It works only with enabled tags columns.**Tags filter title.** It displays the default title in the dropdown tags filter.**Hide tags from table.** The option allows hiding tags column and keeping the filter to display. You don’t need to add Tags as a column to make the filter available. If you will add Tags as a column manually, it will not be hidden even if “Hide tags from table” is enabled.**Show as.** From this dropdown, you can select how to display the filters: dropdown or multiple dropdowns.**Logic.** Set the logic for showcasing OR or AND.**Use only some tags.** Toggle the option to specify which tags to show. 
**Select tags.** Select the tags from the dropdown.
- **Custom taxonomy filter**[feature allows you to categorize information](https://woobewoo.com/documentation/how-to-add-custom-taxonomy-to-the-table/) based on different attributes.

![Custom](https://woobewoo.com/wp-content/uploads/2018/06/Custom-taxonomy-filter.gif)

- **Category filter.****Enable category filter** and filtering by categories of product. ****

**Filter category title.**It displays the default title in the dropdown category filter.

**Hide searching category from a table**– if you don\’t want to show them in a table, you can hide categories column using this option, but still using the filter to search by.

*Attention:* you don\’t need to add the category as a column to make filters available. Selected filters will be displayed. If you will add the category as a column manually, it will not be hidden even is **Hide searching category from a table**is enabled.

**Show as multiple**drop-down or drop-down with a single select.

**Inner table filter.**Apply filter by category after clicking the category link in a table column.

**Logic.** Set the logic for showcasing OR or AND.

**Use only some categories.**Enable the option to show in the filter only selected categories.

**Select categories.**Select categories to filter.

**Include children**. Toggle the option to include the child categories.

**Use as main filter.**Turn on if you want the category filter to dynamically affect the content of attribute filters.**

Also, WooCommerce Product Table plugin will display the hierarchy of categories in the dropdown list.

![Category](https://woobewoo.com/wp-content/uploads/2018/09/Category-filter-hierarchy-1.png)

- **Price filter**works only with enabled price column.

**Show as multiple**drop-down or drop-down with a single select.

**Filter price title.** It displays the default title in the dropdown price filter.

**Show as.** From this dropdown, you can select how to display the filters: dropdown or multiple dropdowns.

![Price](https://woobewoo.com/wp-content/uploads/2018/06/product_table_price_filter.png)

**Set range** – for manually settings press the Setup button and customize your price range settings. You may increase or decrease the number of steps and set different values for each step. Also, you can set the minimum and maximum price.

**Step.** Here you may set the value of the prise increase step. The default value is set to 20. All the steps are equal. When setting the step, please note that the number of elements in the list should not exceed 100, otherwise the step setting will be reset and automatically calculated.

Set the min/max price in the corresponding field.

Click the blue **Setup range** button to open the window for setting up the range manually.

**Hide products before filtering.** Turn on the option to hide all the products in the table until a user defines a search parameter or filter.

---

## Appearance

#### Here you can choose a visual style of the table.

- Set the**fixed table width**in PX or %.
- Select the **thumbnail** size to display in the interface.

![Size](https://woobewoo.com/wp-content/uploads/2018/06/Size-example.png)

- **Mobile screen width.** Select screen width to hide columns. You can set which columns should be hidden on the Content tab in the column options.
- **Hide child action.** Set behavior for hiding responsive child columns. Select First column click, Additional table column click, Disable hide child behavior.
- **Force responsive mod.**Force enable responsive mod for automatic column hiding.
- Manage **width to hide columns on the mobile screens** and set which columns should be hidden on the Content tab in the column options:

![width=408](https://woobewoo.com/wp-content/uploads/2018/06/mobile-settings-for-columns.png)

Choose a **Responsive Mode for a table.** WooCommerce Tables are fully responsive and provide 4 different modes of Responsive design according to your needs: standard, automatic column hiding, horizontal scroll,  and disabled responsivity.

![width=748](https://woobewoo.com/wp-content/uploads/2018/06/product-table-responsive-modes-.png)

- **Borders.**Cell – adds border around all four sides of each cell, Row – adds border only over and under each row. (i.e. only for the rows).
- **Add borders.**  *Cell* – adds a border around all four sides of each cell, *Row* – adds a border only over and under each row. (i.e. only for the rows), *None.*

![borders](https://woobewoo.com/wp-content/uploads/2018/10/borders-product-table.png)

- **Row Striping –** add an automatic highlight for table odd rows. For example – you use a table, but the table’s rows are difficult to separate visually, especially when there are many columns (or multiple lines to a row) – add row striping to a table, it will display rows background in two similar shades of colour to alternately.

![Row](https://woobewoo.com/wp-content/uploads/2018/10/Row-Striping.png)

- **Use highlighting by Mouse-hover**to add row highlighting on mouseover and make browsing of the table more convenient.

![](https://i.gyazo.com/86cf4eba34658973c23ac4ecfc06fedb.gif)

- **Highlight Sorted Column**– check and the currently sorted column will be highlighted.

- Enable/disable **table loader icon** before the table will be completely loaded.
- Choose**a table Loader Icon and colour.**

![](https://i.gyazo.com/e1fdefb1dfade8215b17b91165488172.gif)

### Custom table styling (pro)

Choose your custom table styles below. Any settings you leave blank will default to your theme styles.

![width=735](https://woobewoo.com/wp-content/uploads/2018/06/Borders-external-style.png)

**Borders external.**Set the border colour and width in px:
****

---

![width=719](https://woobewoo.com/wp-content/uploads/2018/06/Borders-external.png)

**Borders header.**Set the colour and width for a header. These settings apply to a header, footer and “search by columns” field.
****

---

![width=734](https://woobewoo.com/wp-content/uploads/2018/06/Borders-rows.png)

**Borders rows**

---

**Borders columns**

![width=734](https://woobewoo.com/wp-content/uploads/2018/06/Borders-rows-1.png)

---

![width=735](https://woobewoo.com/wp-content/uploads/2018/06/Header-background.png)

**Header background.**These settings apply to a header, footer and “search by columns” field.
****

---

![width=740](https://woobewoo.com/wp-content/uploads/2018/06/Header-Font.png)

**Header Font.**Select the font for a header (the same for a footer), font size and colour:
****

---

![width=715](https://woobewoo.com/wp-content/uploads/2018/06/Cell-background-style.png)

**Cell background**

---

![width=736](https://woobewoo.com/wp-content/uploads/2018/06/Cell-font.png)

**Cell font.**Select the font for cells, font size and colour:
****

---

![width=736](https://woobewoo.com/wp-content/uploads/2018/06/Bar.png)

**Search Bar Colors.**Here you are able to set the colour of background, font and border:
****

**Fixed Layout** – set all columns of the same width.

**Vertical alignment** – set the vertical alignment of table cell contents.

**Horizontal alignment** – set the horizontal alignment of table cell contents.

**Pagination Position** – set pagination buttons position, left, centre, right.

*Important! After you changed the settings of plugin don’t forget to click the “Save” button.*

---

### Buy Button Styling

Choose your custom styles for button Add to cart. Any settings you leave blank will default.

**Button type**– text or icon.

If you select the text -you can overwrite the default button name, choose font and font size and colour, text-shadow (order: colour, X, Y, blur)

![width=979](https://woobewoo.com/wp-content/uploads/2018/06/buy-button-design.png)

Or select the icon for the button. The same settings are available for an icon – icon size, colour, text-shadow.

![width=971](https://woobewoo.com/wp-content/uploads/2018/06/buy-button-styling.png)

**Button size** – set width and height values in pixels (in that order).
**

![width=970](https://woobewoo.com/wp-content/uploads/2018/06/product-table-button-size-.png)

**Background type**– select the type of button you prefer from the list:

- none
- unicolored
- bicoloured
- simple gradient
- pyramid gradient

![](https://i.gyazo.com/1325325519f149bd59d866e379a7c94a.gif)

**Borders** – set button Borders in this order: colour, top, right, bottom, left.

**Button shadow** – set button shadow in this order: colour, X, Y, blur, spread.

**Padding** – set the padding for button content in this order: top, right, bottom, left.

![width=977](https://woobewoo.com/wp-content/uploads/2018/06/product-table-button-settings-1-1.png)

## View Cart Button Styling

Under the **Buy Button Styling** section, there are also settings for the **View Cart** button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart_style.png)

Toggle the corresponding option to change the text and color of the button.

![View](https://woobewoo.com/wp-content/uploads/2020/01/product_table_view_cart.gif)

## Language and text

![Language](https://woobewoo.com/wp-content/uploads/2018/06/product_table_language_text.png)

#### Overwrite Table Text.

Here you can change the settings of service text in your table:

- Add selected to cart button text – set the text that your users will see when you enable a “Add selected to cart” option.
- Add all to cart button text – the sample text a user sees when “Add all to cart” option is on.
- Add variation to cart button text – the text you\’ll see when adding the variation to the cart.
- Empty table – set the text that your users will see if the table has no data.
- Table info text – the text that users will see in the left bottom corner under your table if pagination is enabled.
- Empty info text – set the text that users will see in the left bottom corner under your table if it is empty (pagination should be enabled).
- Filtered info text – set the text for filtering.
- Length text – the text that users will see in the left top corner above your table if pagination is enabled.
- Search label – rename the label for searching on your own taste.
- Zero records – input the text for users, if no matching data were found during their search
- Filer text – set the text that users will see before the filter dropdown
- Reset text – input the text for the Reset icon is you using the filters.
- Stock quantity items text – the sample text for tock quantity.
- Select attributes text – the string a user sees if not selecting the attributes.
- Product added to cart button text (MPC) – the notification after adding the product to the cart.
- Product not added to cart button text (MPC) – a text you\’ll when a product isn\’t added to the cart.
- Replacing the text out of stock – a sample text for out of stock.

---

## CSS editor

Here you can add custom CSS for the current Table.

## Preview

After you change some settings – with responsive data tables plugin, you can immediately see the result – open the “Preview” tab and check the table. Note that the table may have minor changes depending on the style that your theme has.

---

## 1. Installing WooCommerce Product Table

**Source:** [https://woobewoo.com/documentation/getting-started-woocommerce-product-table/](https://woobewoo.com/documentation/getting-started-woocommerce-product-table/)

We’re glad to welcome you to the world of WooBeWoo plugins, and create this tutorial to help you easily get started to use Product Table WooCommerce by following a couple of steps.

### WooCommerce based

WooCommerce Product Table requires WooCommerce. Please make sure you have installed and activated the WooCommerce plugin before installing Product Table

The plugin uses the product data already created with WooCommerce (WooCommerce > Settings > Products ). This means that you can add products to WooCommerce manually or import them using a CSV/XML import, and they will be displayed in the product table.

So, after you have created all the products necessary for your store, it’s time to move on to installing the Product Table plugin.

### Installation Product Table

1. In the left panel of WordPress, click Plugins > Add New.
2. Search for “WooCommerce Product Table by WooBeWoo” and click “Install”. When the installation is completed, click “Activate Plugin”. You will see a new plugin, ready to work in the admin menu.

![](https://woobewoo.com/wp-content/uploads/2018/06/nstal.png)

To install the *PRO version* of the plugin follow the next steps:

1. A download zip archive with PRO version
2. Navigate to Plugins > Add New > Upload the archive > Activate Plugin.
3. After activation of the PRO version, you need to enter the license key.
- Go to the plugin in the WordPress navigation menu.
- Click the License tab on the left navigation menu of the plugin.

![Activate](https://woobewoo.com/wp-content/uploads/2018/06/pro-1.png)

1. - Enter your email and license key.
- Click the Activate button.

### Create a new table

Now, let’s go ahead and create our first table.Well, you are now ready to **create your first product table**.

---

## Migrating tables – Export and Import

**Source:** [https://woobewoo.com/documentation/migrating-tables-export-and-import/](https://woobewoo.com/documentation/migrating-tables-export-and-import/)

As our tables look incredible, we are just sure you will want to migrate them to your new site in case of need! Here is a simple and easy mechanism to export and import your table.

In order to export tables – choose the table, that you want to export and click Export button in the right bottom corner. Copy the code.

![A](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_33-1024x420.jpg)

Then go to another site to Pricing table plugin at Tables Import/Export tab. Paste the code on Import tab. Click Import button in the right bottom corner.

![Tab](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_34-1024x443.jpg)

Done! Your tables are always with your to please visitors of every site.

> NOTE – you also need to migrate WooCommerce products for correct working of the feature

---

## Is my table responsive?

**Source:** [https://woobewoo.com/documentation/is-my-table-responsive/](https://woobewoo.com/documentation/is-my-table-responsive/)

If you\’re reading this article, then it means you\’re a good developer/site owner, who cares about the aesthetic look of a site, and cares about mobile visitors in advance.

Responsive mode was created to let tables look fine on little screens, as on mobiles and tablets.

We proudly emphasize, that our pricing tables are *FULLY RESPONSIVE*

Responsive mode is enabled in one click:

![Enable](https://woobewoo.com/wp-content/uploads/2018/05/Webp.net-resizeimage-1.jpg)

And after that, columns start to be displayed one below each other – this way they don\’t look distorted on little screens:

![Pricing](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_32.jpg)

---

## Button Color Changing

**Source:** [https://woobewoo.com/documentation/button-color-changing/](https://woobewoo.com/documentation/button-color-changing/)

Changing button color in our plugin is pretty easy, but may be not obvious for those who don\’t have CSS knowledge. We\’ll get you sorted in here.

Click on the button you\’d like to customize and choose Attributes option

![Attributes](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_28.jpg)Insert 
```
background:#000;
```

into style field (where #000 is wanted color code)![Adding](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_29.jpg)

Done! Don\’t forget to save your changes

![Result](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_30.jpg)

---

## Main Settings

**Source:** [https://woobewoo.com/documentation/main-settings-pricing/](https://woobewoo.com/documentation/main-settings-pricing/)

### To make our tables even easier to customize for you, let\’s get acquainted with every option of table editor.

![Main](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_16-1024x423.jpg)

- **Add products** – click on this button to add a Woo product to table
- **Product properties** – click on Add new field to set properties to advertise your goods.
- **Table Width** – a feature to set width for the whole table. Value can be set it **px,** or in**%.***Width for each column in this case will be calculated as width of whole table divided for total columns number.*
- **Column Width** – let\’s you set special width for one column (in **px**). *Total table width in this case will be calculated as sum of all your columns width.*
- **Text Align** – choose a way to align text in the table – (left, right or center)
- **Enable Responsivity** – you need to pay a special attention to this very important one. If you check it, then on small screens (mobile or table devices) your table won\’t look broken and unacceptable, but will be displayed in responsive mode – all columns will be shown one below each other. You can uncheck the box if for some reasons you don\’t want to use it.
- **Min Column Width** – here is an advanced setting to a previous item. Set the minimum column width for responsive mode view (in**px**). If you don\’t have any special needs, it\’s 150 px by default.
- **Font**– choose one of various fonts to use in your table. You can set here global font, and change it for each element of table in it\’s own editor menu by clicking on text.
- **Table Align** – set align for the table on the page – left, right, center or none.
- **Description Text Color**– text colors for table columns description element.
- **Background Color** – a feature to choose background color for the whole table.
- **Header Text Color** – text color for table columns header element.
- **Vertical Padding** – set a vertical padding for a column in pixels by entering the value here.
- **Rows Text Color** – used to set common text color for the whole table.
- **Enable Description Column**– by checking it. you\’re adding description column into table. You can add there descriptions for your rows.
- **Enable Head Row**– adding head row in all columns. Usually, it is the first row in table.**
- **Enable Footer Row –**adding footer row in all columns. Usually, it is last row in table**
- **Enable Description Row**– adding description row in all columns.**
- **Enable Hover Animation** – animates column on mouse hover (you will see the effect it only on frontend)
- **Disable Custom Tooltip Styles**  – disables special styles for tooltips in your pricing table

### Also there are even more important options in the top of editor

- **Save** – don\’t forget to click to store the changes you\’ve made to your table.
- **Preview** – click this button to check how does your table look before finishing
- **Change Template** – a quick and easy way to change the preset, if you have made another decision by clicking just one button.
- **Edit CSS**– if you have some coding skills, you can move to a built-in editor to customize your table any way you\’d like to.
- **Clone –**make a single copy of your tables to compare different variants
- **Delete** – if the table doesn’t require your needs – delete the whole design and remove the table in one cllick

### Finally, let\’s look through Settings tab of Plugin

- **Send usage statistics**– by checking this box, you agree to send us your setting choices to let us analyze them and make better solutions for you.
- **Disable autosave in Pricing Table**– by default our plugin will make autosave of all your changes that you do in Pricing Table edit screen, but you can disable this feature here. Just don\’t forget to save your Pricing Table each time you make any changes in it.
- **Disable CDN usage** – by default our plugin is using CDN server to store there part of it\’s files – images, javascript and CSS libraries. This was designed in that way to reduce plugin size, make it lighter and easier for usage. But if you need to store all files – on your server – you can disable this option here, then upload plugin CDN files from [here](http://woobeewoo.com/) to your own site
- **Enable promo link** – we are trying to make our plugin better for you, and you can help us with this. Just check this option – and small promotion link will be added in the bottom of your Pricing Table. This is easy for you – but very helpful for us!

Hope everything is clear now! If you still have some questions regarding main features – please, contact us via internal support to get a prompt and detailed reply!

---

## Get Pro version for Free!

**Source:** [https://woobewoo.com/documentation/translation/](https://woobewoo.com/documentation/translation/)

If you enjoy our plugin, and would like to help people from different countries to estimate it benefits too, you can translate your plugin to your native language. From our end, we will encourage your initiative with granting a PRO version of any other plugin for free!

For those, who are new to plugin translating, here is a little tutorial.

You\’ll need a special software – you can use any program, but we recommend  [Poedit](http://poedit.net/download), a cross-platform gettext catalogs (.po files) editor.

## The Formats

- .mo stands for Machine Object

— compiled export of the .po file which is used by WordPress
- .po stands for Portable Object

— editable text file with the translations strings

— based on the master .pot file, using Update from POT file PoEdit function

— some folks distribute this as a master file, but it should be used only for translations
- .pot stands for Portable Object Template

— editable text file used to grab all the translatable strings from WordPress itself and Themes and Plugins, using Update from Sources PoEdit function

## The Procedure

- Duplicate the .pot file and rename it to plugin-basename-lang_COUNTRY.po
- Example for the referenced plugin case: subscribe-reloaded-pt_BR.po

— pt_BR means Portuguese Brazil, but many languages don’t have a country variation…

— you’ll have to fill in with your own language
- [WPLANG](http://codex.wordpress.org/Installing_WordPress_in_Your_Language) in wp-config.php file must be set to your language, e.g., pt_BR
- Every time you save the .po file, PoEdit automatically generates a .mo file, which is the one WordPress uses and basically the only one you need to upload

Contact us with your offers

---

## Getting Started with WooCommerce Product Pricing Table

**Source:** [https://woobewoo.com/documentation/getting-started-pricing-table/](https://woobewoo.com/documentation/getting-started-pricing-table/)

No matter, if you\’re new to WordPress or experienced user, our plugin installation is as easy as pie. Just couple of steps will lead you to making best Woo tables ever.

### Step 1 – Product Pricing Table Woocommerce installation

1. Navigate to Plugins -> Add new in your admin panel.

2. Press Upload file and choose plugin archive from folder.

3. Move to Plugins menu, find our plugin and click Activate

> Done! Now you\’re ready to get acquainted with the functional of plugin.

### Step 2 – Creating your first Product Pricing Table

1. On the left navigation menu click Add new table

2. Enter the name of table and choose one of the beautiful templates (don\’t hesitate about hard choice – you will be able to change preset later). Click Save.

![Table_Template](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_5-1024x492.jpg)

### Step 3 – Adding Woocommerce Products

1. Press Add product button and choose the one you need from the list

![Add_product](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_9.jpg)

2. Good job! Now chosen product is available as a separate column. You can add or delete products as they appear in the list below the button.

![Product_properties](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_10-1024x624.jpg)

3. But how can you persuade customers to buy your good without any additional info? Let\’s add some properties to our column!

Click Add new field in Product Properties menu.

![width=700](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_12-1024x425.jpg)

4. Now you can see list of properties to choose from. We\’ll take Sales Price as an example. You have nothing to do – just clicking on attribute and new field will appear – you just need to insert value for it.

![Sale](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_13-1024x609.jpg)

5. Let\’s add more products to widen the choice.

![add](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_14.jpg)

6. You can customize your table by changing colors, fonts, alignments, adding images, icons via special interface if you\’re not a CSS pro, and also there is an ability to make changes via CSS for those, who has some skill in it. More [information about settings you can find in our tutorial here.](https://woobewoo.com/documentation/main-settings/)

7. When you\’re ready, copy shortcode in the top and insert it to any place of your page you want to display your table to users. [Example of the WooCommerce Product Pricing Table](http://woo.woobewoo.com/shop/) you can look here.

![width=700](https://woobewoo.com/wp-content/uploads/2018/05/Screenshot_15-1024x493.jpg)

---

