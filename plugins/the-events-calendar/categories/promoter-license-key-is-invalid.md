# Promoter License Key Is Invalid

*Category from The Events Calendar documentation*

---

## Promoter License Key is Invalid

**Source:** [https://docs.nexcess.com/software/the-events-calendar/promoter-license-key-is-invalid/](https://docs.nexcess.com/software/the-events-calendar/promoter-license-key-is-invalid/)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-license-key-invalid-warning.jpg)

If you are not using Promoter, you can bump into that error message if you have entered a license key into the Promoter field on the *Events → Settings → Licenses* page by accident. The warning will be displayed again on the next page load, even if you have dismissed it before.

This can be fixed with a little snippet for which we recommend using the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin. (Make sure to check out our [related article](https://docs.nexcess.com/software/the-events-calendar/code-snippets/), too.)

Here is how to go about fixing this:

1. Create a database backup first! – This is always important before making any changes in your database.
2. Create a new snippet with Code Snippets, and copy-paste the below code.
3. Set it as “Only run once”. (See screenshot below.)
4. Click on “Save Changes”. (Not “Save Changes and Execute Once”!)
5. Go to *Snippets → All Snippets*.
6. Click on the play icon next to the snippet to run it once.
7. The relevant entry from the database should be removed and the notice will disappear.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-license-key-invalid-run-once.jpg)Setting the snippet to run only once

```
function remove_promoter_from_tribe_pue_key_notices() {
	// Get the option value from the database
	$tribe_pue_key_notices = get_option( 'tribe_pue_key_notices' );

	// Check if the option is set and if "Promoter" is set
	if ( 
		! empty( $tribe_pue_key_notices ) 
		&& is_array( $tribe_pue_key_notices ) 
		&& isset( $tribe_pue_key_notices['invalid_key']['Promoter'] ) 
	) {
		// Unset "Promoter" setting
		unset( $tribe_pue_key_notices['invalid_key']['Promoter'] );

		// Update the option with the modified value
		update_option( 'tribe_pue_key_notices', $tribe_pue_key_notices );
	}
}

add_action( 'init', 'remove_promoter_from_tribe_pue_key_notices' );
```

---

