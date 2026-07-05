# Fields

*Category from WooCommerce Checkout Manager documentation*

---

## Fields

**Source:** [https://quadlayers.com/documentation/woocommerce-checkout-manager/fields/](https://quadlayers.com/documentation/woocommerce-checkout-manager/fields/)

WooCommerce Checkout Manager allows you to include custom fields to the checkout page in the Billing, Shipping, and Additional fields sections.

## Add a new a field to the checkout page

1. In your WordPress admin, go to WooCommerce > Checkout > Billing.
2. Press the *Add New Field* button.
3. Make sure you complete the field label and placeholder.
4. Select the field type.
5. Click *Save Changes*.

You can select between any of the avialable field types. Once you select the field type, the modal panel will be reloaded to display the field type settings.

## Add new field options

To select radio multiselect and multicheckbox fields, you have to include the field options.

1. First, select the field type (select, radio, multiselect, multicheckbox).
2. Then, go to the *Options* tab.
3. Press *Add new option*.

## Remove fields from checkout page

You can remove a field from the checkout and My account page by clicking the disable toggle button.

## Remove field from my account page

If you want to display a field only the on checkout, you can remove it from the My account page.

1. Go to the *Display* tab.
2. Click *Hide on account* checkbox.

## Remove fields for specific products

You can also hide or display the field for specific products or categories.

1. Go to the *Display* tab.
2. Click on the show or hide for products and search by product name.

## Reorder fields position

You can also change the default order of the core and custom checkout fields.

1. Click on the left side of the field you want to move.
2. With the mouse button pressed, drag and drop the field to the desired position.
3. Click *Save changes* button at the bottom of the page.

## Change additional fields position

1. In your WP dashboard, go to *WooCommerce > Checkout > Additional tab*.
2. Then go to *Select* at the right top corner.
3. Select the position.
4. Press *Save changes*.

## Create a select field with empty default

1. In your WordPress dashboard, go to *WooCommerce > Checkout > Billing/Shipping/Advanced*.
2. Press the *Add New Field* button.
3. Make sure you complete the field label and placeholder.
4. Select the Select field type.
5. Go to *Options*.
6. Create an option with None name and select it as default.

## Fields filter

WooCommerce Checkout Manager allows you to filter the fields displayed in the checkout based on the selected products, checkout totals or user roles.

1. In your WordPress admin, go to WooCommerce > Checkout > Billing/Shipping or Additional.
2. Select the fields.
3. Go to the Filter tab.
4. Select the filter options.

## Datepicker

**WooCommerce Checkout Manager date is based on jQuery UI Datepicker. This is a highly configurable plugin that adds a date picker functionality to the pages. You can customize the date format and language, restrict the selectable date ranges, and add buttons and other navigation options easily.**

By default, the date picker calendar opens in a small overlay when the associated text field gains focus.

Format date as a string value with a specified format.

The format can be combinations of the following:

- d – day of the month (no leading zero)
- dd – day of the month (two-digit)
- o – day of the year (no leading zeros)
- oo – day of the year (three-digit)
- D – day name short
- DD – day name long
- m – month of the year (no leading zero)
- mm – month of the year (two-digit)
- M – month name short
- MM – month name long
- y – year (two-digit)
- yy – year (four-digit)
- @ – Unix timestamp (ms since 01/01/1970)
- ! – Windows ticks (100ns since 01/01/0001)
- ‘…’ – literal text
- ” – single quote
- anything else – literal text

There are also several predefined standard date formats available:

- ATOM – ‘yy-mm-dd’
- COOKIE – ‘D, dd M yy’
- ISO_8601 – ‘yy-mm-dd’
- RFC_822 – ‘D, d M y’
- RFC_850 – ‘DD, dd-M-y’
- RFC_1036 – ‘D, d M y’
- RFC_1123 – ‘D, d M yy’
- RFC_2822 – ‘D, d M yy’
- RSS – ‘D, d M y’
- TICKS – ‘!’
- TIMESTAMP – ‘@’
- W3C – ‘yy-mm-dd’

---

