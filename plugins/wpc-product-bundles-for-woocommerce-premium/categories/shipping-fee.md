# Shipping Fee

*Category from WPC Product Bundles for WooCommerce (Premium) documentation*

---

## Shipping Fee

**Source:** [https://doc.wpclever.net/woosb/shipping-fee/](https://doc.wpclever.net/woosb/shipping-fee/)

## Shipping Fee

When configuring the shipping method for product bundles, you need to choose how you would like to charge your customers with the shipping fee. Users need to choose either:

- *Apply to the whole bundle*: only *charge once* for the bundle as a whole.
- *Apply to each bundled product:* charge the *same shipping fee* on each item chosen in the current bundle.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-step-11.png)

For example, if you have set up the shipping fee to $5 & choose the first option, the whole bundle will be charged with a $5 shipping fee no matter how many bundled products are included. If you choose the second option,  each chosen bundled product will be charged with a $5 shipping fee equally.

[Bundled item 1 + $5 shipping fee] + [Bundled item 2 + $5 shipping fee] = Total

> Smart bundles only accept a flat shipping rate based on the chosen shipping class for all bundled items. It’s impossible to set up different shipping rates for bundled items.

#### STEPS TO CONFIGURE THE SHIPPING FEE FOR SMART BUNDLES

> Step 1: Set up shipping options in WooCommerce settings: WooCommerce >> Settings >> Shipping tab.
> 
> Set up shipping zones (if any)
> Add flat rate shipping method under the Shipping zones section
> Add Shipping classes from the Shipping Classes section
> Click Edit the Flat rate shipping method & add the rates for each shipping class
> 
> Step 2: Choose a shipping class in the Shipping tab of the Product Data section on the bundle page.
> Step 3: Choose a shipping method for the Shipping fee option in the Bundled Products tab of the bundle page.
> 
> Apply to the whole bundle.
> Apply to each bundled product

### STEP 1 – SET UP SHIPPING OPTIONS IN THE WOOCOMMERCE SETTINGS:

On the admin dashboard, you can configure all shipping options from **WooCommerce >> Settings >> Shipping tab.**

Here you can find *Shipping zones, Shipping options,*and *Shipping classes*.

#### 1/ Shipping zones:

Set up shipping rates based on different zones.  For example: US, EU, and other zones.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-settings.png)Shipping settings in WooCommerce dashboard

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-zones.png)Add shipping methods to each shipping zone.

If you don’t want to set up zones, you can skip this and continue to add shipping methods by clicking on the “Manage shipping methods” button.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-manage-shipping-methods.png)

There are 3 shipping methods you can add: **Flat rate, Free shipping,**or**Local pickup**.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-add-shipping-method.png)Click Add shipping method to choose either Flat rate, Free shipping, or Local pickup. You can choose some or all of these methods to add.

The flat rate shipping method can be configured based on different shipping classes. If you haven’t set up any shipping classes, go to the *Shipping classes* tab to add some first. Read more in part 3.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-flat-rate-shipping.png)Flat rate method

Free shipping can be configured based on many rules. If you would like to use free shipping for smart bundles, you can add this shipping method and configure it.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-free-shipping.png)Free shipping method

The local pickup method for buyers to come to the store and pick up their order themselves.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-local-pickup.png)Local pickup shipping method

#### 2/ Shipping options:

Click on the **Shipping options** tab to configure how you would like to charge the shipping fee.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-options.png)

#### 3/ Shipping classes:

The flat rate shipping methods can be set based on **shipping classes**, so you will need to have different shipping classes before you can set up shipping rates for each class in flat rate shipping methods in part 1.

If you haven’t set up any shipping class or shipping options, you can add new ones from **WooCommerce >> Settings >> Shipping >> Shipping class**then press *Add shipping class* to create new ones.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-classes.png)Shipping classes

Navigate back to the *Flat rate shipping methods* under the *Shipping zones* section and click *Edit* to configure the rates.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-rates.png)

Set up the rates for each shipping class in each shipping method

Now the shipping classes are ready for smart bundles.

### STEP 2 – CONFIGURE A SHIPPING CLASS ON THE BUNDLE PAGE:

After having proper shipping classes, you should go to the *Product Data* section of the bundle page, open the *Shipping* tab to choose one of the existing **Shipping classes** to apply to the current bundle.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-class-e1593083410762.png)

### STEP 3 – CONFIGURE A SHIPPING METHOD FOR THE CURRENT BUNDLE:

Continue with a shipping method, open the *Bundled Products* tab to choose a shipping method **>> Update**.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-shipping-fee-e1629796384596.png)

Now the shipping fee for your bundle will be reflected on the cart and checkout pages.

![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-shipping-fee-cart.png)Shipping cost on the cart page
![](https://doc-14bd3.kxcdn.com/wp-content/uploads/2020/06/woosb-wpcstore-shipping-fee-checkout.png)Shipping cost on the checkout page

---

