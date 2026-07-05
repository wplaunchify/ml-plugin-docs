# Installation

*Category from Admin Menu Editor Pro documentation*

---

## Installation

**Source:** [https://adminmenueditor.com/documentation/installation/](https://adminmenueditor.com/documentation/installation/)

# Installation

                    
                    **New installation**

1. Download the admin-menu-editor-pro.zip file to your computer.
2. Go to *Plugins -> Add New -> Upload*, select the .zip file and click “Install Now”.
3. Activate the plugin.
4. Click “Enter License Key” and activate your key.

That’s it. To access the the menu editor, go to *Settings -> Menu Editor Pro*. The plugin will automatically load your current menu configuration the first time you run it.

**Upgrading from the free version**

To keep your existing settings, deactivate (but don’t delete) the free plugin before installing Pro. Then follow the “New installation” steps above. The Pro version will automatically import your settings.

After installation is finished, take a look at *Settings -> Menu Editor Pro* to confirm that your settings show up. Now you can safely uninstall the free version.

**MultiSite installation**

If you have WordPress set up in multisite (“Network”) mode, you can also network activate Admin Menu Editor Pro or install it as a global plugin. This will enable you to edit the Dashboard menu for all sites and users at once.

1. Download the admin-menu-editor-pro.zip file to your computer.
2. Unzip the file.
3. Create a new directory named 
```
mu-plugins
```

 in your site’s 
```
wp-content
```

 directory (unless it already exists).
4. Upload the 
```
admin-menu-editor-pro
```

 directory to 
```
/wp-content/mu-plugins/
```

.
5. Move 
```
admin-menu-editor-mu.php
```

 from 
```
admin-menu-editor-pro/includes
```

 to 
```
/wp-content/mu-plugins/
```

.

Plugins installed in the 
```
mu-plugins
```

 directory are treated as “always on”, so you don’t need to explicitly activate the menu editor. Just go to *Settings -> Menu Editor* and start customizing your admin menu.

**Notes**

- Instead of installing Admin Menu Editor Pro in 
```
mu-plugins
```

, you can also install it normally and then activate it globally via “Network Activate”. However, this will make the plugin visible to normal users when it is inactive (e.g. during upgrades).
- When Admin Menu Editor is installed in mu-plugins or activated via “Network Activate”, only the “super admin” user can access the menu editor page. Other users will see the customized Dashboard menu, but be unable to edit it.
- It is currently not possible to install Admin Menu Editor as both a normal and global plugin on the same site.

---

