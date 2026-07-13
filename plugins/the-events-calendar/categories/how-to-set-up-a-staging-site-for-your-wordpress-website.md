# How To Set Up A Staging Site For Your Wordpress Website

*Category from The Events Calendar documentation*

---

## How to Set Up a Staging Site for your WordPress Website with WP Staging Plugin

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-set-up-a-staging-site-for-your-wordpress-website/](https://docs.nexcess.com/software/the-events-calendar/how-to-set-up-a-staging-site-for-your-wordpress-website/)

You can easily set up a staging site for your WordPress website using the [WP STAGING WordPress Backup Plugin](https://wordpress.org/plugins/wp-staging/).

**💡Important Notice:** Before creating a staging site and following the steps in this article, make sure to temporarily disable [Wordfence](https://www.wordfence.com/), other security plugins, and two-factor authentication (2FA), if enabled. These tools can block or interfere with login access to your staging site. Once deactivated, proceed with the steps below to set up your staging environment.

## Step 1: Create a New Administrator User

- Go to the **Users** section and create a new user with **administrator privileges**. This user will be used to access the staging site later.
- Log in to your WordPress dashboard.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-21.33.01-1024x837-1.jpg)

## Step 2: Install the WP STAGING Plugin

- Go to **Plugins** in your WordPress dashboard and click on **Add New**.
- In the search bar, type **WP STAGING WordPress Backup Plugin**.
- Find the plugin in the search results, then click **Install** and **Activate**.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-21.43.07-1024x392-1.jpg)

## Step 3: Create Your Staging Site

- After activating the plugin, navigate to **WP Staging > Staging Sites**.
- Under the **Staging** tab, click the **Create Staging Site** button. Follow the on-screen prompts to start the cloning process.
- The plugin will copy your website to create a safe staging environment.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-21.48.17-1024x655-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-21.50.31-1024x839-1.jpg)

## Step 4: Access Your Staging Site

- When the staging site is ready, you’ll see a URL on the final screen.
- Use the administrator credentials you created in Step 1 to log in to the staging site.
You can now test changes or updates in this separate environment without affecting your live site.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-21.53.45-1024x347-1.jpg)

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Screenshot-2024-12-26-at-22.08.32-1024x671-1.jpg)

---

