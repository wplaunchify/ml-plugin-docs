# Dynamic Urls

*Category from Redirection documentation*

---

## Dynamic URLs

**Source:** [https://redirection.me/support/dynamic-urls//](https://redirection.me/support/dynamic-urls//)

Sometimes you may want a target URL to contain information that can only be determined at the time of the redirect. For example, the client’s username.

Redirection allows you to use [shortcodes](https://developer.wordpress.org/apis/handbook/shortcode/) in a redirect’s target URL. The most basic shortcodes allow data to be inserted:

- ```
[userid]
```

 – the client’s user ID, if logged in, or 
```
0
```

 if not logged in
- ```
[userlogin]
```

 – the client’s user login (login name), if logged in, or nothing if not logged in
- ```
[unixtime]
```

 – the current time, in Unix time format

For example:

```
/profile/[userlogin]
```

Some shortcodes can contain data, and this data will be transformed. You would typically use this in a regular expression to transform some captured data.

The following transform shortcodes are supported:

- ```
[md5]data[/md5]
```

 – convert the data to the MD5 of the data
- ```
[upper]data[/upper]
```

 – uppercase the data
- ```
[lower]data[/lower]
```

 – lowercase the data
- ```
[dashes]data[/dashes]
```

 – convert any underscores in the data to dashes
- ```
[underscores]data[/underscores]
```

 – convert any dashes in the data to underscores

For example, your old site might use underscores to seperate words and you want to convert this to dashes:

Source: 
```
/oldsite/(.*)
```

Target: 
```
/newsite/[dashes]$1[/dashes]
```

Shortcodes use the standard WordPress shortcode handling functions.

---

