# Configure Promoter

*Category from The Events Calendar documentation*

---

## Getting Started with Promoter

**Source:** [https://docs.nexcess.com/software/the-events-calendar/configure-promoter/](https://docs.nexcess.com/software/the-events-calendar/configure-promoter/)

[Promoter](https://theeventscalendar.com/products/promoter/) is an email marketing service built specifically for event organizers using The Events Calendar. It connects to your WordPress site, imports your events and attendees automatically, and lets you send scheduled messages, triggered emails, and full campaigns — without manually building email lists or exporting data.

This article covers everything you need to get Promoter running: requirements, installation, connecting your account, verifying your domain for reliable mail delivery, syncing events, and creating your first campaign.

## Requirements and Limitations

Before getting started, confirm your site meets Promoter’s requirements:

- Your site must be publicly accessible on the web. Local installs will not work.
- All traffic must use HTTPS. An SSL certificate is required.
- The WordPress user account tied to the Promoter license must have the 
```
read_private_posts
```

 capability (Administrator or Editor role, or a custom role with that capability). This is especially important on sites using a role management plugin.
- [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/) (free) and [Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/) (free) must both be installed and active. Promoter also works with [Event Tickets Plus](https://theeventscalendar.com/product/wordpress-event-tickets-plus/).
- Promoter does not work with Eventbrite Tickets.

The following domain and subdomain patterns are blocked for technical reasons. Make sure your site is not using any of them:

- Domains or subdomains containing “staging”, “dev”, or “test”
- myftpupload domains
- wpengine domains
- mybluehost domains
- dreamhosters domains
- lightningbasehosted domains
- Domains [white-listed for testing or development purposes](https://docs.nexcess.com/software/the-events-calendar/using-one-license-for-live-and-dev-sites/)

A few other things to know before you begin:

- **License transfers:** Once a Promoter license is tied to a website, it cannot simply be moved to a different site. If you need to transfer a license, contact the [help desk](https://support.theeventscalendar.com/submit_ticket).
- **Sub-folder installs:** Promoter works on WordPress sites installed in a sub-folder (e.g., 
```
https://www.domain.com/subfolder/
```

). Contact support to complete the installation correctly.
- **Multi-site:** Promoter does not work on WordPress multi-site installations.
- **WPML:** Promoter does not officially support WPML. Attendees of events in secondary languages may not sync.
- **Sent messages:** Promoter messages that are queued or sent cannot be recalled. Because messages cannot be removed from an event after the fact, re-purposing old events with new dates is not recommended.

## What You Need

- [The Events Calendar](https://theeventscalendar.com/products/wordpress-events-calendar/) (free)
- [Event Tickets](https://theeventscalendar.com/products/wordpress-event-tickets/) (free)
- [Promoter](https://theeventscalendar.com/products/promoter/) (premium subscription)

![Promoter — automated email marketing for events](https://docs.nexcess.com/wp-content/uploads/2026/06/evergreen-ad-promoter-1024x384-1.png)

## Installation

Install The Events Calendar and Event Tickets on your WordPress site if you haven’t already. Both are free and available under **Plugins → Add New** in your WordPress dashboard. For help, see [Downloading and Installing the Plugin](https://docs.nexcess.com/software/the-events-calendar/downloading-and-installing-the-plugin/).

Next, purchase a Promoter license at [theeventscalendar.com/product/promoter/](https://theeventscalendar.com/product/promoter/). After checkout, your license key will appear in your account at [theeventscalendar.com/license-keys/](https://theeventscalendar.com/license-keys/).

![Promoter license key shown in the TEC account licenses page](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2020-10-15-at-5.16.29-PM.png)

Then enter your license key in WordPress under **Events → Settings → Licenses** and click **Save Changes**.

![The Promoter license key field in the WordPress Events Settings Licenses tab](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-license-key-valid.png)

![The Events Settings Licenses screen showing a valid Promoter license entered](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-1.38.48-PM.jpg)

## Connecting Your Promoter Account

With your license registered in WordPress, head to [promoter.theeventscalendar.com/welcome](https://promoter.theeventscalendar.com/welcome) to complete the account setup. Keep your license key handy — you’ll enter it here again.

![The Promoter welcome screen where you enter your license key](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-key-settings.png)

![The Promoter Quick Start Guide welcome screen](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-1.48.14-PM.jpg)

#### Step 1: Enter your license and click Next: Your Profile

Review your account details and set a password for your Promoter account, then click **Next: Select Website**.

![The Promoter profile step showing account details and password creation](https://docs.nexcess.com/wp-content/uploads/2026/06/select-next-website-promoter.png)

#### Step 2: Select your website

Choose the WordPress site you want to connect Promoter to, then click **Next: Sync Events**.

![The Promoter website selection step](https://docs.nexcess.com/wp-content/uploads/2026/06/sync-events.png)

![Selecting a website to connect to Promoter](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-1.51.57-PM.jpg)

#### Step 3: Authorize Promoter

Click **Authorize Promoter** to grant Promoter access to your events and attendees on your WordPress site.

![The Promoter authorization screen](https://docs.nexcess.com/wp-content/uploads/2026/06/authorize-promoter.png)

![Authorizing Promoter to sync with your WordPress site](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-1.53.07-PM.jpg)

#### Step 4: Complete the sync

Click **Complete Sync** to kick off the initial import of your events.

![The Promoter Complete Sync button](https://docs.nexcess.com/wp-content/uploads/2026/06/complete-sync.png)

The import of your events will be scheduled — it may take a few minutes before they appear in Promoter.

### Syncing with Multiple Websites

Each Promoter license can sync with one website. If you need to connect Promoter to additional sites, you will need to purchase a separate license for each one. Once you have additional licenses, follow these steps for each.

## Verifying Your Domain for Mail Delivery

Domain verification is a required part of getting Promoter running correctly. Promoter sends bulk emails through Mailgun using a “from” address from your domain. Verifying your domain adds SPF and DKIM authentication to your outgoing emails, which is essential for reaching your subscribers’ inboxes rather than their spam folders. Skipping this step will almost certainly result in increased spam rates.

To access your Mail Delivery Settings, click the profile icon at the top right of the Promoter interface and select **Mail Delivery Settings**. When verification is complete, the page will look like this:

![The Promoter Mail Delivery Settings page showing a fully verified domain](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-domain-validation-validated-563x1024-1.jpg)

### Verifying Your Domain

Domain verification requires three steps: adding your domain, entering your “from” email address, and creating DNS records at your domain host.

#### Step 1: Add your domain

Initially, the Mail Delivery Settings page will look like this:

![The Mail Delivery Settings page before a domain has been added](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-domain-validation-empty.jpg)

Enter your domain name in the **Domain** field and click **Create Domain**.

![Entering a domain name and clicking Create Domain in the Mail Delivery Settings](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-domain-validation-create-domain.jpg)

After clicking **Create Domain**, Steps 2 and 3 will appear below Step 1, with all fields pre-filled. The values in Step 3 will need to be copied into new DNS records at your domain host.

#### Step 2: Add your “from” email address

In the **From Email** field under Step 2, enter the email address that Promoter emails will be sent from.

#### Step 3: Create the TXT records in your DNS

You will need to create two TXT records in your domain’s DNS settings. The hostname and value for each record are shown in the Step 3 fields — copy them exactly and paste them into new DNS records at your domain host.

![The Step 3 TXT record fields in Mail Delivery Settings before verification](https://docs.nexcess.com/wp-content/uploads/2026/06/promoter-domain-validation-txt-pending.jpg)

A few minutes after adding the records, click the **Verify DNS** button. DNS propagation can take time, so you may need to click it several times while your changes propagate. Once verification is complete, the Verify DNS button will disappear and your domain will show as **Active**.

Here are guides for adding TXT records with common hosts:

- [GoDaddy](https://www.godaddy.com/help/add-a-txt-record-19232)
- [Nexcess](https://www.nexcess.net/help/454905-how-to-configure-dns-records-in-the-client-portal/)
- [WP Engine](https://wpengine.com/resources/what-is-dns-how-does-it-work/)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/10357/2254/video-how-to-add-a-txt-record-for-a-domain/)
- [Hostinger](https://support.hostinger.com/en/articles/4469063-how-to-add-and-remove-txt-records-in-cpanel)
- [SiteGround](https://www.siteground.com/kb/manage-dns-records/)

If you run into trouble adding TXT or CNAME records, contact [support](https://theeventscalendar.com/support/) for assistance.

### Troubleshooting: Existing SPF or CNAME Conflicts

If your domain already has SPF or CNAME records that conflict with what Promoter requires, the verification process cannot override them. The workaround is to create a dedicated subdomain for Promoter.

For example, if your primary domain is 
```
example.com
```

, create a subdomain such as 
```
promoter.example.com
```

. Then remove the existing domain configuration from Promoter’s Mail Delivery Settings and restart the setup process using the new subdomain.

### Troubleshooting: Records Still Showing as Pending

DNS propagation typically takes 24–48 hours, and in some cases up to 72 hours. If your records are still showing as pending after that window, try the following:

- **Check for accuracy.** Even minor issues — extra spaces, typos, or incorrect entries — can cause verification failures. Confirm the hostname and value fields match exactly what Promoter provided.
- **Confirm with your DNS provider.** Contact them to verify the records have been added correctly and are propagating. They can also check for any configuration issues on their end.
- **Use a DNS lookup tool.** Tools like [MXToolbox](https://mxtoolbox.com) or [WhatsMyDNS](https://www.whatsmydns.net) let you check whether your TXT and CNAME records are visible across global DNS servers, which can help distinguish between a propagation delay and an incorrect entry.

## Syncing Events

Promoter only syncs events from your WordPress site that meet both of these conditions:

- The event has at least one ticket associated with it.
- The event has at least one attendee.

Events that don’t have tickets or attendees will not appear in Promoter, even if they are published on your calendar.

After the initial sync triggered during account setup, Promoter automatically re-syncs events every 15 minutes.

![The Promoter events list showing synced events from WordPress](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2021-07-02-at-11.42.44-AM-1024x426-1.jpg)

![Events successfully synced between WordPress and Promoter, ready for email campaigns](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-2.12.09-PM.jpg)

## Creating Email Campaigns

Once your events are synced, click on any event in Promoter to start creating emails. Each event offers three options:

- **Scheduled Message** — Send a message to your attendees immediately or schedule it for a specific date and time.
- **Triggered Message** — Automatically send a message based on an attendee action, such as purchasing a ticket or submitting an RSVP.
- **Create a Campaign** — Use a collection of pre-made [shortcuts](https://docs.nexcess.com/software/the-events-calendar/promoter-shortcuts-campaigns/) to quickly generate a full set of emails for your event, with recommended sending schedules already built in.

![The three Promoter message options for an event: Scheduled Message, Triggered Message, and Create a Campaign](https://docs.nexcess.com/wp-content/uploads/2026/06/Screen-Shot-2022-07-05-at-2.26.39-PM.jpg)

---

