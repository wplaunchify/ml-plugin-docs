# Reporting Bugs

*Category from Redirection documentation*

---

## Reporting Bugs

**Source:** [https://redirection.me/support/reporting-bugs/](https://redirection.me/support/reporting-bugs/)

Please read **Before Reporting A Bug** before actually reporting a bug!

#### Before Reporting a Bug

1. Have you read the [FAQ](https://redirection.me/support/faq/)?
2. Have you tried disabling all other plugins on your site? A lot of problems are caused by other plugins misbehaving
3. Have you tried clearing your browser cache? If you are using Cloudflare or an equivalent caching service then please also try clearing your page cache
4. Take a look at the [WordPress.org forum](https://wordpress.org/support/plugin/redirection) to see if others have the same problem
5. Take a look in the [Github repository](https://github.com/johngodley/redirection/issues) to see if a similar problem has been reported

#### Reporting a Bug

If you’ve made it through all those steps (and my apologies for having so many) you can create a bug report in the [Github repository](https://github.com/johngodley/redirection/issues). Click the green **New Issue** button.

![github_new_issue.png](https://redirection.me/wp-content/uploads/2017/11/github_new_issue.png)

If Redirection is displaying an error message then please report the bug through Redirection itself – this will include additional details.

![redirection_error.png](https://redirection.me/wp-content/uploads/2017/11/redirection_error.png)

Be aware that your details will be public. If you do not want this then report the bug directly.

#### Reporting a Bug Directly

If you wish to report a bug directly to me use the [contact form](/contact/) on this site, or use the email option on the **Support** page of the plugin.

**Please include these details in any bug report**:

- Your WordPress, PHP, and plugin version
- A description of what you are trying to do
- A real example, hopefully with something I can actually see and test. For example, a URL that isn’t working
- A screenshot demonstrating the problem

Generally a bug can be identified from this information alone, but sometimes I may need more details. Also, sometimes it helps to have access to your site, so if you are able to provide a login when asked it is a big help. Don’t worry if you don’t want to provide this though.

Please read the above guide to save me a lot of time answering questions

#### Using Browser Developer Tools

Sometimes it can help to see what requests your browser is making. Most browsers have a set of developer tools that you can enable. For example, on Chrome it is accessible from View > Developer > Developer Tools.

Once enabled you should see a window appear. Some information may be shown in the ‘console’ tab:

![](https://redirection.me/wp-content/uploads/2020/02/console_debug.png)

If you click the ‘network’ tab you can see any requests your browser makes:

![](https://i0.wp.com/redirection.me/wp-content/uploads/2019/03/devtools.png?fit=740%2C382&ssl=1)

With this window open if you reload your page in Redirection you should see a lot of requests. Anything in red is an error, and clicking this will show information:

![](https://i2.wp.com/redirection.me/wp-content/uploads/2019/03/devtools_info.png?fit=740%2C358&ssl=1)

This information can be very useful.

#### Further Debugging

Sometimes the only way to debug a problem is by having access to the server on which it is running. There are two kinds of access:

- A WordPress admin login – create a new admin account and share the username and password
- Direct file system access. Usually via FTP/SFTP

I appreciate that some sites are live and you may not want to give access. That’s perfectly fine. If you are ok providing access then a WordPress login is the usual place to start, and a lot of problems can be solved this way.

If the problem requires further debugging then access to the file system access may be required. This can either be via FTP/SFTP or SSH.

---

