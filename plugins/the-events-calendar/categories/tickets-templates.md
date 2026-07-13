# Tickets Templates

*Category from The Events Calendar documentation*

---

## Event Tickets Template Files

**Source:** [https://docs.nexcess.com/software/the-events-calendar/tickets-templates/](https://docs.nexcess.com/software/the-events-calendar/tickets-templates/)

Event Tickets and its add-ons come with a number of template files that determine how the plugin looks and behaves. We call these templates **views** because they create the pages and elements you see on your site.

Each plugin and add-on has its own unique set of templates, and each template can be copied and [customized in your theme folder](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/).

This article brings together the complete template inventories for **Tickets Commerce** (checkout, gateways, orders), **Tickets Emails** (the emails sent to customers and admins), and **Wallet Plus** (Apple Wallet passes and PDF tickets). Integration templates for Event Tickets Plus, The Events Calendar, and Virtual Events are included under each section where relevant.

## Tickets Commerce

### Tickets Commerce Checkout

Parent folder located at:

```
event-tickets/src/views/v2/commerce/checkout
```

| Template | What it Does |
| --- | --- |
| /cart/empty/description.php | The text that appears when the cart is empty. |
| /cart/empty/title.php | The title that appears when the cart is empty. |
| /cart/footer/quantity.php | Shows the checkout cart footer quantity. |
| /cart/footer/total.php | Displays the checkout cart total in the footer. |
| /cart/item/details/description.php | Contains the checkout cart item description. |
| /cart/item/details/title.php | Has the checkout cart item title. |
| /cart/item/details/toggle.php | Toggles the ticket details on or off. |
| /cart/item/details.php | Checkout cart item details. |
| /cart/item/price.php | Displays the checkout cart item price. |
| /cart/item/quantity.php | Shows the checkout cart item quantity. |
| /cart/item/sub-total.php | Checkout cart item sub-total. |
| /cart/empty.php | The wrapper for the title and description of an empty checkout cart. |
| /cart/footer.php | The wrapper for the checkout cart footer. |
| /cart/header.php | Contains the checkout cart header. |
| /cart/item.php | Checkout cart item wrapper. |
| /cart/items.php | Wrapper for multiple checkout items. |
| /footer/gateway-error.php | Shows a gateway error at checkout. |
| /header/links/back.php | Checkout page header backlinks. |
| /header/links/modify-attendees.php | Checkout page links to modify attendees. |
| /header/links.php | Wrapper for checkout page header links. |
| /header/title.php | Displays the checkout page header title. |
| /must-login/login.php | Shows the button requiring users to log in to purchase. |
| /must-login/registration.php | Provides the link to register a new account. |
| /cart.php | Wrapper for the checkout cart. |
| /fields.php | Contains the wrapper for checkout page fields. |
| /footer.php | Checkout page footer wrapper. |
| /header.php | Checkout page header wrapper. |
| /must-login.php | Checkout page “must log in” wrapper. |
| /gateways.php | The container where the list of gateways is displayed. |
| /purchaser-info.php | Purchaser information form for anonymous purchases. |
| /purchaser-info/email.php | Purchaser information email field for anonymous purchases. |
| /purchaser-info/name.php | Purchaser information name field for anonymous purchases. |

### Tickets Commerce Gateway

Parent folder located at:

```
event-tickets/src/views/v2/commerce/gateway
```

| Template | What it Does |
| --- | --- |
| /paypal/buttons.php | Displays PayPal checkout buttons. |
| /paypal/checkout-script.php | Contains the PayPal checkout scripts. |
| /paypal/container.php | The PayPal container for checkout. |
| /stripe/card-elements.php | Displays the Stripe card element. |
| /stripe/container.php | Shows the Stripe container for checkout. |
| /stripe/payment-element.php | Shows the Stripe payment element. |

### Tickets Commerce Orders

Parent folder located at:

```
event-tickets/src/views/v2/commerce/order
```

| Template | What it Does |
| --- | --- |
| /details/date.php | Contains the date for the success page order details. |
| /details/email.php | Email on the success page order details. |
| /details/order-number.php | Order number on the success page order details. |
| /details/payment-method.php | Contains payment method on success page order details. |
| /details/total.php | Success page order details total. |
| /footer/links/back-home.php | Success order page footer links back home. |
| /footer/links/browse-events.php | Success order page footer links back to browse events. |
| /footer/links.php | Wrapper for footer links. |
| /description.php | Success order page description. |
| /details.php | Wrapper for success order page details. |
| /footer.php | Wrapper for success order page footer. |
| /header.php | Success order page header. |

### Tickets Commerce Pages

Parent folder located at:

```
event-tickets/src/views/v2/commerce/
```

| Template | What it Does |
| --- | --- |
| /checkout.php | Wrapper for checkout page. |
| /success.php | Wrapper for success order page. |

### Checkout with Attendees

Parent folder located at:

```
event-tickets-plus/src/views/v2/commerce/checkout
```

| Template | What it Does |
| --- | --- |
| /cart/item/details/extra.php | Lists the Attendee Registration Fields on the checkout page. |
| /header/links/modify-attendees.php | Includes the link to “Modify Attendees” on the checkout page if there are tickets with attendee registration fields. |

## Tickets Emails

Parent folder located at:

```
event-tickets/src/views/emails
```

| Template | What it Does |
| --- | --- |
| /admin-new-order.php | The completed order email parent template. |
| /new-order/body.php | The completed order email body. |
| /customer-purchase-receipt.php | The customer purchase receipt email parent template. |
| /purchase-receipt/body.php | Contains the purchase receipt email body. |
| /purchase-receipt/intro.php | Contains the purchase receipt email intro. |
| /rsvp-not-going.php | Contains the RSVP “Not going” email template. |
| /rsvp-not-going/body.php | Contains the RSVP “Not going” email template body. |
| /rsvp.php | The RSVP email template. |
| /rsvp/body.php | The RSVP email template body. |
| /ticket.php | The Ticket email template. |
| /ticket/body.php | The Ticket email template body. |
| /template-parts/body.php | Contains the generic body as a template part. |
| /template-parts/body/add-content.php | Contains the generic template for the email’s “Additional content”. |
| /template-parts/body/footer.php | Contains the footer template part, general to all emails. |
| /template-parts/body/footer/content.php | Contains the footer content general to all emails. |
| /template-parts/body/footer/credit.php | Contains the Event Tickets credit in the footer. |
| /template-parts/body/header.php | Contains the header template part, general to all emails. |
| /template-parts/body/header/image.php | Contains the email’s header image, which comes from the settings. |
| /template-parts/body/order/attendees-table.php | Contains the attendees’ table for orders, used in the purchase receipt and completed orders emails. |
| /template-parts/body/order/attendees-table/attendee-info.php | Contains the attendee information within the attendees’ table. |
| /template-parts/body/order/attendees-table/attendee-name.php | Contains the attendee name for the table. |
| /template-parts/body/order/attendees-table/attendee-email.php | Contains the attendee email for the table. |
| /template-parts/body/order/attendee-info.php | Contains the attendee information for a particular order. |
| /template-parts/body/order/attendees-table/header-row.php | Contains the header row for the attendees’ table in orders. |
| /template-parts/body/order/attendees-table/ticket-id.php | Contains the ticket ID for the attendee’s table in orders. |
| /template-parts/body/order/attendees-table/ticket-title.php | Contains the ticket title for the attendee’s table in orders. |
| /template-parts/body/order/customer-purchaser-details.php | Contains the purchaser details for the particular order. |
| /template-parts/body/order/error-message.php | Contains the error message for the particular order, if existent. |
| /template-parts/body/order/post-title.php | Contains the post/page or event title for the particular order. |
| /template-parts/body/order/order-total.php | Contains the order total. |
| /template-parts/body/order/payment-info.php | Contains the payment information for the particular order. |
| /template-parts/body/order/purchaser-details/date.php | Contains the date of the order. |
| /template-parts/body/order/purchaser-details/email.php | Contains the purchaser’s email for the particular order. |
| /template-parts/body/order/purchaser-details/name.php | Contains the purchaser’s name for the particular order. |
| /template-parts/body/order/purchaser-details/order-number.php | Contains the order number. |
| /template-parts/body/order/ticket-totals.php | Contains the ticket totals for the particular order. |
| /template-parts/body/order/ticket-totals/header-row.php | Contains the table header row for the ticket totals. |
| /template-parts/body/order/ticket-totals/ticket-price.php | Contains the ticket price for the ticket totals table. |
| /template-parts/body/order/ticket-totals/ticket-quantity.php | Contains the ticket quantity for the ticket totals table. |
| /template-parts/body/order/ticket-totals/ticket-row.php | Contains the row for the ticket totals table. |
| /template-parts/body/order/ticket-totals/ticket-title.php | Contains the ticket title for the ticket totals table. |
| /template-parts/body/ticket/holder-name.php | Contains the ticket holder name, used in Tickets and RSVP emails. |
| /template-parts/body/post-title.php | Contains the post/page or event title used in Ticket and RSVP emails. |
| /template-parts/body/post-description.php | Contains the post/page or event description used in Ticket and RSVP emails. |
| /template-parts/body/ticket/number-from-total.php | Contains the number of the ticket from the totals, used in Tickets and RSVP emails (e.g., “1” in “1 of 3”). |
| /template-parts/body/ticket/security-code.php | Contains the ticket security code, used in Tickets and RSVP emails. |
| /template-parts/body/ticket/ticket-name.php | Contains the ticket name the attendee has bought, used in Tickets and RSVP emails. |
| /template-parts/body/tickets-total.php | Contains the total number of tickets associated with the email. Used in Tickets and RSVP emails. |
| /template-parts/body/tickets.php | Contains the loop where the tickets/RSVPs are iterated. |
| /template-parts/body/title.php | Contains the general title for emails. |
| /template-parts/footer.php | Contains the markup of the email’s footer. |
| /template-parts/footer-preview.php | Contains the markup of the email’s footer, when in preview mode. |
| /template-parts/footer/footer.php | Contains the markup of the email’s footer. |
| /template-parts/header.php | Contains the markup of the email’s header. |
| /template-parts/header/head/json-ld.php | Contains the JSON-LD information associated with the emails. |
| /template-parts/header/head/meta.php | Contains the meta attributes for the emails. |
| /template-parts/header/head/scripts.php | Contains the scripts for the emails. |
| /template-parts/header/head/styles.php | Contains the CSS styles general to all email templates. |
| /template-parts/header/head/title.php | Contains the HTML title attribute for the email templates. |
| /template-parts/header/header-preview.php | Contains the markup of the email’s header, when in preview mode. |
| /template-parts/header/header.php | Contains the markup of the email’s header. |

### Emails with Attendee Registration

Parent folder located at:

```
event-tickets-plus/src/views/emails
```

| Template | What it Does |
| --- | --- |
| /template-parts/body/ticket/ar-fields.php | The attendee registration fields for the Ticket/RSVP. |
| /template-parts/body/ticket/ar-fields/data.php | The individual attendee registration field for the Ticket/RSVP. |
| /template-parts/body/ticket/ar-fields/key.php | The individual key of an attendee registration field for the Ticket/RSVP. |
| /template-parts/body/ticket/ar-fields/value.php | The individual value of an attendee registration field for the Ticket/RSVP. |
| /template-parts/body/ticket/qr-image.php | The QR image for the Ticket/RSVP. |
| /template-parts/header/head/ar-styles.php | The CSS styles for the attendee registration fields section. |

### Event Info in Emails

Parent folder located at:

```
the-events-calendar/src/views/integrations/event-tickets/emails/
```

| Template | What it Does |
| --- | --- |
| /template-parts/body/event/date.php | Contains the event date for Tickets and RSVP emails. |
| /template-parts/body/event/image.php | Contains the event featured image for Tickets and RSVP emails. |
| /template-parts/body/event/links.php | Contains the event links for Tickets and RSVP emails. |
| /template-parts/body/event/links/gcal.php | Contains the event’s Google Calendar link for Tickets and RSVP emails. |
| /template-parts/body/event/links/ical.php | Contains the event’s iCal link for Tickets and RSVP emails. |
| /template-parts/body/event/venue.php | Contains the event venue, if available, for Tickets and RSVP emails. |
| /template-parts/body/event/venue/address.php | Contains the event venue address for Tickets and RSVP emails. |
| /template-parts/body/event/venue/phone.php | Contains the event venue phone for Tickets and RSVP emails. |
| /template-parts/body/event/venue/website.php | Contains the event venue website for Tickets and RSVP emails. |
| /template-parts/header/head/tec-styles.php | Contains the CSS styles for The Events Calendar’s integration with Event Tickets emails. |

### Virtual Events in Ticket Emails

Parent folder located at:

```
events-calendar-pro/src/views/integrations/event-tickets/emails/
```

| Template | What it Does |
| --- | --- |
| /template-parts/body/virtual-event/link.php | Contains the link to the virtual event. |
| /template-parts/header/head/ve-styles.php | Contains the CSS styles for Virtual Events’s integration with Event Tickets emails. |

## Digital Wallets and PDF Tickets

Parent folder located at:

```
event-tickets-wallet-plus/src/views
```

| Template | What it Does |
| --- | --- |
| /apple-wallet/emails/template-parts/body/apple-pass.php | The email “Add to Apple Wallet” button template. |
| /apple-wallet/emails/template-parts/header/head/styles.php | The styles related to Wallet Plus for the email template. |
| /apple-wallet/rsvp/apple-wallet-button.php | The “Add to Apple Wallet” button for the RSVP confirmation. |
| /attendees-list/passes.php | The “Add to Apple Wallet” and “PDF tickets” buttons for the attendees list shown on the order confirmation page. |
| /components/apple-wallet-button.php | The generic “Add to Apple Wallet” button, invoked from other templates. |
| /components/pdf-button.php | The generic “PDF ticket” button, invoked from other templates. |
| /my-tickets/passes.php | The “Add to Apple Wallet” and “PDF tickets” buttons for the “My tickets” page. |
| /pdf/rsvp/pdf-button.php | The “PDF ticket” button for the RSVP confirmation. |
| /pdf/pass.php | The PDF template. |
| /pdf/pass/body.php | The body of the PDF template. |
| /pdf/pass/body/header.php | The header of the PDF template. |
| /pdf/pass/body/styles.php | The inline CSS styles of the PDF template. |
| /pdf/pass/body/post-title.php | The post/event title in the PDF template. |
| /pdf/pass/body/sidebar.php | The sidebar in the PDF template. |
| /pdf/pass/body/ticket-info.php | The ticket information for the PDF template. |
| /pdf/pass/body/ticket-info/image.php | The post/event image for the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details.php | The attendee details for the ticket in the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/name.php | The attendee name for the ticket in the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/qr.php | The QR image for the ticket in the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/security-code.php | The security code for the ticket in the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/ticket-title.php | The title for the ticket in the PDF template. |
| /pdf/pass/body/additional-information.php | The PDF additional information section. |
| /pdf/pass/body/additional-information/heading.php | The PDF additional information section title. |
| /pdf/pass/body/additional-information/content.php | The PDF additional information section content. |
| /pdf/pass/body/footer.php | The PDF template footer. |
| /pdf/pass/body/footer/credit.php | The credit of the PDF template footer. |

### Digital Wallets & PDF Tickets with Attendee Registration

Parent folder located at:

```
event-tickets-plus/src/views/integrations/event-tickets-wallet-plus
```

| Template | What it Does |
| --- | --- |
| /pdf/pass/body/ticket-info/attendee-details.php | The attendee registration fields for the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/field.php | The individual attendee registration field for the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/key.php | The individual key of an attendee registration field for the PDF template. |
| /pdf/pass/body/ticket-info/attendee-details/value.php | The individual value of an attendee registration field for the PDF template. |
| /pdf/pass/tec-tickets-plus-styles.php | The CSS styles for the Event Tickets Plus integration with the PDF template. |

### Digital Wallets & PDF Tickets with Events

Parent folder located at:

```
the-events-calendar/src/views/integrations/event-tickets-wallet-plus
```

| Template | What it Does |
| --- | --- |
| /pdf/pass/body/event/date.php | Contains the event date for the PDF template. |
| /pdf/pass/body/venue.php | Contains the event venue, if available, for the PDF template. |
| /pdf/pass/body/venue/address.php | Contains the event venue address for the PDF template. |
| /pdf/pass/body/venue/phone.php | Contains the event venue phone for the PDF template. |
| /pdf/pass/body/venue/title.php | Contains the event venue title for the PDF template. |
| /pdf/pass/body/venue/website.php | Contains the event venue website for the PDF template. |
| /pdf/pass/tec-events-styles.php | The CSS styles for The Events Calendar integration with the PDF template. |

### Digital Wallets & PDF Tickets with Virtual Events

Parent folder located at:

```
events-virtual/src/views/integrations/event-tickets-wallet-plus/
```

| Template | What it Does |
| --- | --- |
| /pdf/pass/body/virtual-event/link.php | Contains the link to the virtual event for the PDF template. |
| /pdf/pass/body/virtual-event/link/header.php | Contains the header of the link to the virtual event for the PDF template. |
| /pdf/pass/body/virtual-event/link/link.php | Contains the actual link to the virtual event for the PDF template. |
| /pdf/pass/tec-events-virtual-styles.php | Contains the CSS styles for Virtual Events’s integration with the PDF template. |

---

