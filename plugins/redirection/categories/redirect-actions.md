# Redirect Actions

*Category from Redirection documentation*

---

## Redirect Actions

**Source:** [https://redirection.me/support/redirect-actions/](https://redirection.me/support/redirect-actions/)

Once a URL has been matched you can perform an action, such as redirecting the user, or sending an error. Note that these options may be hidden behind the ‘advanced settings’ cog icon, as described in [creating and managing redirects](https://redirection.me/support/create-redirects/).

![redirect_action](https://redirection.me/wp-content/uploads/2017/11/redirect_action.png)

Pick the type of action from the **When matched** dropdown:

- **Redirect to URL** – redirect the user to another URL, updating the URL in the user’s browser. This is the default
- **Redirect to random post** – redirect the user to a randomly chosen post on your site
- **Pass-through** – loads another page, but keeps the current URL the same
- **Error (404)** – sends an error back to the user
- **Do nothing** – stops Redirection from continuing on

#### Redirect to URL

This is the default behaviour and redirects the user to another page on your site or an external site. You can also configure the redirect code used:

![redirect_to_url_with_code.png](https://redirection.me/wp-content/uploads/2017/11/redirect_to_url_with_code.png)

Redirection supports all standard HTTP codes:

- **301** – moved permanently
- **302** – found
- **303** – see other
- **304** – not modified
- **307** – temporary redirect
- **308** – permanent redirect

#### Redirect to random post

This is similar to Redirect to URL, but sends the user to a randomly chosen page on your site. The page is different each time the URL is visited.

As with Redirect to URL you can select the redirect code sent, although given the random nature of the redirect you are advised to use a temporary redirect.

#### Pass-through

This behaves differently to the previous redirect actions in that the user isn’t actually redirected. Instead the server sends another page to the user, but keeps the current URL the same. In effect it passes-through (or masks) the URL with another URL

You can configure the passed-through page as follows:

![pass_through_action.png](https://redirection.me/wp-content/uploads/2017/11/pass_through_action.png)

You can only use pass-through to other pages in WordPress. This is not the equivalent of an Apache or Nginx rewrite rule.

#### Error (404)

This returns an error code to the user. You can configure the code as follows:

![](https://redirection.me/wp-content/uploads/2017/11/redirect-error-action-1024x168.png)

The available codes are:

- **400** – bad request
- **401** – unauthorised access
- **403** – forbidden
- **404** – standard 404 error page and indicates the page is not currently available, but may become available in the future
- **410** – page gone and indicates the page is no longer available and won’t be available in the future
- **418** – I’m a teapot
- **451** – unavailable for legal reasons
- **500** – internal server error
- **501** – not implemented
- **502** – bad gateway

#### Do Nothing

This, unsurprisingly, does nothing! The request is performed as expected, and whatever appropriate response is sent to the user. The only purpose of this action is to prevent Redirection from continuing on.

This would be useful if you wanted to exclude certain URLs from being redirected by a regular expression.

---

