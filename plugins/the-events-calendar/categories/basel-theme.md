# Basel Theme

*Category from The Events Calendar documentation*

---

## Using the Basel Theme with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/basel-theme/](https://docs.nexcess.com/software/the-events-calendar/basel-theme/)

One of the most attractive features of [the popular Basel Theme on Themeforest](https://themeforest.net/item/basel-responsive-ecommerce-theme/14906749) is its snazzy AJAX cart for WooCommerce.

There is a bit of a conflict with how Event Tickets and the Basel Theme handle HTML markup for processing cart information though, so out of the box, the Basel Theme will often not allow you to add tickets from Event Tickets or Event Tickets Plus to your cart.

But fixing this is relatively easy, and **you can use Event Tickets and Event Tickets Plus with the Basel theme without issue!**

### Step #1: Create a Template Override File in the Theme

1. Inside your Basel theme files, create a folder called tribe-events
2. Inside this tribe-events folder, create a folder called wootickets
3. Inside this tribe-events/wootickets folder, create a file called tickets.php

You should now have an empty file at this location:
wp-content/themes/basel/tribe-events/wootickets/tickets.php

### Step #2: Populate the Theme Override File

We made a template override file with code that you should now copy into the tickets.php file you created above.
1. Go to [our Basel theme compat GitHub repo](https://github.com/theeventscalendar/event-tickets-basel-theme-compat)
2. Copy the **full, un-edited** code from that repo’s tickets.php file
3. Paste the **full, un-edited** code into *your* tickets.php file

And that’s all! You should now be able to add tickets from Event Tickets and Event Tickets Plus to your Basel theme-powered cart without issue.

---

