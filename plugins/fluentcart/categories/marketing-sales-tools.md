# Marketing Sales Tools

*Category from FluentCart documentation*

---

## Marketing & Sales Tools ​

**Source:** [https://docs.fluentcart.com/guide/marketing-sales-tools/](https://docs.fluentcart.com/guide/marketing-sales-tools/)

# Marketing & Sales Tools ​

The **Marketing & Sales Tools** section in FluentCart provides you with the functionalities to create and manage promotional offers, helping you drive sales and engage your customers. Effective use of these tools can significantly boost your store's revenue and customer loyalty.

This section primarily focuses on:

- **Creating & Managing Coupons:** Learn how to design and implement various discount coupons for your products and customers.
- **Dynamic Pricing:** Automatically discount or add fees at checkout based on cart contents, customers, payment methods, and schedules, with no coupon code needed.

By leveraging these built-in marketing tools, you can run targeted promotions, attract new customers, and reward your loyal buyers.

---

## Creating & Managing Coupons ​

**Source:** [https://docs.fluentcart.com/guide/marketing-sales-tools/creating-managing-coupons/](https://docs.fluentcart.com/guide/marketing-sales-tools/creating-managing-coupons/)

# Creating & Managing Coupons ​

Coupons are an effective way to offer discounts, run promotions, and attract customers to your FluentCart store. This guide covers how to view, filter, and create various types of coupons.

INFO

A coupon is a code the customer enters. If you want a discount to apply automatically, without a code, use [Dynamic Pricing](/guide/marketing-sales-tools/dynamic-pricing) instead. Both can be used together on the same order.
## Accessing the Coupons List ​

1. From your WordPress dashboard, navigate to **FluentCart Pro > Coupons** in the left sidebar.
2. This will open the **Coupons** screen, displaying a table of all your existing discount coupons.

## Understanding the Coupons List Table ​

The Coupons list table provides key information for each coupon at a glance:

- **ID:** The unique identification number for the coupon.
- **Title:** The internal name given to the coupon.
- **Code:** The actual code that customers will enter at checkout to receive the discount.
- **Amount:** The value of the discount.
- **Usage:** Shows how many times the coupon has been used versus its total limit.
- **Stackable:** Indicates if the coupon can be combined with other discounts.
- **Status:** : Here shows if the Coupon is active or inactive.
- **Expiry Date:** The date when the coupon expires.
- **Actions:** Click the three vertical dots for action options. From here, you can delete or edit coupons.

## Filtering Coupons ​

You can quickly filter your coupons based on their status:

- **All:** Displays all coupons, regardless of their status.
- **Active:** Shows only coupons that are currently enabled and usable.
- **Inactive:** Displays coupons that are expired, disabled, or not yet active.

## Creating New Coupons ​

FluentCart allows you to create two main types of coupons: **Fixed Amount** and **Percentage.**

- **Adding Fixed Type Coupons:** For discounts that deduct a specific monetary amount (e.g., $10 off).
- **Adding Percentage Type Coupons:** For discounts that deduct a percentage of the total order or specific items (e.g., 20% off).

---

## Adding Coupons ​

**Source:** [https://docs.fluentcart.com/guide/marketing-sales-tools/creating-managing-coupons/adding-coupons/](https://docs.fluentcart.com/guide/marketing-sales-tools/creating-managing-coupons/adding-coupons/)

# Adding Coupons ​

This section will guide you through the process of adding a new coupon in FluentCart, allowing you to choose between different types of discounts to best suit your promotional campaigns.

## Types of Coupons Available ​

When creating a new coupon in FluentCart, you have the flexibility to choose between two main types of discounts:

- **Fixed Amount Coupons:** These coupons deduct a specific monetary value (e.g., $10 off) from the total order or eligible items.
- **Percentage Type Coupons:** These coupons apply a percentage-based discount (e.g., 20% off) to the total order or specific items.

You can select the type that best suits your promotional needs.

## Steps to Add a New Coupon ​

In your WordPress dashboard, go to **FluentCart Pro** > **Coupons** in the left sidebar. On the **Coupons** page, click the **Add Coupon** button in the top-right corner.

This will open the **"Coupons > Add Coupon"** screen, where you can set up and customize your new coupon.

### 1. Basic Information ​

- **Title:** Enter an internal title for your coupon. This is for your reference and not visible to customers.
- **Code:** This is the actual discount code that customers will enter at checkout (e.g., "HOLIDAY10"). You can type a custom code or click **"Generate Random Code"** to create one automatically.
- **Coupon Priority:** (Optional) Enter a numerical value to set the priority of this coupon. A higher number might indicate a higher priority if multiple coupons can be applied.

### 2. Discount Value (Fixed Type) ​

Here, you can decide what kind of discount you want to offer.

- **Type:** You can choose between two types:

- **Fixed:** This takes a specific amount of money off the total, like $5 off.
- **Percentage:** This takes a percentage off the total, like 10% off.
- **Discount Amount:** Enter the value of your discount here. If you choose **Fixed**, enter a number like 5 for a $5 discount. If you choose **Percentage**, enter a number like 10 for a 10% discount. You can also leave it blank or set it to 0 for no maximum limit.

- **Max Discount Amount:** (Optional) Enter the maximum discount amount a customer can get. This is especially helpful for **percentage-based** coupons to make sure the discount doesn’t get too large on high-value orders.

### 3. Schedule ​

On the right side of the screen, you’ll find the **Schedule** box. This is where you can make your coupon work only for a specific time.

- **Start Date & Time:** Set when you want the coupon to start working.
- **Set end date & time:** Check this box and pick a date and time for the coupon to automatically expire.

### 4. Usage Restrictions ​

Sometimes, you don’t want a coupon to be used for every single thing in your store. Usage restrictions let you set the "rules" for how and when a discount can be used. This helps you protect your profits while still offering great deals to the right people.

#### Spending Limits ​

- **Min Spend Amount:** The customer's cart must reach this total before the coupon will work.
- **Max Spend Amount:** You can set a limit so the coupon won't work if the cart total is too high. If you don't want a limit, just leave this empty.

#### Picking Specific Items ​

- **Include/Exclude Categories:** You can choose to make a coupon work only for certain groups of products (like "Winter Gear") or keep it from working on others.
- **Include/Exclude Products:** If you have one specific product that you don't want to discount, you can list it here to exclude it from the deal.

NOTE

Both **published** and **Private** products now appear in the Include/Exclude Products dropdown. This means you can apply discounts to private (hidden) products too — perfect for VIP-only deals, beta-tester pricing, or invitation-only promotions where the product isn't publicly listed but still needs a working discount.
#### Restricting by User ​

- **By Email Address:** You can limit a coupon so only specific people can use it by entering their email addresses here. This is perfect for sending a "thank you" discount to a single loyal customer.

### Recurring Coupons ​

FluentCart supports recurring discounts (including 100% off) for subscriptions. This means a coupon can apply not just to the first payment, but to every renewal for as long as the subscription remains active.

#### Make this coupon recurring ​

When enabled, the discount will automatically apply on each billing cycle—no manual work required.

#### What Happens with a One-Time Coupon on a Subscription ​

If you leave **Make this coupon recurring** off, the discount only applies to the first payment. Because payment gateways bill a fixed recurring price, FluentCart handles the discounted first payment differently:

- The customer pays the discounted amount right away as their first payment.
- The gateway's regular billing starts one billing cycle later, when the first full-price renewal is charged.
- During that first cycle the subscription shows as **Trialing** in your admin, even though the customer has already paid. The customer sees it as **Active** in their account.

This is expected behavior, not a free trial. Once the first renewal is charged, the status changes to **Active** in the admin as well. If you want the discount on every renewal instead, turn on **Make this coupon recurring**.

#### Why Use This ​

- **Free Team Access:** Give your own staff or testers completely free access to your services.
- **Sponsor Memberships:** Allow a sponsor to pay for a customer's membership so the customer pays $0 for every renewal.
- **Influencer Perks:** Create special links for partners that give their followers zero-cost renewals for a set time.
- **Lifetime Trials:** Launch plans that stay free until you decide to change them manually

NOTE

This feature makes your store more flexible because it doesn't assume every subscription has to make money immediately. It also makes your reports and renewal logic much safer for the long term.
### 5. Maximum Discount Uses ​

Control how many times the coupon can be used.

- **Total Limit:** Enter the maximum number of times this coupon can be used across all customers. Enter "0" for unlimited usage.
- **Per User Limit:** Enter the maximum number of times a single customer can use this coupon. Enter "0" for unlimited usage per user.

### 6. Additional Information ​

- **Status:**

- **Active:** The coupon is live and can be used right away.
- **Disabled:** The coupon is turned off and cannot be used.
- **Expired:** The coupon has passed its end date.
- **Internal Notes:** (Optional) You can leave a private note for yourself here, like "This coupon is for our newsletter subscribers."
- **Stackable:** If you select **Yes**, customers can use this coupon with other coupons in the same purchase. If you select **No**, it can only be used by itself.

## Saving Your Coupon ​

Once all settings are configured, click the **"Save"** button at the top of the page (if visible, or "Update" if editing) to create or update your fixed type coupon.

## Editing or Deleting a Coupon ​

After you've created coupons, you can always go back to change their settings or remove them completely.

First, find the coupon you want to manage in your coupons list. On the far right side of that coupon's row, under the **Actions** column, click the **three-dot** icon. A small menu will pop up with two options:

- **Edit:** Choose this to open the settings for that coupon. You can then make any changes you need and save them.
- **Delete:** Choose this to permanently remove the coupon. A confirmation window will likely appear to make sure you don't delete it by accident.

## Applying Coupons via URL ​

You can pre-apply a coupon by adding the 
```
coupons
```

 parameter to a product URL. When a customer clicks the link, the coupon is automatically applied to their cart and they land on the checkout page ready to pay — no need to manually enter a code.

This is useful for promotional links, email campaigns, or affiliate partnerships.

### Single Coupon ​

Add the 
```
coupons
```

 parameter with the coupon code as the value:

```
https://yourdomain.com/?fluent-cart=instant_checkout&item_id=209&quantity=1&coupons=SUMMER20
```
### Multiple Coupons ​

To apply more than one coupon, pass the codes as comma-separated values:

```
https://yourdomain.com/?fluent-cart=instant_checkout&item_id=209&quantity=1&coupons=CODE1,CODE2
```
### URL Parameters ​

| Parameter | Description |
| --- | --- |
| fluent-cart | Must be set to instant_checkout |
| item_id | The product variation ID |
| quantity | Number of items (default: 1) |
| coupons | One or more coupon codes, separated by commas |

NOTE

This feature is not supported in the **Modal (popup) Checkout**.
### When a URL Coupon Is Rejected ​

A coupon in a URL can still fail the same checks as one typed in by hand. It may have expired, hit its usage limit, or not apply to the items in the cart.

When that happens, the customer lands on checkout and sees a notice explaining why the coupon did not apply, instead of a silently full-price cart. The order total stays correct, and they can still complete the purchase or enter a different code.

INFO

This makes expired campaign links much easier to spot. If customers report that a promotional link "isn't working," the notice on the checkout page tells you exactly which check the coupon failed.

---

## Dynamic Pricing ​

**Source:** [https://docs.fluentcart.com/guide/marketing-sales-tools/dynamic-pricing](https://docs.fluentcart.com/guide/marketing-sales-tools/dynamic-pricing)

# Dynamic Pricing ​

**Dynamic Pricing** lets your store adjust prices automatically at checkout. You set the rule once, for example "10% off when a customer buys five or more" or "free shipping on orders over $75", and FluentCart applies it to every cart that qualifies. Customers don't need a coupon code, and you don't have to touch product prices.

Each rule can take money off (a **Discount**) or add money on (a **Fee**). It can target a single product line, the whole checkout, or the shipping cost, and you can limit it to certain carts, customers, or dates.

INFO

Dynamic Pricing is a **FluentCart Pro** feature. The module ships switched off, so you need to turn it on before the menu item appears.
## Enabling Dynamic Pricing ​

Before you can create rules, activate the module in your store settings.

1. Go to **FluentCart > Settings** in your WordPress dashboard.
2. Select the **Features & Addon** tab.
3. Find the **Dynamic Pricing** card and switch it to **Active**.
4. Click **Save Settings**.

Once the module is active, a **Dynamic Pricing** entry appears in the **More** menu of the FluentCart top navigation. See [Features & Addons](/guide/settings-configuration/features-addons) for the other modules on that screen.

## The Dynamic Pricing Screen ​

Open **More > Dynamic Pricing** to see all your rules in one table.

- **Rule:** The rule's display name and its internal name.
- **What it does:** A **Discount** or **Fee** tag (with the amount) followed by the part of the cart it targets: **Line Item**, **Checkout**, or **Shipping**. After that comes a short note with the number of conditions, and a note naming the purchase type when the rule is limited to first purchases, store managed renewals, or upgrades & downgrades. A rule for every purchase gets no purchase-type note.
- **Schedule:** **Until** followed by the end date, **Starts** followed by the start date for a rule that hasn't begun, a start and end date range for a rule scheduled in the future, **Ended** followed by the date once the window has closed, or **No end date**. The creation date appears underneath.
- **Status:** A switch to turn the rule on or off without deleting it.
- **Actions:** **Edit** or **Delete** a rule.

Click **Add New Rule** at the top right to create one.

## Creating a Pricing Rule ​

Now let's build a rule from the beginning.

1. Open **More > Dynamic Pricing** and click **Add New Rule**.
2. Fill in the **Basic Information** card.
3. Choose [where and when](#where-and-when-a-rule-applies) the rule applies, using the **Applies To** and **Apply discount to** cards.
4. Click **Create Rule**.
5. Open the new rule and switch **Active** on. A new rule is created switched off, so it does nothing until you turn it on.

### Basic Information ​

- **Name:** An internal name only you see, for example 
```
summer-sale-10
```

. *(Required)*
- **Display Name:** The friendly name customers see on the checkout summary, for example "Summer Sale". *(Required)*
- **Start from a template:** Pick a starting point. The choice fills in the fields below, and every field stays editable. *(Required)*- **Start from scratch:** An empty rule you build yourself.
- **Bulk Purchase Discount:** A 10% line item discount when the cart quantity is at least 5, applied on every purchase.
- **Free-shipping minimum:** A 100% shipping discount when the cart subtotal is at least 75 in your store currency, applied on every purchase.
- **Price Type:** **Discount** takes money off. **Fee** adds money on.
- **Apply as:** **Percentage** or **Fixed**.
- **Percent** or **Amount:** The size of the discount or fee. With **Percentage** you enter a number such as 
```
10
```

. With **Fixed** you enter an amount in your store currency. If customers shop in another currency with [Multi Currency](/guide/settings-configuration/multi-currency-settings), FluentCart converts the amount to the customer's currency.

## Where and When a Rule Applies ​

Every rule answers two separate questions, and each one has its own card on the form. It helps to keep them apart:

| Question | What it decides | Card on the Add New Rule page | Card on the edit page |
| --- | --- | --- | --- |
| Where does the price change? | The part of the cart the discount or fee is taken from | Applies To | Applies To |
| When does the rule run? | The kind of purchase that can trigger it | Apply discount to | When to Apply |

INFO

The second card has two names. On the **Add New Rule** page it is headed **Apply discount to**, with the hint "Choose which transactions this rule should run on." Once the rule exists, the edit page calls the same choice **When to Apply**. They are the same setting.You can combine any **Where** choice with any **When** choice, with the renewal limits described below. For example, a **Shipping** rule can run on **First purchase only**.

### Where: Applies To ​

This card sits at the top right of the form. It decides which amount the rule's percentage or fixed value is worked out against.

- **Line item:** The rule is calculated on each product line separately. A 10% line item rule takes 10% off every line's subtotal, so it covers every unit on the line. A **Fixed** amount is taken from each line.
- **Checkout:** The rule is calculated once on the whole cart subtotal. A discount is spread across the products so receipts and reports stay consistent.
- **Shipping:** The rule is calculated on the shipping cost. A 100% shipping discount makes shipping free.

### When: Apply Discount To (When to Apply) ​

This card sits below **Applies To** on the Add New Rule page. It limits the rule to one kind of purchase, so you choose exactly one option.

| Option | The rule runs on | Does not run on |
| --- | --- | --- |
| Every purchase | Any checkout, including a checkout where a customer changes plans | Renewal invoices issued by your store |
| First purchase only | The checkout of a customer who has no completed paid order yet | A customer who has bought before, and renewal invoices |
| Store managed renewals | Renewal invoices that your store creates for a subscription | Normal checkouts |
| Upgrades & downgrades | The checkout a customer completes when moving a subscription to another plan | Normal checkouts and renewal invoices |

A few details for each option:

- **First purchase only** counts only paid orders. A signed-in customer is checked by their account. A guest is checked by the email typed at checkout, so the discount appears as soon as they enter an address nobody has used before. Until an email is entered, the rule does not apply.
- **Store managed renewals** is the only option that can change a renewal invoice, and only a **Discount** can be set for it. See [Rules for Renewals and Plan Changes](#rules-for-renewals-and-plan-changes).
- **Upgrades & downgrades** only runs on the checkout of a plan change. It has no effect on new sign-ups.

### Choosing the Right Combination ​

Use these examples when you aren't sure which options to pick.

| You want to | Price Type | Applies To | When to Apply |
| --- | --- | --- | --- |
| Take 10% off every item when a customer buys five or more | Discount | Line item | Every purchase |
| Offer 15% off a whole order for a limited time | Discount | Checkout | Every purchase, with a schedule |
| Give free shipping above a set subtotal | Discount | Shipping | Every purchase |
| Welcome new customers with $5 off | Discount | Checkout | First purchase only |
| Add a handling fee to specific orders | Fee | Checkout | Every purchase |
| Give subscribers 10% off each renewal | Discount | Checkout or Line item | Store managed renewals |
| Make a plan change cheaper | Discount | Checkout | Upgrades & downgrades |

## Editing a Rule ​

Click **Edit** on any rule to open the editor. The top bar summarizes the rule in a sentence and holds the **Active** switch. As soon as you change something, a bar with **Discard** and **Save** buttons appears.

The editor has these cards:

- **Details:** The name, display name, price type, apply-as, and amount.
- **Display Conditions:** The rules that decide which carts qualify. See [Display Conditions](/guide/marketing-sales-tools/dynamic-pricing-conditions).
- **Applies To:** Line item, checkout, or shipping.
- **When to Apply:** Every purchase, first purchase only, store managed renewals, or upgrades and downgrades.
- **Schedule:** When the rule starts and stops.

### Scheduling a Rule ​

Use the **Schedule** card to run a promotion for a limited time.

- **Start Date & Time:** When the rule begins applying at checkout. Leave it empty to start **Immediately**.
- **Set end date & time:** Tick this box to reveal an **End Date & Time** field. Leave it unticked and the rule runs until you turn it off (**Never**).

The end date must be after the start date, and you need a start date whenever you set an end date.

INFO

A rule that is switched on but outside its schedule does nothing. It starts applying the moment its window opens and stops the moment it closes, with no extra step on your side.
## What Customers See ​

When a customer's cart qualifies, the rule shows up automatically on the checkout page.

- **Discounts** appear as their own line in the checkout summary, labeled with the rule's **Display Name** and the amount taken off.
- **Fees** appear as an extra line using the same display name. Tax is charged on a fee by default. Turn off **Charge tax on this fee** in the rule if the fee should not be taxed. A **Percentage** fee is worked out on the price after coupons and discounts, so a 100% coupon leaves nothing to charge a percentage on. A **Fixed** fee stays the same.
- **Original prices** stay visible. A discounted item shows its original price struck through next to the price it now costs.
- **Shipping rules** leave the **Shipping** line at its full price. The rule gets its own row, labeled with its **Display Name**, showing the amount taken off, followed by a **Shipping after discount** row with what shipping now costs.

The discount is carried into the placed order. On the thank-you page and in order emails, a discounted item keeps its original price struck through, and a shipping discount appears as its own **Shipping Discount** row.

### How Rules Combine ​

- Every active rule that qualifies is applied, oldest rule first. Rules do not replace each other, and they work alongside coupons.
- A discount never takes a price below zero. A 120% rule, or a fixed discount larger than the line, stops at the amount that is there.
- Several shipping discounts together never exceed the shipping cost.
- A rule that would adjust by zero is skipped, so you never see a "0.00 off" line.
- Tax is worked out after the rules have been applied, so customers are taxed on the discounted price.

## Rules for Renewals and Plan Changes ​

Subscription rules behave a little differently, because a renewal is an amount your customer already agreed to pay.

- A renewal invoice created by your store is only changed by rules set to **Store managed renewals**. Every other rule is ignored for it.
- A **Store managed renewals** rule can only be a **Discount** and cannot apply to **Shipping**. The editor disables those choices when this option is selected.
- A renewal invoice has no checkout cart, so conditions on coupons, user role, product, payment method, and checkout fields do not match. **Quantity** and **Subtotal** use the invoice, and customer conditions use the subscription's customer.
- **Upgrades & downgrades** rules apply to the checkout a customer completes when switching plans.

Learn how subscriptions work in [Managing Subscriptions](/guide/product-types-creation/managing-subscriptions).

## Order History ​

FluentCart stores the rules that priced each placed order, with the amount each one took. The stored record keeps the rule name as it was when the order was placed, so renaming or deleting a rule later does not change it. If a payment is retried and the cart no longer qualifies for a rule, the stored record is replaced with the new result.

## Permissions ​

Access to Dynamic Pricing is controlled by two permissions on the **Roles & Permissions** screen:

- **View Dynamic Pricing:** See the rules list. Managers and workers have this by default.
- **Manage Dynamic Pricing:** Open the create and edit screens, and create, edit, switch on or off, and delete rules. Managers have this by default.

Learn more in [Roles & Permissions](/guide/settings-configuration/roles-permissions/).

## Common Rule Recipes ​

Here are a few starting points you can build with the tools above.

1. **Bulk discount:** **Line item**, **Discount**, **Percentage** 10, condition **Cart > Quantity is at least 5**.
2. **Free shipping over $75:** **Shipping**, **Discount**, **Percentage** 100, condition **Cart > Subtotal is at least 75**.
3. **Welcome offer:** **Checkout**, **Discount**, **Percentage** 15, **First purchase only**.
4. **Wholesale pricing:** **Checkout**, **Discount**, **Percentage** 20, condition **User > Role is Wholesale**.
5. **Card payment discount:** **Checkout**, **Discount**, **Fixed** 2, condition **Payment > Payment Method is Stripe**.
6. **Rush handling fee:** **Checkout**, **Fee**, **Fixed** 5, condition **Product > SKU is RUSH-01**.
7. **Weekend sale:** Any rule above with a **Schedule** from Friday evening to Monday morning.

Your pricing rule is now live and applies to every qualifying cart automatically.

---

## Dynamic Pricing Display Conditions ​

**Source:** [https://docs.fluentcart.com/guide/marketing-sales-tools/dynamic-pricing-conditions](https://docs.fluentcart.com/guide/marketing-sales-tools/dynamic-pricing-conditions)

# Dynamic Pricing Display Conditions ​

**Display Conditions** decide which carts a [Dynamic Pricing](/guide/marketing-sales-tools/dynamic-pricing) rule applies to. Without conditions, a rule applies to every cart. With them, you can target big orders, specific products, wholesale customers, a particular payment method, or shoppers from a certain country.

FluentCart evaluates a rule's conditions each time checkout calculates the cart total.

## How Conditions Work ​

A rule's conditions are arranged in **groups** made of **rows**.

- **Rows inside a group use AND.** Every row in the group must be true.
- **Groups use OR.** The rule applies when *any one* group is fully true.

For example, two groups can express "quantity is at least 5, or the customer's role is Wholesale". If you add no conditions at all, the rule applies whenever its schedule and **When to Apply** choice allow it.

A condition always asks about the **whole cart**, even on a **Line item** rule. When the cart qualifies, the rule is then applied to every product line.

INFO

A condition that reads data the checkout does not have does not match, whatever its operator. For example, a coupon condition never matches a renewal invoice, because a renewal has no cart. A guest checkout is different: a guest has no role and no customer record, so **Role is not Wholesale** and **Customer is not** conditions do match a guest.
## Adding Conditions to a Rule ​

1. Open the rule from **More > Dynamic Pricing** and scroll to the **Display Conditions** card.
2. Click **Add Conditions** to start the first group.
3. Click the **Add** button next to **Add new properties** and pick an attribute from the menu. Attributes are grouped, so choose a group first and then the attribute inside it.
4. Choose an **operator**, then enter or select a **value**.
5. Repeat steps 3 and 4 to add more rows (AND) to the same group.
6. Click the **+ or** button below the groups to start another group (OR).
7. Click **Save** in the bar that appears once you change something.

To remove a row, use the remove icon at the end of it. A group with no rows can be removed with the remove icon beside **Add new properties**. Incomplete rows must be completed or removed before you can save.

## Available Attributes ​

### Cart ​

- **Quantity:** The total number of items in the cart, added up across all lines. Uses number operators.
- **Subtotal:** The subtotal of the items in the cart. Enter it as an amount in your store currency.

### Coupon ​

- **Coupon Name:** The code a customer applied, matched as text. If several codes are applied, a positive operator matches when any code matches, and a negative one only when every code does.
- **Coupon:** Pick one or more coupons from your store.

### Customer ​

- **Purchase Count:** How many paid orders the customer already has. Guests count as zero.
- **Customer:** Pick one or more specific customers. **is** matches only while that customer is signed in, and **is not** matches everyone else, guests included.

### Product ​

- **Product Name:** The name of a product in the cart, matched as text.
- **SKU:** The SKU of a product variation in the cart, matched as text.
- **Product:** Pick one or more products. **is** matches when any selected product is in the cart, and **is not** matches when none is.

### User ​

- **Role:** The WordPress role of the signed-in shopper, such as Customer or Wholesale. Guests have no role.

### Payment ​

- **Payment Method:** The payment method selected at checkout, such as Stripe or PayPal. When the shopper hasn't chosen one yet, it is the first method listed on the checkout page.

### Checkout Fields ​

Every field from your [checkout field settings](/guide/settings-configuration/checkout-fields) is offered, grouped the same way the settings screen groups them: **Basic Info**, **Business Details**, **Billing Address**, and **Shipping Address**. Use these to price by email, country, company name, and so on.

- Checkout fields are matched as text, so they use the text operators. Country fields hold the two-letter country code, for example 
```
BD
```

, and a rule on the country name does not match.
- **Shipping Address** fields read the shipping address only when the shopper chooses to ship to a different address. Otherwise they read the billing address.
- **Business Details** fields have a value only for a business purchase, or when your store is in B2B-only mode.
- The rule reads the value the shopper typed into the form. A field the shopper hasn't filled in yet is unknown, so the row doesn't match until they do.
- An email condition uses the email the order is placed under. For a signed-in shopper that is their account email, whatever is typed in the field.
- Checkbox fields and store switches such as agreeing to terms are not offered.

## Operators ​

The operators you can pick depend on the type of attribute.

| Attribute type | Operators |
| --- | --- |
| Number and amount (Quantity, Subtotal, Purchase Count) | is, is not, is more than, is less than, is at least, is at most |
| Text (Coupon Name, Product Name, SKU, checkout fields) | is, is not, contains, not contains, starts with, ends with |
| Pick from a list (Coupon, Customer, Product, Role, Payment Method) | is, is not |

List attributes accept up to 100 values per row.

## Example Setups ​

1. **Big order or wholesale customer:** Group 1 has **Cart > Quantity is at least 10**. Group 2 has **User > Role is Wholesale**. The rule applies when either group matches.
2. **Returning customers over $100:** One group with **Customer > Purchase Count is at least 1** and **Cart > Subtotal is at least 100**. Both rows must be true.
3. **Only for a campaign coupon:** One group with **Coupon > Coupon Name is SPRING**.
4. **Domestic shipping promo:** A **Shipping** rule with **Checkout Fields > Shipping Address > Country is US** and **Cart > Subtotal is at least 50**.

Your rule now applies only to the carts that match its conditions.

---

