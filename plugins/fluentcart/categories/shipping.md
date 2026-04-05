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
- These individual class contributions are then gathered.
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

1. **Navigate to Shipping Settings**:

To begin, you must navigate to the shipping configuration area within FluentCart.

- From the main WordPress dashboard, locate the **FluentCart Pro** section in the left-hand navigation menu and click on **Settings**.
- On the Settings page, select the **Shipping** tab.
- Ensure the **Shipping Zones** sub-tab is selected. This screen will display all of your existing shipping zones.
2. **Add a New Shipping Zone**:

- Click the **"Add Shipping Zone"** button.
- You will be taken to the "Add Shipping Zone" detail page.

![Screenshot of Configuring Shipping Zones](https://docs.fluentcart.com/images/shipping/Configuring-Shipping-Zones/FluentCart-Shipping-Category-1.webp)

1. **Name Your Zone and Pick Your Regions**:

Now you're on the setup page for your new zone. You only need to fill in two things:

- **Zone Name:** Give your zone a name that's easy for you to remember. For example, "United States," "Europe," or "Local Customers."
- **Country:** This is where you choose the places that belong to this zone. Start typing a country or state into the box, and then select it from the list that appears. Keep it empty to apply to all the countries.

![Screenshot of Configuring Shipping Zones](https://docs.fluentcart.com/images/shipping/Configuring-Shipping-Zones/FluentCart-Shipping-Category-2.webp)

Once you're happy with the name and the regions you've selected, just click the **"Save Shipping Zone"** buttson.

Your new shipping zone will now appear in the list of zones, and you can proceed to add [shipping methods](/guide/shipping/setting-up-shipping-methods) to it.

INFO

Customers will only see shipping methods applicable to the zone their shipping address falls into.

---

## Setting Up Shipping Methods ​

**Source:** [https://docs.fluentcart.com/guide/shipping/setting-up-shipping-methods](https://docs.fluentcart.com/guide/shipping/setting-up-shipping-methods)

# Setting Up Shipping Methods ​

Shipping methods are the different delivery options you offer to customers within a specific [shipping zone](/guide/shipping/configuring-shipping-zones). FluentCart allows you to create flexible shipping options, from flat rates to free shipping, ensuring you can meet your customers' needs.

This guide will show you how to add and configure shipping methods for your shipping zones.

### How to Add a Shipping Method ​

Before you can add a method, you must have already created a shipping zone.

1. From your WordPress dashboard, navigate to **FluentCart Pro** > **Settings** > **Shipping Zones**.
2. Click on the **Shipping Zones** sub-menu.
3. Find the shipping zone you want to add a method to and click on its name to edit it.
4. Inside the zone's settings, scroll down to the **Shipping Methods** section and click the **Add Shipping Method** button. You can also manage your existing shipping methods from this screen. To update a method's settings, click the Edit button located on the same row as its title.
5. This will open a pop-up window where you can configure the details of your new shipping method.

![Screenshot of Shipping Method](https://docs.fluentcart.com/images/shipping/setting-up-shipping-method/shipping-method-1.webp)

### Configuring the Shipping Method ​

This is where you define how your shipping option will work.

- **Enable Shipping Method:** This toggle at the top of the pop-up acts as the master switch for this specific method. If it's disabled, the method will be saved but won't appear as an option for customers at checkout.
- **Method Title:** Enter a clear and user-friendly name for this shipping option (e.g., "Standard Shipping," "Express Delivery," "Local Pickup"). This is the name your customers will see at checkout.
- **State:** (Optional) If this shipping method should only be available for specific states or provinces within the shipping zone's country, you can select them here. Leave it blank to have the method apply to the entire country.
- **Method Type:** Choose the type of shipping method you want to offer:

- **Flat Rate:** This is a fixed-cost shipping option. Use this to set a single rate for delivery.
- **Free Shipping:** As the name suggests, this option is free for the customer. It's an excellent incentive to encourage sales.
- **Local Pickup:** This allows customers to pick up their order directly from your physical store or a designated location, bypassing shipping costs entirely.
- **Amount:** If you selected "Flat Rate," enter the cost for this shipping method here (e.g., enter **10** for $10.00).
- **Configure Rate**

This setting determines how the "Flat Rate" cost is calculated if a customer has multiple items in their cart.

- **Per Order:** Applies a single, fixed charge for the entire order, no matter how many items are purchased. This is the most common setup.
- **Per Item:** The shipping cost is multiplied by the number of items in the cart. For example, if the cost is $2 and a customer buys 3 items, the total shipping cost will be $6.
- **Percentage:** The shipping cost is calculated as a percentage of the total order price. For example, a 10% rate on a $50 order would result in a $5 shipping fee.
- **Class Aggregation**

This advanced setting is for when a customer's cart contains products from different shipping classes (e.g., a small item and a bulky, oversized item). It tells FluentCart how to combine the shipping costs.

- **Combined Cost:** The shipping costs for each distinct shipping class in the cart are calculated and then added together to get the final total.
- **Highest Cost:** Only the single highest shipping cost among all the shipping classes present in the cart is applied.

INFO

The Configure Rate and Class Aggregation settings work together to give you precise control over your shipping fees. For a more detailed guide with advanced examples of how these calculations work, especially when a cart contains multiple items from different shipping classes, please see our documentation on [Advanced Shipping Calculations](/guide/shipping/advanced-shipping-calculations).- **Description:**

You can add a short description for the shipping method. Depending on your theme, this might be displayed to the customer at checkout to provide more context (e.g., "Delivered in 3-5 business days").

![Screenshot of Shipping Method](https://docs.fluentcart.com/images/shipping/setting-up-shipping-method/shipping-method-2.webp)

Once you have configured all the details, click the **Save** button. Your new shipping method is now active and will be offered to customers in the selected shipping zone.

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

![Screenshot of Shipping Classes](https://docs.fluentcart.com/images/shipping/understanding-shipping-classes/shipping-classes-1.webp)
3. **Define Class Details**:

- **Class Name**: Give your shipping class a descriptive name (e.g., "Bulky Items").
- **Cost**: Enter the numerical value for the additional cost associated with this class. This is an *adjustment* that will be added to the base shipping method cost.
- **Cost Type**: This defines how the "Cost Adjustment" is applied: - **Percentage**: The "**Cost Adjustment**" will be applied by percentage.
- **Fixed Amount**: The "**Cost Adjustment**" will be applied by a fix amount.
- **Apply to Qunatity**: Select this checkbox if you want the class to add per item charge if the buyer has multiple item of this product in the cart.
4. **Save the Shipping Class**:

- Click the **"Save"** or **"Add Class"** button.

![Screenshot of Shipping Classes](https://docs.fluentcart.com/images/shipping/understanding-shipping-classes/shipping-classes-2.webp)

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

---

