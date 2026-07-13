# How To Clear Your Site And Browser Cache Properly

*Category from The Events Calendar documentation*

---

## How to Clear Your Site and Browser Cache Properly

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-clear-your-site-and-browser-cache-properly/](https://docs.nexcess.com/software/the-events-calendar/how-to-clear-your-site-and-browser-cache-properly/)

## Why Clearing Cache Matters

Caching helps speed up your website by storing temporary data. However, outdated cache can cause problems such as:

- Not seeing recent changes to your site
- Broken layouts after theme or plugin updates
- Form or script errors after a migration or redesign

To fix these issues, you often need to clear both **site cache** and **browser cache**.

## 1. Clear Your Site Cache

If you’re using a CMS like **WordPress**, you likely have caching plugins or hosting-level cache. Here’s how to clear them:

### A. WordPress Caching Plugins

**WP Super Cache**

- Go to your WordPress dashboard.
- Navigate to the top header and click on **Delete Cache** menu as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WP-Super-Cache-Clear-Menu.jpg)

**W3 Total Cache**

- Go to your WordPress dashboard.
- Navigate to the top header and click on **Performance** ⇾ **Purge All Caches** menu as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/W3-Total-Cache-Clear-Menu.jpg)

**LiteSpeed Cache**

- In your WordPress dashboard, go to **LiteSpeed Cache > Toolbox**.
- Click **Purge All** to clear all cache types as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/LiteSpeed-Clear-Menu.jpg)

**WP Fastest Cache**

- Go to your WordPress dashboard.
- Navigate to the top header and click on **WP Fastest Cache** ⇾ **Clear All Cache** menu as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WP-Fastest-Cache-Clear-Menu.jpg)

**Breeze Cache**

- Go to your WordPress dashboard.
- Navigate to the top header and click on **Breeze** ⇾ **Purge All Cache** menu as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Breeze-Cache-Clear-Menu.jpg)

**WP-Optimize**

- Go to your WP Admin dashboard.
- Navigate to **WP-Optimize** ⇾ **Cache**⇾ **Purge Cache** as shown below:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/WP-Optimize-1.jpg)

Sometimes, simply clearing the plugin cache isn’t enough, as it can regenerate over time. We recommend excluding our plugins’ files and resources from caching to prevent issues. You can refer to our list of cache-specific guides here: [Caching with The Events Calendar](https://docs.nexcess.com/software/the-events-calendar/caching-with-the-events-calendar/)

### B. Hosting-Level Cache

Most managed WordPress hosts offer built-in caching systems:

**SiteGround**

1. Log in to Site Tools.
2. Go to **Speed > Caching**.
3. Click **Flush Cache**.

For more details on clearing SiteGround Cache, check out this [article](https://world.siteground.com/kb/clear-site-cache).

**Kinsta**

1. Log in to MyKinsta.
2. Go to your site’s **Caching** menu.
3. Click **Clear All Cache**.

For more details on clearing Kinsta Cache, check out this [article](https://kinsta.com/blog/wordpress-clear-cache/#clear-wordpress-cache-in-mykinsta).

## 2. Clear CDN Cache (If Using One)

**Cloudflare**

1. Log in to your Cloudflare dashboard.
2. Select your website.
3. Select **Caching** > **Configuration**.
4. Under **Purge Cache**, select **Purge Everything**. A warning window appears.
5. If you agree, select **Purge Everything**.

For more details on clearing Cloudflare’s CDN Cache, check out this [article](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything).

## 3. Clear Your Browser Cache

Here’s how to clear cache in popular browsers:

**Google Chrome**

1. Click the 3-dot menu.
2. Go to **Settings ⇾ Privacy and Security**.
3. Click **Delete Browsing Data**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Chrome-Merged-1-1024x379-1.jpg)

- 

**Mozilla Firefox**

1. Open the menu **⇾** **Settings > Privacy & Security**.
2. Under **Cookies and Site Data**, click **Clear Data**.
3. Finally, click **Clear**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Firefox-Merged.jpg)

**Safari (macOS)**

1. Enable **Develop** menu under **Preferences > Advanced**.
2. In the menu bar, go to **Develop > Empty Caches**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Safari-1.jpg)

**Microsoft Edge**

1. Click the 3-dot menu > **Settings > Privacy, Search, and Services**.
2. Click **Delete Browing data**.
3. Click **Choose what to clear**.
4. Select **Cached images and files** and click **Clear now**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Edge-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Edge-2.jpg)

### Pro Tip: Do a Hard Refresh

Sometimes a simple hard refresh clears up display issues:

- **Windows/Linux**: 
```
Ctrl + F5
```
- **macOS**: 
```
Cmd + Shift + R
```

### Still Having Issues?

Try the following:

- Try opening your site in incognito mode
- Use a different browser
- Flush DNS:
- **Windows**: Run 
```
ipconfig /flushdns
```

 in Command Prompt
- **macOS**: Run 
```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

 in Terminal

### Conclusion

Clearing cache is a simple but essential step to avoid outdated content or display issues on your site. Whether you’re using a caching plugin, CDN, or browser, this guide gives you the tools to troubleshoot caching effectively. For best results, follow your caching plugin’s compatibility guide.

---

