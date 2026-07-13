# Composer

*Category from The Events Calendar documentation*

---

## Using Composer with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/composer/](https://docs.nexcess.com/software/the-events-calendar/composer/)

Any of our premium plugins work with [Composer](https://getcomposer.org), allowing developers to install and manage them as dependencies in a development environment. This is a convenient way to develop locally by integrating the plugin repositories into your site’s repository without directly adding it to your project. It also makes plugin updates easier to manage and install as you develop.

In order to do this, you’ll need to generate a 
```
composer.json
```

 file for our plugins at the root of your project. This file contains variables that tell Composer what to install and details about what’s being installed. Let’s walk through what that file needs in it for Composer to fetch, install, and manage the plugin repositories in your own project.

## Locate the URL

The first thing you need is the URL of the plugin that you want to install. You can find this URL on your [Downloads](https://theeventscalendar.com/my-account/downloads/) page in your account. Right-click on **Download** and then click on **Copy Link**. That link is what you use in the URL field.

![Find the URL on the Downloads page at theeventscalendar.com to add a premium plugin to composer](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-07-16-at-1.14.33-PM.jpg)

Repeat this step for any other premium plugins that you’d like to add via Composer at the same time.

You can also create this URL manually with the plugin slug, version number, and license key.

The URL looks something like this:

```
https://evnt.is/fetch-{plugin-slug}?key={license-key}
```

…where 
```
{plugin-slug}
```

 and 
```
{license-key}
```

 are placeholders for you to fill in with your own information. Each of our premium plugins has specific URLs that you can utilize (though each one requires a license key to use):

| Plugin | URL |
| --- | --- |
| The Events Calendar Pro | https://evnt.is/fetch-ecp?key=LICENSEKEY |
| Event Tickets Plus | https://evnt.is/fetch-etp?key=LICENSEKEY |
| Community Events | https://evnt.is/fetch-ce?key=LICENSEKEY |
| Eventbrite Tickets | https://evnt.is/fetch-ebt?key=LICENSEKEY |
| Filter Bar | https://evnt.is/fetch-fbar?key=LICENSEKEY |

You can also specify the version number to fetch in your file by adding 
```
&version={VERSION}
```

 to the URL. If you choose not to include the version number, Composer will fetch the most recent version instead.

## composer.json file example

```
{
  "repositories": [
    {
      "type": "package",
      "package": {
        "name": "the-events-calendar/events-calendar-pro",
        "version": "5.8.0",
        "type": "wordpress-plugin",
        "dist": {
          "url": "https://evnt.is/fetch-ecp?key=[insert-key]&version=5.8.0",
          "type": "zip"
        }
      }
    }
  ],
  "require": {
    "the-events-calendar/events-calendar-pro": "5.8.0"
  },
  "extra": {
    "installer-paths": {
      "plugins/{$name}": [
        "type:wordpress-plugin"
      ]
    }
  },
  "minimum-stability": "dev"
}
```

---

