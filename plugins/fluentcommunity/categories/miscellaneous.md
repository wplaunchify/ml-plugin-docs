# Miscellaneous

*Category from FluentCommunity documentation*

---

## Adding Custom CSS & JavaScript

**Source:** [https://fluentcommunity.co/docs/adding-custom-css-javascript/](https://fluentcommunity.co/docs/adding-custom-css-javascript/)

Personalizing your community to match your brand is essential. FluentCommunity offers powerful and flexible ways to add custom CSS (for design and styling) and JavaScript (for extra functionality).

This guide will walk you through the two primary methods for adding custom code, helping you choose the best one for your needs.

1. **Using the Built-in Editor (Easy & Recommended):** Perfect for quick, simple changes directly within the FluentCommunity settings.
2. **Using a Snippet Plugin (Advanced Control):** Ideal for organizing larger code blocks or for developers who need more flexibility.

## Method 1: The Built-in Editor

For over 90% of customization needs, this is the safest and straightforward method. It doesn’t require any extra plugins and your changes are easy to manage.

#### Steps:

1. Navigate to your WordPress Dashboard → **FluentCommunity** → **Portal Settings**.
2. Click on the **Customizations** tab.
3. Scroll down until you find the **“Custom Snippets”** section.

![Custom CSS or JS option in FluentCommunity](https://fluentcommunity.co/wp-content/uploads/2025/09/FC-custom-css-js-scaled.webp)

#### Adding Custom CSS

Paste your styling rules directly into the **Custom CSS** box.

Important:

Do NOT include the <style> or </style> tags here. Just the raw CSS code.

**Example — Add CSS in the****Custom CSS****box:**

```
CSS

/* Make the main header blue with white text */

.fc-portal-header {

   background: #1e73be;

   color: white;

}
```

#### Adding Custom JavaScript

Paste your script directly into the **Custom JavaScript** box.

> Note: Unlike the CSS box, for JavaScript, you SHOULD include the full <script> and </script> tags.

**Example — Add JS in the****Custom JS****box:**

```
HTML
<script>

    console.log("FluentCommunity portal is ready!");

</script>
```

Finally, click the **“Save Custom CSS & JS”** button to apply your changes.

### Method 2: Using a Snippet Plugin

This method is for users who want to keep their code more organized or need to implement more complex logic. It involves using FluentCommunity’s developer “hooks” (add_action).

#### The Most Important Rule for Snippets

When you use a FluentCommunity hook like add_action(…), you are using **PHP code**. Therefore, you must **always** create a **PHP Snippet**, even if your goal is to add CSS or JS inside it. This is the most common point of confusion.

#### Adding Custom CSS with a Snippet Plugin

1. Create a new snippet in your chosen plugin (e.g., [FluentSnippets](https://fluentsnippets.com/)).
2. Set the snippet type to **PHP**.
3. Paste the following PHP code structure. Your CSS rules go *inside* the <style> tags.

**Example — PHP Snippet for adding CSS:**

```
PHP
add_action('fluent_community/portal_head', function() {

    ?>

    <style>

        /* Add all your custom CSS rules here */

        .fc-portal-header {

            background: #1e73be;

            color: #fff;

        }

    </style>

    <?php

});
```

#### Adding Custom JavaScript with a Snippet Plugin

Similarly, you’ll use a **PHP Snippet** to hook your JavaScript into the page footer for best performance.

1. Create a new **PHP Snippet**.
2. Paste the following code structure. Your JS code goes *inside* the <script> tags.

**Example — PHP Snippet for adding JavaScript:**

```
PHP
add_action('fluent_community/portal_footer', function() {

    ?>

    <script>

        // Add your custom JavaScript here

        console.log("Custom JS loaded for FluentCommunity!");

    </script>

    <?php

});
```

### Which Method Should You Use?

- **Use the Built-in Editor if:** You are a beginner or need to make quick, simple style changes. This is the recommended method.
- **Use a Snippet Plugin if:** You are a developer or an advanced user who needs to organize a lot of code, link external files, or add conditional logic.

### Troubleshooting

- **CSS/JS doesn’t work?** → The first thing to always do is clear your browser cache and any caching plugins on your site.
- **Site looks broken after adding a snippet?** → Deactivate the last snippet you added. The problem is likely a small typo in your code.
- **Code in snippet not working?** → Double-check that you created a **PHP Snippet** and that your custom code is placed correctly inside the <style> or <script> tags.

---

## Community as Homepage

**Source:** [https://fluentcommunity.co/docs/community-as-homepage/](https://fluentcommunity.co/docs/community-as-homepage/)

By default, your FluentCommunity lives on its own page, usually at *yoursite.com/portal*. But what if you want your community to be the **main event** the very first thing visitors see when they arrive at your site?

This guide will show you how to make your community the true front door of your entire website. We’ll walk through two powerful goals, with the main focus on the first one:

1. **Making your community your actual homepage** (so it loads at *yoursite.com*).
2. **Giving your community a nicer URL** (like *yoursite.com/community*) as a simpler alternative.

## Goal 1: Make Your Community the Actual Homepage

**Method A: Using Code Snippet Plugin**

This method is the best choice for the vast majority of users. We will use a popular, free plugin called **FluentSnippets** to add the necessary code without ever needing to touch your sensitive core WordPress files.

Think of this plugin as a safe, managed sandbox for adding custom code. It’s fantastic because if you make a mistake, you can easily deactivate the snippet with a single click, which instantly fixes the problem. It’s safe, completely reversible.

**Step 1: Create a New Snippet**

1. Select “FluentSnippet” from the left sidebar of WordPress and click on **New Snippet**button.

**Step 2: Add and Configure the Homepage Code**

This is where we tell WordPress what we want to do.

1. **Give it a clear title:** Add a title for your snippet, like **“Set Community as Homepage”**.
2. **Confirm the Code Type:** Make sure the “Snippet Type” is set to **“PHP Snippet”**.

**Paste the code:** In the large code box, carefully copy and paste the following single line of code:

```
define('FLUENT_COMMUNITY_PORTAL_SLUG', '');
```

*What this code does:* This line is a simple instruction that tells FluentCommunity, “Don’t use any extra words like /portal in the URL; I want the community to be the main homepage.”

1. Scroll down below the code box. Under the “Where to Run” section, ensure the method is set to **“Run Everywhere”**. This is the default and is what we need.
2. Finally, click the **“Create Snippet”** then the “**Activate”** button.

![Create Snippet ](https://fluentcommunity.co/wp-content/uploads/2025/09/Fluent-Snippets-scaled.webp)

**Step 4: Refresh Your Permalinks**

This last step is crucial. You’ve told WordPress to make a big change to your site’s structure, and now you need to tell WordPress to update its internal “map” of all your pages.

1. Go back to your main WordPress Admin Dashboard.
2. Navigate to **Settings → Permalinks**.
3. You don’t need to change any of the settings on this page. Just scroll to the bottom and click the **Save Changes** button.

![Permalink Settings Page](https://fluentcommunity.co/wp-content/uploads/2025/09/Permalink-Settings-scaled.webp)

Your website’s homepage is now your FluentCommunity portal. Open your website in a new browser tab to see it in action.

**Method B: Changing wp-config.php file**

This is for when you want your entire website’s main address (yoursite.com) to be the community itself.

#### Step-by-Step Guide to Editing wp-config.php

1. **Connect to Your Website’s Files:** You will need to access your site’s file system. You can do this using the **File Manager** plugin in your website.
2. **Locate the****wp-config.php****file:** This file is located in the main (root) folder of your WordPress installation.
3. **Open the File to Edit:** Right-click on wp-config.php and choose “Edit.”
4. **Find the Correct Spot:** Scroll down carefully until you see the following line of text: **/* That’s all, stop editing! Happy publishing. */**

**Paste the Code:** On a new line **directly above** paste the following code snippet:

```
PHP
define('FLUENT_COMMUNITY_PORTAL_SLUG', '');
```

1. By setting the slug to be empty (the ”), you are telling WordPress, “I want my community to be the main homepage, with no extra words in the URL.”
2. **Save and Close the File:** Double-check your work, then click the “Save” button in your file editor.

![](https://fluentcommunity.co/wp-content/uploads/2025/09/wp-config-editor-scaled.webp)

1. **Refresh Your Permalinks (Crucial!):** This final step makes your new homepage live.
- Go back to your WordPress Admin Dashboard.
- Navigate to **Settings → Permalinks**.
- Don’t change any settings here. Just scroll to the bottom and click the **Save Changes** button.

**Congratulations!** Go to your website’s main address in a new browser tab. Your community should now be your homepage!

## Goal 2: Give Your Community a Nicer URL

If making your community the entire homepage is more than you need, a great alternative is to simply give it a cleaner, more professional URL, like *yoursite.com/members*.

1. From your WordPress dashboard, navigate to **FluentCommunity**.
2. You will be taken to the Dashboard page with various settings. Look for the **Change Community URL** settings.
3. Inside, you should see a field labeled **Change Community URL**.
4. Simply give the slug words with no spaces (hyphens are okay). Examples: community, members, hub, my-group.
5. And click the **Change Portal URL** button.
6. **Final Step:** Go to **Settings → Permalinks** from your main WordPress menu and just click **Save Changes**. This refreshes your website’s internal map of links.

![](https://fluentcommunity.co/wp-content/uploads/2025/09/FC-cahnge-URL-scaled.webp)

That’s it! Your community now has a beautiful, custom URL.

### Quick Fixes for Common Issues

- **Problem:** “Help! After editing wp-config.php, my site is just a blank white page!”
- **Solution:** Don’t panic! This almost always means there’s a tiny typo in the code. Re-open the wp-config.php file and check the code you added. Correcting the typo will bring your site back. If you can’t find it, restore your backup.
- **Problem:** “I get a ‘Page Not Found’ error after changing the URL.”
- **Solution:** You need to refresh your permalinks. Go to **Settings → Permalinks** in WordPress and click **Save Changes**. This fixes it 99% of the time.

---

## Create an XML Sitemap in FluentCommunity

**Source:** [https://fluentcommunity.co/docs/create-an-xml-sitemap-in-fluentcommunity/](https://fluentcommunity.co/docs/create-an-xml-sitemap-in-fluentcommunity/)

A sitemap works like a roadmap for your website. It helps search engines like Google, Bing, and Yahoo find and index your content more easily and quickly. This feature also helps your community posts, courses, and discussions show up in search results faster and more accurately.

FluentCommunity makes this simple. It includes built-in support for Google-recommended SEO schemas and structured data.

This article will guide you through creating a FluentCommunity XML sitemap for your course, community, spaces, and forums.

## Access the portal Settings

First, you need to make sure your portal is **public** for everyone. If your portal is private, search engines won’t be able to crawl or index your content. Follow these easy steps to enable public access:

Go to the **FluentCommunity Dashboard** and scroll down to the **Portal Access Settings**. Now, under Portal Access, select the option **Everyone**.

Once this is done, your sitemap will be active and your site will be ready to be indexed by search engines.

![](https://fluentcommunity.co/wp-content/uploads/2025/06/XML-sitemap-01-scaled.webp)

### Configure the Sitemap

To configure the sitemap, navigate to the **Tools** section under **Portal Settings**. Here, you’ll see that your portal’s sitemap is automatically created and configured.

You can view the sitemap from the **Sitemap URL**. Your sitemap is now ready and easily****indexable by Google.

![](https://fluentcommunity.co/wp-content/uploads/2025/06/sitemap-created-02-scaled.webp)

If you have any questions, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/). Thank you.

---

## Incoming Webhook in FluentCommunity

**Source:** [https://fluentcommunity.co/docs/incoming-webhook-in-fluentcommunity/](https://fluentcommunity.co/docs/incoming-webhook-in-fluentcommunity/)

FluentCommunity’s **Incoming Webhook** feature lets you to connect external systems or applications to send real-time data into the platform. You can automate workflows, trigger****actions, and sync****data from third-party services like CRMs, email tools, etc.

This guide will walk you through setting up and using Incoming Webhooks in FluentCommunity.

## Accessing the Webhook Settings

To access the webhook settings, log in to your WordPress Dashboard and navigate to the **FluentCommunity portal** from the sidebar.

Then, click the **Settings** button on the bottom left. Next, under the **Portal Settings**, select **Incoming Webhook**.

Once you’re there, you’ll be ready to create and manage your webhooks.

![](https://fluentcommunity.co/wp-content/uploads/2025/06/incoming-webhook-01-scaled.webp)

### Creating a New Webhook

To create a new webhook, click the **Add New Webhook** button. A pop-up will appear where you need to enter the details.

- **Title**: Give your webhook a unique title.
- **Add to Space:** Choose one or multiple spaces from the dropdown menu to which new users will be added.
- **Remove from space:** Select the spaces you want to add to the user when receiving the webhook from the dropdown option.
- **Add to Courses:** Select courses that will be added to the user’s list upon receiving the webhook.
- **Remove from Courses:**From the dropdown menu, select the courses you want to remove from the user’s list when receiving the webhook.
- **Send default WordPress welcome email for new users:**To send a welcome email (WordPress Default) to the user, check the**Send default WordPress welcome email for new users** checkbox.

Once you have added the essential details, click the **Add Webhook** button to activate it.

![](https://fluentcommunity.co/wp-content/uploads/2025/06/add-webhook-02-scaled.webp)

### Using the Webhook URL

Once your webhook is created, a **Webhook URL** will be generated. Use this URL to send payload data from external applications to your FluentCommunity system.

This allows seamless data transfer when:

- A new user signs up
- An existing user logs in
- Any automated action is triggered

For more details on sending payload data via **POST requests** or as **form data**, read the **Webhook API**[Documentation](https://github.com/WPManageNinja/fluent-community-docs/blob/master/incoming-webhook-config.md).

![](https://fluentcommunity.co/wp-content/uploads/2025/06/URL-03-scaled.webp)

### Managing Your Webhook

Once your webhook is complete, you can modify, update, and delete it.

- **Edit Webhook**: Modify webhook settings by clicking the **Edit** button.
- **Remove Webhook**: Delete the webhook using the **Remove** button.

![](https://fluentcommunity.co/wp-content/uploads/2025/06/edit-webhook-04-scaled.webp)

If you have any questions, feel free to contact our[support team](https://wpmanageninja.com/support-tickets/). Thank You.

---

## Report/Analytics

**Source:** [https://fluentcommunity.co/docs/report-analytics/](https://fluentcommunity.co/docs/report-analytics/)

Running a community is exciting, but how do you know what your members actually enjoy? That is exactly where your **Reports and Analytics** come in!

The Analytics dashboard acts as the command center for your community’s health. It tracks real-time data to show you exactly how many people are joining, which *Spaces* are the most popular, and who your most active members are. By understanding these numbers, you can easily figure out what content works best and keep your community growing.

This guide will walk you through every tab of your reports and explain exactly what these terms mean in plain language.

You must have **Administrator** privileges in your FluentCommunity to view the Reports dashboard.

### Step 1: Accessing Your Community Reports

To start diving into your community’s data, you first need to open your analytics dashboard.

1. Log in to your WordPress Dashboard.
2. Click on **FluentCommunity** in the left-hand menu to open your community backend.
3. Select **Analytics** from the left-hand sidebar.

Once opened, you will see a detailed dashboard divided into four main tabs: **Overview**, **Members**, and **Spaces**.

![](https://fluentcommunity.co/wp-content/uploads/2025/02/fc-report-1-scaled.webp)

### Step 2: Filtering Data by Date Range

Before looking at the numbers, it is important to tell the system *when* you want to look at them. In the top-right corner of the Reports page, you will find a **Date Range** dropdown menu.

This filter lets you narrow down your data to a specific time period. For example, you might want to see how much your community grew *this week* compared to *last month*.

Available options include:

- **Today / Yesterday:** Great for checking immediate, daily activity.
- **Last 7 days / Last 30 days:** Perfect for weekly or monthly health checks.
- **This Month / Last Month:** Useful for monthly goal tracking.
- **Custom Range:** Allows you to select your exact start and end dates on a calendar.

![](https://fluentcommunity.co/wp-content/uploads/2025/02/fc-report-2-scaled.webp)

### Step 3: Exploring the Overview Tab

The **Overview** tab is the first screen you see, providing a high-level visual summary of your community’s overall heartbeat.

- **The Main Graph:** This interactive chart shows a line graph of your growth over your selected date range. You can see lines for **Members** (people joining), **Posts** (new discussions), **Comments** (replies), and **Spaces** (new groups created).
- **Popular Day and Time (Heatmap):** Below the graph, you will find a visual schedule showing exactly when your members are online and engaging. Darker colors usually mean more activity.
- **Chart Filter Dropdown:** Located right inside the chart area, you will find a handy dropdown menu. This tool allows you to adjust the timeline view of the graph, grouping your data **Posts**, **Comments**, and **Members** so you can easily spot short-term spikes or long-term trends of this.

🔍 **Example:** If your *Popular Day and Time* heatmap shows that your community is most active on Thursdays at 6:00 PM, that is the perfect time to publish your most important announcements or host a live Q&A session!

![](https://fluentcommunity.co/wp-content/uploads/2025/02/fc-report-3-scaled.webp)

### Step 4: Analyzing the Members Tab

Click the **Members** tab to get a deeper understanding of the people inside your community. This tab breaks down who is joining and who is participating.

**Top Metric Cards (The Big Numbers):**

- **Total Members:** The absolute number of people who have joined your community.
- **Active Members:** Members who have recently logged in and interacted.
- **New Members:** People who joined during the date range you selected.
- **Pending Members:** Users who have applied to join but are waiting for an Admin to approve them.

**Leaderboard Insights (Your Star Players):**

Scroll down to see detailed tables that rank your most engaged users.

- **Top Members:** Users with the highest overall engagement across all activities.
- **Post Starters:** The conversation starters! These are the members who create the most new posts.
- **Top Commenters:** The conversationalists! These members frequently reply to others and keep discussions alive.

![](https://fluentcommunity.co/wp-content/uploads/2025/02/fc-report-4-scaled.webp)

### Step 5: Monitoring the Spaces Tab

*Spaces* are the different groups or categories in your community. Switch to the **Spaces** tab to see which specific topics are thriving.

- **Top Metric Cards:** Get a quick count of your **Total Spaces**, the **Total Posts** and **Total Comments** made inside them, and the **Total Members** who have joined them.
- **Popular Space Table:** This table ranks your individual *Spaces* by how active they are.

![](https://fluentcommunity.co/wp-content/uploads/2025/02/fc-report-5-scaled.webp)

Use these insights to enhance engagement, retain members, and grow your community effectively. If you have any questions about this article, feel free to reach out to our [support team](https://wpmanageninja.com/support-tickets/).

---

