# Shipping

*Category from FluentCart documentation*

---

## Shipping Overview ​

**Source:** [https://docs.fluentcart.com/guide/shipping/](https://docs.fluentcart.com/guide/shipping/)

# Shipping Overview ​

FluentCart’s powerful shipping system allows you to set up flexible shipping rules based on your customer’s location, what they’re buying, and how shipping costs are calculated. This easy guide will help you set up shipping for your store so your physical products are delivered correctly and on time.

With FluentCart Shipping, you can:

- **Define Shipping Zones**: Group geographical areas to apply specific shipping rules.
- **Create Flexible Shipping Methods**: Offer various delivery options like Flat Rate, Free Shipping, or Local Pickup, with diverse pricing structures (per order, per item, per weight, or per value).
- **Utilize Shipping Classes**: Group products with similar shipping characteristics (e.g., "Heavy Items," "Fragile Goods") to apply specific cost adjustments.
- **Control Advanced Calculations**: Configure how shipping costs are aggregated when customers purchase multiple products from different shipping classes.
- **Manage Packages**: Define the boxes, envelopes, and soft packages you ship with so FluentCart can accurately calculate rates at checkout and pre-select the right packaging when fulfilling orders.
- **Use Shipping Carriers**: See how the Carriers page works and install the Shipping For FluentCart add-on.
- **Connect Shippo**: Add your Shippo API token and webhook to offer live rates, labels, and tracking.
- **Buy Labels and Track Shipments**: Show live Shippo rates at checkout, buy labels from the order screen, and keep tracking up to date.

---

## Advanced Shipping Calculations ​

**Source:** [https://docs.fluentcart.com/guide/shipping/advanced-shipping-calculations](https://docs.fluentcart.com/guide/shipping/advanced-shipping-calculations)

# Advanced Shipping Calculations ​

Understanding how FluentCart calculates shipping costs, especially when combining different shipping methods and shipping classes, is key to setting up accurate rates. This guide clarifies the "Class Aggregation" logic.

## How Shipping Costs are Calculated at Checkout ​

When a customer proceeds to checkout, FluentCart dynamically calculates available shipping options based on their address and the contents of their cart.

The calculation follows these general steps:

1. **Zone Matching**: The customer's shipping address is matched to an [applicable shipping zone](/guide/shipping/configuring-shipping-zones).
2. **Method Selection**: All [shipping methods](/guide/shipping/setting-up-shipping-methods) configured for that zone become potential options.
3. **Base Method Cost**: For each applicable method, its base cost is calculated based on its "Rate Type" (e.g., a fixed amount, total items, or total order value).
4. **Shipping Class Contributions**: This is where the complexity comes in. For each product in the cart, its assigned [shipping class](/guide/shipping/understanding-shipping-classes) (if any) and its quantity are considered.

- The "Cost Adjustment" for that shipping class is applied based on its "Cost Type" (
```
Per Item
```

 or 
```
Fixed Amount
```

).
- These individual class contributions are then gathered per class, not per cart line. Products that share a class are charged together: a class without **Apply to quantity** is charged once, however many products in the cart use it.
5. **Class Aggregation (Crucial Step)**: If the cart contains products from *multiple distinct shipping classes*, the 
```
Class Aggregation
```

 setting of the *chosen shipping method* dictates how these class contributions are combined into a single subtotal for shipping class adjustments.

- **"Sum all class costs"**:

- **Concept**: This option adds up the calculated cost for *each distinct shipping class* present in the cart.
- **Scenario**: Your cart contains: - Product A: 
```
Quantity: 2
```

, 
```
Shipping Class: Heavy Items
```

 (Cost Adjustment: $15, Type: Per Item)
- Product B: 
```
Quantity: 1
```

, 
```
Shipping Class: Small Envelopes
```

 (Cost Adjustment: $5, Type: Per Item)
- Product C: 
```
Quantity: 3
```

, 
```
Shipping Class: Fragile Items
```

 (Cost Adjustment: $4, Type: Fixed Amount)
- **Calculation**: - Contribution from "Heavy Items" = $15 (per item) * 2 items = $30
- Contribution from "Small Envelopes" = $5 (per item) * 1 item = $5
- Contribution from "Fragile Items" = $4 (fixed amount, applied once for the class) = $4
- **Total Aggregated Class Cost** = $30 (Heavy) + $5 (Small) + $4 (Fragile) = **$39**.
- **"Take highest class cost"**:

- **Concept**: This option applies only the highest individual shipping cost derived from any *distinct shipping class* present in the cart.
- **Scenario**: Using the same cart as above: - Contribution from "Heavy Items" = $30
- Contribution from "Small Envelopes" = $5
- Contribution from "Fragile Items" = $4
- **Total Aggregated Class Cost** = 
```
MAX($30, $5, $4)
```

 = **$30**.
6. **Final Shipping Cost**: The 
```
Base Method Cost
```

 (from step 3) is then added to the 
```
Aggregated Class Cost
```

 (from step 5) to determine the final shipping price for that particular method.

By understanding these calculation types, you can fine-tune your shipping strategy to accurately reflect the costs of delivering diverse products to your customers.

---

## Configuring Shipping Zones ​

**Source:** [https://docs.fluentcart.com/guide/shipping/configuring-shipping-zones](https://docs.fluentcart.com/guide/shipping/configuring-shipping-zones)

# Configuring Shipping Zones ​

Shipping zones are geographical regions that allow you to define specific shipping methods and rates for your customers. By creating zones, you can customize shipping options for different countries or areas. This guide will walk you through setting up a new shipping zone.

## How to Add and Manage Shipping Zones ​

### 1. Navigate to Shipping Settings ​

Shipping zones belong to the **Manual / Other** carrier, so you open them from the Carriers page.

1. From the main WordPress dashboard, locate the **FluentCart** section in the left-hand navigation menu and click on **Settings**.
2. On the Settings page, click **Shipping** in the left menu. The **Carriers** page opens.
3. Click **Manage** next to **Manual / Other**. The **Shipping Zones** list on this page shows all your existing shipping zones.

### 2. Add a New Shipping Zone ​

1. Click the **Add Shipping Zone** button above the zones list.
2. You will be taken to the "Add Shipping Zone" setup page.

### 3. Name Your Zone and Define Coverage ​

Now you are on the setup page for your new zone. Here, you will name your zone and precisely target where it applies using the new coverage settings:

**Zone Name:** Give your zone a descriptive name that is easy for you to remember internally. For example, "North America," "Europe," or "Local Customers."

**Coverage:** This powerful setting determines exactly which countries belong to this shipping zone. You have three flexible options to choose from:

- **Whole world:** Select this if the shipping methods in this zone apply globally to every single country and territory.

- **Selected countries only:** Select this to ship exclusively to specific countries. A *Countries* dropdown box will appear below. You can search and check the boxes next to the specific countries you want to include (e.g., just the United States and Canada).

- **All countries except:** Select this if you ship globally but want to exclude a few specific places. Use the *Countries* dropdown box to search and select the regions where you do not want to offer these shipping methods.

### 4. Save Your Zone ​

Once you are happy with the name and the coverage regions you have configured, simply click the **Save** button at the top right of the screen.

Your new shipping zone will now appear in your list of zones, and you can proceed to add specific [shipping methods](/guide/shipping/setting-up-shipping-methods) and rates to it!

> INFO: Customers will only see the shipping methods that are applicable to the zone their shipping address falls into during checkout.

---

## Connecting Shippo ​

**Source:** [https://docs.fluentcart.com/guide/shipping/connecting-shippo](https://docs.fluentcart.com/guide/shipping/connecting-shippo)

# Connecting Shippo ​

Connecting Shippo takes three short steps: create an API token in your Shippo account, paste it into FluentCart, and register the tracking webhook so tracking updates reach your store. This guide walks you through each step and explains every field on the Shippo settings screen.

Before you begin, make sure the **Shipping For FluentCart** add-on is installed. If it is not, follow [Shipping Carriers](/guide/shipping/shipping-carriers) first.

INFO

Start in **Test** mode. Test tokens create free labels that are never shipped, so you can try rates, labels, and tracking without any cost. Switch to **Live** mode only when you are ready to ship real orders.
## Step 1: Getting Your Shippo API Token ​

You need a [Shippo](https://goshippo.com) account. Once you are signed in to the Shippo dashboard, you can create a token.

1. Open the **Overview** page and click **API tokens**. You can also go to **API configuration > Developer keys** in the left-hand menu.

1. The **Developer keys** page has two sections: **Live keys** and **Test keys**.

### Creating a Test Key ​

Under **Test keys**, click **Create new test key**. You can have a maximum of two test keys at a time.

Shippo shows the **Test API key** in a popup. Click the copy icon beside the key and store it somewhere safe.

WARNING

The popup is the only time Shippo shows the full key. If you close it without copying the key, create a new one. Never share your token or publish it anywhere public.A test token starts with 
```
shippo_test_
```

.

### Getting a Live Key ​

Under **Live keys**, click **Request live key**. Shippo asks you to contact their API experts to get a live key, and notes that most clients are integrated within one business day. A live token starts with 
```
shippo_live_
```

.

## Step 2: Adding the Token to FluentCart ​

Now, let's link your Shippo account to your store.

1. Go to **FluentCart Pro > Settings > Shipping**. The **Carriers** page opens.
2. Click **Manage** next to **Shippo (Beta)**.
3. In the **Connection** card, turn on **Enable Shippo**.
4. Under **Connection mode**, click the **Test** or **Live** card to choose the mode your store uses.
5. Paste your token into the token field inside the matching card: **Test token** in the **Test** card, **Live token** in the **Live** card.
6. Click **Save settings** at the bottom of the page, or **Save** in the top-right corner.

Each card has its own token field, so you can save both tokens at once. You can add your live token while the store is still in Test mode, and switch to Live later without pasting it again.

When you save, FluentCart checks the token with Shippo before storing it, and loads the list of carriers on your Shippo account. After a successful save, the token is hidden. The field shows **Leave blank to keep the saved token (ending 5857)**, and the mode card shows a tag such as **Token ending 5857 · verified**. The **Connection** card header shows **Connected · Test mode** or **Connected · Live mode**.

If something is wrong, FluentCart shows an error and saves nothing. These are the messages you may see:

- **That is a live token. Paste it into Live Token.** You pasted a live token into the **Test token** field. Pasting a test token into **Live token** gives the matching message, **That is a test token. Paste it into Test Token.** Each mode has its own token field.
- **Enter your Shippo test token to enable Shippo in Test mode.** You turned on **Enable Shippo** without a token for the selected mode. In Live mode, the message asks for your live token instead.
- **Shippo rejected the API token. Check your test or live token.** Shippo did not accept the token, so double-check that you copied the whole token.
- **The Seller Phone in Shippo settings must contain 8 to 15 digits.** Correct the sender phone number or leave the field empty.
- **The Seller Email in Shippo settings must be a valid email address.** Correct the sender email address or leave the field empty.
- **The Preferred Carrier is not connected to this Shippo account.** The carrier you picked is not on the account of the token you are saving. Pick another carrier or **Cheapest of all carriers**.

## Shippo Settings Reference ​

The Shippo settings page is split into five cards: **Connection**, **Checkout rates**, **Labels**, **Sender**, and **Tracking updates**. Fields are saved together with **Save settings**. The buttons inside the status boxes, such as **Test connection** and **Register webhook in Shippo**, work differently: they run right away and do not need a save.

When **Enable Shippo** is off, a note says that checkout rates, labels and tracking updates stop until you turn it back on, and the other cards are dimmed.

### Connection ​

- **Enable Shippo:** Turns Shippo rates, labels, and tracking updates on for your store. It requires the token for the selected connection mode, so you cannot enable it without one.
- **Connection status:** Once Shippo is enabled, a status box shows whether FluentCart can reach your account. When connected, it lists the Shippo **Account**, the number of **Carriers** on it, and when it was last **Checked**. Click **Test connection** to check the saved token again. If Shippo refuses the token, the box turns red with **Shippo didn't accept the test token** (or live token) and the card header shows **Token rejected**.
- **Connection mode:** Two cards, **Live** (real labels, billed by Shippo) and **Test** (free labels that never ship). The active mode is marked **Active**. Each card has a tag showing whether a token is saved for it, for example **No live token saved** or **Token ending 5857 saved**. Rates, labels, and tracking all use the token of the selected mode.
- **Test token / Live token:** Your Shippo API tokens. Each sits inside its own mode card, and the hint under it reminds you which prefix it needs (
```
shippo_test_
```

 or 
```
shippo_live_
```

). Leave a field blank on later saves to keep the token you already stored. If the selected mode has no token yet, a note under its field asks you to add one before you save. For Live, the note adds that the store stays on Test until then.

### Checkout Rates ​

- **Show Shippo rates at checkout:** Live Shippo rates appear next to your zone shipping methods. Every carrier that returns a rate is shown.

### Labels ​

- **Buy labels from the order page:** Lets you quote and buy labels from the **Create shipment** form on an order. The fields below appear only while this toggle is on.
- **Preferred carrier:** Controls which rate is preselected when you quote a label. The **Create shipment** form ticks the service the customer paid for at checkout first. If there is none, it ticks this carrier's cheapest rate. If this carrier has no rate for the parcel, the cheapest rate overall is used. Leave it on **Cheapest of all carriers** (the default) to always start from the cheapest rate.
- **Units:** Read-only. Shows the weight and size units used for products and boxes that have no units of their own. They come from [Store Settings](/guide/settings-configuration/store-settings); click **Change** to edit them there.

The **Preferred carrier** dropdown is searchable and lists the carriers on your Shippo account in two groups. **Your own accounts** holds carrier accounts you connected in Shippo yourself, such as your own UPS or FedEx account. **Shippo accounts** holds the carriers Shippo provides, each with its number of services. The footer shows how many carriers were found and when the list was updated. Click **Refresh list** after you add or remove a carrier in Shippo.

The **Labels** card can also show two warnings:

- **Products without a unit:** "X products have a weight but no unit. They are treated as kg, the store unit." Click **Review them** to open your products and set a unit.
- **Earlier Shippo units:** If you picked a unit system in an earlier version of the Shippo settings and it differs from Store Settings, Shippo keeps using it for products without units, and a warning tells you which units each side uses.

### Sender ​

The **Sender** card holds the details printed on every label. Its fields appear only while **Buy labels from the order page** is on.

- **Ships from:** Read-only. Your store name and address from Store Settings. Shippo ships from this address. Click **Edit in Store Settings** to change it.
- **Phone** *(required for USPS)*: The number carriers call if a parcel has a problem. Include the country code, such as 
```
+1
```

 for the US. When filled in, it must contain 8 to 15 digits. While it is empty, a warning reminds you that USPS refuses labels without a sender phone.
- **Email:** The sender email on labels. It is filled from your store's admin email; change it if labels need another address.

### Tracking Updates ​

This card connects Shippo's tracking webhook to your store. Its header shows **Webhook registered**, **Not registered**, or **Missing in Shippo**. The webhook buttons run right away and do not need **Save settings**. Setting up the webhook is covered in the next step.

### Setup Notices ​

When something needs attention, the **Carriers** list shows a **Needs attention** badge next to Shippo, and the Shippo settings page shows the details at the top:

- **Missing token:** "Shippo is enabled in Test mode but has no test token, so rates, labels and tracking are off. Add the test token or switch to Live." In Live mode, the notice asks for the live token instead.
- **Incomplete store address:** "Shippo ships from your store address, which is incomplete. Rates and labels will fail until you add:" followed by the missing fields, such as the street address or postal code. Click **Open Store Settings** to complete it.
- **Unsupported currency:** "Shippo cannot quote rates in" your store currency, "so Shippo rates are not shown at checkout. Labels and tracking still work."

## Step 3: Turning On Tracking Updates ​

Shippo sends tracking changes to your store through a webhook, so shipment statuses update without you clicking anything. FluentCart can add this webhook to your Shippo account for you.

1. Save a token first (Step 2). The webhook buttons need a saved token for the selected mode.
2. In the **Tracking updates** card, click **Register webhook in Shippo**.

FluentCart creates a 
```
track_updated
```

 webhook in your Shippo account for the current connection mode (Test or Live). When it succeeds, you see **Webhook registered in Shippo**, the card header shows **Webhook registered**, and the status box lists the **Event**, the **Mode**, and the time of the **Last update** Shippo sent.

Once the webhook is registered, the status box offers three actions:

- **Check status:** Asks Shippo whether the webhook still exists and is active. If someone deleted it in the Shippo dashboard, the box turns red with **The webhook was removed from your Shippo account** and a **Register again** button.
- **Re-register:** Registers the webhook again with the current URL. FluentCart updates the existing webhook instead of adding a second one.
- **Rotate secret:** Issues a new secret for the webhook URL. FluentCart asks you to confirm, because the current URL stops working right away. It then sends the new URL to Shippo for you, so tracking keeps working. Use it if the URL was ever exposed.

If Shippo refuses the webhook, the box shows **Shippo didn't accept the webhook** with Shippo's reason and a **Try again** button, and the manual steps below open automatically.

### Adding the Webhook Manually ​

If you prefer to add the webhook yourself, or the automatic registration fails, expand **Set it up in Shippo yourself** in the **Tracking updates** card. It shows your webhook URL with the secret masked, a **Show** button to reveal it, a **Copy** button, and the steps to follow.

1. Click **Copy** to copy the webhook URL.
2. In your Shippo dashboard, go to **API configuration > Webhooks**.
3. Click **Create webhook**.

1. Set **Event Type** to the 
```
track_updated
```

 event. Do not leave it on **All Events**.
2. Set **Environment** to match your FluentCart **Connection mode**: **Test** for Test mode, **Live** for Live mode.
3. Paste the copied URL into the **URL** field.
4. Click **Create**.

The webhook now appears in the list with an **Active** status.

WARNING

Shippo marks every webhook event as Test or Live. FluentCart compares that with the mode each label was bought in, so a Test event only updates labels bought in Test mode, and a Live event only updates Live labels. Switching your **Connection mode** later does not affect tracking for labels you already bought. If you use both modes, register one webhook for each: select the other mode, save, and click **Register webhook in Shippo** again.INFO

The webhook URL contains a secret token, so treat it like a password. If it is ever exposed, click **Rotate secret** in the **Tracking updates** card. FluentCart rejects webhook calls that carry an invalid token.Your store is now connected to Shippo. Rates, labels, and tracking updates are ready to use.

---

## Managing Packages ​

**Source:** [https://docs.fluentcart.com/guide/shipping/packages](https://docs.fluentcart.com/guide/shipping/packages)

# Managing Packages ​

Packages in FluentCart let you define the physical boxes, envelopes, or soft packages you use to ship your products. By setting up your packaging ahead of time, FluentCart can accurately calculate shipping rates at checkout and pre-select the right package when you're fulfilling orders.

This guide walks you through adding, managing, and configuring your store's packages.

TIP

You can also add a new package directly from the product editor. When configuring a physical product's shipping details — under the **Pricing** panel in the **Shipping** section — you'll find a **Package** dropdown. If no packages have been created yet, simply open that dropdown and select the option to add a new one without leaving the product page.

The package you create will be saved to your store and available here in the Packages settings as well. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for more details.
## Accessing Packages ​

To get started, navigate to **FluentCart Pro** > **Settings** > **Shipping** > **Packages** from your WordPress dashboard.

You will see a list of all the packages you have already created. From here, you can add new packages or manage existing ones.

## Adding a New Package ​

To add a new package, click the **Add Package** button in the top-right corner of the Packages screen. This will open the **Add package** modal where you can configure all the details for your new package.

### Package Type ​

Choose the physical type of packaging you use:

- **Box** — A rigid, box-shaped container. Ideal for most standard shipments.
- **Envelope** — A flat mailer or padded envelope. Best suited for thin or lightweight items.
- **Soft package** — A flexible bag or poly mailer. Useful for clothing, soft goods, or compressible items.

### Dimensions & Weight ​

Enter the physical measurements of your empty package:

- **Length** — The longest dimension of the package.
- **Width** — The width of the package.
- **Height** — The height (or depth) of the package.
- **Weight (empty)** — The weight of the packaging itself when empty. It is added once for each box an order needs, both in weight-based shipping rates and in carrier quotes. A product with no weight of its own is still quoted in its box, at this empty weight.

You can set the unit for dimensions (e.g., **in**, **cm**) and the unit for weight (e.g., **kg**, **lb**) using the dropdowns next to each field. Make sure these match the units configured in your store settings.

### Package Name ​

Give your package a clear, descriptive name (e.g., "Small Box," "Large Envelope," "Medium Poly Mailer"). This name is used internally to help you identify packages when assigning them to products or reviewing orders.

### Use as Default Package ​

Check **Use as default package** to make this package the store-wide default. The default package is used to calculate shipping rates at checkout and is pre-selected when assigning packages to products.

INFO

Only one package can be the store default at a time. Setting a new package as the default will automatically remove the default designation from the previously selected package.Once you have filled in all the details, click **Add package** to save it. Your new package will now appear in the Packages list.

## Managing Existing Packages ​

Each package in your list has a three-dot menu (**⋮**) on the right side. Click it to reveal the available actions:

- **Edit** — Opens the package settings so you can update its name, type, dimensions, or weight.
- **Set as default** — Marks this package as the store default, which will be used for shipping rate calculations at checkout.
- **Delete** — Permanently removes the package from your store. Deleting a package cannot be undone.

---

## Setting Up Shipping Methods ​

**Source:** [https://docs.fluentcart.com/guide/shipping/setting-up-shipping-methods](https://docs.fluentcart.com/guide/shipping/setting-up-shipping-methods)

# Setting Up Shipping Methods ​

Shipping methods are the different delivery options you offer to customers within a specific [shipping zone](/guide/shipping/configuring-shipping-zones). FluentCart allows you to create flexible shipping options, from flat rates to free shipping, ensuring you can meet your customers' needs.

This guide will show you how to add and configure shipping methods for your shipping zones.

### How to Add a Shipping Method ​

Before you can add a method, you must have already created a shipping zone.

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings** > **Shipping**. The **Carriers** page opens.
2. Click **Manage** next to **Manual / Other** to see your **Shipping Zones** list.
3. Find the shipping zone you want to add a method to and click on its name to edit it.
4. Inside the zone's settings, scroll down to the **Shipping Methods** section and click the **Add Shipping Method** button. You can also manage your existing shipping methods from this screen. To update a method's settings, click the Edit button located on the same row as its title.
5. This will open a pop-up window where you can configure the details of your new shipping method.

### Configuring the Shipping Method ​

This is where you define how your shipping option will work.

- **Enable Shipping Method:** This toggle at the top of the pop-up acts as the master switch for this specific method. If it's disabled, the method will be saved but won't appear as an option for customers at checkout.
- **Method Title:** Enter a clear and user-friendly name for this shipping option (e.g., "Standard Shipping," "Express Delivery," "Local Pickup"). This is the name your customers will see at checkout.
- **State:** (Optional) If this shipping method should only be available for specific states or provinces within the shipping zone's country, you can select them here. Leave it blank to have the method apply to the entire country.
- **Method Type:** Choose the type of shipping method you want to offer:

- **Flat Rate:** This is a fixed-cost shipping option. Use this to set a single rate for delivery.
- **Free Shipping:** As the name suggests, this option is free for the customer. It's an excellent incentive to encourage sales.
- **Local Pickup:** This allows customers to pick up their order directly from your physical store or a designated location, bypassing shipping costs entirely.
- **Amount:** If you selected "Flat Rate," enter the cost for this shipping method here (e.g., enter **10** for $10.00). The Amount field hides automatically when **Configure Rate** is set to **Per Weight**, because the cost then comes from your weight tiers instead of a flat value.
- **Configure Rate**

This setting determines how the "Flat Rate" cost is calculated if a customer has multiple items in their cart.

- **Per Order:** Applies a single, fixed charge for the entire order, no matter how many items are purchased. This is the most common setup.
- **Per Item:** The shipping cost is multiplied by the number of items in the cart. For example, if the cost is $2 and a customer buys 3 items, the total shipping cost will be $6.
- **Percentage:** The shipping cost is calculated as a percentage of the total order price. For example, a 10% rate on a $50 order would result in a $5 shipping fee.
- **Per Weight:** Charges shipping based on the total weight of the cart, using a set of tiered rates you define (see **Weight Tiers** below). Ideal for carriers that price by weight brackets — light envelopes at one rate, medium parcels at another, heavy freight higher still.

#### Weight Tiers (Per-Weight Rates) ​

When **Configure Rate** is set to **Per Weight**, a **Weight Tiers** editor appears in place of the fixed Amount field. Each tier defines a weight range and the shipping cost that applies when the cart's total weight falls inside that range.

Each row has three fields:

- **Min (weight)** — The lower bound of the tier, inclusive. Editable on every tier, including the first one (it does not have to start at 
```
0
```

).
- **Max (weight)** — The upper bound of the tier. Must be greater than the tier's Min.
- **Cost** — The shipping amount charged when the cart's total weight lands inside this tier.

Click **Add Tier** to append a new row. A new tier defaults to 
```
previous max + 0.01
```

 for Min so you can chain ranges quickly, but every field stays editable.

**Flexible, non-contiguous ranges**

Tiers do not have to be continuous. You can leave gaps between ranges — for example, 
```
0–10 kg
```

, then 
```
15–20 kg
```

 — when your carrier simply does not offer rates in the gap, or when weights in that gap should fall back to a different shipping method.

If the cart weight falls in a gap, above your last tier, or the method has no tiers at all, the method is hidden at checkout instead of being offered for free. If a customer had already picked it before the cart changed, placing the order fails with "The selected shipping method is not available." so they can choose another method.

**How the cart weight is counted**

The cart weight is the weight of the products plus the empty weight of each box they are packed in. FluentCart packs the items into their assigned [packages](/guide/shipping/packages), counting each box's own weight once per box, not once per unit. For example, three 0.9 kg items that fit in one 0.25 kg box weigh 2.95 kg. When items are heavier than a box's maximum weight, they are split across more boxes, and each extra box adds its own weight.

**Validation**

The editor validates tiers inline before you can save:

- A tier whose **Max** is less than or equal to its **Min** shows an error and the **Add Tier** button is disabled until fixed.
- A tier whose range **overlaps** an earlier tier (e.g., 
```
0–10
```

 followed by 
```
8–15
```

) shows an error — overlapping ranges would create ambiguity when a cart weight fits both tiers.

Correct the highlighted tier and the error clears immediately, re-enabling the **Add Tier** button and the **Save** action.

#### How It Looks at Checkout ​

Once saved, the shipping method appears under **Shipping Options** on the checkout page with the method title and its calculated cost. The Order summary on the right reflects the same amount under **Shipping**, so what the customer picks is exactly what they pay.

- **Class Aggregation**

This advanced setting is for when a customer's cart contains products from different shipping classes (e.g., a small item and a bulky, oversized item). It tells FluentCart how to combine the shipping costs.

- **Combined Cost:** The shipping costs for each distinct shipping class in the cart are calculated and then added together to get the final total.
- **Highest Cost:** Only the single highest shipping cost among all the shipping classes present in the cart is applied.

INFO

The Configure Rate and Class Aggregation settings work together to give you precise control over your shipping fees. For a more detailed guide with advanced examples of how these calculations work, especially when a cart contains multiple items from different shipping classes, please see our documentation on [Advanced Shipping Calculations](/guide/shipping/advanced-shipping-calculations).- **Description:**

You can add a short description for the shipping method. Depending on your theme, this might be displayed to the customer at checkout to provide more context (e.g., "Delivered in 3-5 business days").

Once you have configured all the details, click the **Save** button. Your new shipping method is now active and will be offered to customers in the selected shipping zone.

### Where the Method Name Appears After Checkout ​

The name you give a shipping method is not just a checkout label. Once an order is placed, the method the customer picked travels with the order and appears in three places:

- **The order detail page** in your admin, so your team knows how the order should be packed and sent. See [Order Details Overview](/guide/store-management/orders-management/order-details-overview).
- **The customer's order view** in their account area, so they can see what they paid for.
- **Order emails**, listed alongside the shipping address.

INFO

This is worth keeping in mind when you name a method. A customer-facing name like "Express (2-3 days)" reads far better on a receipt than an internal one like "Zone 2 tier B".

---

## Shipping Carriers ​

**Source:** [https://docs.fluentcart.com/guide/shipping/shipping-carriers](https://docs.fluentcart.com/guide/shipping/shipping-carriers)

# Shipping Carriers ​

Carriers decide where your shipping rates come from. Out of the box, FluentCart uses the zone-based methods you define yourself. With the **Shipping For FluentCart** add-on, you can also connect **Shippo** to show live carrier rates at checkout, buy shipping labels from the order screen, and keep tracking up to date automatically.

This guide shows you where carriers live in your settings and how to install the add-on. Connecting your Shippo account is covered in [Connecting Shippo](/guide/shipping/connecting-shippo).

## What Shippo Adds to FluentCart ​

Shipping For FluentCart adds the Shippo carrier to FluentCart. Once it is connected, you can:

- **Show live rates at checkout:** Customers see real Shippo rates alongside your zone-based shipping methods.
- **Buy labels from the order screen:** Quote the available services for an order, buy a label, and download it without leaving FluentCart.
- **Void labels:** Deleting a shipment voids its Shippo label, and the carrier refunds it if it is eligible.
- **Track shipments:** Refresh tracking from the order, and let Shippo push tracking updates to your store through a webhook.

INFO

Shippo works in two modes. **Test** mode uses your Shippo test token, so you can try the full flow with free labels that are never shipped. **Live** mode uses your live token, and labels are real and billed.
## Requirements ​

Before you start, make sure you have:

- A [Shippo](https://goshippo.com) account and an API token.
- Your store address completed in [Store Settings](/guide/settings-configuration/store-settings). Shippo ships from this address, so rates and labels fail until the street address, city, postal code, and country are filled in.

## Installing Shipping For FluentCart ​

The add-on is available from the **Features & addon** screen in FluentCart.

1. Go to **FluentCart Pro > Settings** in your WordPress dashboard.
2. Click **Features & addon** in the left-hand menu.
3. Scroll to the **Plugin Addons** list and find **Shipping For FluentCart**.
4. Click **Install & Activate**. If FluentCart Pro is not active on your site, this button reads **Download** instead. It does not install anything: it opens the FluentCart add-ons page in a new tab, and you install the plugin yourself.

Once the add-on is active, a **Shippo (Beta)** row appears on the **Carriers** page under **Settings > Shipping**, and the card gets a settings icon that opens it.

## Understanding the Carriers Page ​

Go to **FluentCart Pro > Settings > Shipping** to open the **Carriers** page. Clicking **Shipping** in the settings menu opens it directly, and **Carriers** is the first item under it. Each carrier has a status badge (**Enabled** or **Disabled**) and a **Manage** button.

The Carriers page is part of FluentCart's shipping settings, so it is always there. Without the add-on it lists only **Manual / Other**. With the add-on installed, two carriers are listed:

- **Manual / Other:** The zone-based shipping rates you define yourself. This is the shipping system FluentCart has always had, and it is now where your shipping zones live.
- **Shippo (Beta):** Live rates, label generation, and tracking through the Shippo API. It stays **Disabled** until you connect it.

If a carrier is enabled but something stops it from working, such as a missing token or an incomplete store address, its row also shows a **Needs attention** badge.

Carrier settings contain API tokens, so only users who can manage sensitive store settings can open the Carriers page.

The **Shipping** menu also contains **Shipping Zones**, **Shipping Classes**, and **Packages**. Shipping classes and packages work as before and are covered in their own guides.

### Saving Carrier Settings ​

Each carrier's settings page is split into section cards. As soon as you change a field, an **Unsaved Changes** bar appears with **Discard** and **Save** buttons, and the **Discard** and **Save settings** buttons at the bottom of the page become active. You can also press 
```
⌘S
```

 (or 
```
Ctrl+S
```

). Until you save or discard, FluentCart keeps you on the page, so you cannot lose your edits by clicking another menu item.

## Manual / Other ​

Click **Manage** next to **Manual / Other** to open its settings. This page holds your shipping zones.

- **Enable Manual Shipping:** When this toggle is on, your zone-based shipping methods appear at checkout. Turn it off to remove them from checkout, then click **Save settings**.

Below the toggle, the **Shipping Zones** list shows the general zones that apply to all products, with each zone's name, country, and number of shipping methods. You can search by zone name, add a zone with **Add Shipping Zone**, or use the edit and delete icons in the **Actions** column. See [Configuring Shipping Zones](/guide/shipping/configuring-shipping-zones) for the full walkthrough.

INFO

Turning **Enable Manual Shipping** off removes your zone-based methods from checkout. Leave it on if you want customers to see your own zone methods next to the live Shippo rates.
### Where Did Shipping Zones Go? ​

Shipping zones used to have their own page under **Settings > Shipping > Shipping Zones**. They are now part of the **Manual / Other** carrier. The **Shipping Zones** menu item is still there for old bookmarks, but it now shows a **Shipping zones have moved** notice with the new path. Click **Go to Manual carrier** to open your zones.

Links elsewhere in FluentCart, such as **Add Shipping** on a product or the "no shipping methods" link on an order, now take you to the Manual / Other page as well.

## Fulfilling Orders with a Carrier ​

When you create a shipment for an order, the **Ship with** dropdown lets you choose between **Manual / Other** and **Shippo (Beta)**. Choosing Shippo lets you buy the label directly. See [Shippo Rates, Labels and Tracking](/guide/shipping/shippo-rates-labels-tracking) for the complete flow.

Your add-on is installed. Next, connect your Shippo account so FluentCart can start quoting rates.

---

## Shippo Rates, Labels and Tracking ​

**Source:** [https://docs.fluentcart.com/guide/shipping/shippo-rates-labels-tracking](https://docs.fluentcart.com/guide/shipping/shippo-rates-labels-tracking)

# Shippo Rates, Labels and Tracking ​

Once Shippo is connected, it works in three places: your checkout page, the order screen, and the background tracking updates. This guide explains what customers see, how you buy and manage a label, and how tracking stays up to date.

If you have not connected your account yet, start with [Connecting Shippo](/guide/shipping/connecting-shippo).

## Live Rates at Checkout ​

When **Show Shippo Rates at Checkout** is turned on, Shippo's live rates appear on the checkout page under **Shipping Options**, in the same list as your zone-based shipping methods. Each Shippo rate is listed as the carrier and service name with its price, so customers can pick the one they prefer.

FluentCart builds the parcels for the quote from the products in the cart, using each product's weight and its assigned [package](/guide/shipping/packages). Rates are quoted from your store address in [Store Settings](/guide/settings-configuration/store-settings). To get accurate rates, set a weight on every physical product and assign it a package. See [Creating Physical Products](/guide/product-types-creation/creating-physical-products) for where to set these.

A package's empty weight is added to the parcel, and if the items are heavier than the package's maximum weight, FluentCart splits them across more boxes. A product without a weight is quoted in its package at the package's empty weight. If nothing in the order has a weight and the packages have no empty weight either, FluentCart quotes a default parcel of 10 × 10 × 10 weighing 1 unit, so the rates can come back wrong instead of missing.

Shippo bills your account in its own currency. At checkout, rates are shown in the currency the customer is paying in, and any rate Shippo cannot convert is left out.

## Creating a Shipment and Buying a Label ​

You buy labels from the order screen. Make sure **Buy labels from the order page** is turned on in the Shippo settings first.

1. Go to **FluentCart Pro > Orders** and open an order that contains physical items.
2. In the **Order items** card, click **Create shipment**. The button appears while the order still has items left to ship.
3. The **Create shipment** panel opens with three steps: **Items**, **Method**, and **Review**.

### Step 1: Items ​

Choose which items go in this shipment and how many of each. Use **Clear all** to reset the quantities, or **Ship all remaining** to fill them back in. This lets you split one order into several shipments.

### Step 2: Method ​

Use the **Ship with** dropdown to choose a carrier.

- **Manual / Other:** Pick one of your zone-based methods, or choose **Custom price** to enter the cost yourself (use 
```
0
```

 for free shipping). With a custom price you can also enter an optional **Carrier Name**. You can enter a **Tracking Number** and **Tracking URL** either way.
- **Shippo (Beta):** FluentCart asks Shippo for the services available for this order's address and parcels, and lists them under a heading such as "11 rates for this address".

Each Shippo service shows its name, estimated delivery time, and price. FluentCart tags the cheapest option with **Cheapest** and the fastest with **Fastest**. FluentCart preselects a rate for you, using the first of these that applies: the same service the customer chose at checkout, the cheapest rate from your **Preferred carrier** (if you set one in the Shippo settings), and then the cheapest rate overall. Select the service you want to purchase.

Click **Refresh** to request the rates again. Shippo can return a different set of services each time, so refresh if a service you expect is missing.

INFO

If Shippo has no services for the address, the panel shows "No rates available from Shippo for this shipment." Make sure your store address and the order's shipping address are complete, then click **Refresh**.
### Step 3: Review ​

Check the summary of items, carrier, tracking, and cost. For a Shippo label, the carrier line shows the service and estimated delivery, and the tracking number reads **Assigned when the label is bought**.

You can also:

- **Shipped now / Change:** Keep the current time or set a different **Shipped At** date and time.
- **Add a note for the customer:** Write an optional note that is shown with this shipment.
- **Notify Customer:** Selected by default. Clear it if you do not want the customer notified.

Click **Buy label**. The button shows the price. A confirmation then asks you to confirm the service and its price, for example "Buy USPS — Ground Advantage for $6.42?". Click **Buy Label** to confirm. Buying a label spends money in Live mode, so this extra confirmation is intentional.

When the purchase succeeds, the order's items show as **Shipped** and fulfilled, and the new shipment appears in the **Shipments** card with its tracking number. You can download the label as a PDF from there.

The label cost is what Shippo bills you, in the currency of your Shippo account. If that differs from the order currency, the form adds a note such as "Billed by Shippo in USD." with an approximate amount in the order currency.

FluentCart does not store a copy of the label. Each time you click **Download label**, it fetches the current label PDF from Shippo, so your Shippo account must still be connected in the same mode the label was bought in.

If an order needs more than one parcel, Shippo buys one label for each parcel. **Download label** gives you the first parcel's label. Download the others from your Shippo dashboard.

### International Shipments ​

For shipments that cross borders, FluentCart builds the customs declaration for you, so you buy the label the same way as a domestic one. The declaration lists the contents as merchandise, with the package returned to you if it cannot be delivered. Each item is declared with its name, quantity, total weight, and total value for the quantity shipped, and an item without a weight is declared at 0.1 kg per unit. Shipments between countries in the European Union customs union do not need a declaration.

## Managing Shipments ​

Shipments appear in the **Shipments** card on the order, with columns for **Status**, **Shipment**, **Tracking**, and **Cost**. Each row shows the service, the items shipped, and the date. The **Tracking** column has the tracking number with buttons to copy it and to open the carrier's tracking page.

The **Status** badge is a dropdown. If you can manage order statuses, you can change a shipment to Dispatched, In Transit, Delivered, Returned, or Failed by hand. Carrier tracking never moves a shipment out of Delivered or Returned, but you can still correct those by hand.

Click the arrow at the end of a row to expand the details: **Latest tracking**, **Shipped via**, and **Note to customer**. The expanded row also has **Download label** and **Refresh tracking** buttons.

Click the three-dot button on a shipment to open its actions:

- **Download label:** Fetches the label PDF from Shippo and opens it so you can print it. If Shippo cannot be reached, FluentCart shows "The label could not be downloaded from the carrier" with the HTTP status. Try again after a moment.
- **Refresh tracking:** Asks Shippo for the latest tracking status. If nothing has changed, FluentCart shows "Tracking is already up to date." You can refresh a shipment once every 15 seconds, and the action is not offered once the shipment is Delivered or Returned.
- **Copy tracking number:** Copies the number to your clipboard.
- **Delete shipment:** Removes the shipment. For a Shippo shipment, its label is voided, and the carrier refunds it if it is eligible. If the void fails, the shipment is still deleted, and FluentCart tells you to void the label in the carrier portal.

When you delete a shipment, the order's items go back to unshipped, so you can create a new shipment for them.

INFO

In Test mode, labels are free and never shipped. Shippo only tracks its own test tracking numbers (those beginning with 
```
SHIPPO_
```

), so a test label's tracking shows no carrier updates.
## Tracking Updates ​

FluentCart reads tracking from Shippo in two ways:

- **Automatically:** Shippo calls your webhook whenever a tracking status changes. This requires the webhook from [Connecting Shippo](/guide/shipping/connecting-shippo#step-3-turning-on-tracking-updates).
- **Manually:** Click **Refresh tracking** on a shipment. There is a short wait of 15 seconds between refreshes, and the action is not offered once the shipment is Delivered or Returned.

Shippo's tracking statuses are mapped to the shipment status like this:

| Shippo status | Shipment status |
| --- | --- |
| Pre-transit | Dispatched |
| Transit | In transit |
| Delivered | Delivered |
| Returned | Returned |
| Failure | Failed |

A status Shippo marks as unknown is ignored, so your shipment keeps its current status.

The webhook only acts on tracking updates for shipments in your store. FluentCart ignores events that do not match the mode a label was bought in, events for tracking numbers it does not know, and other event types, and it rejects any call that carries an invalid token.

### What Customers See ​

Every tracking update also reaches your customers. In their [Purchase History](/guide/customer-dashboard/purchase-history), each shipped order shows its delivery status, and the order page lists every shipment with its progress, tracking number, and latest carrier update. When Shippo sends an expected delivery date, customers see it as "Expected Nov 4", and when a parcel is out for delivery the status reads **Out for delivery** with **Expected today**.

## If Something Goes Wrong ​

- **A carrier refused the label:** FluentCart shows which carrier refused it and what Shippo said, and confirms that no label was bought and nothing was charged. For example, if you pick a UPS service before activating UPS in your Shippo account, Shippo answers that the UPS account is not yet registered. Activate the carrier in your Shippo dashboard, or pick a different service, and try again.
- **Shippo rates do not show at checkout:** FluentCart never shows an error to the customer. When a quote fails, the Shippo rates are simply left out of the list. Check these in order: - Shippo is enabled, the selected mode has a token, and **Show Shippo Rates at Checkout** is on.
- Your store address is complete. See the [setup notices](/guide/shipping/connecting-shippo#setup-notices).
- Shippo answered in time. A quote that takes longer than 5 seconds is skipped.
- Quoting is not paused. After Shippo fails to respond or returns an account-level error, FluentCart stops asking for 1 minute for every visitor. A single visitor can also trigger up to 20 live quotes in 10 minutes.
- The answer may be cached. FluentCart keeps Shippo's answer for about 10 minutes for the same address and cart, so changes such as a new store address or token can take that long to show at checkout.
- **No rates in the Create shipment panel:** See the note under [Step 2: Method](#step-2-method).

## Data Shared with Shippo ​

FluentCart only contacts Shippo after you enable it and save an API token. It sends:

- **At checkout:** Your store address, the customer's city, state, postal code and country, and the parcel weights and dimensions.
- **When you buy a label:** Your store name and company name, your store address, sender Phone and Email from the **Sender** card, the order number as label metadata (for example "Order #123"), the customer's name, company, shipping address, phone and email, and the parcels. For international shipments, it also sends the item names, quantities, weights, and values for customs.
- **When you download a label:** The label's transaction ID, so Shippo can return a fresh link to the PDF.
- **When tracking is refreshed or a webhook arrives:** The label's transaction ID, or the tracking number and carrier.

Your shipping setup is now ready to quote, label, and track orders through Shippo.

---

## Understanding and Using Shipping Classes ​

**Source:** [https://docs.fluentcart.com/guide/shipping/understanding-shipping-classes](https://docs.fluentcart.com/guide/shipping/understanding-shipping-classes)

# Understanding and Using Shipping Classes ​

The most common use for a shipping class is to adjust the shipping cost for certain types of items. For example, you can create a:

- **Heavy Items** class to automatically add an extra fee to an order.
- **Fragile Goods** class to cover the cost of special handling and packaging.

This guide explains how to use Shipping Classes to group products with similar shipping needs, allowing you to apply special shipping rules to them.

## How to Add and Manage Shipping Classes ​

1. **Navigate to Shipping Classes**:

- From your WordPress dashboard, go to **FluentCart** > **Settings**.
- Click on the **Shipping** tab.
- Select the **Shipping Classes** sub-tab.
2. **Add a New Shipping Class**:

- Click the **"Add Shipping Class"** button.
3. **Define Class Details**:

- **Class Name**: Give your shipping class a descriptive name (e.g., "Bulky Items").
- **Cost**: Enter the numerical value for the additional cost associated with this class. This is an *adjustment* that will be added to the base shipping method cost.
- **Cost Type**: This defines how the "Cost Adjustment" is applied: - **Percentage**: The "**Cost Adjustment**" will be applied by percentage.
- **Fixed Amount**: The "**Cost Adjustment**" will be applied by a fix amount.
- **Apply to quantity**: Select this checkbox if you want the cost multiplied by the number of units in the cart that belong to this class. For example, a $5 class with 3 units adds $15. Leave it unchecked to charge the class once per order, however many products or units use it.
4. **Save the Shipping Class**:

- Click the **"Save"** or **"Add Class"** button.

## Assigning Shipping Classes to Products ​

Once you have created your shipping classes, you need to assign them to your products.

1. **Edit a Product**:

- Go to **FluentCart** > **Products**.
- Edit an existing product or create a new one.
2. **Select Shipping Class**:

- On the product editing page, locate the **"Shipping Class"** dropdown or selector (usually under a "Shipping" or "Product Data" tab).
- Choose the appropriate shipping class from the list.
3. **Update Product**:

- Save your product to apply the assigned shipping class.

**Important Notes**:

- The actual final shipping cost will combine the shipping method's base rate with these shipping class adjustments, and then apply the "Class Aggregation" rule defined in the shipping method.
- Class charges are grouped by class, not by cart line. If two different products share a **Fixed Amount** class and **Apply to quantity** is off, the class is charged once, not once for each product.
- A **Percentage** class with **Apply to quantity** off is charged once, as a percentage of the highest unit price among the products in that class.
- With **Highest Class** aggregation, FluentCart compares the total of each class and charges the largest one, instead of the most expensive single cart line.

---

