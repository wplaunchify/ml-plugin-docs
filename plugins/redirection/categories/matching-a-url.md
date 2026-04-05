# Matching A Url

*Category from Redirection documentation*

---

## Matching a URL

**Source:** [https://redirection.me/support/matching-a-url/](https://redirection.me/support/matching-a-url/)

At the heart of Redirection is the ability to match a URL and then do something.

A URL looks like this:

```
http://example.com/path/to/something?query=param
```

There are several parts to this:

- Protocol – 
```
http
```

 or 
```
https
```
- Domain – 
```
example.com
```
- Path – 
```
/path/to/something/
```
- Query parameters – 
```
?query=param
```

### Protocol and domain

Typically Redirection will match URLs on the domain that you have installed WordPress on. It’s therefore not necessary to specify the protocol or domain in a redirect.

If you have other domains mapped to your WordPress site then you can use a server redirect to redirect from these other domains.

### Path

The path is key to WordPress posts and should always start with a 
```
/
```

.

You can specify additional options, either when creating a redirect, or by [default](https://redirection.me/support/options/).

![](https://redirection.me/wp-content/uploads/2019/02/url_options.png)

The options are:

- Regex – use a regular expression to match the URL
- Ignore trailing slashes. For example 
```
/your-url/
```

 and 
```
/your-url
```

 will match
- Ignore case. For example 
```
/YOUR-URL/
```

 and 
```
/your-url/
```

 will match.

Redirection will default to the options you specify on the [options page](https://redirection.me/support/options/).

Note that if you are using a regular expression you will need to manage your own trailing slashes in the expression.

### Query Parameters

If you have specific query parameters then you can add them to the source URL:

```
/your-path?product=1&colour=red
```

Note that Redirection will match this regardless of the order in which the parameters are used (i.e. 
```
colour=red&product=1
```

 or 
```
product=1&colour=red
```

).

If your query parameters can change then you can use a [regular expression](https://redirection.me/support/redirect-regular-expressions/).

Additionally you can pick how Redirection handles query parameters:

![](https://redirection.me/wp-content/uploads/2019/02/query_param_match.png)

That is, you can:

- Match query parameters exactly. This is the default
- Ignore all query parameters. For example, if your source URL is 
```
/my-old-post
```

 then it will match 
```
/my-old-post?query=1
```

 and 
```
/my-old-post?anything=true
```
- Ignore and pass parameters to the target. In addition to ‘ignore all query parameters’, this will pass the query parameters to the target. For example, if your source URL is 
```
/my-old-post
```

 and your target URL is 
```
/my-new-post
```

, and the user requests 
```
/my-old-post?tracking=1
```

 then the redirected URL will be 
```
/my-new-post?tracking=1
```

---

