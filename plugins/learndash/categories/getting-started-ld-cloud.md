# Getting Started Ld Cloud

*Category from LearnDash documentation*

---

## Logging In to Your LearnDash Cloud Site

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/logging-in-to-your-learndash-cloud-site/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/logging-in-to-your-learndash-cloud-site/)

LearnDash Cloud offers you an easy and convenient way to log in to your site. After purchase, you will be taken to your LearnDash account page, where you can view the status of your Cloud Sites and log in and manage them under the Sites tab.

After purchase, it takes about 2-5 minutes for your site to load and initialize. Once complete, follow the steps to log in to your LearnDash Cloud site.

## Log in to your LearnDash Cloud site:

1. Go to [https://account.learndash.com/](https://account.learndash.com/)
2. Click on “Sites”
3. Click the arrow to the right of the site URL
4. This page will have all your site details available
- For first-time users, go to **One Click Login** and click the **Log in to your site now!** button
- Or scroll down to **First Time Admin Credentials** to view the admin username and password
- This is also where you can find your SFTP Credentials

**NOTE**: If you change your password in the WordPress admin, this login will no longer work. Along with access to your website, the **Sites** screen provides convenient links to manage your subscription, purchase a domain, or upgrade your Cloud plan.

LearnDash Cloud is a WordPress site that gives you standard WordPress user management features. You can easily add users, update your login information, and invite others to help manage your LearnDash Cloud.

Once you are logged in, there are still a couple of steps you need to take to finish the setup. You can read more about them here:

- [How to Back Up Your Site](https://learndash.com/support/docs/learndash-cloud/how-to-back-up-your-site/)
- [How to Get Support in LearnDash Cloud](https://learndash.com/support/docs/learndash-cloud/how-to-get-support-in-learndash-cloud/)
- [How to Use the Design Wizard](https://learndash.com/support/docs/learndash-cloud/how-to-use-the-design-wizard/)
- [Using the Go Live Widget](https://learndash.com/support/docs/learndash-cloud/using-the-go-live-widget/)
- [Setting Up Your DNS to Use Your Own Domain Name](https://learndash.com/support/docs/learndash-cloud/setting-up-your-dns-to-use-your-own-domain-name/)

---

## How to Connect a Domain

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/using-the-go-live-widget/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/using-the-go-live-widget/)

Connecting a custom domain to a LearnDash Cloud site allows you to replace the default vanity domain (for example, 
```
greenapple.mylearndash.com
```

) with your own branded domain. This creates a more professional experience for learners and makes the site easier to recognize and share.

Domains can either be **purchased directly through LearnDash** or **connected from an external registrar**. This guide explains both options and outlines what to expect during the connection process.

## Accessing Your Site Details

Before connecting a domain, access the LearnDash Cloud site details.

1. Go to **account.learndash.com/sites**.
2. Locate the site to update.
3. Click the **arrow icon** next to the site to open its details.

## Option 1: Buy and Connect a Domain Through LearnDash

Purchasing a domain through LearnDash is the simplest option, as DNS records are managed automatically.

### Buying a domain

1. From **Site Details**, click **Domains**.
2. Under **Add New Domain**, click **Get a Domain**.
3. Enter the desired domain name (including 
```
.com
```

, 
```
.org
```

, 
```
.co.uk
```

, etc.).
4. Click **Search**.

Search results typically appear within **15–60 seconds**.
Click the **shopping cart icon** next to the desired domain to add it to the basket.

**Note:** LearnDash Cloud currently supports **one mapped domain per site**, so multiple domains cannot be purchased or connected at the same time.

1. Complete the checkout process using the same account and billing details used when purchasing LearnDash Cloud.

After checkout, a message appears indicating that the domain is being prepared. This process typically takes **5–10 minutes**.

### Before connecting the domain

When a domain is purchased through LearnDash, DNS records are configured automatically. However, standard DNS propagation still applies and may take up to **48 hours**.

**Important:** Click **Connect** only when ready to go live. During DNS propagation, the site may be temporarily inaccessible to administrators and learners.

### Finishing the connection

Click **Connect** to begin the automated setup process. During this step, LearnDash Cloud:

- Replaces all instances of the vanity domain with the custom domain
- Generates and configures a new SSL certificate
- Creates and applies DNS records to make the site publicly accessible

While the setup is in progress, a status message appears in the account area. The site URL updates immediately, even though DNS propagation may still be underway.

There is no automatic notification when propagation completes. Clearing the browser cache after a few hours and testing site access is recommended.

## After the Domain Is Connected

Once the domain is live:

- The WordPress admin login is available at

```
https://example.com/wp-admin
```
- Learners can access the site using the custom domain

If additional DNS records are required (for example, for email services such as Outlook or Google Workspace), contact **LearnDash Support** for assistance.

## Option 2: Connect a Domain Purchased Elsewhere

Domains purchased from registrars such as GoDaddy or Namecheap can also be connected to a LearnDash Cloud site. This process involves configuring DNS records with the registrar and then completing the connection in LearnDash.

### Step 1: Configure DNS records

1. Log in to the LearnDash account and open **Site Details**.
2. Go to **Domains**.
3. Select **I already have my own domain** and copy the **IP address** displayed (do not click *Connect* yet).

Next, log in to the domain registrar and open the DNS management area. This may be labeled **Manage DNS**, **DNS Zones**, **Host Records**, or similar.

Add the following DNS records:

**Primary domain**

- Type: **A**
- Host: **@**
- Value / Target: *LearnDash Cloud IP address*
- TTL: **Automatic**

**WWW version**

- Type: **A**
- Host: **www**
- Value / Target: *LearnDash Cloud IP address*
- TTL: **Automatic**

Adding both records ensures the site is accessible with and without the 
```
www
```

 prefix.

### Waiting for DNS propagation

DNS changes may take anywhere from a few minutes to **up to 72 hours** to fully propagate, depending on the registrar.

### Step 2: Connect the domain in LearnDash

After DNS propagation:

1. Return to **Domains** in the LearnDash Cloud site details.
2. Click **I already have my own domain**.
3. Confirm that DNS has been updated by selecting the confirmation checkbox.
4. Click **Connect** to finish connecting the domain.

**Note:** If changes are not visible immediately, propagation may still be in progress. If more than 24 hours have passed and the domain is still not connecting, the issue is often caused by an **A record collision**. This occurs when multiple 
```
@
```

 records point to different IP addresses. Remove any conflicting 
```
@
```

 records and retain only the record pointing to the LearnDash Cloud IP.

## Conclusion

Connecting a custom domain provides a branded, professional presence for a LearnDash Cloud site. Whether the domain is purchased through LearnDash or connected from an external registrar, following the correct steps and allowing time for DNS propagation ensures a successful setup. For issues during the connection process or for additional DNS configuration, LearnDash Support can assist.

---

## Setting Up Your DNS to Use Your Own Domain Name

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/setting-up-your-dns-to-use-your-own-domain-name/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/setting-up-your-dns-to-use-your-own-domain-name/)

Using your custom domain name with LearnDash Cloud is a simple process. This guide will walk you through the two-step process of configuring your domain: first by updating your DNS (Domain Name System) settings, and then connecting the domain to your LearnDash Cloud site.

### Why should I use my own domain name?

Using your own domain name offers several important benefits for your LearnDash site:

1. Professional Credibility: A custom domain (like 
```
yourschool.com
```

) instantly makes your site appear more established and trustworthy, compared to a generic subdomain (
```
yourschool.learndash.cloud
```

).
2. Brand Building: Your domain is a key part of your brand identity. It helps students remember your site and makes your courses more marketable.
3. Marketing Flexibility: Having your own domain gives you complete control over your web presence. You can create memorable subdomains, redirect URLs, and manage email addresses under your domain.
4. Long-term Value: While you may start with LearnDash Cloud, owning your domain means you maintain control of your web address regardless of which platform you use in the future.
5. SEO Benefits: Custom domains can improve your search engine visibility and make it easier for potential students to find your courses through organic search.

### Step 1: Configure the DNS Record

This step involves adding an A record to point your custom domain to your LearnDash Cloud site. Heres how to get that done:

1. **Find Your LearnDash Cloud IP Address:**

- Log in to your LearnDash account and go to your LearnDash Cloud site details.
- Click onDomains.
- ChooseI already have my own domainand copy the IP address shown there (but don’t clickConnectjust yet!).

![Click to get LearnDash Cloud Site IP](https://learndash.com/support/wp-content/uploads/2022/07/click-to-get-LearnDash-IP.webp)*Click to get LearnDash Cloud Site IP address*

1. #### Update DNS Settings in Your Domain Registrar Account:

- Log in to your domain registrar’s account (e.g., GoDaddy, Namecheap).
- Look for options like**DNS Zones**,**Manage DNS**,**Domain Zones**, or**Host Records**. Different registrars may use slightly different names, but they all point to the same place where you add DNS records.
- Click on**Add a New Record**.
- Enter the following:

–**Type:**A Record

–**Host:**@

–**Value/Target:**Paste the IP address you copied from LearnDash.

–**TTL:**Automatic

1. #### Add the www Version:

Its good practice to include the www version of your domain. Add another **A record** with these details:

–**Type:**A Record

–**Host:**www

–**Value/Target:**Paste the IP address you copied from LearnDash.

–**TTL:**Automatic

![Example DNS zone managment screen](https://learndash.com/support/wp-content/uploads/2022/07/example-dns-w-IP-namecheap.webp)*Example DNS zone managment screen*

### Waiting for Propagation

After you’ve updated these records, the changes need some time to fully take effect. Depending on your domain registrar, this can be quick, or may take up to 72 hours as the DNS propagates across the internet.

### Step 2: Connect Your Domain in LearnDash Cloud

Once the DNS has propagated:

- Go back to your LearnDash Cloud domain settings.
- ClickI already have my own domainagain.
- Confirm that youve updated the DNS by checking the box, then clickConnect to finish connecting your domain

![Final Connect to your Custom Domain Name](https://learndash.com/support/wp-content/uploads/2022/07/final-connect-your-custom-external-domain.webp)*Final Connect to your Custom Domain Name*

If youre not seeing changes immediately, dont worryÔÇöpropagation can sometimes take a while, but your domain should be connected within that 72-hour window.

## Troubleshooting Tips

If it’s beyond 24 hours and the changes haven’t propagated yet, this is likely caused by an A record collision. This happens when there are two A records (Host = @) pointed to different IP addresses. In this case, please remove the other A record (Host = @) and only retain the A record pointing to our Cloud server.

You can find detailed guides for your specific registrar in your hosting provider’s documentation.

---

## How to Get Support in LearnDash Cloud

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/how-to-get-support-in-learndash-cloud/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/how-to-get-support-in-learndash-cloud/)

LearnDash Cloud includes built-in support tools to help site owners get answers and resolve issues. Support requests can be sent directly to the LearnDash team using either the LearnDash Account Dashboard or the WordPress admin area of a LearnDash Cloud site.

## Here’s how to get help:

### Using the Account Dashboard

Support tickets can be submitted directly from the LearnDash Account Dashboard.

1. Log in to your [LearnDash Account Dashboard](https://account.learndash.com/)
2. Click on the Support tab
3. From the “*How can our LearnDash experts help you today?”* drop-down menu, select the category that best matches the issue.
4. Fill out the form with your questions or issues
5. Click Submit

### Using the LearnDash Cloud tab on the WordPress Dashboard

Support tickets can also be created from within the WordPress admin area of your Stellar Learning site.

1. Log in to the WP Admin dashboard of your Stellar Learning website
2. Navigate to **LearnDash Cloud > Support**
3. Click the Create a Support Ticket button
4. Fill out the form with your questions or issues.
5. Click Submit

Once the form is submitted, the ticket will automatically be raised to our LearnDash Team, and we will get back to you as soon as possible via your email address.

---

## How to Back Up Your Site

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/how-to-back-up-your-site/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/how-to-back-up-your-site/)

Cloud backups are key to protecting your LearnDash site. Think of cloud backups like making digital copies of your entire LearnDash website. Similar to how you save important files on your computer, backing up your website protects all your course content, student information, and settings in case something goes wrong.

LearnDash Cloud offers automatic daily backups, which helps keep your site secure and easy to restore if anything goes wrong.

### Why Cloud Backups are Important for LearnDash

- **Data Protection**: Protects against accidents (like accidentally deleting something)
- Saves your site if there are technical problems
- Keeps your data safe from hackers
- **Easy Recovery**: Allows you to quickly restore your site to an earlier state.
- **Automatic Convenience**: Saves time by reducing the need for manual backups.

### Setting Up Cloud Backups

1. **Automated Backups with LearnDash Cloud**: LearnDash Cloud automatically backs up your site every day. If you need a restoration, contact LearnDash support.
2. **Extra Security with Backup Plugins:**Its good to have extra backup copies. Plugins likeSolid Backups NextGen**,**UpdraftPlus and JetPack Backup can add more layers of protection.

### Other Backup Options

While LearnDash Cloud handles backups automatically, you might want extra protection.

Here are some popular backup tools you can use:

1. [Solid Backups NextGen](https://solidwp.com/backups/)

- Purchase the plugin and Install: Buy from SolidWP, upload, and activate.
- Configure: Set up a backup schedule and storage.
- Very reliable, a premium option with lots of features

1. ****[UpdraftPlus](https://wordpress.org/plugins/updraftplus/)

- Install: Go to Plugins > Add New, search UpdraftPlus, and install.
- Configure: Set up a schedule and remote storage in Settings > UpdraftPlus Backups.
- Run Backup: Click “Backup Now” to test the setup.
- Free and easy to set up and you control when backups happen

1. [JetPack Backup](https://wordpress.org/plugins/jetpack/)

- Maintained by the WordPress team and comes with other helpful features
- Install: Search in the WordPress plugin repository for JetPack, install and activate.
- Subscribe: Requires a paid subscription. Choose a plan that includes backups and set up the settings.

### Configuring Backup Settings

- **Backup Frequency:**Daily backups are best for sites updated frequently, while weekly is okay for less active sites.
- **Retention Period:**Keep backups for at least 30 days.
- **Automatic Scheduling:**Use automatic scheduling so backups happen without extra work.

### Checking and Managing Backups

- **Testing**: After setting up, do a manual backup to make sure everythings working. Check the backup logs to confirm everything was saved correctly.
- **Monitoring**: Set up notifications to stay updated on your backups’ success or failure.
- **Regular Reviews**: Check your backup settings and logs regularly to keep backups running smoothly.

### Tips for Better Backups:

- Save your site daily if you update it often
- Keep at least 30 days of backups
- Set up automatic backups so you don’t forget
- Check your backups regularly to make sure they’re working
- Watch your storage space so you don’t run out

### Restoring LearnDash Data

If you need to restore your LearnDash site from a backup, just contact our support team. They’ll help you get everything back to normal.

### Troubleshooting Backup Issues

- **Backup Failures**: Look at error logs to fix problems like storage limits or server issues.
- **Corrupted Files**: Regularly check backups to ensure theyre working. Use older backups if one is corrupted.
- **Storage Limits**: Monitor storage use and upgrade if youre running out of space often.

### Final Thoughts

Regular backups are like insurance for your website – you hope you never need them, but you’ll be glad you have them if something goes wrong!

---

## LearnDash Cloud

**Source:** [https://learndash.com/support/kb/cloud/getting-started-ld-cloud/learndash-cloud/](https://learndash.com/support/kb/cloud/getting-started-ld-cloud/learndash-cloud/)

LearnDash Cloud is a fully-hosted WordPress website that comes with LearnDash pre-installed. For more information on the features offered, please visit [https://www.learndash.com/learndash-cloud/.](https://www.learndash.com/learndash-cloud/)

If you’ve already purchased a LearnDash Cloud subscription and want to manage it, you can visit the [account page (account.learndash.com)](https://account.learndash.com/) and log in there. Then head on to the Cloud Sites tab.

![](https://learndash.com/support/wp-content/uploads/2022/07/Account.jpg)

You can also explore some of our documentation on LearnDash Cloud to learn more on how to manage, setup, and create your new LearnDash cloud site:

- [Logging in to Your LearnDash Cloud Site](https://learndash.com/support/docs/learndash-cloud/logging-in-to-your-learndash-cloud-site/)
- [How to Back Up Your Site](https://learndash.com/support/docs/learndash-cloud/how-to-back-up-your-site/)
- [How to Get Support in LearnDash Cloud](https://learndash.com/support/docs/learndash-cloud/how-to-get-support-in-learndash-cloud/)
- [How to Use the Design Wizard](https://learndash.com/support/docs/learndash-cloud/how-to-use-the-design-wizard/)
- [Using the Go Live Widget](https://learndash.com/support/docs/learndash-cloud/using-the-go-live-widget/)
- [Setting Up Your DNS to Use Your Own Domain Name](https://learndash.com/support/docs/learndash-cloud/setting-up-your-dns-to-use-your-own-domain-name/)

---

