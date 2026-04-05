# Matching Redirects

*Category from Redirection documentation*

---

## Matching Redirects

**Source:** [https://redirection.me/support/matching-redirects/](https://redirection.me/support/matching-redirects/)

When you create a redirect it always has at the very least a source URL. You can also optionally configure other details to determine if a request is matched.

![](https://redirection.me/wp-content/uploads/2018/02/redirection_matches.png)

- **URL only** – the source URL must match the requested page URL. This is the basic redirect
- **URL and login status** – the user’s login status is used to determine the match, in addition to the source URL
- **URL and role/capability** – similar to login status, but a logged in user’s role or capability is used to determine the match, as well as the source URL
- **URL and referrer** – the user’s referrer (their previous URL) is used to determine the match, in addition to the source URL
- **URL and user agent** – the browser user agent is used to determine the match, in addition to the source URL
- **URL and IP** – the user’s IP address is used to determine the match, in addition to the source URL
- **URL and WordPress page type** – the current page type (currently 404 only) is used to determine the match, in addition to the source URL
- **URL and cookie** – a cookie is used to determine the match, in addition to the source URL
- **URL and server** – the server name is used to determine the match, in addition to the source URL
- **URL and HTTP header** – an HTTP header is used to determine the match, in addition to the source URL
- **URL and custom filter** – a custom WordPress filter is used to determine the match, in addition to the source URL
- **URL and language** – the browser’s language is used to determine the match, in addition to the source URL

Each match type always requires a source URL. You can optionally enabled the **regex** option to use a regular expression. This will allow you to match against a range of URLs by defining a regular expression pattern. More details on the [regular expression page](https://redirection.me/support/redirect-regular-expressions/).

#### URL and Login Status

This uses the user’s login status to determine the match. It allows you to redirect the user to different URLs depending on whether they are logged in or out.

![login_status_match](https://redirection.me/wp-content/uploads/2017/11/login_status_match-1024x136.png)

When enabled you are shown two options:

- **Logged In** – target URL when the source URL is matched and the user is logged in
- **Logged Out** – target URL when the source URL is matched and the user is not logged in

Leaving one of these blank means that the logged in/logged out status is not used for this particular match.

#### URL and Role/Capability

This uses the logged in user’s role or capability. For example, you can redirect admin users, or editors, or user’s with a particular custom capability.

When enabled you are shown three options:

![](https://redirection.me/wp-content/uploads/2018/07/redirection_role_match.jpg)

- **Role**– the name of a [WordPress role or capability](https://codex.wordpress.org/Roles_and_Capabilities) Note this is the role/capability identifier or slug, and not the text description.
- **Matched Target** – target URL when the source URL is matched and the user’s role or capability matches
- **Unmatched Target** – target URL when the source URL is matched and the user’s role or capability does not match

Leaving one of these blank means that the logged in/logged out status is not used for this particular match. Note that logged out user’s will not match.

#### URL and Referrer

This uses the user’s ‘referrer’ URL in addition to the source URL to determine the match. A referrer URL is sent when someone visits your URL after following a link from another page. For example, if the user is on 
```
http://myexample.com/page
```

 and clicks a link to 
```
http://yoursite.com/other-page
```

 then the referrer will be 
```
http://myexample.com/page
```

.

Note that the referrer information is not guaranteed to be sent by the browser.

When enabled you are shown three options:

![referrer_action](https://redirection.me/wp-content/uploads/2017/11/referrer_action-1024x306.png)

- **Referrer** – the pattern used to match the referrer URL. You can use the **regex** option to enable pattern matching
- **Matched Target** – target URL when the source URL and referrer matches
- **Unmatched Target** – target URL when the source URL matches but the referrer doesn’t

Leaving matched or unmatched blank means that particular condition is not used.

#### URL and User Agent

This uses the user’s browser agent in addition to the source URL to determine the match. A browser agent is sent by your browser to identify itself. It includes information about the operating system (Windows, MacOS etc) and the browser (IE, Firefox, Chrome etc).

You can use this match to redirect the user based on their browser. For example, all mobile users could be redirected to a particular page, and non-mobile to another page.

When enabled you are shown three options:

![](https://redirection.me/wp-content/uploads/2017/11/redirect-user-agent-1024x204.png)

- **User Agent** – the pattern used to match the user agent. You can use the **regex** option to enable pattern matching, and the **Custom** dropdown to use a predefined pattern.
- **Matched Target** – target URL when the source URL and the user agent matches
- **Unmatched Targe**t – target URL when the source URL matches but the user agent doesn’t

Leaving matched or unmatched blank means that particular condition is not used.

#### URL and IP

This matches the client’s IP address in addition to the source URL. This is useful to apply a redirect to a specific client, such as to allow access for an admin user, or to block a badly behaved visitor.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2018/11/url_and_ip_match-1024x371.png)

- **IP** – a list of IP addresses, one per line
- **Matched target** – target URL when the source URL and IP matches
- **Unmatched target** – target URL when the source URL and IP doesn’t match

Leaving matched or unmatched blank means that particular condition is not used.

#### URL and WordPress page type

This matches the WordPress page type in addition to the source URL. Currently the only supported page type is a 404 page. This allows you to redirect all 404 errors if, for example, you wanted to redirect deleted products.

#### URL and language

This matches the browser’s language in addition to the source URL.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2019/09/url_and_language-1024x262.png)

- Language – A comma separated list of languages. A full list can be found [here](http://www.lingoes.net/en/translator/langcode.htm).
- **Matched target** – target URL when the source URL and language matches
**Unmatched target** – target URL when the source URL and language doesn’t match

#### URL and server

This matches against the server name in addition to the source URL. This is useful if you have a subdomain or other domain that points to the same server as your main domain, and you want to redirect only on the other domain.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2018/06/server_match-1024x203.jpg)

- **Server** – the domain name of the server
- **Matched target** – target URL when the source URL and server matches
- **Unmatched target** – target URL when the source URL and server doesn’t match

Leaving matched or unmatched blank means that particular condition is not used.

You may want to read up on [redirecting another site](https://redirection.me/support/redirecting-another-site/).

#### URL and cookie

This matches against a cookie in addition to the source URL. For example, you can check if a tracking, user login, or any other kind of custom cookie exists.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2018/02/match_cookie.png)

- **Cookie name** – the name of the cookie. Case is not important
- **Cookie value** – the value of the cookie. Use the regex checkbox for a regular expression match
- **Matched target** – target URL when the source URL and the cookie matches
- **Unmatched target** – target URL when the source URL matches but the cookie doesn’t

Leaving matched or unmatched blank means that particular condition is not used.

#### URL and HTTP header

This matches any HTTP header in addition to the source URL. You can use this for custom redirects that match any HTTP header for example such as browser language.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2018/02/http_match-1.png)

- **HTTP header** – the name of the header. Case is not important. Use the header name as passed via HTTP, including hyphen
- **HTTP header value** – the value of the header. Use the regex checkbox for a regular expression match
- **Matched target** – target URL when the source URL and the HTTP header matches
- **Unmatched target** – target URL when the source URL matches but the HTTP header doesn’t

Note it is your responsibility to ensure your web server is passing the HTTP headers to PHP via 
```
HTTP_X
```

 in 
```
$_SERVER
```

 values. Some servers need additional configuration, and this is not something Redirection has control over.

Leaving matched or unmatched blank means that particular condition is not used.

#### URL and custom filter

When the URL matches a custom WordPress filter is fired, and you can use this to add your own matching logic. You would use this for custom situations where you cannot represent the match using other means.

When enabled you are shown these options:

![](https://redirection.me/wp-content/uploads/2018/02/custom_filter_match.png)

- **WordPress filter name** – the name of the filter you want to fire. Ensure it doesn’t clash with anything else. The filter will be passed two parameters: 
```
false
```

 and 
```
$url
```

. The filter should return 
```
true
```

 if your logic is a match, and 
```
false
```

 otherwise
- **Matched target** – target URL when the source URL matches and the filter returns 
```
true
```
- **Unmatched target** – target URL when the source URL matches and the filter returns 
```
false
```

 (the default value)

Note the custom code is your responsibility. You will need familiarly with PHP and WordPress. An example is shown below:

```
add_filter( 'my_custom_filter', function( $result, $url ) {  if ( my_custom_logic() ) {    return true;  }  return false;}, 10, 2 );
```

---

