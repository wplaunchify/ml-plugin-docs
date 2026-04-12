# Account Billing

*Category from LearnDash documentation*

---

## LearnDash Licensing & Management

**Source:** [https://learndash.com/support/kb/resources/account-billing/learndash-licensing-and-management/](https://learndash.com/support/kb/resources/account-billing/learndash-licensing-and-management/)

**LearnDash Licensing and Management** controls how LearnDash licenses and official add-ons are handled inside WordPress. It provides a central location to activate a license, manage add-ons, and control which users can view licensing details.

Starting with **LearnDash version 4.18.0**, licensing is included directly in the core LearnDash plugin. A separate licensing plugin is no longer required when using the latest version.

This article explains how Licensing and Management work and how administrators can use them to manage LearnDash licenses and add-ons.

## Before You Begin

Before using Licensing and Management, the following requirements should be met:

- LearnDash is installed and activated on the WordPress site
- A valid LearnDash license and account email are available
- The site is running **LearnDash 4.18.0 or later**, or the Licensing and Management add-on can be installed manually if using a version earlier than 4.18.0

Licensing is required to receive updates, access official add-ons, and get support from the LearnDash team.

## How Licensing and Management Is Installed

Licensing and Management can be installed in one of two ways, depending on the LearnDash version in use.

### Automatic Installation (Recommended)

When LearnDash is updated to the latest version, Licensing and Management is automatically included and activated. No additional setup is required. This option is available for sites running **LearnDash 4.18.0 or later**.

### Manual Installation (Older Versions)

Sites using older versions of LearnDash can manually install Licensing and Management.

1. Log in to the [LearnDash account](https://account.learndash.com/)
2. Open the **Downloads** tab
3. Download the Licensing and Management plugin
4. Upload and activate the plugin on the WordPress site

Once activated, licensing and add-on management features become available inside the LearnDash settings.

## The LearnDash Licensing and Management Features

Licensing and Management combines several tools into one location, allowing administrators to manage licenses and add-ons without switching between multiple screens.

The main areas include:

- Add-ons management
- License settings
- License visibility controls

### Managing LearnDash Add-Ons

The **Add-ons** screen displays all official LearnDash add-ons that are installed or available for the site.

#### Viewing and Managing Add-Ons

From the Add-ons screen, administrators can:

- View installed and available add-ons
- Check add-on versions
- Activate or deactivate add-ons
- Update add-ons
- Delete add-ons that are no longer needed

Bulk actions are available for managing multiple add-ons at the same time.

#### Using Bulk Actions

1. Select one or more add-ons from the list.
2. Choose an action from the bulk actions dropdown.
3. Click **Apply** to complete the action.

### LearnDash Premium Add-ons

LearnDash Premium add-ons can be purchased and installed under the LearnDash Premium Add-ons tab.

### Third-Party Add-Ons

The **Third Party** tab displays plugins created by external developers that work with LearnDash. These plugins are not maintained by LearnDash. Support requests and issues should be directed to the plugin author.

There is also a link to our Documentation page in the top-right corner, which you can visit to check out the Knowledge Base.

### Licensing and Management Settings

The LearnDash Licensing and Management settings house the new licensing system, replacing the previous licensing verification system. It also offers an option that gives you control over who can view the licensing system among your users.

### License Visibility

By default, only the administrator who installed LearnDash can view licensing details.

To allow other users to view and manage licensing:

1. Navigate to **LearnDash LMS > Settings > Advanced > License Visibility**
2. Add the user who should have access
3. Click +**ADD** button to save the change

If a user who hasn’t been added tries to access the license page, they will see this message. That user also can’t view Add-ons or receive LearnDash updates.

Now, the users you added will be able to view Licensing and Management and manage your add-ons and licenses.

### Managing the LearnDash License

License information is managed from the LMS License screen.

To access license settings, go to **LearnDash LMS > Settings > LMS License**. From this screen, administrators can:

- Enter and activate a license
- Replace an existing license
- Revoke a license from the site

An active license is required to receive updates, access official add-ons, and use LearnDash support.

## Moving a License to a New Site

A LearnDash license can be transferred from one site to another. The license must be removed from the old site before it can be used on a new one.

### Remove the License From the Old Site

1. Log in to the old site’s WordPress admin area
2. Navigate to **LearnDash LMS > Settings > LMS License**
3. Click the “SIGN OUT” button to remove the license email and license key

### Remove the Site From the LearnDash Account

1. Log in to the LearnDash account
2. Open the **Sites** tab
3. Delete the domain associated with the old site

### Activate the License on the New Site

1. Download the latest version of LearnDash from the **Downloads** tab in the LearnDash account
2. Install and activate LearnDash on the new site
3. Navigate to **LearnDash LMS > Settings > LMS License**
4. Enter the license email and license key
5. Click **Update** to activate the license

Once activated, the license is fully transferred to the new site.

**LearnDash Licensing & Management plugin won’t activate or gives a “fatal error” when trying to activate.**

With the release of LearnDash 4.18.0, the licensing process and features are now integrated directly into the core LearnDash plugin.
As a result, the separate LearnDash Licensing and Management plugin is no longer needed. You can safely delete it after updating to version 4.18.0 or the latest version.

For more details on what’s included in this update, you can check out the full changelog here: [https://www.learndash.com/release-notes/](https://www.learndash.com/release-notes/)

---

## License

**Source:** [https://learndash.com/support/kb/resources/account-billing/license/](https://learndash.com/support/kb/resources/account-billing/license/)

## How do I activate my license key?

A LearnDash LMS license provides access to premium features that help you create, manage, and sell online courses with ease. You’ll have access to updates, technical support, and integrations with other tools, while also offering advanced customization options. With a valid license, you can scale your platform as your courses and user base grow, all while maintaining security and reliability.

For detailed instructions on activating your license key, please [see this article](https://learndash.com/support/docs/getting-started/installation/#activate_your_license). If you’re setting up LearnDash for the first time, you can easily activate your license by following the steps in the [Onboarding Wizard](https://learndash.com/support/docs/getting-started/the-onboarding-wizard/) article. If you’d like to update your license without going through the wizard, you can:

1. Navigate to LearnDash LMS > Settings
2. Click on LMS License tab.

**NOTE**: LearnDash will still function properly even with an invalid license. A valid license is needed in order to continue to receive product updates, security patches, and support.

## Why is my license invalid?

This can happen for a variety of reasons, like an expired license, a mismatch between your license key and site URL, or a connection issue with the Learndash licensing server. By following the steps below, you’ll be able to fix the problem quickly and get your LMS back up and running smoothly. If your active license still shows “Please enter a valid license or buy one now,” the following troubleshooting steps can help:

### Verify Your License Status

You can verify your license status by navigating to LearnDash LMS > Settings > LMS License in your WordPress dashboard. Then, make sure your license key is correctly entered and marked as active.

### Verify License Number and Email

Confirm that the settings entered under LearnDash LMS and Settings and LMS License are exactly the same as what is in your account.

- The email address in the license field should match the email address on [your account](https://account.learndash.com/).
- Your license key should match exactly what is on [your subscription details](https://account.learndash.com/subscriptions/).
- If you have ProPanel, double-check that you didn’t accidentally insert the ProPanel license key for the LearnDash LMS license.

### Re-enter License Key

If the license status appears incorrect, re-enter your license key and save the settings to refresh the connection with LearnDash servers.

### Check for Extra Spaces

Make sure there are no extra spaces before or after your license key when entering it.

### Check Number of Domains

Make sure that you are not exceeding the number of domains allowed by your license in your LearnDash Account. For example, if you have a 1-site license, if it has been installed on one site, any site afterwards will display an error. You can delete any other sites from [your subscriptions details page](https://account.learndash.com/subscriptions/).

1. Log into the Account page, select Subscriptions
2. Select the gear icon (Manage)
3. Navigate to Sites > Remove
4. Click Remove to delete any domain you are no longer using

### Check for Server Blocks

In some cases, server settings or firewalls may be blocking the connection to LearnDash servers. You may need to check in with your hosting provider for more details. To check if server settings or firewalls are a potential issue, you can:

1. Install [Query Monitor](https://wordpress.org/plugins/query-monitor/) (free plugin)
2. Navigate to LearnDash LMS and Settings and LMS License

If you notice the Query Monitor top toolbar menu turn red, check to see if the LearnDash LMS license calls are being blocked by your server by navigating to the error.

- **401 errors** indicate that the call is blocked. If you see this, contact your hosting provider and request that they let these calls through.
- **Timeout errors** may indicate you need to increase your site and PHP memory. Navigate to LearnDash LMS > Settings > Support and look to see if either PHP or Memory are listed in red. If so, contact your hosting provider to increase these values.

It is also possible that the timeout error is the result of your IP address being blocked. [Contact LearnDash support](https://account.learndash.com/support/) with your IP address to check if it is blacklisted. If you’ve completed these steps and the issue persists, consider reaching out to the LearnDash Support Team by [submittin](https://www.learndash.com/help/)[g a support ticket](https://account.learndash.com/support/https://www.learndash.com/help/) for additional assistance.

## What is a site license?

Licenses refer to the number of domains (websites) that LearnDash can be installed on and still receive both support and updates.

If you have several WordPress sites (“yoursite.com”, “courses.yoursite.com”, “yourothersite.com,” etc.) then installing LearnDash on each of these sites counts against the license total, including sub-domains.

Here are the current offerings of LearnDash depending on the number of sites you need. You can find out more on the [Pricing Page.](https://www.learndash.com/pricing-and-purchase/)

- **LearnDash 1 Site License**
- **LearnDash 10 Sites License**
- **LearnDash Unlimited Sites License**

You can also get a LearnDash Cloud site fully built, ready and managed for you without having to think about hosting and servers. Check out the [LearnDash Cloud](https://www.learndash.com/learndash-cloud/) page to learn more. You can pay monthly or annually for LearnDash Cloud with Pro Panel included.

## Can I transfer my license to someone else?

Yes. If you want to transfer your license to another party, please contact support by opening a ticket and include the following:

- Email address of the new license owner
- First and last name of the new license owner

The support team will work with you to verify and complete the license transfer.

**NOTE**: Once the license is transferred, you will no longer be billed for renewals. You will no longer have access to your old account.

## When does my license renew?

Licenses renew automatically one calendar year after the date of purchase. You can see the exact renewal date of your license(s) from the [LearnDash Account page under Subscriptions](https://account.learndash.com/subscription). If you want to manage your licenses or turn off auto-renewal, please check the [Billing page](http://learndash.com/support/docs/account/billing/).

## Can I install on a development environment?

The LearnDash license includes a bonus domain installation for testing purposes.

If your primary license is installed on yourdomain.com, your extra development license can be installed on the following sub-domain:

```
test.yourdomain.com
```

The extra development license will only work on a sub-domain “**test**.yourdomain.com.” If your development domain does not match this, you will need to contact support for it to be authenticated.

## FAQ

**Do I need a license key for ProPanel?** A separate license key is required for ProPanel prior to version 3.0. **Do I need the Licensing and Management Add-on?** For LearnDash versions prior to 4.18.0, licensing was managed via the Licensing and Management add-on. If you are using a version prior to 4.18.0, you may need to verify that the Licensing and Management add-on is activated by following the steps below:

**Verify LearnDash Licensing and Management Add-on is Activated**
This should have auto-updated/installed along with the LearnDash LMS plugin, however, this could be causing the licensing conflict if it did not also activate this plugin.
Login to your WordPress site
Click Plugins
Search for LearnDash Licensing and Management and confirm this is *installed* and *activated*
If you do not see this plugin, go to your [Accounts page](https://account.learndash.com/) to download and install

---

## Updates

**Source:** [https://learndash.com/support/kb/resources/account-billing/updates/](https://learndash.com/support/kb/resources/account-billing/updates/)

We continually update LearnDash and our add-ons with new features, functionality, security patches and bug fixes.

While we release updates on a regular basis, we do not post a public schedule. We hold weekly internal meetings to determine the scope and priority of LearnDash updates.

There are three ways you can update LearnDash. The easiest and most popular is automatic updates via your Plugins page.

1. Automatically, from your Plugins page
*(requires a valid license key)*
2. Manual upload
3. Via FTP

When an update is available, you will receive a notification in the WordPress admin area, on your Plugins > Installed Plugins page.

**NOTE**: We always recommend reviewing the changes in the [changelog](https://learndash.releasenotes.io/) before updating LearnDash.

**IMPORTANT**: We highly recommend always backing up your site before updating. Check with your host about backup solutions, or if you don’t already have one in place, you can try the free [UpdraftPlus plugin](https://wordpress.org/plugins/updraftplus/).

## Automatic Updates

To receive automatic updates, you must have an active license key.

1. Navigate to Plugins > Installed Plugins
2. Scroll down until you find LearnDash LMS
3. You should see a notification with a link that says “Update Now”. Click this link.
4. If successful, you’ll see a notification that confirms LearnDash was updated

### Don’t See The Update?

If you don’t see an available update, navigate to Dashboard > Updates and click the “Check Again” button. You can also try navigating to Plugins > Installed Plugins and refreshing the page, which can sometimes trigger the update notice as well.

![](https://learndash.com/support/wp-content/uploads/2019/02/WordPress-Updates.png)

## Manual Upload

If you want to update LearnDash manually:

1. Download the latest version from your account
2. Deactivate, then delete the version you have installed
**NOTE: No data will be lost**
3. Navigate to Plugins > Add New
4. Click Upload Plugin
5. Select the LearnDash 
```
.zip
```

 file that you downloaded in step 1
6. Click Install Now
7. Click Activate

## Update via FTP

If you would like to upload a new version of LearnDash via FTP, please follow [WordPress’ instructions here](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation).

---

## Edit Your Customer Account Email and Password

**Source:** [https://learndash.com/support/kb/resources/account-billing/profile/](https://learndash.com/support/kb/resources/account-billing/profile/)

Follow these steps to change the email address associated with your account or update your password:

1. Log into [your account](https://account.learndash.com/)
2. Enter your new email address and/or update your new password under **User Information**
3. Click **Update**

The above email address is for your LearnDash account and your LearnDash license email. This update will not impact your Billing email.

**NOTE**: The email address for your account is the same one that should be entered under LearnDash LMS > Settings > LMS LicenseI on your WordPress Admin site. If they do not match, your license will not validate.

As always, if you have any trouble with this, [please reach](https://learndash.com/help/)[out to us](https://account.learndash.com/support/) and we’ll be happy to help as soon as we can.

---

## How To Get Help

**Source:** [https://learndash.com/support/kb/resources/account-billing/help/](https://learndash.com/support/kb/resources/account-billing/help/)

## Support Process

You may have some questions or run into an issue while using LearnDash. We are here to help.

In these situations, you have two options:

- **Self-help on this support site:** Questions can be answered without needing to open a ticket and wait for a reply.
- **Contacting the Help Desk:** Your ticket resolution time is quicker if you give us as much information as possible, such as steps to recreate the issue, your LearnDash System Status Report (downloadable from LearnDash LMS > Settings > Support), a temporary login, and FTP information.

## Perform Troubleshooting Basics

In order to properly troubleshoot an issue, we need to rule out some of the most common causes for issues. Follow the instructions in the [Troubleshooting Basics support article](https://learndash.com/support/docs/troubleshooting/basics/) first before contacting support.

## Opening a Help Desk Ticket

If you have gone through the troubleshooting steps and still need some assistance then the LearnDash Support Team is ready to give you a hand! Our support is provided to valid license holders through a ticketing system. Help is just a short form away!

[Open a Help D](https://support.learndash.com/contact-support)[esk ticket](https://account.learndash.com/support/)

**NOTE** Support is available Monday through Friday from 4AM – 4PM (EST). Please [see our Support Policy](https://www.learndash.com/terms-and-conditions/#support) for complete details.

---

## Billing

**Source:** [https://learndash.com/support/kb/resources/account-billing/billing/](https://learndash.com/support/kb/resources/account-billing/billing/)

## Where do I download my invoice?

A copy of the invoice was emailed to you immediately after purchase. You may also download the invoice and manage your billing and license info at any time by following these steps:

.kadence-column36_9c381e-89 > .kt-inside-inner-col,.kadence-column36_9c381e-89 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column36_9c381e-89 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column36_9c381e-89 > .kt-inside-inner-col{flex-direction:column;}.kadence-column36_9c381e-89 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column36_9c381e-89 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column36_9c381e-89{position:relative;}@media all and (max-width: 1024px){.kadence-column36_9c381e-89 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column36_9c381e-89 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Go to [https://account.learndash.com](https://account.learndash.com/) and select Subscriptions

.kadence-column36_5ae50f-63 > .kt-inside-inner-col,.kadence-column36_5ae50f-63 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column36_5ae50f-63 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column36_5ae50f-63 > .kt-inside-inner-col{flex-direction:column;}.kadence-column36_5ae50f-63 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column36_5ae50f-63 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column36_5ae50f-63{position:relative;}@media all and (max-width: 1024px){.kadence-column36_5ae50f-63 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column36_5ae50f-63 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![LearnDash Accounts Page](https://learndash.com/support/wp-content/uploads/2018/09/YourAccount.png)LearnDash Accounts Page

.kadence-column36_344c7a-4a > .kt-inside-inner-col,.kadence-column36_344c7a-4a > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column36_344c7a-4a > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column36_344c7a-4a > .kt-inside-inner-col{flex-direction:column;}.kadence-column36_344c7a-4a > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column36_344c7a-4a > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column36_344c7a-4a{position:relative;}@media all and (max-width: 1024px){.kadence-column36_344c7a-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column36_344c7a-4a > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Select the Manage gear icon

.kadence-column36_7343a5-cf > .kt-inside-inner-col,.kadence-column36_7343a5-cf > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column36_7343a5-cf > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column36_7343a5-cf > .kt-inside-inner-col{flex-direction:column;}.kadence-column36_7343a5-cf > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column36_7343a5-cf > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column36_7343a5-cf{position:relative;}@media all and (max-width: 1024px){.kadence-column36_7343a5-cf > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column36_7343a5-cf > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
![LearnDash Subscriptions](https://learndash.com/support/wp-content/uploads/2018/09/YourSubscriptions.png)Your Subscriptions page

.kadence-column36_cca3e2-30 > .kt-inside-inner-col,.kadence-column36_cca3e2-30 > .kt-inside-inner-col:before{border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;}.kadence-column36_cca3e2-30 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column36_cca3e2-30 > .kt-inside-inner-col{flex-direction:column;}.kadence-column36_cca3e2-30 > .kt-inside-inner-col > .aligncenter{width:100%;}.kadence-column36_cca3e2-30 > .kt-inside-inner-col:before{opacity:0.3;}.kadence-column36_cca3e2-30{position:relative;}@media all and (max-width: 1024px){.kadence-column36_cca3e2-30 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}@media all and (max-width: 767px){.kadence-column36_cca3e2-30 > .kt-inside-inner-col{flex-direction:column;justify-content:center;}}
1. Under Order History, select the Download link.

![Subscription Details](https://learndash.com/support/wp-content/uploads/2018/09/Subscriptions.png)

1. 

If you have trouble accessing the Account Portal, you can [request a new password](https://account.learndash.com/).

## Are renewals billed automatically?

Yes. Your LearnDash license will automatically renew exactly one calendar year from the initial purchase. This allows you to continue receiving access to new features, bug fixes, add-on updates, and product support.

## Can I cancel my auto-renewal?

If you do not want your license to automatically renew, you can disable the auto-renewal feature from within the account page under the Subscriptions tab, select the Manage Gear icon, where you can disable auto-renewal.

Additionally, if you are a Legacy customer, please log into your Zoho billing portal to cancel the renewal, as well. Please note, these subscriptions cannot be reactivated once they have expired.

## Does cancelling my subscription initiate a refund?

No. Cancelling your subscription from your [Account Portal](https://account.learndash.com/) does not trigger a refund for the purchase of LearnDash, it simply turns off auto-renewal for your license. Your license is still active until your license expiration date.

If your purchase is still eligible for a refund, then you may [submit a refund request](https://account.learndash.com/support/).

## Can I update my payment method?

Yes. You can update your payment method from the Billing tab section within your [Account Portal](https://account.learndash.com/) by selecting Add Payment Methods.

![Update Payment Method](https://learndash.com/support/wp-content/uploads/2018/09/image-4.png)

[Contact us](https://account.learndash.com/support/) if you are unable to change your payment method this way.

## Do you offer refunds?

Yes. We will be happy to offer a refund **within 30 days**of your initial purchase should you decide that LearnDash does not meet your project’s needs. If you would like to pursue a refund, please [contact Support](https://account.learndash.com/support/). In the support form dropdown labeled: “**What can we help you with?**”  choose the option: I need help with my account, license, purchase or refund.

**NOTE**: By purchasing LearnDash, you agree to the [terms & conditions](https://www.learndash.com/terms-and-conditions/).

---

