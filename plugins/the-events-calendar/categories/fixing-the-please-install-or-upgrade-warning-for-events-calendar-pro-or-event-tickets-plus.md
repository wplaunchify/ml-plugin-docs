# Fixing The Please Install Or Upgrade Warning For Events Calendar Pro Or Event Tickets Plus

*Category from The Events Calendar documentation*

---

## Fixing the “Please Install or Upgrade” Warning for Events Calendar Pro or Event Tickets Plus

**Source:** [https://docs.nexcess.com/software/the-events-calendar/fixing-the-please-install-or-upgrade-warning-for-events-calendar-pro-or-event-tickets-plus/](https://docs.nexcess.com/software/the-events-calendar/fixing-the-please-install-or-upgrade-warning-for-events-calendar-pro-or-event-tickets-plus/)

If you’re seeing warnings in your WordPress dashboard such as:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-28-at-00.05.30-1024x163-1.jpg)

You’re not alone — this is a common situation, and fortunately, it’s easy to resolve.

These warnings usually appear when there’s a **version mismatch** between the core plugin ([The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) or [Event Tickets](https://wordpress.org/plugins/event-tickets/)) and its corresponding premium add-on ([Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/) or [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/)).

### Why This Happens

[Events Calendar Pro](https://theeventscalendar.com/products/wordpress-events-calendar/) and [Event Tickets Plus](https://theeventscalendar.com/products/wordpress-event-tickets/) are premium plugins that depend on their free versions:

- **Events Calendar Pro** requires the free **The Events Calendar** plugin.
- **Event Tickets Plus** requires the free **Event Tickets** plugin.

All of these plugins are developed to work in tandem, and each new version is built to be compatible with specific versions of its related plugin. If one plugin is updated and the other isn’t, you may run into compatibility issues — this can trigger the warning message or even cause some premium features to disappear or stop working.

### How to Resolve the Version Mismatch

**💡Important Notice:** Just to be completely safe we recommend that you [make a backup](https://codex.wordpress.org/WordPress_Backups) of your site before upgrading/downgrading plugins.

To fix this, you’ll need to make sure all related plugins are updated to the latest versions. Here’s how:

1. **Log in to your WordPress admin dashboard.**
2. Navigate to **Plugins → Installed Plugins.**
3. Look through the list for the following plugins:

- The Events Calendar
- Events Calendar Pro
- Event Tickets
- Event Tickets Plus
4. Check if any of these plugins show an “Update now” link below their name.
5. If updates are available:
- First, update the free plugins (**The Events Calendar** and/or **Event Tickets**).
- Then, update the premium plugins (**Events Calendar Pro** and/or **Event Tickets Plus**).

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2025-06-27-at-23.43.58-1024x203-1.jpg)

In some cases, you might not see the “Update now” option—due to site configuration, permissions, or other technical issues. If that happens, you can manually update the plugins instead.

**Updating Free Plugins Manually:**

You can download the latest versions of the free plugins directly from the WordPress Plugin Directory:

- [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/)
- [Event Tickets](https://wordpress.org/plugins/event-tickets/)

Download the ZIP file, then return to your WordPress dashboard and go to **Plugins → Add New → Upload Plugin** to install the new version.

**Updating Premium Plugins Manually:**

To download Events Calendar Pro or Event Tickets Plus:

1. Log in to your account at [theeventscalendar.com](https://theeventscalendar.com).
2. Go to **Account → Downloads & Licenses**.
3. Download the latest version of the plugin.
4. Return to **Plugins → Add New → Upload Plugin** and install the ZIP file.

If the plugin is already installed, WordPress will ask if you want to replace the current version — go ahead and confirm.

## What If You Don’t Have an Active License for Premium Plugin Updates?

If your **Events Calendar Pro** or **Event Tickets Plus** license has expired and you cannot update the premium plugin, you have two options:

1. **Renew Your License**

The best solution is to [renew your license](https://docs.nexcess.com/software/the-events-calendar/renewing-an-expired-license-subscription/) so you can receive updates and ensure compatibility.

2. **Downgrade the Free Plugin Instead**

If renewing isn’t an option right now, you’ll need to downgrade the free plugin (The Events Calendar or Event Tickets) to match the version of your premium plugin.

We recommend using this [guide](https://docs.nexcess.com/software/the-events-calendar/accessing-older-plugin-versions/) to help with downgrading. It walks you through how to safely access and install a previous version of the plugin.

---

