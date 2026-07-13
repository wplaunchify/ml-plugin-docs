# Schedule Templates

*Category from The Events Calendar documentation*

---

## Template Overrides for Event Schedule Manager

**Source:** [https://docs.nexcess.com/software/the-events-calendar/schedule-templates/](https://docs.nexcess.com/software/the-events-calendar/schedule-templates/)

Creating template overrides in Event Schedule Manager (ESM) might be not as straightforward, but it’s not rocket science either. Let’s see.

ESM has templates for three of its post types: sessions, speakers, and sponsors. The respective template files can be found in the 
```
event-schedule-manager/templates/
```

 folder.

Although the plugin does not include a built-in method for creating template overrides for these, a simple snippet can do the trick.

```
add_filter( 'single_template', function( $template ) {
	// Bail, if not Event Schedule Manager
	if ( ! str_contains( $template, 'event-schedule-manager/templates') ) {
		return $template;
	}

	// Get the template override.
	$template_override = trailingslashit( get_stylesheet_directory() ) . 'event-schedule-manager/' . basename( $template );
	
	// Check if the file exists.
	if ( file_exists( $template_override ) ) {
		return $template_override;
	}

	return $template;
}, 20, 1 );
```

The above snippet will instruct WordPress that if one of the templates from Event Schedule Manager is about to be used, first check if there is a template override available in the child theme, and make use of that.

Let’s talk about the files themselves.

First, go to your child theme folder (
```
wp-content/themes/{your-child-theme}
```

) and create a folder named 
```
event-schedule-manager
```

.

Then copy and paste the template files you want to override from the 
```
wp-content/plugins/event-schedule-manager/templates/
```

 folder in the newly created folder in your child theme.

In the end, the folder and file structure for the overrides should look like this:

```
wp root
|-- wp-content
    |-- themes
        |-- my-child-theme
            |-- event-schedule-manager
                |-- session-template.php
                |-- speaker-template.php
                |-- sponsor-template.php
```

Now you can start editing these templates to your heart’s desire.

---

