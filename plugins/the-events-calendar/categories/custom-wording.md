# Custom Wording

*Category from The Events Calendar documentation*

---

## How to Change Wording in The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/custom-wording/](https://docs.nexcess.com/software/the-events-calendar/custom-wording/)

If you want to change a word or label on your calendar, you can do that using a snippet or a third-party plugin. This article outlines your options and you can pick the method that works best for you.

## Change Text with a Snippet

The snippet here will help you change any piece of text in The Events Calendar and its add-ons. With a little bit of modification, it would even allow you to change the wording of any piece of text anywhere in WordPress, not just this plugin!

Use the starter snippet below as a template, and copy it into your theme’s functions.php. You may need to remove the opening **<?php** tag if your theme’s functions.php already has one.

This snippet contains two example wording changes, which you can use as a template for the changes you want to make. This changes the phrase “Related Events” to “Similar Events” and “Venue” to “Location.” This is the magic bit right here:

```
$custom_text = [
  'Venue' => 'Location',
  'Related %s' => 'Similar %s',
];
```

To change a particular set of text, you must first copy it exactly as it appears in the *code*. Frequently it appears the same on the front-end. For instance, to change the wording of “Related Events” to say “Similar Events”, you can simply copy the text from the front end. You will then paste it as a key inside of the $custom_text array inside of the snippet as in the above example. You can add as many lines as you want by following the same pattern.

Sometimes the text you want to change cannot be copy-pasted from the front end. For instance, by default, the label in the Events Bar has a CSS style that transforms <label>s to all caps. If we copy-pasted “SEARCH” or “WEEK OF” they will not replace the text we want, because that is not how they appear in the code. If we inspect these elements we will see something like this:

```
<label>Search</label>
```

In order to change that label, we would have to copy it as it appears in the *code*, namely “Search”, not “SEARCH”. An example which changes “Search” to “Find”:

```
$custom_text = [
  'Related %s' => 'Similar %s',
  'Search' => 'Find', 
];
```

In the above examples, you may have been wondering what the 
```
%s
```

 is all about. Those are placeholders for words that the translation does not change. So `Related %s` allows you to change the word “Events” (in the settings), but is not responsible for translating it – it only translates the word “Related”.

⚠️ Note: On rare occasions, this can be even more complicated when multiple strings are concatenated together. An example would be a heading like “Events for the week of November 24, 2014.” When attempting to edit these it might become necessary to dive into the PHP code and determine how the individual strings appear in the code, and what their 
```
gettext
```

 
```
$text value
```

 is.

To help get more accurate translations, WordPress provides translations with context and translations for singular/plural. These use slightly different filters to account for the extra information, and may not get caught by the 
```
gettext
```

 filter. Since we use these in some places, we have included examples addressing these in the code below as well.

**The** **Starter Snippet**

```
<?php

/*
 * EXAMPLE OF CHANGING ANY TEXT (STRING) IN THE EVENTS CALENDAR
 * See the codex to learn more about WP text domains:
 * http://codex.wordpress.org/Translating_WordPress#Localization_Technology
 * Example Tribe domains: 'tribe-events-calendar', 'tribe-events-calendar-pro'...
 */

/**
 * Put your custom text here in a key => value pair
 * Example: 'Text you want to change' => 'This is what it will be changed to'.
 * The text you want to change is the key, and it is case-sensitive.
 * The text you want to change it to is the value.
 * You can freely add or remove key => values, but make sure to separate them with a comma.
 * This example changes the label "Venue" to "Location", "Related Events" to "Similar Events", and "(Now or date) onwards" to "Calendar - you can discard the dynamic portion of the text as well if desired.
*/
function tribe_replace_strings() {
	$custom_text = [
		'Venue' => 'Location',
		'Related %s' => 'Similar %s',
		'%s onwards' => 'Calendar',
	];

	return $custom_text;
}

function tribe_custom_theme_text ( $translation, $text, $domain ) {
	// If this text domain doesn't start with "tribe-", "the-events-", or "event-" bail.
	if ( ! check_if_tec_domains( $domain ) ) {
		return $translation;
	}

	// String replacement.
	$custom_text = tribe_replace_strings();

	// If we don't have replacement text in our array, return the original (translated) text.
	if ( empty( $custom_text[$translation] ) ) {
		return $translation;
	}

	return $custom_text[$translation];
}

function tribe_custom_theme_text_plurals ( $translation, $single, $plural, $number, $domain ) {
	// If this text domain doesn't start with "tribe-", "the-events-", or "event-" bail.
	if ( ! check_if_tec_domains( $domain ) ) {
		return $translation;
	}

	/** If you want to use the number in your logic, this is where you'd do it.
	 * Make sure you return as part of this, so you don't call the function at the end and undo your changes!
	 */

	// If we're not doing any logic up above, just make sure your desired changes are in the $custom_text array above (in the `tribe_custom_theme_text` filter. )
	if ( 1 === $number ) {
		return tribe_custom_theme_text ( $translation, $single, $domain );
	} else {
		return tribe_custom_theme_text ( $translation, $plural, $domain );
	}
}

function tribe_custom_theme_text_with_context ( $translation, $text, $context, $domain ) {
	// If this text domain doesn't start with "tribe-", "the-events-", or "event-" bail.
	if ( ! check_if_tec_domains( $domain ) ) {
		return $translation;
	}

	/** If you want to use the context in your logic, this is where you'd do it.
	 * Make sure you return as part of this, so you don't call the function at the end and undo your changes!
	 * Example (here, we don't want to do anything when the context is "edit", but if it's "view" we want to change it to "Tribe"):
	 * if ( 'edit' === strtolower( $context ) ) {
	 *    return $translation;
	 * } elseif( 'view' === strtolower( $context ) ) {
	 *    return "Tribe";
	 * }
	 *
	 * Feel free to use the same logic we use in tribe_custom_theme_text() above for key => value pairs for this logic.
	 */

	// If we're not doing any logic up above, just make sure your desired changes are in the $custom_text array above (in the `tribe_custom_theme_text` filter. )
	return tribe_custom_theme_text ( $translation, $text, $domain );
}

function tribe_custom_theme_text_plurals_with_context ( $translation, $single, $plural, $number, $context, $domain ) {
	// If this text domain doesn't start with "tribe-", "the-events-", or "event-" bail.
	if ( ! check_if_tec_domains( $domain ) ) {
		return $translation;
	}

	/**
	 * If you want to use the context in your logic, this is where you'd do it.
	 * Make sure you return as part of this, so you don't call the function at the end and undo your changes!
	 * Example (here, we don't want to do anything when the context is "edit", but if it's "view" we want to change it to "Tribe"):
	 * if ( 'edit' === strtolower( $context ) ) {
	 *    return $translation;
	 * } elseif( 'view' === strtolower( $context ) ) {
	 *    return "cat";
	 * }
	 *
	 * You'd do something as well here for singular/plural. This could get complicated quickly if it has to interact with context as well.
	 * Example:
	 * if ( 1 === $number ) {
	 *    return "cat";
	 * } else {
	 *    return "cats";
	 * }
	 * Feel free to use the same logic we use in tribe_custom_theme_text() above for key => value pairs for this logic.
	 */

	// If we're not doing any logic up above, just make sure your desired changes are in the $custom_text array above (in the `tribe_custom_theme_text` filter. )
	if ( 1 === $number ) {
		return tribe_custom_theme_text ( $translation, $single, $domain );
	} else {
		return tribe_custom_theme_text ( $translation, $plural, $domain );
	}
}

function check_if_tec_domains( $domain ) {
	$is_tribe_domain = strpos( $domain, 'tribe-' )      === 0;
	$is_tec_domain   = strpos( $domain, 'the-events-' ) === 0;
	$is_event_domain = strpos( $domain, 'event-' )      === 0;

	// If this text domain doesn't start with "tribe-", "the-events-", or "event-" bail.
	if ( ! $is_tribe_domain && ! $is_tec_domain && ! $is_event_domain ) {
		return false;
	}

	return true;
}

// Base.
add_filter( 'gettext', 'tribe_custom_theme_text', 20, 3 );
// Plural-aware translations.
add_filter( 'ngettext', 'tribe_custom_theme_text_plurals', 20, 5 );
// Translations with context.
add_filter( 'gettext_with_context', 'tribe_custom_theme_text_with_context', 20, 4 );
// Plural-aware translations with context.
add_filter( 'ngettext_with_context', 'tribe_custom_theme_text_plurals_with_context', 20, 6 );
```

## Change Text with Loco Translate

[Loco Translate](https://wordpress.org/plugins/loco-translate/) is a popular WordPress plugin that provides in-browser editing of translation files. It allows you to translate themes and plugins directly from your WordPress admin area. While its primary function is translation, it can also be effectively used to override existing text strings, even if you’re not changing the language.

1. Install Loco Translate
2. Go to Loco Translate > Plugins and find The Events Calendar (or any other add-on you wish to modify, e.g., Events Calendar Pro)
3. You’ll need to create a custom language file to store your overrides. This ensures your changes are not lost during plugin updates.
- Click on New language.
- Select your site’s default language (e.g., English (United States) — en_US). If you need to customize the text of an existing translation, then, you don’t need to create a new language. In this case, you can click to edit the existing language instead.
- Choose a location for your new language file. Always select Custom or System. If you choose the Author option, your changes will be overwritten during updates. We recommend using the “System” option. This saves your work in a /languages folder that is safe from updates.
- Click the Start translating button.
![This image has an empty alt attribute; its file name is teckb-970-01-1024x574.png](https://docs.nexcess.com/wp-content/uploads/2026/06/teckb-970-01-1024x574-1.jpg)
![](https://docs.nexcess.com/wp-content/uploads/2026/06/teckb-970-02-1024x569-1.jpg)
4. In the “Filter translations” search box, type the exact text string you want to change (e.g., “Event Details”, “Related Events”). Loco Translate will show you any matching strings.
5. Select the original string from the “Source text” column. In the “Translation” text area below, enter your desired custom text.
6. Click the Save button to apply your changes. Clear any website caching you may have (e.g., from a caching plugin or your hosting provider) to see the changes immediately.

**Troubleshooting Loco Translate**

- **Changes not appearing:** Ensure you’ve cleared your website cache. Double-check that you’ve selected a custom location for your language file.
- **String not found:** The string might be part of a different Events Calendar add-on. Go back to **Loco Translate > Plugins** and select the appropriate plugin. The string might also be dynamically generated and not directly translatable this way, in which case **Say What** might be a better option.

## Change Text with Say What

[Say What](https://wordpress.org/plugins/say-what/) is another useful WordPress plugin designed specifically for text string overrides. It provides a simple interface to change any text string output by a WordPress theme or plugin without creating or modifying translation files. This makes it a straightforward solution for quick, targeted text changes.

1. Install and activate Say What
2. Go to Tools > Text changes and click Add New
3. In the “Original string” field, enter the **exact text** you want to change. This is case-sensitive and must match perfectly.
4. In the “Text domain” field, enter **the-events-calendar**. If you are modifying an add-on, you’ll need to find its specific text domain. You can often find this by looking at the plugin’s main file (e.g., **the-events-calendar/the-events-calendar.php**) and searching for **Text Domain** in the plugin header information.
5. In the “Replacement string” field, enter your desired custom text.
6. Click the **Add** button to save your override. Clear any website caching you may have to see the changes immediately.

**Note:** Some string texts are dynamically generated. For example, you will notice in some situations, in order to override the text **‘Find Events’** you will need to search for the **‘Find %s’** string. It happens, because the **%s** placeholder is set to match the event post type labels defined in code.

**Troubleshooting Say What**

- **Changes not appearing:** Clear your website cache. Ensure the “Original string” exactly matches the text in the plugin (case-sensitive).
- **Incorrect text domain:** If the text domain is wrong, Say What won’t find the string. Double-check the text domain for the specific plugin you’re trying to modify.

## Changing the term “Events”

Whether you’re building a custom template, running a niche site (like “Classes” or “Workshops”), or simply need a better translation, you can swap out the default “Event” and “Events” terminology.

There are several ways to update these terms across your entire site to better match your brand.

### Change the Term “Events” Using Filters

First, to get the existing terms we have four functions in The Events Calendar:

- ```
tribe_get_event_label_singular
```
- ```
tribe_get_event_label_singular_lowercase
```
- ```
tribe_get_event_label_plural and
```
- ```
tribe_get_event_label_plural_lowercase
```

Notice we have separate ones for plurals (“events” vs. “event”) and for lowercase (“Event” vs “event”). This makes it easier for folks to use them in the correct context – for example, in a title we’d use 
```
tribe_get_event_label_singular
```

 or 
```
tribe_get_event_label_plural
```

 as titles (in English and other languages) are typically capitalized, whereas in a content block, we’d use 
```
tribe_get_event_label_singular_lowercase
```

 or 
```
tribe_get_event_label_plural_lowercase
```

.

Knowing that context helps translators (and folks like you!) choose the correct word, and in some instances alter the capitalization (in German for example, “Event” as a noun is always capitalized).

But what if you don’t want to use “event” – what if you want to use “concert”?

Well, each of those functions has a filter in it. [WordPress](https://developer.wordpress.org/plugins/hooks/filters/) filters allow you to change data before it is used – in this case, the strings for the event terms. As you might expect, since there are four functions, there are four filters. We tried to make them easy to remember – they are the functions’ names, without the “get”:

- ```
tribe_event_label_singular
```
- ```
tribe_event_label_singular_lowercase
```
- ```
tribe_event_label_plural and
```
- ```
tribe_event_label_plural_lowercase
```

Remember we mentioned translation patching above? One caveat of these filters is they are applied *after the word has been translated* – so if you have a non-English site, using them will override the translation.

As an example, (our site is in German) here’s our calendar search bar:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-32-1024x115-1.jpg)

Now we filter the “event” terms to use “concert” instead (specifically, we’re filtering 
```
tribe_event_label_plural
```

 to use “Concerts”):

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-33-1024x108-1.jpg)

The term is applied after the translations, so “Finde” (“Find”, in English) stays translated, but “Concerts” does not get translated. This could be an issue on some sites, so test it carefully, but that also means you can tweak the translation of the word if you feel it’s incorrect!

To utilize one of these filters is fairly easy. You’ll want to add some code to your theme’s functions.php file.

So, continuing our “concerts” example, to change all instances of the words from event/events to concert/concerts we’d put the following in our file:

```
add_filter( 'tribe_event_label_singular', function() { return 'Concert'; } );
add_filter( 'tribe_event_label_singular_lowercase', function() { return 'concert'; } );
add_filter( 'tribe_event_label_plural', function() { return 'Concerts'; } );
add_filter( 'tribe_event_label_plural_lowercase', function() { return 'concerts'; } );
```

And then we’ll see this:

![changing the term events](https://docs.nexcess.com/wp-content/uploads/2026/06/concerts-1024x126-1.png)

It’s also worth mentioning that all of our other plugins respect these filters, so if you are using Filter Bar you’ll see this:

![changing the term events affects filter bar as well](https://docs.nexcess.com/wp-content/uploads/2026/06/filterbar_concerts-575x1024-1.png)

You can also manually change the names of Filter Bar filters by going to Events > Settings > Filters and then opening the one you want to change in the Active Filters list.

### Changing the Calendar’s URL Slugs

The event slugs for your calendar’s URLs are controlled via settings at Events > Settings > General > Viewing. The URLs will always use the slugs defined there, even if you are using a different language for your site. If you are using a different language for your site or you want to use a different word (e.g. “concerts”), you’ll want to adjust the slug settings.

## Changing the Terms “Ticket” and “RSVP”

By default, The Events Calendar and Event Tickets plugins use the terms “Ticket” and “RSVP.” While these are suitable for most scenarios, you may find that other terms better fit the unique needs of your site. This article will show you how to change the default “Ticket” and “RSVP” labels everywhere on your site.

### Change the Terms “Ticket” and “RSVP” Using Filters

The Event Tickets plugin uses a set of filters to dynamically generate the labels for “Ticket” and “RSVP.” The names of these filters are self-explanatory, making it easy to understand their function.

Here are the four filters available for **Tickets**:

- ```
tribe_get_ticket_label_singular
```
- ```
tribe_get_ticket_label_singular_lowercase
```
- ```
tribe_get_ticket_label_plural
```
- ```
tribe_get_ticket_label_plural_lowercase
```

You can apply the same logic to RSVPs by replacing 
```
ticket
```

 with 
```
rsvp
```

 in the filter names.

Remember that these filters are applied after the word has been translated. So if you are on a non-English site, using them will override the translation.

**Snippet for Tickets**

```
// Change the singular label from 'Ticket' to a custom term.
 
add_filter( 'tribe_get_ticket_label_singular', function() {
    return 'Your Label'; // Change this to your desired singular term (e.g., 'Seat').
} );
 
// Change the lowercase singular label from 'ticket' to a custom term.
 
add_filter( 'tribe_get_ticket_label_singular_lowercase', function() {
    return 'your label'; // Change this to your desired lowercase singular term.
} );
 
// Change the plural label from 'Tickets' to a custom term.
 
 
add_filter( 'tribe_get_ticket_label_plural', function() {
    return 'Your Labels'; // Change this to your desired plural term (e.g., 'Seats').
} );
 
// Change the lowercase plural label from 'tickets' to a custom term.
 
add_filter( 'tribe_get_ticket_label_plural_lowercase', function() {
    return 'your labels'; // Change this to your desired lowercase plural term.
} );
```

**Snippet for RSVPs**

```
// Change the singular RSVP label from 'RSVP' to a custom term.
 
add_filter( 'tribe_get_rsvp_label_singular', function() {
    return 'Your Label'; // Change this to your desired singular term (e.g., 'Registration').
} );
 
// Change the lowercase singular RSVP label from 'rsvp' to a custom term.
 
add_filter( 'tribe_get_rsvp_label_singular_lowercase', function() {
    return 'your label'; // Change this to your desired lowercase singular term.
} );
 
// Change the plural RSVP label from 'RSVPs' to a custom term.
 
add_filter( 'tribe_get_rsvp_label_plural', function() {
    return 'Your Labels'; // Change this to your desired plural term (e.g., 'Registrations').
} );
 
// Change the lowercase plural RSVP label from 'rsvps' to a custom term.
 
add_filter( 'tribe_get_rsvp_label_plural_lowercase', function() {
    return 'your labels'; // Change this to your desired lowercase plural term.
} );
```

## Changing the Terms for Virtual and Hybrid Events

Looking to change the wording of “virtual events” or “hybrid events” to something else? You can totally do that by adding a filter that will suit your needs. Read on to find out more.

We have a bunch of new template tags that allow us to change any part of the virtual events label:

- ```
tribe_get_virtual_label
```

: This will change the term “Virtual”
- ```
tribe_get_virtual_lowercase
```

: This will change the term “virtual”
- ```
tribe_get_virtual_event_label_singular
```

: This will change the term “Virtual Event”
- ```
tribe_get_virtual_event_label_singular_lowercase
```

: This will change the term “virtual event”
- ```
tribe_get_virtual_event_label_plural
```

: This will change the term “Virtual Events”
- ```
tribe_get_virtual_event_label_plural_lowercase
```

: This will change the term “virtual events”
- ```
tribe_hybrid_label
```

: This will change the term “hybrid”
- ```
tribe_hybrid_label_singular
```

: This will change the term “Hybrid Event”

Inside each of those template tags is a filter by a similar name, so we’ll want to know which of these we’d like to change. In most cases, we’ll want to change all of them so that the verbiage stays consistent across all of our virtual events.

We can also change the global “events” term, so a combination of filters can work here as well if we’d like the term “events” to be different everywhere on our site. We have an article about that here: [Changing the term “Event(s)”](https://theeventscalendar.com/knowledgebase/k/changing-the-term-events/). But the important part is that *if you use those filters to change the global event(s) term then the terms will change here as well – automatically.*

So if we set “Event” via the filter 
```
tribe_event_label_singular
```

 to “Webinar” that will propagate to the function 
```
tribe_get_virtual_event_label_singular
```

 which will return “Virtual Webinar”. The similarity in naming is intentional to help us associate them.

It’s also worth mentioning that the same caveats about translations from that article apply to these filters as well! The filters are applied **after** translation!

As a first example, to alter the capitalized version of the “Virtual” term add the following to our theme’s functions.php file:

```
add_filter( 'tribe_virtual_label', function(){ return 'Online'} );
```

To alter the lowercase version of the “virtual” term, add this to our theme functions.php:

```
add_filter( 'tribe_virtual_label_lowercase', function() { return 'online'} );
```

Note that these snippets also change the phrase “virtual events” to “online events” and “Virtual Events” to “Online Events”.

But let’s say we want to change the term “Virtual Event” to “Webinar” (dropping the “event” term). Use 
```
tribe_virtual_event_label_singular
```

 and it will override “Virtual Event” to “Webinars”.

```
add_filter( 'tribe_virtual_event_label_singular', function(){ return 'Webinars'} );
```

It’s worth mentioning that these only change the *front-end* usage of these terms – for some clarity we decided to limit changing the term in the admin.

So, as a recap:

```
// This will change all uses of the word "Virtual" to "Online.
// It will also change all uses of the term "Virtual Events" to "Online Events".
add_filter( 'tribe_virtual_label', function() { return 'Online'; } );
 
// This will change all uses of the word "virtual" to "online.
// It will also change all uses of the term "virtual events" to "online events".
add_filter( 'tribe_virtual_label_lowercase', function() { return 'online'; } );
 
// This will change all uses of the term "Virtual Event" to "Webinar".
add_filter( 'tribe_virtual_event_label_singular', function() { return 'Webinar'; } );
 
// This will change all uses of the term "virtual event" to "webinar".
add_filter( 'tribe_virtual_event_label_singular_lowercase', function() { return 'webinar'; } );
 
// This will change all uses of the term "Virtual Events" to "Webinars".
add_filter( 'tribe_virtual_event_label_plural', function() { return 'Webinars'; } );
 
// This will change all uses of the term "virtual events" to "webinars".
add_filter( 'tribe_virtual_event_label_plural_lowercase', function() { return 'webinars'; } );
```

One last one for funsies:

What if we want to change the event term – but only for virtual events (getting a bit sneaky here!) and we don’t want to change the “virtual” term? (we’ve broken up the code a bit so you can see what we’re doing a bit better)

```
// This will change all uses of the term "Virtual Event" to "Virtual Classroom".
add_filter(
    'tribe_virtual_event_label_singular',
    function() {
        return tribe_get_virtual_label() . 'Classroom';
    }
);
 
// This will change all uses of the term "virtual event" to "virtual classroom".
add_filter(
    'tribe_virtual_event_label_singular_lowercase',
    function() {
        return tribe_get_virtual_label_lowercase() . 'classroom';
    }
);
 
// This will change all uses of the term "Virtual Events" to "Virtual Classrooms".
add_filter(
    'tribe_virtual_event_label_plural',
    function() {
        return tribe_get_virtual_label() . 'Classrooms';
    }
);
 
// This will change all uses of the term "virtual events" to "virtual classrooms".
add_filter(
    'tribe_virtual_event_label_plural_lowercase',
    function() {
        return tribe_get_virtual_label_lowercase() . 'classrooms';
    }
);
```

## Customize the “Postponed” Event Status Label

Use this tweak to rename the default “Postponed” status label shown on events.

**What it does:** Replaces the “Postponed” label with a custom label of your choice.

```
add_filter( 'tec_event_status_postponed_label', function() { return 'Rescheduled'; } );
```

**Result:**

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-07-02-at-00.43.00-1024x227-1.jpg)

**Ref:** [tec_event_status_postponed_label](https://docs.theeventscalendar.com/reference/hooks/tec_event_status_postponed_label/)

---

