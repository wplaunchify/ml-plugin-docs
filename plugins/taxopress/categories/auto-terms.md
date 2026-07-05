# Auto Terms

*Category from TaxoPress documentation*

---

## Auto Terms: When to Use

**Source:** [https://taxopress.com/docs/when-to-use/](https://taxopress.com/docs/when-to-use/)

The “Auto Terms” feature in TaxoPress Pro allows you to generate terms for your WordPress content. There are several methods available to scan your content and suggest terms.

---

## When to Use Auto Terms

The “When to Use” tab allows you to choose the settings for each method:

- **Posts**: This runs Auto Terms when a post is saved or updated.
- **Schedule**: This runs the Auto Terms feature on a daily or hourly schedule. [Click here for more details](https://taxopress.com/docs/schedule-auto-terms-processing/).
- **Existing Content**: This allows you to run the Auto Terms feature on existing content. [Click here for more details](https://taxopress.com/docs/taxopress/taxopress-existing-content/).
- **Metaboxes**: This allows users to run the Auto Terms feature when editing content. [Click here for more details](https://taxopress.com/docs/taxopress/taxopress-metaboxes/).

when to use

---

## Options for the “Posts” and “Schedule” settings

- **Auto Terms Limit**: This controls the maximum number of terms that can be added to each post.
- **Target** **content**: This option allows you to avoid adding extra terms if the post already has terms. For example, if this is unchecked, Auto Terms will add the term “Press” to a post if it finds the word “WordPress”.
- **Whole words:**This option will force TaxoPress to look only for whole words. For example, if you leave this unchecked, TaxoPress will automatically add the term “Blog” if it finds the words “blogger” or “blogging”.
- **Hashtags:** If this option is also enabled, you will be able to use the # symbol and still create terms. So if you use “#WordPress” in a post, TaxoPress will be able to automatically add a term “WordPress”.

---

## The Auto Terms Feature on Large Sites

**Source:** [https://taxopress.com/docs/large-sites/](https://taxopress.com/docs/large-sites/)

The Auto Terms feature in TaxoPress can be resource intensive because it does need to scan your content.

We recommend being careful when running Auto Terms on a large site. We have safeguards in place so you can run Auto Terms without causing time outs on your site or server. If your site has more than 1000 posts, please consider using these safeguards.

You will find some of these safeguards inside the “Auto Terms” settings in TaxoPress Pro. This image below shows these new safeguards for the “[Existing Content](https://taxopress.com/docs/add-auto-terms-to-existing-content/)“ feature.

- **Cron schedule**: This allows you to run Auto Terms in the background. If you try to run a large process in the browser, some browsers may for a time out. *Enable this feature for large sites*.
- **Exclude previously analyzed content**: This enables you to skip posts that have already been analyzed. *Enable this feature for large sites*.
- **Limit per batches**: This enables you to add Auto Terms to content in batches. *Set this to a small number for large sites*.
- **Batches wait time**: This is the wait time (in seconds) between processing batches of Auto Terms. *Set this to a high number for large sites*.
- **Limit Auto Terms, based on published date**: This setting allows you to add Auto Terms only to recent content. *Set this to recent content for large sites*

schedule settings

---

## Use Regular Expressions to Analyze Content

**Source:** [https://taxopress.com/docs/analyze-content-with-regular-expressions/](https://taxopress.com/docs/analyze-content-with-regular-expressions/)

TaxoPress Pro allows you to use Regular Expressions to change how Auto Terms analyzes your posts.

By default, TaxoPress runs this code to determine if a term exists in content:

> if(strpos($content, ' '.$term.' ') !== FALSE) {//add $term}

That code will change slightly if the “Whole words” setting is unchecked in the “Options” tab.

If that box is unchecked, TaxoPress will add terms even if they are not part of a whole word. In that situation, TaxoPress uses this code:

> stristr( $content, $term )

You can add your own Regular Expressions under the “Advanced” tab of TaxoPress Pro.

An example regular expression 
```
/\b({term})\b/i
```

 will match the whole word. TaxoPress will replace  
```
{term}
```

 with the term name before the regex action.

---

## Logs for Auto Terms

**Source:** [https://taxopress.com/docs/logs-for-auto-terms/](https://taxopress.com/docs/logs-for-auto-terms/)

A log is available for the Auto Terms feature. This is useful because you can set the Auto Terms feature to run on a schedule. So it can be very useful to know what happened on your site when you’ve set up an automatic process.

On all of the Auto Terms screens, you will see the “Logs” button, as shown in the image below:

This “Logs” area has one entry for every time a post is processed. In the image below, you can see that Auto Terms ran for five posts. In this example, Auto Terms added terms to four of the posts. Here’s what each column means in the Logs table.

- **Post**: This is the post that was analyzed.
- **Post type**: This is the post type that Auto Terms is analyzing.
- **Taxonomy**: This is the taxonomy that Auto Terms is using to search for matches.
- **Source**: This can be “Manual post update,” “Existing content”, or “Schedule”.
- **Terms added**: These are the terms that were successfully added to the post.
- **Status message**: This explains the outcome of the process in more detail.
- **Date**: This shows the date and time that the post was analyzed.
- **Settings**: This link goes to the settings that are controlling this process.

---

## Managing the Auto Terms Logs

If you have a busy site, the Logs area may become busy. We have provided a few tools to help you manage the logs:

- **Disable Logs**: This button will completely disable the Logs feature.
- **Delete All Logs**: This will remove all the logs stored on your site.
- **Limit the number of logs**: This will set a maximum number of logs to store. Only the most recent logs will be kept. So if the limit is set to “1000”, TaxoPress will keep the 1000 most recent log entries and delete anything older.

---

## Technical Details for Logs

The TaxoPress logs are stored as a private post type called 
```
taxopress_logs
```

 in the 
```
_posts
```

 table.

The details of each log are stored in the 
```
_postmeta
```

 table. This image shows the details stored for each log:

---

## Automatically Add Existing Terms

**Source:** [https://taxopress.com/docs/automatically-add-existing-terms/](https://taxopress.com/docs/automatically-add-existing-terms/)

The Auto Terms feature can scan your content and automatically assign existing terms. For example, you have a term called “WordPress”. Auto Terms can analyze your posts and when it finds the word “WordPress”, it can add that term to your post.

Here’s an example of how it works:

- You add “Software” to your list of “Tags”.
- If your post content or title contains the word “Software”, then TaxoPress will automatically add “Software” as a term for this post.

---

## How to enable Auto Terms for existing terms

- Go to TaxoPress > Auto Terms in your WordPress admin menu.
- Choose the taxonomy you want to use with Auto Terms. In the image below, I’ve chosen “Tags”.
- Choose the post types you want to use with this feature. In the image below, I’ve chosen “Posts”.

manage auto terms existing

- You will find the other key setting in the “Existing Terms” setting. You need to choose whether to use all the terms in your taxonomy, or only a select group. If you set the “Use only some terms in the selected taxonomy” option, then TaxoPress will ask you to choose which terms will be used with the Auto Terms feature.

sources tab

---

## How to add existing terms

- Write a new post. Include at least one of the keywords that exist as terms on your site. In the image below, the post includes “WordPress” and “CMS”.
- Publish the post.
- Your keywords will automatically be added to the Tags box.

---

## Automatically Add New Terms (Pro)

**Source:** [https://taxopress.com/docs/automatically-add-new-terms/](https://taxopress.com/docs/automatically-add-new-terms/)

This feature requires the Pro version of the TaxoPress plugin

TaxoPress has a feature that can analyze your content and automatically add new terms. This will be very useful for anyone who creates a lot of content.

This feature works by integrating with OpenAI, IBM Watson, Dandelion or Open Calais systems to scan content and create terms.

---

## An example of automatically adding new terms

Let’s see an example of how this feature works. I’ve created a new post, using the text from the “About Us” page on WordPress.org.

When I publish this post, TaxoPress scans the post and adds new terms, as you can see in the image below:

This feature can work with any taxonomy and post type. For example, in the image below, I have a WooCommerce product. TaxoPress has scanned the content and added new terms into the “Product tags” area.

In the next screenshot, you can see an example with bbPress. In this example, TaxoPress used the Auto Terms feature to scan a new bbPress topic and automatically added new terms to the “Topic Tags” area.

---

## How does this Auto Terms feature work?

This Auto Terms feature to add new terms is built on top of external services. OpenAI is the default option. You can also enable IBM Watson, Dandelion, and LSEG/Refinitiv via the “Settings” area of TaxoPress. The option to use these services is available only in TaxoPress Pro.

auto terms openai only

Once you have an API key for OpenAI or another service, go to “TaxoPress”, then “Auto Terms” in your WordPress admin menu. You can enter your API key here on the “Sources” tab.

openai key

---

## Auto Terms: Schedule

**Source:** [https://taxopress.com/docs/schedule-auto-terms-processing/](https://taxopress.com/docs/schedule-auto-terms-processing/)

Auto Terms is a TaxoPress feature that automatically adds relevant terms to posts. Using the “Auto Terms Schedule” screen you can automatically run this process every hour or day.

---

## Why schedule Auto Terms?

Some TaxoPress users rely on Auto Terms Schedule to add terms to posts that are imported. Here are some typical requests:

- “I’m importing posts via the WordPress API and the auto-tagging is not processing on those posts. Can I set this up using a cron job?”
- “How can I add terms when I insert many products in WooCommerce through an external service?”

These situations are the best use of the Auto Terms Schedule feature. When you import new posts, that can require a lot of processing power from your server. First you import and posts and then later you use Auto Terms Schedule to scan those new posts.

---

## How to schedule Auto Terms

TaxoPress allows you to schedule the Auto Terms feature to run either **hourly** or **daily**. TaxoPress users will see a “Schedule” tab, as you can see in the screenshot below. This is really useful if you are regularly updating your posts, or if you’re automatically importing new posts.

schedule tab

This feature will create a cron event in your site. You can see these events using a plugin such as “[WP Crontrol](https://wordpress.org/plugins/wp-crontrol/)”. This screenshot below shows both cron events that are possible with TaxoPress:

```
taxopress_cron_autoterms_hourly
taxopress_cron_autoterms_daily
```

On the “Schedule” screen you will be able to see recent results produced by these cron jobs. You can see all the results by visiting the [Auto Terms Logs screen](https://taxopress.com/docs/logs-for-auto-terms/).

schedule runs

---

## Safeguards for Large Sites

If you have a large site (for example, over 50,000 posts) and want to use Auto Terms, we provide some safeguards to help you analyze so much content successfully. These will prevent timeouts if you’re trying to process a lot of content or using an underpowered server.

The “Schedule” tab has the following four safeguards:

- **Exclude previously analyzed content**: This enables you to skip posts that have already been analyzed by the Schedule feature.
- **Limit per batches**: This enables you to add Auto Terms to content in batches. If you have a lot of content, set this to a lower number to avoid timeouts.
- **Batches wait time**: This is the wait time (in seconds) between processing batches of Auto Terms. If you have a lot of content, set this to a higher number to avoid timeouts.
- **Limit Auto Terms, based on published date**: This setting allows you to add Auto Terms only to recent content.

safeguards

---

## Auto Terms: Sources

**Source:** [https://taxopress.com/docs/sources-for-auto-terms/](https://taxopress.com/docs/sources-for-auto-terms/)

The “Auto Terms” feature in TaxoPress allows you to generate terms for your content using the existing terms on your WordPress site. You can also use the OpenAI service to create new terms.

- **Existing terms**: This will analyze your content and automatically add existing terms from your site.
- **OpenAI**: This service will analyze your content and automatically add new terms (only in TaxoPress Pro).

You will find these options under the “Sources” tab, as in the image below. You can choose only one option or multiple options.

The “Existing Terms” tab allows you to add existing terms from your site.

auto terms sources

This feature requires the Pro version of the TaxoPress plugin

The “OpenAI” tab can automatically create and add new terms.

open ai settings

---

## Auto Terms: Existing

**Source:** [https://taxopress.com/docs/add-auto-terms-to-existing-content/](https://taxopress.com/docs/add-auto-terms-to-existing-content/)

TaxoPress Pro can automatically add terms to existing content. This “Existing Content” feature allows you to add terms to content that was previously created without any current terms.

---

## How to use Auto Terms with existing content

- Go to TaxoPress > Auto Terms Existing.
- In the top left corner you can choose an [Auto Terms](https://taxopress.com/docs/introduction-to-auto-terms/) setting. This is where you can choose the post types to scan, and the taxonomies to use. For example, you can choose to can only Posts and add only Categories. Or you can choose to scan WooCommerce Products and add Product Tags.

add exisiting content

- Click the “Add Auto Terms to existing content” button.
- You will now see a progress bar showing the terms being added.

existing content result

If you realize you made a mistake adding any terms, you can use other TaxoPress features such as [Remove Terms](https://taxopress.com/docs/remove-terms/) or [Delete Terms](https://taxopress.com/docs/delete-terms/) to clean up the terms.

---

## Safeguards for Large Sites

If you have a site with many posts, or if you are not on powerful server, you may experience timeouts when scanning content. To use this Existing Content feature, we provide some safeguards to help you analyze a lot of content successfully. These will prevent timeouts if you’re trying to process a lot of content or using an underpowered server.

As you saw in the images above, the “Existing Content” screen has the following four safeguards:

- **Exclude previously analyzed content**: Once a post has been analyzed it will not be analyzed again. This stops the “Existing Content” from repeatedly checking the same posts. *Check this box to help avoid timeouts*.
- **Limit per batches**: This enables you to add Auto Terms to content in batches. *Set this to a lower number to avoid timeouts*.
- **Batches wait time**: This is the wait time (in seconds) between processing batches of Auto Terms. *Set this to a higher number to avoid timeouts*.
- **Limit Auto Terms, based on published date**: This setting allows you to add Auto Terms only to recent content. *Set this to a limited time range to avoid timeouts*.

---

## Auto Terms: Options

**Source:** [https://taxopress.com/docs/auto-terms-options/](https://taxopress.com/docs/auto-terms-options/)

The Auto Terms feature in TaxoPress has several options that you can configure:

- **Add terms if synonyms found**: This is available in TaxoPress Pro and links to [the Synonyms feature](https://taxopress.com/docs/synonyms/).
- **Content statuses**: You can choose to run the Auto Terms feature on unpublished or unpublished content

auto terms options

---

## Introduction to Auto Terms

**Source:** [https://taxopress.com/docs/introduction-to-auto-terms/](https://taxopress.com/docs/introduction-to-auto-terms/)

The Auto Terms feature can scan your content and automatically assign existing and / or new terms.

You can [add existing terms](https://taxopress.com/docs/automatically-add-existing-terms/) (available in Free and Pro versions), and you can also [create and add new terms](https://taxopress.com/docs/automatically-add-new-terms/) (requires the Pro version).

- Go to TaxoPress > Auto Terms in your WordPress admin menu.
- **Taxonomy**: Choose the taxonomy you want to use with Auto Terms. In the the image below, we’ve chosen “Tags”.
- **Find term in**: You can choose which areas of your content to scan. In addition to the Title and Content, you can choose to scan fields provided by 3rd party plugins such as WooCommerce, Advanced Custom Fields, and The Events Calendar.

auto terms general

You can also choose which post type should be scanned for terms. In this screenshot below, we’ve selected “Posts”.

auto terms post type

The other required setting is under “Sources”. You can choose which tools to use for scanning your content:

- **Existing taxonomy terms**: [add existing terms](https://taxopress.com/docs/automatically-add-existing-terms/).
- **OpenAI**: [create and add new terms](https://taxopress.com/docs/automatically-add-new-terms/) (only available in TaxoPress Pro).

existing terms openai

Once you’ve selected the options, you can use the “Preview” tab to see what kind of terms will be added to your content. In the screenshot below you’ll see a preview of the “Existing Terms” and “OpenAI” options.

preview auto terms

---

