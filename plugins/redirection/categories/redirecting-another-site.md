# Redirecting Another Site

*Category from Redirection documentation*

---

## Redirecting Another Site

**Source:** [https://redirection.me/support/redirecting-another-site/](https://redirection.me/support/redirecting-another-site/)

Sometimes you may want to redirect another domain. For example, you might be changing domain name, and want all URLs on the old domain to redirect to the new one. Maybe you have multiple domains and want a redirect to occur on another one.

This is possible. However, it can be tricky, and some times it is not possible. Let’s look at why.

When your browser makes a request to a site, the request is processed by whatever server is currently handling the domain.

If you have a new site, and have installed Redirection there, then the requests will still go to your old site, and your redirects won’t work

### Solution 1 – install Redirection on the other domain

This is the easiest, but requires the old domain to remain.

- Install Redirection on the old domain
- Use the [Site Relocate](https://redirection.me/support/site-options/) feature to redirect all requests to your new site

### Solution 2 – map the old domain to your new site

This uses DNS and server settings so that requests for your old domain go to the new site. It is more complicated.

- Modify the DNS for your old domain so that it points or maps to the same host as your new domain
- Modify your new server so that it can accept requests for your old domain
- Using Redirection you can use the [Site Alias](https://redirection.me/support/site-options/) feature or can create a [URL and server](https://redirection.me/support/matching-redirects/) match

The first two parts are specific to your domain registrar and host provider and are not related to Redirection. You should contact the respective support services for help.

Sometimes your server configuration may not allow this to work, may do its own redirects, or may handle certain URLs differently. You will need to resolve this yourself.

Note that if using a URL and server match you do not need to create a regular expression to match the server name.

### Common Questions

#### Is it possible to redirect an external site you don’t have control over?

No. This is not possible using Redirection or any other technique. You need control over a domain in order to redirect it.

#### Do I need to keep paying for the old domain?

Yes.

#### Redirection keeps changing my redirects to ‘URL and server’ – why?

You are trying to create a redirect for a domain that is not the same as the one where Redirection is installed. Please read the above for how to make this work.

---

