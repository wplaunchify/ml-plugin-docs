# Set Conditions For Form Adv Submissions

*Category from Kadence Blocks — Page Builder Toolkit for Gutenberg Editor documentation*

---

## How To Set Your Own Conditions for Successful Form (Adv) Submissions

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-blocks/set-conditions-for-form-adv-submissions/](https://www.kadencewp.com/help-center/docs/kadence-blocks/set-conditions-for-form-adv-submissions/)

By default, Kadence [Form (Adv)](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/) is marked as “successful” when it passes all of its built-in checks, such as required fields and spam protection. However, there are many real-world situations where you may want **extra rules** before treating a submission as successful.

You can achieve this by using the **kadence_blocks_advanced_form_submission_reject** filter.

```
$submission_rejected = apply_filters( 'kadence_blocks_advanced_form_submission_reject', false, $form_args, $processed_fields, $post_id );
```

Once you hook into this filter, you can inspect the submitted fields, apply your own logic, and decide whether the form should be treated as successful.

If your custom logic returns **true**, it will stop the submission, show the error message, and prevent any success actions (such as redirecting or showing the success message).

Here are some examples. You can add these PHP code to your site using a plugin like [Code Snippets](https://www.liquidweb.com/software/kadence/knowledge-base/advanced/how-to-add-a-custom-filter-or-function-with-code-snippets/) or your functions.php file (in a [child theme](https://www.liquidweb.com/wordpress/theme/child/)).

## Block Disallowed Email Domains

```
add_filter( 'kadence_blocks_advanced_form_submission_reject', function( $reject, $form_args, $processed_fields, $post_id ) {

	foreach ( $processed_fields as $field ) {
		if ( isset( $field['name'], $field['value'] ) && 'email' === $field['type'] && 'email' === $field['name'] ) {

			$email = strtolower( trim( $field['value'] ) );
			$blocked_domains = [ '@example.com', '@testmail.net' ];

			foreach ( $blocked_domains as $domain ) {
				if ( str_ends_with( $email, $domain ) ) {
          // Add a message to the form submission messages
          add_filter('kadence_blocks_advanced_form_submission_reject_message', function( $message ) {
            return 'Email domain is blocked. Please use a different email address.';
          }, 10, 1);
					return true;
				}
			}
		}
	}

	return $reject;
}, 10, 4 );
```

**What this does:**

- Looks for the email field with [name](https://www.liquidweb.com/docs/kadence-blocks/advanced-form-block/#field-advanced-settings) “email”
- Checks if it ends with @example.com or @testmail.net
- If so, blocks the submission and shows a custom message

## Require a Specific Field Value

This example checks a field named access_code and only accepts it if the correct value is entered.

```
add_filter( 'kadence_blocks_advanced_form_submission_reject', function( $reject, $form_args, $processed_fields, $post_id ) {

    $required_code = 'VIP2025';

    foreach ( $processed_fields as $field ) {
	if ( ! is_array( $field ) ) {
		continue;
	}

	// Match the specific field by its "name".
	if ( ( $field['name'] ?? '' ) !== 'access_code' ) {
	    continue;
	}

	$code = trim( (string) ( $field['value'] ?? '' ) );

	// If the code is empty or incorrect, reject the submission.
	if ( $code !== $required_code ) {
            add_filter( 'kadence_blocks_advanced_form_submission_reject_message', function( $message ) {
return 'The access code you entered is invalid.';
}, 10, 1 );
             return true;
       }
			return $reject;
	  }

		return $reject;
	},
10, 4);
```

**What this does:**

- Looks for the field with name=”access_code”
- Compares its value to the required code (**VIP2025**)
- Rejects the submission if incorrect and displays a custom message

## Block Spam Using WordPress Disallowed Comment Keys

You can read more about this example [here](https://www.liquidweb.com/docs/kadence-blocks/how-to-block-form-adv-spam-using-wordpress-disallowed-comment-keys/).

Was this article helpful?Yes NoThank you for your input.Thank you for your feedback.

---

