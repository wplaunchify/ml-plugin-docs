# Tracking 404 Errors

*Category from Redirection documentation*

---

## Tracking 404 errors

**Source:** [https://redirection.me/support/tracking-404-errors](https://redirection.me/support/tracking-404-errors)

As well as [tracking redirected URLs](https://redirection.me/support/logs/), Redirection will track any 404s that occur on your site. These can be found in the 404 log by clicking the **404s** item in the top menu.

You will be presented with a table of 404 entries:

![404_errors.png](https://redirection.me/wp-content/uploads/2017/11/404_errors.png)

The logs will contain the following information about a visitor:

- Time of visit
- URL visited
- Visitor’s browser agent
- Referrer (not always available)
- IP address
- HTTP method
- Domain
- Redirect agent

Some information is only visible by hovering over the row or by changing the display settings. Some information may not be available on older logs.

Log entries can be deleted by clicking the **delete** link, by using the checkboxes and the **Bulk Action** dropdown.

#### Geo IP information

If you wish to see more information about the visitor you can click on the IP address, or click on ‘Geo Info’ that appears when you hover over the URL. This will show additional information about where the IP address is located:

![](https://redirection.me/wp-content/uploads/2018/01/geo-ip-info-1024x779.png)

Note that full information may not be available for all IP addresses.

#### User Agent information

If you wish to see more information about the visitor’s user agent – the browser or client used to make the request – then click on ‘Agent Info’ that appears when you hover over the URL. The user agent can often be used to determine if the visitor is human, or a bot or other automated tool.

![](https://redirection.me/wp-content/uploads/2018/01/user-agent-info-1024x299.png)

Note that full information may not be available for all user agents.

#### Grouping by URL, IP, or User Agent

Viewing your logs by aggregate can be useful when deciding where to focus your attention. You can achieve this by grouping the logs by URL, IP, or user agent:

![](https://redirection.me/wp-content/uploads/2020/09/image.png)

You will then see a list of 404s grouped by the appropriate value, along with a total of the number of entries for each.

Using this you can determine what the biggest source of 404 errors is on your site, along with the IP address of the client making the most requests.

Under each entry are special actions to redirect, ignore, or block, that will be performed on the entire group.

#### Using the 404 log to Improve your Site

Sometimes a 404 occurs because you’ve incorrectly linked something, or you changed a URL, or updated your permalinks. In these instances you will find a lot of *correctable* 404s. That is, 404s that you need to correct by creating a redirection.

While you can copy and paste the URL into the redirect page, there’s an easier way of doing this by clicking the **Add Redirect** option found by hovering over a row:

![add_404_redirect](https://redirection.me/wp-content/uploads/2017/11/add_404_redirect-1.png)

Clicking this will show a simple redirect form where you can enter the target URL.

![add_404_redirect.png](https://redirection.me/wp-content/uploads/2017/11/add_404_redirect.png)

Selecting the **delete all logs for this 404** will also remove any 404 log entries that match the source URL.

#### Bots & Baddies

You may find that your 404 log is full of unknown and mysterious URLs. It is very likely these are caused by bots – automated programs – that are probing your site to find vulnerabilities.

This may sounds alarming but it’s ‘normal’ behaviour for websites and there’s little you can do about it. It’s important to update the software on your site so that they never find a vulnerable piece of software.

If you have the ability to block IP addresses then you can use the IP information to block addresses that are causing a lot of 404 errors.

Otherwise, don’t worry about them – there’s nothing you have done wrong.

#### Searching

If you have a lot of logs you may find it useful to use the search facility to find a particular entry.

![](https://redirection.me/wp-content/uploads/2019/09/404_search-273x300.png)

#### Customising the display

You can change what information is displayed by using the display dropdown. Pick from the pre-defined list, or use a custom display.

![](https://redirection.me/wp-content/uploads/2019/09/404_display-245x300.png)

---

