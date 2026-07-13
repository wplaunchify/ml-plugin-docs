# Tribe Settings Api

*Category from The Events Calendar documentation*

---

## Customize The Events Calendar Settings with the Tribe Settings API

**Source:** [https://docs.nexcess.com/software/the-events-calendar/tribe-settings-api/](https://docs.nexcess.com/software/the-events-calendar/tribe-settings-api/)

If you’re writing a custom add-on, a site-specific plugin, or a code snippet that extends [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/) or [Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/), the Tribe Settings API gives you a clean way to plug your own options into the existing settings screens – the same API our own tabs (General, Display, Integrations, etc.) are built on. Instead of reinventing a settings page with the WordPress Settings API, you can register a tab, add fields, and let Tribe Settings handle the rendering, validation, saving, and error messaging for you.

The API was originally introduced in The Events Calendar 2.0.5 and has since been extracted into the shared [tribe-common](https://github.com/the-events-calendar/tribe-common) library (
```
@since 4.0.1
```

), where it is bootstrapped and loaded on every request for any plugin that embeds tribe-common (The Events Calendar, Event Tickets, and their add-ons). Four classes make up the API, and all four live in the */common/src/Tribe/* folder of the plugin. The older *Tribe__Events__** class names still exist as deprecated shims under */common/src/deprecated/*, but new code should use the current class names listed below.

## How the four classes fit together

Each class sits at a different level of abstraction. In practice you’ll usually only touch the last one:

- **Tribe__Settings** – the top-level controller. It owns the list of tabs, routes the current request to the right tab, and dispatches the full render / validate / save lifecycle. You rarely instantiate this yourself; it’s constructed by tribe-common. You *do* hook into its actions and filters to inject content.
- **Tribe__Field** – renders an individual field (text box, dropdown, toggle, etc.). You pass it an array describing the field and it outputs the HTML. Usable anywhere – settings, metaboxes, user profile screens – not just inside a tab.
- **Tribe__Validate** – validates and sanitizes a single field’s value based on a validation type (e.g. *url*, *positive_int*, *email*). Also usable standalone, but in a settings tab it’s invoked automatically on save.
- **Tribe__Settings_Tab** – the public API. Instantiating this class registers a new tab, its fields, and its defaults. It wires the other three classes together so you don’t have to.

If you’re creating a new tab, *Tribe__Settings_Tab* is where you should focus. The other three are documented below for when you need to reach a level deeper – for example, rendering a single field in a metabox, adding a custom validation rule, or modifying what another plugin’s tab renders via hooks.

## Quick start: register a tab in ~20 lines

A minimal working example that adds a *My Add-on* tab to the Events settings screen with a single text field. All fields in this example save as entries in the serialized *Tribe__Main::OPTIONNAME* array, which is the same array the rest of The Events Calendar uses – you can read them back with 
```
tribe_get_option( 'my_addon_api_key' )
```

.

```
add_action( 'tribe_settings_do_tabs', function () {
	$fields = [
		'my_addon_heading' => [
			'type' => 'heading',
			'label' => __( 'My Add-on Settings', 'my-addon' ),
		],
		'my_addon_api_key' => [
			'type'            => 'text',
			'label'           => __( 'API key', 'my-addon' ),
			'tooltip'         => __( 'Paste the API key from your dashboard.', 'my-addon' ),
			'validation_type' => 'alpha_numeric_with_dashes_and_underscores',
			'can_be_empty'    => true,
		],
		'my_addon_enabled' => [
			'type'            => 'toggle',
			'label'           => __( 'Enable integration', 'my-addon' ),
			'default'         => false,
			'validation_type' => 'boolean',
		],
	];

	new Tribe__Settings_Tab(
		'my-addon',                         // Tab ID (used in the URL).
		__( 'My Add-on', 'my-addon' ),      // Tab label.
		[
			'priority' => 55,               // Places the tab between Licenses (40) and Help (60).
			'fields'   => $fields,
		]
	);
} );
```

The *tribe_settings_do_tabs* action is the standard entry point for registering tabs – firing your *new Tribe__Settings_Tab()* call inside it ensures the tab is registered at the right moment in the lifecycle. See the [Priority](#h-priority) section below for how to position your tab relative to the existing ones.

## Class reference

### Class Tribe__Settings

- File: */common/src/Tribe/Settings.php*
- Description: static helper class that allows registration of settings; instantiation takes place in tribe-common on the *tec_settings_init* action.
- Deprecated alias: *Tribe__Events__Settings* (see */common/src/deprecated/Tribe__Events__Settings.php*).

**Class variables:**

- *$instance*: (stdClass) singleton method instance var
- *$tabs*: (array) the tabs that will appear in the settings page (filtered on class construct)
- *$fields*: (array) multidimensional array of the fields that will be generated for the entire settings panel, tabs are represented in the array keys
- *$defaultTab*: (string) the default tab for the settings panel, this should be a tab ID
- *$currentTab*: (string) the current tab being displayed
- *$noSaveTabs*: (array) tabs that shouldn’t show the save button
- *$adminSlug*: (string) the slug used in the admin to generate the settings page
- *$menuName*: (string) the menu name used for the settings page
- *$requiredCap*: (string) the required capability for the settings page
- *$errors*: (mixed) errors that occur after a save operation
- *$saved*: (bool) true when just saved
- *$admin_page*: (string) the *$current_screen* name corresponding to the admin page
- *$major_error*: (bool) true if a major error that prevents saving occurred
- *$validated*: (array) holds validated fields

**Action Hooks:**

Tribe__Settings fires a large number of actions. They’re grouped below by when they run, so you can pick the right place to inject content or behavior.

*Registration & page chrome (most common)*

- *tribe_settings_do_tabs*: register new tabs here (used with the *Tribe__Settings_Tab* class)
- *tribe_settings_after_do_tabs*: occurs after all tabs are added
- *tribe_settings_top*: occurs before opening *<div class=”tribe_settings wrap”>* of the settings page
- *tribe_settings_above_tabs*: occurs right above the tabs (below the title)
- *tribe_settings_below_tabs*: occurs right below the tabs
- *tribe_settings_below_tabs_tab_{$currentTab}*: occurs right below the tabs for the specified tab
- *tribe_settings_after_tabs*: occurs after tabs
- *tribe_settings_bottom*: occurs at the bottom of the settings screen

*Form rendering*

- *tribe_settings_above_form_element*: occurs above the form element
- *tribe_settings_above_form_element_tab_{$currentTab}*: occurs above the form element for the specified tab
- *tribe_settings_before_content*: occurs after the form element
- *tribe_settings_before_content_tab_{$currentTab}*: occurs after the form element for the specified tab
- *tribe_settings_content_tab_{$currentTab}*: generates the content for the specified tab
- *tribe_settings_after_content_tab_{$currentTab}*: occurs after the content for the specified tab
- *tribe_settings_after_content*: occurs after the content
- *tribe_settings_after_form_element*: occurs after the form element
- *tribe_settings_after_form_element_tab_{$currentTab}*: occurs after the form element for the specified tab
- *tribe_settings_after_form_div*: occurs after the closing form div

*Validation & save*

- *tribe_settings_validate_before_checks*: occurs during validation, before any kind of checks are made
- *tribe_settings_validate*: occurs in validation once the permission, nonce and tab checks are made
- *tribe_settings_validate_tab_{$currentTab}*: same as *tribe_settings_validate* but for a specific tab
- *tribe_settings_validate_field*: occurs on field validation
- *tribe_settings_validate_field_{$field_id}*: occurs on specific field validation
- *tribe_settings_save*: occurs on save
- *tribe_settings_save_tab_{$currentTab}*: occurs on save for specific tab
- *tribe_settings_save_field*: occurs on field save
- *tribe_settings_save_field_{$field_id}*: occurs on specific field save

**Filter Hooks:**

- *tribe_settings_menu_name*: filter the settings panel’s menu name
- *tribe_settings_req_cap*: filter the required capability, defaults to *manage_options*
- *tribe_settings_admin_slug*: filter the admin slug for the settings page
- *tribe_settings_tabs*: filter the tabs for the settings panel
- *tribe_settings_fields*: filter the fields for the settings panel
- *tribe_settings_default_tab*: filter the default tab, defaults to *general*
- *tribe_settings_current_tab*: filter the current tab, defaults to *$_GET[‘tab’]*
- *tribe_settings_no_save_tabs*: filter which tabs don’t have the save tab
- *tribe_settings_form_element*: filter the opening form element for the settings panel, defaults to *<form method=”post”>*
- *tribe_settings_closing_form_element*: filter the closing form element for the settings panel, defaults to *</form>*
- *tribe_settings_validate_field_value*: filter a field’s value before we validate it
- *tribe_settings_save_field_value*: filter a field’s value before we save it
- *tribe_settings_save_field_parent_option*: filter a field’s parent array option id before saving it
- *tribe_settings_save_option_array*: filter an option array before saving it
- *tribe_settings_display_errors*: filter the *$errors* array before displaying it
- *tribe_settings_count_errors*: filter how many errors there are before displaying them
- *tribe_settings_display_errors_or_not*: determine whether to display errors or not, defaults to whether the error count is above zero or not
- *tribe_settings_error_message*: filter the full error message
- *tribe_settings_success_message*: filter the success message

### Class Tribe__Field

- File: */common/src/Tribe/Field.php*
- Description: helper class that creates fields for use in Settings, MetaBoxes, Users, anywhere. Instantiate it whenever you need a field.
- Deprecated alias: *Tribe__Events__Field* (see */common/src/deprecated/Tribe__Events__Field.php*).

**Class variables:**

- *$id*: (string) the field’s id
- *$name*: (string) the field’s name (also known as its label)
- *$args*: (array) the field’s arguments
- *$defaults*: (array) field defaults (static)
- *$valid_field_types*: (array) the valid field types

**Constructor variables:**

These variables are passed to the class when it is instantiated, like so:

*new Tribe__Field($id, $field, $value = null)*

- *$id*: (string) the field’s id
- *$field*: (array) the field object/arguments
- *$value*: (mixed)[optional] the field’s current value

**Field Arguments:**

These are set with the *$args* variable. Below are the different arguments with their default value:

- ‘type’ => ‘html’, the field type
- ‘name’ => $id, the field’s name attribute (used in *$_POST*)
- ‘class’ => null, class to be applied to the field’s *<fieldset>* element
- ‘label’ => null, the field’s label
- ‘tooltip’ => null, the field’s description/label, used in the tooltip as well as in the screen reader label
- ‘size’ => ‘medium’, (possible values are small, medium or large) this applies to text, text area, dropdown, and license_key fields only
- ‘html’ => null, the html of a field (applies only to an html field)
- ‘error’ => false, boolean to indicate if the field is currently erroneous or not – this is set via *Tribe__Validate*
- ‘value’ => $value, the current value for the field
- ‘options’ => null, options for the field (this applies to radio and dropdown fields only)
- ‘conditional’ => true, allows you to set a condition on a field to determine whether it should appear or not, you can pass a function, a variable, whatever you want here, but it expects a boolean value
- ‘display_callback’ => null, a function name to generate the field with, this would overwrite the class’ behaviour and generate the field with the specified function instead
- ‘if_empty’ => null, optional message to display for a radio or dropdown button when *$options* are empty, handy for dynamic fields
- ‘can_be_empty’ => false, allows a field to be saved with an empty value
- ‘clear_after’ => true, to add a *<div class=”clear”></div>* after the field or not, defaults to add it

**Valid Field Types:**

- heading: an *<h3>* wrapped heading
- html: arbitrary html code
- wrapped_html: arbitrary html code with a wrapper element
- text: regular text field
- textarea: regular text area field
- wysiwyg: rich text (TinyMCE) field
- email: email text field
- number: numeric input field
- color: color-picker field
- radio: radio buttons
- checkbox_bool: single checkbox (true or false)
- checkbox_list: checkbox list with options
- toggle: on/off toggle switch
- dropdown: regular *<select>* dropdown
- image / image_id: media-library image pickers
- license_key: regular text field used for entering a license key

**Note:** *dropdown_chosen* and *dropdown_select2* are still recognized but are deprecated – use *dropdown* instead. Additional field types may be added in future versions of this API.

**Action Hooks:**

None for this class

**Filter Hooks:**

- *tribe_valid_field_types*: filter valid field types
- *tribe_field_id*: filter the field’s id
- *tribe_field_{$key}*: filter the field’s specified property
- *tribe_field_output_{$type}*: filter the specified field type’s output
- *tribe_field_output_{$type}_{$field_id}*: filter the specified field’s output
- *tribe_field_start*: filter the field start output
- *tribe_field_end*: filter the field end output
- *tribe_field_label*: filter the field’s label output
- *tribe_field_div_start*: filter the field’s encompassing div’s output
- *tribe_field_div_end*: filter the field’s closing div’s output
- *tribe_field_tooltip*: filter the field’s *title* attribute output, which is used for the tooltip
- *tribe_field_screen_reader_label*: filter the field’s screen reader label
- *tribe_field_value*: filter the field’s value attribute
- *tribe_field_name*: filter the field’s name attribute

### Class Tribe__Validate

- File: */common/src/Tribe/Validate.php*
- Description: helper class that validates fields for use in Settings, MetaBoxes, Users, anywhere. Instantiate whenever you want to validate a field.
- Deprecated alias: *Tribe__Events__Validate* (see */common/src/deprecated/Tribe__Events__Validate.php*).

**Class variables:**

- *$field*: (array), the field object to validate
- *$value*: (mixed), the field’s value
- *$additional_args*: (array) additional arguments for validation – used by some methods only
- *$label*: (string), the field’s label, used in error messages
- *$type*: (string), the type of validation to perform
- *$result*: (stdClass), the result object of the validation

**Valid Validation Types:**

- *not_empty*: validates that a field is not empty
- *positive_int*: validates & sanitizes fields as being positive integers
- *slug*: validates & sanitizes fields as URL slugs
- *url*: validates & sanitizes fields as URLs
- *email* / *email_list*: validates & sanitizes a single email address or a list of email addresses
- *alpha_numeric*: validates & sanitizes a field as alphanumeric
- *alpha_numeric_multi_line*: alphanumeric allowing line breaks
- *alpha_numeric_multi_line_with_dots_and_dashes*: alphanumeric allowing dots, dashes and line breaks
- *alpha_numeric_with_dashes_and_underscores*: alphanumeric allowing dashes and underscores
- *options*: validates fields that have options (radios, dropdowns, etc.) by making sure the value is part of the options array
- *options_multi* / *options_with_label*: variants of *options* for multi-select fields and label-keyed options arrays
- *cannot_be_the_same_as*: validates & sanitizes fields as not being able to be the same as the specified value, use *$additional_args[‘compare’]* to pass the value to compare against, and *$additional_args[‘compare_name’]* to pass the name of what you are comparing against (for the error message)
- *number_or_percent*: validates fields as being a number or a percentage
- *html*: sanitizes an html field
- *license_key*: validates & sanitizes a license key
- *textarea*: sanitizes a textarea field
- *boolean*: sanitizes fields as being a boolean
- *color*: validates & sanitizes a hex color value
- *google_maps_zoom*: validates a google map zoom level
- *address*: validates fields as being part of an address, allows for letters, numbers, dashes and spaces only
- *city_or_province*: validates fields as being a city or province, allows for letters, dashes and spaces only
- *zip*: validates fields as being a zip code
- *phone*: validates fields as being a phone number
- *country_list*: validates & sanitizes a field as being a country list
- *none*: automatically validate a field regardless of the value. Don’t use this unless you know what you are doing.

**NOTE:** more validation types will surely be added in future versions of this API.

**Action Hooks:**

None for this class

**Filter Hooks:**

None for this class

### Class Tribe__Settings_Tab

- File: */common/src/Tribe/Settings_Tab.php*
- Description: helper class that creates a settings tab; this is a public API, use it to create tabs simply by instantiating this class.
- Deprecated alias: *Tribe__Events__Settings_Tab* (see */common/src/deprecated/Tribe__Events__Settings_Tab.php*).

**Class variables:**

- *$id*: (string) Tab ID, used in query string and elsewhere
- *$name*: (string) Tab’s name
- *$args*: (array) Tab’s arguments
- *$defaults*: (array) Defaults for tabs

**Action Hooks:**

None for this class

**Filter Hooks:**

- *tribe_settings_tab_id*: filters the tab ID
- *tribe_settings_tab_name*: filter the tab name
- *tribe_settings_tab_{$field_id}*: filters the specified tab property
- *tribe_settings_do_content_parent_option*: filters the parent option for a field
- *tribe_settings_field_default*: filters the default for a field
- *tribe_settings_get_option_value_pre_display*: filters the value before giving it to the *Tribe__Field* class

**Default Arguments:**

Below are the default arguments with an explanation for each, these are passed via *$args*.

- ‘fields’ => array(), the fields for the tab
- ‘priority’ => 50, the priority of a tab – this will determine the placement of the tab, see below for a more in-depth explanation
- ‘show_save’ => true, whether to show the save button on this tab
- ‘display_callback’ => false, a function name to generate the tab’s content instead of the default behaviour

### Priority

The *priority* argument controls where your tab appears in the row of settings tabs. Internally it’s passed to the *tribe_settings_tabs* filter by *Tribe__Settings_Tab::addTab()*: *add_filter(‘tribe_settings_tabs’, array($this, ‘addTab’), $priority);*

The Events Calendar’s tabs use the following priorities, which you can slot around:

- General: 10
- Display / Template: 20
- Defaults (Pro only): 30
- Licenses (Pro and add-ons only): 40
- Help: 60

A priority of 9 would insert your tab right before General; 35 would place it between Defaults and Licenses; 55 would place it between Licenses and Help. If you omit *priority*, it defaults to 50 – which lands your tab just before Help.

### Fields: parent_option and default

The *Tribe__Settings_Tab* class processes 2 extra parameters for fields above and beyond those of *Tribe__Field*: *parent_option*, which controls where the field’s value is stored, and *default*, which sets a default value if one isn’t present.

*parent_option* has three modes:

- **Omit it** (default): the field is saved as a key inside the *Tribe__Main::OPTIONNAME* serialized array – the same array the rest of The Events Calendar uses. Use this for anything calendar-adjacent so users can back up / migrate all your settings alongside ours. Read values back with *tribe_get_option( ‘your_field_id’ )*.
- **Set it to false**: the field is saved as its own stand-alone WordPress option. Use this for sensitive or large values you want to keep out of the main options array (API tokens, long JSON payloads, etc.). Read it back with *get_option( ‘your_field_id’ )*.
- **Set it to a string**: the field is saved as a key inside a serialized array under that option name. Use this to group your add-on’s fields into their own namespaced option (e.g. *‘my_addon_options’*) while keeping them out of TEC’s main options array.

The *Tribe__Main::OPTIONNAME* constant is what you want. (The older *Tribe__Events__Main::OPTIONNAME* still exists but is deprecated as of TEC 4.0 – use *Tribe__Main::OPTIONNAME* in new code.)

Setting the *default* parameter is important for options that are required, so that your code has a sensible value to fall back on before the user has ever visited your settings tab.

## Complete example: a tab with validation and a callback

The Quick Start above covered the happy path. The example below shows a few more things you’re likely to reach for: a mix of field types, a validated URL, a field saved as its own standalone option, and a *tribe_settings_save_field_** hook to run custom logic when a specific value changes.

```
add_action( 'tribe_settings_do_tabs', function () {
	$fields = [
		'my_addon_info' => [
			'type' => 'html',
			'html' => '<p>' . esc_html__( 'Configure how My Add-on connects to your external service.', 'my-addon' ) . '</p>',
		],
		'my_addon_endpoint' => [
			'type'            => 'text',
			'label'           => __( 'Service endpoint URL', 'my-addon' ),
			'tooltip'         => __( 'Full HTTPS URL of the service you want to sync with.', 'my-addon' ),
			'validation_type' => 'url',
			'default'         => 'https://api.example.com/v1',
		],
		'my_addon_api_token' => [
			'type'            => 'text',
			'label'           => __( 'API token', 'my-addon' ),
			'parent_option'   => false, // Save as a standalone option, outside TEC's main options array.
			'validation_type' => 'alpha_numeric_with_dashes_and_underscores',
			'can_be_empty'    => true,
		],
		'my_addon_mode' => [
			'type'            => 'dropdown',
			'label'           => __( 'Sync mode', 'my-addon' ),
			'options'         => [
				'realtime' => __( 'Realtime', 'my-addon' ),
				'hourly'   => __( 'Hourly', 'my-addon' ),
				'manual'   => __( 'Manual only', 'my-addon' ),
			],
			'validation_type' => 'options',
			'default'         => 'hourly',
		],
	];

	new Tribe__Settings_Tab(
		'my-addon',
		__( 'My Add-on', 'my-addon' ),
		[
			'priority' => 55,
			'fields'   => $fields,
		]
	);
} );

// React when the sync mode is saved - e.g. reschedule a cron.
add_action( 'tribe_settings_save_field_my_addon_mode', function ( $field_id, $value ) {
	wp_clear_scheduled_hook( 'my_addon_sync' );
	if ( 'hourly' === $value ) {
		wp_schedule_event( time(), 'hourly', 'my_addon_sync' );
	}
}, 10, 2 );
```

Things to notice:

- Each field declares its own *validation_type*, which Tribe__Validate applies automatically on save. If validation fails, an error is shown in-place on the field and the value is not persisted.
- *my_addon_api_token* uses *‘parent_option’ => false* so it saves to the *my_addon_api_token* WordPress option directly, instead of being rolled into the *tribe_events_calendar_options* array.
- The *tribe_settings_save_field_my_addon_mode* action is a per-field save hook – a clean place to react to specific option changes without having to diff the whole options array.

## Tips & common pitfalls

- **Always register tabs on tribe_settings_do_tabs.** Registering earlier (e.g. on *init*) means Tribe__Settings may not be loaded yet; registering later (e.g. *admin_menu*) means your tab won’t show up.
- **Prefix your field IDs.** Field IDs become keys inside the shared *Tribe__Main::OPTIONNAME* array when you use the default *parent_option*. A prefix (*my_addon_*, *acme_*, etc.) prevents collisions with ours or with another add-on’s fields.
- **Reading values back.** Use *tribe_get_option( $field_id, $default )* for fields stored under *Tribe__Main::OPTIONNAME*, and *get_option( $field_id, $default )* for standalone options. Always pass a default to guard against the option not existing yet.
- **Pick a real validation_type.** Leaving it off, or setting it to *‘none’*, means the value is saved as-is with no sanitization. Match the validation type to the field type (*url* for URLs, *email* for email, *boolean* for toggles, *options* for dropdowns and radios). Fall back to *html* or *textarea* for free-form content that still needs kses-style sanitization.
- **Heading fields are cosmetic.** *heading* and *html* field types render content but do not save anything – use them freely to structure your tab into sections.
- **Use display_callback when you need full control.** If your tab is mostly custom UI (a setup wizard, a status dashboard, etc.) rather than a list of fields, set *‘display_callback’ => ‘your_function’* in the tab args to render the tab’s body yourself.
- **Turn off Save when it doesn’t apply.** For read-only or informational tabs, pass *‘show_save’ => false* to suppress the Save Changes button.

## Adding custom code to your site

You can add these PHP snippets to your theme’s 
```
functions.php
```

 file, but we recommend using a dedicated code snippets plugin like **Code Snippets** so your changes survive theme updates. For more details, see our guide on the [best practices for implementing custom code snippets](https://docs.nexcess.com/software/the-events-calendar/code-snippets/).

---

