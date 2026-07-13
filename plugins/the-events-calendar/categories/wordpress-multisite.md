# Wordpress Multisite

*Category from The Events Calendar documentation*

---

## Using The Events Calendar on WordPress Multisite

**Source:** [https://docs.nexcess.com/software/the-events-calendar/wordpress-multisite/](https://docs.nexcess.com/software/the-events-calendar/wordpress-multisite/)

Running **The Events Calendar**on a WordPress multi-site (network) installation introduces unique considerations. Multi-site setups allow multiple sites to share a single WordPress installation. This guide covers best practices, common issues, and configuration tips.

## Why Multi-site Considerations Matter

In a network environment, you may need to manage:

- Multiple calendars across sub-sites
- Network-level plugin activation
- Permissions for site admins versus network admins

Without proper planning, multi-site installations can lead to:

- Conflicting data between sites
- Plugin activation or update issues
- Inconsistent templates or layouts

## #1: Network Activation vs Single-Site Activation

You can activate The Events Calendar in a network installation in two ways:

1. **Network Activation**
- TEC is active on all sites in the network by default.
- Pros: No need to activate on each sub-site individually.
- Cons: Limited flexibility if some sites don’t require events.
2. **Single-Site Activation**
- Activate TEC individually per sub-site.
- Pros: Each site can manage its own calendar independently.
- Cons: More manual setup and management required.

> 💡 Recommendation: Use single-site activation if only some sub-sites need events. Use network activation if all sites will use TEC consistently.
> 
> 
> 
> Premium products such as Events Calendar Pro require a multisite license.

## #2: Event Data Scope

TEC stores events in the **database per site**, not across the network. This means:

- **Events are site-specific** unless you use a shared database table plugin or custom code.
- **Tickets and RSVPs** are also site-specific. They cannot be shared natively across sites.

> ⚠️ Do not assume events will appear on other sub-sites automatically.

## #3: Managing Permissions in Multi-site

- **Network Admins**: Can install and network-activate TEC but do not automatically control event data on sub-sites.
- **Site Admins**: Manage events on their specific site.
- **Editors/Authors**: Permissions behave the same as single-site, but only on their sub-site.

## #4: Template Overrides & Themes

Template overrides should be **handled per sub-site**:

- Each site’s theme can [override TEC templates](https://docs.nexcess.com/software/the-events-calendar/customize-template-files/) in 
```
/wp-content/themes/your-theme/tribe/
```

.
- Network-activated themes may share templates; changes can affect multiple sites.
- Test template changes on staging sub-sites before applying network-wide.

> 💡 Use child themes for network-safe template overrides.

## #5: Updates & Plugin Compatibility

- **Plugin Updates**: Network updates affect all sites; ensure all sub-sites are compatible.
- **Add-ons & Extensions**: Must also be network-compatible if TEC is network-activated.

## #6: Cron Jobs & Background Tasks

- Background jobs (Action Scheduler) run **per site**.
- Ensure cron schedules do not conflict or overload the server.
- For large networks, consider using a **real cron setup** rather than WordPress pseudo-cron to handle scheduled tasks reliably.

## #7: Recommendations for Large Networks

| Recommendation | Details |
| --- | --- |
| Backup Strategy | Backup each sub-site separately to prevent data loss. |
| Testing Environment | Maintain a staging multi-site network for testing updates and template changes. |
| Network Monitoring | Use monitoring tools per site or network-wide to track performance. |

---

