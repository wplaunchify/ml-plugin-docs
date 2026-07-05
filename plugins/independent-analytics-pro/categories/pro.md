# Pro

*Category from Independent Analytics Pro documentation*

---

## How to Change Your Password

**Source:** [https://independentwp.com/knowledgebase/pro/change-password/](https://independentwp.com/knowledgebase/pro/change-password/)

When you purchase Independent Analytics Pro, you will receive an email containing your download link, license key, and your username and password. Your username will be the email address used at checkout.

If you have lost the email with your password or need to reset it for another reason, you can visit the [Account page](https://independentwp.com/account) and click the **Forgot your password** link there. This will take you to a form where you can enter your email address to get a password reset link.

![Forgot password link](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1017/h:1024/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/03/forgot-password-link.png)

Alternatively, if you still have access to your account, you can change your password by logging into your account, then opening the **My Profile** menu and clicking the **Change Password** button there.

---

## Managing License Activations Across Staging and Development Environments

**Source:** [https://independentwp.com/knowledgebase/pro/managing-license-activations/](https://independentwp.com/knowledgebase/pro/managing-license-activations/)

If you purchased a license key for 1-3 sites, then you may exceed your activation limit by accident when activating Independent Analytics Pro on staging and development sites.

This guide will help you mitigate this issue, so you can keep your license key activated on your live websites.

## Activate your license on your live sites first

Things are easiest when you activate your license key on your live sites first. For instance, if you purchase a license for 3 domains, then activate it on all three of your live sites before you worry about any of the staging or development environments.

## Use recognized subdomains and TLDs when possible

Our licensing system recognizes a wide variety of subdomains and TLDs as staging/development environments. If the license is activated on a WP install using one of the recognized patterns, it won’t be counted towards your total activations.

For example, let’s say you’ve purchased IA Pro for 1 website and activated it on example.com. You could also activate it on staging.example.com, and this wouldn’t exceed your 1 website limit.

You can review the full list of recognized patterns here:

[Subdomains and TLDs that Don’t Count Towards License Activations](https://independentwp.com/knowledgebase/pro/staging-sites-license-activations/)

## Mark staging sites as duplicates

If you push your live site to a staging site, you’ll see this notice at the top of the admin dashboard when you login to the staging site:

![Freemius clone resolution](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:374/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/02/freemius-clone-resolution.webp)

You can click the **Duplicate Website** button to identify this site as a duplicate version of the live website. If you click this button or ignore the notice and don’t click any of the buttons, the Pro version will stay activated for two weeks without counting towards your license activation limit.

After that two-week period, you’ll see a similar set of options, but the first button will now say **Long-term Duplicate**.

![Freemius long term duplicate](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:334/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/02/freemius-long-term-duplicate.webp)

If you mark this site as a long-term duplicate, it will activate the license key, counting towards your total activation limit. If you ignore it, Independent Analytics Pro will revert to the free feature set only, and won’t count as a license activation.

If this is a temporary staging site and you don’t want to use a license activation, you can simply ignore the admin notice.

If you have an unlimited site license, you should choose the long-term duplicate option.

## Removing sites you can no longer access

There are times when you have a license activation on a site you can no longer access. For instance, imagine you create a staging site, activate the license there, and then delete the staging site. Now, you’re left with a non-existent website taking up one of your activations.

You can resolve this by logging into [your account](https://independentwp.com/account/) and navigating to the Websites menu. From there, select the site that no longer exists and click the **Deactivate** button in the **License** section.

![Remove license from site](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:680/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2026/02/remove-license-from-site.png)

That will immediately free up the activation that the site was previously using.

These tips should make license management easier, but if you still have any issues with your account, please reach out to us via our [contact form](https://independentwp.com/contact/), and we’ll be happy to help.

---

## How to Auto-Activate Your License Key On Client Sites (Bulk License Activation)

**Source:** [https://independentwp.com/knowledgebase/pro/auto-activate-license-key/](https://independentwp.com/knowledgebase/pro/auto-activate-license-key/)

If you are bulk-installing Independent Analytics Pro across many client sites, it can be a pain to manually activate the license key for each one.

There is an [unofficial Freemius plugin](https://github.com/squarecandy/freemius-auto-activation) you can use to enable license key auto-activation. Here’s how it works.

## Use the freemius-auto-activation plugin

Start by downloading the plugin from its [GitHub page](https://github.com/squarecandy/freemius-auto-activation).

![Download freemius auto activation plugin](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:627/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/10/download-freemius-auto-activation.png)

Next, install this plugin on the sites where you want to activate IA Pro.

Then, add these lines to each site’s wp-config.php file:

```
// freemius activation
define( 'FS_SHORTCODES', 'ia_fs' );
define( 'WP__IA_FS__LICENSE_KEY', '<your_license_key_here>' );
```

Remember to replace 
```
<your_license_key_here>
```

 with your Independent Analytics Pro license key.

Now, if you visit the **Analytics** menu, you’ll see that the license key has been activated. This process saves the license key in the database, so you can delete both this code and the 
```
freemius-auto-activation
```

 plugin from the site once the key has been saved to the DB.

---

## How to Update and Download Your Invoice

**Source:** [https://independentwp.com/knowledgebase/pro/update-your-invoice/](https://independentwp.com/knowledgebase/pro/update-your-invoice/)

When you purchase Independent Analytics Pro, you’re only required to enter your name and email at checkout. For this reason, your invoice will not include a company name or billing address. However, you can add this info to your account and download an updated invoice.

Start by logging into [your account here](https://independentwp.com/account).

Next, click on the **My Profile** menu in the left sidebar. You can enter your billing info on this page.

![Freemius profile page](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:527/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/02/freemius-my-profile.png)

Once your profile has been updated, visit the **Orders History** menu. You’ll see each of your purchases listed, and there will be a link on the right side to download an invoice. The new invoice will include all of the details entered into the **My Profile** page

---

## How to Access Your Account

**Source:** [https://independentwp.com/knowledgebase/pro/access-your-account/](https://independentwp.com/knowledgebase/pro/access-your-account/)

As an Independent Analytics Pro customer, you have access to the customer account dashboard here:

[Login to your account](https://independentwp.com/account/)

In the account portal, you can manage your license key, download new copies of Independent Analytics Pro, and manage your subscription.

![Account home](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:456/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2025/04/account-home.png)

---

## Subdomains and TLDs that Don’t Count Towards License Activations

**Source:** [https://independentwp.com/knowledgebase/pro/staging-sites-license-activations/](https://independentwp.com/knowledgebase/pro/staging-sites-license-activations/)

It’s common to have a local development environment and/or a staging site in addition to your production website.

If your staging/dev environment uses one of the patterns below, you can activate your license key on it without it counting towards your total activations.

## Recognized domain patterns

The following URLs are recognized as local development environments:

- 127.0.0.1
- localhost

The following subdomains are recognized as staging sites:

- local.
- dev.
- test.
- stage.
- staging.

The following TLDs are also recognized as belonging to staging sites:

- .dev
- .test
- .staging
- .local
- .example
- .invalid
- .myftpupload.com
- .ngrok.io
- .wpsandbox.pro
- .staging
- .staging.wpengine.com
- .dev.wpengine.com
- .wpengine.com
- .wpenginepowered.com
- .pantheonsite.io
- .cloudwaysapps.com
- .kinsta.com
- .kinsta.cloud
- .dev.cc
- .mystagingwebsite.com
- .tempurl.host
- .wpmudev.host
- .websitepro-staging.com
- .websitepro.hosting
- .instawp.xyz
- -dev.10web.site
- -dev.10web.cloud

If possible, try using one of the recognized patterns, as it makes license management much simpler.

If you are not able to use one of the above patterns, please refer to this guide for additional license management tips:

[Managing License Activations Across Staging and Development Environments](https://independentwp.com/knowledgebase/pro/managing-license-activations/)

---

## How to Deactivate a License Key Remotely

**Source:** [https://independentwp.com/knowledgebase/pro/deactivate-license-key-remotely/](https://independentwp.com/knowledgebase/pro/deactivate-license-key-remotely/)

If you activated Independent Analytics Pro on a website and you no longer have access to it, the license can be deactivated remotely.

To deactivate the license, start by logging into your account here: [Login to account](https://independentwp.com/account/)

Once logged in, you’ll find yourself in the **Websites** menu. From here, click on the website where you want to deactivate the license key. A menu will appear on the right side of the screen where you can click the red **Deactivate** link to disable the license key.

![Deactivate license key](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:553/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/08/deactivate-license-key.png)

The site will continue running the Pro plugin but will revert to the features available in the free version. You can then use the license on another domain instead.

---

## How to Cancel Your Subscription Auto-Renewal

**Source:** [https://independentwp.com/knowledgebase/pro/cancel-auto-renew/](https://independentwp.com/knowledgebase/pro/cancel-auto-renew/)

If you purchased an annual license, then it is set to auto-renew by default. You will receive an email a week before the renewal reminding you of the upcoming payment.

If you’d prefer to cancel your subscription, start by logging into [your account here](https://independentwp.com/account).

Your password was sent to you in the purchase receipt email, but if you have lost the email, you can use the “Lost password” link to set a new password.

Once logged in, click on **Renewals & Billing** in the sidebar. Then click on your subscription, and in the overlay menu, click the **Cancel Auto-Renew** link.

![Cancel auto renew](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:570/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/06/cancel-auto-renew.png)

When your license expires, Independent Analytics Pro will be downgraded to the free version. This means your stats will continue tracking, but you will lose access to all Pro features and new updates.

---

## How to White-Label Your License Key for Client Websites

**Source:** [https://independentwp.com/knowledgebase/pro/white-label-license-key/](https://independentwp.com/knowledgebase/pro/white-label-license-key/)

When running Independent Analytics Pro on your site, you’ll be able to see billing and other account info from the **Analytics > Account** menu in WordPress.

While that info is helpful for managing your own account, you may not want to share this kind of data on client sites where you’ve installed Independent Analytics Pro. For this reason, you can white-label your license key to hide the account info.

There are two different ways to white-label your license key.

## White-label from a client’s site

First, if you are logged into a client’s website and visit the **Analytics > Account** page, you’ll see a notice at the top of the page about hiding your account info. Click on the “Click here” link and your license will be white-labeled.

![White label license key](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:385/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2024/03/white-label-license-key.png)

This setting will sync with every other site using your license key within the next 24 hours. If you need the white-labeling to take effect immediately on another website, you can click the “Sync” link in the Account menu (pictured above).

## White-label from your account dashboard

You can also white-label your license key from the account dashboard on our website.

Start by logging into your account here:

[Login to your account](https://independentwp.com/account/)

You can find your account credentials in the email you received from us when you purchased Independent Analytics Pro.

Once logged in, visit the **Licenses** menu and then click on the license key you’d like to white-label. A menu will slide in on the right side, where you can check a box labeled **“This license is activated on my client’s site.”**

![White-labeling a license key](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:631/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/12/license-management.png)

After checking this box, your account info will no longer display anywhere inside the WP dashboard.

If you need to make any edits to your account in the future, please do so through the same [Account](https://independentwp.com/account/) page on our website.

---

## Can I Delete the Free Version?

**Source:** [https://independentwp.com/knowledgebase/pro/can-delete-free-version/](https://independentwp.com/knowledgebase/pro/can-delete-free-version/)

When you install Independent Analytics Pro, it will automatically uninstall the free version.

You are then safe to delete the free plugin as it is no longer needed.

---

## How Can I Upgrade My License for More Domains?

**Source:** [https://independentwp.com/knowledgebase/pro/upgrade-license/](https://independentwp.com/knowledgebase/pro/upgrade-license/)

If you’ve already purchased a copy of Independent Analytics Pro, you can upgrade your license to include more domains or switch from an annual subscription to a lifetime license.

In order to upgrade, start by visiting the [Pricing page](https://independentwp.com/pricing/). Locate the plan you want to upgrade to and click the **Buy Now** button to open the checkout modal.

Inside the checkout modal, click the link at the top-right labeled “Enter license key,” and paste your license key into the field there.

![Upgrade license](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:628/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2023/01/upgrade-license.png)

Once your license key has been entered, you’ll see a pro-rated discount based on your prior purchase(s). You’ll also be able to continue using the same license key for all your existing sites.

---

## Is it a subscription and do I have to renew?

**Source:** [https://independentwp.com/knowledgebase/pro/is-it-subscription/](https://independentwp.com/knowledgebase/pro/is-it-subscription/)

Like most premium WordPress plugins, Independent Analytics Pro has an annual subscription.

However, it is not a subscription like Spotify or Dropbox. **You will never lose access to your data or Independent Analytics Pro after your initial purchase**.

When you purchase Independent Analytics Pro, you’ll get the latest version and every update released for the next year. Your license will automatically renew for an additional year at the same price you paid initially.

## What happens if I cancel my subscription?

Essentially, nothing.

If you cancel, you just lose access to new versions of Independent Analytics Pro. You can continue using your current version forever.

For example, let’s say you have version 1.5, and your license expires today. Tomorrow, you will continue recording data as usual. Now let’s say version 1.6 comes out a month later with an awesome new feature you want. In order to get 1.6, you will need to renew your license. When you renew, you’ll get version 1.6 and access to every other update released over the coming year.

## Is there a lifetime license?

Yes, if you visit the [Pricing](https://independentwp.com/pricing/) page, you’ll see a **Lifetime** toggle button you can click to switch to lifetime pricing.

A lifetime license works exactly the way it sounds; you pay once and get Independent Analytics Pro and all future updates for life. There’s no subscription or further costs.

If something is still unclear to you about our pricing model, please [contact us](https://independentwp.com/contact/), and we’ll be happy to help.

---

## How to Install Independent Analytics Pro

**Source:** [https://independentwp.com/knowledgebase/pro/install-independent-analytics-pro/](https://independentwp.com/knowledgebase/pro/install-independent-analytics-pro/)

## Download the plugin

After you checkout, you will receive an email with your download link and license key.

Click the download link in your purchase receipt email, and you’ll get a file called **independent-analytics-pro.zip.**

**If you’re using the Safari browser**, it may automatically unzip the file so that you end up with a folder called independent-analytics-pro. If this happens, alt-click the folder and choose the “Compress” option to turn it back into a zip file.

If you did not receive this email, please [contact us](https://independentwp.com/contact/), and let us know the email address you used at checkout.

## Upload the plugin

Next, login to your site, visit the **Plugins > Add New** menu, and click the **Upload Plugin** button at the top of the page.

![](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:799/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/add-new-plugin.png)

In the uploader form that appears on the same page, choose the **independent-analytics-pro.zip** file and then click the **Install Now** button.

![](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:490/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/upload-plugin.png)

Once the installation is complete, you’ll see a page like this:

![](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:521/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/activate-plugin.png)

Click the **Activate Plugin** button to complete the activation.

With the plugin installed, the final step is to activate your license key.

The free Independent Analytics plugin will be deactivated automatically when you install the Pro version. You can delete the free plugin from your Plugins menu if you’d like. Only the Pro version is needed.

## Enter your license key

After clicking the **Activate Plugin** button in the previous step, you should now see this page requesting a license key:

![](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:733/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/license-activation-form.png)

You can find your license key in the same email that included your download link. Copy and paste it into the license key field and click the **Agree & Activate License** button.

In just a moment, you’ll be redirected to the Analytics dashboard, and the activation process is complete.

## If you don’t see the activation form…

If, for some reason, you don’t see the license activation form when you visit the **Analytics** menu, you can activate your license key from the **Plugins** menu instead.

Please visit the **Plugins** menu and scroll down to the **Independent Analytics Pro** plugin. Next, click on the **Activate License** link.

![Activate license link](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:auto/h:auto/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/activate-license.png)

This will open a modal where you can then enter your license key.

![License activation form](https://mlqmtwka8c9g.i.optimole.com/cb:_IbR.2056f/w:1024/h:617/q:mauto/f:best/https://independentwp.com/wp-content/uploads/2022/09/license-activation-form-1.png)

Once you’ve entered your license key, all features will be unlocked, and Independent Analytics Pro will be fully activated on your website.

## Here’s what to do next

After installing Independent Analytics Pro, you can watch one of our video tutorials to get started with the new features:

- [How to Use the Campaigns Report](https://independentwp.com/knowledgebase/campaigns/campaigns-dashboard/)
- [How to Use the Real-Time Analytics](https://independentwp.com/knowledgebase/real-time-analytics/real-time-analytics/)
- [How to Track Clicks on Your Website](https://independentwp.com/knowledgebase/click-tracking/click-tracking/)
- [How to Use the eCommerce Integration](https://independentwp.com/knowledgebase/woocommerce/woocommerce-integration/)
- [How to Track Form Submissions](https://independentwp.com/knowledgebase/form-tracking/track-form-submissions/)
- [How to Send the Automated HTML Email Report](https://independentwp.com/knowledgebase/email-report/email-reports/)

---

