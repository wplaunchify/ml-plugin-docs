# Create Staging Website

*Category from Kadence Theme documentation*

---

## How to Set Up a Staging Site for Your WordPress Website

**Source:** [https://www.kadencewp.com/help-center/docs/kadence-theme/create-staging-website/](https://www.kadencewp.com/help-center/docs/kadence-theme/create-staging-website/)

### What is a Staging Site?

A staging site is a private, exact replica of your live production website. It serves as a safe testing sandbox where you can install updates, modify code, or redesign layouts without affecting the live website your visitors see.

Because errors or conflicts are caught in the staging environment first, you reduce downtime and ensure a bug-free experience for your users.

### Why You Need a Staging Site

Testing is critical when running complex plugins and themes. Use a staging site before making major changes to your software:

- **Give:** Safely test payment gateways (like Stripe or PayPal in test mode), adjust recurring donation settings, or tweak donation form layouts without interrupting live donor transactions.
- **The Events Calendar:** Perform bulk CSV imports for massive calendars, test RSVP functionalities, or simulate ticket sales before releasing them to the public.
- **LearnDash:** Isolate and troubleshoot plugin conflicts, upgrade LearnDash versions, or restructure course hierarchies safely so that active students do not experience broken layouts, disrupted quizzes, or unexpected lockouts during their live sessions.
- **Kadence:** Apply starter templates, test global typography/color palette changes, or modify Kadence Blocks layouts without exposing your visitors to a broken or unfinished design.

### Method 1: Use Your Web Host’s Native Staging (Recommended)

The fastest and safest way to create a staging site is through your web hosting control panel. Most premium managed WordPress hosts include a 1-click staging feature that clones your site at the server level, preventing your live site from slowing down during the cloning process.

Because every hosting provider has a different dashboard, the exact steps will vary. Generally, you can create a staging site by following these steps:

1. Log in to your hosting provider’s main control panel.
2. Locate your website’s management area or environment settings.
3. Look for a **Staging**, **Environments**, or **Clone** option.
4. Follow your host’s prompts to copy your live database and files to a new staging environment.

If you are unsure where to find this feature, we recommend searching your specific hosting provider’s documentation for “how to create a staging site.”

### Method 2: Use a WordPress Staging Plugin (Universal)

If your web host does not offer a native staging environment, you can create one using a WordPress plugin called **WP STAGING**. This method works on almost any server.

**Step 1: Install and Activate WP STAGING**

1. In your WordPress admin dashboard, navigate to **Plugins > Add New**.
2. Search for **WP STAGING – Backup Duplicator & Migration**.
3. Click **Install Now**, and then click **Activate**.

**Step 2: Create the Clone**

1. In your WordPress admin sidebar, navigate to **WP Staging > Staging Sites**.
2. Click the **Create New Staging Site** button.
3. Enter a name for your staging site (e.g., testsite or staging). Note: Do not use spaces or special characters.
4. The plugin will display sections for Database Tables and Files. By default, it will copy everything, which is recommended for an exact clone.
5. Click the **Start Cloning** button.

**Step 3: Log In to Your Staging Site.** The duration of the cloning process varies depending on the size of your website.

1. Once it finishes, the plugin will display a button labeled **“Open Staging Site”**.
2. Click the button and log in using the same username and password you use for your live WordPress site.
3. You will know you are in the staging environment because WP STAGING places a bright orange admin bar at the top of the screen to prevent you from confusing it with your live site.

**Important Maintenance Note:***Staging sites are meant for testing. Once you have tested your changes and successfully applied them to your live site, we recommend deleting the staging site to save server space and maintain optimal security.*

---

