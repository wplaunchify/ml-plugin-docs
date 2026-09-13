# Multisite And Development Sites

*Category from Simple History documentation*

---

## Multisite, staging and development sites

**Source:** [https://simple-history.com/support/multisite-and-development-sites/](https://simple-history.com/support/multisite-and-development-sites/)

## The short version

- On multisite, every subsite running the plugin counts as one site.
- Staging, development and local copies are free and don’t count.
- Each add-on has its own license key and its own site count.

## Multisite: every subsite counts

Every subsite running the plugin counts as one site, so ten subsites using [Simple History Premium](https://simple-history.com/add-ons/premium/) means the 10-site tier. Subsites that don’t run the plugin don’t count. My reasoning, and the tier pricing, is on the [license terms](https://simple-history.com/license-terms/) page.

You enter each add-on’s key once, on the network’s main site, and that keeps that add-on updated across the network. Subsites point you there instead of showing a key field.

One gap I’m not happy about: if you run an add-on on a subsite but not on the main site, there is currently no way to enter its key from that subsite. Email me and I’ll activate it for you manually.

## Staging and development sites

One license covers your live production site plus every non-production copy of it: your laptop, staging, QA, pre-production.

Activate the key on production only. If you activate on a staging copy you’ll use up an activation and then hit [the activation limit error](https://simple-history.com/support/license-activation-limit/) on the site you actually meant to license.

Those copies don’t need a key — every feature works without one. What differs depends on how the copy was made:

- **Cloned from production** (a restored backup, which is how most staging sites are made): the key came along inside the database, so the copy keeps updating itself. Leave it be — but never press Deactivate on it, see below.
- **Built from scratch**: no key, so it won’t update itself. Download new versions from [your Lemon Squeezy order page](https://app.lemonsqueezy.com/my-orders/) and upload the zip over the installed plugin.

A copy with no key also shows a dismissible reminder in the Simple History sidebar saying no key is entered.

**The honest limitation:** activations are how my update server knows a site is licensed, so a dev site with no key can’t be told about new versions. I can’t change that today without spending one of your activations on a site you aren’t paying for. If that’s a real nuisance for how you work, the wp-config constant below is the fix, and telling me is what moves it up the list.

## Never press Deactivate on a copy

Your site stores the license key in its own database. My server stores how many activations that key has used. Clone the database and the copy carries production’s key and activation record with it — so pressing **Deactivate** on the clone releases *production’s* activation rather than the clone’s. That’s a bug in how activations are recorded, not intended behaviour.

Already pressed it? Activate again on production. If that gets refused, email [support@simple-history.com](mailto:support@simple-history.com) and I’ll clear it.

If you want a long-lived clone to stop checking for updates altogether, delete its stored key rather than pressing Deactivate:

```
wp option delete simple_history_plusplugin_message_simple-history-premiumCode language: Bash (bash)
```

Run that on the copy, never on production — on production it wipes the stored key while the activation stays used, which lands you on the activation limit error. Add 
```
--url=
```

 on multisite, and note the option name ends with the add-on’s plugin folder name, so adjust it for other add-ons.

## Can I put the license key in wp-config.php?

Not today. If you build your environments from code, tell me — it’s the strongest argument for adding it, and anything that ships shows up in the release notes.

*Last updated: 8 September 2026.*

---

