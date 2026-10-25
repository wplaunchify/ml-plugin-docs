# Customize Rsvp

*Category from The Events Calendar documentation*

---

## Customizing Event RSVPs

**Source:** [https://docs.nexcess.com/software/the-events-calendar/customize-rsvp/](https://docs.nexcess.com/software/the-events-calendar/customize-rsvp/)

Many sites want to tailor the RSVP experience — from the text shown on the form to how users interact with it. This article collects several RSVP customizations that give you more control over how RSVPs look and behave on your site.

## Limit Users to One RSVP Per Event

By default, users can RSVP to events as many times as they’d like. If you’d prefer to limit users to a single RSVP per person, you can make that happen with some customizations. You can add a snippet to limit the RSVP functionality and then create a template override to customize the appearance of the form once a user has already RSVP’ed.

We’ll walk you through the steps here.

#### Prerequisites

For this to work, you need to require users to log in before they RSVP. You can find the respective setting under **Tickets > Settings > General** tab, in the Login Requirements section. Tick the RSVP box there.

![Login requirements for one RSVP to work](https://docs.nexcess.com/wp-content/uploads/2026/06/et-rsvp-login-requirements-1024x163-1.jpg)

#### The Snippet

The first thing you’ll want to do is add the following snippet to your functions.php file:

```
add_filter( 'tribe_tickets_get_ticket_max_purchase', function( $stock, $ticket ) {
	if ( $stock < 1 || ! $ticket instanceof Tribe__Tickets__Ticket_Object ) {
		return $stock;
	}

	$is_rsvp = 'tc-rsvp' === $ticket->type() || 'Tribe__Tickets__RSVP' === $ticket->provider_class;

	return $is_rsvp ? 1 : $stock;
}, 10, 2 );
```

This limits each RSVP submission to one attendee, and only for RSVP tickets (other ticket types keep their normal limit). It does not stop someone from RSVPing a second time; the template override below does that.

#### Template Override

The next step in the process is to create a template override. Create a file at:

```
[your-theme]/tribe/tickets/v2/commerce/rsvp/actions/rsvp.php
```

Add the following to that template to show a custom message, instead of the Going and Not Going buttons, when the user has already RSVP’d:

```
<?php
/**
 * Block: RSVP
 * Actions - RSVP
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/tickets/v2/commerce/rsvp/actions/rsvp.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link https://evnt.is/1amp Help article for RSVP & Ticket template files.
 *
 * @var Tribe__Tickets__Ticket_Object $rsvp The rsvp ticket object.
 *
 * @since 4.12.3
 * @version 4.12.3
 */

defined( 'ABSPATH' ) || die();

$tickets_view = Tribe__Tickets__Tickets_View::instance();
$has_rsvp     = $tickets_view->has_rsvp_v2_attendees( get_the_ID(), get_current_user_id() );
?>
<div class="tribe-tickets__rsvp-actions-rsvp">
	<?php if ( ! $has_rsvp ) : ?>
		<?php $this->template( 'v2/commerce/rsvp/actions/rsvp/going', [ 'rsvp' => $rsvp ] ); ?>

		<?php $this->template( 'v2/commerce/rsvp/actions/rsvp/not-going', [ 'rsvp' => $rsvp ] ); ?>
	<?php else : ?>
		<p><?php esc_html_e( 'Sorry - only one per customer!', 'my-theme' ); ?></p>
	<?php endif; ?>
</div>
```

#### The Result

After setting this up, a user who has already RSVP’d to an event should see something like this:

![Message that appears when setting to one RSVP](https://docs.nexcess.com/wp-content/uploads/2026/06/et-one-rsvp-per-person.jpg)

## Disable “Going” Button

You can disable the “Going” button for people who have already RSVP’d with a template override. Create a file at [your-theme]/tribe/tickets/v2/commerce/rsvp/actions/rsvp/going.php with the following:

```
<?php
/**
 * Block: RSVP
 * Actions - RSVP - Going
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/tickets/v2/commerce/rsvp/actions/rsvp/going.php
 *
 * See more documentation about our Blocks Editor templating system.
 *
 * @link https://evnt.is/1amp Help article for RSVP & Ticket template files.
 *
 * @var bool $must_login Whether the user has to login to RSVP or not.
 * @var Tribe__Tickets__Ticket_Object $rsvp The rsvp ticket object.
 *
 * @since 5.30.0
 *
 * @version 5.30.0
 */

defined( 'ABSPATH' ) || die();

$has_rsvp = is_user_logged_in()
	&& Tribe__Tickets__Tickets_View::instance()->has_rsvp_v2_attendees( get_the_ID(), get_current_user_id() );
$disabled = $must_login || $has_rsvp;
?>

<div class="tribe-tickets__rsvp-actions-rsvp-going">
	<button
		class="tribe-common-c-btn tribe-tickets__rsvp-actions-button-going tribe-common-b1 tribe-common-b2--min-medium"
		type="submit"
		<?php tribe_disabled( $disabled ); ?>
	>
		<?php echo esc_html_x( 'Going', 'Label for the RSVP going button', 'event-tickets' ); ?>
	</button>
</div>
```

## Change Field Labels on the RSVP Form

Sometimes we need to change the default labels for the Name and Email fields on the RSVP form. For example, replacing the “Name” label with “Full Name.”

![](https://docs.nexcess.com/wp-content/uploads/2026/06/RSVP_Name.jpeg)

What we can do is edit the corresponding template, in this case, it is:

```
/wp-content/plugins/event-tickets/src/views/v2/commerce/rsvp/form/fields/name.php
```

Changing the word “Name” to “Full Name” in the code, as shown in the following image:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Name_php.jpeg)

After this, our RSVP will be updated as we expected:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/RSVP_FullName.jpeg)

It’s worth mentioning that while it’s true that you can modify the code in the template file, it’s good practice to apply the template override method to avoid losing changes in case there’s a plugin update that replaces the modified file with the original file. To do this, copy the file to [your-theme]/tribe/tickets/v2/commerce/rsvp/form/fields/name.php and make the change there.

---

*Snippets reviewed and updated October 2026*

---

