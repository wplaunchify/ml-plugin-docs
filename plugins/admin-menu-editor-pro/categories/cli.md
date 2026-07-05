# Cli

*Category from Admin Menu Editor Pro documentation*

---

## Command-Line Interface

**Source:** [https://adminmenueditor.com/documentation/cli/](https://adminmenueditor.com/documentation/cli/)

## Command-Line Interface

                    
                    You can use some Admin Menu Editor Pro features from the command line. The plugin adds the 
```
admin-menu-editor
```

 command to WP-CLI. To get started, install [WP-CLI](http://wp-cli.org/) and run this command for a list of options:

```
wp help admin-menu-editor
```

Here’s a summary of the available subcommands and a few examples.

- [activate-license](#activate-license)
- [deactivate-license](#deactivate-license)
- [license-status](#license-status)
- [export](#export)
- [import](#import)
- [reset-plugin-access](#reset-plugin-access)

## activate-license

Activate a license key on the site.

```
# wp admin-menu-editor activate-license ABC123
Success: Success! This site is now licensed.
```

**Tips**

It’s safe to run this command multiple times. Activating the same license key twice (or twenty times) on the same site will not break anything. As far as license limits are concerned, the system tracks the number of unique site URLs, not the total number of key activations.

## deactivate-license

Remove the current license from the site.

```
# wp admin-menu-editor deactivate-license
Success: Success! The current license has been removed.
```

## license-status

Display information about the currently active license.

```
# wp admin-menu-editor license-status
License found : Yes
Licensed URL  : http://localhost/test
Status        : valid
Expires       : 2016-01-01T06:42:06+00:00
License key   : Not stored in the WordPress database
Site token    : T56KB0XYZ380SLPVGGPAEHK1O2MOMNT4
```

## export

Export the plugin configuration as JSON.

```
# wp admin-menu-editor export settings.json --all
Success: Export completed. 105830 bytes written.
# wp admin-menu-editor export --output
{"format":{"name":"Admin Menu Editor configuration container","version":"1.0"},"settings":... (+ more code)
```

**Options**

- ```
<file>
```

 – Pass the export file name as the first argument.
- ```
--all
```

 – Export all settings. For backward compatibility reasons, the default is to export only the admin menu configuration.
- ```
--output
```

 – Dump the export data to the console instead of saving it as a file.
- ```
--file=<file>
```

 – An alternative way to specify the export file name.
- ```
--pretty
```

 – Indent the JSON output to make it more readable.

## import

Import plugin configuration from a JSON file.

```
# wp admin-menu-editor import settings.json
Importing settings...
global: OK, 6 options imported
admin-menu: OK
metaboxes: OK
dashboard-widget-editor: OK
redirector: OK
plugin-visibility: OK
role-editor: OK
tweaks: OK
Success: Import completed.
```

**Tips**

- This command will overwrite your existing settings without asking for confirmation, so make a backup first.
- Optionally, you can use the option 
```
--what=module1,module2,...
```

 to specify which parts of the configuration to import. Run 
```
wp admin-menu-editor list-exportable-modules
```

 for a list of available modules.

## reset-plugin-access

Reset the “who can access this plugin” setting to the default value. The default is either “Super Admin” (in Multisite) on “Anyone with the “manage_options” capability” (on regular sites).

```
# wp admin-menu-editor reset-plugin-access
Success: Access permissions changed from "specific_user" to "manage_options".
```

---

