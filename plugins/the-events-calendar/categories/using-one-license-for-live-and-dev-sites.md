# Using One License For Live And Dev Sites

*Category from The Events Calendar documentation*

---

## Using One License for Both a Live and Local Development Site

**Source:** [https://docs.nexcess.com/software/the-events-calendar/using-one-license-for-live-and-dev-sites/](https://docs.nexcess.com/software/the-events-calendar/using-one-license-for-live-and-dev-sites/)

👋 Please note, Promoter will not work if your site is using one of the below whitelisted domains / patterns. To get started with Promoter please refer to [this article](https://docs.nexcess.com/software/the-events-calendar/configure-promoter/).

Seating also has some different rules when using a Staging domain, this is detailed at the bottom of this page more: [Connecting to Seating.](https://docs.nexcess.com/software/the-events-calendar/seating-builder/)  Cloning sites with seats that are currently set up between Production and Staging is not recommended.

Users often ask, “Do I need a second license if I want to test things out on a staging or development server?”

In most simple cases a single license will suffice. In fact, if your domain name matches any of the following patterns our system will automatically assume that you are working on a staging site (and will not count it against the number of installations allowed by your license key):

## Whitelisted domains and patterns

### TLDs (domain endings)

- ```
*.local
```
- ```
*.localhost
```
- ```
*.staging
```
- ```
*.stage
```
- ```
*.test
```
- ```
*.tribe
```
- ```
127.0.0.1
```
- ```
*.dev.cc
```

### Subdomains (domain prefixes)

- ```
dev.*
```

, 
```
*.dev.*
```
- ```
wpdev.*
```
- ```
webdev.*
```
- ```
test.*
```
- ```
staging.*
```
- ```
*.staging.*
```
- ```
stage.*
```
- ```
*.stage.*
```
- ```
devsite.*
```
- ```
sandbox.*
```
- ```
composer.*
```

### Staging domains of hosting providers

- ```
*.nxcli.net
```

, 
```
*.nxcli.io
```

 *(for Nexcess)*
- ```
*.wpengine.com
```
- ```
*.staging.wpengine.com
```
- *
```
.wpenginepowered.com
```
- ```
*.myftpupload.com
```
- ```
*.mybluehost.com
```
- ```
*.dreamhosters.com
```
- ```
*.lightningbasehosted.com
```
- ```
*.kinsta.cloud
```
- ```
*.flywheelstaging.com
```
- ```
staging.*.flywheelsites.com
```
- ```
*.pantheonsite.io
```

, 
```
*.panth.io
```
- ```
staging*, www.staging*, *sg-host.com
```

 *(SiteGround)*
- ```
*.wpstagecoach.com
```
- ```
*.wpsc.site
```

 *(WP Stagecoach)*
- ```
*.cloudwaysapps.com
```

 *(Cloudways)*
- ```
*.cloudwayssites.com
```

 *(Cloudways)*
- ```
*.myraidboxes.de
```

 *(RAIDBOXES.io)*
- ```
*.myraidbox.io
```

 (*RAIDBOXES.io)*
- ```
*.myrdbx.io
```

*(RAIDBOXES.io)*
- ```
*.lndo.site
```

 *(Lando dev environment)*
- ```
*.wpstage.net
```

 *(BlogVault)*
- ```
*.mystagingwebsite.com
```

 *(Pressable)*
- ```
*.ddev.site
```

 *(DDEV.com)*
- ```
*.pressdns.com
```

 *(pagely.com)*
- ```
*.onyx-sites.io
```

 *(Krystal)*
- ```
*.go-vip.net
```

 *(WordPress.com VIP sites)*
- ```
*.wp1.host
```

, 
```
.wp1.site
```

, 
```
wp1.sh
```

 *(xCloud)*
- ```
*.plesk.page
```

 *(Plesk)*
- *.
```
rapydapps.cloud
```

 *(Rapyd Cloud)*
- ```
*.cloudaccess.host
```

 *(CloudAccess.net)*
- ```
*.hostingersite.com
```

 *(Hostinger)*

### Ignored domain examples

- ```
dev.mysite.com
```
- ```
staging.hello.net
```
- ```
eventscalendar.local
```
- ```
practice-site.staging.wpengine.com
```

## Give me some examples!

If you were to try and use the same personal license key on both 
```
example.com
```

 and 
```
example.test
```

, this would work fine! Both sites would receive updates, and you would not get any “out of installs” notices.

However, if you tried to use the same personal License key on both 
```
example.com
```

 and 
```
devexample.com
```

, this would **not** work—only one site would be able to use the license key.

Last but not least, if you tried to use the same Personal License key on 
```
example.com
```

, 
```
example.test
```

, 
```
example.staging
```

, 
```
example.local
```

, and 
```
localhost:8888/example
```

, this would work fine! All sites would get updates, and you would not get any “out of installs” notices.

## My dev site’s URL doesn’t match any of the patterns listed above. Will this work?

Unfortunately, no, at this time we only support the specific patterns listed above. Everything else is assumed to be a “live” site and will count against your install limit.

## What can I do if I want to use a license on a dev site that doesn’t fit the criteria listed above on this article?

If your dev site’s domain fits **a pattern likely to be used by other customers** — like 
```
sandbox.*
```

 for example — contact us and we’ll consider adding an exception. Keep in mind that this can take a bit of time and note that we will not add custom patterns to the exception list.

Another option is to keep the license on your live site for easy updates, and perform [manual updates](https://docs.nexcess.com/software/the-events-calendar/manual-updates/) on your staging site by downloading the latest from your account.

You can also [move the license key](https://docs.nexcess.com/software/the-events-calendar/moving-your-license-key/) between sites–just make sure that you’ve disconnected the license from the original site before trying to add it on another.

---

