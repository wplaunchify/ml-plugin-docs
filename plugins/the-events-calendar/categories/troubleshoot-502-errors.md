# Troubleshoot 502 Errors

*Category from The Events Calendar documentation*

---

## Troubleshooting 502 and 503 Errors with The Events Calendar

**Source:** [https://docs.nexcess.com/software/the-events-calendar/troubleshoot-502-errors/](https://docs.nexcess.com/software/the-events-calendar/troubleshoot-502-errors/)

## 502 Bad Gateway Errors

A “502 Bad Gateway” (or sometimes “502 Proxy Error”) is an HTTP status code indicating that a server functioning as a **gateway or proxy** received an invalid or no response from an upstream server.

In simpler terms: your browser sends a request → it hits a server or proxy → that server tries to pass it along (to a PHP process, database, or another service) → but the upstream component fails or times out → so the gateway returns 502.

Because calendar pages tend to involve complex queries (dates, recurrences, filters), they can be more vulnerable to pushing against resource limits. Also, in some cases the error isn’t limited to calendar pages: when editing or saving an unrelated page, or viewing other pages after some activity, triggers a 502 error.

Follow these steps to diagnose the problem.

#### 1. Turn on Debugging + Check Logs

Start by enabling WordPress debug output in 
```
wp-config.php
```

:

```
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

With this, WordPress writes internal errors to the file 
```
wp-content/debug.log
```

. Check this file for PHP errors, fatal crashes, or warnings.

Parallel to that, examine your server’s logs (web server error logs, PHP-FPM logs, proxy logs). Look for entries like “upstream timeout”, “connection refused”, “killed process”, or segmentation faults.

[Here](https://docs.nexcess.com/software/the-events-calendar/how-to-enable-debugging-in-wordpress/) is the complete guide.

#### 2. Reproduce the Error in a Minimal Setup

Deactivate all plugins except The Events Calendar plugin. Switch your theme temporarily to a default WordPress theme (Twenty Twenty, Twenty Twenty-Three, etc.). Now try accessing the calendar page.

- If the error vanishes, you likely have a plugin or theme conflict interfering with TEC.
- If the error remains, it’s more likely an infrastructure or configuration problem.

Once you confirm it’s caused by a plugin/theme, reactivate them one by one (or in small batches), each time retesting the calendar page. This way you’ll isolate which component causes the failure.

#### 3. Inspect Database / Heavy Queries

Calendar pages often run complex queries:

- Fetching events over date ranges
- Processing recurring events
- Filtering by categories, venues, organizers
- Merging or deduplicating results

Use a query [profiling tool](https://docs.nexcess.com/software/the-events-calendar/how-to-find-and-share-slow-database-queries-in-wordpress/) such as Query Monitor to see which queries on the calendar view are taking long or failing entirely.

If one query is extremely slow, that may cause PHP or the upstream to time out or be killed. If that’s the case, open a support ticket and share the slow queries with us.

#### 4. Increase Resource / Timeout Limits

If the failure seems to originate from long or heavy operations, try [increasing limits](https://docs.nexcess.com/software/the-events-calendar/resolved-allowed-memory-size-exhausted/) temporarily:

- In 
```
php.ini
```

 or 
```
.htaccess
```

 (if allowed): increase 
```
memory_limit
```

, 
```
max_execution_time
```

, 
```
max_input_vars
```

,

After applying those changes, retest the calendar page. If it now works (or fails less), then resource limits are a contributing factor.

#### 5. Check Proxy / Reverse Proxy / CDN Layers

If your site runs behind a proxy, load balancer, or CDN (e.g. Cloudflare, Varnish, NGINX in front, etc.), temporarily bypass or disable them and test again.

Misconfiguration or aggressive timeouts in these layers sometimes terminate the request prematurely, even if the backend is working fine.

Also verify that rewrite rules or routing rules for TEC calendar endpoints are not accidentally redirecting or misrouting through a failing upstream.

#### 6. Engage Your Host / Infrastructure Team

If you still can’t isolate the cause, bring your collected logs, query profiles, and reproduction steps to your hosting or infrastructure provider. They may have deeper insight:

- Internal server logs or crash dumps
- Resource usage metrics (CPU, memory, I/O)
- Limits enforced at server level (e.g. process timeouts, memory caps)

In many cases, hosts have tools or insights not accessible to you, and they can adjust lower-level settings or monitor processes in real time.

### Resolving the Issue

Once you have some idea where the failure lies, here are common fixes:

- **Fix plugin/theme conflict**: disable or replace the offending plugin, or correct faulty theme code that interacts with TEC.
- **Optimize calendar queries / event logic**: limit the number of events to show per page and per day in *Month View* under **Events → Settings → Display →Calendar**
- **Increase server and PHP limits**: raise memory, max execution time, process counts.
- **Tweak proxy / server config**: increase timeouts and buffer sizes in NGINX / load balancer, make sure proxy passes requests correctly.
- **Temporarily disable caching / proxy layers**: bypass caching or CDN to confirm they aren’t interfering.
- **Rollback updates**: if the issue began after updating TEC, WordPress, or PHP, consider [rolling back](https://docs.nexcess.com/software/the-events-calendar/accessing-older-plugin-versions/) (in [staging](https://docs.nexcess.com/software/the-events-calendar/creating-and-using-a-wordpress-staging-site/) first) to see if that resolves the error.
- **Collaborate with host support**: sometimes only the host can change deep kernel or infrastructure settings to prevent process kills or crashes.

A 502 error on TEC’s calendar page often indicates a breakdown somewhere in the chain, from server to PHP to database or proxy. Because calendar pages tend to be among the heavier, more complex requests, they tend to stress limits.

The key is **systematic debugging**: logs → minimal setup → query profiling → resource tuning → proxy checks → host support.

## HTTP 503 / “Service Unavailable” Errors

When your WordPress site shows a **503 Service Unavailable** error, it means the server (or some part of the stack) is currently **unable to handle the request**. Unlike a 500 error, it usually implies a **temporary** condition (overload, maintenance, resource exhaustion) rather than a broken script.

The HTTP 503 status code means the server isn’t ready to handle your request, often because:

- It’s under maintenance (some administrators purposefully return 503 during updates or deploys).
- It’s overloaded, or some resource (CPU, memory, processes) is exhausted.
- A plugin, theme, or custom code is misbehaving and exhausting resources, triggering server failure.

Importantly, a 503 is a **server-side** error. It doesn’t inherently tell you *which* component failed. That’s why you need to troubleshoot.

### Common Causes

These are frequent culprits behind 503 errors in WP environments:

1. **Plugin conflicts / resource-intensive plugins**
A poorly coded or heavy plugin may consume too many resources or trigger fatal errors. Many guides suggest deactivating all plugins to isolate the issue.
2. **Theme issues / custom code in theme**
The active theme (or functions in it) might introduce logic that fails or overloads the server. Switching to a default theme is a common troubleshooting step.
3. **Server resource limitations / overload**
Shared hosting often imposes memory, process, or CPU limits. If your site’s demands exceed those, you’ll get 503 errors.
4. **Excessive processes / background jobs / cron tasks**
Too many concurrent tasks (cron, background operations, long-running queries) can overwhelm the server.
5. **Problems with caching, CDN, or server proxy layers**
Sometimes caching / CDN / reverse proxy misconfiguration can lead to 503 responses. Disabling or bypassing them helps isolate whether the issue lies there.
6. **Errors in PHP version / server configuration**
Upgrades, misconfigured PHP settings may cause 503.
7. **Third-party plugin or service causing fatal errors**
In some cases, plugins can cause 503s when activated.

### Diagnosing a 503 Error

#### 1. Check Status & Server / Host

- Ask the host to inspect server logs to see if resource limits or fatal errors appear.

#### 2. Enable WP Debug / Logging

Add to 
```
wp-config.php
```

:

```
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

This makes WordPress write errors to 
```
wp-content/debug.log
```

 without exposing them publicly.

#### 3. Deactivate All Plugins

- Disable all plugins.
- Check whether the site returns.
- If yes, enable plugins one by one (or in small groups) to find the culprit plugin.

#### 4. Switch Theme to Default

If disabling plugins doesn’t resolve it:

- Enable one of the WP default themes, such as Twenty Twenty-Five.
- Then test the site. If it returns, the issue was in your theme.

#### 5. Temporarily Disable CDN / Caching / Reverse Proxy

If you use a CDN or caching layer (Cloudflare, etc.):

- Pause or disable it temporarily.
- Purge caches.
- Test if the site comes back.
- If it does, the issue is in caching / proxy layer or the interface between it and your origin server.

#### 6. Inspect Background Work / Cron / Processes

If everything above fails:

- Check running processes on server.
- Inspect scheduled WP cron jobs (via plugin like [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/)).
- Check if a heavy, long query or loop is saturating the server.

#### 7. Review PHP / Server Configuration & Versions

Check for mismatches or misconfiguration:

- Ensure PHP version is supported and settings like 
```
memory_limit
```

, 
```
max_execution_time
```

 are adequate.
- If recently upgraded PHP, verify all modules and settings were enabled correctly.

### How to Fix / Resolve the 503 Error

Once you isolate or suspect a cause, try these solutions:

- **Remove or replace the faulty plugin**
If a particular plugin caused it, deactivate or uninstall it, and look for alternatives.
- **Fix or remove problematic theme code**
If the theme was the cause, either correct the code or switch to a more stable theme.
- **Increase server resources**
Ask your host to allocate more memory, CPU, processes, or move to a higher tier. Many 503s are caused by shared hosting hitting limits.
- **Fix background tasks / limit them**
Reduce how many concurrent tasks run, optimize cron jobs, disable heavy scheduled tasks or plugins that do many background operations.
- **Correct CDN / caching configuration**
Ensure proxy / caching layers pass through appropriate headers, don’t block origin, or misinterpret the site’s backend responses.
- **Adjust PHP / server settings**
Increase 
```
memory_limit
```

 and 
```
max_execution_time
```

.
- **Restore from backup (if necessary)**
If recent changes caused 503s (bad update, broken custom code), restore to a known working version.
- **Ask hosting support / sysadmin help**
If you can’t find the cause, host support can examine deeper logs, monitor process usage, or detect server-level issues.

## Errors in Google Search Console

5xx errors in Google Search Console don’t always mean your site is currently broken. Search Console logs errors at the time Google crawled the page, which may have been during a brief outage. Before troubleshooting, visit each flagged URL directly. If the pages load correctly now, the errors are simply outdated — Google will update its records on the next crawl. If the pages are still failing, work through the diagnostic steps above.

---

