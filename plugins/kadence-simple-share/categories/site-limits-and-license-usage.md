# Site Limits And License Usage

*Category from Kadence Simple Share documentation*

---

## Using Your License on Staging and Development Sites

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-general/site-limits-and-license-usage/](https://www.kadencewp.com/help-center/docs/kadence-general/site-limits-and-license-usage/)

You do not need a second license to test on a staging or development site. Your Liquid Web software plan limits the number of live sites you can activate, but sites on the approved domains and patterns listed below do not count toward that limit.

## How it works

When you activate your license on a site, our licensing system checks the site’s domain. If the domain matches one of the patterns below, the site is treated as a staging or development site:

- It still receives plugin updates.
- It does not use one of your site activations.
- You will not see an “out of installs” notice for it.

If the domain does not match any pattern, the site is treated as a live site and counts toward your limit.

In the patterns below, * stands for any text. For example, staging.* matches staging.example.com, and *.local matches mysite.local.

## Whitelisted domains and patterns

### Local environments and testing domain endings

| Pattern |
| --- |
| localhost (any port, for example localhost:8888/example) |
| 127.0.0.1 |
| *.local, local.* |
| *.localhost |
| *.localnet |
| *.test, test.* |
| testing.*.* |
| *.dev |
| *.example |
| *.invalid |
| *.dev.cc |
| *.ngrok.io (tunneling) |

### Development naming patterns

| Pattern |
| --- |
| dev.*, *.dev.* |
| wpdev.*, webdev.*, devsite.* |
| dev-*, *-dev.* |
| qa-* |
| wp-maint.* |

### Staging naming patterns

| Pattern |
| --- |
| staging.*, www.staging.* |
| *.staging, *.staging.* |
| staging2.*.* |
| stage.*, *.stage, *.stage.* |
| *.stage.site |
| sandbox.* |
| composer.* |
| beta.* |

### Hosting provider staging and temporary URLs

| Provider | Pattern(s) |
| --- | --- |
| Nexcess | *.nxcli.net, *.nxcli.io |
| WP Engine | *.wpengine.com, *.staging.wpengine.com, *dev.wpengine.com, *.wpenginepowered.com |
| GoDaddy | *.myftpupload.com |
| Bluehost | *.mybluehost.me |
| DreamHost | *.dreamhosters.com, *.dream.press |
| LightningBase | *.lightningbasehosted.com |
| WordPress.com | *.wpcomstaging.com |
| WordPress VIP | *.go-vip.net |
| Kinsta | *.kinsta.cloud, staging-*.kinsta.com |
| Flywheel | *.flywheelstaging.com, staging.*.flywheelsites.com |
| Pantheon | *.pantheonsite.io, *.panth.io, *.pantheonlocal.com |
| SiteGround | staging*, www.staging*, *sg-host.com |
| Cloudways | *.cloudwaysapps.com, *.cloudwayssites.com |
| WPMU DEV | *.staging.wpmudev.host |
| WP Stagecoach | *.wpstagecoach.com, *.wpsc.site |
| RAIDBOXES | *.myraidboxes.de, *.myraidbox.io, *.myrdbx.io |
| Lando | *.lndo.site |
| BlogVault | *.wpstage.net |
| Pressable | *.mystagingwebsite.com |
| DDEV | *.ddev.site |
| Pagely | *.pressdns.com |
| Krystal | *.onyx-sites.io |
| xCloud | *.wp1.host, *.wp1.site, *.wp1.sh |
| Plesk | *.plesk.page |
| Rapyd Cloud | *.rapydapps.cloud |
| CloudAccess.net | *.cloudaccess.host |
| Hostinger | *.hostingersite.com |
| Other temporary URLs | *.tempurl.host, *.staging.tempurl.host, *.pluginsupportwp.com |

### Stellar owned domains

| Pattern |
| --- |
| *.tribe, *.tri.be |
| *.theeventscalendar.com |
| *.loxi.io |

## Examples of domains that do not count toward your limit

- dev.mysite.com
- staging.hello.net
- practice-site.staging.wpengine.com

## Examples

| Sites using one license | Works? | Why |
| --- | --- | --- |
| example.com and example.test | Yes | example.test matches *.test, so only example.com counts. |
| example.com and staging.example.com | Yes | staging.example.com matches staging.*. |
| example.com, example.test, example.staging, example.local, and localhost:8888/example | Yes | Every site except example.com matches a pattern. All sites get updates. |
| example.com and devexample.com | No, on a single site license | devexample.com does not match any pattern, so it counts as a second live site. |

## Product specific notes

**Promoter (The Events Calendar):** Promoter does not work on a site that uses one of the whitelisted domains or patterns above. To set it up on a live site, see Getting Started with Promoter.

**Seating (Event Tickets):** Seating follows different rules on staging domains. See the section at the bottom of Connecting Event Tickets to the Seating Builder. We do not recommend cloning a site with seating already set up between production and staging.

## My staging site’s domain does not match any pattern. What can I do?

A domain that does not match a pattern above is treated as a live site and counts toward your limit. You have these options:

- Use a matching domain for the staging site. For example, set it up as staging.yoursite.com or yoursite.test instead of a custom name.
- Update the staging site manually. Keep the license active on your live site and download the latest plugin files from your account to update the staging site by hand. See Manual Plugin Updates.
- Move the license between sites. Disconnect the license from the first site so you can activate it on another site. See Manage License Activations and Connected Sites.
- Request a new pattern. If your domain follows a pattern that many customers are likely to use, contact support and we will consider adding it. This can take some time, and we do not add patterns that only apply to a single customer.

## Related articles

- [Manage License Activations and Connected Sites](https://docs.nexcess.com/software/accounts-licensing/manage-license-activations-and-connected-sites/)
- [Manage Your Subscriptions](https://docs.nexcess.com/software/accounts-licensing/manage-your-subscriptions/)
- [Download Plugin and Theme Files](https://docs.nexcess.com/software/accounts-licensing/download-plugin-and-theme-files/)

---

