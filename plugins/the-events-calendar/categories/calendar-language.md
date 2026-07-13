# Calendar Language

*Category from The Events Calendar documentation*

---

## How to Change the Language of Your Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/calendar-language/](https://docs.nexcess.com/software/the-events-calendar/calendar-language/)

The Events Calendar and its add-ons adapt to use the same language used by your WordPress installation. It will default to English, unless you run WP in a different language.

## How to Change the Language

1. You’ll need to know your language’s code. Each language has an official code that WordPress uses to reference it. To find this code, visit [this page](https://make.wordpress.org/polyglots/teams/) and look for your language’s code in the “WP Locale” column. For example, the code for German is DE_de.

![Finding your language's locale code](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2015-06-18-at-3.42.42-PM.jpg)

2. Make sure that **WordPress itself** has the files required to run your site in your language. Remember the language code you just looked up, in step 1 above? Here’s where you need it: go to */wp-content/languages* and look for language files with your language’s code. If you find them, WordPress supports your language. Nice!

3. Make sure the plugin language files you need are in place.  Go to the */lang* directory in the plugin files for whichever plugin you are trying to translate; there should be two files for each language code, a .po and a .mo file.

If your language files aren’t there, you’ll need to download them from [our translations site](http://translations.theeventscalendar.com/). From the site home, select the plugin that you want to get files for. Then find your language in the list and click to view the details. From that page, you can export the .po and .mo files you need. Once you’ve downloaded the files, place them in the */lang* folder for the relevant plugin.

Please note that if you are using any of our premium plugins (including Events Calendar Pro) you’ll need to have the files for that plugin as well as the translation files for The Events Calendar. If your language isn’t listed, you can [register as a user on our translations site](http://translations.theeventscalendar.com/) and submit changes right on the website.

4. On your site, go to *Settings → General*. Scroll down to the bottom of the page where it says Site Language. Select your language from the dropdown and save your changes.

5. Lastly, in your dashboard, go to *Settings → Permalinks* and clear your permalinks. Your site should now run in the language you enabled.

**Important:** Keep in mind that translations may not be 100% complete, or may only exist for some plugins. Further, any strings which are marked Yellow in glotpress have not been approved yet, and the updated version will not appear in the downloaded .po or .mo files until it is approved. You may still see some English on your site if this is the case.

Interested in updating a translation, or adding a new one altogether? If so, learn about updating and adding translations for premium plugins [here](https://theeventscalendar.com/knowledgebase/k/translating-the-premium-plugins/). If you’re interested in contributing to The Events Calendar instead, [head here for more information](https://docs.nexcess.com/software/the-events-calendar/translating-the-events-calendar/).

## Changing the Language of Your Calendar’s URL Slugs

The event slugs for your calendar’s URLs are controlled via settings at Events > Settings > General > Viewing. The URLs will always use the slugs defined there, even if you are using a different language for your site. The default slugs are in English. If you switch your site to another language, you probably also want to change the slugs to be in that language.

## Incomplete Translations

If you download and use a translation from [translations.theeventscalendar.com](http://translations.theeventscalendar.com/) and find that some things are still showing in English, it is probably because your language is not yet 100% translated.

The only way around this problem is to contribute missing translations for your language, or be patient and wait for other folks to do so. We check our translations site several times a week and approve new translation contributions as fast as possible. Then you just need to download the latest file version and add it to your site.

If you cannot wait for others to contribute and want to add your own translations, you can start submitting strings in a matter of minutes. [Check out our article on submitting translations](https://docs.nexcess.com/software/the-events-calendar/translating-the-events-calendar/).

👋 Note, that some themes might be overriding our templates and can use different wording in places. These strings can be translated via the theme and not our plugins.

---

