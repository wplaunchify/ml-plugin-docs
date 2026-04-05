# Installation

*Category from Redirection documentation*

---

## Installation

**Source:** [https://redirection.me/support/installation/](https://redirection.me/support/installation/)

#### Requirements

The plugin has the following requirements:

- WordPress 5.3 or greater
- PHP 5.6 to 8.1
- Permalink support

It will run on any server, such as Apache, Nginx, and even IIS, provided you have [WordPress permalinks](https://codex.wordpress.org/Using_Permalinks) already running and requests for the URLs you want to redirect are being served by WordPress.

#### Installing The Plugin

Installation of Redirection is as simple as:

- Go to the **Plugins** page in your WordPress admin
- Click **Add New**
- Type 
```
redirection
```

 into the search box
- Click **Install Now**

![](http://redirection.me/wp-content/uploads/2017/11/install_redirection-1024x526.png)

#### Installing The Plugin Manually

If you want to install the plugin manually then follow the standard plugin installation steps:

- [Download the plugin](https://downloads.wordpress.org/plugin/redirection.zip) from WordPress.org
- Unzip the plugin file
- Copy the plugin directory to your 
```
wp-content/plugins
```

 directory (using FTP, for example)
- Go to the **Plugins** page in your WordPress admin
- Activate the plugin

![](http://redirection.me/wp-content/uploads/2017/11/activate_plugin.png)

If you are using WP CLI you can also do:

```
wp plugin install redirection
```

#### Installing The Plugin on Multisite

Redirection can be installed on individual sites within a multisite, or it can be installed through the network admin and will be activated for all sites.

Note that each site will have it’s own set of redirects.

---

