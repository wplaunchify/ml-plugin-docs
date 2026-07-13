# Wpml

*Category from The Events Calendar documentation*

---

## Using WPML with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wpml/](https://docs.nexcess.com/software/the-events-calendar/wpml/)

WPML is the most popular multilingual plugin for WordPress, with over 1 million installations. Using WPML and The Events Calendar, you can translate your Events into other languages, and make your website accessible to people from all over the world.

Please note – while we strive to be compatible with WPML and make significant efforts, we cannot guarantee 100% compatibility. At the moment, WPML is only compatible with the following plugins and add-ons:

- **The Events Calendar**
- **Events Calendar Pro**
- **Filter Bar**

This article covers setting up WPML with The Events Calendar. If you are looking for more information about setting up our **Filter Bar** add-on with WPML, please read our **dedicated guide on this topic**.

## Getting Started

WPML is a premium plugin, so you first need to buy a plan in order to use it. To learn more about WPML’s features and buy a plan, visit the [WPML](https://wpml.org/) website.

## Configuring WPML

WPML comes with a short setup wizard to help you configure some basic settings. This includes selecting the languages you want to translate into, choosing a URL format, and installing any necessary add-ons.

An important step in the wizard is to add context on your site and target audience for AI translations. [Private Translation Cloud (PTC)](https://ptc.wpml.org/about/), WPML’s advanced AI translator, uses that context to deliver highly accurate translations with the correct terminology and tone.

![AI Translation screen from the WPML setup wizard.](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-setup-step-1-updated.jpg)

## Translating The Events Calendar with WPML

To translate any Event Calendar element, start by going to **WPML**→ **Translation Dashboard**. From here, you can translate **Events**, **Venues**, **Organizers**, and any other content related to the Events Calendar.

To choose content for translation, simply select the items you want to translate.

![Step 1 of WPML's translation process](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-translation-step-1-updated.jpg)

Next, scroll down to Step 2 and select your translation method..

For the highest translation quality, we recommend translating automatically with [PTC](https://wpml.org/documentation/automatic-translation/). This AI also comes with a [guarantee](https://wpml.org/documentation/automatic-translation/quality-guarantee/): if you’re not satisfied with translations, contact WPML for a refund.

WPML shows you the cost of AI translations before you send content. One credit costs €0.00059 (or $0.00070), so translating two events in three languages with PTC, like our example below, costs 1224 credits or €0.92 (or $1.08).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-translation-step-2-updated.jpg)

Finally, go to **WPML**→ **Translations** to review your automatic translations, or manually enter your own.

To edit translations, check the translated page on the frontend while logged in WordPress. Click on **Edit Translation** from the top menu to enter WPML’s **Advanced Translation Editor**.

![Adding translations manually with WPML](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-translation-interface.jpg)

Once done, your translations will appear on your website when switching languages.

![An event page in Spanish](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-single.jpg)

## Known Issues

**Creating New Venues & Organizers**

Creating a new venue or a new organizer at the same time you are creating an event with WPML will result in the newly created venue or organizer to not be assigned a language for technical reasons. Try creating Venues and Organizers and their translations *before* creating events. You can also create them after, but that will require going back in each event in all languages and manually assigning the Organizer and Venue.

**Google Maps**

Sometimes the Google map related to a venue might not display in alternate languages in the single event view. This issue only affects certain WordPress themes. If you are experiencing issues displaying the Google map related to a venue in one or many languages, please ensure that the “use latitude +longitude” box is checked.

![please ensure that the "use latitude +longitude" box is checked](https://docs.nexcess.com/wp-content/uploads/2026/06/uselatitudeandlongitude.jpg)

**Recurring Events**

Recurring events are correctly translated with WPML. However, it’s best to *stay on the event editor page*while occurrences are being created. In spite of the “You can safely navigate away” message, it is important that you do not switch language until the event series has been fully created.

**Translations in the WordPress Admin**

At this time, there are a few known instances where text related to events in the WordPress admin is missing translations. Those instances include:

- **Date and Time Format:** This is located on the plugin Settings screen and includes the Date and Time Separator, Time Range Separator, and Compact Date Format settings.
- **Advanced Template Settings:** This is located on the same page just below the Date and Time Format settings. The two settings that allow you add content above and below the calendar do not respect WPML translations.

While there is no official fix for this, the WPML team has [documented a workaround](https://wpml.org/errata/the-events-calendar-admin-texts-do-not-translate/) that adds the following snippet to a theme’s 
```
functions.php
```

 file:

```
add_filter('tribe_get_single_option', 'tribe_options_multilingual', 20, 3);

function tribe_options_multilingual( $option, $default, $option_name ) {
  if (is_string($option)) {
    return apply_filters( 'wpml_translate_single_string', $option, 'admin_texts_tribe_events_calendar_options', '[tribe_events_calendar_options]' . $option_name);
  } else {
    return $option;
  }
}
```

## Translating Additional Fields

[Additional fields](https://docs.nexcess.com/software/the-events-calendar/custom-fields/) you create for your events with Events Calendar Pro are not included in the automatic translation by default. To make these additional fields available for translation, you’ll need to adjust some settings in WPML.

Follow these steps to ensure your additional fields are ready for translation:

1. Navigate to **WPML > Settings > Custom Fields Translation**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WPML_custom-fields-1024x471-1.jpg)

2. In the Custom Fields Translation section, search for the prefix 
```
_ecp
```

. This will filter the results to display only the additional fields from Events Calendar Pro.

3. Once the search results appear, simply check the ‘Translate’ checkbox for the fields you want to make translatable.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WPML_custom-fields_02-1024x253-1.jpg)

4. Translate the events: If you’ve enabled automatic translation for your site, WPML will handle this automatically. Otherwise, you can manually send posts or pages with custom fields for translation.
To do this, go to WPML → Translation Management. Select the events with the custom fields you want to translate. Choose your target languages and the translation method (automatic, self-translation, or assigning to another translator). Finally, click the Start translating button to begin the process.

## Translating Filter Bar

The default filters labels from Filter Bar will be automatically translatable via in the String Translation interface. However, if you are using custom filter labels, there’s a few other steps to be able to translate them.

1. Head over to **WPML → String Translation**.
2. Scroll all the way down of that page and look for the “Translate texts in admin screens” link.
![Settings in WPML String Translation to help with Filter Bar. See "Translate texts in admin screens » "](https://docs.nexcess.com/wp-content/uploads/2026/06/adminscreens.jpg)
3. Click on the “Translate texts in admin screens »” link and look for 
```
tribe_events_filters_current_active_filters
```

.
4. Click on the *+* sign to expand the 
```
tribe_events_filters_current_active_filter
```

.
![Setting up Filter Bar with WPML: Click on the + sign to expand the tribe_events_filters_current_active_filters twisty](https://docs.nexcess.com/wp-content/uploads/2026/06/active_filters.jpg)
5. Expand each of your custom active filters.
![Click on the + sign to expand each of your custom active filters twisties](https://docs.nexcess.com/wp-content/uploads/2026/06/customexpand.jpg)
6. In each of the newly expanded row, make sure the checkboxes for the 
```
title
```

 option is checked.
7. Click on the **Apply** button located at the bottom of the screen.

Once that is done, these strings will appear under your normal string translation interface.You can now translate your custom active filter titles to your liking!

## Translating Other Texts

If you find untranslated texts on your site, and there’s no dedicated section in the **Translation Dashboard** that contains this content, scroll down to the **Other texts (strings)** section.

This section contains texts from your theme and other WordPress plugins, including extensions and add-ons from The Events Calendar.

![Setting up post type translation](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-translation-dashboard-updated.jpg)

To translate texts in the **Other texts (strings)** section, simply select the texts you want to translate and follow the steps previously covered.

## Displaying Untranslated Content in Other Languages

If you’re using one of the non-compatible addons or extensions, you can still display this content in other languages – untranslated. Meaning, the content will appear in your default language across all languages.

To enable this option, head over to **WPML**→ **Settings**and scroll down to **Post Types Translation**. Locate the type of content you want to display untranslated in other languages and set its translation setting to **Translatable – use translation if available**.

![Setting up Post Types Translation with WPML](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-post-types.jpg)

## Setting Up Your Profile for Success

Some of our awesome customers have experienced issues with some of the elements of Events, Venues, and Organizers not being translated properly when toggling between languages.

Before this happens to you too, we highly recommend:

1. Heading over to your profile
2. Look for the **WPML language settings**section
3. Make sure you check the “Set admin language as editing language.” option.

![User-related WPML settings](https://docs.nexcess.com/wp-content/uploads/2026/06/wpml-user-settings.png)

## Emptying the WPML Cache and Preventing 404 Errors

Starting with version 3.5.3, WPML uses caching to offer awesome performance on multilingual sites.

With that in mind, sometimes this can also cause 404 error messages, especially after one of the following changes:

1. Upgrading one of our plugins
2. Activating a WPML option such as “Slug translations”

To resolve this, here is the recommended procedure:

1. Go to **WPML**→ **Settings**
2. Disable **Slug translations** and save
3. Re-enable **Slug translations** and save
4. Go to **Settings**→ **Permalinks**and flush permalinks

These steps will flush the WPML cache and avoid 404s errors in the calendar.

If that still does not work, after a quick database backup, try deactivating and reactivating all plugins related to The Events Calendar.

---

