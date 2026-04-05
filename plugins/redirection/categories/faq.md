# Faq

*Category from Redirection documentation*

---

## Frequently Asked Questions

**Source:** [https://redirection.me/support/faq/](https://redirection.me/support/faq/)

Here are some frequently asked questions:

#### I deleted a redirection, why is it still redirecting?

Your browser will cache redirections. If you have deleted a redirection and your browser is still performing the redirection then [clear your browser cache](http://www.refreshyourcache.com/en/home/).

#### Can I open a redirect in a new tab?

It’s not possible to do this on the server, whether using Redirection or otherwise . Instead you will need to add 
```
target="_blank"
```

 to your link in your HTML.

To clarify, this is not possible in Redirection. A redirect cannot open in a new tab. You must change the HTML on your page.

It is advised that you leave opening links in tabs up to the user. This is standard website behaviour and you are likely to make your site harder to use if you force it.

#### Can I redirect an anchor (#)?

No, the anchor is not sent in the request and is not received by the server. You will need to do any redirections on the client using JavaScript.

#### Can I redirect all 404 errors?

No, and it isn’t advised that you do so. A 404 error is the correct response to return for a page that doesn’t exist. If you redirect it you are indicating that it once existed, and this could dilute your site.

Use a plugin like [404 Page](https://wordpress.org/plugins/404page/) to improve your error pages.

#### I get a lot of weird URLs in my 404 log, what should I do?

Redirection reports on your site but doesn’t add any interpretation of why stuff is happening.

You can use the log information, such as IP, user agent, and referrer, as well as your own personal knowledge of the site, to understand the requests more. If they are coming from your own site then you should fix any bad links that are causing the requests. If they are coming from another site then you can ask the other site to update their links.

Sometimes the requests are made by bots, and there is nothing you can do about this other than blocking their IP address.

The 404 log is not a todo list and you shouldn’t think you need to ‘fix’ it. A 404 is a valid response for a page that doesn’t exist and has never existed.

#### I’m trying to redirect a PDF/HTML/PHP/ASPX/JPG file and it doesn’t work

Your web server is probably configured to handle files directly rather than pass the request through to PHP and WordPress.

Please refer to the [URL not redirecting documentation](https://redirection.me/support/problems/url-not-redirecting/).

#### How do I give access to non-administrators?

Please refer to the [permissions documentation](https://redirection.me/developer/permissions/).

#### Can you help me with a regular expression?

I get many many requests to help with regular expressions, and doing so would require a lot of time. Please use the documentation on this site, and then look on the internet in general. Regular expressions are a complicated subject that is not specific to Redirection and I can’t help with specific cases.

#### Can I redirect an external site?

Requests for the external site must go through the same site where Redirection is running. You can achieve this by ‘mapping’ the external domain to your current domain (i.e. you use the same host or server for both domains).

It is impossible to redirect an external site that is hosted elsewhere, whether using Redirection or any other tool. Your only option is to perform the redirect on the external site.

#### What is a greedy expression?

A regular expression is greedy when it unintentionally matches more than you want. For example, the expression:

```
/blog/(.*)
```

This is designed to match a URL like 
```
/blog/my-post
```

. However, it will also unintentionally match 
```
/something-else/blog/another-post
```

.

If you use an anchor 
```
^
```

 then the expression is tied to the start of the URL:

```
^/blog/(.*)
```

This prevents it unintentionally matching other URLs.

#### Can I download older versions of the plugin?

Yes, all versions are available on the [wordpress.org plugin page](https://wordpress.org/plugins/redirection/advanced/):

---

