# Customize Attendee Registration

*Category from The Events Calendar documentation*

---

## Customizing Attendee Registration

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-attendee-registration/](https://docs.nexcess.com/software/the-events-calendar/customize-attendee-registration/)

Our Attendee Registration page and modal options are designed to blend nicely with as many themes as possible. If you’re looking to make some tweaks to make it look even better on your site, we’ve got your back.

## Attendee Registration Settings

Your first stop should be the**Tickets → Settings → Attendee Registration** admin screen. Under the Attendee Registration template setting, you’ll see a couple of default options:

![Attendee Registration settings and options](https://docs.nexcess.com/wp-content/uploads/2026/06/ar-modal-toggle.png)

Enabling the registration modal will create a popup effect to complete the attendee registration before reaching the cart checkout page.

![The attendee registration modal appears as a pop-up box while dimming the background of the website.](https://docs.nexcess.com/wp-content/uploads/2026/06/attendee-registration-modal-demo.png)

The Attendee Registration page can be so left as our default page.  Alternatively, using the shortcode lets you display the Attendee Registration on any post or page you’d like, and makes it easier to add in widgets or other layout elements.

Depending on the theme you are using, you may see other page templates available. Take ‘em for a spin and see how they look. If one stands out as the winner, save your changes and you’re set!

## Template Overrides and Custom CSS

If the template options mentioned above still need a few tweaks, you’ll want to move on to template overrides and/or custom CSS. The same customizations should work whether you use the modal or the attendee registration page. For those comfortable writing a little code, our [Template Guide](https://docs.nexcess.com/software/the-events-calendar/customization/#customizing-templates) is your new best friend.

Sometimes you’ll run into situations where you need to change or add CSS rules to your theme’s stylesheet—for example, there are thousands of WordPress configurations out there so you’ll want to make sure the CSS rules in your theme don’t conflict with the CSS rules in Event Tickets.

The [Customizing Styles](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) guide (or the [earlier views version](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/)) walks you through the process. If you run into any trouble integrating your theme with Event Tickets Plus, drop by our [premium help desk](https://support.theeventscalendar.com/submit_ticket) so we can try to help you out.

⚠️ **But please note:**

- Event Tickets and its add-ons will not integrate smoothly out of the box with every single theme out there. We will do our best to point you in the right direction, **but we cannot provide extensive theme support**.
- If you are wondering about theme compatibility, we recommend that you test your theme with our free core plugin before purchasing the Plus version.
- The [Attendee Registration Page](https://docs.nexcess.com/software/the-events-calendar/event-tickets/) (using a shortcode on any page) overrides both the URL and template settings. This shortcode uses the page template set for the “shortcoded” page. Setting a page without the shortcode will result in falling back to the default functionality (the url and template selectors).

#### Template Overrides

In order to create a template override of the attendee registration page, create a copy of 
```
event-tickets-plus/src/views/v2/attendee-registration/content.php
```

 and place it in 
```
[your-theme]/tribe/tickets-plus/v2/attendee-registration/content.php
```

.

For the modal, simply copy 
```
event-tickets-plus/src/views/v2/modal/attendee-registration.php
```

 into 
```
[your-theme]/tribe/tickets-plus/v2/modal/attendee-registration.php
```

## Show RSVP Fields Directly on Event Page

In this example, we’ll cover the specific example of showing users the registrations fields directly, rather than seeing the RSVP button first.

#### Showing the registration fields

Add the following snippet to your site. It opens the RSVP form automatically on the event page, so visitors see the registration fields without clicking “Going” first. It works with both RSVP systems and with Event Tickets Plus attendee fields.

```
/**
 * Opens the RSVP form automatically on single event pages, so visitors see the
 * registration fields without clicking "Going" first.
 *
 * Works with both RSVP systems and with Event Tickets Plus attendee fields.
 */
add_action( 'wp_footer', 'tec_snippet_open_rsvp_form' );
function tec_snippet_open_rsvp_form() {
        if ( ! is_singular( 'tribe_events' ) ) {
                return;
        }
        ?>
        <script>
                document.addEventListener( 'DOMContentLoaded', function () {
                        var attempts = 0;
                        var timer = setInterval( function () {
                                var button = document.querySelector( '.tribe-tickets__rsvp-actions-button-going' );
                                attempts++;

                                if ( button && ! button.disabled && window.tribe && tribe.tickets && tribe.tickets.rsvp ) {
                                        clearInterval( timer );
                                        button.click();
                                } else if ( attempts > 25 ) {
                                        clearInterval( timer );
                                }
                        }, 200 );
                } );
        </script>
        <?php
}
```

#### Hiding the number selector

Add the following snippet to your site. It hides the “Number of Guests” selector, so every RSVP is for one guest. It works with both RSVP systems.

```
/**
 * Hides the guest count selector on RSVP forms, so every RSVP is for one guest.
 *
 * Works with both RSVP systems, with and without Event Tickets Plus attendee fields.
 */
add_action( 'wp_head', 'tec_snippet_hide_rsvp_guest_count' );
function tec_snippet_hide_rsvp_guest_count() {
        if ( ! is_singular( 'tribe_events' ) ) {
                return;
        }
        ?>
        <style>
                .tribe-tickets__rsvp-form-wrapper label[for^="quantity_"],
                .tribe-tickets__rsvp-form-field-quantity,
                .tribe-tickets__rsvp-ar-quantity {
                        display: none !important;
                }
        </style>
        <?php
}
```

Here’s the final result:

![Final result of template override with Event Tickets](https://docs.nexcess.com/wp-content/uploads/2026/06/f55065a9-5cd6-4356-ac35-b3888481b0d9.jpg)

Please also note that this might expose your registration form to bots, which could result in some fake registration

## Divide Name into Separate First and Last Name Fields

**Note:**This workaround is valid for Tickets only and not for RSVPs. [Individual Attendee Collection](https://theeventscalendar.com/knowledgebase/enabling-attendee-information-for-tickets/) (IAC) should also be set to *Allowed*or *Required*.

By default, the attendee registration module has a single field to collect the full name, which isn’t always the desired behavior, as separate fields for first and last names are often needed. Here’s how this can be achieved:

1. Create a new **Text** type attendee information field labeled **Last Name**,

![](https://docs.nexcess.com/wp-content/uploads/2026/06/RT3V6Jfu9l-1024x799-1.jpg)

2. Add the following snippet to your site to rename the **Name** field to **First Name**,

```
add_filter( 'tribe_tickets_plus_attendee_registration_iac_fields', function ( $fields ) { 
$fields['name']['label'] = 'First Name'; 
return $fields; 
} );
```

This is what we have so far,

![](https://docs.nexcess.com/wp-content/uploads/2026/06/lJkDri8Ehp.jpg)

It’s not quite right as the newly added Last Name field needs to be placed right after First Name.

3. Add the following snippet to your site to reorder the fields,

```
add_filter( 'event_tickets_plus_meta_fields_by_ticket', function ( $fields ) {
	$emailIndex = array_search( 'tribe-tickets-plus-iac-email', array_column( $fields, 'slug' ) );
	$nameIndex  = array_search( 'tribe-tickets-plus-iac-name', array_column( $fields, 'slug' ) );
	if ( $emailIndex !== false && $nameIndex !== false ) {
		$lastNameIndex = array_search( 'last-name', array_column( $fields, 'slug' ) );
		if ( $lastNameIndex !== false ) {
			$lastNameField = $fields[ $lastNameIndex ];
			unset( $fields[ $lastNameIndex ] );
			array_splice( $fields, $emailIndex, 0, array( $lastNameField ) );
		}
	}
	return $fields;
}, 20 );
```

The fields should now be in the correct order,

![](https://docs.nexcess.com/wp-content/uploads/2026/06/M5cHInm1LM-1024x873-1.jpg)

4. At the backend, the Last Name isn’t automatically displayed conveniently; however, this can be solved with, you guessed it, a PHP snippet,

```
/**
 * Adds a "Last Name" column to the Attendees table, next to Attendee Information.
 *
 * Expects an Event Tickets Plus attendee field labeled "Last Name" (slug: last-name).
 */
add_filter( 'tribe_tickets_attendee_table_columns', 'tec_snippet_add_last_name_column' );
function tec_snippet_add_last_name_column( $columns ) {
        return Tribe__Main::array_insert_after_key(
                'primary_info',
                $columns,
                [ 'last-name' => 'Last Name' ]
        );
}

add_filter( 'tribe_events_tickets_attendees_table_column', 'tec_snippet_populate_last_name_column', 10, 3 );
function tec_snippet_populate_last_name_column( $value, $item, $column ) {
        if ( 'last-name' !== $column ) {
                return $value;
        }

        if ( is_array( $value ) ) {
                return isset( $value['value'] ) ? $value['value'] : '';
        }

        return $value;
}
```

Last Name should now be displayed in a dedicated column at the backend, next to the primary info column with First Name and other attendee details,

![](https://docs.nexcess.com/wp-content/uploads/2026/06/1KIU26W6A1-1024x246-1.jpg)

While it is possible to add PHP code snippets similar to those provided in this article directly to the functions.php file, using a third-party plugin like [Code Snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/) is recommended.

## Allow Duplicate Email Addresses

In [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/), the [Individual Attendee Collection (IAC)](https://theeventscalendar.com/knowledgebase/enabling-attendee-information-for-tickets/) feature requires all attendees to provide their details, including their name and email. By default, both the name and email fields must be unique for each attendee. While this ensures separate records, it may not be suitable for scenarios where parents buy tickets for themselves and their children, as children may not have individual email addresses.

In this example, we will explore how to remove the requirement for the email field to be unique in order to accommodate specific use cases better. The snippet below will modify the attendee registration process and permit identical emails across different tickets and make the email field optional.

```
add_filter( 'tribe_tickets_plus_attendee_registration_iac_fields', function ( $fields ) {
		$fields['email']['classes']['tribe-tickets__form-field--unique'] = false;
		$fields['email']['required'] = '';
		return $fields;
} );
```

By making these customizations, you can adjust the Individual Attendee Collection feature to better fit different event setups where unique details for each attendee may not be practical.

## Require Attendee Information for the Main RSVP Guest Only

**💡** **Note:** This solution only works with RSVPs. It does not work with tickets!

[Attendee Information Collection](https://docs.nexcess.com/software/the-events-calendar/attendee-registration/#Set_what_information_to_collect_during_registration) is a feature of [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/), that allows you to require information from users registering or purchasing tickets for your events. It is possible to set up a required field, so a registration cannot be done or a ticket cannot be purchased if that field is not filled with information for all of the ticket holders.

There might be scenarios, however, where the information would only be required from the main guest and would be optional for the other guests. While this cannot be done out of the box, it is possible with a template override.

There are different field types you can use to collect information, like a text field, a checkbox, or a date, among others. A template override will be needed for each field type where you want this functionality. In this example, we will walk you through the process for the text field. The approach is the same, or very similar for all other field types.

#### Create the Template Override

The templates for the attendee fields can be found in this folder:

```
wp-contentpluginsevent-tickets-plussrcviewsv2componentsmeta
```

Since we are creating an override for the text field, we need to grab the 
```
text.php
```

 file, and place a copy of it in the following folder:

```
wp-content/themes/[your-theme]/tribe/tickets-plus/v2/components/meta/text.php
```

The folder structure likely doesn’t exist in your child theme folder, so you will need to create it.

This copied 
```
text.php
```

 file is the one we will be working on.

#### Other Fields

In this example, we are using the text field, but the process would be very similar or might be even the same for the other fields. Here’s a list of the other fields and the files, which would need to receive a template override.

| Text | text.php |
| --- | --- |
| Radio | radio.php |
| Checkbox | checkbox.php |
| Dropdown | select.php |
| Email | email.php |
| Telephone | telephone.php |
| URL | url.php |
| Birth Date | birth.php |
| Date | datetime.php |

![](https://docs.nexcess.com/wp-content/uploads/2026/06/shot_220726_133243.png)

#### Add the Code

The code goes right after the 
```
$multiline = ...
```

 line near the top of the file.

The piece of code we are going to add does the following:

1. Checks that the field is being rendered for an RSVP, not a ticket. (Lines 6-7)
2. Checks which field is being rendered. (Line 9)
3. Checks if the field is being rendered for the main guest. (Line 10)
4. Sets the field as required. (Line 11)
5. Adds additional text to the description. (Line 12)
6. Hides the field for all other guests. (Lines 13-15)

```
/* * Phone number: required for the main RSVP guest, hidden for the other guests. * Tickets are left alone: the field still shows for every ticket attendee. * Rename the slug to match your field (the label in lowercase, spaces as dashes). */$ticket_id = isset( $ticket ) ? $ticket->ID : 0;$is_rsvp   = $ticket_id && ( 'tribe_rsvp_tickets' === get_post_type( $ticket_id ) || 'tc-rsvp' === get_post_meta( $ticket_id, '_type', true ) );if ( $is_rsvp && 'phone-number' === $field->slug ) {        if ( 0 === $attendee_id ) {                $required     = true;                $description .= ' Required for main attendee.';        } else {                return;        }}
```

On line 9, we are checking the slug of the field that is being rendered. The slug will be the label of the field with lowercase letters, special characters removed, and the space character changed to a minus (-) character. For example, if your field name would be “Date of Birth:”, then the slug would become “date-of-birth”.

On line 10 we are checking if the field is being rendered for the main guest. You can turn this around as well if you want to make a field required for all guests *except* the main one. Then you will need to use

```
if ( 0 !== $attendee_id ) {
```

On line 12 we are adding some extra text to the description. This can be a nice touch and makes it clear what needs to be done. This is optional though.

The rest of the template is unchanged.

And that is it!

This example was done on the text field. It is possible to do this on other fields as well, you just need to override the right file.

#### The Full File

Here is the full code of the file for reference:

```
<?php
/**
 * This template renders the Text or Textarea field.
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/tickets-plus/v2/components/meta/text.php
 *
 * @link    https://evnt.is/1amp See more documentation about our views templating system.
 *
 * @since 5.0.0
 * @since 5.1.0 Added support for div HTML attributes.
 * @since 5.1.1 Added support for placeholders.
 * @since 5.2.9 Added support for description.
 *
 * @version 5.2.9
 *
 * @var string $field_name The meta field name.
 * @var string $field_id The meta field id.
 * @var bool   $required A bool indicating if the meta field is required or not.
 * @var string|int $attendee_id The attendee ID, to build the ID/name.
 * @var array $classes Array containing the CSS classes for the field.
 * @var array $attributes Array containing the HTML attributes for the field.
 * @var string $placeholder The field placeholder text.
 * @var bool $disabled Field is disabled or not.
 * @var string $value Value for field.
 * @var Tribe__Tickets__Ticket_Object $ticket The ticket object.
 * @var Tribe__Tickets_Plus__Meta__Field__Text $field.
 * @var string $description A user-defined description for meta field.
 *
 * @see Tribe__Tickets_Plus__Meta__Field__Text
 */
$multiline = Tribe__Utils__Array::get( $field, [ 'extra', 'multiline' ], null );
/*
 * Phone number: required for the main RSVP guest, hidden for the other guests.
 * Tickets are left alone: the field still shows for every ticket attendee.
 * Rename the slug to match your field (the label in lowercase, spaces as dashes).
 */
$ticket_id = isset( $ticket ) ? $ticket->ID : 0;
$is_rsvp   = $ticket_id && ( 'tribe_rsvp_tickets' === get_post_type( $ticket_id ) || 'tc-rsvp' === get_post_meta( $ticket_id, '_type', true ) );

if ( $is_rsvp && 'phone-number' === $field->slug ) {
	if ( 0 === $attendee_id ) {
		$required     = true;
		$description .= ' Required for main attendee.';
	} else {
		return;
	}
}
?>
<div
	<?php tribe_classes( $classes ); ?>
	<?php tribe_attributes( $attributes ); ?>
>
	<label
		class="tribe-tickets__form-field-label"
		for="<?php echo esc_attr( $field_id ); ?>"
	><?php echo wp_kses_post( $field->label ); ?><?php tribe_required_label( $required ); ?></label>
	<div class="tribe-tickets__form-field-input-wrapper">
		<?php if ( $multiline ) : ?>
			<textarea
				id="<?php echo esc_attr( $field_id ); ?>"
				class="tribe-common-form-control-text__input tribe-tickets__form-field-input"
				name="<?php echo esc_attr( $field_name ); ?>"
				placeholder="<?php echo esc_attr( $placeholder ); ?>"
				<?php tribe_required( $required ); ?>
				<?php tribe_disabled( $disabled ); ?>
			><?php echo esc_textarea( $value ); ?></textarea>
		<?php else : ?>
			<input
				type="text"
				id="<?php echo esc_attr( $field_id ); ?>"
				class="tribe-common-form-control-text__input tribe-tickets__form-field-input"
				name="<?php echo esc_attr( $field_name ); ?>"
				value="<?php echo esc_attr( $value ); ?>"
				placeholder="<?php echo esc_attr( $placeholder ); ?>"
				<?php tribe_required( $required ); ?>
				<?php tribe_disabled( $disabled ); ?>
			/>
		<?php endif; ?>
		<?php if ( ! empty( $description ) ) : ?>
			<div class="tribe-common-b3 tribe-tickets__form-field-description">
				<?php echo wp_kses_post( $description ); ?>
			</div>
		<?php endif; ?>
	</div>
</div>
```

## Change the Birth Date Format to D/M/Y

If you need to change the birth date format in Event Tickets Plus to display as **day/month/year (DD/MM/YYYY)** instead of the default format **(month/day/year)**, you can do so by creating a template override. This process requires some basic PHP/HTML knowledge and the use of a **Child Theme**.

If you’re comfortable with these, follow the steps below:

To modify the birth date format, override the default template file. Navigate to the following directory in your WordPress installation:

```
/wp-content/plugins/event-tickets-plus/src/views/v2/components/meta/
```

Locate the file **birth.php**, then copy and paste it into your theme’s directory, maintaining the following structure:

```
[your-theme]/tribe/tickets-plus/v2/components/meta/birth.php
```

If the **tribe/tickets-plus/v2/components/meta/** folders do not exist in your theme, create them manually.

Open the copied **birth.php** file in a text editor and locate **line 48**, where the birth date format is defined. Swap the placement of the month and day as shown below to ensure the format is **DD/MM/YYYY**. Move the entire Month label and dropdown so it comes after the Day label and dropdown.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/swap_day_month.jpg)

After making the necessary changes, save the modified **birth.php** file. You should have the following results below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/result-1024x202-1.jpg)

#### Important Notes

This customization applies only if you are using the **Birth Date field** in your Attendee Information settings as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/BirthDate-Field-1024x317-1.jpg)

Moreover, please ensure you’ve added the **birth.php** file in your **Child Theme**; otherwise, your changes might be lost when updating your theme.

---

