# Ticket Addons

*Category from The Events Calendar documentation*

---

## Selling Add-Ons with Event Tickets

**Source:** [https://docs.nexcess.com/software/the-events-calendar/ticket-addons/](https://docs.nexcess.com/software/the-events-calendar/ticket-addons/)

Sometimes, selling just the main event ticket is not enough. You may want to offer attendees the option to purchase extras, such as T-shirts, meals, rental equipment, or VIP upgrades. This article explains the available methods to add extra sales options or add-ons to your events using The Events Calendar and Event Tickets.

### Option 1: Create Additional Ticket Types

If the extra item is tied directly to event capacity, you can create a separate ticket type. For example:

- **General Admission** – Standard entry.
- **Admission + T-Shirt** – Entry with a T-shirt included.
- **VIP Admission** – Entry with exclusive perks.

**Pros:** Keeps everything tracked under the event itself.
**Cons:** May increase the number of ticket types, especially if you offer many variations.

### Option 2: Use WooCommerce Product Add-Ons (Recommended for Flexibility)

If you are using **Event Tickets Plus with WooCommerce**, you can leverage product add-ons or extensions like:

- **WooCommerce Product Add-Ons** (official extension)
- **Third-party WooCommerce add-on plugins**

This method allows attendees to select optional extras during checkout without needing to create multiple ticket types. For example:

- Add a meal option (+ $15)
- Add a parking pass (+ $10)
- Add rental equipment (+ $20)

**Pros:** Cleaner ticket setup, more flexibility for upsells.
**Cons:** Requires WooCommerce and an add-on plugin.

Please take note that we are unable to guarantee that third-party plugins will work with our products; therefore, we advise testing on a [staging site](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/) first and getting in touch with the plugin author with any questions.

### Option 3: Sell Extras as Separate Products

You can also create standalone WooComm/erce products for extras and link to them from your event description. For example:

- Add a “Merchandise” product page with T-shirts or hoodies.
- Add a “Meal Voucher” product page.

Attendees can buy the event ticket and extras in separate transactions or you can [bundle](https://docs.nexcess.com/software/the-events-calendar/customize-event-tickets/) them using WooCommerce product bundles.

**Pros:** Works even if the extras are not tied to event capacity.
**Cons:** Requires customers to navigate to another product page unless bundled.

### Option 4: Custom Development (Advanced)

For advanced needs, you may consider custom code to extend how tickets and add-ons work together. In case you decide to go this route, we have extensive documentation on customization that you can find [here](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/).

### Which Option Should I Choose?

- If extras affect ticket capacity → Use **additional ticket types**.
- If extras are optional and not capacity-dependent → Use **WooCommerce add-ons**.
- If extras are unrelated to attendance → Sell them as **separate products**.

### Summary

Adding extra sales options or add-ons is possible in multiple ways, depending on your setup. The recommended approach for most cases is to use WooCommerce product add-ons, since this provides flexibility and keeps your ticketing clean. If you prefer a simple setup, additional ticket types within the event may also work.

---

