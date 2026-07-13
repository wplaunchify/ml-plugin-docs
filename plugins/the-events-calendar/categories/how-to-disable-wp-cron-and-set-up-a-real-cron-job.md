# How To Disable Wp Cron And Set Up A Real Cron Job

*Category from The Events Calendar documentation*

---

## How to Disable WP-Cron and Set up a Real Cron Job

**Source:** [https://docs.nexcess.com/software/the-events-calendar/how-to-disable-wp-cron-and-set-up-a-real-cron-job/](https://docs.nexcess.com/software/the-events-calendar/how-to-disable-wp-cron-and-set-up-a-real-cron-job/)

Cron jobs in WordPress are used to schedule events, like Event Aggregator scheduled imports. They are *supposed* to work on a set schedule, but sometimes they don’t trigger at the proper intervals depending on factors like site traffic and they can affect your site’s performance.

If you are running into issues with WP-Cron, we’d recommend you disable it and set up a real cron job, which you can do through your hosting provider.

We’ll walk you through those steps so that your imports come through at the time you scheduled them for.

## Disable WP-Cron

The first thing you’ll want to do is to disable WP-Cron on your WordPress site. In order to do that, navigate to your **wp-config.php** file in your main WordPress folder and add the following line before the “*/* That’s all, stop editing! Happy blogging. */*” line:

```
define('DISABLE_WP_CRON', true);
```

## Setting Up a Real Cron Job

There are a few different ways to set up a real cron job for your WordPress site. This will depend on the hosting provider that you have. In any case, you’ll want to log in to your web hosting control panel and navigate to the **Cron Jobs**section.

Next, you may see some options to specify how frequently you’d like the cron job to trigger. Your hosting provider may have limits on the frequency, but go ahead and update your preferences in the settings.

Lastly, you’ll want to add a **Command** to complete the process. Again, it may differ slightly depending on your host, but it will look something like this:

```
wget -q -O - https://domain.com/wp-cron.php?doing_wp_cron >/dev/null 2>&1
```

Don’t forget to change domain.com to your website. Now click **Add New Cron Job** and you’re good to go!

Note: If your hosting provider does not include a cron service, you can use a [free external cron service](https://cron-job.org/en/) instead.

---

