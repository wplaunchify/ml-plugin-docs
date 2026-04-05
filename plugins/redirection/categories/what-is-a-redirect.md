# What Is A Redirect

*Category from Redirection documentation*

---

## What is a redirect?

**Source:** [https://redirection.me/support/what-is-a-redirect/](https://redirection.me/support/what-is-a-redirect/)

So Redirection manages redirects. Great, but what actually is a redirect?

#### The Basics

When a browser loads a page on a site it makes a request to the site’s server using the URL as the address.

If everything works fine the server returns the page along with a status code – in this case a **200** – to indicate that everything was successful.

If a browser makes a request to a URL that doesn’t exist the server will return a **404** code to indicate the URL is unknown.

There are a lot of other status codes, and some of them (the **300** series) indicate to your browser that the URL has moved and now lives somewhere else.

#### Redirect Codes

The **300** series of status codes are known as redirects. A browser makes a request for a URL and the server, rather than returning the page, returns a redirect code that tells the browser where the page is now located. The browser makes another request for the new URL and the page is loaded.

#### What kind of redirect do I need?

There are two main redirects:

- **301** – A **permanent** redirect. Use this when the redirected page will not be restored
- **307** – A **temporary** redirect. Use this when you temporarily want to redirect the URL, but expect the original to be used at some point in the future

You can use either in Redirection by clicking the advanced editing icon (the small cog) and changing the code from the dropdown.

---

