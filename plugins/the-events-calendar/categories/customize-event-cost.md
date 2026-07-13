# Customize Event Cost

*Category from The Events Calendar documentation*

---

## Customizing the Event Cost Display

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-event-cost/](https://docs.nexcess.com/software/the-events-calendar/customize-event-cost/)

The Events Calendar and Event Tickets display the cost of your events on the front end in a consistent format. You may want to adjust how that cost appears to better fit your pricing model or your site’s style. This article collects customizations for the event cost display.

## Renaming the “Free” Label

When an event’s cost is set to zero, the front end displays it as **Free**. You can rename this to any text you prefer — for example “Complimentary”, “No Charge”, or a numeric **0**.

![An event showing 'Free' as the displayed ticket cost](https://docs.nexcess.com/wp-content/uploads/2026/06/tec-free-to-zero-2.jpg)

There are two ways to do this.

#### Option 1: PHP Snippet

Add the following to your 
```
functions.php
```

 file. Change 
```
'0'
```

 to whatever you want the label to say — it is case-sensitive.

```
function tribe_tec_rename_free_label( $translation, $text, $domain ) {
    $custom_text = [ 'Free' => '0' ]; // Replace '0' with your preferred label

    if ( 0 === strpos( $domain, 'the-events-calendar' ) && array_key_exists( $translation, $custom_text ) ) {
        $translation = $custom_text[ $translation ];
    }

    return $translation;
}
add_filter( 'gettext', 'tribe_tec_rename_free_label', 20, 3 );
```

👋 **Note:** This uses the 
```
gettext
```

 filter and applies to The Events Calendar plugin’s text domain. If you are using Event Tickets or Event Tickets Plus and the label is still showing after applying this snippet, the 
```
tribe_get_cost
```

 approach in the next section may be needed instead.

#### Option 2: The Say What? Plugin

The [Say What?](https://wordpress.org/plugins/say-what/) plugin provides a user interface for WordPress string replacements without writing code, and does the same thing as the snippet above.

After installing and activating the plugin, go to **Tools → Text Changes** and add a new entry:

![The Say What? plugin interface showing a text replacement entry for 'Free'](https://docs.nexcess.com/wp-content/uploads/2026/06/tec-free-to-zero-say-what.jpg)

Click **Save** and the label will update on the front end.

## Removing “Free” from a Mixed Cost Range

If your event has both free tickets (or RSVPs) and paid tickets, the cost display defaults to a range — for example, **Free – $10**. If you would rather not show “Free” in this range at all, the following snippet removes it along with the dash separator, leaving only the paid price.

This uses the 
```
tribe_get_cost
```

 filter, which works with Event Tickets and Event Tickets Plus.

```
function tribe_not_show_free( $cost, $post_id, $with_currency_symbol ) {
    $regex = '/Free/';
    $match = preg_match( $regex, $cost );

    if ( $cost == 0 || $cost == 'Free' || $match ) {
        $cost = str_replace( 'Free', ' ', $cost );
        $cost = str_replace( ' – ', ' ', $cost );
    }

    return $cost;
}
add_filter( 'tribe_get_cost', 'tribe_not_show_free', 10, 3 );
```

## Showing Only One End of a Price Range

When multiple tickets exist for an event, the cost displays as a range (e.g. **$5 – $50**). This can be confusing in cases like early bird pricing, where the lower price is no longer available. The following snippet lets you replace the range with either the lowest price (with optional prefixed text) or the highest price only.

Add the snippet to your 
```
functions.php
```

 file or via Code Snippets. Before saving, delete the block you *do not* want — either the lowest-price block or the highest-price block.

```
function tec_remove_price_range( $cost, $post_id, $with_currency_symbol ) {
    $pieces = explode( ' – ', $cost );

    // If the ticket is free, just display it as-is.
    if ( $cost == 'Free' ) {
        return $cost;
    }

    // DELETE the block below if you want to show only the highest price instead.
    // To show the lowest price with prefix text:
    if ( ! empty( $pieces[0] ) ) {
        return 'Starting from ' . $pieces[0];
    }

    // DELETE the block above if you want to show only the lowest price.
    // To show the highest price with prefix text:
    if ( ! empty( $pieces[1] ) ) {
        return 'Up to ' . $pieces[1];
    }

    // If not a range, return the default value.
    return $cost;
}
add_filter( 'tribe_get_cost', 'tec_remove_price_range', 10, 3 );
```

Showing the lowest price with “Starting from” prefix:

![Event cost showing 'Starting from $5' instead of a full price range](https://docs.nexcess.com/wp-content/uploads/2026/06/Starting.jpg)

Showing only the highest price with “Up to” prefix (remove lines 9–12 from the snippet above):

![Event cost showing 'Up to $50' instead of a full price range](https://docs.nexcess.com/wp-content/uploads/2026/06/Up-to-Price-1.jpg)

## Separating the Event Cost and the Currency Symbol

With **The Events Calendar**, you can easily [set a cost for events](https://docs.nexcess.com/software/the-events-calendar/create-event/#Event_Cost), define the currency symbol, and decide whether the symbol appears before or after the cost. While this setup works well for common symbols like 
```
$
```

 or 
```
€
```

, issues can arise if you prefer using currency abbreviations, such as “EUR” or “USD” since the cost and abbreviation will display without a space (e.g., 
```
100EUR
```

).

Thankfully, there are easy ways to fix this formatting issue.

#### Option 1: Add a Space Manually

To insert a space between the cost and the currency abbreviation:

1. Enter the currency abbreviation with a space in the appropriate field.
For example:
- Use 
```
_EUR
```

 or 
```
EUR_
```

 (underscore added here for clarity; replace it with a space).

This method ensures that your cost will display as 
```
100 EUR
```

 instead of 
```
100EUR
```

.

![Event Cost field in the Classic Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-03-16-at-11.24.07-AM-2.jpg)Event Cost field in the Classic Editor

![Event Cost field in the Block Editor](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-03-16-at-11.22.18-AM-1.jpg)Event Cost field in the Block Editor

#### Option 2: Adjust Settings for Currency Symbols

If you want to define a default currency symbol or code, follow these steps:

1. Navigate to **Events > Settings > Display** in your WordPress dashboard.
2. Locate the **Currency Settings** section.
3. Add your desired currency symbol or abbreviation here.

You can also define whether the symbol should appear **before or after** the cost.

![Currency options under Events Settings > General.](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-03-16-at-11.20.42-AM.jpg)

#### Option 3: Use Code Snippets for Greater Control

For more advanced customization, you can use snippets to control the placement and format of the currency symbol or code. Add the appropriate snippet to a custom plugin or your child theme’s 
```
functions.php
```

 file. For more advanced customization, you can use snippets to control the placement and format of the currency symbol or code. Add the appropriate snippet to a custom plugin or your child theme’s 
```
functions.php
```

 file.

**If the currency symbol (like €) is before the cost:**

```
// Add a space before the Euro symboladd_filter( 'tribe_get_cost', 'add_space_before_euro');functionadd_space_before_euro( $cost) {    if( is_admin() ) {        return$cost;    }    $cost= str_replace( '€', ' €', $cost);    $cost= str_replace( '&euro;', ' &euro;', $cost);    $cost= str_replace( '&#8364;', ' &#8364;', $cost);    return$cost;}
```

**If the currency symbol is after the cost:**

```
add_filter( 'tribe_get_cost', 'add_space_before_dollar');functionadd_space_before_dollar( $cost) {    if( is_admin() ) {        return$cost;    }    $cost= str_replace( '$', ' $', $cost);    $cost= str_replace( '&#36;', ' &#36;', $cost);    return$cost;}
```

By using one of these methods, you can ensure that your event cost formatting looks clean and professional, whether you’re using symbols or abbreviations. Choose the approach that works best for your setup and design preferences.

## Disclaimer

As with all of our snippets, please note that we share these in the hope they will be useful **but without any guarantees or commitments**. If you wish to use them, it is your responsibility to test them and adapt them to your needs (or find someone who can do so on your behalf). We are unable to provide further support in relation to these snippets.

---

