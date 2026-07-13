# Woocommerce Tickets

*Category from The Events Calendar documentation*

---

## Sell Event Tickets with WooCommerce

**Source:** [https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets/](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets/)

[Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) integrates tightly with [WooCommerce](https://woocommerce.com/), transforming each event ticket into a simple [virtual product](https://woocommerce.com/document/managing-products/virtual-downloadable/) within WooCommerce. [Creating a ticket](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/) for an event using Event Tickets Plus automatically generates a corresponding WooCommerce product. This product is usually set with hidden catalog visibility by default, ensuring ticket sales are managed discreetly within your event workflow​.

This [integration](https://www.theeventscalendar.com/blog/sell-event-tickets-with-woocommerce/) allows for flexible ticket management, leveraging WooCommerce’s powerful e-commerce features. The event details, ticket quantities, and attendee information are all maintained within The Events Calendar, while WooCommerce handles the transactional processes such as payments, stock control, and order statuses. This integration provides a unified solution where WooCommerce manages the purchasing experience, processing payments, sending order confirmations, and handling refunds, just like any other product​.

Tickets created with Event Tickets Plus can be sold through the event page and WooCommerce product listings, offering a versatile approach to ticket sales. Additionally, WooCommerce’s extensive library of plugins and extensions can enhance the ticket purchasing experience by enabling features like discount codes and flexible payment plans​. This integration maximizes control and flexibility, making it easier for event organizers to manage tickets and for attendees to make purchases through a familiar, user-friendly interface.

## Getting Started

⚠️ **NOTE**: If you plan on using **only WooCommerce** to sell tickets, we suggest disabling Tickets Commerce by going to **Tickets > Settings > Payments**and disabling it there. In case you want to use both and switch between them for some tickets please check out [our article here.](https://docs.nexcess.com/software/the-events-calendar/tickets-commerce/)

To get started, you’ll need a bare minimum of 3 plugins: Event Tickets, Event Tickets Plus, and WooCommerce.

Event Tickets and WooCommerce are both free and can be added via the official WordPress plugin repository by clicking on **Plugins**in your WordPress dashboard, and clicking on **Add New**. Simply search for Event Tickets, install and activate, then do the same for WooCommerce.

Event Tickets Plus can be purchased and downloaded from our website at [https://theeventscalendar.com/](https://theeventscalendar.com/products/wordpress-event-tickets/). Once it’s downloaded, go back to your WordPress dashboard, navigate to **Plugins** > **Add** **New**, and click Upload. Find the zip file, upload it, and once it’s uploaded, be sure to click **Activate**.

👋 Event Tickets will display a welcome screen after you activate it. You can ignore that and go back to installing WooCommerce.

Upon activating WooCommerce, it will walk you through a simple setup process that will ask for your business info.

When it asks about your Product Type, it lists several options. You’ll notice “tickets” isn’t an option, and that’s OK. Whatever you choose here doesn’t actually affect anything, so just go ahead and choose **physical products** and click continue.

When it asks about installing additional business features, go ahead and click the down arrow to expand that out.

You’ll notice a lot of add-ons, some free some paid. The only one we recommend installing is the first one, which is WooCommerce’s default method for collecting payment, and integrates with your Stripe account. You’re welcome to check out the other options and install any you like but for the purpose of this tutorial, you won’t need any of them.

Next, it will ask you to install a theme. You’ve likely already done that so you can probably just skip this step by clicking **Continue with my active theme**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/continue-kadence.jpg)

That’s it for the initial setup of WooCommerce. It will now try to get you to create products. **You can ignore this**. You will not be creating tickets using WooCommerce (more on that later). Your next step is to setup your payment gateway (Stripe, PayPal etc).

Now, we’re not going to go through the process of setting up your payment gateway in this tutorial because there are several different options and it would make this tutorial crazy long. But I will give you a quick overview.

You have a few options:

- WooCommerce Payments. This is WooCommerce’s newer, default payment option and uses Stripe to collect payments.
- Stripe for WooCommerce plugin. This is the traditional method of using Stripe with WooCommerce. 
- (For a detailed description of the differences between those two Stripe options, check out [WooCommerce’s article](https://woocommerce.com/document/woocommerce-payments/compatibility/woocommerce-payments-vs-stripe-plugin-comparison/). Most people will want to use WooCommerce Payments but depending on your needs, you may need to use Stripe for WooCommerce)
- PayPal, Square and many others

To get started setting up your payment gateway, click on **WooCommerce**> **Settings**and click on the **Payments**tab, then click the link that says **All Payment Methods**. From here you can either start setting up WooCommerce Payments, or scroll down and click on **Discover other payment providers**. There you will see all sorts of options for payment gateways.

For more detailed information about setting up specific payment gateways, here are a few articles from WooCommerce themselves:

- [WooCommerce Payments (uses Stripe)](https://woocommerce.com/document/woocommerce-payments/startup-guide/)
- [Stripe for WooCommerce](https://woocommerce.com/document/stripe/)
- [PayPal Payments](https://woocommerce.com/document/woocommerce-paypal-payments/)
- [Square for WooCommerce](https://woocommerce.com/products/square/)

## Creating Tickets

Now that WooCommerce is installed and your payment gateway is all setup and ready to collect payments, you shouldn’t have to mess with WooCommerce anymore. Everything you do from here on out will take place in a Post, or Page, or Event using the Event Tickets block/module.

⛔ **Do NOT go to WooCommerce > Products and create products to create a ticket. Creating tickets is done within the post/page/event editor.**

## Order Statuses and Ticket Emails

When purchasing tickets with [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) with WooCommerce, emails won’t be sent to attendees until the order has been marked as **Complete**. By default, this process needs to be done manually by the administrator.

This is default WooCommerce behaviour and not something that we can change.

You can change when Event Tickets sends the emails by going to **Tickets > Settings > Integrations**and in the WooCommerce section, select the order statuses you want:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-2-1024x433-1.jpg)

## Stock Management

For optimal functionality with Event Tickets Plus, we recommend that you check *Enable stock management*under **WooCommerce > Settings > Products > Inventory**. If you leave this option *unchecked*, it may result in ticket capacity showing as “unlimited” regardless of your ticket stock.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/woo-stock-management-1024x485-1.png)

## Other Settings

#### Handling PayPal Orders

To avoid having duplicated attendees, we’ve included the ability to have a 5-second delay before tickets are sent. If you are using PayPal with WooCommerce, enabling this delay is advised.

Please refer to our guide on [using PayPal for ticket purchases](https://theeventscalendar.com/knowledgebase/k/configuring-tribe-commerce-with-paypal/) to configure your PayPal settings.

#### Price Suffix

Ever want to add some descriptive text about a ticket after the price? A “Price Suffix” is text that displays after the product price, showing details related to the price of the product. WooCommerce has a method for displaying suffix text and we’ve integrated it in the tickets block when you have the WooCommerce tax feature enabled.

To enable this, head to **WooCommerce → Settings → Tax → Price display suffix**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WooCommerce-Price-Suffix-1024x913-1.png)

To see the WooCommerce Price Suffix on your Event Tickets, view a published ticket.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Event-Tickets-display-WooCommerce-Suffix-1024x672-1.png)WooCommerce Price Suffix displayed on Event Tickets Plus

## More Features

- [WooCommerce and VAT Taxes with Event Tickets](https://docs.nexcess.com/software/the-events-calendar/woocommerce-tickets-taxes/)
- [How to Add Coupons for Tickets with WooCommerce](https://docs.nexcess.com/software/the-events-calendar/ticket-coupons-woocommerce/)
- [Embedding Tickets and Products with WooCommerce Shortcodes](https://docs.nexcess.com/software/the-events-calendar/woocommerce-shortcodes/)
- [Adding and Invoicing Event Attendees in WooCommerce](https://theeventscalendar.com/knowledgebase/adding-and-invoicing-attendees-in-woocommerce/)

## Switching from Tickets Commerce to WooCommerce

Tickets Commerce is the lightweight eCommerce solution that comes as part of the Event Tickets plugin. This solution is simpler in features and functionality compared to WooCommerce. You may run into limitations after using Tickets Commerce for a little while and decide to make the move to WooCommerce. In this article, we’ll show you how to easily switch from Tickets Commerce to WooCommerce with the Event Tickets and Event Tickets Plus plugins.

To use WooCommerce for tickets, you must have both the Event Tickets and Event Tickets Plus plugins installed and activated.

Tickets are specific to the eCommerce provider they were created for. **Once a particular eCommerce solution is deactivated, any associated tickets will no longer be available.** However, note that any existing attendees for those tickets will still show on the event’s attendees page.

**Note:** When making the switch to WooCommerce, you will have to manually re-create tickets that were created while you were still using Tickets Commerce.

#### Switching the Ticket Provider

Any given event can only use one eCommerce provider at a time. You can set this independently for each event.

You can find the **Sell tickets using** option in the “gear icon” settings of the tickets form when using the Classic Editor, and will show in the editor sidebar when the tickets block is selected when using the Block Editor.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Ticket-Settings-Gear-1024x120-1.jpg)Ticket Settings in the Classic Editor

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Tickets-Commerce-to-WooCommerce-1024x646-1.jpg)Sell tickets using: option in the Classic Editor

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Tickets-Commerce-to-WooCommerce-Block-Editor-1024x383-1.jpg)Sell tickets using: option in the Block Editor

Depending on your situation when switching between Tickets Commerce and WooCommerce, you will take one of two approaches.

#### Events Already Using Tickets Commerce

If you have ongoing events with tickets that were created with Tickets Commerce but want to start using WooCommerce for new events and tickets, you can leave Tickets Commerce enabled until those events have finished ticket sales.

Once all of the Tickets Commerce events are finished, you can disable Tickets Commerce under **Tickets > Settings > Payments**, and any new tickets will automatically be created as WooCommerce tickets.

You can also move the attendees from the original ticket to a new one if desired. See our [Moving Tickets](https://docs.nexcess.com/software/the-events-calendar/move-tickets-attendees/) article for these steps.

#### New Events

If you’re using Tickets Commerce and WooCommerce, make sure the **Sell tickets using** option is set to “WooCommerce” before creating new tickets on new events.

If you do not have any current tickets for sale with Tickets Commerce, you can simply enable WooCommerce and disable Tickets Commerce under **Tickets > Settings > Payments**, and any new tickets will automatically use WooCommerce.

## Limiting to One Ticket per Purchase

When the time comes to create a new ticket for our events, we can always choose the number of tickets we need before purchasing them.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-3-1024x374-1.jpg)

But sometimes, we need to limit the quantity to **only one ticket** per purchase. If it is the case that we are selling our tickets through WooCommerce, we can do this limitation by directly editing our ticket as WooCommerce Product, and in the Inventory section, we can check the “Limit purchases to 1 item per order” option.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-4-1024x418-1.jpg)

In this way, the ticket quantity selection form will allow you to select up to only 1 ticket per purchase.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-5-1024x349-1.jpg)

An alternative option, which requires users to log in to WordPress, is explained in this other [guide](https://docs.nexcess.com/software/the-events-calendar/customize-rsvp/).

## Adding Tickets Fees

You may want to add ticket fees to your tickets created with [Event Tickets and Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/). Although this feature isn’t quite available out of the box, we’ll show you how to set up a workaround so that you can charge your customers a flat-rate fee. It’s important to note that this feature is currently only available when using WooCommerce with Event Tickets Plus.

#### WooCommerce Settings

The first thing you’ll want to do is go to **WooCommerce > Settings > Shipping**. Even though you won’t be shipping a physical product to your ticket holders, tickets are stored in WooCommerce as products, and that is how you will be able to add the desired fee to the ticket. Select **Add shipping zone**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-6-1024x289-1.jpg)

Give the zone a name like “Fees” and select **Add shipping method**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-7-1024x413-1.jpg)

Choose **Flat Rate** and then **Add shipping method**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-8-1024x420-1.jpg)

Go back to **Shipping Zones,**hover over your newly-added zone, and click **Edit**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-9-1024x209-1.jpg)

Now you can add your fee as a shipping method by clicking on **Add Shipping Method**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-10-1024x449-1.jpg)

Hover over your title to see the **Edit** button. Once you click on it, you’ll find your settings pop up. This is where you can add your fee next to the **Cost** field and **Save Changes**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-11-1024x600-1.jpg)

#### WooCommerce Product

As tickets are technically listed as WooCommerce products, so there is one final step in this process to ensure that your fee appears at checkout.

Head over to Products in your WordPress Dashboard, locate the ticket name you’d like to enable the fee and click **Edit**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-12-1024x205-1.jpg)

Scroll down to **Product Data**, uncheck the **Virtual** option and click Update in the top right sidebar. We know that you are not selling a physical product; however, this is the only way that WooCommerce knows to add that “shipping” fee.

And that’s it! Now at checkout, you’ll see the fee added to your tickets.

#### Further Customizations

From here, you can hide the address listed under fees if you prefer (since you won’t be shipping anything) by adding the following CSS snippet to your theme’s stylesheet:

```
p.woocommerce-shipping-destination {
  display:none;
}
```

You can also change the word “Shipping” to something like “Fees” by adding the following snippet to your theme’s functions.php file:

```
add_filter('woocommerce_shipping_package_name', 'change_shipping_text_to_delivery', 20, 3 );
function change_shipping_text_to_delivery( $sprintf, $i, $package ) {
    $sprintf = sprintf( _nx( 'Fees', 'Fees %d', ( $i + 1 ), 'delivery packages', 'woocommerce' ), ( $i + 1 ) );
    return $sprintf;
}
```

In the end, your checkout page will look something like this:

![Checkout page for tickets with added ticket fees](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-03-08-at-11.40.00-AM.jpg)

## Adding and Invoicing Event Attendees

When processing ticket orders through WooCommerce, there may be times you need to manually add an attendee to an event.

You can follow the steps outlined in [Adding and Editing Attendees](https://docs.nexcess.com/software/the-events-calendar/event-attendees/) for an event, but this method doesn’t allow attendees to pay for their ticket(s) online.

So how can you manually add an attendee to an event and allow them to conveniently pay online through WooCommerce? We’ll show you how!

#### Create a User Account for the Attendee

If the attendee does not yet have a user account on the website, the first step is to create one. To create a user account:

1. Go to **Users → Add New**
2. Complete the required fields
3. Set the new user’s **Role** to **Customer**

![Add New User](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-New-User-—-WordPress.jpg)

👋 For additional information on this step, see [Users Add New Screen](https://wordpress.org/support/article/users-add-new-screen/) on WordPress.org

#### Add the New Order in WooCommerce

Next, you’ll add the new Order in WooCommerce:

1. Go to **WooCommerce → Orders → Add New**
2. Ensure the **Status** is **Pending payment**
3. Select the user’s account under **Customer** *(Billing and Shipping information is optional)*
4. From **Add item(s)**, search for and select the ticket by name or SKU
5. Save the new order with the **Create** button

![Add a New WooCommerce Order](https://docs.nexcess.com/wp-content/uploads/2026/06/Add-New-WooCommerce-Order.jpg)Add a New WooCommerce Order

**Ticket Tips**

- When processing orders with WooCommerce, tickets created in Event Tickets Plus are automatically created as WooCommerce Products — there’s no need to manually create a WooCommerce Product!
- No tickets yet? Follow these steps to [create a new ticket](https://docs.nexcess.com/software/the-events-calendar/assigned-seating-tickets/)
- Unsure of an existing ticket’s name or SKU? You can locate it under **Advanced Options → Ticket SKU** of the ticket creation screen of the event, page, or post that contains the ticket

#### WooCommerce Order Actions

The **Order actions** menu in the new WooCommerce order is where you can regenerate the attendee for the event, resend the tickets email, and send the email invoice and order details to the customer for online payment.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WooCommerce-Order-actions-button.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WooCommerce-Order-actions.jpg)

Select **Regenerate attendees** and click the **Update** button to sync the attendee to the Event. You will now see this attendee’s information within the Attendees screen.

Select **Resend tickets email** and click the **Update** button to trigger the ticket email from Event Tickets Plus.

Select **Email invoice / order details to customer** and click the **Update** button. This will email the WooCommerce Order invoice to the customer, which contains a link to **Pay for this order**online through WooCommerce.

![WooCommerce Invoice](https://docs.nexcess.com/wp-content/uploads/2026/06/WooCommerce-Pay-for-this-order.jpg)Manually added event attendees can pay via the link included in the WooCommerce invoice email

![Order details with WooCommerce](https://docs.nexcess.com/wp-content/uploads/2026/06/WooCommerce-Customer-payment-page.jpg)A link to the Customer payment page is also included on the WooCommerce Edit order screen, in case you prefer to include this link in your own outgoing email to the attendee

Your attendee is now registered for the event and can complete their ticket payment online, simplifying the process for both parties!

---

