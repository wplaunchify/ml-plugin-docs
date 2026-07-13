# Embed Calendar

*Category from The Events Calendar documentation*

---

## Embed Your Calendar on Another Site

**Source:** [https://docs.nexcess.com/software/the-events-calendar/embed-calendar/](https://docs.nexcess.com/software/the-events-calendar/embed-calendar/)

Do you need to show off your events calendar on another website like Wix or Squarespace? Want to share a tailored calendar view with community event creators or collaborators? With our **Calendar Embed**, you can do just that — in just a few clicks.

### What Is the Calendar Embed?

The **Calendar Embed** feature lets you display a calendar view from your website on any other site using a simple embed code (like a YouTube video embed).

You can choose which events show up by filtering them by **event** **category** or **tag**, then copy and paste the generated code wherever you’d like to share your calendar — on another website, blog, or anywhere on the internet.

**Note:** The Calendar Embed can only use the Month View layout. When someone clicks on an event, the event is opened in a new tab.

### How to Create Calendar Embeds

In your WordPress dashboard, head to **Events → Calendar** **Embeds,** where you will find all your Calendar Embeds. If you don’t have any, you can add them by clicking on “Add New Calendar Embed”.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Calendar-Embeds-main-screen.jpg)

Once you click on “Add New Calendar Embed”, you will have the option**to give your embed a name** and pick the **event categories** and/or **tags** you want to include in this Calendar.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Creating-a-Calendar-Embed.jpg)

Once the Calendar Embed is published, you will be able to see a preview of how it will look once embedded, and be able to get the embed code that is needed to display it on a different site.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/image-32.jpg)

Clicking the “Get Embed Snippet” opens up a dialog window with the code that you need to paste wherever you may want to display this Calendar.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/embed-snippet-2.jpg)

💡 **Tip:** You can create as many custom calendars as you like — each one with its own filters!

### Paste It Into Your Site

Once you’ve generated your Embed Snippet, you can paste it into any site, and the calendar will display. In this example, I am pasting the code in an HTML block in my personal WordPress website to display the Calendar.

![](https://docs.nexcess.com/wp-content/uploads/2026/06/embed-page.jpg)

Once I publish this page, the Calendar will show on my site without needing to have The Events Calendar installed:

![](https://docs.nexcess.com/wp-content/uploads/2026/06/Preview.jpg)

**Please note** that when clicking on the event from an embedded calendar, that event will open in a new tab and will go to the original site it is hosted on.

### Frequently Asked Questions

General Questions**Q: Is Calendar Embed a premium feature?** 
**A:** No, Calendar Embed is available for free to all The Events Calendar users. This feature is available by default and does not require any additional activation.

**Q: Can I create multiple embed calendars?**
**A:** Yes, you can create as many embed calendars as you need, each with its own unique settings and filters.

**Q:** **Will my embedded calendar automatically update when I add new events?**
**A:** Yes, embedded calendars automatically sync with your event data. Any new events that match your calendar’s filter criteria will appear automatically.Implementation Questions**Q:** **Can I restrict which websites can embed my calendar?**
**A:** Currently, the embed code can be used on any website. We don’t support restricting which domains can embed the calendar, but you might be able to achieve this through proper networking or customization.

**Q**: **What happens when someone clicks an event in the embedded calendar?**
**A:** Clicking an event opens the full event page on your original website in a new tab.

**Q:** **Can I customize the appearance of the embedded calendar?**
**A:** The embedded calendar uses your default calendar view styling. While customizing the appearance is not possible out of the box you can try achieving this through customization. You can view our Full guide on customizations on [this page](https://docs.nexcess.com/software/the-events-calendar/customization/), as well as our Developer Docs in [this database](https://docs.theeventscalendar.com/).Technical Questions**Q:** **Will the embedded calendar affect my website’s performance?**
**A:** The embedded calendar functions the same as a visitor accessing the “Events” page directly. It does not load separately from the main site.

**Q:** **Which calendar views are supported in the embedded version?**
**A:** Currently, the month calendar view is supported. Additional views will be added in future updates.

**Q:** **Can I use multiple event categories and tag filters on the same calendar?**
**A:** Yes, you can combine multiple categories and tags to create precisely filtered calendar displays.Troubleshooting Questions**Q:** **What should I do if my embedded calendar isn’t displaying?**
**A:**Check these common solutions:

- Verify the embed code was copied completely
- Ensure your website can be embedded in your target environment inside an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
- Check your internet connection
- Clear your browser cache
- Verify the source website is accessible

**Q**: **Can I update an embedded calendar without generating a new embed code?**
**A:** Yes, any changes made to an existing embedded calendar will automatically reflect in all places where that calendar is embedded, using the same embed code.

**Q:** **Why aren’t all my events showing in the embedded calendar?**
**A:** Check your filter settings in the calendar configuration. Only events matching your selected categories or tags will be displayed.

### Why an Embed Might Not Work

If you’re having trouble with an embed not loading, here are some common reasons why it might happen. For reference, the *source* is the website you’re embedding content**from** (the site you created the Calendar Embed), and the *host* is the website you’re embedding the content *into* (the site where you paste the Embed Snippet).

- **The Source Isn’t Fully HTTPS**
The website you’re embedding (the *source*) might be loading some of its content over HTTP instead of HTTPS. Many browsers or hosting sites (*the host*) will block embeds that aren’t fully secure, so everything on the source site needs to be HTTPS.
- **The Source Is Blocking the Host**
Sometimes the source site may block requests from certain websites. This can happen for a few reasons, like:
- The host is mistakenly flagged as a potential DDoS attacker.
- The host’s IP address is on a blocklist.
- There’s a rule on the source’s server denying traffic from that host.
- **One of the Sites Is Down**
If either the host or source site is experiencing downtime for any reason, the embed will naturally fail until things are back up.
- **The Source Prevents Embedding with Security Headers**
Some websites include a security setting called 
```
X-Frame-Options
```

 that controls whether they can be embedded in other sites. If this header is set to block external domains, the embed won’t work. You can [read more about X-Frame-Options here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).
- **High-Traffic Hosts Might Need Whitelisting**
If you’re using the embed on a site that gets a lot of traffic, the source website might flag the host as suspicious activity. In those cases, you may need to ask the source to whitelist your domain to prevent being blocked.

If you have any questions about Calendar Embeds or run into any issues, please [contact our support](https://theeventscalendar.com/support/), and we’ll be happy to help answer any questions.

---

