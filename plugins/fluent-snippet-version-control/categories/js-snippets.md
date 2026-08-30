# Js Snippets

*Category from Fluent Snippet Version Control documentation*

---

## Scripts (JS) snippets

**Source:** [https://fluentsnippets.com/docs/js-snippets](https://fluentsnippets.com/docs/js-snippets)

A **Scripts** snippet holds JavaScript. Use it for third-party embeds, small interactions, and
anything you would otherwise paste into a header-and-footer plugin.

## Writing one

Write the JavaScript only. FluentSnippets wraps it in a 
```
<script>
```

 element, and refuses to save a
snippet that starts with its own 
```
<script>
```

 tag.

```
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
```

Code that *mentions* a script tag is fine. 
```
document.write('<script src="…"></script>')
```

 saves and
works: the closing tag is escaped on output so it cannot terminate the surrounding block early, which
is invisible to JavaScript.

NOTE
  If the thing you are pasting is an HTML block rather than JavaScript (a tag manager container, an 
```
<iframe>
```

, a 
```
<noscript>
```

 fallback), use a [Content snippet](/docs/content-snippets) instead. Scripts snippets are for the JavaScript itself.

## Run locations

| Location | WordPress hook | Where it prints |
| --- | --- | --- |
| Site Wide Header | wp_head | Front-end <head> |
| Site Wide Footer | wp_footer | Front end, before </body> |
| Admin Area Header | admin_head | Admin <head> |
| Admin Area Footer | admin_footer | Admin, before </body> |
Prefer a footer location unless the script has to run before the page renders. Scripts in the header
block parsing; scripts in the footer do not, and by then the DOM exists so you can skip a

```
DOMContentLoaded
```

 wrapper.

## Load as Script File

Like Styles snippets, Scripts snippets can be served as a real file instead of printed inline. Tick
**Load as Stylesheet File** in the sidebar (the label is shared between the two types) and the code
is written to 
```
wp-content/fluent-snippet-storage/cached/
```

 as a 
```
.js
```

 file and enqueued with

```
wp_enqueue_script()
```

.

Two things change when you do:

- The script is enqueued rather than printed, so it moves to the 
```
wp_enqueue_scripts
```

 or

```
admin_enqueue_scripts
```

 stage. Header locations enqueue in the head, footer locations in the
footer.
- It gets a version string from the snippet’s last-updated time, so editing the snippet busts the
browser cache.

Inline is the better default for a few lines. A file is better for anything long, or reused across
every page, because it can be cached.

## No jQuery by default

WordPress does not load jQuery on the front end of every theme, and an enqueued snippet file declares
no dependencies, so 
```
jQuery
```

 may be undefined when your snippet runs. Either write plain JavaScript,
or add the dependency yourself from a [Functions snippet](/docs/functions-snippets):

```
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script( 'jquery' );
} );
```

## Examples

**Meta Pixel, Site Wide Header**

```
!function(f,b,e,v,n,t,s){/* … pixel bootstrap … */}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '000000000000000');
fbq('track', 'PageView');
```

**Open external links in a new tab, Site Wide Footer**

```
const host = window.location.hostname;
document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (link.hostname !== host) {
        link.target = '_blank';
        link.rel = 'noopener';
    }
});
```

**A reminder in the admin, Admin Area Footer**

```
if (window.location.search.includes('page=my-plugin')) {
    console.info('Staging site. Do not run imports here.');
}
```

Pair that with [conditional logic](/docs/conditional-logic) on a URL condition rather than checking
the URL in JavaScript, where the rule fits.

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

