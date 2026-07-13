# Moving Your License Key

*Category from The Events Calendar documentation*

---

## Moving a License Key From One Site to Another

**Source:** [https://docs.nexcess.com/software/the-events-calendar/moving-your-license-key/](https://docs.nexcess.com/software/the-events-calendar/moving-your-license-key/)

Let’s say you change the domain name of your site. Or maybe your site no longer needs a calendar but you have another one that does. In either case, you want to move your plugin license key from one site to another because some license levels support a specific number of sites.

How does that work? It’s actually fairly simple.

When you purchase our products, [you’ll have access to a user account](https://theeventscalendar.com/my-account/downloads/) where you can download the plugins, locate your license keys, and manage your subscriptions. Head there and locate the plugin you want to transfer, taking note of the license key and registered sites that are displayed.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-10-16-at-2.59.21-PM.png)

### First, remove the existing site

The first thing you want to do on this screen is click the “Remove” option next to the URL of the site that no longer needs the license. Once you do this, the license will automatically be removed from the plugin settings screen in WordPress and the site is successfully unregistered.

### Next, register the other site

Did you take note of the license key on your account screen? Click it to copy it to your computer’s clipboard, then log into the WordPress admin for the site you want to move the license to.

From the the WordPress admin dashboard, navigation to Events → Settings → Licenses and paste your copied license key in the field for your licensed plugin.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-10-16-at-3.07.20-PM-1024x243-1.png)

The plugin will validate your license key after it has been entered. If the license validates successfully, then you’re done! Your site will now be listed in your account settings and is officially registered for automatic updates and support features.

If your license does not validate, then check it again just in case a number or two weren’t missed when copying it. If the problem persists and your license status is active, then please [reach out to our support team](https://theeventscalendar.com/support) so we can check it out.

## Exporting events to another site

Now that you have successfully moved your license over to another site, you can bring your events there as well. To do this, you can use a third-party plugin to export events and then import them using a CSV file into the new site.

To export data to CSV file format, the WP All Export [plugin](https://wordpress.org/plugins/wp-all-export/) can help you accomplish this task. There are two things to make note of:

1. Event description might contain quotes that are also used for the cell content as well. It’s best to run a search-replace in a spreadsheet software and change all 
```
"
```

 to 
```
'
```

 within the cell contents.
2. If there are more categories or tags assigned to an event in the export, the delimiter will be 
```
|
```

. These should be changed to 
```
,
```

 otherwise you will get weird category names.

Check out this guide on [Importing Calendar Data From a CSV File](https://docs.nexcess.com/software/the-events-calendar/import-events-csv/) for a full set of steps. You want to structure the CSV file to follow the approved data formats found in our [Sample Guide](https://docs.nexcess.com/software/the-events-calendar/import-events-csv/) for a successful import.

Then use the CSV import feature to import event information in this order: venues and organizers first, then events, followed by tickets if you have any.

---

