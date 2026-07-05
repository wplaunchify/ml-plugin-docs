# Paypal Pdt

*Category from Autocomplete WooCommerce Orders documentation*

---

## Why Autocomplete Orders?

**Source:** [https://quadlayers.com/documentation/woocommerce-autocomplete-orders/paypal-pdt/](https://quadlayers.com/documentation/woocommerce-autocomplete-orders/paypal-pdt/)

## Why is it important to use the Autocomplete WooCommerce Orders plugin?

Autocomplete Orders is an excellent tool that allows you to use the PayPal Payment Data Transfer (PDT) in your WooCommerce store. Using PayPal PDT has the following benefits:

1. PDT allows the admin to display the transaction details in a secure way to the customer. The PDT sends the transaction details to the merchants’ websites. These details are then read by a script that displays the information in a user-friendly way on the website.
2. PDT helps the admin automate processes supplying the customer with their digital products. By using PDT, the customer’s digital download link can be added to the thank you page or similar, after a successful transaction. (e.g.: The PDT feature can be used in the eStore Plugin to automatically provide your customers with the code link immediately after the transaction).
3. PDT makes Inventory management easier. The script of a plugin can be updated so that the inventory is updated after a successful transaction. The PDT notification communicates with the script to ensure that correct stock levels are displayed if an item has been purchased.

## Differences between PayPal IPN and PAyPal PDT

PayPal IPN and PayPal PDT could be thought of as similar functions of PayPal. Is true that they are similar in the way they ‘notify’ the website in order to complete the next action. But, they have different events or scenarios in which each of them should be used. The following section will be compared in a practical way.

## PayPal PDT vs PayPal IPN

PDT sends a prompt notification message after the payment is complete. This means that if you need to run a site where an immediate payment notification is to be shown, PDT is the best choice for you.

Oppositely, while IPN does send a notification to the merchant’s website, there is a material lag from the time the payment is completed and the time the notification is sent. IPN is not fast enough for functions such as immediate digital download after payment.

It might seem that PDT is definitely the better choice, but it has some disadvantages. While it is faster, the notification sent out by PDT only happens once and once only! This means that if for some reason your site goes down for a couple of seconds, the notification will be lost. IPN on the other hand continuously sends messages until the website acknowledges that the message has been received. This is why PayPal often recommends IPN over PDT when it is crucial that the message is received.

Moreover, IPN can send multiple messages such as chargeback notification and order confirmations while PDT is only useful for order confirmations. For the most part, as a user of an eCommerce solution, you will not have to fully understand IPN and PDT, having a basic understanding can help if you ever need to troubleshoot.

| PDT vs IPN | Payment Data Transfer (PDT) | Instant Payment Notification (IPN) |
| --- | --- | --- |
| Speed of Notification | Almost Instant | Tends to Lag (slower than PDT) |
| Number of Notification Attempts | Notification is Sent Once (1) | Notification is Sent Until the Site Acknowledges that it has Been Received |
| Notifications Sent | Order Confirmations | Charge-back NotificationsOrder Confirmations |

---

