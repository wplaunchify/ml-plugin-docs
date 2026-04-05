# Redirect Regular Expressions

*Category from Redirection documentation*

---

## Redirect Regular Expressions

**Source:** [https://redirection.me/support/redirect-regular-expressions/](https://redirection.me/support/redirect-regular-expressions/)

**Support is provided for the plugin, not for specific regular expressions**. Some information is provided here, and it can also be found on the internet. It is your responsibility to create an expression that suits your needs.

A regular expression (or regex) is a group of characters used to find a pattern within a piece of text.

In the context of Redirection, a plain URL match will match exactly one URL. A regex URL can match many URLs.

In addition to matching many URLs, a regular expression can extract information from the source URL and copy it to the target URL.

A few examples may be helpful. A redirect that has the source URL 
```
/my-url
```

 will only ever match requests for 
```
/my-url
```

.

A redirect that has the source URL 
```
/my-url/.*
```

 will match requests for:

- ```
/my-url/this
```
- ```
/my-url/that
```

And so on.

The important part of 
```
/my-url/.*
```

 is 
```
.*
```

​. This is the regular expression part of the URL, and is equivalent to saying “match 
```
/my-url/
```

 followed by any sequence of characters”.

Note that to enable a regular expression match in Redirection please [ensure you have enabled the ‘regex’ option](https://redirection.me/support/create-redirects/).

![](https://redirection.me/wp-content/uploads/2019/03/regex_before.png)

![](https://redirection.me/wp-content/uploads/2019/03/regex_enabled.png)

Please note that regular expressions are not specific to Redirection. Support will not be provided for them.

#### Regular Expression Syntax

So, regular expressions such as 
```
.*
```

 seem really useful. But what does it actually mean?

In this instance the 
```
.
```

 means ‘any character’, and the 
```
*
```

 means any number of the previous expression. That is, any number of any characters.

But wait, it gets much much more complicated!

Regular expressions allow for very detailed and complex patterns that are beyond the scope of this page. If you want more details then search for ‘regular expressions’ and settle in for a long reading session.

#### Extracting Source Information

Not only can a regular expression match many URLs, it can also extract information from the source URL and copy it to the target URL.

Why would you want to do that? Let’s look at another example. Say you have a site where some pages are under the 
```
/oldpage/
```

 directory, and you’ve moved these to 
```
/newpage/
```

.

- ```
/oldpage/bananas/
```
- ```
/oldpage/best-post-in-the-world/
```

​

And you want to move these to:

- ```
/newpage/bananas/
```
- ```
/newpage/best-post-in-the-world/
```

That is, you want to change 
```
/oldpage/
```

 to 
```
/newpage/
```

, but keep 
```
bananas
```

 and 
```
best-post-in-the-world
```

.

To do this you can create a regular expression such as 
```
/oldpage/(.*)
```

.

Note that the 
```
.*
```

 is surrounded brackets. This tells Redirection to ‘capture’ the data. The target URL would then be 
```
/newpage/$1
```

.

Here the 
```
$1
```

 is replaced by the contents of the captured 
```
(.*)
```

. And so:

```
/oldpage/bananas
```

 => 
```
/oldpage/(bananas)
```

 => 
```
/newpage/$1
```

 => 
```
/newpage/bananas
```

#### Infinite Loops

A frequently occurring problem with regular expression is an **infinite redirect**. That is, you create a regex that redirects to a URL that is itself caught by the same regular expression. This is then redirected again, and again, and again until the browser stops with a 
```
ERR_TOO_MANY_REDIRECTS
```

 message (or equivalent).

For example, say we have this redirect:

```
/index.php/(.*)
```

 => 
```
/portal/index.php/$1
```

If you access 
```
/index.php/banana
```

​it will then be redirected to 
```
/portal/index.php/banana
```

. But wait! The URL 
```
/portal/index.php/banana
```

 itself matches the original regular expression as 
```
index.php/banana
```

 matches 
```
/portal/index.php/(.*)
```

.

If we use the carat 
```
^
```

 character we can *fix* the match to the start of the URL:

```
^/oldpage/(.*)
```

Here the 
```
^
```

 tells the regular expression that it only applies when matched at the start of the URL. This prevents it matching elsewhere in the URL, and stops the infinite redirect.

#### Testing Regular Expressions

There are a lot of resources available for regular expressions, and some of the most useful are regular expression testers. With these you can experiment with a pattern and tune it to match exactly what you want.

- [https://regexr.com/](https://regexr.com/)
- [https://regex101.com/](https://regex101.com/)

Note that Redirection uses [PHP’s regular expressions](http://php.net/manual/en/reference.pcre.pattern.syntax.php). These are commonly known as **PCRE**, and may not be exactly the same as other regular expression libraries.

A good resource to understand regular expressions can be found [here](https://github.com/zeeshanu/learn-regex).

If you want to match a character that is part of the regular expression syntax then you must escape it. For example, if you want to match 
```
?
```

 then you will need to put 
```
\?
```

 as 
```
?
```

 on its own has a special meaning.

#### Matching the whole URL

Redirection performs a regular expression replace – 
```
preg_replace
```

. The redirect source is the match pattern, the target is the replacement pattern, and the requested URL is the subject.

This means that only matched content will be replaced. If you do not match the whole URL then only the part you do match will be replaced, and the rest of the URL will be appended. This is expected behaviour, and is how regular expressions work.

Note in this context the term ‘whole URL’ refers to everything except the protocol and domain.

#### Common Regular Expressions

The following regular expressions are commonly used for WordPress. As mentioned above, you will need to enable the **regex** option.

Note that regular expressions cannot generate new information. For example, you cannot generate a category from the URL if it does not already exist there.

**Redirect date and name permalink**
```
/2020/01/02/post-name/
```

 ⇒ 
```
/post-name/
```

*You may find it easier to use a Permalink Migration*.Source```
^/\d{4}/\d{2}/\d{2}/(.*)
```

Target```
/$1
```

**Redirect date, name, and category permalink**
```
/2020/01/02/category/post-name
```

 ⇒ 
```
/post-name/
```

*You may find it easier to use a Permalink Migration*.Source```
^/\d{4}/\d{2}/\d{2}/.*?/(.*)
```

Target```
/$1
```

**Redirect all URLs to /blog/ except ones that start with /blog/**
```
/old-post-url/
```

 ⇒ 
```
/blog/old-post-url/
```Source```
^/(?!blog)(.*)
```

Target```
/blog/$1
```

**Redirect every page on old site to new site**
```
http://oldsite.com/your-thing/
```

 ⇒ 
```
https://newsite.com/your-thing/
```

*You may find it easier to use a Site Relocate*.Source```
/(.*)
```

Target```
https://newsite.com/$1
```

**Redirect .html pages in a directory**
```
http://oldsite.com/blog/post-name.html
```

 ⇒ 
```
https://newsite.com/post-name/
```Source```
/blog/(.*?)\.html
```

Target```
/$1/
```

**Remove index.php from a URL**
```
http://site.com/index.php/post-name.html
```

 ⇒ 
```
https://site.com/post-name/
```Source```
/index\.php/(.*)
```

Target```
/$1/
```

**Remove .html from Blogger pages**
```
http://site.com/2019/01/02/something.html
```

 ⇒ 
```
http://site.com/2019/01/02/something
```Source```
^/(.*?)\.html$
```

Target```
/$1/
```

**Redirect AMP pages**
```
http://site.com/article/amp/
```

 ⇒ 
```
http://site.com/article/
```Source```
^/(.*?)/amp/$
```

Target```
/$1/
```

**Redirect ?amp pages**
```
http://site.com/article/?amp=12
```

 ⇒ 
```
http://site.com/article/
```Source```
^/(.*?)/\?amp=.*
```

Target```
/$1/
```

---

