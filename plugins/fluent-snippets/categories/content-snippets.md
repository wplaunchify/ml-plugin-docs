# Content Snippets

*Category from Fluent Snippets documentation*

---

## Content (PHP + HTML) snippets

**Source:** [https://fluentsnippets.com/docs/content-snippets](https://fluentsnippets.com/docs/content-snippets)

A **Content** snippet outputs something. It is the type to reach for when you want a tracking tag in
the header, a promo bar under the opening body tag, a disclaimer after every post, or a reusable
block you place with a shortcode.

## Writing one

Write HTML, and drop into PHP with 
```
<?php … ?>
```

 wherever you need it. Unlike a Functions snippet,
there is no opening tag to omit; the snippet starts in HTML mode.

```
<div class="ship-bar">
    Free shipping on orders over $50, today only.
</div>
```

Mixed:

```
<div class="greeting">
    <?php if ( is_user_logged_in() ) : ?>
        Welcome back, <?php echo esc_html( wp_get_current_user()->display_name ); ?>.
    <?php else : ?>
        <a href="<?php echo esc_url( wp_login_url() ); ?>">Sign in</a>
    <?php endif; ?>
</div>
```

Escape anything dynamic, exactly as you would in a theme template. 
```
esc_html()
```

, 
```
esc_attr()
```

 and

```
esc_url()
```

 are all available.

## Run locations

| Location | WordPress hook | Where the output lands |
| --- | --- | --- |
| Site Wide Header | wp_head | Inside <head> on the front end |
| Site Wide Body Open | wp_body_open | Immediately after the opening <body> tag |
| Site Wide Footer | wp_footer | Just before </body> on the front end |
| Before Content | the_content | Prepended to the post content |
| After Content | the_content | Appended to the post content |
| Shortcode | none | Only where you place the shortcode |
All of the site-wide locations are front end only. For output in the admin, use a
[Scripts snippet](/docs/js-snippets) with an admin run location, or a
[Functions snippet](/docs/functions-snippets) hooked to an admin action.

### Before and After Content

These two attach to the 
```
the_content
```

 filter, and only fire when all of the following are true:

- the request is for a single post, page or custom post type (
```
is_singular()
```

)
- the filter is running inside the main loop (
```
in_the_loop()
```

 and 
```
is_main_query()
```

)

That combination is deliberate. Without it, your markup would also appear in excerpt widgets, related
post blocks, RSS output and anywhere else a theme or plugin runs 
```
the_content
```

 on secondary content.

Output is captured and concatenated onto the content. If your snippet prints nothing, the content is
returned untouched.

### Shortcode

Setting the run location to **Shortcode** means the snippet never runs on its own. It runs where you
place the shortcode. This has its own page: [Shortcodes](/docs/shortcodes).

## Priority

Priority applies to the underlying hook, so it controls the order of two snippets on the same
location, and the order relative to other plugins on 
```
wp_head
```

, 
```
wp_footer
```

 or 
```
the_content
```

. Lower
runs first. See [Priority](/docs/snippet-types#priority).

For **Before Content** in particular, priority interacts with everything else filtering

```
the_content
```

. 
```
wpautop
```

 runs at 10, so a snippet at priority 9 sees raw content and one at 11 sees
paragraph-wrapped content.

## Examples

**Google Analytics 4, Site Wide Header**

```
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

**Google Tag Manager noscript, Site Wide Body Open**

```
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
```

**A newsletter prompt after every blog post, After Content**

```
<?php if ( 'post' === get_post_type() ) : ?>
    <aside class="post-cta">
        <h3>Liked this?</h3>
        <p>Get the next one by email.</p>
        <?php echo do_shortcode( '[my_signup_form]' ); ?>
    </aside>
<?php endif; ?>
```

Pair that with [conditional logic](/docs/conditional-logic) instead of the 
```
if
```

 when the rule is
something the condition builder already covers, and keep PHP for logic it does not.

**JSON-LD schema, Site Wide Header**

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "<?php echo esc_js( get_bloginfo( 'name' ) ); ?>",
  "url": "<?php echo esc_url( home_url( '/' ) ); ?>"
}
</script>
```

   Something wrong or missing on this page? [Open an issue on GitHub ↗](https://github.com/WPManageNinja/easy-code-manager/issues)

---

